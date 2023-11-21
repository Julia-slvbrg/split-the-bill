import { useLocation } from "react-router-dom"

export const ClientCard = ({ client, value, index, removeClient }) => {
    const location = useLocation();

    console.log(value);
    
    let sumValue = 0;

    value && value.length > 0? sumValue = value.reduce((sum, currentValue) => sum + currentValue) : null;
    
    let total = sumValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    const chooseCard = () => {
        if(location.pathname === '/'){
            return(
                <>
                    <p>{index + 1} - {client}</p> 
                    <button onClick={() => removeClient(client)}> - </button>
                </>
            )
        }else if(location.pathname === '/addValues'){
            return(
                <>
                    <p>{index + 1} - {client}</p> 
                    <p>{total}</p>
                </>
            )
        }
    }
    
    return(
        <>
            {chooseCard()}
        </>
        
    )
}

export default ClientCard