import { z } from "zod";

export const esquemaCancion = z.object({
  artista: z
    .string()
    .min(2, "Introduce un artista"),

  cancion: z
    .string()
    .min(1, "El título es obligatorio"),

  genero: z
    .string()
    .min(2, "Introduce un género"),

  anio: z
    .number({
      invalid_type_error: "Introduce un año válido"
    })
    .min(1900)
    .max(new Date().getFullYear()),

  valoracion: z
    .number()
    .min(0, "Mínimo 0")
    .max(10, "Máximo 10")
});