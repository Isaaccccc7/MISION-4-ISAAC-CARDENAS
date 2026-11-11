import { useState } from "react";
import "./App.css";

import FormularioCancion from "./componentes/Formulario";
import ListaCanciones from "./componentes/ListaCanciones";

function App() {
  const [cancionesGuardadas, setCancionesGuardadas] = useState([]);

  return (
    <div className="app">
      <h1>🎵 MusicHub</h1>
      <p>Tu biblioteca musical personal</p>

      <FormularioCancion
        setCancionesGuardadas={setCancionesGuardadas}
      />

      <hr />

      <ListaCanciones
        cancionesGuardadas={cancionesGuardadas}
      />
    </div>
  );
}

export default App;