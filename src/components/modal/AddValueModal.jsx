import { Backkground, Wrapper } from "./AddValueMoadlStyle"
import clientCheckInput from "../clientCheckInput/clientCheckInput"

export const AddValueModal = ({ openModal, setOpenModal, clientList, newFood, foodHandler, newValue, valueHandler, addOrder }) => {

    console.log(clientList);

    if(openModal){
        return(
            <Backkground >
                <Wrapper>
                    <button
                        onClick={setOpenModal}
                    >XX</button>
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
                                        <clientCheckInput
                                            key={index}
                                            index={index}
                                            client={client}
                                        />
                                    )
                                })}
                      

                        <button>Adicionar valor</button>
                    </form>
                
                </Wrapper>
                
            </Backkground>
        )
    }
    
}

export default AddValueModal