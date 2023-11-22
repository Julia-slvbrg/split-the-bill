export const ClientCheckInput = ({ name, index, checkedState, handleOnChange }) => {
    return(
       
        <label>
            <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={name}
                value={name}
                checked={checkedState || false}
                onChange={() => handleOnChange(index)}
            />
            {name}
        </label>
    )
}

export default ClientCheckInput