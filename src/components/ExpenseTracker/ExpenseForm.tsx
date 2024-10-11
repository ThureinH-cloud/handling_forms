import { FieldValues, useForm } from "react-hook-form";
import { categories } from "../../App";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
interface Expense{
    description: string;
    amount:number;
    category:string;
  }  
export default function ExpenseForm({onaddexpense}:{onaddexpense:(data:Expense)=>void}) {
  
  const schema=z.object({
    description:z.string().min(3).max(50),
    amount:z.number({invalid_type_error:'Amount Field is required'}).min(0.01),
    category:z.enum(categories,{
        errorMap:()=>({message:"Category is required"})
    })
  });
  const {register,handleSubmit,formState:{errors}}=useForm<Expense>({resolver:zodResolver(schema)});
  const onsubmit=((data:FieldValues)=>onaddexpense(data as Expense));  
  return (
    <form action="" onSubmit={handleSubmit(onsubmit)}  style={{maxWidth:340,padding:20}}>
        <div className="mb-2">
            <label htmlFor="description" className="form-label">Description</label>
            <input {...register('description')} type="text" name="description" className="form-control" />
            {errors.description && <p className="text-danger">{errors.description.message}</p>}
        </div>
        <div className="mb-2">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input {...register('amount',{valueAsNumber:true})} type="number" name="amount" className="form-control" />
            {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <select {...register('category')} name="category"  className="form-select" id="">
                <option value="">All Categories</option>
                {categories.map(category=><option value={category} key={category}>{category}</option>)}
                
            </select>
            {errors.category && <p className="text-danger">{errors.category.message}</p>}
        </div>
        <button className="btn btn-primary">Submit</button>
    </form>
  )
}
