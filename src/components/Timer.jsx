import { useEffect, useState } from "react"

export default function Timer({onTimeUp}){
    const [time, setTime] = useState(15);
    useEffect(()=>{
        const intervalo = setInterval(()=>{
            setTime((t)=>{
                if(t <= 0){
                    clearInterval(intervalo);
                    if (onTimeUp) onTimeUp();
                    
                    return 15;
                }

                return t-1;
            })
        }, 1000);
        return () => clearInterval(intervalo);
    }, [onTimeUp])
    return <div id='timer'>{time}</div>
}