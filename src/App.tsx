
import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { AppRouter } from './router/AppRouter'
import { AppLayout } from './UI/layout/AppLayout'

function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </ThemeProvider >
  )
}

export default App
