import Container from "@/components/DOPE/Container";
import { Nav } from "@/components/DOPE/Nav";

const Dope = () => {
  return (
    <div className="deep-linear flex min-h-screen flex-row items-center justify-center px-10">
      <div className="dashboard-content content-fill flex max-w-6xl flex-1 flex-col rounded-md p-6">
        <Nav />
        <Container />
      </div>
    </div>
  );
};

export default Dope;
