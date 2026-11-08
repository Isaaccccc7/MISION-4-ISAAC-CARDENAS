import Formulario from "./componentes/Formulario";
import ListaCanciones from "./componentes/ListaCanciones";

function App() {
  return (
    <>
      <h1>🎵 MusicHub</h1>
      <p>Biblioteca musical personal</p>

      <Formulario />

      <hr />

      <ListaCanciones />
    </>
  );
}

export default App;