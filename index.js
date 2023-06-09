import express from 'express'
import fileUpload from 'express-fileupload'
import mongoose from 'mongoose'
import router from './router.js'

const app = express()

const PORT = process.env.PORT || 8000
const DB_URL =
	process.env.DB_URL ||
	'mongodb+srv://user:user@cluster0.1yxfrok.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
	try {
		mongoose.connect(DB_URL)
		app.listen(PORT, () => {
			console.log(`SERVER RANNING ON PORT ${PORT}`)
		})
	} catch (e) {
		console.log(e)
	}
}

startApp()
