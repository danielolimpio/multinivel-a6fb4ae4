import { useEffect } from "react";

// Declara o Stockdio globalmente
declare global {
  interface Window {
    Stockdio?: any;
  }
}

export function StockTicker() {
  useEffect(() => {
    // Remove qualquer script anterior
    const existingScript = document.querySelector('script[src*="stockdio.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Carrega o script do Stockdio
    const script = document.createElement('script');
    script.src = 'https://www.stockdio.com/visualization/financial/charts/js/stockdio.js';
    script.async = true;
    
    script.onload = () => {
      // Configura o widget quando o script carregar
      if (window.Stockdio) {
        window.Stockdio.embedWidget({
          container: "stockdio-container",
          width: "100%",
          height: "50px",
          symbols: "NATU3.SA;HLF;NUS;TPR;MK;VORWRK;PRI;EXPI;USNA;NATR;LFVN;MTEX;HLOC;MED;NTCO;NHTC;NBEV;RELV;SHRG;TUP;EDUC;MJNA;YGYI",
          culture: "Portuguese-Brazil",
          motif: "financial",
          palette: "financial-light",
          tickerSpeed: "fast"
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup ao desmontar o componente
      const scriptToRemove = document.querySelector('script[src*="stockdio.js"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
      // Limpa o container
      const container = document.getElementById('stockdio-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="bg-white border-y border-border overflow-hidden shadow-sm">
      <div 
        id="stockdio-container" 
        style={{ width: '100%', height: '50px' }}
        className="stockdio-ticker"
      />
    </div>
  );
}