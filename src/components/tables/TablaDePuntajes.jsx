import TableRow from "./TableRow.jsx"
import "./tables.css"
export default function TablaDePuntajes({ data= []}){
return (
<div id="table-container">
    <div id="data-table" className="scoreboard">
        <div className="tableHeader">Posición</div>
        <div className="tableHeader">Nombre</div>
        <div className="tableHeader">Puntaje</div>
        {data && data.map((item, indice)=>
            <TableRow 
            key={indice}
            indice={indice+1}
            identificador={item.nombre}
            puntos={item.puntos}
            showIndex={true}/>
        )}

    </div>
</div>    
);
}