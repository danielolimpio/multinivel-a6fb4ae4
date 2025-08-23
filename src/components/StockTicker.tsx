import { useEffect, useState } from "react";

interface StockData {
  name: string;
  ticker: string;
  price: string;
  changePercent: string;
  isUp: boolean;
}

export function StockTicker() {
  const [stockData, setStockData] = useState<StockData[]>([
    // Dados de fallback das empresas de vendas diretas
    { name: 'USANA', ticker: 'USNA', price: '30.95', changePercent: '+2.08%', isUp: true },
    { name: 'Herbalife', ticker: 'HLF', price: '9.59', changePercent: '+4.58%', isUp: true },
    { name: 'Nu Skin', ticker: 'NUS', price: '11.86', changePercent: '+1.63%', isUp: true },
    { name: 'Primerica', ticker: 'PRI', price: '267.62', changePercent: '+1.99%', isUp: true },
    { name: 'Tupperware', ticker: 'TUP', price: '1.25', changePercent: '-2.34%', isUp: false },
    { name: 'LifeVantage', ticker: 'LFVN', price: '13.45', changePercent: '-1.20%', isUp: false },
    { name: 'Natura', ticker: 'NATU3', price: '18.90', changePercent: '+0.75%', isUp: true },
    { name: 'Youngevity', ticker: 'YGVI', price: '2.15', changePercent: '+3.40%', isUp: true },
    { name: 'eXp World', ticker: 'EXPI', price: '12.78', changePercent: '+1.45%', isUp: true },
    { name: 'Medifast', ticker: 'MED', price: '45.20', changePercent: '+2.10%', isUp: true }
  ]);

  // Simula variação nos preços para animação
  useEffect(() => {
    const interval = setInterval(() => {
      setStockData(prevData => 
        prevData.map(stock => {
          const variation = (Math.random() - 0.5) * 0.1; // Variação de -5% a +5%
          const newPrice = (parseFloat(stock.price) * (1 + variation)).toFixed(2);
          const changePercent = (variation * 100).toFixed(2);
          const isUp = variation > 0;
          
          return {
            ...stock,
            price: newPrice,
            changePercent: `${isUp ? '+' : ''}${changePercent}%`,
            isUp
          };
        })
      );
    }, 3000); // Atualiza a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white border-y border-border overflow-hidden py-3 shadow-sm">
      <div className="ticker-scroll whitespace-nowrap">
        <div className="inline-flex items-center space-x-8">
          {stockData.map((stock, index) => (
            <div key={index} className="inline-flex items-center space-x-3 font-medium text-sm">
              <div className="w-8 h-8 bg-gradient-to-r from-primary/10 to-primary/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-primary">{stock.ticker.slice(0, 2)}</span>
              </div>
              <span className="text-foreground font-bold">{stock.ticker}</span>
              <span className="text-foreground">${stock.price}</span>
              <span className={stock.isUp ? "text-emerald-600" : "text-red-600"}>
                {stock.isUp ? '▲' : '▼'} {stock.changePercent}
              </span>
            </div>
          ))}
          {/* Duplica para animação contínua */}
          {stockData.map((stock, index) => (
            <div key={`dup-${index}`} className="inline-flex items-center space-x-3 font-medium text-sm">
              <div className="w-8 h-8 bg-gradient-to-r from-primary/10 to-primary/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-primary">{stock.ticker.slice(0, 2)}</span>
              </div>
              <span className="text-foreground font-bold">{stock.ticker}</span>
              <span className="text-foreground">${stock.price}</span>
              <span className={stock.isUp ? "text-emerald-600" : "text-red-600"}>
                {stock.isUp ? '▲' : '▼'} {stock.changePercent}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}