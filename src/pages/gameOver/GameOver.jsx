import { useEffect, useState } from "react";
import { obtenerPuntajes, vaciarNombre } from "../../services/userServices";
import TablaDePuntajes from "../../components/tables/TablaDePuntajes";
import {useLocation, useNavigate} from "react-router-dom";

import "./gameOver.css"
export default function GameOver(){
    const location = useLocation();
    const navigate = useNavigate();
    const [puntajesData, setData] = useState([]);

    const { puntaje = 0, cantidadDePalabrasValidas = 0 } = location.state || {};
    useEffect(()=>{
        setData(obtenerPuntajes())
    }, [])

    const volerAtras = ()=>{
        navigate("/")
    }

    const volerAtrasYCambiarNombre = ()=>{
        vaciarNombre()
        volerAtras()
    }
    return <div id="container">
        <div className="message">
            <h1>Perdiste!</h1>
        </div>

        <div id="resumen-partida">
            <p>Puntaje final: <strong>{puntaje}</strong></p>
            <p>Palabras encadenadas: <strong>{cantidadDePalabrasValidas}</strong></p>
        </div>
        <div id="lose-actions">
            <button onClick={volerAtras} className="back-button" >Volver a jugar</button>
            <button onClick={volerAtrasYCambiarNombre} className="back-button" >Cambiar nombre y volver a jugar</button>
        </div>

        <TablaDePuntajes data={puntajesData} />
    </div>
}