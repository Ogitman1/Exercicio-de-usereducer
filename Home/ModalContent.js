import { useEffect } from "react";
import { closeModal } from "./Home";

const ModalContent = ({ModalContent, closeModal}) => {
    
        useEffect(()=>{
        setTimeout(()=>{
            closeModal()
        },2000)
        
    },[])
                
    return <h4>{ModalContent}</h4>
            
        
}
export default ModalContent;