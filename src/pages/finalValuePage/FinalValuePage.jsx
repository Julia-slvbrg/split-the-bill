import { useContext } from "react"
import ClientCard from "../../components/clientCard/ClientCard";
import { GlobalContext } from "../../components/contexts/GlobalContext";
import { goToMainPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { ResetTableBtn, Title, Wrapper } from "./FinalValuePageStyle";

function FinalValuePage() {
    const context = useContext(GlobalContext);
    const navigate = useNavigate();

    const {clientList} = context;

    const resetTable = () => {
        goToMainPage(navigate);
        window.location.reload(false)
    };

    return(
        <Wrapper>
            <Title>Os valores que cada um deve pagar são:</Title>
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

            <ResetTableBtn 
                onClick={() => resetTable()}
            >Montar nova mesa</ResetTableBtn>
        </Wrapper>
    )
}

export default FinalValuePage