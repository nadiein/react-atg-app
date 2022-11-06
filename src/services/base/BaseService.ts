const handleError = (error:string) => {
    return error;
}

const http = (endpoint:string, method:string, headers:any, body:any=null) => fetch(endpoint, {
    method: method.toUpperCase(),
    headers: headers,
    mode: 'cors',
    body: body ? body : null
})

export { http, handleError };
