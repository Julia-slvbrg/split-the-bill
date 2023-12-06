import { ADD_USER, DELETE_USER, ADD_VALUE, GET_TOTAL, ADD_SERVICE_TAX }  from '../actions/action_type'

export const ACTION_TYPES = {
    ADD_USER, 
    DELETE_USER,
    ADD_VALUE,
    GET_TOTAL,
    ADD_SERVICE_TAX
};

export const initialState = {
    clientList: []
};

export const clientReducer = (stateClientList = initialState, action) => {
    switch (action.type){
        case ACTION_TYPES.ADD_USER:
            return{
                ...stateClientList,
                clientList: [
                    ...stateClientList.clientList,
                    {
                        name: action.payload,
                        value: [],
                        total: 0
                    }
                ]
            };
        case ACTION_TYPES.DELETE_USER:
            return{
                ...stateClientList,
                clientList: stateClientList.clientList.filter((client) => client.name !== action.payload)
            };
        case ACTION_TYPES.ADD_VALUE:
            return{
                ...stateClientList,
                clientList: stateClientList.clientList.map(client => {

                    if(client.name === action.payload.clientName){
                        return{
                            ...client,
                            value: [...client.value, action.payload.dividedValue]
                        };
                    };

                    return client;
                })
            };
        case ACTION_TYPES.GET_TOTAL:
            return{
                ...stateClientList,
                clientList: stateClientList.clientList.map(client => {
                    let sumValue = 0;

                    if(client.value.length > 0){
                        sumValue = client.value.reduce((sum, currentValue) => sum + currentValue);
                        
                        return{
                            ...client,
                            total: sumValue
                        }
                    };

                    return client;
                })
            };
        case ACTION_TYPES.ADD_SERVICE_TAX:
            return{
                ...stateClientList,
                clientList: stateClientList.clientList.map(client => {
                    const newTotal = client.total * action.payload;

                    return{
                        ...client,
                        total: newTotal
                    }
                })
            }
    }
}
