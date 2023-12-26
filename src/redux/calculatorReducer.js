import { evaluate } from "mathjs"

const initialState ={
    input_data : '0',
    output_data:''
}
const calculatorReducer =(state=initialState,action)=>{
switch (action.type) {
    case 'button_press':
        // alert(action.payload)
       return {
        ...state, input_data: state.input_data+ action.payload
       }
       case '=':
        // alert(evaluate(state.input_data))
        return{
           ...state, output_data: evaluate(state.input_data)
        }
        case 'ac':
            return{
                ...state,input_data: state.input_data.slice(0, -1) || '0'
            }
        case 'clear':
            return{
                ...state,input_data: '0'
            }

    default:
       return{ ...state}
}
}
export default calculatorReducer