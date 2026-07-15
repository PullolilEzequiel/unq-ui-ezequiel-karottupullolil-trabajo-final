import TableRow from "./TableRow.jsx"
import "./tables.css"

export default function TablaDePalabras({palabrasPorLetra, puntaje, ultimaLetra}) {
    const letraClave = ultimaLetra?.toLowerCase();
    const grupoCoincidente = letraClave ? palabrasPorLetra[letraClave] : null;
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
                {grupoCoincidente && grupoCoincidente.map((item) => (
                    <TableRow
                        key={item.palabra}
                        identificador={item.palabra}
                        puntos={item.puntos}
                        showIndex={false}
                        palabraResltada={true}
                    />
                ))}

                {Object.keys(palabrasPorLetra).map((letra) => {

                    if (letra === letraClave) return null;

                    return palabrasPorLetra[letra].map((item) => (
                        <TableRow
                            key={item.palabra}
                            identificador={item.palabra}
                            puntos={item.puntos}
                            showIndex={false}
                            palabraResltada={false}
                        />
                    ));
                })}
            </div>

            <div className="tableTotal">
                <span>Total</span>
                <span>{puntaje}</span>
            </div>

        </div>
    );
}