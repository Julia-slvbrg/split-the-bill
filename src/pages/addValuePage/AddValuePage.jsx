import { useNavigate } from "react-router";
import ClientCheckInput from "../../components/clientCheckInput/ClientCheckInput";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext, useEffect } from "react"
import { goToMainPage } from "../../routes/coordinator";
import ClientCard from "../../components/clientCard/ClientCard";
import ServiceTaxModal from "../../components/modal/ServiceTaxModal";
import { Wrapper, Form, Input, CheckSection, Division, FormSection } from "./AddValuePageStyle";
import { Header } from "../../components/header/Header";

export const AddValuePage = () => {
    const context = useContext(GlobalContext);
    const navigate = useNavigate();
    const {newValue, valueHandler, addOrder, payingClients, setPayingClients, checkedState, setCheckedState, reset, openModal, setOpenModal, addServiceTax, stateClientList} = context;

    useEffect(()=> {
        setCheckedState(new Array(stateClientList.clientList.length).fill(false));
        setPayingClients([]);
    }, [reset]);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>{
            if(index === position){
                if(item == false){
                    setPayingClients([...payingClients, stateClientList.clientList[position]]);
                }else{
                    const updatePayignClient = payingClients.filter(client => client !== stateClientList.clientList[position]);
                    setPayingClients(updatePayignClient);
                };
                
                return !item;
            }else{
                return item;
            }
        });

        setCheckedState(updatedCheckedState)  
    };

    const resetTable = () => {
        goToMainPage(navigate);
        window.location.reload(false);
    };

    return(
        <>
            <Header/>
            <Wrapper>            
                <button 
                    className="resetTableBtn"
                    onClick={() => resetTable()}
                >Redefinir os cliente da mesa</button>
                        
                <Form onSubmit={addOrder}>   
                    <FormSection>
                    <label htmlFor="value">
                            Valor a ser dividido (R$):
                        </label>
                            <Input
                                id="value"
                                name="value"
                                type="text"
                                value={newValue}
                                onChange={valueHandler}
                                required
                            />
                    </FormSection>           
                    Dividir entre quem?
                    <CheckSection>
                        {stateClientList.clientList.map((client, index) => {
                            return(
                                <ClientCheckInput
                                    key={index}
                                    index={index}
                                    name={client.name}
                                    checkedState={checkedState[index]} 
                                    setCheckedState={setCheckedState}
                                    handleOnChange={handleOnChange}
                                />
                            )
                        })}
                    </CheckSection>   
                    <button
                        className="addValueBtn"
                        type="submit"
                    >Adicionar valor</button>
                </Form>

                <>
                    <ServiceTaxModal
                        openModal={openModal}
                        setOpenModal={() => setOpenModal(!openModal)}
                        addServiceTax={addServiceTax}
                    />

                    <button
                        className="closeCheckgBtn"
                        onClick={() => setOpenModal(true)}
                    >Fechar conta</button>
                </>

                <Division></Division>

                {stateClientList.clientList.map((client, index) => {
                    return(
                        <ClientCard
                            key={index}
                            index={index}
                            name={client.name}
                            totalAmount={client.total}
                        />
                    )
                })}
            </Wrapper>
        </>
    )
}

export default AddValuePage