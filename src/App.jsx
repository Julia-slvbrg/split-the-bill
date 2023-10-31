import { useState } from "react"
import ClientCard from "./components/ClientCard"


function App() {
  const [clientList, setClientList] = useState([])
  const [newClient, setNewClient] = useState('');

  const clientHandler = (e) => {
    setNewClient(e.target.value)
  };

  const addClient =  (e) => {
    e.preventDefault()

    setClientList([...clientList, newClient])
    setNewClient('')
  };

  const removeClient = (clientName) => {
    const newList = clientList.filter((client) => client !== clientName);

    return setClientList(newList);
  }

  console.log({clientList});
  return (
    <>
      {/* <Modal /> */}
      <h1>Quem faz parte da mesa?</h1>
      <form onSubmit={addClient}>
        <input
          id="name"
          name="name"
          placeholder="Nome"
          type="text"
          value={newClient} 
          onChange={clientHandler}
        />
        
        <button
          type="submit"
        >
          Adicionar
        </button>

      </form>

      <button>Adicione um valor para ser divido</button> {/* this button calls a modal to add the value to be divided */}

      <> 
        
        {clientList.map((client, index) => {
          return(
            <ClientCard
              client={client}
              key={index}
              index={index}
              removeClient={removeClient}
            />
          )
        })}
      </>
      
    </>
  )
}

export default App
