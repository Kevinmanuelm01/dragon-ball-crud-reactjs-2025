import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import * as S from "../styles/PantallaDetallePersonaje.styles";

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

  if (loading) return <S.LoadingContainer>Cargando...</S.LoadingContainer>;
  if (error) return <S.ErrorContainer>Error: {error}</S.ErrorContainer>;
  if (!personaje) return null;

  if (isEditing) {
    return (
      <S.Container>
        <S.Header>
          <S.Title>Editar Personaje</S.Title>
        </S.Header>
        <S.Main>
          <S.EditForm onSubmit={handleEditFormSubmit}>
            <S.FormGroup>
              <S.Label>Nombre:</S.Label>
              <S.Input
                type="text"
                name="name"
                value={editFormData.name}
                onChange={handleEditFormChange}
                required
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Ki:</S.Label>
              <S.Input
                type="text"
                name="ki"
                value={editFormData.ki}
                onChange={handleEditFormChange}
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Raza:</S.Label>
              <S.Input
                type="text"
                name="race"
                value={editFormData.race}
                onChange={handleEditFormChange}
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Género:</S.Label>
              <S.Input
                type="text"
                name="gender"
                value={editFormData.gender}
                onChange={handleEditFormChange}
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Planeta de origen:</S.Label>
              <S.Input
                type="text"
                name="originPlanet"
                value={editFormData.originPlanet}
                onChange={handleEditFormChange}
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Imagen:</S.Label>
              <S.Input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleEditFormChange}
              />
              {editFormData.image && (
                <S.PreviewImage
                  src={editFormData.image}
                  alt="Previsualización"
                />
              )}
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Descripción:</S.Label>
              <S.Textarea
                name="description"
                value={editFormData.description}
                onChange={handleEditFormChange}
                rows="5"
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Afiliación:</S.Label>
              <S.Input
                type="text"
                name="affiliation"
                value={editFormData.affiliation}
                onChange={handleEditFormChange}
              />
            </S.FormGroup>
          <S.FormActions>
            <S.SaveButton type="submit">
              Guardar
            </S.SaveButton>
            <S.CancelButton
              type="button"
              onClick={() => setIsEditing(false)}>
              Cancelar
            </S.CancelButton>
          </S.FormActions>
        </S.EditForm>
      </S.Main>
    </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Detalle de Personaje</S.Title>
        <S.BackButton onClick={() => navigate("/")}>
          Volver a la lista
        </S.BackButton>
      </S.Header>
      <S.Main>
        <S.CharacterCard>
          <S.CharacterImageContainer>
            <S.CharacterImage
              src={personaje.image}
              alt={personaje.name}
            />
          </S.CharacterImageContainer>
          <S.CharacterInfo>
            <S.CharacterName>{personaje.name}</S.CharacterName>
            <S.CharacterDetail>
              <strong>Ki:</strong> {personaje.ki}
            </S.CharacterDetail>
            <S.CharacterDetail>
              <strong>Raza:</strong> {personaje.race}
            </S.CharacterDetail>
            <S.CharacterDetail>
              <strong>Género:</strong> {personaje.gender}
            </S.CharacterDetail>
            <S.CharacterDetail>
              <strong>Afiliación:</strong> {personaje.affiliation}
            </S.CharacterDetail>
            <S.CharacterDetail>
              <strong>Planeta de origen:</strong> {personaje.originPlanet?.name}
            </S.CharacterDetail>
            <S.CharacterDetail>
              <strong>Descripción:</strong> {personaje.description}
            </S.CharacterDetail>
          </S.CharacterInfo>
        </S.CharacterCard>
        <S.TransformationsSection>
          <S.SectionTitle>Transformaciones</S.SectionTitle>
          <S.TransformationsList>
            {personaje.transformations &&
              personaje.transformations.map((transform) => (
                <S.TransformationItem key={transform.id}>
                  <S.TransformationImage
                    src={transform.image}
                    alt={transform.name}
                  />
                  <S.TransformationName>{transform.name}</S.TransformationName>
                  <S.TransformationKi>Ki: {transform.ki}</S.TransformationKi>
                </S.TransformationItem>
              ))}
          </S.TransformationsList>
        </S.TransformationsSection>
        <S.CrudActions>
          <S.EditButton onClick={() => setIsEditing(true)}>
            Editar
          </S.EditButton>
          <S.DeleteButton onClick={handleBorrar}>
            Borrar
          </S.DeleteButton>
        </S.CrudActions>
      </S.Main>
    </S.Container>
  );
}

export default PantallaDetallePersonaje;
