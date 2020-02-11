const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

function ua(state = INITIAL_STATE, action) {
    console.log('########## ua')
    if (action.type === 'LOAD_UA_REQUEST') {
        console.log('########## ua LOAD_UA_REQUEST')
        return {
            isFetching: true,
            data: [],
            error: false
        }
    } else if (action.type === 'LOAD_UA_SUCESS') {
        console.log('########## ua LOAD_UA_SUCESS')
        return {
            isFetching: false,
            data: action.data,
            error: false
        }
    } else if (action.type === 'LOAD_UA_ERROR') {
        console.log('########## ua LOAD_UA_ERROR')
        return {
            isFetching: false,
            data: [],
            error: true
        }
    }
    return state
}

export default ua