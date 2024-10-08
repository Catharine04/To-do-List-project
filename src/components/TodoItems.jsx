import React from 'react';
import { IoIosCheckmarkCircle, IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      {/* Toggling the task completion */}
      <div onClick={() => toggle(id)} className='flex flex-1 items-center cursor-pointer'>
        {isComplete ? (
          <IoIosCheckmarkCircle className='w-7 text-3xl text-green-500' />
        ) : (
          <IoIosCheckmarkCircleOutline className='w-7 text-3xl text-slate-400' />
        )}
        
        {/* Text: conditionally applying color and strikethrough */}
        <p className={`ml-4 text-[17px] ${isComplete ? 'text-slate-700 line-through' : 'text-slate-700'}`}>
          {text}
        </p>
      </div>

      {/* Delete icon */}
      <RiDeleteBin5Fill onClick={() => deleteTodo(id)} className='cursor-pointer text-2xl text-red-500' />
    </div>
  );
};

export default TodoItems;
