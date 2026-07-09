import TableRow from "./TableRow.jsx"
import "./tables.css"

export default function TablaDePalabras({data = [], puntaje, ultimaLetra}) {


    const condicion = ({palabra}) => {
        return palabra.toLowerCase().startsWith(ultimaLetra.toLowerCase())
    }
    return (
        <div id="table-container">
            {ultimaLetra && (
                <div style={{ padding: "1rem 2rem 0", color: "#5a554f", fontSize: "18px" }}>
                    Mostrando palabras que empiezan con: <strong>{ultimaLetra.toUpperCase()}</strong>
                </div>
            )}
            <div id="data-table" className="wordboard">
                <div className="tableHeader">Palabra</div>
                <div className="tableHeader">Puntaje</div>
                {data && data.map((item, indice) =>
                    (condicion(item) && <TableRow
                            key={indice}
                            indice={indice + 1}
                            identificador={item.palabra}
                            puntos={item.puntos}
                            showIndex={false}
                        />
                    )
                )}
            </div>

            <div className="tableTotal">
                <span>Total</span>
                <span>{puntaje}</span>
            </div>

        </div>
    );
}