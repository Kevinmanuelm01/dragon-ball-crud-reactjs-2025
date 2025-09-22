// Definiciones de tipos para personajes usando JSDoc

/**
 * @typedef {Object} Personaje
 * @property {number} id - ID único del personaje
 * @property {string} name - Nombre del personaje
 * @property {string} ki - Nivel de ki del personaje
 * @property {string} maxKi - Nivel máximo de ki del personaje
 * @property {string} race - Raza del personaje
 * @property {string} gender - Género del personaje
 * @property {string} description - Descripción del personaje
 * @property {string} image - URL de la imagen del personaje
 * @property {string} affiliation - Afiliación del personaje
 * @property {boolean} [deletedAt] - Marca si el personaje fue eliminado
 * @property {boolean} [createdLocally] - Marca si fue creado localmente
 * @property {Array<Transformacion>} [transformations] - Transformaciones del personaje
 * @property {string} [originPlanet] - Planeta de origen
 */

/**
 * @typedef {Object} Transformacion
 * @property {number} id - ID de la transformación
 * @property {string} name - Nombre de la transformación
 * @property {string} image - URL de la imagen de la transformación
 * @property {string} ki - Nivel de ki en esta transformación
 */

/**
 * @typedef {Object} PersonajeFormData
 * @property {string} name - Nombre del personaje
 * @property {string} race - Raza del personaje
 * @property {string} gender - Género del personaje
 * @property {string} [ki] - Nivel de ki del personaje
 * @property {string} [maxKi] - Nivel máximo de ki del personaje
 * @property {string} [description] - Descripción del personaje
 * @property {string} [image] - URL de la imagen del personaje
 * @property {string} [affiliation] - Afiliación del personaje
 */

/**
 * @typedef {Object} PersonajeListResponse
 * @property {Array<Personaje>} items - Lista de personajes
 * @property {Object} meta - Metadatos de paginación
 * @property {number} meta.totalItems - Total de elementos
 * @property {number} meta.itemCount - Elementos en la página actual
 * @property {number} meta.itemsPerPage - Elementos por página
 * @property {number} meta.totalPages - Total de páginas
 * @property {number} meta.currentPage - Página actual
 */

/**
 * @typedef {Object} PersonajeFilter
 * @property {string} [name] - Filtro por nombre
 * @property {string} [race] - Filtro por raza
 * @property {string} [gender] - Filtro por género
 * @property {string} [affiliation] - Filtro por afiliación
 * @property {number} [page] - Número de página
 * @property {number} [limit] - Límite de resultados por página
 */

/**
 * @typedef {Object} PersonajeValidationError
 * @property {string} field - Campo con error
 * @property {string} message - Mensaje de error
 * @property {string} code - Código de error
 */

/**
 * @typedef {Object} PersonajeValidationResult
 * @property {boolean} isValid - Si la validación es exitosa
 * @property {Array<PersonajeValidationError>} errors - Lista de errores
 */

/**
 * Validaciones para campos de personaje
 */
export const PERSONAJE_VALIDATIONS = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s\-'\.]+$/,
  },
  race: {
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  gender: {
    required: true,
    enum: ['Male', 'Female', 'Unknown'],
  },
  ki: {
    required: false,
    pattern: /^[\d,\.]+$/,
  },
  maxKi: {
    required: false,
    pattern: /^[\d,\.]+$/,
  },
  description: {
    required: false,
    minLength: 10,
    maxLength: 500,
  },
  image: {
    required: false,
    pattern: /^https?:\/\/.+\.(jpg|jpeg|png|webp)$/i,
  },
  affiliation: {
    required: false,
    maxLength: 50,
  },
};

/**
 * Estados posibles de un personaje
 */
export const PERSONAJE_STATES = {
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error',
  CREATING: 'creating',
  UPDATING: 'updating',
  DELETING: 'deleting',
};

/**
 * Acciones CRUD para personajes
 */
