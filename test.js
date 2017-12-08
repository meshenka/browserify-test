import unique from 'uniq'
import dotenv from 'dotenv'
dotenv.config()

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6, process.env.APP_TEST]

console.log(unique(data))
