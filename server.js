const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 5000;

// Configuration CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Autorise uniquement les requêtes depuis votre application React
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
};

server.use(jsonServer.bodyParser);
server.use(cors(corsOptions)); // Utilisez le middleware CORS avec les options spécifiées
server.use(middlewares);

// Utilisez '/api' comme préfixe pour toutes les routes de l'API
server.use('/api', router);

server.listen(port, () => {
  console.log(`Serveur JSON Server en cours d'exécution sur le port ${port}`);
});
