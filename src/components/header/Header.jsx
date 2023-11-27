import { Icon, Wrapper } from "./HeaderStyle"

export const Header = () => {
    
    return(
        <Wrapper>
            <Icon className="fa-solid fa-calculator" style={{color: '#221f51'}}></Icon>
            <h1>Divide a conta</h1>
        </Wrapper>
    )
}