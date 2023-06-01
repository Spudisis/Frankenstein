import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import App from './app/App'
import i18n from './i18next/i18next'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
)
