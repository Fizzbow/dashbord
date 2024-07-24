import { ROUTER } from "@/constants/router";
import RouterLink from "./components/base/RouterLink";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col p-5 gap-4">
      {ROUTER.map(
        (r) =>
          r.path !== "/" &&
          r.path && (
            <Link to={r.path} key={r.path} className="no-underline">
              <RouterLink description={r.description} title={r.path!} />
            </Link>
          )
      )}
    </div>
  );
}

export default App;
