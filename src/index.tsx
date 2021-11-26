import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  ChainId,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
} from '@usedapp/core';
import { formatEther } from '@ethersproject/units';

const config: Config = {
  readOnlyChainId:
    process.env.NODE_ENV === 'development' ? ChainId.Localhost : ChainId.BSC,
  readOnlyUrls: {
    [ChainId.Mainnet]:
      'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
    [ChainId.Localhost]: 'http://localhost:7545',
  },
};

ReactDOM.render(
  <BrowserRouter>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
