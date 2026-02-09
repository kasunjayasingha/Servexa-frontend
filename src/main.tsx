import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import App from './App'
import { ColorModeProvider } from './theme/ColorModeContext'
import '@/assets/styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ColorModeProvider>
          <App />
        </ColorModeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
