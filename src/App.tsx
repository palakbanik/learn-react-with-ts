// import Greet from "./components/Greet";
// import Heading from "./components/Heading";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
// import Status from "./components/Status";
// import Oscar from "./components/Oscar";

// import Buttons from "./components/Buttons";
import Container from "./components/Container";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";

export default function App() {
  //   const personName = {
  //     firstName: "Amit",
  //     lastName: "Banik",
  //   };

  //   const nameList = [
  //     {
  //       first: "Bruce",
  //       last: "Wayne",
  //     },
  //     {
  //       first: "Clark",
  //       last: "Kent",
  //     },
  //     {
  //       first: "Princess",
  //       last: "Diana",
  //     },
  //   ];

  return (
    <>
      <div className="App">
        {/* <Greet name="Polok Banik" messageCount={10} isLoggedIn={true} />
        <Person name={personName} />
        <PersonList names={nameList} />
        <Status status="success" />
        <Heading>Placeholder text</Heading>
        <Oscar>
          <Heading>Oscar goes to leonardo dispario!</Heading>
        </Oscar> */}

        {/* <Buttons
          handleClick={(event, id) => {
            console.log("Button Clicked", event, id);
          }}
        /> */}

        {/* <Container style={{ border: "1px solid white", padding: "1rem" }} /> */}

        {/* <LoggedIn /> */}
        <User />
      </div>
    </>
  );
}
