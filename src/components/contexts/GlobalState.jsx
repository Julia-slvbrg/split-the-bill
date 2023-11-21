import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

export default function GlobaState({ children }) {

    const [clientList, setClientList] = useState([]);
    const [newClient, setNewClient] = useState('');
    const [newFood, setNewFood] = useState('');
    const [newValue, setNewValue] = useState('');
    const [payingClients, setPayingClients] = useState([]);
    const [checkedState, setCheckedState] = useState([]);
    const [reset, setReset] = useState(false);


    const clientHandler = (e) => {
        setNewClient(e.target.value)
    };

    const addClient = (e) => {
        e.preventDefault()

        if(newClient === '' || newClient === ' ') return alert('O nome não pode ser vazio.');

        const checkClient = clientList.find((client) => client.name.toLocaleLowerCase() === newClient.toLocaleLowerCase());
        
        if(!checkClient){
            setClientList([...clientList,
                {
                    name: newClient,
                    food: [],
                    value: []
                }
            ]);
            setNewClient('');
        }else{
            alert('O nome já foi cadastrado.')
        }
    };

    const removeClient = (clientName) => {

        const newList = clientList.filter((client) => client.name !== clientName);

        return setClientList(newList);
    };

    const foodHandler = (e) => {
        setNewFood(e.target.value)
    };
 
    const valueHandler = (e) => {
        setNewValue(e.target.value)
    };

    const updateClientList = (newFood, dividedValue) => {
        setClientList(prevClientList => {
            const updatedClients = prevClientList.map(client => {
                
                const payingClient = payingClients.find(payingClient => payingClient.name === client.name);

                if(payingClient){
                    return{
                        ...client,
                        food: [...client.food, newFood],
                        value: [...client.value, dividedValue]
                    }
                };

                return client;
            });

            return updatedClients;
        })
    };

    const addOrder = (e) => {
        e.preventDefault();

        const checkSelectedClient = checkedState.includes(true);

        if(newValue === '' || newValue === ' ') return alert('O valor não pode ser vazio.');

        if(checkSelectedClient === false) return alert('Selecione os clientes para dividir o valor.');

        const valueNumb = Number(newValue.replace(',', '.'));
        const dividedValue = Number((valueNumb/payingClients.length).toFixed(2));

        updateClientList(newFood, dividedValue)
       
        setNewValue('');
        setNewFood('');

        setReset(!reset) 
    };

    console.log(clientList);

    const data = {
        clientList, 
        addClient,
        removeClient, 
        clientHandler, 
        newClient, 
        newFood, 
        foodHandler, 
        newValue, 
        valueHandler, 
        addOrder,
        payingClients,
        setPayingClients,
        checkedState, 
        setCheckedState,
        reset
    }

    return(
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
}