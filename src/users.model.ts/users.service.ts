import { Injectable } from "@nestjs/common";
import { User } from "./users.model";

@Injectable()
export class UserService {
    private users: User[] = [
        {
            id: 1,
            lastName: 'Raulea',
            firstName: 'Robert',
            email: 'robert.raulea@bearingpoint.com',
            userName: 'RauleaR',
        },
        {
            id: 2,
            lastName: 'Ursu',
            firstName: 'Daniel',
            email: 'ursu.daniel@bearingpoint.com',
            userName: 'UrsuD',
        },
        {
            id: 3,
            lastName: 'Bucur',
            firstName: 'Andreea',
            email: 'bucur.andreea@bearingpoint.com',
            userName: 'BucurA',
        },
		{
            id: 4,
            lastName: 'AnaMaria',
            firstName: 'Breaz',
            email: 'anaMaria.breaz@bearingpoint.com',
            userName: 'BreazA',
        },
        {
            id: 5,
            lastName: 'Doia',
            firstName: 'Cosmin',
            email: 'Doia.Cosmin@bearingpoint.com',
            userName: 'DoiaC',
        },
        {
            id: 6,
            lastName: 'Ionita',
            firstName: 'Bogdan',
            email: 'Ionita.Bogdan@bearingpoint.com',
            userName: 'BogdanIonita',
        },        {
            id: 7,
            lastName: 'Popescu',
            firstName: 'Florin',
            email: 'robert.raulea@bearingpoint.com',
            userName: 'RauleaR',
        },
        {
            id: 8,
            lastName: 'Alexandru',
            firstName: 'Breaz',
            email: 'ursu.daniel@bearingpoint.com',
            userName: 'UrsuD',
        },
        {
            id: 9,
            lastName: 'Bucsa',
            firstName: 'Bogdan',
            email: 'bucur.andreea@bearingpoint.com',
            userName: 'BucurA',
        },
		{
            id: 10,
            lastName: 'Prodea',
            firstName: 'Horae',
            email: 'anaMaria.breaz@bearingpoint.com',
            userName: 'BreazA',
        },
        {
            id: 11,
            lastName: 'Gandila',
            firstName: 'Daniel',
            email: 'Doia.Cosmin@bearingpoint.com',
            userName: 'DoiaC',
        },
        {
            id: 12,
            lastName: 'Rotar',
            firstName: 'Marius',
            email: 'Ionita.Bogdan@bearingpoint.com',
            userName: 'BogdanIonita',
        },
		{
            id: 13,
            lastName: 'Prodea',
            firstName: 'Horae',
            email: 'anaMaria.breaz@bearingpoint.com',
            userName: 'BreazA',
        },
        {
            id: 14,
            lastName: 'Gandila',
            firstName: 'Daniel',
            email: 'Doia.Cosmin@bearingpoint.com',
            userName: 'DoiaC',
        },
        {
            id: 15,
            lastName: 'Rotar',
            firstName: 'Marius',
            email: 'Ionita.Bogdan@bearingpoint.com',
            userName: 'BogdanIonita',
        }
    ];

    private count: number = this.users.length;

    constructor() { }

	public getNrOfUsers(): number {
		return this.users.length
	}

    public getUsers(rows:number, page: number): User[] {
		// return this.users
		let param1 = (page-1)*rows;
		let param2 = rows*page;
		console.log(param1);
		console.log(param2);
        return this.users.slice(param1,param2);
    }

    public createUser(user : User) :number {
        this.count++;
        user.id = this.count;
        this.users.push(user)
        return user.id
    }

    public removeUser(id: number): User{
        const foundUser: User | undefined = this.users.find((user) => user.id === id);
        const index = this.users.indexOf(foundUser);
        this.users.splice(index, 1);
		return foundUser;
    }

    public editUser(id: number, user: User): User {
        let editedUser: User = this.users.find((user) => user.id == id);
        editedUser.lastName = user.lastName;
        editedUser.firstName = user.firstName;
        editedUser.email = user.email;
        editedUser.userName = user.userName;

		return editedUser;
    }
}