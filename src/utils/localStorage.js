// Utilidades para manejar el localStorage de forma centralizada y segura

/**
 * Claves utilizadas en localStorage
 */
export const STORAGE_KEYS = {
  PERSONAJES_CREADOS: 'personajesCreados',
  PERSONAJES_ELIMINADOS: 'personajesEliminados',
  CONFIGURACION_APP: 'configuracionApp',
};

/**
 * Obtiene un valor del localStorage de forma segura
 * @param {string} key - Clave del localStorage
 * @param {*} defaultValue - Valor por defecto si no existe o hay error
 * @returns {*} - Valor parseado o valor por defecto
 */
export const getFromStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error al leer ${key} del localStorage:`, error);
    return defaultValue;
  }
};

/**
 * Guarda un valor en localStorage de forma segura
 * @param {string} key - Clave del localStorage
 * @param {*} value - Valor a guardar
 * @returns {boolean} - true si se guardó correctamente, false si hubo error
 */
export const setToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error al guardar ${key} en localStorage:`, error);
    return false;
  }
};

/**
 * Elimina un valor del localStorage
 * @param {string} key - Clave a eliminar
 * @returns {boolean} - true si se eliminó correctamente
 */
export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error al eliminar ${key} del localStorage:`, error);
    return false;
  }
};

/**
 * Limpia todo el localStorage relacionado con la aplicación
 */
export const clearAppStorage = () => {
  Object.values(STORAGE_KEYS).forEach(key => {
    removeFromStorage(key);
  });
};

// Funciones específicas para personajes

/**
 * Obtiene la lista de personajes creados localmente
 * @returns {Array} - Array de personajes creados
 */
export const getPersonajesCreados = () => {
  return getFromStorage(STORAGE_KEYS.PERSONAJES_CREADOS, []);
};

/**
 * Guarda la lista de personajes creados
 * @param {Array} personajes - Array de personajes
 * @returns {boolean} - true si se guardó correctamente
 */
export const setPersonajesCreados = (personajes) => {
  return setToStorage(STORAGE_KEYS.PERSONAJES_CREADOS, personajes);
};

/**
 * Agrega un nuevo personaje a la lista de creados
 * @param {Object} personaje - Objeto del personaje
 * @returns {boolean} - true si se agregó correctamente
 */
export const addPersonajeCreado = (personaje) => {
  const personajes = getPersonajesCreados();
  personajes.unshift(personaje); // Agregar al inicio
  return setPersonajesCreados(personajes);
};

/**
 * Obtiene la lista de IDs de personajes eliminados
 * @returns {Array} - Array de IDs eliminados
 */
export const getPersonajesEliminados = () => {
  return getFromStorage(STORAGE_KEYS.PERSONAJES_ELIMINADOS, []);
};

/**
 * Guarda la lista de personajes eliminados
 * @param {Array} ids - Array de IDs eliminados
 * @returns {boolean} - true si se guardó correctamente
 */
export const setPersonajesEliminados = (ids) => {
  return setToStorage(STORAGE_KEYS.PERSONAJES_ELIMINADOS, ids);
};

/**
 * Agrega un ID a la lista de personajes eliminados
 * @param {number|string} id - ID del personaje eliminado
 * @returns {boolean} - true si se agregó correctamente
 */
export const addPersonajeEliminado = (id) => {
  const eliminados = getPersonajesEliminados();
  if (!eliminados.includes(id)) {
    eliminados.push(id);
    return setPersonajesEliminados(eliminados);
  }
  return true;
};

/**
 * Verifica si un personaje está eliminado
 * @param {number|string} id - ID del personaje
 * @returns {boolean} - true si está eliminado
 */
export const isPersonajeEliminado = (id) => {
  const eliminados = getPersonajesEliminados();
  return eliminados.includes(id);
};

/**
 * Actualiza un personaje creado localmente
 * @param {number|string} id - ID del personaje
 * @param {Object} datosActualizados - Nuevos datos del personaje
 * @returns {boolean} - true si se actualizó correctamente
 */
export const updatePersonajeCreado = (id, datosActualizados) => {
  const personajes = getPersonajesCreados();
  const index = personajes.findIndex(p => p.id === id);
  
  if (index !== -1) {
    personajes[index] = { ...personajes[index], ...datosActualizados };
    return setPersonajesCreados(personajes);
  }
  
  return false;
};

// Exportación por defecto
const localStorageUtils = {
  getFromStorage,
  setToStorage,
  removeFromStorage,
  clearAppStorage,
  getPersonajesCreados,
  setPersonajesCreados,
  addPersonajeCreado,
  getPersonajesEliminados,
  setPersonajesEliminados,
  addPersonajeEliminado,
  isPersonajeEliminado,
  updatePersonajeCreado,
  STORAGE_KEYS,
};

export default localStorageUtils;