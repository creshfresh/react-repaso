
import "./App.css";
import { Expense, ExpenseList } from "./componets/expense-tracker/Table";
import { Form } from "./componets/Form";

function App() {

  const expenses: Expense[]= [
    {id: 1, description: "sdfsdf", amount: 10, category:"Utilities"},
    {id: 2, description: "dgdfg", amount: 10, category:"Utilities"},
    {id: 3, description: "ccc", amount: 10, category:"Utilities"},
    {id: 4, description: "rrrrr", amount: 10, category:"Utilities"},
  ]

  return (
<div>
  <ExpenseList expenses={expenses} onDelete={(id)=> console.log("deleted", id)} />
</div>
  )
}

export default App;
