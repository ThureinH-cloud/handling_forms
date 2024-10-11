import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValue, FieldValues, useForm } from "react-hook-form"
import {  z } from "zod";


export default function Form() {
  type FormData={
    name:string,
    age:number
  }
  const schema=z.object({
    name:z.string().min(3,{message:'Name must be at least 3 characters'}),
    age:z.number({invalid_type_error:'Age Field is required'}).min(18),
  })
  const {register,handleSubmit,formState:{errors,isValid}}=useForm<FormData>({resolver:zodResolver(schema)});
  
  const onsubmit=((data:FieldValues)=>console.log(data));
  return (
    <form action="" onSubmit={handleSubmit(onsubmit)} style={{padding:10,maxWidth:400}}>
      <div className='mb-3'>
        <label htmlFor="name" className='form-label'>Name</label>
        <input {...register('name')} type="text" name='name' className='form-control' />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className='form-label'>Age</label>
        <input {...register('age',{valueAsNumber:true})}  type="number" name='age' className='form-control' />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary">Submit</button>
    </form>
  )
}
