import { useQuery } from "@tanstack/react-query";
import { obtenerCanciones } from "../servicios/canciones";

export default function ListaCanciones({
  cancionesGuardadas,
}) {
  const {
    data,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["canciones"],
    queryFn: obtenerCanciones,
  });

  if (isPending) {
    return <p>Cargando canciones...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <h2>Canciones de la API</h2>

      <ul>
        {data.map((cancion) => (
          <li key={cancion.id}>
            <strong>{cancion.titulo}</strong>
            <br />
            Artista: {cancion.artista}
            <br />
            Género: {cancion.genero}
            <br />
            Año: {cancion.anio}
            <br />
            {cancion.imagen && (
              <img
                src={cancion.imagen}
                alt={cancion.titulo}
              />
            )}
          </li>
        ))}
      </ul>

      <h2>Mis canciones guardadas</h2>

      {cancionesGuardadas.length === 0 ? (
        <p>No hay canciones guardadas todavía.</p>
      ) : (
        <ul>
          {cancionesGuardadas.map((cancion, index) => (
            <li key={index}>
              <strong>{cancion.cancion}</strong>
              <br />
              Artista: {cancion.artista}
              <br />
              Género: {cancion.genero}
              <br />
              Año: {cancion.anio}
              <br />
              Valoración:
              {" ⭐".repeat(cancion.valoracion)}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}