import TableRow from "./TableRow";
export default function DataTable({showIndex, data= []}){
return (
<div id="table-container">
    <div id="data-table" className={showIndex ? "scoreboard" : "wordboard"}>
        {showIndex && <div className="tableHeader">Posición</div>}
        <div className="tableHeader">Nombre</div>
        <div className="tableHeader">Puntaje</div>
        {data.map((item, indice)=>
            <TableRow key={indice} indice={indice+1} palabra={item.palabra} puntos={item.puntos} showIndex={showIndex}/>
        )}
    </div>
</div>    
);
}