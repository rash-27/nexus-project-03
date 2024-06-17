import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
const app = new Hono<{
  Bindings :{
    DATABASE_URL : string
  }
}>()

app.use('/*',cors());
// healthy chk point
app.get('/', (c) => {
  return c.text('Hello Hono!')
})
//Chk point to store a response
app.post('/receive_response', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body = await c.req.json();
    //Zod validation
    try{
        const response = await prisma.message.create({
          data :{
            name : body.name,
            email : body.email,
            message : body.message,
            dateTime : new Date(),
            subject : body.subject
          }
        })
        if(response){
          c.status(200);
          return c.json({
            message : "Your response successfully received"
          })

        }else{
          c.status(411);
          return c.json({
            message : "SOmething went wrong"
          })
        }
    }catch(e){
      c.status(411);
      return c.json({
        message : "SOmething went wrong"
      })
    }

})
export default app
