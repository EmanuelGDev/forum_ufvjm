import fastify, { FastifyError } from 'fastify';  
import cors from '@fastify/cors'
import dotenv from 'dotenv';


const app = fastify ({logger : true})

dotenv.config();


app.setErrorHandler((error : FastifyError , request, reply) =>{
    reply.code(400).send({ message : error.message})
})

const start = async () => {

    await app.register(cors)

    try{
        await app.listen({port : 5000})
    } catch(err){
        process.exit(1)
    }
}
start();