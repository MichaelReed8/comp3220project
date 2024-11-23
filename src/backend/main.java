public class main {
    public static void main(String[] args) throws Exception {
        CSVReader reader = new CSVReader("realtor-data.csv");

        for(String item : reader.getAttributes()) {
            System.out.println(item);
        }
    }
}