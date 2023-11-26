import { useNavigate } from "react-router";
import ClientCard from "../../components/clientCard/ClientCard";
import { GlobalContext } from "../../components/contexts/GlobalContext"
import { useContext } from "react"
import { goToAddValuePage } from "../../routes/coordinator";
import { Form, Title, Input, Wrapper, AddValueSection, Division } from "./MainPageStyle";

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
    };

    return(
        <Wrapper>
            <section>
                <Title>Quem faz parte da mesa?</Title>
                <Form onSubmit={addClient}>
                    <Input
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
                </Form>
            </section>
            
            <AddValueSection>
                <button
                    className="addValueBtn"
                    onClick={() => redirectUser()}
                
                >Adicione um valor para ser divido</button> 
            </AddValueSection>

            <Division></Division>

            <section>
                {clientList.map((client, index) => {
                    return(
                        <ClientCard
                            name={client.name}
                            key={index}
                            index={index}
                            removeClient={removeClient}
                        />
                    )
                })}
            </section>
            
        </Wrapper>
    )
}

export default MainPage