import { useNavigate } from "react-router";
import ClientCard from "../../components/clientCard/ClientCard";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import { goToAddValuePage } from "../../routes/coordinator";
import { Form, Title, Input, Wrapper, AddValueSection, Division, MainPageContainer } from "./MainPageStyle";
import { Header } from "../../components/header/Header";

function MainPage() {

    const context = useContext(GlobalContext);
    const navigate = useNavigate();

    const {addClient, removeClient, clientHandler, newClient, stateClientList} = context;

    const redirectUser = () => {
        if(stateClientList.clientList.length > 0){
            goToAddValuePage(navigate)
        }else{
            alert('Você precisa criar uma mesa primeiro')
        }
    };

    return(
        <MainPageContainer>
            <Header/>
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
                    {stateClientList.clientList.map((client, index) => {
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
        </MainPageContainer>
    )
}

export default MainPage