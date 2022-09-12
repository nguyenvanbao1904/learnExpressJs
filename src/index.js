import express from 'express'
import morgan from 'morgan'
import { engine } from 'express-handlebars'
import path,{dirname} from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = 3000
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.join(__dirname,'public')))


app.use(morgan('combined'))

app.engine('hbs', engine({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views', path.join( __dirname , 'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})