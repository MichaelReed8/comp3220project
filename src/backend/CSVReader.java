import java.io.BufferedReader;
import java.io.FileReader;

public class CSVReader {
    private BufferedReader reader;
    private String[] attributes;

    public CSVReader(String filename) throws Exception {
        reader = new BufferedReader(new FileReader(filename));

        String attributeline;

        if((attributeline = reader.readLine()) != null) {
            attributes = attributeline.split(",");
        } else {
            //TODO: perhaps give exception if file has no attribute line
        }
    }

    public String[] readLine() throws Exception {
        String line;
        if((line = reader.readLine()) != null) {
            String[] arr = line.split(",");
            return arr;
        } else {
            return null;
        }
    }

    public String[] getAttributes() {
        return attributes;
    }
}