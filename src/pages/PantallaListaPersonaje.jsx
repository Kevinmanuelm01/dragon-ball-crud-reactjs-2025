// Importaciones necesarias de React y React Router
import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "../styles/PantallaListaPersonaje.styles";

// Componente principal que muestra una lista de personajes de Dragon Ball con funcionalidad
// de filtrado, paginación y acciones para ver detalles, editar y borrar
function PantallaListaPersonaje() {
  // --- Estados principales ---
  const [personajes, setPersonajes] = useState([]); // Lista de personajes a mostrar
  const [filtro, setFiltro] = useState(""); // Texto de filtro de búsqueda
  const [pagina, setPagina] = useState(1); // Página actual
  const [totalPaginas, setTotalPaginas] = useState(1); // Total de páginas
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error
  const navigate = useNavigate(); // Navegación entre rutas
  const [showForm, setShowForm] = useState(false); // Mostrar/ocultar formulario de nuevo personaje
  const [nuevoPersonaje, setNuevoPersonaje] = useState({
    name: "",
    race: "",
    ki: "",
    gender: "",
    image: "",
    description: "",
    affiliation: "",
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

  // --- Utilidades para personajes creados (localStorage) ---
  const LOCAL_KEY = "personajesCreados";
  // Obtiene la lista de personajes creados desde localStorage
  const getPersonajesCreados = () => {
    const data = localStorage.getItem(LOCAL_KEY);
    return data ? JSON.parse(data) : [];
  };
  // Guarda la lista de personajes creados en localStorage
  const setPersonajesCreados = (arr) => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(arr));
  };

  // --- Obtener personajes de la API y mezclar con los creados localmente ---
  const fetchPersonajes = useCallback(async (pagina) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dragonball-api.com/api/characters?page=${pagina}&limit=25`
      );
      const data = await response.json();
      const eliminados = getPersonajesEliminados();
      let personajesFiltrados = data.items.filter(
        (p) => !eliminados.includes(p.id)
      );
      // Mezclar con los personajes creados locales (solo en la página 1)
      if (pagina === 1) {
        const creados = getPersonajesCreados().filter(
          (p) => !eliminados.includes(p.id)
        );
        personajesFiltrados = [...creados, ...personajesFiltrados];
      }
      setPersonajes(personajesFiltrados);
      setTotalPaginas(data.meta.totalPages);
      setLoading(false);
    } catch (err) {
      setError("Error al cargar personajes");
      setLoading(false);
    }
  }, []);

  // useEffect para recargar personajes al cambiar de página
  useEffect(() => {
    fetchPersonajes(pagina);
    console.log(pagina);
  }, [pagina, fetchPersonajes]);

  // --- Manejar cambios en el filtro de búsqueda ---
  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  // --- Filtrar personajes por nombre ---
  const personajesFiltrados = personajes.filter((p) =>
    p.name.toLowerCase().includes(filtro.toLowerCase())
  );

  // --- Navegar al detalle de un personaje ---
  const handleVerDetalle = (id) => {
    navigate(`/personaje/${id}`);
  };

  // --- Eliminar personaje (simulado y persistente en localStorage) ---
  const handleBorrar = (id) => {
    if (
      window.confirm("¿Seguro que quieres borrar este personaje? (Simulado)")
    ) {
      const eliminados = getPersonajesEliminados();
      if (!eliminados.includes(id)) {
        eliminados.push(id);
        setPersonajesEliminados(eliminados);
      }
      // Si es creado localmente, bórralo de localStorage
      const creados = getPersonajesCreados();
      if (creados.find((p) => p.id === id)) {
        setPersonajesCreados(creados.filter((p) => p.id !== id));
      }
      setPersonajes(personajes.filter((p) => p.id !== id));
    }
  };

  // --- Navegar a la edición de un personaje ---
  const handleEditar = (id) => {
    navigate(`/personaje/${id}?edit=1`);
  };

  // --- Manejar cambios en el formulario de nuevo personaje ---
  const handleNuevoChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setNuevoPersonaje({ ...nuevoPersonaje, image: ev.target.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setNuevoPersonaje({ ...nuevoPersonaje, [name]: value });
    }
  };

  // --- Guardar nuevo personaje en localStorage y en la lista ---
  const handleNuevoSubmit = (e) => {
    e.preventDefault();
    // Genera un ID único (negativo para no chocar con la API)

    const MaxId = Math.max(...personajes.map((p) => p.id));
    const id = MaxId + 1;

    if (
      nuevoPersonaje.name === "" ||
      nuevoPersonaje.race === "" ||
      nuevoPersonaje.ki === "" ||
      nuevoPersonaje.gender === "" ||
      nuevoPersonaje.image === "" ||
      nuevoPersonaje.description === "" ||
      nuevoPersonaje.affiliation === ""
    ) {
      alert("Todos los campos son requeridos");
    } else {
      const nuevo = { ...nuevoPersonaje, id };
      const creados = getPersonajesCreados();
      setPersonajesCreados([nuevo, ...creados]);
      setPersonajes([nuevo, ...personajes]);
      setNuevoPersonaje({
        name: "",
        race: "",
        ki: "",
        gender: "",
        image: "",
        description: "",
        affiliation: "",
      });
      setShowForm(false);
    }
  };

  // Renderizado del componente
  return (
    <S.Container>
      {/* Header con logo y título */}
      <S.Header>
        <S.Logo
          src="/LOGODBZ.png"
          alt="Dragon Ball Z Logo"
        />
        <S.Title>Lista de Personajes 🐉</S.Title>
      </S.Header>

      {/* Toolbar con búsqueda y botón agregar */}
      <S.Toolbar>
        <S.SearchContainer>
          <S.SearchInput
            type="text"
            placeholder="Filtrar por nombre..."
            value={filtro}
            onChange={handleFiltroChange}
          />
        </S.SearchContainer>
        <S.ToolbarActions>
          <S.AddBtn onClick={() => setShowForm((v) => !v)}>
            {showForm ? "❌ Cancelar" : "➕ Agregar personaje"}
          </S.AddBtn>
        </S.ToolbarActions>
      </S.Toolbar>

      {/* Formulario de agregar nuevo personaje */}
      {showForm && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: 300,
          }}>
          <h2
            style={{ textAlign: "center", marginBottom: 18, color: "#F76B01" }}>
            Agrega nuevo personaje
          </h2>
          <form
            onSubmit={handleNuevoSubmit}
            style={{
              marginBottom: 20,
              background: "#f5f5f5",
              padding: 30,
              borderRadius: 16,
              boxShadow: "0 2px 16px rgba(247,107,1,0.10)",
              minWidth: 500,
              maxWidth: 700,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}>
            {/* Primera fila: Nombre y Raza */}
            <div style={{ display: "flex", gap: 10 }}>
              <input
                name="name"
                required
                placeholder="Nombre"
                value={nuevoPersonaje.name}
                onChange={handleNuevoChange}
                style={{
                  flex: 1,
                  border: "2px solid #F76B01",
                  borderRadius: 6,
                  outline: "none",
                  color: "#333",
                  padding: 8,
                }}
              />
              <input
                name="race"
                placeholder="Raza"
                value={nuevoPersonaje.race}
                onChange={handleNuevoChange}
                style={{
                  flex: 1,
                  border: "2px solid #F76B01",
                  borderRadius: 6,
                  outline: "none",
                  color: "#333",
                  padding: 8,
                }}
              />
            </div>
            {/* Segunda fila: Ki y Género */}
            <div style={{ display: "flex", gap: 10 }}>
              <input
                name="ki"
                placeholder="Ki"
                value={nuevoPersonaje.ki}
                onChange={handleNuevoChange}
                style={{
                  flex: 1,
                  border: "2px solid #F76B01",
                  borderRadius: 6,
                  outline: "none",
                  color: "#333",
                  padding: 8,
                }}
              />
              <input
                name="gender"
                placeholder="Género"
                value={nuevoPersonaje.gender}
                onChange={handleNuevoChange}
                style={{
                  flex: 1,
                  border: "2px solid #F76B01",
                  borderRadius: 6,
                  outline: "none",
                  color: "#333",
                  padding: 8,
                }}
              />
            </div>
            {/* Selector de imagen local */}
            <div>
              <label
                style={{
                  fontWeight: "bold",
                  marginBottom: 4,
                  display: "block",
                }}>
                Imagen:
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleNuevoChange}
                style={{
                  marginBottom: 8,
                  border: "2px solid #F76B01",
                  borderRadius: 6,
                  outline: "none",
                  color: "#333",
                  padding: 8,
                }}
              />
              {nuevoPersonaje.image && (
                <img
                  src={nuevoPersonaje.image}
                  alt="Previsualización"
                  style={{
                    maxWidth: 120,
                    display: "block",
                    marginTop: 10,
                    borderRadius: 8,
                  }}
                />
              )}
            </div>
            {/* Afiliación */}
            <input
              name="affiliation"
              placeholder="Afiliación"
              value={nuevoPersonaje.affiliation}
              onChange={handleNuevoChange}
              style={{
                border: "2px solid #F76B01",
                borderRadius: 6,
                outline: "none",
                color: "#333",
                padding: 8,
              }}
            />
            {/* Descripción */}
            <textarea
              name="description"
              placeholder="Descripción"
              value={nuevoPersonaje.description}
              onChange={handleNuevoChange}
              style={{
                width: "100%",
                height: 60,
                border: "2px solid #F76B01",
                borderRadius: 6,
                outline: "none",
                color: "#333",
                padding: 8,
              }}
            />
            {/* Botón guardar */}
            <button
              type="submit"
              className="save-button"
              style={{ alignSelf: "flex-start", minWidth: 100 }}>
              Guardar
            </button>
          </form>
        </div>
      )}

      {/* Manejo de estados de carga y error */}
      {loading ? (
        <S.LoadingContainer>Cargando... ⏳</S.LoadingContainer>
      ) : error ? (
        <S.ErrorContainer>{error}</S.ErrorContainer>
      ) : (
        <S.Main>
          {/* Listado de personajes en tabla */}
          <S.TableContainer>
            <S.Table>
              <thead>
                <tr>
                  <S.TableHeader>ID</S.TableHeader>
                  <S.TableHeader>Imagen</S.TableHeader>
                  <S.TableHeader>Nombre</S.TableHeader>
                  <S.TableHeader>Raza</S.TableHeader>
                  <S.TableHeader>Acciones</S.TableHeader>
                </tr>
              </thead>
              <tbody>
                {/* Iteración sobre los personajes filtrados */}
                {personajesFiltrados.map((p) => (
                  <S.TableRow key={p.id}>
                    <S.TableCell>{p.id}</S.TableCell>
                    <S.TableCell>
                      {/* Imagen del personaje */}
                      <S.TableImage src={p.image} alt={p.name} />
                    </S.TableCell>
                    <S.TableCell>
                      {/* Nombre del personaje, clickeable para ver detalle */}
                      <S.ClickableName onClick={() => handleVerDetalle(p.id)}>
                        {p.name}
                      </S.ClickableName>
                    </S.TableCell>
                    <S.TableCell>{p.race}</S.TableCell>
                    <S.TableCell>
                      {/* Botones de acción para cada personaje */}
                      <S.ActionButtonsContainer>
                        <S.ActionButton $variant="view" onClick={() => handleVerDetalle(p.id)}>
                          👁️ Ver
                        </S.ActionButton>
                        <S.ActionButton $variant="edit" onClick={() => handleEditar(p.id)}>
                          ✏️ Editar
                        </S.ActionButton>
                        <S.ActionButton $variant="delete" onClick={() => handleBorrar(p.id)}>
                          🗑️ Borrar
                        </S.ActionButton>
                      </S.ActionButtonsContainer>
                    </S.TableCell>
                  </S.TableRow>
                ))}
              </tbody>
            </S.Table>
          </S.TableContainer>

          {/* Controles de paginación */}
          <S.PaginationContainer>
            <S.PaginationButton
              onClick={() => setPagina((p) => Math.max(1, p - 1))}
              disabled={pagina === 1}>
              ⬅️ Anterior
            </S.PaginationButton>
            <S.PaginationInfo>
              Página {pagina} de {totalPaginas}
            </S.PaginationInfo>
            <S.PaginationButton
              onClick={() =>
                setPagina((p) => (pagina === totalPaginas ? 1 : p + 1))
              }>
              Siguiente ➡️
            </S.PaginationButton>
          </S.PaginationContainer>
        </S.Main>
      )}
    </S.Container>
  );
}

// Exportar el componente para su uso en el router
export default PantallaListaPersonaje;
