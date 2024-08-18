import express from 'express'
import { allCards, createCard, singleCard } from "../controllers/cardController.js";

const router = express.Router();



router.post('/createCard', createCard)
router.get('/allCards', allCards)
router.get('/:id', singleCard);


export default router