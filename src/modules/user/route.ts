import type { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import {UserController} from "./controller";

const userController = new UserController();

async function userRoutes(fastify: FastifyInstance){

    fastify.post('/create',(request : FastifyRequest, reply : FastifyReply) => 
        userController.createUser(request,reply))

    fastify.get('/:id', (request : FastifyRequest, reply : FastifyReply) =>
    userController.getUser(request,reply))
}

export {userRoutes}

