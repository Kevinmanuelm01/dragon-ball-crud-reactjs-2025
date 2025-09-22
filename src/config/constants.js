// Constantes de configuración de la aplicación Dragon Ball CRUD

/**
 * Configuración de la API
 */
export const API_CONFIG = {
  BASE_URL: 'https://dragonball-api.com/api',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
};

/**
 * Configuración de paginación
 */
export const PAGINATION_CONFIG = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 25,
  MAX_LIMIT: 100,
};

/**
 * Configuración de la aplicación
 */
export const APP_CONFIG = {
  NAME: 'Dragon Ball CRUD',
  VERSION: '1.0.0',
  DESCRIPTION: 'Aplicación para gestionar personajes de Dragon Ball',
  AUTHOR: 'Dragon Ball CRUD Team',
};

/**
 * Rutas de la aplicación
 */
export const ROUTES = {
  HOME: '/',
  PERSONAJE_DETALLE: '/personaje/:id',
  CREAR_PERSONAJE: '/crear',
  EDITAR_PERSONAJE: '/editar/:id',
};

/**
 * Mensajes de la aplicación
 */
export const MESSAGES = {
  LOADING: 'Cargando...',
  ERROR_GENERAL: 'Ha ocurrido un error inesperado',
  ERROR_NETWORK: 'Error de conexión. Verifica tu conexión a internet.',
  ERROR_NOT_FOUND: 'Personaje no encontrado',
  SUCCESS_CREATE: 'Personaje creado exitosamente',
  SUCCESS_UPDATE: 'Personaje actualizado exitosamente',
  SUCCESS_DELETE: 'Personaje eliminado exitosamente',
  CONFIRM_DELETE: '¿Estás seguro de que deseas eliminar este personaje?',
  NO_RESULTS: 'No se encontraron resultados',
  EMPTY_LIST: 'No hay personajes disponibles',
};

/**
 * Configuración de validaciones
 */
export const VALIDATION_CONFIG = {
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 50,
  MIN_DESCRIPTION_LENGTH: 10,
  MAX_DESCRIPTION_LENGTH: 500,
  REQUIRED_FIELDS: ['name', 'race', 'gender'],
  OPTIONAL_FIELDS: ['ki', 'maxKi', 'affiliation', 'description'],
};

/**
 * Configuración de estilos y UI
 */
export const UI_CONFIG = {
  COLORS: {
    PRIMARY: '#ff6b00',
    SECONDARY: '#f0f2f5',
    SUCCESS: '#28a745',
    ERROR: '#dc3545',
    WARNING: '#ffc107',
    INFO: '#17a2b8',
  },
  BREAKPOINTS: {
    MOBILE: '768px',
    TABLET: '1024px',
    DESKTOP: '1200px',
  },
  ANIMATION_DURATION: 300,
};

/**
 * Configuración de localStorage
 */
export const STORAGE_CONFIG = {
  PREFIX: 'dragonball_crud_',
  EXPIRATION_DAYS: 30,
  MAX_STORAGE_SIZE: 5 * 1024 * 1024, // 5MB
};

/**
 * Configuración de filtros y búsqueda
 */
export const SEARCH_CONFIG = {
  DEBOUNCE_DELAY: 300,
  MIN_SEARCH_LENGTH: 2,
  MAX_SEARCH_LENGTH: 50,
  SEARCH_FIELDS: ['name', 'race', 'affiliation'],
};

/**
 * Configuración de imágenes
 */
export const IMAGE_CONFIG = {
  DEFAULT_AVATAR: '/images/default-avatar.png',
  PLACEHOLDER: '/images/placeholder.png',
  MAX_SIZE: 2 * 1024 * 1024, // 2MB
  ALLOWED_FORMATS: ['jpg', 'jpeg', 'png', 'webp'],
};

/**
 * Configuración de desarrollo
 */
export const DEV_CONFIG = {
  ENABLE_LOGS: process.env.NODE_ENV === 'development',
  ENABLE_DEBUG: process.env.NODE_ENV === 'development',
  MOCK_API: false,
};

/**
 * Géneros disponibles para personajes
 */
export const GENEROS = [
  'Male',
  'Female',
  'Unknown',
];

/**
 * Razas disponibles para personajes
 */
export const RAZAS = [
  'Saiyan',
  'Human',
  'Namekian',
  'Majin',
  'Frieza Race',
  'Android',
  'Angel',
  'God',
  'Demon',
  'Unknown',
];

/**
 * Afiliaciones disponibles para personajes
 */
export const AFILIACIONES = [
  'Z Fighter',
  'Red Ribbon Army',
  'Frieza Force',
  'Pride Troopers',
  'Team Universe 7',
  'Villain',
  'Neutral',
  'Other',
];

/**
 * Configuración de formularios
 */
export const FORM_CONFIG = {
  AUTO_SAVE_DELAY: 2000,
  VALIDATION_DELAY: 500,
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  SUPPORTED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
};

// Exportación por defecto con todas las constantes
const constants = {
  API_CONFIG,
  PAGINATION_CONFIG,
  APP_CONFIG,
  ROUTES,
  MESSAGES,
  VALIDATION_CONFIG,
  UI_CONFIG,
  STORAGE_CONFIG,
  SEARCH_CONFIG,
  IMAGE_CONFIG,
  DEV_CONFIG,
  GENEROS,
  RAZAS,
  AFILIACIONES,
  FORM_CONFIG,
};

export default constants;