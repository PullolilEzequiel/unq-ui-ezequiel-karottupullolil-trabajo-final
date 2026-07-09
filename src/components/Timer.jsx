import {useEffect, useState} from "react"

export default function Timer({onTimeUp, active, trigger}) {
    const TIEMPO_INICIAL = 15;
    const [time, setTime] = useState(15);

    const handleTime = (tiempoActual) => {
        if (tiempoActual <= 0) {
            if (onTimeUp) onTimeUp();

            return TIEMPO_INICIAL;
        }

        return tiempoActual - 1;
    }
    useEffect(() => {
        if (!active) return;
        const intervalo = setInterval(() => {
            setTime(handleTime)
        }, 1000);
        return () => clearInterval(intervalo);
    }, [active, onTimeUp])

    useEffect(() => {
        if (trigger === 0) return;
        setTime(TIEMPO_INICIAL)

    }, [trigger])
    return <div id='timer'>{time}</div>
}