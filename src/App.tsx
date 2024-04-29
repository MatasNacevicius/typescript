import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import DataDisplay from "./components/DataDisplay";
import Komponentas1 from "./components/Komponentas1";
import VaikinisKomp from "./components/VaikinisKomp";
import { Users } from "./interfaces/interface";

function App() {
  const [count, setCount] = useState<number>(0);

  enum Weekdays {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  let today: Weekdays = Weekdays.Monday;
  console.log(today);

  // let myNumber: number;
  // myNumber = 5;

  // let myString: string;
  // myString = "hello";

  // let isOpen: boolean;
  // isOpen = true;

  // // let myNumberArray: Array<number>;
  // let myNumberArray: number[];
  // myNumberArray = [5];

  // // let myStringArray: Array<string>;
  // let myStringArray: string[];
  // myStringArray = ["hello"];

  // let myTuple: [number, string, boolean, string];
  // myTuple = [5, "labas", false, "viso gero"];

  // let myObject: Object;

  // type MyType = {
  //   firstName: string;
  //   age: number;
  //   hobbies?: string[];
  // };

  // type Coworker = User & {
  //   id: number;
  //   department: string;
  // };

  // let user: MyType = {
  //   firstName: "john",
  //   age: 33,
  // };

  // interface User {
  //   firstName: string;
  //   age: number;
  //   hobbies?: string[];
  // }

  // interface MyCoworker extends User {
  //   id: number;
  //   department: string;
  // }

  // // let myFunction: (name: string) => void;

  // function myFunction(name: unknown) {
  //   if (typeof name === "string") console.log(name);
  // }

  // myFunction("John");

  let userArray = [
    {
      name: "John",
      lastName: "Navincki",
      age: 33,
      hobbies: ["swim", "running", "reading"],
    },
  ];

  return (
    <div className="App">
      {/* <Komponentas1 count={count} setCount={setCount} users={[]} /> */}
      <VaikinisKomp text="labas pasauli" />
      <DataDisplay users={userArray} />
      {count}
      <Counter setCount={setCount} />
    </div>
  );
}

export default App;
