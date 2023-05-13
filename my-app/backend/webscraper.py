from bs4 import BeautifulSoup
from selenium import webdriver
import json

class Webscraper:
    def __init__(self):
        self.driver = webdriver.Chrome()

    def __del__(self):
        self.driver.quit()

    def get_page_content(self, url):
        self.driver.get(url)
        return BeautifulSoup(self.driver.page_source.encode('utf-8').strip(), "lxml")

    def extract_undergrad_specialisation_data(self, raw_text):
        spec_code_CP = raw_text.split('arrow_forward')[1].split(' ')[0]
        spec_code = spec_code_CP[:-3]
        name = raw_text.split("CP")[1]
        credit_points = spec_code_CP[-3:]
        return {"code": spec_code, "credit points": credit_points, "name": name}

    def extract_unit_data(self, raw_text):
        unit_code_CP = raw_text.split()[0].split('arrow_forward')[1][:8]
        unit_code = unit_code_CP[:-1]
        name = raw_text.split("CP")[1]
        credit_points = unit_code_CP[-1]
        unit_details = self.get_unit_details(unit_code)
        return {"code": unit_code, "credit points": credit_points, "name": name, "unit_details": unit_details}


    def get_ug_specialisation(self):
        url = 'https://handbook.monash.edu/2023/courses/E3001'
        soup = self.get_page_content(url)
        spec_elements = soup.find_all("div", class_="css-m23545-Links--LinkGroupWrapper e1t6s54p1", filter="ug_specialisation")
        specialisations = [self.extract_undergrad_specialisation_data(e.text.strip()) for e in spec_elements]

        for spec in specialisations:
            spec_code = spec["code"]
            core_units = self.get_core_units(spec_code)
            spec["core_units"] = core_units
            
            # Export to JSON
            with open(f'{spec_code}.json', 'w') as json_file:
                json.dump(spec, json_file, indent=4)

        return specialisations

    def get_core_units(self, unit):
        url = 'https://handbook.monash.edu/2023/aos/' + unit  + '.html'
        soup = self.get_page_content(url)
        unit_elements = soup.find_all("div", class_="css-m23545-Links--LinkGroupWrapper e1t6s54p1", filter="subject")
        return [self.extract_unit_data(e.text.strip()) for e in unit_elements]


    def get_driver_content(self, url):
        driver = webdriver.Chrome()
        driver.get(url)
        content = driver.page_source.encode('utf-8').strip()
        soup = BeautifulSoup(content, "lxml")
        driver.quit()
        return soup

    def get_offerings(self, soup):
        offerings_container = soup.find("div", {"data-menu-title": "Offerings"})
        offerings_headers = offerings_container.find_all("div", {"role": "listitem"})
        offerings = {}
        for offering_header in offerings_headers:
            offering_info = offering_header.text.strip()
            
            location_start = offering_info.find("Location:") + len("Location:")
            location_end = offering_info.find(" ", location_start)
            teaching_start = offering_info.find("Teaching period:") + len("Teaching period:")
            teaching_end = offering_info.find("Attendance", teaching_start)
            attendace_sub = offering_info.find("Attendance mode:") + len("Attendance mode:")
            
            offering_id = offering_info.split("keyboard_arrow_down")[0]
            location = offering_info[location_start:location_end].split()
            teaching_sub = offering_info[teaching_start:teaching_end].strip()
            teaching_period = " ".join(teaching_sub.split())
            attendace_mode = offering_info[attendace_sub:].split()
 
            offerings[offering_id] = {
                    "location": location,
                    "teaching_period": teaching_period,
                    "Attendance_mode": attendace_mode
                }
        return {"offerings": offerings}

    def get_requisites(self, soup, requisite_type):
        requisites_container = soup.find("div", {"data-menu-title": "Requisites"}) 
        requisites_headers = requisites_container.find_all("div", {"role": "listitem"}) 

        requisite_group = None
        requisite_element = None

        for div in requisites_headers:
            text = div.text
            if requisite_type in text:
                requisite_element = div

        if requisite_element is not None:
            requisite_group = requisite_element.find("div", class_=lambda x: x and "RequisiteGroup" in x)

        badge_element = None  # Default values

        if requisite_element != None:
            badge_element = requisite_element.find("span", class_=lambda x: x and "Badge" in x)

        requisites = {"OR": [], "AND": []}

        if requisite_element is not None:
            for child in requisite_element:    
                if requisite_group is not None:
                    related_units = requisite_group.find_all("div", class_=lambda x: x and "StyledAILinkHeaderSection__content1" in x)   
                    relationship = requisite_group.find("span").text.strip()       

                    if relationship == "OR":
                        units = [unit.text.strip() for unit in related_units]
                        requisites["OR"] = units

                    elif relationship == "AND":
                        units = [unit.text.strip() for unit in related_units]
                        requisites["AND"] = units

                else:
                    unit_code_divs = requisite_element.find_all("div", class_=lambda x: x and "StyledAILinkHeaderSection__content1" in x)
                    span_tags = requisite_element.find_all("span")

                    if unit_code_divs:
                        unit_code = unit_code_divs[-1].text.strip()

                    if span_tags:
                        badge = span_tags[-1].text.strip()
                        if badge == "OR":
                            requisites["OR"].append(unit_code)
                        if badge == "AND":
                            requisites["AND"].append(unit_code)

                if badge_element is not None and not requisite_group:
                    units = child.find_all("div", class_=lambda x: x and "StyledAILinkHeaderSection__content1" in x) 
                    units = [unit.text.strip() for unit in units]
                    requisites["OR"] = units
                    
                if not badge_element and not requisite_group:
                    units = child.find_all("div", class_=lambda x: x and "StyledAILinkHeaderSection__content1" in x) 
                    units = [unit.text.strip() for unit in units]
                    requisites["AND"] = units
        return {requisite_type.lower(): requisites}

    def get_rules(self, soup):
        try:
            rules_container = soup.find("div", {"data-menu-title": "Rules"})
        except AttributeError:
            rules_container = None

        rules = None
        if rules_container:
            rules_text = rules_container.get_text()
            substring = "keyboard_arrow_down"
            index = rules_text.find(substring)
            if index != -1:  # Make sure the substring was found
                start_position = index + len(substring)
                rules = rules_text[start_position:]
        return {"rules": rules}

    def get_unit_details(self, unit):
        url = 'http://www.monash.edu.au/pubs/handbooks/units/' + unit + '.html'
        soup = self.get_driver_content(url)
        unit_details = {}
        
        offerings = self.get_offerings(soup)
        prerequisites = self.get_requisites(soup, "Prerequisites")
        corequisites = self.get_requisites(soup, "Corequisites")
        prohibitions = self.get_requisites(soup, "Prohibitions")
        rules = self.get_rules(soup)
        
        unit_details.update(offerings)
        unit_details.update(prerequisites)
        unit_details.update(corequisites)
        unit_details.update(prohibitions)
        unit_details.update(rules)
        
        return unit_details


MonashHandbook = Webscraper()
specialisations = MonashHandbook.get_ug_specialisation()
