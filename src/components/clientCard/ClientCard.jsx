import { useLocation } from "react-router-dom";
import { CardBtnSection, CardValueSection } from "./ClientCardStyle";


export const ClientCard = ({ name, totalAmount, index, removeClient }) => {
    const location = useLocation();

    const chooseCard = () => {
        if(location.pathname === '/'){

            return(
                <CardBtnSection>
                    <p>{index + 1} - {name}</p> 
                    <button 
                        className="removeClientBtn"
                        onClick={() => removeClient(name)}
                    >
                        <span className="material-symbols-outlined">
                            remove
                        </span>
                    </button>
                </CardBtnSection>
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
                <CardValueSection>
                    <p className="clientName">{index + 1} - {name}</p> 
                    <p className="value">{parcialDivision}</p>
                </CardValueSection>
            );

        }else{
            const amountToPay = totalAmount.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });

            return(
                <CardValueSection>
                    <p className="clientName">{index + 1} - {name}</p>
                    <p className="value">{amountToPay}</p>
                </CardValueSection>
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