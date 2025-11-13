import type{ FastifyInstance } from "fastify";
import {userRoutes} from "../modules/user/route";
import { authRoutes } from "../modules/auth/route";
import { postRoutes } from "../modules/posts/route";

async function routes(fastify : FastifyInstance){
    fastify.register(userRoutes, {prefix : '/user'});
    fastify.register(authRoutes, {prefix : '/auth'})
    fastify.register(postRoutes, {prefix: '/post'})
}

export {routes}