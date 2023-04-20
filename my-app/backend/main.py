from scraper import get_ug_specialisation,getCoreUnits,getUnitDetails


def main():
    specialisation = get_ug_specialisation()
    print(specialisation)

    for x in specialisation:
        # print('success',x["code"])
        core_units = getCoreUnits(x["code"])
        print(getUnitDetails(core_units["code"]))
        # core_units["info"].append(getUnitDetails(core_units["code"]))
        print(core_units)

if __name__ =="__main__":
    main()
    

# arrow_forwardAEROENG04144 CPAerospace engineering