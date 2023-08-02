export function Greeting ({number, dia}) {
  const name = "Angello Antonio Ruiz Landauro";
  const areyou = true;
  const user = {
    firstName: "Alexandra",
    lastName: "Fernandez",
  };

  if (areyou === true) {
    return (
      <>
        <h1>{dia}</h1>
        <h1> {number}. Hello world! my name is {name}</h1>
        <p>And</p>

        <h1>
          My wife is {user.firstName} {user.lastName}
        </h1>
      </>
    );
  } else {
    return (
      <div>
        <h1>You aren't Angello</h1>
      </div>
    );
  }
}

export function UserCard ({ name, amount, married, address, greet }) {
    console.log(name, amount, married, address, greet)
    return <>
    <h1>{name}</h1>
    <p>{amount}</p>
    <p>{married ? "married" : "single"}</p>
    <ul>
        <li>City: {address.city}</li>
        <li>City: {address.street}</li>
    </ul>
    </>
}
