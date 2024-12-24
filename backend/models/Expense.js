import { Schema, model } from 'mongoose';
const expenseSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: String,
    amount: Number,
    date: Date,
});
export default model('Expense', expenseSchema);
