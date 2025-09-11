import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { RxCross1 } from "react-icons/rx";
import { openModal, closeModal } from '../utils/helper/scroll';


export default function Modal({children, isOpen, isClose}) {
    const modal = useRef()
    if(!isOpen) {
        closeModal()
        return null
    }
    openModal()
  return (
    createPortal(
        <div className='modal' onClick={isClose} ref={modal}>
            {/* <button onClick={isClose}>
                <RxCross1/>
            </button> */}
            <div className='modal_component' onClick={(e)=>e.stopPropagation()}>
                {
                    children
                }
            </div>
        </div>,
        document.getElementById("portal")
    )
  );
}
