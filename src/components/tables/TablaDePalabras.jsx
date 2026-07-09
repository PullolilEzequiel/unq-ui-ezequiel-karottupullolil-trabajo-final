import TableRow from "./TableRow.jsx"
import "./tables.css"

export default function TablaDePalabras({data = [], puntaje}) {
    return (
        <div id="table-container">
            <div id="data-table" className="wordboard">
                <div className="tableHeader">Palabra</div>
                <div className="tableHeader">Puntaje</div>
                {data && data.map((item, indice) =>
                    <TableRow
                        key={indice}
                        indice={indice + 1}
                        identificador={item.palabra}
                        puntos={item.puntos}
                        showIndex={false}/>
                )}
            </div>

            <div className="tableTotal">
                <span>Total</span>
                <span>{puntaje}</span>
            </div>

        </div>
    );
}