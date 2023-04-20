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
    print(ug_specialisation)    
    # return ug_specialisation
    
            
    


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
    print(core_unit)      
    # return core_unit
    

def getUnitDetails(unit):
    targetURL = 'http://www.monash.edu.au/pubs/handbooks/units/' + unit + '.html'
    driver = webdriver.Chrome()
    driver.get(targetURL)
    content = driver.page_source.encode('utf-8').strip()
    handbook_soup = BeautifulSoup(content, "lxml")

    unit_details = {"overview": "", "offerings": {}, "prerequisiste":{}}

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
        print("Offerings:")
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
 
            # Retreive attributes
            unit_details["offerings"][offering_id] = {
                    "location": location,
                    "teaching_period": teaching_period,
                    "Attendance_mode": attendace_mode
                }

    
    requisites_container = handbook_soup.find("div", {"data-menu-title": "Requisites"})
    requisites_headers = requisites_container.find_all("div", {"role": "listitem"})


    requisites_group = requisites_container.find("div", class_=lambda x: x and "RequisiteGroup" in x)
    print('Container:')
    print(requisites_container.text.strip())
    print('Header:')
    
    requisites_headers = requisites_container.find_all("div", {"role": "listitem"})
    for items in requisites_headers:    # CODE BREAKS IF PROHIBITION OR PRE-REQ HAS MORE THAN 1 REQUISITE GROUP 
        list_items = items.text.strip()
        if list_items.startswith("Prerequisite"):
            print("Contains Prerequisite")
            if requisites_group:
                print("Group Exits!")
                
                related_units = requisites_group.find_all("div", class_=lambda x: x and "StyledAILinkHeaderSection__content1" in x)   # Grabs the unit code 
                relationship = requisites_group.find("span").text.strip()       # Grabs the relationship

                if relationship == "OR":
                    print("Reached OR")
                    # unit_details["prerequisiste"] = {

                    # }
                elif relationship == "AND":
                    print("Reached AND")
                else:
                    print("Neither OR, AND relationship exists!")


                print(related_units)
                print(relationship)
                print(list_items)

            # else:
            #     print("Group Doesnt Exist!")
        # if list_items.startswith("Prohibition"):
        #     print("Contains Prohibition")
        #     print("Prohibition")
        #     print(items.text.strip())
    # print(requisites_group.text.strip())


    
    # unit_details_json = json.dumps(unit_details)
                

    driver.quit()

    # return (unit_details_json)                  

    


getUnitDetails("ENG2005")


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
    #     "prerequisiste":{
    #           OR:{
    #                ENG1014,
    #                ENG1060
    #       }
    #           AND:{
    #                ENG1005
    #       }
    #       }
    #     "prohibiton":{{OR},{AND}},
    #   }
    # }
    # 