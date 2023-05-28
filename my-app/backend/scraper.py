from bs4 import BeautifulSoup
from selenium import webdriver
import json
from lxml import html
import requests


#.append method to add to array
def get_ug_specialisation():
    handbook_url = 'https://handbook.monash.edu/2023/courses/E3001'
    driver = webdriver.Chrome()
    driver.get(handbook_url)
    content = driver.page_source.encode('utf-8').strip()
    handbook_soup = BeautifulSoup(content,"lxml")
    spec = handbook_soup.find_all("div",class_ = "css-m23545-Links--LinkGroupWrapper e1t6s54p1", filter="ug_specialisation")
    
    ug_specialisation =[]

    for stat in spec:
        html_raw = stat.text.strip()
        spec_code_CP =html_raw.split('arrow_forward')[1].split(' ')[0]
        spec_code = spec_code_CP[:-3]
        name = html_raw.split("CP")[1]
        credit_points = spec_code_CP[-3:]
        # Creating a dictionary object with the extracted values
        spec_data = {"code": spec_code, "credit points": credit_points, "name": name}
        # Converting dictionary object -> JSON string -> JSON object
        json_data = json.loads(json.dumps(spec_data))
        ug_specialisation.append(json_data)

def getCoreUnits(unit):
    # self, spec_code
    # Has to take in spec_code as inputs from get_ug_specialisation
    targetURL = 'https://handbook.monash.edu/2023/aos/' + unit  + '.html'
    driver = webdriver.Chrome()
    driver.get(targetURL)
    content = driver.page_source.encode('utf-8').strip()
    handbook_soup = BeautifulSoup(content,"lxml")
    subject = handbook_soup.find_all("div",class_ = "css-m23545-Links--LinkGroupWrapper e1t6s54p1", filter="subject")

    core_unit =[]

    for stat in subject:
        html_raw = stat.text.strip()
        unit_code_CP =html_raw.split()[0].split('arrow_forward')[1][:8]
        unit_code = unit_code_CP[:-1]
        name = html_raw.split("CP")[1]
        credit_points = unit_code_CP[-1]
        # Creating a dictionary object with the extracted values
        spec_data = {"code": unit_code, "credit points": credit_points, "name": name, "unit_details":[]}
        # Converting dictionary object -> JSON string -> JSON object
        json_data = json.loads(json.dumps(spec_data))
        core_unit.append(json_data)
    # return core_unit
    

