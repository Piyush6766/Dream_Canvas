import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'
import newsletterRoutes from "./routes/newsletterRoutes.js"


const PORT = process.env.PORT || 4000
const app = express()
app.use(express.json())
app.use(cors())

await connectDB()


app.use("/api/user", userRouter)
app.use("/api/image", imageRouter)
app.use("/api/newsletter", newsletterRoutes);
app.get("/", (req, res) => res.send("Api working fine"))

app.listen(PORT, () => console.log("Server listening on port " + PORT))