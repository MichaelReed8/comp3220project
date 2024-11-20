//Photo class is used to store the image of the house. It has three properties: id, url, and altText.
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