export default function DataTable({showIndex}){
return (
<div id="table-container">
    <div id="data-table" className={showIndex ? "scoreboard" : "wordboard"}>
        {showIndex && <div className="tableHeader">Posición</div>}
        <div className="tableHeader">Nombre</div>
        <div className="tableHeader">Puntaje</div>

        {/* Fila 2 (Datos) */}
        {showIndex && <div className="row">#1</div>}
        <div className="row">Carlos</div>
        <div className="row">5 pts</div>
        
        {/* Fila 3 (Datos) */}
        {showIndex && <div className="row">#2</div>}
        <div className="row">Ana</div>
        <div className="row">4 pts</div>

        
    </div>
</div>    
);
}