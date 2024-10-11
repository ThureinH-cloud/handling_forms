import { categories } from "../../App";

export default function ExpenseFilter({selectCategory}:{selectCategory:(category:string)=>void}) {
  return (
    <select onChange={(e)=>selectCategory(e.target.value)} style={{maxWidth:300,margin:20}} name="" className="form-select" id="">
        <option value="">All Categories</option>
        {categories.map(category=><option value={category} key={category}>{category}</option>)}
    </select>
  )
}
