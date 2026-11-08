const API = "https://itunes.apple.com/search";
const LocalStorage = "MUSICHUB-CANCIONES";

export async function obtenerCanciones() {

  const guardado = localStorage.getItem(LocalStorage);

  if (guardado) {
    return JSON.parse(guardado);
  }

  const respuesta = await fetch(
    `${API}?term=pop&entity=song&limit=20`
  );

  if (!respuesta.ok) {
    throw new Error(
      `HTTP ${respuesta.status}: ${respuesta.statusText}`
    );
  }

  const json = await respuesta.json();

  const canciones = (json.results ?? []).map(cancion => ({
    id: cancion.trackId,
    artista: cancion.artistName,
    titulo: cancion.trackName,
    genero: cancion.primaryGenreName,
    anio: new Date(cancion.releaseDate).getFullYear(),
    imagen: cancion.artworkUrl100
  }));

  if (canciones.length > 0) {
    localStorage.setItem(
      LocalStorage,
      JSON.stringify(canciones)
    );
  }

  return canciones;
}