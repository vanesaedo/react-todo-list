// rfce
import React, { useState } from "react";



/* 
function todoList(){

    const data = [
        {
            task1
        },
        {
            task2
        },
        {
            task3
        },
        {
            task4
        },
    ]
}


// 1. Input + button

  
const todolistComponent = () => {
    const [count, setCount] = useState(0);
  
    const increase = () => {
        setTask(count + 1);
    }
  
    return (
        <div style={{ margin: '50px' }}>
            <h3>To do list</h3>
            <h2>{count}</h2>
            <button onClick={increase}>Add</button>
        </div>
    )
}
  
export default FunctionalComponent;


const form = () => {

const [task, setTask] = useState("");

const addTask = () => {
    setTask
}
return(
<form onSubmit={handleSubmit}>
<label htmlFor="form_name">To do list</label>
<br />
<input type="text" name="task1"/>task1
<br />
<input type="text" name="task2"/>task2
<br />
<input type="text" name="task3"/>task3
<br />
<input type="text" name="task4"/>task4
<br />
<button type="submit" onClick={submit}>Submit</button> 
</form>)
}
/* Botón que aparece sólo si los tres campos están comletados
{values.title && values.desc && values.img_url? 
<button type="submit">Crear destino</button>:null} */


// 2. Componente List que recorra listas de items


/* const readItems = () => 
list.map((item, index) => 
  <todoItems
    key={index}
    text={item.text}
    desc={item.desc}
    img_url={item.img_url}
    delete={() => deleteItem(index)}
  />

 ); */

/* function list (props) {
    return (
      <article>
        <ul>
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
        <li>{props.item4}</li>
        </ul>
        <br/>
      </article>
    );
  } */
  
  // 3. Un componente Item o Card que contenga cada TO-DO
 /*  function Card () {
    return (
      <article>
        <ul>
        <li>Leer</li>
        <li>Hacer resumen</li>
        <li>Enviar</li>
        <li>Archivar</li>
        </ul>
        <br/>
      </article>
    );
  } */

  // 4. Botón CLEAR para borrar todas las tareas
  
  //<button onClick={()=>  props.delete()}>Borrar</button>

  //. 5. Botón BORRAR, asociado a cada tarea, para poder borrar de manera independiente */