import TableRow from "./TableRow.jsx"
import "./tables.css"
import {empiezaPor} from "../../services/wordServices.js";

export default function TablaDePalabras({palabrasPorLetra = [], puntaje, ultimaLetra}) {
    const letraClave = ultimaLetra?.toLowerCase();
    const coinciden = letraClave && palabrasPorLetra[letraClave]
        ? palabrasPorLetra[letraClave]
        : [];
    const noCoinciden = Object.entries(palabrasPorLetra)
        .filter(([letra]) => letra !== letraClave)
        .flatMap(([_, palabras]) => palabras);


    const palabrasOrdenadas = [...coinciden, ...noCoinciden];
    return (
        <div id="table-container">
            {ultimaLetra && (
                <div className="ultima-letra-mensaje">
                    Mostrando palabras que empiezan con: <strong>{ultimaLetra.toUpperCase()}</strong>
                </div>
            )}
            <div id="data-table" className="wordboard">
                <div className="tableHeader">Palabra</div>
                <div className="tableHeader">Puntaje</div>
                {palabrasOrdenadas && palabrasOrdenadas.map((item, indice) =>
                    <TableRow
                            key={indice}
                            indice={indice + 1}
                            identificador={item.palabra}
                            puntos={item.puntos}
                            showIndex={false}
                            palabraResltada={empiezaPor(item.palabra.toString(), ultimaLetra)}
                        />
                )}
            </div>

            <div className="tableTotal">
                <span>Total</span>
                <span>{puntaje}</span>
            </div>

        </div>
    );
}