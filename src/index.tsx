import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { RecoilRoot } from 'recoil';
import { Web3ReactProvider } from '@web3-react/core';
import getLibrary from './library';

ReactDOM.render(
  <BrowserRouter>
    <RecoilRoot>
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
