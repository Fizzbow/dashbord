import StockTrading from "@/components/Insight/StockTrading";
import "./Insight.scss";

const Insight = () => {
  return (
    <main className="insight flex h-full bg-[#000] font-Poppins justify-center items-center text-[#fff]">
      <section className="h-[70%] w-[60%]">
        <header className="py-2 rounded-lg bg-[#121212] flex flex-row px-3 items-center border border-[#2D2D2D] w-full">
          <div className="flex flex-row item-center">
            <span className="font-500 text-lg">Insight</span>
            <div className="insight_logo w-6 h-6 relative" />
          </div>
        </header>
        <StockTrading />
      </section>
    </main>
  );
};

export default Insight;
