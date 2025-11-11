import type { FastifyRequest, FastifyReply } from "fastify";
import {UserService} from "./service";

class UserController{

    private service : UserService

    constructor(){
        this.service = new UserService();
    }

    async createUser(request: FastifyRequest, reply : FastifyReply){

        try{
            const {name, email, password} = request.body as {name: string, email : string, password : string}
            const user = await this.service.createUser(name,email, password);
            return reply.code(200).send(user)
        }catch(err){
            return reply.code(400).send(err)
        }
    }

}

export {UserController}