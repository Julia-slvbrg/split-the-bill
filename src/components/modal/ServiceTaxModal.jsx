import { Backkground, ContentContainer, Heading, Wrapper, CloseBtn, CloseBtnSection, TaxBtnSection } from "./ServiceTaxModalStyle"
import { useNavigate } from "react-router-dom"
import { goToFinalValuePage } from "../../routes/coordinator";

export const ServiceTaxModadal = ({ openModal, setOpenModal, addServiceTax }) => {
    const navigate = useNavigate();

    if(openModal){
        return(
            <Backkground >
                <Wrapper>
                    <ContentContainer>

                        <CloseBtnSection>
                            <CloseBtn 
                                onClick={setOpenModal}
                            >
                                <span class="material-symbols-outlined">
                                    close
                                </span>
                            
                            </CloseBtn>
                        </CloseBtnSection>
                        
                        <Heading>Qual é a taxa de serviço?</Heading>

                        <TaxBtnSection>
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
                        </TaxBtnSection>



                    </ContentContainer>
                    {/* <div>
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
                    </div> */}
                    
                </Wrapper>
            </Backkground>
        )
    }
}

export default ServiceTaxModadal