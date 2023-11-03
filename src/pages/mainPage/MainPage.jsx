import ClientCard from "./components/clientCard/ClientCard"
import { GlobalContext } from "../../components/contexts/GlobalContext"
import { useContext } from "react"

function MainPage() {

    const context = useContext(GlobalContext);

    const {clientList, removeClient, clientHandler, newClient} = context;

    return(
        <>


          {/*   <AddValueModal
                openModal={openModal}
                setOpenModal={() => setOpenModal(!openModal)}
                clientList={clientList}
                newFood={newFood}
                foodHandler={foodHandler}
                newValue={newValue}
                valueHandler={valueHandler}
                addOrder={addOrder}

            /> */}
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
                
               
            >Adicione um valor para ser divido</button> {/* this button calls a modal to add the value to be divided */}

          
        
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
    )
}

export default MainPage