def getUnitDetails(unit):
    targetURL = 'http://www.monash.edu.au/pubs/handbooks/units/' + unit + '.html'
    driver = webdriver.Chrome()
    driver.get(targetURL)
    content = driver.page_source.encode('utf-8').strip()
    handbook_soup = BeautifulSoup(content, "lxml")

    unit_details = {"overview": "", "offerings": {}, "prerequisites":{"OR": [], "AND": []}, "prohibitions":{}, "rule:":None}

    # Find overview
    overview = handbook_soup.find("div", id="Overview")
    if overview:
        unit_details["overview"] = overview.text.strip()
        # print("Overview:")
        # print(overview.text.strip())

    # Find offerings
    offerings_container = handbook_soup.find("div", {"data-menu-title": "Offerings"})
    offerings_headers = offerings_container.find_all("div", {"role": "listitem"})
    if offerings_headers:
        for offering_header in offerings_headers:
            offering_info = offering_header.text.strip()
            
            # Initialise substrings to extract information
            location_start = offering_info.find("Location:") + len("Location:")
            location_end = offering_info.find(" ", location_start)
            teaching_start = offering_info.find("Teaching period:") + len("Teaching period:")
            teaching_end = offering_info.find("Attendance", teaching_start)
            attendace_sub = offering_info.find("Attendance mode:") + len("Attendance mode:")
            
            # Retreive attributes
            offering_id = offering_info.split("keyboard_arrow_down")[0]
            location = offering_info[location_start:location_end].split()
            
            teaching_sub = offering_info[teaching_start:teaching_end].strip()
            teaching_period = " ".join(teaching_sub.split())
            attendace_mode = offering_info[attendace_sub:].split()
 
            # Push attributes to Json Object
            unit_details["offerings"][offering_id] = {
                    "location": location,
                    "teaching_period": teaching_period,
                    "Attendance_mode": attendace_mode
                }

    
    requisites_container = handbook_soup.find("div", {"data-menu-title": "Requisites"}) #Outer div --> scrapes all the divs under Requisites
    requisites_headers = requisites_container.find_all("div", {"role": "listitem"}) 

    requisites_group_prerequisite = requisites_group_prohibition = None

    Prerequisite = None
    Prohibition = None

    for div in requisites_headers:
        text = div.text
        if "Prerequisite" in text:
            Prerequisite = div
        elif "Prohibition" in text:
            Prohibition = div

    if Prerequisite is not None:
        requisites_group_prerequisite = Prerequisite.find("div", class_=lambda x: x and "RequisiteGroup" in x)
    if Prohibition is not None:
        requisites_group_prohibition = Prohibition.find("div", class_=lambda x: x and "RequisiteGroup" in x)  
  

    badge_pre = badge_pro = None  # Default values

    if Prerequisite != None:
        badge_pre = Prerequisite.find("span", class_=lambda x: x and "Badge" in x)
    if Prohibition != None:
        badge_pro = Prohibition.find("span", class_=lambda x: x and "Badge" in x)

    if Prerequisite is not None:
        for child in Prerequisite:    # CODE BREAKS IF PROHIBITION OR PRE-REQ HAS MORE THAN 1 REQUISITE GROUP 
            if requisites_group_prerequisite is not None:    #DONE! - executes code if a requisite group exists
                related_units = requisites_group_prerequisite.find_all("div", class_=lambda x: x and "StyledAILinkHeaderSection__content1" in x)   # Grabs the unit code  StyledLinkGroup 
                relationship = requisites_group_prerequisite.find("span").text.strip()       # Grabs the relationship

                if relationship == "OR":    #DONE!
                    prerequisites = [unit.text.strip() for unit in related_units]
                    unit_details["prerequisites"]["OR"] = prerequisites

                elif relationship == "AND": #NEED TO VERIFY!
                    prerequisites = [unit.text.strip() for unit in related_units]
                    unit_details["prerequisites"]["AND"] = prerequisites
                    
                else:
                    print("Neither OR, AND relationship exists!")   #NOT SURE IF THERE IS EVER A SCENARIO FOR THIS
            
            # Add code to retrieve units outside requsitie group.
            
                unit_code_divs = Prerequisite.find_all("div", class_=lambda x: x and "StyledAILinkHeaderSection__content1" in x)
                span_tags = Prerequisite.find_all("span")

                # If there are any matches, get the text of the last one -> essentially ignoring the requisite group
                if unit_code_divs:
                    unit_code = unit_code_divs[-1].text.strip()

                # If there are any matches, get the text of the last one
                if span_tags:
                    badge = span_tags[-1].text.strip()
                    if badge == "OR":
                        unit_details["prerequisites"]["OR"].append(unit_code)
                    if badge == "AND":
                        unit_details["prerequisites"]["AND"].append(unit_code)

            # Units with the badge -> OR relationship
            if badge_pre is not None and not requisites_group_prerequisite:
                y = child.find_all("div", class_=lambda x: x and "StyledAILinkHeaderSection__content1" in x) 
                yPrint = [unit.text.strip() for unit in y]
                unit_details["prerequisites"]["OR"] = yPrint
                
            if not badge_pre and not requisites_group_prerequisite:
                # Units without the pill -> AND relationship
                x = child.find_all("div", class_=lambda x: x and "StyledAILinkHeaderSection__content1" in x) 
                xPrint = [unit.text.strip() for unit in x]
                unit_details["prerequisites"]["AND"] = xPrint

    if Prohibition is not None:
        for child in Prohibition:
            if requisites_group_prohibition is not None:    #DONE! - executes code if a requisite group exists
                related_units = requisites_group_prohibition.find_all("div", class_=lambda x: x and "StyledAILinkHeaderSection__content1" in x)   # Grabs the unit code  StyledLinkGroup 
                relationship = requisites_group_prohibition.find("span").text.strip()       # Grabs the relationship

                if relationship == "OR":    #DONE!
                    prohibition = [unit.text.strip() for unit in related_units]
                    unit_details["prohibitions"]["OR"] = prohibition

                elif relationship == "AND": #NEED TO VERIFY!
                    prohibition = [unit.text.strip() for unit in related_units]
                    unit_details["prohibitions"]["AND"] = prohibition
                    
                else:
                    print("Neither OR, AND relationship exists!")   #NOT SURE IF THERE IS EVER A SCENARIO FOR THIS
            
            # Add code to retrieve units outside requsitie group.
            
                unit_code_divs = Prohibition.find_all("div", class_=lambda x: x and "StyledAILinkHeaderSection__content1" in x)
                span_tags = Prohibition.find_all("span")

                # If there are any matches, get the text of the last one -> essentially ignoring the requisite group
                if unit_code_divs:
                    unit_code = unit_code_divs[-1].text.strip()

                # If there are any matches, get the text of the last one
                if span_tags:
                    badge = span_tags[-1].text.strip()
                    if badge == "OR":
                        unit_details["prohibitions"]["OR"].append(unit_code)
                    if badge == "AND":
                        unit_details["prohibitions"]["AND"].append(unit_code)
            # Units with the badge -> OR relationship
            if badge_pro is not None and not requisites_group_prohibition:
                y = child.find_all("div", class_=lambda x: x and "StyledAILinkHeaderSection__content1" in x) 
                yPrint = [unit.text.strip() for unit in y]
                unit_details["prohibitions"]["OR"] = yPrint
                
            if not badge_pro and not requisites_group_prohibition:
                # Units without the pill -> AND relationship
                x = child.find_all("div", class_=lambda x: x and "StyledAILinkHeaderSection__content1" in x) 
                xPrint = [unit.text.strip() for unit in x]
                unit_details["prohibitions"]["AND"] = xPrint
  
   #Find Rules
    try:
        rules_container = handbook_soup.find("div", {"data-menu-title": "Rules"})

    except AttributeError:
        rules_container = None

    if rules_container:
        rules_text = rules_container.get_text()
        substring = "keyboard_arrow_down"
        index = rules_text.find(substring)
        if index != -1:  # Make sure the substring was found
            start_position = index + len(substring)
            rules = rules_text[start_position:]
            unit_details["rule"] = rules        
    
    print("unit_details",unit_details)            

    driver.quit()

    with open('data.json', 'w') as f:
        json.dump(unit_details, f)

    # return (unit_details_json)                  

    


getUnitDetails("ECE2111")


# get_ug_specialisation()
# getCoreUnits('AEROENG04')
 
    # {"code":__,
    #  "credit points":__,
    #  "name":__,
    #  "details":
    #    {"overview": ,
        # "offerings": [    
        #       S1-01-Clayton-On-Campus:{
        #           location:Clayton,
        #           teaching_period: November teaching period,
        #           Attendance_mode: On-campus},
        #           },   
        #       S2-01-Clayton-On-Campus:{
        #           location:Clayton,
        #           teaching_period: Second semester,
        #           Attendance_mode: On-campus},
        #           },
        #   ]
        # "prerequisiste":{
        #       OR:{
        #            ENG1014,
        #            ENG1060
        #   }
        #       AND:{
        #            ENG1005
        #   }
        #   }
    #     "prohibiton":{{OR},{AND}},
    #   }
    # }
    # 