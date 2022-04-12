import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User } from "./users.model";

import { UserService } from "./users.service";

@Controller('user') // primul de dupa  slash -> ex: http://localhost:3000/user -> aici 'users' e primul path.
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Get()
    getUsers() : User[] {
        return this.userService.getUsers();
    }
    
    @Get(':id') // al doilea path -> dupa al 2-lea slash -> ex: http://localhost:300/user/salut -> log - "Ceau"
    hello() {
        return 'Ceau'
    }
    
    @Post('create')
    createUser(@Body() user: User) : any{
        // console.log(user)
        const newUserId = this.userService.createUser(user)
        return ({
            id: newUserId
        });
    }

    @Delete(':id')
    remove(@Param('id') id: number): User {
        return this.userService.removeUser(Number(id));
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() user: User): any{
        this.userService.editUser(id, user);
        return "SUCCES";
    }
}
