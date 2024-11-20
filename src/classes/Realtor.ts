//Realtor class
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
