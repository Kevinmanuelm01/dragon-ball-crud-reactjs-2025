import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import styles from "./PantallaDetallePersonajeStyle";

// Esta función es el componente principal que muestra el detalle de un personaje, permite editarlo y borrarlo
function PantallaDetallePersonaje() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [personaje, setPersonaje] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({
    name: "",
    ki: "",
    race: "",
    gender: "",
    description: "",
    affiliation: "",
    originPlanet: "",
  });

  // Obtiene la lista de personajes eliminados desde localStorage
  const getPersonajesEliminados = () => {
    const data = localStorage.getItem("personajesEliminados");
    return data ? JSON.parse(data) : [];
  };
  // Guarda la lista de personajes eliminados en localStorage
  const setPersonajesEliminados = (ids) => {
    localStorage.setItem("personajesEliminados", JSON.stringify(ids));
  };

  // useEffect para obtener el personaje desde la API o localStorage cuando cambia el id
  useEffect(() => {
    const fetchPersonaje = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dragonball-api.com/api/characters/${id}`
        );
        if (!response.ok) throw new Error("No se pudo obtener el personaje");
        const data = await response.json();
        setPersonaje(data);
        setEditFormData({
          name: data.name || "",
          ki: data.ki || "",
          race: data.race || "",
          gender: data.gender || "",
          description: data.description || "",
          affiliation: data.affiliation || "",
          originPlanet: data.originPlanet?.name || "",
        });
        setLoading(false);
      } catch (err) {
        // Si falla, busca en localStorage
        const creados = localStorage.getItem("personajesCreados");
        let encontrado = null;
        if (creados) {
          const arr = JSON.parse(creados);
          encontrado = arr.find((p) => String(p.id) === String(id));
        }
        if (encontrado) {
          setPersonaje(encontrado);
          setEditFormData({
            name: encontrado.name || "",
            ki: encontrado.ki || "",
            race: encontrado.race || "",
            gender: encontrado.gender || "",
            description: encontrado.description || "",
            affiliation: encontrado.affiliation || "",
            originPlanet: encontrado.originPlanet || "",
          });
          setError(null);
        } else {
          setError("No se pudo obtener el personaje");
        }
        setLoading(false);
      }
    };
    fetchPersonaje();
  }, [id]);

  // useEffect para activar el modo edición si la URL contiene 'edit=1'
  useEffect(() => {
    if (location.search.includes("edit=1")) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }, [location.search]);

  // Maneja los cambios en el formulario de edición
  const handleEditFormChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "image" && files && files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditFormData({ ...editFormData, image: e.target.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setEditFormData({ ...editFormData, [name]: value });
    }
  };

  // Maneja el envío del formulario de edición y actualiza el personaje
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    // Si es personaje local, actualiza en localStorage
    if (personaje && personaje.id < 0) {
      const creados = localStorage.getItem("personajesCreados");
      let arr = creados ? JSON.parse(creados) : [];
      arr = arr.map((p) =>
        String(p.id) === String(personaje.id)
          ? { ...p, ...editFormData, originPlanet: editFormData.originPlanet }
          : p
      );
      localStorage.setItem("personajesCreados", JSON.stringify(arr));
      setPersonaje({
        ...personaje,
        ...editFormData,
        originPlanet: editFormData.originPlanet,
      });
    } else {
      setPersonaje({
        ...personaje,
        ...editFormData,
        originPlanet: editFormData.originPlanet,
      });
    }
    setIsEditing(false);
    alert("¡Personaje actualizado con éxito! (Simulado)");
  };

  // Maneja el borrado del personaje (simulado)
  const handleBorrar = () => {
    if (
      window.confirm("¿Seguro que quieres borrar este personaje? (Simulado)")
    ) {
      const eliminados = getPersonajesEliminados();
      const idNum = isNaN(Number(id)) ? id : Number(id);
      if (!eliminados.includes(idNum)) {
        eliminados.push(idNum);
        setPersonajesEliminados(eliminados);
      }
      alert("Personaje borrado (simulado)");
      navigate("/");
    }
  };

  if (loading) return <div className="loading">Cargando...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!personaje) return null;

  if (isEditing) {
    return (
      <div className="App">
        <h1>Editar Personaje</h1>
        <form onSubmit={handleEditFormSubmit} className="edit-form">
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={editFormData.name}
              onChange={handleEditFormChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Ki:</label>
            <input
              type="text"
              name="ki"
              value={editFormData.ki}
              onChange={handleEditFormChange}
            />
          </div>
          <div className="form-group">
            <label>Raza:</label>
            <input
              type="text"
              name="race"
              value={editFormData.race}
              onChange={handleEditFormChange}
            />
          </div>
          <div className="form-group">
            <label>Género:</label>
            <input
              type="text"
              name="gender"
              value={editFormData.gender}
              onChange={handleEditFormChange}
            />
          </div>
          <div className="form-group">
            <label>Planeta de origen:</label>
            <input
              type="text"
              name="originPlanet"
              value={editFormData.originPlanet}
              onChange={handleEditFormChange}
            />
          </div>
          <div className="form-group">
            <label>Imagen:</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleEditFormChange}
            />
            {editFormData.image && (
              <img
                src={editFormData.image}
                alt="Previsualización"
                style={{ maxWidth: 120, display: "block", marginTop: 10 }}
              />
            )}
          </div>
          <div className="form-group">
            <label>Descripción:</label>
            <textarea
              name="description"
              value={editFormData.description}
              onChange={handleEditFormChange}
              rows="5"
            />
          </div>
          <div className="form-group">
            <label>Afiliación:</label>
            <input
              type="text"
              name="affiliation"
              value={editFormData.affiliation}
              onChange={handleEditFormChange}
            />
          </div>
          <div className="form-actions">
            <button
              type="submit"
              className="save-button"
              style={styles.actionButton}>
              Guardar
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="cancel-button"
              style={styles.actionButton}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Detalle de Personaje</h1>
      <button onClick={() => navigate("/")} style={styles.actionButton}>
        Volver a la lista
      </button>
      <div className="character-card">
        <div className="character-image">
          <img
            src={personaje.image}
            alt={personaje.name}
            style={styles.mainImage}
          />
        </div>
        <div className="character-info">
          <h2>{personaje.name}</h2>
          <p>
            <strong>Ki:</strong> {personaje.ki}
          </p>
          <p>
            <strong>Raza:</strong> {personaje.race}
          </p>
          <p>
            <strong>Género:</strong> {personaje.gender}
          </p>
          <p>
            <strong>Afiliación:</strong> {personaje.affiliation}
          </p>
          <p>
            <strong>Planeta de origen:</strong> {personaje.originPlanet?.name}
          </p>
          <p>
            <strong>Descripción:</strong> {personaje.description}
          </p>
        </div>
      </div>
      <div className="transformations">
        <h3>Transformaciones</h3>
        <div className="transformations-list">
          {personaje.transformations &&
            personaje.transformations.map((transform) => (
              <div key={transform.id} className="transformation-item">
                <img
                  src={transform.image}
                  alt={transform.name}
                  style={styles.transformationImage}
                />
                <p>{transform.name}</p>
                <p>Ki: {transform.ki}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="crud-actions">
        <button
          onClick={() => setIsEditing(true)}
          className="edit-button"
          style={styles.actionButton}>
          Editar
        </button>
        <button
          onClick={handleBorrar}
          className="delete-button"
          style={styles.actionButton}>
          Borrar
        </button>
      </div>
    </div>
  );
}

export default PantallaDetallePersonaje;
