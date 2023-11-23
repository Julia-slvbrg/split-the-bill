import { Backkground, Wrapper } from "./ServiceTaxModalStyle"
import { useNavigate } from "react-router-dom"
import { goToFinalValuePage } from "../../routes/coordinator";

export const ServiceTaxModadal = ({ openModal, setOpenModal, addServiceTax }) => {
    const navigate = useNavigate();

    if(openModal){
        return(
            <Backkground >
                <Wrapper>
                    <button 
                        onClick={setOpenModal}
                    >
                        X
                    </button>
                    <h1>Qual é a taxa de serviço?</h1>
                    <div>
                        <button 
                            onClick={() => {
                                addServiceTax(1.1)
                                goToFinalValuePage(navigate)
                            }}
                        >
                            10%
                        </button>
                        <button 
                            onClick={() => {
                                addServiceTax(1.15)
                                goToFinalValuePage(navigate)
                            }}
                        >
                            15%
                        </button>
                    </div>
                    
                </Wrapper>
            </Backkground>
        )
    }
}

export default ServiceTaxModadal