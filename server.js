const app = require('./app')

const port = process.env.PORT || 3001

app.listen(port, "localhost", () => {
    console.log('Server started at port', port)
})