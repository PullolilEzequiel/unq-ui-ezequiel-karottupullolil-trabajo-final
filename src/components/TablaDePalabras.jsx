import TableRow from "./TableRow";
export default function TablaDePalabras({data= [], puntaje}){
return (
<div id="table-container">
    <div id="data-table" className="wordboard" >
        <div className="tableHeader">Nombre</div>
        <div className="tableHeader">Puntaje</div>
        {data && data.map((item, indice) => {
            <TableRow 
                key={indice}
                indice={indice+1}
                identificador={item.palabra}
                puntos={item.puntos}
                showIndex={false}/>
        })}
    </div>
    
    <div className="tableTotal">
        <span>Total</span>
        <span>{puntaje}</span>
    </div>

</div>    
);
}