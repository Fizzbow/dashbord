import StockTrading from "@/components/Insight/StockTrading";
import "./Insight.scss";
import ScatterTrading from "@/components/Insight/ScatterTrading";
import { ThemeProvider } from "@/components/theme-provider";

const Insight = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="insight h-full bg-[#111] font-Poppins flex flex-row justify-center items-center text-[#fff]">
        <section className="bg-gradient-to-b absolute from-[#261F46] to-transparent h-[200px] top-0 left-0 w-full" />
        <section className="h-[70%] flex flex-col gap-4 w-[70%]">
          <header className="py-2  col-span-6 row-span-1 rounded-lg bg-[#121212] max-h-12  px-3 items-center border border-[#2D2D2D] w-full">
            <div className="flex flex-row items-center">
              <span className="font-500">Insight</span>
              <div className="insight_logo w-6 h-6 relative" />
            </div>
          </header>

          <div className="grid grid-cols-6 gap-4">
            <StockTrading />
            <ScatterTrading />
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
};

export default Insight;
