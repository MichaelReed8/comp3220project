/**
 * Author: Nathan Serre
 * Title: Location class
 * Date: November 27th, 2024
 * Description: Location class to store coordinates of each house for mapping
 * Last Modified: November 19th
 */
class Location {
    id: number;
    latitude: number;
    longitude: number;

    constructor (
        id: number,
        latitude: number,
        longitude: number
    ) {
        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    getFullLocation(): string {
        return `
        Latitude: ${this.latitude}
        Longitude: ${this.longitude}
        `;
    }
}



export default Location