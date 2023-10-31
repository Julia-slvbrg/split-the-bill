import { useState } from "react"


function App() {
  const [client, setClient] = useState([])

  return (
    <>
      {/* <Modal /> */}
      <h1>Quem faz parte da mesa?</h1>
      <form>
        <input
          id="name"
          name="name"
          placeholder="Nome"
          type="text"
        />
        
        <button>Adicionar</button>

      </form>

      <button>Adicione um valor para ser divido</button> {/* this button calls a modal to add the value to be divided */}

      <> {/* container to show the clientes names and what each has consumed */} </>
      
    </>
  )
}

export default App
