export const ClientCheckInput = ({ client, index }) => {
    return(
       
        <label>
            <input
                type="checkbox"
                id='qq'
                name="client"
                value={index}
            />
            {client}
        </label>
    )
}

export default ClientCheckInput