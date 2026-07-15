import { useEffect, useRef, useState } from "react";
import "./components.css";

export default function Timer({ onTimeUp, active, trigger, validating }) {
    const TIEMPO_INICIAL = 15;
    const [time, setTime] = useState(TIEMPO_INICIAL);

    const RADIUS = 40;
    const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

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
    };

    useEffect(() => {
        if (!active) return;
        const intervalo = setInterval(() => {
            setTime(handleTime);
        }, 1000);
        return () => clearInterval(intervalo);
    }, [active]);
    
    useEffect(() => {
        setTime(TIEMPO_INICIAL);
    }, [trigger]);

    const strokeDashoffset = CIRCUMFERENCE - (time / TIEMPO_INICIAL) * CIRCUMFERENCE;

    const itemClass = validating ? "wait" : "tick";

    return (
        <div className={`timer-container ${itemClass}`}>
            <svg className="timer-svg" width="100" height="100" viewBox="0 0 100 100">

                <circle
                    className="timer-circle-bg"
                    cx="50"
                    cy="50"
                    r={RADIUS}
                />

                <circle
                    className="timer-circle-progress"
                    cx="50"
                    cy="50"
                    r={RADIUS}
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={strokeDashoffset}
                />
            </svg>

            <div className="timer-number">{time}</div>
        </div>
    );
}