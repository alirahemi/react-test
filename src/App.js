import "./App.css";
import PersonalData from "./components/PersonalData";
import { useState } from "react";
import PersonalItems from "./components/PersonalItems";

const INITIAL_DATA = [
  {
    title: "ali",
    salary: "345345",
    date: new Date('01.06.2020'),
  }
];

function App() {

  const [data, setData] = useState(INITIAL_DATA);

  const addPersonalData = (personalData) => {
    setData((prevData) => {
      return [personalData, ...prevData];
    });
  };

  return (
    <div className="App">
      <PersonalData onAddPersonalData={addPersonalData} />
      <PersonalItems data={data} />
    </div>
  );
}

export default App;
