export default function TableRow({indice, palabra, puntos, showIndex}){
    return (
        <>
            {showIndex && <div className="row">{indice}</div>}
            <div className="row">{palabra}</div>
            <div className="row">{puntos}</div>
        </>
    )
}