import express, { Router } from 'express';
import meetupRoutes from './meetup';
const routes = Router();

// API ENTRYPOINT

const entryPoint = Router();
entryPoint.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome' });
});

// UPLOADS ENDPOINT

const uploads = ('/uploads', express.static('uploads'));

//ALL ENDPOINTS

routes.use(entryPoint, meetupRoutes, uploads);

export default routes;
