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
        }
    ];

    private count: number = this.users.length;

    constructor() { }

    public getUsers(): Promise<User[]> { // Promise => ca un fel de promisiune
        return new Promise(
            (resolve, reject) => {
                setTimeout(() => { resolve(this.users) }, 2000)
            }
        )
    }

    createUser(user : User) :number {
        this.count++;
        user.id = this.count;
        this.users.push(user)
        return user.id
    }

    removeUser(id: number){
        const foundUser: User | undefined = this.users.find((user) => user.id === id);
        const index = this.users.indexOf(foundUser);
        this.users.splice(index, 1);
    }

    editUser(id: number, user: User) {
        const newUser: User = this.users.find((user) => user.id == id);
        newUser.lastName = user.lastName;
        newUser.firstName = user.firstName;
        newUser.email = user.email;
        newUser.userName = user.userName;
    }
}