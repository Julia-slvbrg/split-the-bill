export const ClientCard = ({ client, index, removeClient }) => {
    return(
        <>
            <p>{index + 1} - {client}</p> 
            <button onClick={() => removeClient(client)}> - </button>
        </>
    )
}

export default ClientCard