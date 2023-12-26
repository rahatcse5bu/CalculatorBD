import { evaluate } from "mathjs"
const preprocessAndEvaluate = (expression) => {
    // A regex pattern to match trigonometric functions with degree values
    const trigFunctionPattern = /(sin|cos|tan)\((\d+)\)/g;
  
    // Replace degree values in trigonometric functions with their radian equivalents
    const processedExpression = expression.replace(trigFunctionPattern, (match, func, degrees) => {
      const radians = degrees * (Math.PI / 180);
      return `${func}(${radians})`;
    });
  
    return evaluate(processedExpression);
  }
const initialState ={
    input_data : '',
    output_data:'',
    isShift: false
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
    case 'shift':
        // alert(action.payload)
       return {
        ...state, isShift: !state.isShift
       }

       case '=':
        // alert(evaluate(state.input_data))
        try{
            return{
                ...state, output_data: preprocessAndEvaluate(state.input_data)
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
                ...state,input_data: '', 
            }

    default:
       return{ ...state}
}
}
export default calculatorReducer