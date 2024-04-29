import React, { useRef, useState } from "react";
import { Counter1 } from "../interfaces/interface";

const Komponentas1 = ({ setCount }: Counter1) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [square, setSquare] = useState<number[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleClick = (id: number) => {
    console.log(id);
  };

  return <div></div>;
};

export default Komponentas1;
