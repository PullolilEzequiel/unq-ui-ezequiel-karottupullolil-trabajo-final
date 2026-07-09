export default function TableRow({indice, identificador, puntos, cantidadDePalabras, showIndex}) {
    return (
        <>
            {showIndex && <div className="row">{indice}</div>}
            {identificador && <div className="row">{identificador}</div>}
            {puntos && <div className="row">{puntos}</div>}
            {cantidadDePalabras && <div className="row">{cantidadDePalabras}</div>}
        </>
    )
}