import java.io.*;

public class main {
    public static void main(String[] args) throws Exception {

        Housing USA_Housing = new Housing();

        USA_Housing.MountFromCSV("realtor-data.csv");
    }
}