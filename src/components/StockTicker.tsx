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

  // Logos das empresas
  const companyLogos: { [key: string]: string } = {
    'USNA': 'https://logo.clearbit.com/usana.com',
    'HLF': 'https://logo.clearbit.com/herbalife.com', 
    'NUS': 'https://logo.clearbit.com/nuskin.com',
    'PRI': 'https://logo.clearbit.com/primerica.com',
    'TUP': 'https://logo.clearbit.com/tupperware.com',
    'LFVN': 'https://logo.clearbit.com/lifevantage.com',
    'NATU3': 'https://logo.clearbit.com/natura.com.br',
    'YGVI': 'https://logo.clearbit.com/youngevity.com',
    'EXPI': 'https://logo.clearbit.com/expworldholdings.com',
    'MED': 'https://logo.clearbit.com/medifast.com'
  };

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
      <div className="ticker-scroll space-x-8">
        {/* Primeira instância dos dados */}
        {stockData.map((stock, index) => (
          <div key={index} className="inline-flex items-center space-x-3 font-medium text-sm mr-8">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-border/20 shadow-sm">
              <img 
                src={companyLogos[stock.ticker]} 
                alt={stock.name}
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  // Fallback para texto se a imagem não carregar
                  (e.target as HTMLImageElement).style.display = 'none';
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent && !parent.querySelector('span')) {
                    const fallback = document.createElement('span');
                    fallback.className = 'text-xs font-bold text-primary';
                    fallback.textContent = stock.ticker.slice(0, 2);
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
            <span className="text-foreground font-bold">{stock.ticker}</span>
            <span className="text-foreground">${stock.price}</span>
            <span className={stock.isUp ? "text-emerald-600" : "text-red-600"}>
              {stock.isUp ? '▲' : '▼'} {stock.changePercent}
            </span>
          </div>
        ))}
        
        {/* Segunda instância para continuidade */}
        {stockData.map((stock, index) => (
          <div key={`dup-${index}`} className="inline-flex items-center space-x-3 font-medium text-sm mr-8">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-border/20 shadow-sm">
              <img 
                src={companyLogos[stock.ticker]} 
                alt={stock.name}
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  // Fallback para texto se a imagem não carregar
                  (e.target as HTMLImageElement).style.display = 'none';
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent && !parent.querySelector('span')) {
                    const fallback = document.createElement('span');
                    fallback.className = 'text-xs font-bold text-primary';
                    fallback.textContent = stock.ticker.slice(0, 2);
                    parent.appendChild(fallback);
                  }
                }}
              />
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
  );
}