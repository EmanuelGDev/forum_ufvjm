import type { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import {UserController} from "./controller";
import authenticate from "../../lib/jwt";

const userController = new UserController();

async function userRoutes(fastify: FastifyInstance){

    fastify.post('/create', { preHandler: [authenticate] }, (request : FastifyRequest, reply : FastifyReply) => 
        userController.createUser(request,reply))

    fastify.get('/:id', { preHandler: [authenticate] }, (request : FastifyRequest, reply : FastifyReply) =>
    userController.getUser(request,reply))
}

export {userRoutes}

