import React from "react";


const Model = ({show,setShow, children}) =>{
    if(!show) return null;
    function close(){
        setShow(false)
    }
    return (
        <>
        <div className="overlay">
            <button className="close" onClick={close}>X</button>
            <div className="content">{children}</div>
        </div>
        </>
    )
}
export default Model;