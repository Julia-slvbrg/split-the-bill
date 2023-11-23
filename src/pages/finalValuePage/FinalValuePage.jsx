import { useContext } from "react"
import ClientCard from "../../components/clientCard/ClientCard";
import { GlobalContext } from "../../components/contexts/GlobalContext";
import { goToMainPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

function FinalValuePage() {
    const context = useContext(GlobalContext);
    const navigate = useNavigate();

    const {clientList} = context;

    const resetTable = () => {
        goToMainPage(navigate);
        window.location.reload(false)
    };

    return(
        <>
            <h1>Os valores que cada um deve pagar são:</h1>
            {clientList.map((client, index) => {
                return(
                    <ClientCard
                        key={index}
                        index={index}
                        name={client.name}
                        totalAmount={client.total}
                    />
                )
            })}

            <button onClick={() => resetTable()}>Montar nova mesa</button>
        </>
    )
}

export default FinalValuePage