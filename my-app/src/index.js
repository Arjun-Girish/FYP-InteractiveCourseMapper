import React from 'react';
import ReactDOM from 'react-dom';
import { FormProvider } from './utils/FormContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
