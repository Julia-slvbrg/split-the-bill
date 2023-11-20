import { useNavigate } from "react-router";
import ClientCard from "../../components/clientCard/ClientCard";
import { GlobalContext } from "../../components/contexts/GlobalContext"
import { useContext } from "react"
import { goToAddValuePage } from "../../routes/coordinator";

function MainPage() {

    const context = useContext(GlobalContext);
    const navigate = useNavigate();

    const {clientList, addClient, removeClient, clientHandler, newClient} = context;

    const redirectUser = () => {
        if(clientList.length > 0){
            goToAddValuePage(navigate)
        }else{
            alert('Você precisa criar uma mesa primeiro')
        }
    }

    return(
        <>

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
                onClick={() => redirectUser()}
               
            >Adicione um valor para ser divido</button> 

        
            {clientList.map((client, index) => {
                return(
                    <ClientCard
                        client={client.name}
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