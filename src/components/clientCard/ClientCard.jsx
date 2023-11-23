import { useLocation } from "react-router-dom";


export const ClientCard = ({ name, totalAmount, index, removeClient }) => {
    const location = useLocation();

    const chooseCard = () => {
        if(location.pathname === '/'){
            return(
                <div >
                    <p>{index + 1} - {name}</p> 
                    <button onClick={() => removeClient(name)}> - </button>
                </div>
            );

        }else if(location.pathname === '/addValues'){
            let parcialDivision = 0;

            if(totalAmount == undefined){ 
                totalAmount = 0
            }else{
                parcialDivision = totalAmount.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                });
            }; 

            return(
                <div>
                    <p>{index + 1} - {name}</p> 
                    <p>{parcialDivision}</p>
                </div>
            );

        }else{

            const amountToPay = totalAmount.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });

            return(
                <div>
                    <p>{index + 1} - {name}</p>
                    <p>{amountToPay}</p>
                </div>
            )
        }
    };
    
    return(
        <>
            {chooseCard()}
        </>
    )
}

export default ClientCard