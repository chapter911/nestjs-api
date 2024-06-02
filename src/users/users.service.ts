import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService){}
    async findAll() {
        const users = await this.prisma.user.findMany();
        if(users.length === 0) {
            throw new NotFoundException(`User not found`);
        }
        return users;
    }

    async findByQuery(role: string) {
        const user = await this.prisma.user.findMany({
            where: {
                role: role,
            },
        });
        if(user.length === 0) {
            throw new NotFoundException('Role not found');
        }
        return user;
    }

    async findOne(id: number) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id,
            },
        });
        if(!user) {
            throw new NotFoundException(`User id ${id} not found`);
        }
        return user;
    }

    async login(user : any) {
        const data = await this.prisma.user.findFirst({
            where: {
                email: user.email,
                hashPwd: user.password,
            },
        });
        if(!data || data.hashPwd !== user.password) {
            throw new NotFoundException(`Wrong email or password`);
        }
        return data;
    }

    async create(createUserDto: CreateUserDto) {
        try {
            const user = await this.prisma.user.create({
                data: {
                    name: createUserDto.name,
                    email: createUserDto.email,
                    hashPwd: createUserDto.password,
                    role: createUserDto.role
                }
            });

            return user;
        } catch (error) {
            return new BadRequestException(`terjadi error: ${error}`);
        }
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        try {
            const user = await this.prisma.user.update({
                where: { id: id },
                data: updateUserDto
            });
            return user;
        } catch (error) {
            return new BadRequestException(`terjadi error: ${error}`);
        }
    }

    async remove(id: number) {
        try {
            await this.prisma.user.delete({
                where: { id: id }
            });
            return {"message" : `Deleted user #${id}`};
        } catch (error) {
            return new BadRequestException(`terjadi error: ${error}`);
        }
    }
}
