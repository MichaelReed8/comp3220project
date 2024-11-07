#We'll use FastAPI to connect the backend database to the frontend

class City:
    def __init__(self, zipcodes, location, name):
        self.zipcodes = zipcodes
        self.location = location
        self.name = name
    
    def getZipcodes(self):
        return self.zipcodes
    
class State:
    def __init__(self, cities, name):
        self.cities = cities
        self.name = name
    
    def getCities(self):
        return self.cities
    
class ZIP:
    def __init__(self, houses, zipcode):
        self.houses = houses
        self.zipcode = zipcode

        #convert zipcode to self.location, maybe this resource https://geocoder.ca/?premium_api=1
    def getHouses(self):
        return self.houses
    
class House:
    def __init__(self, metadata):
        self.metadata = metadata