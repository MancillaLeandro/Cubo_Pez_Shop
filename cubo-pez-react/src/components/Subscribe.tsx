import { useState } from "react";
import "../styles/Subscribe.css";

interface FormData {
  nombre: string;
  email: string;
  edad: string;
  fecha: string;
  pais: string;
  nivel: string;
  intereses: string[];
  comentarios: string;
}

const Subscribe = () => {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    email: "",
    edad: "",
    fecha: "",
    pais: "Argentina",
    nivel: "",
    intereses: [],
    comentarios: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      intereses: checked
        ? [...prev.intereses, value]
        : prev.intereses.filter((i) => i !== value),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.nombre.trim().length < 3) {
      setMensaje("❌ El nombre debe tener al menos 3 caracteres.");
      return;
    }

    const suscripciones: FormData[] = JSON.parse(
      localStorage.getItem("suscripciones") || "[]"
    );

    suscripciones.push(form);

    localStorage.setItem(
      "suscripciones",
      JSON.stringify(suscripciones)
    );

    setMensaje(`✅ ¡Gracias por suscribirte, ${form.nombre}!`);

    setForm({
      nombre: "",
      email: "",
      edad: "",
      fecha: "",
      pais: "Argentina",
      nivel: "",
      intereses: [],
      comentarios: "",
    });
  };

  // ESTA PARTE ES LA QUE MUESTRA LA PANTALLA DE ÉXITO
  if (mensaje.startsWith("✅")) {
    return (
      <section className="mensaje-exito">
        <div className="mensaje-contenedor">

          <h1>🎉 ¡Suscripción Exitosa!</h1>

          <h2>{mensaje}</h2>

          <p>
            Ya formas parte de nuestra comunidad de speedcubers.
          </p>

          <p>
            Muy pronto recibirás novedades y descuentos exclusivos.
          </p>

          <button
            onClick={() => {
              setMensaje("");
            }}
          >
            Volver al formulario
          </button>

        </div>
      </section>
    );
  }

  return (
    <section className="suscripcion">

      <h2>Suscribite Para Novedades Y Descuentos!!!</h2>

      <form className="formulario" onSubmit={handleSubmit}>

        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Tu nombre"
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          required
        />

        <label>Edad</label>
        <input
          type="number"
          name="edad"
          value={form.edad}
          onChange={handleChange}
          min="10"
          max="100"
        />

        <label>Fecha de nacimiento</label>
        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
        />

        <label>País</label>
        <select
          name="pais"
          value={form.pais}
          onChange={handleChange}
        >
          <option value="Argentina">Argentina</option>
          <option value="España">España</option>
          <option value="México">México</option>
          <option value="Chile">Chile</option>
        </select>

        <label>Nivel de speedcubing</label>

        <div className="radio">
          {["Principiante", "Intermedio", "Avanzado"].map((nivel) => (
            <label key={nivel}>
              <input
                type="radio"
                name="nivel"
                value={nivel}
                checked={form.nivel === nivel}
                onChange={handleChange}
              />
              {nivel}
            </label>
          ))}
        </div>

        <label>Intereses</label>

        <div className="checkbox">
          {["Cubos", "Puzzles", "Juegos de mesa"].map((interes) => (
            <label key={interes}>
              <input
                type="checkbox"
                value={interes}
                checked={form.intereses.includes(interes)}
                onChange={handleCheckbox}
              />
              {interes}
            </label>
          ))}
        </div>

        <label>Comentarios</label>

        <textarea
          name="comentarios"
          value={form.comentarios}
          onChange={handleChange}
          placeholder="Escribí algo..."
        />

        <button type="submit">
          Suscribirme
        </button>

        {mensaje && !mensaje.startsWith("✅") && (
          <p
            style={{
              color: "red",
              fontWeight: "bold",
              marginTop: "15px",
            }}
          >
            {mensaje}
          </p>
        )}

      </form>

    </section>
  );
};

export default Subscribe;