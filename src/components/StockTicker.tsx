import { useEffect, useState } from "react";

interface StockData {
  name: string;
  ticker: string;
  price: string;
  changePercent: string;
  isUp: boolean;
}

const API_KEY = '48MEA8T5IN32Y3YZ';

export function StockTicker() {
  const [stockData, setStockData] = useState<StockData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Empresas de vendas diretas listadas em bolsa
  const stocks = [
    { name: "USANA", ticker: "USNA" },
    { name: "Herbalife", ticker: "HLF" },
    { name: "Lifevantage", ticker: "LFVN" },
    { name: "Nu Skin", ticker: "NUS" },
    { name: "Mannatech", ticker: "MTFX" },
    { name: "Youngevity", ticker: "YGVI" },
    { name: "Primerica", ticker: "PRI" },
    { name: "Tupperware", ticker: "TUP" },
    { name: "Natura &Co", ticker: "NTCOY" },
    { name: "eXp World", ticker: "EXPI" }
  ];

  // Busca cotação da ação
  const fetchQuote = async (ticker: string): Promise<StockData> => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${API_KEY}`
      );
      const data = await response.json();
      
      if (data['Global Quote'] && data['Global Quote']['05. price']) {
        const price = parseFloat(data['Global Quote']['05. price']).toFixed(2);
        const changePercent = data['Global Quote']['10. change percent'];
        const isUp = changePercent.includes('+');
        
        return {
          name: ticker,
          ticker,
          price,
          changePercent,
          isUp
        };
      } else {
        return {
          name: ticker,
          ticker,
          price: '-',
          changePercent: '-',
          isUp: false
        };
      }
    } catch (error) {
      return {
        name: ticker,
        ticker,
        price: 'ERRO',
        changePercent: '-',
        isUp: false
      };
    }
  };

  useEffect(() => {
    const updateTicker = async () => {
      setIsLoading(true);
      const promises = stocks.map(stock => fetchQuote(stock.ticker));
      const results = await Promise.all(promises);
      setStockData(results);
      setIsLoading(false);
    };

    updateTicker();
    const interval = setInterval(updateTicker, 60000); // Atualiza a cada 60 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary border-y border-border overflow-hidden py-3">
      <div className="ticker-scroll whitespace-nowrap">
        <div className="inline-flex items-center space-x-12">
          {isLoading ? (
            <div className="inline-flex items-center space-x-2 font-medium text-sm">
              <span className="text-primary-foreground">Carregando cotações...</span>
            </div>
          ) : (
            <>
              {stockData.map((stock, index) => (
                <div key={index} className="inline-flex items-center space-x-2 font-medium text-sm">
                  <span className="text-primary-foreground font-bold">{stock.ticker}</span>
                  <span className="text-primary-foreground">${stock.price}</span>
                  <span className={stock.isUp ? "text-emerald-400" : "text-red-400"}>
                    {stock.isUp ? '🟢' : '🔴'}{stock.changePercent}
                  </span>
                </div>
              ))}
              {/* Duplica os dados para animação contínua */}
              {stockData.map((stock, index) => (
                <div key={`duplicate-${index}`} className="inline-flex items-center space-x-2 font-medium text-sm">
                  <span className="text-primary-foreground font-bold">{stock.ticker}</span>
                  <span className="text-primary-foreground">${stock.price}</span>
                  <span className={stock.isUp ? "text-emerald-400" : "text-red-400"}>
                    {stock.isUp ? '🟢' : '🔴'}{stock.changePercent}
                  </span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}