import React from "react";
import { Users } from "../interfaces/interface";

const DataDisplay = ({ users }: Users) => {
  return (
    <div>
      <ul>
        {users.map((el) => (
          <li key={el.name}>
            {el.name} hobbies are: {"  "}
            <span>
              {el.hobbies.map((hobby) => (
                <span key={hobby}>
                  {hobby}, {"  "}
                </span>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
