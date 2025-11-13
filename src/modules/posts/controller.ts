import type { FastifyReply, FastifyRequest } from "../../../node_modules/fastify/fastify";
import  { PostService } from "./service";

class PostCrontroller{

    private service : PostService

    constructor(){
        this.service = new PostService();
    }


    async createPost(request: FastifyRequest, reply : FastifyReply){
        try{
            const {title, content, userId} = request.body as {title : string, content : string, userId : number}
            const post = await this.service.createPost(title, content, userId)
            return reply.code(200).send(post)
        }catch(err){
            reply.code(400).send(err)
        }
    }

}
export {PostCrontroller}