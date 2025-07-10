import Greet from "./components/Greet";

export default function App() {
  return (
    <>
      <div className="App">
        <Greet name="Polok Banik" messageCount={10} isLoggedIn={false} />
      </div>
    </>
  );
}
