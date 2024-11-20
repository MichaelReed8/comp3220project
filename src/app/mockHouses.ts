import House from "../classes/House";
import Location from "../classes/Location";
import Photo from "../classes/Photo";
import Realtor from "../classes/Realtor";

// Instantiate the shared Realtor
const realtor = new Realtor(101, "Jane Doe", "jane.doe@example.com", "555-987-6543", "RL123456");

// Mock locations with longitude and latitude
const location1 = new Location(1,-89.650373, 39.781721) ;
const location2 =new Location( 2, -121.761733, 38.544907);

// Mock data for houses
export const mockHouses: House[] = [
  new House(
    1,
    location1,
    "Metadata for House 1",
    "123 Maple Street",
    350000,
    4,
    3,
    0.5,
    "Traditional",
    true,
    "For Sale",
    2,
    new Date("2024-11-01"),
    "Residential",
    realtor,
    new Date("2024-12-01"),
    false,
    [new Photo(1, "/ReferenceImage1.png", "Front view of House 1")] // Image from public folder
  ),
  new House(
    2,
    location2,
    "Metadata for House 2",
    "456 Oak Avenue",
    450000,
    5,
    4,
    1,
    "Modern",
    true,
    "For Sale",
    3,
    new Date("2024-10-15"),
    "Residential",
    realtor,
    null, // No open house date
    true,
    [new Photo(2, "/ReferenceImage2.jpeg", "Front view of House 2")] // Image from public folder
  ),
];
