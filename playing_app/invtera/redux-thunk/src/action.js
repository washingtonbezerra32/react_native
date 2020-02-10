import axios from "axios"

export function loadDataRequest(){
    return {
        type: 'LOAD_DATA_REQUEST'
    }
}

export function loadDataError(){
    return {
        type: 'LOAD_DATA_ERROR'
    }
}

export function loadDataSuccess(data){
    return {
        type: 'LOAD_DATA_SUCCESS',
        data
    }
}


export function loadData(){
    return dispacth => {
        dispacth(loadDataRequest())
        axios.get('http://httpbin.org/ip')
        .then( ({data}) => dispacth(loadDataSuccess(data)))
        .catch( () => dispacth(loadDataError())) 
    }
}

export function loadUARequest(){
    return {
        type: 'LOAD_UA_REQUEST'
    }
}

export function loadUAError(){
    return {
        type: 'LOAD_UA_ERROR'
    }
}

export function loadUASucess(data){
    return {
        type: 'LOAD_UA_SUCESS',
        data
    }
}

export function loadUA(axios) {
    return dispacth => {
        dispacth(loadDataRequest())
        axios.get('http://httpbin.org/user-agent').then(({data}) => dispacth(loadUASucess(data)))
        .catch( () => dispacth(loadUAError()))
    }
}

export default {
    loadUA: loadUA.bind(null, axios)
}


