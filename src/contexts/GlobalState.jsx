import { useReducer, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { clientReducer, initialState } from "../store/reducers/clientListReducer";

export default function GlobalState({ children }) {
    const [newClient, setNewClient] = useState('');
    const [newValue, setNewValue] = useState('');
    const [payingClients, setPayingClients] = useState([]);
    const [checkedState, setCheckedState] = useState([]);
    const [reset, setReset] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [stateClientList, dispatch] = useReducer(clientReducer, initialState);

    const clientHandler = (e) => {
        setNewClient(e.target.value)
    };

    const addClient = (e) => {
        e.preventDefault()

        if(newClient === '' || newClient === ' ') return alert('O nome não pode ser vazio.');

        const checkClient = stateClientList.clientList.find((client) => client.name.toLocaleLowerCase() === newClient.toLocaleLowerCase());
        
        if(!checkClient){
            dispatch({
                type: 'ADD_USER',
                payload: newClient
            });
            setNewClient('');
        }else{
            alert('O nome já foi cadastrado.')
        }
    };

    const removeClient = (clientName) => {
        dispatch({
            type: 'DELETE_USER',
            payload: clientName
        });
    };
 
    const valueHandler = (e) => {
        setNewValue(e.target.value)
    };

    const updateClientList = (dividedValue) => {
        
        const updatedClients = stateClientList.clientList.map(client => {
            const payingClient = payingClients.find(payingClient => payingClient.name === client.name);

                if(payingClient){
                    dispatch({
                        type: 'ADD_VALUE',
                        payload: {
                            clientName: client.name,
                            dividedValue: dividedValue
                        }
                    })
                };
        });
        return updatedClients
    };

    const getTotalValue = () => {
        dispatch({
            type: 'GET_TOTAL'
        })
    };

    const addOrder = (e) => {
        e.preventDefault();

        const checkSelectedClient = checkedState.includes(true);

        if(newValue === '' || newValue === ' ') return alert('O valor não pode ser vazio.');
        if(checkSelectedClient === false) return alert('Selecione os clientes para dividir o valor.');

        const valueNumb = Number(newValue.replace(',', '.'));
        const dividedValue = Number((valueNumb/payingClients.length).toFixed(2));

        updateClientList(dividedValue);
        getTotalValue();
        setNewValue('');
        setReset(!reset) 
    };

    const addServiceTax = (serviceTax) => {
        dispatch({
            type: 'ADD_SERVICE_TAX',
            payload: serviceTax
        })
    };

    const data = {
        addClient,
        removeClient, 
        clientHandler, 
        newClient, 
        newValue, 
        valueHandler, 
        addOrder,
        payingClients,
        setPayingClients,
        checkedState, 
        setCheckedState,
        reset,
        openModal, 
        setOpenModal,
        addServiceTax,
        stateClientList
    };
   

    return(
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
}