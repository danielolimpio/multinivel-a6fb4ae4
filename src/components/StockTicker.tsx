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

  // Empresas de vendas diretas listadas em bolsa (reduzido para evitar limite da API)
  const stocks = [
    { name: "USANA", ticker: "USNA", logo: "https://logo.clearbit.com/usana.com" },
    { name: "Herbalife", ticker: "HLF", logo: "https://logo.clearbit.com/herbalife.com" },
    { name: "Nu Skin", ticker: "NUS", logo: "https://logo.clearbit.com/nuskin.com" },
    { name: "Primerica", ticker: "PRI", logo: "https://logo.clearbit.com/primerica.com" },
    { name: "Tupperware", ticker: "TUP", logo: "https://logo.clearbit.com/tupperware.com" }
  ];

  // Busca cotação da ação
  const fetchQuote = async (ticker: string): Promise<StockData> => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${API_KEY}`
      );
      const data = await response.json();
      
      // Verifica se há erro de limite de taxa da API
      if (data['Information'] && data['Information'].includes('rate limit')) {
        // Dados de fallback simulados para demonstração
        const fallbackData: { [key: string]: StockData } = {
          'USNA': { name: 'USANA', ticker: 'USNA', price: '30.95', changePercent: '+2.08%', isUp: true },
          'HLF': { name: 'Herbalife', ticker: 'HLF', price: '9.59', changePercent: '+4.58%', isUp: true },
          'NUS': { name: 'Nu Skin', ticker: 'NUS', price: '11.86', changePercent: '+1.63%', isUp: true },
          'PRI': { name: 'Primerica', ticker: 'PRI', price: '267.62', changePercent: '+1.99%', isUp: true },
          'TUP': { name: 'Tupperware', ticker: 'TUP', price: '1.25', changePercent: '-2.34%', isUp: false }
        };
        return fallbackData[ticker] || { name: ticker, ticker, price: '-', changePercent: '-', isUp: false };
      }
      
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
    <div className="bg-white border-y border-border overflow-hidden py-3 shadow-sm">
      <div className="ticker-scroll whitespace-nowrap">
        <div className="inline-flex items-center space-x-12">
          {isLoading ? (
            <div className="inline-flex items-center space-x-2 font-medium text-sm">
              <span className="text-foreground">Carregando cotações...</span>
            </div>
          ) : (
            <>
              {stockData.map((stock, index) => {
                const stockInfo = stocks.find(s => s.ticker === stock.ticker);
                return (
                  <div key={index} className="inline-flex items-center space-x-3 font-medium text-sm">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border">
                      <img 
                        src={stockInfo?.logo} 
                        alt={stock.name}
                        className="w-6 h-6 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="text-foreground font-bold">{stock.ticker}</span>
                    <span className="text-foreground">${stock.price}</span>
                    <span className={stock.isUp ? "text-emerald-600" : "text-red-600"}>
                      {stock.isUp ? '🟢' : '🔴'}{stock.changePercent}
                    </span>
                  </div>
                );
              })}
              {/* Duplica os dados para animação contínua */}
              {stockData.map((stock, index) => {
                const stockInfo = stocks.find(s => s.ticker === stock.ticker);
                return (
                  <div key={`duplicate-${index}`} className="inline-flex items-center space-x-3 font-medium text-sm">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border">
                      <img 
                        src={stockInfo?.logo} 
                        alt={stock.name}
                        className="w-6 h-6 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="text-foreground font-bold">{stock.ticker}</span>
                    <span className="text-foreground">${stock.price}</span>
                    <span className={stock.isUp ? "text-emerald-600" : "text-red-600"}>
                      {stock.isUp ? '🟢' : '🔴'}{stock.changePercent}
                    </span>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}