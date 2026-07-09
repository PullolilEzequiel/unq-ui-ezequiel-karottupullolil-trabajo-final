import {useEffect,  useState} from "react";
import {guardarPuntaje, listarPuntajes, quitarUsuario} from "../../services/gameServices.js";
import TablaDePuntajes from "../../components/tables/TablaDePuntajes";
import {useLocation, useNavigate} from "react-router-dom";

import "./gameOver.css"

export default function GameOver() {
    const location = useLocation();
    const navigate = useNavigate();
    const [puntajesData, setData] = useState([]);

    const {id, puntaje , cantidadDePalabrasValidas } = location.state || {};
    useEffect(() => {
        if(id){
            guardarPuntaje({
                id: id,
                puntajeTotal: puntaje,
                cantidadDePalabras: cantidadDePalabrasValidas
            });
        }

        setData(listarPuntajes())
    }, [id, puntaje, cantidadDePalabrasValidas])

    const volverAtras = () => {
        navigate("/")
    }

    const volverAtrasYCambiarNombre = () => {
        quitarUsuario()
        volverAtras()
    }
    return <div id="container">
        <div className="message">
            <h1>Perdiste!</h1>
        </div>
        {id && <div id="resumen-partida">
            <p>Puntaje final: <strong>{puntaje}</strong></p>
            <p>Palabras encadenadas: <strong>{cantidadDePalabrasValidas}</strong></p>
        </div>}

        <div id="lose-actions">
            <button onClick={volverAtras} className="back-button">Volver a jugar</button>
            <button onClick={volverAtrasYCambiarNombre} className="back-button">Cambiar nombre y volver a jugar</button>
        </div>

        <TablaDePuntajes data={puntajesData}/>
    </div>
}