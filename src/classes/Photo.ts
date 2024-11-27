/**
 * Author: Nathan Serre
 * Title: Photo class
 * Date: November 27th, 2024
 * Description: Photo class is used to store the image of the house. It has three properties: id, url, and altText.
 * Last Modified: November 19th
 */


class Photo {
    id: number;
    url: string;
    altText: string; //Description of photo

    constructor(
        id:number,
        url:string,
        altText:string
    ) {
        this.id = id;
        this.url = url;
        this.altText = altText;
    }
}

export default Photo;