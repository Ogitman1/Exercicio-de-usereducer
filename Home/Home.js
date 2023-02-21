import { useReducer, useState } from "react";
import ModalContent from "./ModalContent";
function Home (){
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
const reducer = (state, action) => {
        const newconst = [...state.lista, action.payload]
        if(action.type === "TRUE"){
            return {
                ...state,
                lista: newconst,
                isModalOpen: true,
                ModalContent: "Campo preenchido!"

            }
        }
        if (action.type === "FALSE"){
            return {
                ...state,
                isModalOpen: true,
                ModalContent: "Campo faltando informações"
            }
        }
        if (action.type === "CLOSE"){
            return{
                ...state,
                isModalOpen: false,
                ModalContent: ""
            }
        }
        throw new Error("Invalid request");

    }
    const UseState = {
        lista: [],
        isModalOpen: false,
        ModalContent: ""
    }
    const [state, dispatch] = useReducer(reducer, UseState)
   
    const sendanswer = (e) => {
        e.preventDefault();
        const payload = ({id: new Date().getTime().toString(), name:name, email: email})
        if (name && email){
            dispatch({type: "TRUE", payload: payload})
            setname("")
            setemail("")
        }
        else{
            dispatch({type: "FALSE"})
        }
        
    } 
    const closeModal = () => {
            dispatch({type: "CLOSE"})
        }
    return(
        <div>
            {state.isModalOpen && <ModalContent closeModal = {closeModal} ModalContent={state.ModalContent} />}
            <label>Nome:</label>
            <input type="text"  value = {name} onChange={(e) => setname(e.target.value)}></input>
            <label>Email:</label>
            <input type="email" value= {email} onChange={(e) => setemail(e.target.value)}></input>
            <button type="submit" onClick={sendanswer}>Enviar</button>
            {state.lista.map((item) =>{
                const {name, email} = item;
                return(
                    <div>
                        <h2> {name}</h2>
                        <p> {email} </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;