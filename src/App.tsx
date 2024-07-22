import { ROUTER } from "@/constants/router";
import RouterLink from "./components/base/RouterLink";

function App() {
  return (
    <div className="flex flex-col p-5 gap-4">
      {ROUTER.map(
        (r) =>
          r.path !== "/" && (
            <RouterLink
              key={r.path}
              description="chart info create"
              title={r.path!}
            />
          )
      )}
    </div>
  );
}

export default App;
