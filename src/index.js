const app = require('./app');

const port = app.get('port');

app.listen(port, () => {
    console.log(`Iniciar Página web con https://localhost:${port}`);
})
