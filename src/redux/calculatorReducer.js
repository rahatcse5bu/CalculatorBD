import { evaluate } from "mathjs"

const initialState ={
    input_data : '',
    output_data:''
}
const calculatorReducer =(state=initialState,action)=>{
switch (action.type) {
    case 'button_press':
        // alert(action.payload)
       return {
        ...state, input_data: state.input_data+ action.payload
       }
    case 'function_press':
        // alert(action.payload)
       return {
        ...state, input_data: state.input_data+ action.payload
       }

       case '=':
        // alert(evaluate(state.input_data))
        try{
            return{
                ...state, output_data: evaluate(state.input_data)
             }
        }
        catch{
            return{
                ...state, output_data: 'Syntax Error'
             }
        }

        case 'ac':
            return{
                ...state,input_data: state.input_data.slice(0, -1) || ''
            }
        case 'clear':
            return{
                ...state,input_data: ''
            }

    default:
       return{ ...state}
}
}
export default calculatorReducer