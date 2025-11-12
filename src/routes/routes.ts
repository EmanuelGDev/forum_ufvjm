import type{ FastifyInstance } from "fastify";
import {userRoutes} from "../modules/user/route";
import { authRoutes } from "../modules/auth/route";

async function routes(fastify : FastifyInstance){
    fastify.register(userRoutes, {prefix : '/user'});
    fastify.register(authRoutes, {prefix : 'auth'})
}

export {routes}