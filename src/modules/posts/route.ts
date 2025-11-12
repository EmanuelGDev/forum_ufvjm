import type { FastifyInstance, FastifyRequest, FastifyReply } from "../../../node_modules/fastify/fastify"
import authenticate from "../../lib/jwt"
import { PostCrontroller } from "./controller"

async function postRoutes(fastify : FastifyInstance){

    fastify.post('/create', { preHandler: [authenticate] }, (request : FastifyRequest, reply : FastifyReply) =>
        PostCrontroller.createPost(request,reply))

}

export {postRoutes}