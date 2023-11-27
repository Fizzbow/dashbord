import { useState } from "react";
import Nav from "./components/Nav";
import logo from "./logo.svg";
import poweredBy from "./powered-by-vitawind-dark.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="deep-linear flex min-h-screen flex-row items-center justify-center px-10">
      <div
        className="dashboard-content content-fill flex
       max-w-4xl flex-1  rounded-md p-6"
      >
        <Nav />
      </div>
    </div>
  );
}

export default App;
