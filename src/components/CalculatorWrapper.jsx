import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ac, buttonPress, clear, equalTo, isShift } from "../redux/calculatorActions";

const CalculatorWrapper = () => {
  const input_dt = useSelector((state) => state.input_data);
  const output_dt = useSelector((state) => state.output_data);
  const is_shift = useSelector((state) => state.isShift);
  const dispatch = useDispatch();
  return (
    <div className="calculator mx-auto w-[400px] m-4 p-6 rounded-md border-2 border-slate-800">
      <div
        style={{ backgroundColor: "#576E68" }}
        className="bg-slate-[#576E68] overflow-x-scroll text-white px-4 py-4 rounded-md mb-4"
      >
        {input_dt}
      </div>
      {(output_dt.length > 0 || output_dt)  &&  (
        <div
          style={{ backgroundColor: "#576E68" }}
          className="bg-slate-[#576E68] overflow-x-scroll text-white px-4 py-4 rounded-md mb-4"
        >
          {output_dt}
        </div>
      )}
      <div className="grid grid-cols-5 gap-4">
      {is_shift && (<div
          onClick={() => dispatch(isShift())}
          className="bg-yellow-700 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
        shift
        </div>)}
        {!is_shift && (<div
          onClick={() => dispatch(isShift())}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
        shift
        </div>)}        
        <div
          onClick={() => dispatch(buttonPress("1"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          1
        </div>
        <div
          onClick={() => dispatch(buttonPress("2"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          2
        </div>
        <div
          onClick={() => dispatch(buttonPress("3"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          3
        </div>
        <div
          onClick={() => dispatch(buttonPress("4"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          4
        </div>
        {/* number strats  */}
        <div
          onClick={() => dispatch(buttonPress("0"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          0
        </div>
        <div
          onClick={() => dispatch(buttonPress("1"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          1
        </div>
        <div
          onClick={() => dispatch(buttonPress("2"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          2
        </div>
        <div
          onClick={() => dispatch(buttonPress("3"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          3
        </div>
        <div
          onClick={() => dispatch(buttonPress("4"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          4
        </div>
        {/* 2nd row starts */}
        <div
          onClick={() => dispatch(buttonPress("5"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          5
        </div>
        <div
          onClick={() => dispatch(buttonPress("6"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          6
        </div>
        <div
          onClick={() => dispatch(buttonPress("7"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          7
        </div>
        <div
          onClick={() => dispatch(buttonPress("8"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          8
        </div>
        <div
          onClick={() => dispatch(buttonPress("9"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          9
        </div>
        {/* 3rd row starts  */}
        <div
          onClick={() => dispatch(buttonPress("+"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          +
        </div>
        <div
          onClick={() => dispatch(buttonPress("-"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          -
        </div>
        <div
          onClick={() => dispatch(buttonPress("*"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          *
        </div>
        <div
          onClick={() => dispatch(buttonPress("/"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          /
        </div>
        <div
          onClick={() => dispatch(buttonPress("%"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          %
        </div>
        {/* 4th row starts  */}
        {!is_shift && ( 
        <div
          onClick={() => dispatch(buttonPress("log("))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          log
        </div>
        )}
        {is_shift && ( 
        <div
          onClick={() => dispatch(buttonPress("ln("))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          ln
        </div>
        )}
        {!is_shift && (
        <div
          onClick={() => dispatch(buttonPress("tan("))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          tan
        </div>
        )}
        {is_shift && (
        <div
          onClick={() => dispatch(buttonPress("tan("))}
          className="bg-slate-900 text-white text-xs text-center font-semibold px-2 py-2 rounded-lg"
        >
          tan<sup className="text-xs" style={{fontSize:10}}>-1</sup>
        </div>
        )}
{!is_shift && (
            <div
            onClick={() => dispatch(buttonPress("sin("))}
            className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
          >
            sin
          </div>
)}
{is_shift && (
            <div
            onClick={() => dispatch(buttonPress("sin^-1("))}
            className="bg-slate-900 text-white text-xs text-center font-semibold px-2 py-2 rounded-lg"
          >
            sin<sup className="text-xs" style={{fontSize:10}}>-1</sup>
          </div>
)}
{!is_shift && (
        <div
          onClick={() => dispatch(buttonPress("cos("))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          cos
        </div>
)}
{is_shift && (
        <div
          onClick={() => dispatch(buttonPress("cos("))}
          className="bg-slate-900 text-white text-xs text-center font-semibold px-2 py-2 rounded-lg"
        >
          cos<sup className="text-xs" style={{fontSize:10}}>-1</sup>
        </div>
)}
        <div
          onClick={() => dispatch(buttonPress("cot("))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          cot
        </div>
        {/* 5th row strats  */}
        {!is_shift && (
        <div
          onClick={() => dispatch(buttonPress(")"))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          )
        </div>
        )}
        {is_shift && (
        <div
          onClick={() => dispatch(buttonPress("("))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          (
        </div>
        )}
        <div
          onClick={() => dispatch(ac())}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          AC
        </div>
        <div
          onClick={() => dispatch(clear())}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          Clear
        </div>
        <div
          onClick={() => dispatch(buttonPress(output_dt))}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          Ans
        </div>
        <div
          onClick={() => dispatch(equalTo())}
          className="bg-slate-900 text-white text-center font-semibold px-4 py-2 rounded-lg"
        >
          =
        </div>
      </div>
    </div>
  );
};

export default CalculatorWrapper;
