import {useState, useEffect} from "react"
import Timer from "./Timer";

export default function Form(props) {

    // const initForm = {
    //     name: "",
    //     date: "",
    //     time: "",
    // }

    // const [newEvent, setNewEvent] = useState(initForm);
    const [name, setName] = useState('')
    const [date, setDate] = useState('');


  return (
    <div>
    <form onSubmit={()=> {setDate(date)}}>
      <label>
        <span>Name</span>
        <input type="text" required name="name" value={name} onChange={(e) => {setName(e.target.value)} } />

        <span>Date</span>
        <input type="text" required name="date" value={date} onChange={(e) => {setDate(e.target.value)} } />


      </label>
      <input type="submit" value="submit"/>
    </form>
    {/* <Timer date={date}/> */}
    </div>

    
  );
}
