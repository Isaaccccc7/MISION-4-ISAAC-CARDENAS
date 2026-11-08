import { useQuery } from "@tanstack/react-query";
import { buscarCanciones } from "../servicios/canciones";

export default function ListaCanciones() {

  const {
    data,
    isPending,
    isError
  } = useQuery({
    queryKey: ["canciones"],
    queryFn: () => buscarCanciones("coldplay")
  });

  if (isPending) {
    return <p>Cargando canciones...</p>;
  }

  if (isError) {
    return <p>Error al cargar.</p>;
  }

  return (
    <ul>
      {data.results.map(cancion => (
        <li key={cancion.trackId}>
          {cancion.artistName} - {cancion.trackName}
        </li>
      ))}
    </ul>
  );
}