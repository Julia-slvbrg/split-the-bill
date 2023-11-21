export const ClientCheckInput = ({ client, index, checkedState, handleOnChange }) => {
    return(
       
        <label>
            <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={client}
                value={client}
                checked={checkedState || false}
                onChange={() => handleOnChange(index)}
            />
            {client}
        </label>
    )
}

export default ClientCheckInput