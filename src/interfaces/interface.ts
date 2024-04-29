import { Dispatch } from "react";

interface User {
  name: string;
  age: number;
}

export interface Counter1 {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export interface Text {
  text: string;
}

interface Data {
  name: string;
  lastName: string;
  age: number;
  hobbies: string[];
}

export interface Users {
  users: Data[];
}
