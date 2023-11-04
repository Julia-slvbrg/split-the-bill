import ClientCheckInput from "../../components/clientCheckInput/clientCheckInput";
import { GlobalContext } from "../../components/contexts/GlobalContext"
import { useContext } from "react"

export const AddValuePage = () => {

    const context = useContext(GlobalContext);

    const {clientList, newFood, foodHandler, newValue, valueHandler} = context;


    return(
        <>
                <div>
                    
                    <form>
                        <label htmlFor="food">
                            O que foi pedido
                            <p>*campo não obrigatório</p>
                            <input
                                id="food"
                                name="food"
                                type="text"
                                value={newFood}
                                onChange={foodHandler}
                            />
                        </label>
                        <label htmlFor="value">
                            Valor a ser dividido (R$):
                            <input
                                id="value"
                                name="value"
                                type="number"
                                value={newValue}
                                onChange={valueHandler}
                            />
                        </label>

                            Dividir entre quem?

                            {clientList.map((client, index) =>{
                                    return(
                                        <ClientCheckInput
                                            key={index}
                                            index={index}
                                            client={client}
                                        />
                                    )
                                })}
                      

                        <button>Adicionar valor</button>
                    </form>
                
                </div>
                
        </>
    )
}

export default AddValuePage