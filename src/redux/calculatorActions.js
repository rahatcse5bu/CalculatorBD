export const buttonPress= (data)=>{
    return {
        type: 'button_press',
        payload: data
    }
}
export const functionPress= (data)=>{
    return {
        type: 'function_press',
        payload: data
    }
}
export const isShift= ()=>{
    return {
        type: 'shift',
      
    }
}

export const equalTo= ()=>{
    return {
        type: '=',
    }
}
export const ac= ()=>{
    return {
        type: 'ac',
    }
}
export const clear= ()=>{
    return {
        type: 'clear',
    }
}