export const PERSONAJE_ACTIONS = {
  FETCH: 'FETCH_PERSONAJES',
  FETCH_SUCCESS: 'FETCH_PERSONAJES_SUCCESS',
  FETCH_ERROR: 'FETCH_PERSONAJES_ERROR',
  CREATE: 'CREATE_PERSONAJE',
  CREATE_SUCCESS: 'CREATE_PERSONAJE_SUCCESS',
  CREATE_ERROR: 'CREATE_PERSONAJE_ERROR',
  UPDATE: 'UPDATE_PERSONAJE',
  UPDATE_SUCCESS: 'UPDATE_PERSONAJE_SUCCESS',
  UPDATE_ERROR: 'UPDATE_PERSONAJE_ERROR',
  DELETE: 'DELETE_PERSONAJE',
  DELETE_SUCCESS: 'DELETE_PERSONAJE_SUCCESS',
  DELETE_ERROR: 'DELETE_PERSONAJE_ERROR',
  SET_FILTER: 'SET_PERSONAJE_FILTER',
  CLEAR_FILTER: 'CLEAR_PERSONAJE_FILTER',
};

/**
 * Función para crear un personaje vacío con valores por defecto
 * @returns {PersonajeFormData} Personaje con valores por defecto
 */
export const createEmptyPersonaje = () => ({
  name: '',
  race: '',
  gender: '',
  ki: '',
  maxKi: '',
  description: '',
  image: '',
  affiliation: '',
});

/**
 * Función para validar un personaje
 * @param {PersonajeFormData} personaje - Datos del personaje a validar
 * @returns {PersonajeValidationResult} Resultado de la validación
 */
export const validatePersonaje = (personaje) => {
  const errors = [];

  // Validar campos requeridos
  if (!personaje.name || personaje.name.trim().length < PERSONAJE_VALIDATIONS.name.minLength) {
    errors.push({
      field: 'name',
      message: `El nombre debe tener al menos ${PERSONAJE_VALIDATIONS.name.minLength} caracteres`,
      code: 'INVALID_NAME_LENGTH'
    });
  }

  if (!personaje.race || personaje.race.trim().length < PERSONAJE_VALIDATIONS.race.minLength) {
    errors.push({
      field: 'race',
      message: `La raza debe tener al menos ${PERSONAJE_VALIDATIONS.race.minLength} caracteres`,
      code: 'INVALID_RACE_LENGTH'
    });
  }

  if (!personaje.gender || !PERSONAJE_VALIDATIONS.gender.enum.includes(personaje.gender)) {
    errors.push({
      field: 'gender',
      message: 'Debe seleccionar un género válido',
      code: 'INVALID_GENDER'
    });
  }

  // Validar campos opcionales si están presentes
  if (personaje.description && personaje.description.length > PERSONAJE_VALIDATIONS.description.maxLength) {
    errors.push({
      field: 'description',
      message: `La descripción no puede exceder ${PERSONAJE_VALIDATIONS.description.maxLength} caracteres`,
      code: 'INVALID_DESCRIPTION_LENGTH'
    });
  }

  if (personaje.image && !PERSONAJE_VALIDATIONS.image.pattern.test(personaje.image)) {
    errors.push({
      field: 'image',
      message: 'La URL de la imagen debe ser válida y terminar en jpg, jpeg, png o webp',
      code: 'INVALID_IMAGE_URL'
    });
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Función para sanitizar datos de personaje
 * @param {PersonajeFormData} personaje - Datos del personaje
 * @returns {PersonajeFormData} Personaje sanitizado
 */
export const sanitizePersonaje = (personaje) => ({
  name: personaje.name?.trim() || '',
  race: personaje.race?.trim() || '',
  gender: personaje.gender || '',
  ki: personaje.ki?.trim() || '',
  maxKi: personaje.maxKi?.trim() || '',
  description: personaje.description?.trim() || '',
  image: personaje.image?.trim() || '',
  affiliation: personaje.affiliation?.trim() || '',
});

// Exportaciones por defecto
export default {
  PERSONAJE_VALIDATIONS,
  PERSONAJE_STATES,
  PERSONAJE_ACTIONS,
  createEmptyPersonaje,
  validatePersonaje,
  sanitizePersonaje,
};