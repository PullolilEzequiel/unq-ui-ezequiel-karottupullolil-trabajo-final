import { useEffect, useState } from "react"

export default function Timer({onTimeUp, active}){
    const [time, setTime] = useState(15);

    const handleTime = (tiempoActual)=>{
        if(tiempoActual <= 0){
            if(onTimeUp) onTimeUp();

            return 15;
        }

        return tiempoActual-1;
    }
    useEffect(()=>{
        if(!active) return;
        const intervalo = setInterval(()=>{
            setTime(handleTime)
        }, 1000);
        return () => clearInterval(intervalo);
    }, [active, onTimeUp])
    return <div id='timer'>{time}</div>
}