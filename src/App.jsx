import GlobaState from "./components/contexts/GlobalState";
import { Router } from "./routes/Router";


function App() {
  
  return (
    <GlobaState>
      <Router/>
    </GlobaState>
  )
}

export default App
