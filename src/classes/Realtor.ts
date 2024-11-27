/**
 * Author: Nathan Serre
 * Title: Realtor class
 * Date: November 27th, 2024
 * Description: Realtor class used to store information about the Realtor.
 * Last Modified: November 19th
 */
class Realtor {
    id: number;
    name: string;
    email:string;
    phone: string;
    licenseNumber: string;

    constructor(
        id: number,
        name: string,
        email: string,
        phone: string,
        licenseNumber: string
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.licenseNumber = licenseNumber;
    }

    contactDetails(): string {
        return `
          Name: ${this.name}
          Email: ${this.email}
          Phone: ${this.phone}
          License Number: ${this.licenseNumber}
        `;
    }
}

export default Realtor;
