import { useState } from "react";

const PersonalForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredSalary, setEnteredSalary] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const onEnteredTitle = (event) => {
        setEnteredTitle(event.target.value);
    };

    const onEnteredSalary = (event) => {
        setEnteredSalary(event.target.value);
    };

    const onEnteredDate = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitPersonalData = (event) => {

        event.preventDefault();

        const personalData = {
            id: Math.random().toString(),
            title: enteredTitle,
            salary: enteredSalary,
            date: new Date(enteredDate)
        }

        props.onAddPersonalData(personalData);
        setEnteredTitle('');
        setEnteredSalary('');
        setEnteredDate('');

    };

  return (
    <div>
      <form onSubmit={submitPersonalData}>
        <div>
          <label></label>
          <input type="text" value={enteredTitle} onChange={onEnteredTitle} />
        </div>
        <div>
          <label></label>
          <input type='number' min='0.01' step='0.01' value={enteredSalary} onChange={onEnteredSalary}/>
        </div>
        <div>
          <label></label>
          <input type="date"  min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={onEnteredDate}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PersonalForm;
