import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

export default function GlobaState({ children }) {

    const [clientList, setClientList] = useState([]);
    const [newClient, setNewClient] = useState('');
    const [newFood, setNewFood] = useState('');
    const [newValue, setNewValue] = useState('');
    const [payingClient, setPayingClient] = useState([]);
    const [newOrderObj, setNewOrderObj] = useState([]);


    const [checkedState, setCheckedState] = useState([]);


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

    //console.log(clientListObj);

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

    const addOrder = (e) => {
        e.preventDefault();

        if(newValue === '' || newValue === ' ') return alert('O valor não pode ser vazio.');

        const valueNumb = Number(newValue.replace(',', '.'));
        const dividedValue = valueNumb/payingClient.length;


        setNewOrderObj(
            [
                ...newOrderObj,
                {
                    food: newFood,
                    value: dividedValue
                }
            ]
        );
        
        setNewValue('');
        setNewFood('');
    };

    //console.log(newOrderObj);

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

        payingClient,
        setPayingClient,

        checkedState, 
        setCheckedState,
    }

    return(
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
}