import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

export default function GlobaState({ children }) {

    const [clientList, setClientList] = useState([]);
    const [newClient, setNewClient] = useState('');
    const [newFood, setNewFood] = useState('');
    const [food, setFood] = useState([]);
    const [newValue, setNewValue] = useState();
    const [orderObj, setOrderObj] = useState([]);


    const clientHandler = (e) => {
        setNewClient(e.target.value)
    };

   
    const addClient =  (e) => {
        e.preventDefault()

        if(newClient === '' || newClient === ' ') return alert('O nome não pode ser vazio.');

        const checkClient = clientList.find((client) => client.toLocaleLowerCase() === newClient.toLocaleLowerCase());
        
        if(!checkClient){
            setClientList([...clientList, newClient])
            setNewClient('')
        }else{
            alert('O nome já foi cadastrado.')
        }
    };

    const removeClient = (clientName) => {
        const newList = clientList.filter((client) => client !== clientName);

        return setClientList(newList);
    };

    const foodHandler = (e) => {
        setNewFood(e.target.value)
    };

    const valueHandler = (e) => {
        
        setNewValue(e.target.value)

        /* if(e.target.value !== '' || e.target.value !== ' '){
        
        e.target.value.match(/^\d+$/)? setNewValue(e.target.value) : null
        }else{

        } */ // ISSO VAI NA VALIDAÇÃO SE A PESSOA COLOCOU O VALOR NO INPUT
        

    }

    const addOrder = (e) => {
        //função para adicionar o objeto com o nome da comida, o valor e que consumiu
    }

    console.log({clientList});

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
        addOrder
    }


    return(
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
}