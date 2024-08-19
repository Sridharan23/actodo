import AddTodoForm from "./AddTodoForm"
import Todolist from "./todolist"
import { useState } from "react"

function TodoContainer()
{
    const [activityArr,setActivityArr] = useState([])

    return(
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm  activityArr={activityArr} setActivityArr={setActivityArr}/>
                <Todolist activityArr={activityArr} setActivityArr={setActivityArr}/>
            </div>
        </div>
    )
}

export default TodoContainer