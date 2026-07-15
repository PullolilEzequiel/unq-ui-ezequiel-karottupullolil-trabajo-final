export default function TableRow({indice, identificador, puntos, cantidadDePalabras, showIndex, palabraResltada}) {
    const rowClass = palabraResltada ? "table-row-container highlighted-row" : "table-row-container";

    return (
        <div className={rowClass}>
            {showIndex && <div className="row row-index">{indice}</div>}

            <div className={`row row-word ${palabraResltada ? "highlighted-word" : ""}`}>
                {identificador ? identificador : "Falta palabra clave"}
            </div>
            {puntos !== undefined && <div className="row row-points">{puntos}</div>}
            {cantidadDePalabras !== undefined && <div className="row row-count">{cantidadDePalabras}</div>}
        </div>
    );
}