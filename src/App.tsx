
import 'bootstrap/dist/css/bootstrap.css'
import { FormEvent, useRef, useState } from 'react'
import ExpenseList from './components/ExpenseTracker/ExpenseList';
import ExpenseFilter from './components/ExpenseTracker/ExpenseFilter';
import ExpenseForm from './components/ExpenseTracker/ExpenseForm';
export const categories=['Groceries','Utilities','Entertainment'] as const;
function App() {
  const [expenses,setExpenses]=useState(
    [
      {id:1,description:"aaa",amount:10,category:'Utilities'},
      {id:2,description:"bbb",amount:10,category:'Utilities'},
      {id:3,description:"ccc",amount:10,category:'Utilities'},
      {id:4,description:"ddd",amount:10,category:'Utilities'}
    ]
  );
  const [select,setSelect]=useState('');
  const visibleExpenses=select?expenses.filter(e=>e.category==select):expenses;
  return (
    <div>
         <ExpenseForm onaddexpense={(data)=>setExpenses([...expenses,{...data,id:expenses.length+1}])}/>     
         <ExpenseFilter selectCategory={(category)=>setSelect(category)}/>
         <ExpenseList expenses={visibleExpenses} onDelete={(id)=>setExpenses(expenses.filter(expense=>expense.id!==id))}/>
    </div>
  )
}

export default App
