import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

export default function App() {
  const personName = {
    firstName: "Amit",
    lastName: "Banik",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <>
      <div className="App">
        <Greet name="Polok Banik" messageCount={10} isLoggedIn={false} />
        <Person name={personName} />
        <PersonList names={nameList} />
      </div>
    </>
  );
}
