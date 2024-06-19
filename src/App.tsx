import { ROUTER } from "@/constants/router";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col p-5 gap-4">
      {ROUTER.map((r) => r.path !== "/" && <Link to={r.path!}>{r.path}</Link>)}
    </div>
  );
}

export default App;
