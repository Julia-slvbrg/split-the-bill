import { useState } from "react"
import ClientCard from "./components/clientCard/ClientCard"
import AddValueModal from "./components/modal/AddValueModal";


function App() {
  const [clientList, setClientList] = useState([]);
  const [newClient, setNewClient] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [newFood, setNewFood] = useState('');
  const [food, setFood] = useState([]);
  const [newValue, setNewValue] = useState();
  const [orderObj, setOrderObj] = useState([]);


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
  };

  const foodHandler = (e) => {
    setNewFood(e.target.value)
  };

  const valueHandler = (e) => {
    
    setNewValue(e.target.value)

    if(e.target.value !== '' || e.target.value !== ' '){
      
      e.target.value.match(/^\d+$/)? setNewValue(e.target.value) : null
    }else{

    }
    

  }

  const addOrder = (e) => {
    //função para adicionar o objeto com o nome da comida, o valor e que consumiu
  }

  console.log({clientList});
  return (
    <>
      <AddValueModal
        openModal={openModal}
        setOpenModal={() => setOpenModal(!openModal)}
        clientList={clientList}
        newFood={newFood}
        foodHandler={foodHandler}
        newValue={newValue}
        valueHandler={valueHandler}
        addOrder={addOrder}

      />
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

      <button
        
        onClick={() => setOpenModal(true)}
      >Adicione um valor para ser divido</button> {/* this button calls a modal to add the value to be divided */}

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
