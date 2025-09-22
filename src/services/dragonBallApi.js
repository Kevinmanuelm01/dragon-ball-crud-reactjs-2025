// Servicio para manejar las peticiones a la Dragon Ball API
const API_BASE_URL = "https://dragonball-api.com/api";

/**
 * Configuración base para las peticiones HTTP
 */
const apiConfig = {
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
};

/**
 * Función para realizar peticiones HTTP con manejo de errores
 * @param {string} url - URL de la petición
 * @param {object} options - Opciones adicionales para fetch
 * @returns {Promise} - Promesa con la respuesta de la API
 */
const apiRequest = async (url, options = {}) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), apiConfig.timeout);

    const response = await fetch(url, {
      ...options,
      headers: {
        ...apiConfig.headers,
        ...options.headers,
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timeout');
    }
    throw error;
  }
};

/**
 * Obtiene la lista de personajes con paginación
 * @param {number} page - Número de página (por defecto 1)
 * @param {number} limit - Límite de personajes por página (por defecto 25)
 * @returns {Promise} - Promesa con la lista de personajes
 */
export const getPersonajes = async (page = 1, limit = 25) => {
  const url = `${API_BASE_URL}/characters?page=${page}&limit=${limit}`;
  return await apiRequest(url);
};

/**
 * Obtiene los detalles de un personaje específico
 * @param {number|string} id - ID del personaje
 * @returns {Promise} - Promesa con los datos del personaje
 */
export const getPersonajeById = async (id) => {
  const url = `${API_BASE_URL}/characters/${id}`;
  return await apiRequest(url);
};

/**
 * Obtiene información de todas las transformaciones disponibles
 * @returns {Promise} - Promesa con la lista de transformaciones
 */
export const getTransformaciones = async () => {
  const url = `${API_BASE_URL}/transformations`;
  return await apiRequest(url);
};

/**
 * Obtiene información de todos los planetas
 * @returns {Promise} - Promesa con la lista de planetas
 */
export const getPlanetas = async () => {
  const url = `${API_BASE_URL}/planets`;
  return await apiRequest(url);
};

// Exportación por defecto del servicio
const dragonBallApiService = {
  getPersonajes,
  getPersonajeById,
  getTransformaciones,
  getPlanetas,
};

export default dragonBallApiService;