import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.static(path.resolve(__dirname,'public'))) // все файлы в 'public' будут доступны по прямым URL

app.get('/', function(req, res){
  res.send("Hello, World!")
})

app.get('/about', function(req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'about.html'))
})

// Обработчик для несуществующих маршрутов
app.use((req, res, next) => {
  res.status(404).send('Страница не найдена')
})

app.listen(PORT, () => {
  console.log(`Server port ${PORT}`)    
})




