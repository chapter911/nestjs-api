import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll() {
        return 'This will return all users';
    }

    @Get('byQuery')
    findByQuery(@Query('role') role: string) {
        return `This will return users with the role ${role}`;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This will return the user with the id ${id}`;
    }

    @Post()
    create(@Body() createUserDto: any) {
        return 'This will create a new user';
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: any) {
        return `This will update the user with the id ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This will delete the user with the id ${id}`;
    }
}
