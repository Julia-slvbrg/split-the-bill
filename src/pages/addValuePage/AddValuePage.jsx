import { useNavigate } from "react-router";
import ClientCheckInput from "../../components/clientCheckInput/clientCheckInput";
import { GlobalContext } from "../../components/contexts/GlobalContext"
import { useContext, useEffect, useState } from "react"

export const AddValuePage = () => {

    const context = useContext(GlobalContext);
    const navigate = useNavigate();



    const {clientList, newFood, foodHandler, newValue, valueHandler, addOrder,
        payingClient,
        setPayingClient,
        checkedState, 
        setCheckedState,
    } = context;

    useEffect(()=> {
        setCheckedState(new Array(clientList.length).fill(false));
    }, [])
    

    const handleOnChange = (position) => {
       /*  const updatedCheckedState = checkedState.map((item, index) =>
            index === position? !item : item
        ); */

        const updatedCheckedState = checkedState.map((item, index) =>{
            if(index === position){
                if(item == false){
                    setPayingClient([...payingClient, clientList[position]]);
                    console.log(clientList[position]);
                }else{
                    const updatePayignClient = payingClient.filter(client => client !== clientList[position]);
                    setPayingClient(updatePayignClient);
                }
                
                return !item
            }else{
                return item
            }
        });

        setCheckedState(updatedCheckedState)  
        console.log(updatedCheckedState);         
    }

    
   console.log(payingClient);
    return(
        <>
            <div>

                <button onClick={() => navigate(-1)}>Voltar</button>
                    
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
                                client={client}
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