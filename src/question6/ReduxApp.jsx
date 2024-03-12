import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./usersSlice";

// 6. Users i Redux (3p)
// Skapa en komponent som lägger till användare i en lista i Redux.
// Det ska gå att skriva in ett namn i ett inputfält och klicka på en "Lägg till"-knapp
// för att lägga till användaren. Alla användare ska visas i en lista under inputfältet.

// Som hjälp finns redan en slice (usersSlice.js) som hanterar användarlistan. Dessutom är
// react-redux och @reduxjs/toolkit redan installerat i projektet.
// Skapa en store som använder sig av usersSlice.js och Lägg till en Provider i App-komponenten
// nedanför.

export default function ReduxApp() {
  const [input, setInput] = useState("");

  const currentUsers = useSelector((state) => state.users.list);
  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => dispatch(addUser(input))}>Add User</button>

      {currentUsers.map((user) => {
        return <p>{user}</p>;
      })}
    </div>
  );
}
