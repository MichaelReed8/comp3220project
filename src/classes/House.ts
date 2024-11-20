//House class

import Location from "./Location";
import Realtor from "./Realtor";
import Photo from "./Photo";

class House {
  id: number;
  location: Location;
  metadata: string;
  street: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  acres: number;
  house_style: string;
  has_garage: boolean;
  house_status: string;
  stories: number;
  date_listed: Date;
  building_type: string;
  realtor: Realtor;
  openhouse_date: Date | null; // Nullable in case there's no open house
  pool: boolean;
  photos: Photo[];

  constructor(
    id: number,
    location: Location,
    metadata: string,
    street: string,
    price: number,
    bedrooms: number,
    bathrooms: number,
    acres: number,
    house_style: string,
    has_garage: boolean,
    house_status: string,
    stories: number,
    date_listed: Date,
    building_type: string,
    realtor: Realtor,
    openhouse_date: Date | null,
    pool: boolean,
    photos: Photo[]
  ) {
    this.id = id;
    this.location = location;
    this.metadata = metadata;
    this.street = street;
    this.price = price;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.acres = acres;
    this.house_style = house_style;
    this.has_garage = has_garage;
    this.house_status = house_status;
    this.stories = stories;
    this.date_listed = date_listed;
    this.building_type = building_type;
    this.realtor = realtor;
    this.openhouse_date = openhouse_date;
    this.pool = pool;
    this.photos = photos;
  }

  displayDetails(): string {
    return `
      ID: ${this.id}
      Street: ${this.street}
      Location: ${this.location.getFullLocation}
      Price: $${this.price.toLocaleString()}
      Bedrooms: ${this.bedrooms}
      Bathrooms: ${this.bathrooms}
      Acres: ${this.acres}
      House Style: ${this.house_style}
      Garage: ${this.has_garage ? "Yes" : "No"}
      Status: ${this.house_status}
      Stories: ${this.stories}
      Date Listed: ${this.date_listed.toDateString()}
      Building Type: ${this.building_type}
      Realtor: ${this.realtor.name} (${this.realtor.email})
      Open House Date: ${this.openhouse_date ? this.openhouse_date.toDateString() : "No open house scheduled"}
      Pool: ${this.pool ? "Yes" : "No"}
      Metadata: ${this.metadata}
    `;
  }

  displayPhotos(): string{
    return this.photos
    .map((photo) => `Photo ID: ${photo.id}, URL: ${photo.url}, Description: ${photo.altText}`)
      .join("\n");
  }
}

export default House;
