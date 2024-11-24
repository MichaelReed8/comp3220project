import java.util.ArrayList;
import java.util.HashSet;
import java.util.HashMap;
import java.util.Set;
import java.util.Map;
import java.io.*;
import org.json.JSONObject;

public class Housing {

    public Map<String, State> states;

    public Housing() {
        states = new HashMap<String, State>();
    }

    public class House {
        public JSONObject metadata;

        public House(JSONObject metadata) {
            this.metadata = metadata;
        }
    }

    public class ZIP {
        private Set<House> houses;
        private String zipcode;

        public ZIP(String zipcode) {
            this.zipcode = zipcode;

            houses = new HashSet<House>();
        }

        public void add(House newhouse) {
            houses.add(newhouse);
        }
    }

    public class City {
        private Map<String, ZIP> zipcodes; 
        private String name;

        public City(String name) {
            this.name = name;

            zipcodes = new HashMap<String, ZIP>();
        }

        public void add(ZIP newzip) {
            zipcodes.put(newzip.zipcode, newzip);
        }
    }

    public class State {
        private Map<String, City> cities;
        public String name;

        public State(String name) {
            this.name = name;

            cities = new HashMap<String, City>();
        }

        public void add(City newcity) {
            cities.put(newcity.name, newcity);
        }
    }

    public class Location {
        public float Latitude;
        public float Longitude;
    }

    public void addState(State newstate) {
        states.put(newstate.name, newstate);
    }

    public void MountFromCSV(String filename) throws Exception {
        CSVReader reader = new CSVReader(filename);

        String[] attributes = reader.getAttributes();

        int stateIndex = -1;
        int cityIndex = -1;
        int zipIndex = -1;

        for(int i = 0; i < attributes.length; i++) {
            if(attributes[i].equals("state")) {
                stateIndex = i;
            }
            if(attributes[i].equals("city")) {
                cityIndex = i;
            }
            if(attributes[i].equals("zip_code")) {
                zipIndex = i;
            }
        }

        if(cityIndex < 0 || zipIndex < 0 || stateIndex < 0) {
            //TODO: throw exception
        }

        String[] line;

        while((line = reader.readLine()) != null) {
            String stateName = line[stateIndex];
            String cityName = line[cityIndex];
            String zipcode = line[zipIndex];

            if(!states.containsKey(stateName)) {
                State newstate = new State(stateName);
                states.put(stateName, newstate);
            }

            State state = states.get(stateName);
            if(!state.cities.containsKey(cityName)) {
                City newcity = new City(cityName);
                state.cities.put(cityName, newcity);
            }

            City city = state.cities.get(cityName);
            if(!city.zipcodes.containsKey(zipcode)) {
                ZIP newzip = new ZIP(zipcode);
                city.zipcodes.put(zipcode, newzip);
            }

            ZIP zip = city.zipcodes.get(zipcode);

            JSONObject house = new JSONObject();
            //TODO: add lines metadata to the house
            for(int i = 0; i < attributes.length; i++) {
                house.put(attributes[i], line[i]);
            }
            zip.add(new House(house));
        }
    }
}


