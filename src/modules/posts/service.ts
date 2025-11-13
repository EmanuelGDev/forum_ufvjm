import {prisma} from "../../lib/prisma"

class PostService{

    async createPost(title: string, content : string, userId : number){
        if(!title || !content){
            throw new Error ("Missing required arguments")
        }
        
        const post = await prisma.post.create({
            data:{
                title : title,
                content : content,
                authorId : userId
            }
        })
        return post
    }

}
export {PostService}