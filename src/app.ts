import express from 'express'
import expressOasGenerator from 'express-oas-generator'

const app: express.Express = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router: express.Router = express.Router()
router.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World')
})
router.get('/hello', (req: express.Request, res: express.Response) => {
  res.send('Hello! Express on AWS App Runner')
})
app.use(router)

expressOasGenerator.init(app, {})

app.listen(3000, () => { console.log('Example app listening on port 3000!') })
