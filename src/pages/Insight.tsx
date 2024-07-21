import StockTrading from "@/components/Insight/StockTrading";
import "./Insight.scss";
import ScatterTrading from "@/components/Insight/ScatterTrading";

const Insight = () => {
  return (
    <main className="insight h-full bg-[#000] font-Poppins flex flex-row justify-center items-center text-[#fff]">
      <section className="h-[70%] flex flex-col gap-4 w-[70%]">
        <header className="py-2  col-span-6 row-span-1 rounded-lg bg-[#121212] max-h-12  px-3 items-center border border-[#2D2D2D] w-full">
          <div className="flex flex-row item-center">
            <span className="font-500 text-lg">Insight</span>
            <div className="insight_logo w-6 h-6 relative" />
          </div>
        </header>

        <div className="grid grid-cols-6 gap-4">
          <StockTrading />
          <ScatterTrading />
        </div>
      </section>
    </main>
  );
};

export default Insight;
