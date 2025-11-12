import fastify from 'fastify';
import type { FastifyError } from 'fastify';  
import cors from '@fastify/cors'
import dotenv from 'dotenv';
import  {routes}  from './src/routes/routes';



const app = fastify ({logger : true})

dotenv.config();


app.setErrorHandler((error : FastifyError, request, reply) => {
  reply.code(400).send({ message : error.message });
});


    await app.register(cors)
    await app.register(routes)

const start = async () => {

    try{
        await app.listen({port : 5000})
    } catch(err){
        process.exit(1)
    }
}
start();

export {app}