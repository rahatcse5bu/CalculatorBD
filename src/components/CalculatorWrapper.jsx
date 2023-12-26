import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ac, buttonPress, clear, equalTo } from '../redux/calculatorActions';

const CalculatorWrapper = () => {
    const  input_dt= useSelector(
state=> state.input_data
    )
    const output_dt = useSelector(
state=> state.output_data
    )
    const dispatch = useDispatch()
    return (
        <div className='calculator mx-auto w-[400px] m-4 p-6 rounded-md border-2 border-slate-800'>
            <div style={{backgroundColor: '#576E68'}} className='bg-slate-[#576E68] text-white px-4 py-4 rounded-md mb-4'>{input_dt}</div>
            <div style={{backgroundColor: '#576E68'}} className='bg-slate-[#576E68] text-white px-4 py-4 rounded-md mb-4'>{output_dt}</div>
            <div className='grid grid-cols-5 gap-4'>
                <div onClick={()=>dispatch(buttonPress('0'))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    0
                </div>
                <div onClick={()=>dispatch(buttonPress('1'))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    1
                </div>
                <div onClick={()=>dispatch(buttonPress('2'))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    2
                </div>
                <div onClick={()=>dispatch(buttonPress('3'))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    3
                </div>
                <div onClick={()=>dispatch(buttonPress('4'))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    4
                </div>
            {/* 2nd row starts */}
                <div onClick={()=>dispatch(buttonPress('5'))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    5
                </div>
                <div onClick={()=>dispatch(buttonPress('6'))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    6
                </div>
                <div onClick={()=>dispatch(buttonPress('7'))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    7
                </div>
                <div onClick={()=>dispatch(buttonPress('8'))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    8
                </div>
                <div onClick={()=>dispatch(buttonPress('9'))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    9
                </div>
                {/* 3rd row starts  */}
                <div onClick={()=>dispatch(buttonPress('+'))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    +
                </div>
                <div onClick={()=>dispatch(buttonPress('-'))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    -
                </div>
                <div onClick={()=>dispatch(buttonPress('*'))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    *
                </div>
                <div onClick={()=>dispatch(buttonPress('/'))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    /
                </div>
                <div onClick={()=>dispatch(buttonPress('%'))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    %
                </div>
                {/* 4th row starts  */}
                <div onClick={()=>dispatch(buttonPress('log('))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    Log
                </div>
                <div onClick={()=>dispatch(buttonPress('tan('))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    tan
                </div>
                <div onClick={()=>dispatch(buttonPress('sin('))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    sin
                </div>
                <div onClick={()=>dispatch(buttonPress('cos('))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    cos
                </div>
                <div onClick={()=>dispatch(buttonPress('cot('))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    cot
                </div>
                {/* 5th row strats  */}
                <div onClick={()=>dispatch(buttonPress(')'))} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    )
                </div>
                <div onClick={()=>dispatch(ac())} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    AC
                </div>
                <div onClick={()=>dispatch(clear())} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    Clear
                </div>
                <div onClick={()=>dispatch(equalTo())} className='bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg'>
                    =
                </div>
         
             
               
             
            </div>
        </div>
    );
};

export default CalculatorWrapper;