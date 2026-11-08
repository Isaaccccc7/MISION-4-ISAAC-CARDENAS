import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { esquemaCancion } from "../esquemas/esquemaCancion";

export default function FormularioCancion() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(esquemaCancion)
  });

  const enviar = (datos) => {
    console.log(datos);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(enviar)}>

      <input
        placeholder="Artista"
        {...register("artista")}
      />

      <p>{errors.artista?.message}</p>

      <input
        placeholder="Canción"
        {...register("cancion")}
      />

      <p>{errors.cancion?.message}</p>

      <input
        placeholder="Género"
        {...register("genero")}
      />

      <p>{errors.genero?.message}</p>

      <input
        type="number"
        placeholder="Año"
        {...register("anio", { valueAsNumber: true })}
      />

      <p>{errors.anio?.message}</p>

      <input
        type="number"
        min="1"
        max="5"
        {...register("valoracion", {
          valueAsNumber: true
        })}
      />

      <p>{errors.valoracion?.message}</p>

      <button>
        Guardar canción
      </button>

    </form>
  );
}