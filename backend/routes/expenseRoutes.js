import { Router } from 'express';
import { getExpenses, addExpense } from '../controllers/expenseControllers';
import authMiddleware from '../middleware/authMiddleware';
const router = Router();
router.get('/', authMiddleware, getExpenses);
router.post('/', authMiddleware, addExpense);
export default router;
