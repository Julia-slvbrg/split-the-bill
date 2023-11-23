import { useNavigate } from "react-router";
import ClientCheckInput from "../../components/clientCheckInput/clientCheckInput";
import { GlobalContext } from "../../components/contexts/GlobalContext"
import { useContext, useEffect } from "react"
import { goToMainPage } from "../../routes/coordinator";
import ClientCard from "../../components/clientCard/ClientCard";
import ServiceTaxModal from "../../components/modal/ServiceTaxModal";

export const AddValuePage = () => {

    const context = useContext(GlobalContext);
    const navigate = useNavigate();

    const {clientList, newFood, foodHandler, newValue, valueHandler, addOrder, payingClients, setPayingClients, checkedState, setCheckedState, reset,
    
        openModal, setOpenModal, addServiceTax
    } = context;

    useEffect(()=> {
        setCheckedState(new Array(clientList.length).fill(false));
        setPayingClients([]);
    }, [reset]);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>{
            if(index === position){
                if(item == false){
                    setPayingClients([...payingClients, clientList[position]]);
                    console.log(clientList[position]);
                }else{
                    const updatePayignClient = payingClients.filter(client => client !== clientList[position]);
                    setPayingClients(updatePayignClient);
                };
                
                return !item;
            }else{
                return item;
            }
        });

        setCheckedState(updatedCheckedState)  
    };

    const redefineTable = () => {
        goToMainPage(navigate);
        window.location.reload(false);
    };

    return(
        <>
            

                <button onClick={() => redefineTable()}>Redefinir os cliente da mesa</button>
                    
            <form onSubmit={addOrder}>
                <label htmlFor="food">
                    O que foi pedido
                    <p>*campo não obrigatório</p>
                </label>
                    <input
                        id="food"
                        name="food"
                        type="text"
                        value={newFood}
                        onChange={foodHandler}
                    />
                
                <label htmlFor="value">
                    Valor a ser dividido (R$):
                </label>
                    <input
                        id="value"
                        name="value"
                        type="text"
                        value={newValue}
                        onChange={valueHandler}
                        required
                    />
               
                    Dividir entre quem?

                    {clientList.map((client, index) => {
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
                      
                <button 
                    type="submit"
                >
                    Adicionar valor
                </button>
                    
            </form>

            {clientList.map((client, index) => {
                return(
                    <ClientCard
                        key={index}
                        index={index}
                        name={client.name}
                        totalAmount={client.total}
                    />
                )
            })}
 
           <>
                <ServiceTaxModal
                    openModal={openModal}
                    setOpenModal={() => setOpenModal(!openModal)}
                    addServiceTax={addServiceTax}

                />

                <button
                    onClick={() => setOpenModal(true)}
                >Fechar conta</button>
           
           </>
            
                
        </>
    )
}

export default AddValuePage