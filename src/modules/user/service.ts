import {prisma} from "../../lib/prisma"

class UserService{

    async createUser( name : string, email: string, password: string, role? : string){
        if(!name || !email || !password){
            throw new Error("Missing require arguments")
        }

        if(!role){
            role  = "student"
        }

        const existsUser = await prisma.user.findFirst({
            where:{email : email}
        })

        if(existsUser){
            throw new Error("Email already in use")
        }

        const user = await prisma.user.create({
            data:{
                name : name,
                email : email,
                password : password,
                role : role
            }
        })

        return user
    }

}

export  {UserService}