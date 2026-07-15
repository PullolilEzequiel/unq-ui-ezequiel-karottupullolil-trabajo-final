import {useEffect, useState} from "react";
import {listarPuntajes, quitarUsuario} from "../../services/gameServices.js";
import TablaDePuntajes from "../../components/tables/TablaDePuntajes";
import {useLocation, useNavigate} from "react-router-dom";

import "./gameOver.css"

export default function GameOver() {
    const location = useLocation();
    const navigate = useNavigate();
    const [puntajesData, setData] = useState([]);

    const {puntaje , cantidadDePalabrasValidas } = location.state || {};
    useEffect(() => {
        setData(listarPuntajes())
    }, [puntaje , cantidadDePalabrasValidas])

    const volverAtras = () => {
        navigate("/")
    }

    const volverAtrasYCambiarNombre = () => {
        quitarUsuario()
        volverAtras()
    }
    return <div id="container">
        {puntaje && cantidadDePalabrasValidas ? <div id="resumen-partida">
            <h1>Perdiste!</h1>
            <p>Puntaje final: <strong>{puntaje}</strong></p>
            <p>Palabras encadenadas: <strong>{cantidadDePalabrasValidas}</strong></p>
        </div> : (
            <div id="resumen-partida">
                <h1>Top 10 de las mejores jugadas</h1>
            </div>
        )}

        <div id="lose-actions">
            <button onClick={volverAtras} className="back-button">Volver a jugar</button>
            <button onClick={volverAtrasYCambiarNombre} className="back-button">Cambiar nombre y volver a jugar</button>
        </div>

        <div className="tabla-wrapper-compartida">
            <TablaDePuntajes data={puntajesData}/>
        </div>
    </div>
}