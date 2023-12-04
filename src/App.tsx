import { useState, useContext } from "react";
import { Nav } from "./components/Nav";
import Container from "./components/Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="deep-linear flex min-h-screen flex-row items-center justify-center px-10">
      <div className="dashboard-content content-fill flex max-w-6xl flex-1 flex-col rounded-md p-6">
        <Nav />
        <Container />
      </div>
    </div>
  );
}

export default App;
