import TableRow from "./TableRow.jsx"
import "./tables.css"
import {empiezaPor} from "../../services/wordServices.js";

export default function TablaDePalabras({data = [], puntaje, ultimaLetra}) {
    const coinciden = data.filter(item => empiezaPor(item.palabra?.toString(), ultimaLetra));
    const noCoinciden = data.filter(item => !empiezaPor(item.palabra?.toString(), ultimaLetra));

    const palabrasOrdenadas = [...coinciden, ...noCoinciden];
    return (
        <div id="table-container">
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