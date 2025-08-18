import { useEffect } from 'react';

declare global {
  interface Window {
    TradingView: any;
  }
}

export function StockTicker() {
  useEffect(() => {
    // Load TradingView script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external/defi/tv.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.MarketWidget({
          "container_id": "tradingview-widget-container__widget",
          "symbols": [
            { "description": "Nu Skin", "symbol": "USNA" },
            { "description": "Herbalife", "symbol": "HLF" },
            { "description": "Primerica", "symbol": "PFS" },
            { "description": "Natura &Co", "symbol": "NTCO3.SA" },
            { "description": "Reliv", "symbol": "RELV" },
            { "description": "Sharing Services", "symbol": "SHSA" },
            { "description": "Tupperware", "symbol": "TUP" },
            { "description": "Youngevity", "symbol": "YGYI" },
            { "description": "Educational Dev", "symbol": "EDUC" },
            { "description": "Exceed Company", "symbol": "EXPI" },
            { "description": "Helo", "symbol": "HELO" },
            { "description": "Lifevantage", "symbol": "LFVN" },
            { "description": "Mannatech", "symbol": "MTEX" },
            { "description": "Medifast", "symbol": "MED" }
          ],
          "width": "100%",
          "height": 60,
          "locale": "pt",
          "colorTheme": "light",
          "isTransparent": false,
          "autosize": true,
          "showSymbolLogo": true,
          "showFloatingTooltip": true,
          "fontFamily": "Trebuchet MS, Roboto, sans-serif",
          "fontSize": "12",
          "noSymbolLogo": false,
          "customButton": {}
        });
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full bg-card border-y border-border py-2">
      <div className="container mx-auto px-4">
        <div className="tradingview-widget-container w-full overflow-hidden">
          <div id="tradingview-widget-container__widget" className="tradingview-widget-container__widget"></div>
        </div>
      </div>
    </div>
  );
}