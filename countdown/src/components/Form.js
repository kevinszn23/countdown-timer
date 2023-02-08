import {useState, useEffect} from "react"

export default function Form(props) {

    // const initForm = {
    //     name: "",
    //     date: "",
    //     time: "",
    // }

    // const [newEvent, setNewEvent] = useState(initForm);

    // useEffect(() => {
    //     getListing(setListing);
    //   }, []);

  return (
    <form>
      <label>
        <span>Name</span>
        <input type="text" required name="name" />

        <span>Date</span>
        <input type="text" required name="date" />


      </label>
    </form>
  );
}
