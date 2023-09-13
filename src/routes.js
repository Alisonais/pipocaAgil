import { Router } from 'express';
import {index, signIn, signUp, getAll} from './app/controller/publicControler.js'

export const router = Router();

// rotas publicas
router.get('/public', index);

// rotas de criação de usuario
router.post('/public/signIn', signIn)
router.post('/public/signUp', signUp)
router.get('public/getAll', getAll)
