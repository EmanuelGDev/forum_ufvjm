import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import UserController from "./controller.js";

const userController = new UserController();

async function userRoutes(fastify: FastifyInstance) {
}

export default userRoutes;