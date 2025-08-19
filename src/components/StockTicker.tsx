import { useEffect, useState } from "react";

interface StockData {
  name: string;
  ticker: string;
  price: number;
  change: number;
  changePercent: string;
}

export function StockTicker() {
  const [stockData, setStockData] = useState<StockData[]>([]);

  // Dados fictícios das empresas de vendas diretas
  const mockStocks: StockData[] = [
    { name: "USANA", ticker: "USNA", price: 67.42, change: 1.25, changePercent: "+1.89%" },
    { name: "Herbalife", ticker: "HLF", price: 12.84, change: -0.32, changePercent: "-2.43%" },
    { name: "Lifevantage", ticker: "LFVN", price: 6.18, change: 0.15, changePercent: "+2.49%" },
    { name: "Nu Skin", ticker: "NUS", price: 8.95, change: -0.08, changePercent: "-0.89%" },
    { name: "Mannatech", ticker: "MTFX", price: 4.67, change: 0.23, changePercent: "+5.18%" },
    { name: "Youngevity", ticker: "YGVI", price: 2.34, change: -0.05, changePercent: "-2.09%" },
    { name: "Primerica", ticker: "PRI", price: 245.67, change: 3.45, changePercent: "+1.42%" },
    { name: "Tupperware", ticker: "TUP", price: 1.23, change: 0.02, changePercent: "+1.65%" },
    { name: "Natura &Co", ticker: "NTCOY", price: 5.78, change: -0.12, changePercent: "-2.03%" },
    { name: "eXp World", ticker: "EXPI", price: 14.56, change: 0.87, changePercent: "+6.35%" }
  ];

  useEffect(() => {
    // Simula variações de preço em tempo real
    const updatePrices = () => {
      const updatedStocks = mockStocks.map(stock => {
        const variation = (Math.random() - 0.5) * 0.5; // Variação de -0.25 a +0.25
        const newPrice = Math.max(0.01, stock.price + variation);
        const change = newPrice - stock.price;
        const changePercent = ((change / stock.price) * 100).toFixed(2);
        
        return {
          ...stock,
          price: newPrice,
          change,
          changePercent: change >= 0 ? `+${changePercent}%` : `${changePercent}%`
        };
      });
      setStockData(updatedStocks);
    };

    updatePrices();
    const interval = setInterval(updatePrices, 5000); // Atualiza a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary border-y border-border overflow-hidden py-3">
      <div className="ticker-scroll whitespace-nowrap">
        <div className="inline-flex items-center space-x-12">
          {stockData.map((stock, index) => (
            <div key={index} className="inline-flex items-center space-x-2 font-medium text-sm">
              <span className="text-primary-foreground font-bold">{stock.ticker}</span>
              <span className="text-primary-foreground">${stock.price.toFixed(2)}</span>
              <span className={stock.change >= 0 ? "text-emerald-400" : "text-red-400"}>
                {stock.changePercent}
              </span>
            </div>
          ))}
          {/* Duplica os dados para animação contínua */}
          {stockData.map((stock, index) => (
            <div key={`duplicate-${index}`} className="inline-flex items-center space-x-2 font-medium text-sm">
              <span className="text-primary-foreground font-bold">{stock.ticker}</span>
              <span className="text-primary-foreground">${stock.price.toFixed(2)}</span>
              <span className={stock.change >= 0 ? "text-emerald-400" : "text-red-400"}>
                {stock.changePercent}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}