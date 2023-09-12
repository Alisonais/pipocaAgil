import { Router } from 'express';
import {index, signIn} from './app/controller/publicControler.js'

export const router = Router();

// rotas publicas
router.get('/public', index);
router.post('/public/signIn', signIn)
// rotas de criação de usuario
