export default function TableRow({indice, identificador, puntos, showIndex}){
    return (
        <>
            {showIndex && <div className="row">{indice}</div>}
            <div className="row">{identificador}</div>
            <div className="row">{puntos}</div>
        </>
    )
}