import {useEffect, useRef, useState} from "react"
import "./components.css"
export default function Timer({onTimeUp, active, trigger, validating}) {
    const TIEMPO_INICIAL = 15;
    const [time, setTime] = useState(15);

    const onTimeUpRef = useRef(onTimeUp);
    useEffect(() => {
        onTimeUpRef.current = onTimeUp;
    }, [onTimeUp]);

    const handleTime = (tiempoActual) => {
        if (tiempoActual <= 0) {
            if (onTimeUpRef.current) onTimeUpRef.current();
            return TIEMPO_INICIAL;
        }

        return tiempoActual - 1;
    }
    useEffect(() => {
        if (!active || validating) return;
        const intervalo = setInterval(() => {
            setTime(handleTime)
        }, 1000);
        return () => clearInterval(intervalo);
    }, [active, validating])

    const inicializado = useRef(false);
    useEffect(() => {
        if (!inicializado.current) {
            inicializado.current = true;
            return;
        }
        setTime(TIEMPO_INICIAL)

    }, [trigger])
    const itemClass = validating ? "wait" : "tick"
    return <div id="timer" className={itemClass}>{time}</div>
}