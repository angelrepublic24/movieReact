import { Search } from "./component/Buscador";
import { List } from "./component/Listado";
import { Create } from "./component/Crear";
import { useState } from "react";


function App() {
    const [listado, setlistadoState] = useState([])

  return (
    <div className="layout">
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            
            <h1>MisPelis</h1>
        </header>

        <nav className="nav">
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">Movies</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contact</a></li>
            </ul>
        </nav>

        <section id="content" className="content">

           <List listado={listado} setlistadoState={setlistadoState}/>

        </section>

        <aside className="lateral">
            <Search listado={listado} setlistadoState={setlistadoState}/>

            <Create setlistadoState={setlistadoState}/>
        </aside>

        <footer className="footer">
            &copy; Angel Almonte
        </footer>

    </div>
  );
}

export default App;
