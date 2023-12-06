import { ClientProvider } from "./contexts/ClientContext";
import GlobalState from "./contexts/GlobalState";
import { Router } from "./routes/Router";


function App() {
  
  return (
    <ClientProvider>
      <GlobalState>
        <Router/>
      </GlobalState>
    </ClientProvider>
  )
}

export default App
