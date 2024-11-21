import java.util.ArrayList;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.*;

public class Housing {

    public class House {
        public String metadata;
    }

    public class ZIP {
        private ArrayList<House> houses; 
        private String zipcode;
    }

    public class City {
        private ArrayList<ZIP> zipcodes; 
        private String name;
    }

    public class State {
        private ArrayList<City> cities;
        private String name;
    }

    public class Location {
        public float Latitude;
        public float Longitude;
    }
}


