import { useLocation } from "react-router-dom";


export const ClientCard = ({ name, totalAmount, index, removeClient }) => {
    const location = useLocation();

    let parcialDivision = 0;
    if(totalAmount == undefined){ 
        totalAmount = 0
    }else{
        parcialDivision = totalAmount.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };
 

    const chooseCard = () => {
        if(location.pathname === '/'){
            return(
                <div >
                    <p>{index + 1} - {name}</p> 
                    <button onClick={() => removeClient(name)}> - </button>
                </div>
            )
        }else if(location.pathname === '/addValues'){
            return(
                <div>
                    <p>{index + 1} - {name}</p> 
                    <p>{parcialDivision}</p>
                </div>
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