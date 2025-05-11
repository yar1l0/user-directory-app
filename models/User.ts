export interface GeoLocation {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

// ООП підхід з класом User
export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;

  constructor(data: UserData) {
    this.id = data.id;
    this.name = data.name;
    this.username = data.username;
    this.email = data.email;
    this.address = data.address;
    this.phone = data.phone;
    this.website = data.website;
    this.company = data.company;
  }

  // Метод для отримання повної адреси
  getFullAddress(): string {
    return `${this.address.city}, ${this.address.street}, ${this.address.suite}, ${this.address.zipcode}`;
  }

  // Метод для перевірки, чи містить користувач певний пошуковий запит
  matchesSearch(searchTerm: string): boolean {
    const searchLower = searchTerm.toLowerCase();
    
    return (
      this.name.toLowerCase().includes(searchLower) ||
      this.username.toLowerCase().includes(searchLower) ||
      this.email.toLowerCase().includes(searchLower) ||
      this.phone.toLowerCase().includes(searchLower) ||
      this.website.toLowerCase().includes(searchLower) ||
      this.company.name.toLowerCase().includes(searchLower) ||
      this.company.catchPhrase.toLowerCase().includes(searchLower) ||
      this.address.city.toLowerCase().includes(searchLower) ||
      this.address.street.toLowerCase().includes(searchLower)
    );
  }
}