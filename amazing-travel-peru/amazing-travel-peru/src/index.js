import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Post } from "./Post";
import { useState, useEffect } from "react";
import { render } from "@testing-library/react";
const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    nombre: "Angello",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    nombre: "Alexandra",
    image: "https://robohash.org/user2",
  },
];
function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect( () => {
    console.log("render")
  }, [counter])
  
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>
      <hr />

    </>
  );
  
}
function Input() {
    const [mensaje, setMensaje] = useState("");
    useEffect( () => {
        console.log("render");
      }, [])
    return (
      <>
        <input onChange={ (e) => {
            setMensaje(e.target.value)
        }}/>
          <button onClick={ () => {
            alert(`El mensaje es: ${mensaje}`)
          }}>Save</button>
      </>
    );
  }
root.render(
  <div>
    <Input />
    <Counter />
    {users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.nombre}</h1>
          <img src={user.image} />
        </div>
      );
    })}
    <UserCard
      name="Angello Ruiz"
      amount={300}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
    />
    <UserCard
      name="Alexandra Fernandez"
      amount={400}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 los geranions", city: "New York" }}
    />
    <Button text="Click me" />
    <Button text="Pay" />
    <Button text="" name="Joe" />
    <input
      on
      onChange={(e) => {
        console.log(e.target.value + "...");
      }}
    />
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("enviado");
      }}
    >
      <h1>Formulario</h1>
      <button>Enviar</button>
    </form>
    <TaskCard ready={true} />
    <Saludar />
    <Post />
    <hr />
  </div>
);
// 2:33:28 video time
