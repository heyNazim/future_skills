import express from 'express'
import cors from 'cors'
import color from 'colors'
import dotenv from 'dotenv'
import connectDb from './Config.js/Db.js'
import router from './Routes/cardRoute.js'

const app = express()
app.use(express.json())
app.use(cors())

dotenv.config()

connectDb()


app.use('/cards', router)




const PORT = 8080
// Start the server 
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
