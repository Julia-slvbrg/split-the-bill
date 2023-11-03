export const clientCheckInput = ({ client, index }) => {
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

export default clientCheckInput