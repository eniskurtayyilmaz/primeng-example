export interface Client {
    id?: number;
    name?: string;
    surname?: string;
    email?: string;
}

export class ClientCard implements Client {
    constructor(public id?, public name?, public surname?, public email?) { }
}