import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { esquemaCancion } from "../esquemas/esquemaCancion";

export default function FormularioCancion({
  setCancionesGuardadas,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(esquemaCancion),
  });

  const enviar = (datos) => {
    setCancionesGuardadas((anteriores) => [
      ...anteriores,
      datos,
    ]);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(enviar)}>
      <label htmlFor="artista">
        Artista
      </label>

      <input
        id="artista"
        placeholder="Artista"
        {...register("artista")}
        aria-invalid={!!errors.artista}
        aria-describedby="error-artista"
      />

      {errors.artista && (
        <p
          id="error-artista"
          role="alert"
        >
          {errors.artista.message}
        </p>
      )}

      <label htmlFor="cancion">
        Canción
      </label>

      <input
        id="cancion"
        placeholder="Canción"
        {...register("cancion")}
        aria-invalid={!!errors.cancion}
        aria-describedby="error-cancion"
      />

      {errors.cancion && (
        <p
          id="error-cancion"
          role="alert"
        >
          {errors.cancion.message}
        </p>
      )}

      <label htmlFor="genero">
        Género
      </label>

      <input
        id="genero"
        placeholder="Género"
        {...register("genero")}
        aria-invalid={!!errors.genero}
        aria-describedby="error-genero"
      />

      {errors.genero && (
        <p
          id="error-genero"
          role="alert"
        >
          {errors.genero.message}
        </p>
      )}

      <label htmlFor="anio">
        Año
      </label>

      <input
        id="anio"
        type="number"
        placeholder="Año"
        {...register("anio", {
          valueAsNumber: true,
        })}
        aria-invalid={!!errors.anio}
        aria-describedby="error-anio"
      />

      {errors.anio && (
        <p
          id="error-anio"
          role="alert"
        >
          {errors.anio.message}
        </p>
      )}

      <label htmlFor="valoracion">
        Valoración (1-5)
      </label>

      <input
        id="valoracion"
        type="number"
        min="1"
        max="5"
        {...register("valoracion", {
          valueAsNumber: true,
        })}
        aria-invalid={!!errors.valoracion}
        aria-describedby="error-valoracion"
      />

      {errors.valoracion && (
        <p
          id="error-valoracion"
          role="alert"
        >
          {errors.valoracion.message}
        </p>
      )}

      <button type="submit">
        Guardar canción
      </button>
    </form>
  );
}