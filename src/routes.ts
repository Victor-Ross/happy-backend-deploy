import Router from 'express';
const routes = Router();

import multer from 'multer';
import uploadConfig from './config/upload';
const upload = multer(uploadConfig);

import OrphanagesController from './controllers/OrphanagesController';

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages',upload.array('images'), OrphanagesController.create);


export default routes;

/**
 * {
	"name": "Lar das meninas",
	"latitude": "-22.970900",
	"longitude": "-43.190096",
	"about": "Descrição do orfanato",
	"instructions": "Venha visitar! :)",
	"opening_hours": "Das 8h até 18h",
	"open_on_weekends": true
}
 */