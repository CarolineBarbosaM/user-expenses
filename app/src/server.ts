import app from './app'
import 'dotenv'

const PORT = 3001 //process.env.PORT || 3000;

app.listen(PORT, () => console.log(
    `Rodando na porta ${PORT}`
))