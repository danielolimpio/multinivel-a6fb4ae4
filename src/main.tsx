import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import { initPwaInstall } from './lib/pwaInstall';
import './index.css';

export const createRoot = ViteReactSSG(
  { routes },
  ({ isClient }) => {
    if (isClient) {
      initPwaInstall();
    }
  },
);
