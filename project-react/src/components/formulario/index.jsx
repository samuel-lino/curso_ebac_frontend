import { useState } from "react"


const Formulario = ()=>{
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const maiorQue = ()=>{
        if(num1 > num2){
            return(
                <p>O número {num1} é maior que o número {num2}</p>
            )
        }
        else if(num1 < num2){
            return(
                <p>O número {num2} é maior que o número {num1}</p>
            )
        }
        else{
            return(
                <p>O número {num1} é igual ao número {num2}</p>
            )
        }
    }

    return (
        <>
        <input type="number" placeholder="primeiro numero" onChange={(evento)=>{setNum1(evento.target.value)}}/>
        <input type="number" placeholder="segundo numero" onChange={(evento)=>{setNum2(evento.target.value)}}/>
        {maiorQue()}
        </>
    )
}

export default Formulario