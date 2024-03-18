import { useReducer, useState } from "react"
import { ADD_BTN, REMOVE_BTN, RESET, initialState, todoReducer } from "./todoReducer/todoReducer"


export default function TodoApp() {
    
    const [todo, dispatch] = useReducer(todoReducer, initialState)
    const [inputValue, setInputValue] = useState(null)
    const [checkValue, setCheckValue] = useState(null)


    function onChangeText(event) {
        setInputValue(event.target.value)
    }

    function onChangeCheck(event) {
        setCheckValue(event.target.checked)
        
    }
    

    function handleSubmit(event) {
        event.preventDefault()
        const taskData = { title: inputValue, priority: checkValue }
        dispatch({ type: ADD_BTN, taskData })
        event.target.reset()

    }

    function handleRemove (id) {
        dispatch({type:REMOVE_BTN,payload:id})
    }

    function handleReset () {
        dispatch({type:RESET})
    }


    return (<>
        <div className="container text-center">
            <form onSubmit={handleSubmit}>
                <div className="mt-5">
                    <h1>ToDo App</h1>
                    <textarea className="my-3" name="textArea" id="" cols="40" rows="3"
                        onChange={onChangeText}
                    ></textarea>
                    <br />
                    <input type="checkbox" name="todoCheck" id="inputCheckID" onChange={onChangeCheck} />
                    <br />
                    <p>Check as important</p>
                    <br />
                    <input type="submit" value="Ekle" className="btn btn-info w-25" />
                    <input type="button" value="Sıfırla" className="btn btn-dark mx-1" onClick={() => handleReset(RESET)} />
                </div>
            </form>
            <div className="container-fluid">
                <div style={{ height: "250px", marginTop: "33px", overflow: "auto" }}>
{todo?.map(item => <li key={item.id} id={item.id} className="d-flex justify-content-around my-1"><span>{item.priority === true ? "öncelikli >>>" : ""}</span><span id={item.id}>{item.title}</span><span><button  className="btn btn-danger" id={item.id} onClick={() => handleRemove(item.id)}>Sil</button></span></li>)}
                </div>
            </div>
            
        </div>

    </>)
};
