import "./styles.css";

export default function Home() {
  
  return (
    <div className="App">
      
      <nav className="horizontal-menu">

        <div className="left-items">
        <div id="item-menu-horizontal-logo"> <li>NorthSoft Office</li> </div>
        <div id="item-menu-horizontal-sponsor"> <li>GamerShip</li> </div>
        </div>

        <div  className="right-items">
        <div id="item-menu-horizontal-btn"> <li>clock out</li> </div>
        <div id="item-menu-horizontal-circle"> <li><i className="large material-icons">brightness_1</i></li> </div>
        <div id="item-menu-horizontal-circle"> <li><i className="large material-icons">brightness_1</i></li> </div>
        <div id="item-menu-horizontal-btn"> <li>usuario</li> </div>
        </div>
      
      </nav>

      <nav className="vertical-menu">

        <div><li id="item-menu-vertical" className="item-menu-vertical">Inicio</li></div>
        <div><li id="item-menu-vertical" className="item-menu-vertical">Venta</li></div>
        <div><li id="item-menu-vertical" className="item-menu-vertical">Registros Ventas</li></div>
        <div><li id="item-menu-vertical" className="item-menu-vertical">Inventario</li></div>
        <div><li id="item-menu-vertical" className="item-menu-vertical">Inventario</li></div>
        <div><li id="item-menu-vertical" className="item-menu-vertical">Resumen</li></div>
        <div><li id="item-menu-vertical" className="item-menu-vertical">Administración</li></div>

      </nav>

      <div className="card">
        <h1>5940.00MX</h1>
        <p>Ultimas ventas</p>
        <p>200.00MX</p>
        <p>150.00MX</p>
        <p>Monto actual en la caja virtual activa</p>
        <p>Sesión:Pedro Fernandez</p>
        <p>Caja: Numero 1</p>
      </div>
    
    </div>
  );
}
