export interface IAddress {
    addressLine1: string;
    addressLine2: string;
    state: string;
    postalCode: string;
    country: string
}

export interface INames {
    firstName: string,
    lastName: string
}

export type IGender = 'male' | 'female' | 'trans';


export interface IFormData {
    names: INames;
    gender: IGender;
    email: string;
    phoneNumber: string;
    dateOfBirth: string;
    address: IAddress;
}