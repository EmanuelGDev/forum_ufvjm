import type { FastifyInstance, FastifyRequest, FastifyReply } from "../../../node_modules/fastify/fastify"
import authenticate from "../../lib/jwt"
import { PostCrontroller } from "./controller"

const postCrontroller = new PostCrontroller()

async function postRoutes(fastify : FastifyInstance){

    fastify.post('/create', (request : FastifyRequest, reply : FastifyReply) =>
        postCrontroller.createPost(request,reply))

    fastify.get('/', (request : FastifyRequest, reply : FastifyReply) =>
    postCrontroller.getPosts(request,reply))
}

export {postRoutes}