import { Label } from "./ClientCheckInputStyle"

export const ClientCheckInput = ({ name, index, checkedState, handleOnChange }) => {
    return(
        <Label>
            <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={name}
                value={name}
                checked={checkedState || false}
                onChange={() => handleOnChange(index)}
            />
            {name}
        </Label>
    )
}

export default ClientCheckInput