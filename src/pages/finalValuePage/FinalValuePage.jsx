import { useContext } from "react"
import ClientCard from "../../components/clientCard/ClientCard";
import { GlobalContext } from "../../components/contexts/GlobalContext";

function FinalValuePage() {
    const context = useContext(GlobalContext);

    const {clientList} = context
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
        </>
    )
}

export default FinalValuePage