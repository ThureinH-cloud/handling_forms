
interface Expense{
    id:number;
    description:string;
    amount:number;
    category:string;
}

export default function ExpenseList({expenses,onDelete}:{expenses:Expense[],onDelete:(id:number)=>void}) {
  return (
    <table style={{margin:10,maxWidth:400}} className="table table-bordered ">
        <thead>
            <tr>
            <td >Description</td>
            <td >Amount</td>
            <td style={{border:2}}>Category</td>
            <td></td>
            </tr>
        </thead>
        <tbody>
            {expenses.map((expense:Expense) => <tr key={expense.id}>
                    <td>{expense.description}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.category}</td>
                    <td><button onClick={()=>onDelete(expense.id)} className="btn btn-outline-danger">Delete</button></td>
                </tr>)}
    
       </tbody>
       <tfoot>
            <tr>
                <td>Total</td>
                <td>${expenses.reduce((acc,expense)=>expense.amount+acc,0)}</td>
                <td></td>
                <td></td>
            </tr>
       </tfoot>
    </table>
  )
}
