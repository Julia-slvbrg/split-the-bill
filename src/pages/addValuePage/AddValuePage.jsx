import { useNavigate } from "react-router";
import ClientCheckInput from "../../components/clientCheckInput/clientCheckInput";
import { GlobalContext } from "../../components/contexts/GlobalContext"
import { useContext, useEffect } from "react"
import { goToMainPage } from "../../routes/coordinator";

export const AddValuePage = () => {

    const context = useContext(GlobalContext);
    const navigate = useNavigate();

    const {clientList, newFood, foodHandler, newValue, valueHandler, addOrder, payingClients, setPayingClients, checkedState, setCheckedState, reset} = context;

    useEffect(()=> {
        setCheckedState(new Array(clientList.length).fill(false));
        setPayingClients([]);
    }, [reset]);
    

    const handleOnChange = (position) => {
       /*  const updatedCheckedState = checkedState.map((item, index) =>
            index === position? !item : item
        ); */

        const updatedCheckedState = checkedState.map((item, index) =>{
            if(index === position){
                if(item == false){
                    setPayingClients([...payingClients, clientList[position]]);
                    console.log(clientList[position]);
                }else{
                    const updatePayignClient = payingClients.filter(client => client !== clientList[position]);
                    setPayingClients(updatePayignClient);
                }
                
                return !item
            }else{
                return item
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
            <div>

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

                    {clientList.map((client, index) =>{
                        return(
                            <ClientCheckInput
                                key={index}
                                index={index}
                                client={client.name}
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

            
                
            </div>
                
        </>
    )
}

export default AddValuePage