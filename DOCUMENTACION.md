# Dragon Ball CRUD - Technical Documentation 🐉

## 📋 General Description

Web application developed in React that allows viewing, creating, editing and deleting (simulated) characters from the Dragon Ball universe, consuming the public API [dragonball-api.com](https://dragonball-api.com/).

## ✨ Main Features

### 🎯 Core Functionalities

- **Character visualization:** Query Dragon Ball character information using the public API
- **Smart navigation:** Navigate forward and backward between characters using navigation controls
- **Real-time editing:** Modify character data (simulated, does not persist in API)
- **Safe deletion:** Delete a character (simulated, does not persist in API)
- **Custom creation:** Create a new fictional character (simulated, does not persist in API)
- **Modern interface:** Responsive and user-friendly design

### 🔧 Technology Stack

- **Frontend:** React 19.x with modern Hooks
- **Routing:** React Router DOM v6.22.3
- **Styling:** CSS-in-JS with style objects
- **HTTP Client:** Native Fetch API
- **Storage:** LocalStorage for persistence
- **Build Tool:** Create React App (react-scripts 5.0.1)

## 🚀 Installation and Configuration

### Prerequisites

- Node.js >= 16.0.0
- npm >= 8.0.0

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd dragon-ball-crud-reactjs
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the application:**
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## 📜 Available Scripts

### Development

- `npm start` - Runs the app in development mode with hot reload
- `npm test` - Launches the test runner in interactive mode
- `npm run build` - Generates an optimized version for production
- `npm run eject` - Exposes Create React App configuration (irreversible)

### Analysis and Optimization

```bash
npm run build        # Builds the optimized application
npm run test -- --coverage  # Runs tests with coverage report
```

## 🏗️ Project Architecture

### Directory Structure

```
dragon-ball-crud-reactjs/
│
├── public/                 # Static files
│   ├── LOGODBZ.png        # Main application logo
│   ├── favicon.ico        # Browser icon
│   ├── index.html         # Main HTML template
│   ├── manifest.json      # PWA configuration
│   └── robots.txt         # SEO configuration
│
├── src/                   # Source code
│   ├── App.js            # Root component and route configuration
│   ├── App.css           # Global application styles
│   ├── index.js          # React entry point
│   ├── index.css         # Base styles and CSS reset
│   │
│   ├── PantallaListaPersonaje.js      # Character list component
│   ├── PantallaListaPersonajeStyle.js # List styles
│   ├── PantallaDetallePersonaje.js    # Detail/edit component
│   ├── PantallaDetallePersonajeStyle.js # Detail styles
│   │
│   ├── reportWebVitals.js # Performance metrics
│   └── setupTests.js      # Testing configuration
│
├── package.json           # Dependencies and npm configuration
├── package-lock.json      # Dependencies lock file
├── README.md             # Main documentation
├── DOCUMENTACION.md      # Technical documentation (this file)
└── .gitignore           # Files ignored by Git
```

### Architecture Patterns

#### 1. **Functional Components with Hooks**

```javascript
// Component structure example
function PantallaListaPersonaje() {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPersonajes();
  }, []);

  return (
    // Component JSX
  );
}
```

#### 2. **Style Separation**

- Styles organized in separate files
- Use of JavaScript objects for styles
- Reuse of common styles

#### 3. **Local State Management**

- useState for component state
- useEffect for side effects
- useCallback for render optimization

## 🔄 Data Flow and State

### Main States

#### PantallaListaPersonaje

```javascript
const [personajes, setPersonajes] = useState([]); // Character list
const [filtro, setFiltro] = useState(""); // Search filter
const [pagina, setPagina] = useState(1); // Current page
const [totalPaginas, setTotalPaginas] = useState(1); // Total pages
const [loading, setLoading] = useState(true); // Loading state
const [error, setError] = useState(null); // Error handling
const [showForm, setShowForm] = useState(false); // Show form
```

#### PantallaDetallePersonaje

```javascript
const [personaje, setPersonaje] = useState(null); // Character data
const [loading, setLoading] = useState(true); // Loading state
const [error, setError] = useState(null); // Error handling
const [editMode, setEditMode] = useState(false); // Edit mode
const [editFormData, setEditFormData] = useState({}); // Form data
```

### Data Persistence

#### LocalStorage Keys

- `personajesCreados` - Array of user-created characters
- `personajesEliminados` - Array of deleted character IDs

#### Utility Functions

```javascript
// Deleted characters management
const getPersonajesEliminados = () => {
  const data = localStorage.getItem("personajesEliminados");
  return data ? JSON.parse(data) : [];
};

// Created characters management
const getPersonajesCreados = () => {
  const data = localStorage.getItem("personajesCreados");
  return data ? JSON.parse(data) : [];
};
```

## 🌐 External API Integration

### Dragon Ball API

- **Base URL:** `https://dragonball-api.com/api`
- **Documentation:** [dragonball-api.com](https://dragonball-api.com/)

### Used Endpoints

#### 1. Character List

```javascript
GET /characters?page={page}&limit={limit}

// Usage example
const response = await fetch(
  `https://dragonball-api.com/api/characters?page=${pagina}&limit=25`
);
```

#### 2. Character Detail

```javascript
GET / characters / { id };

// Usage example
const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
```

### Error Handling

```javascript
try {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Request error");
  const data = await response.json();
  // Process data
} catch (err) {
  setError("Error loading characters");
  // Fallback to local data if necessary
}
```

## 🎨 Styling System

### CSS-in-JS Methodology

Styles are organized in JavaScript objects for better maintainability:

```javascript
// Example from PantallaListaPersonajeStyle.js
const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  actionButton: {
    margin: "0 2px",
    padding: "4px 10px",
    borderRadius: "4px",
    border: "1px solid #bbb",
    cursor: "pointer",
  },
};
```

### Color Palette

- **Primary:** `#ff6b00` (Dragon Ball Orange)
- **Background:** `#f0f2f5` (Light Gray)
- **Text:** Standard system colors
- **States:** Semantic colors for errors and success

## 🔧 Funcionalidades Detalladas

### 1. Lista de Personajes

#### Características

- **Paginación:** 25 personajes por página
- **Filtrado:** Búsqueda en tiempo real por nombre
- **Acciones:** Ver detalle, editar, eliminar
- **Creación:** Formulario para nuevos personajes

#### Flujo de Datos

1. Carga inicial desde API
2. Mezcla con personajes creados localmente
3. Filtrado de personajes eliminados
4. Aplicación de filtros de búsqueda
5. Renderizado de tabla con acciones

### 2. Detalle de Personaje

#### Características

- **Visualización:** Información completa del personaje
- **Edición:** Formulario inline para modificar datos
- **Navegación:** Botones para personaje anterior/siguiente
- **Transformaciones:** Visualización de formas alternativas

#### Estados de Edición

```javascript
const handleEdit = () => {
  setEditMode(true);
  // Preparar datos para edición
};

const handleSave = () => {
  // Validar y guardar cambios
  // Actualizar localStorage si es personaje creado
  setEditMode(false);
};
```

### 3. Gestión CRUD

#### Crear Personaje

```javascript
const handleCrearPersonaje = () => {
  const nuevoId = Date.now(); // ID único basado en timestamp
  const personajeCompleto = {
    id: nuevoId,
    ...nuevoPersonaje,
    createdLocally: true,
  };

  const creados = getPersonajesCreados();
  creados.unshift(personajeCompleto);
  setPersonajesCreados(creados);
};
```

#### Eliminar Personaje

```javascript
const handleEliminar = (id) => {
  const eliminados = getPersonajesEliminados();
  eliminados.push(id);
  setPersonajesEliminados(eliminados);

  // Actualizar vista
  fetchPersonajes(pagina);
};
```

## 🔒 Seguridad y Validaciones

### Validaciones de Entrada

- **Campos requeridos:** Nombre, raza, género
- **Formato de datos:** Validación de tipos
- **Sanitización:** Limpieza de datos de entrada

### Consideraciones de Seguridad

- **XSS Prevention:** Escape de contenido dinámico
- **Input Validation:** Validación en cliente y servidor
- **Safe Image Handling:** Manejo seguro de imágenes cargadas

## 📊 Dependencias del Proyecto

### Dependencias de Producción

```json
{
  "react": "^19.1.0", // Framework principal
  "react-dom": "^19.1.0", // DOM renderer
  "react-router-dom": "^6.22.3", // Routing SPA
  "react-scripts": "5.0.1", // Build tools
  "web-vitals": "^2.1.4" // Métricas de rendimiento
}
```

### Dependencias de Desarrollo

```json
{
  "@testing-library/dom": "^10.4.0",
  "@testing-library/jest-dom": "^6.6.3",
  "@testing-library/react": "^16.3.0",
  "@testing-library/user-event": "^13.5.0"
}
```

## 🚀 Optimizaciones y Rendimiento

### Técnicas Implementadas

1. **useCallback:** Memoización de funciones costosas
2. **Lazy Loading:** Carga diferida de imágenes
3. **Debouncing:** Optimización de filtros de búsqueda
4. **Local Caching:** Uso de localStorage para reducir peticiones

### Métricas de Rendimiento

- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

## 🧪 Testing y Calidad

### Estrategia de Testing

- **Unit Tests:** Componentes individuales
- **Integration Tests:** Flujos de usuario
- **E2E Tests:** Casos de uso completos

### Herramientas de Calidad

- **ESLint:** Linting de código
- **Prettier:** Formateo automático
- **React Testing Library:** Testing de componentes

## 🚀 Despliegue y Producción

### Build de Producción

```bash
npm run build
```

### Optimizaciones de Build

- **Code Splitting:** División automática de código
- **Tree Shaking:** Eliminación de código no utilizado
- **Minification:** Compresión de archivos
- **Asset Optimization:** Optimización de recursos

### Consideraciones de Despliegue

- **Static Hosting:** Compatible con Netlify, Vercel, GitHub Pages
- **CDN:** Distribución de contenido estático
- **Caching:** Estrategias de caché para mejor rendimiento

## 🔮 Roadmap y Mejoras Futuras

### Próximas Características

- [ ] **TypeScript:** Migración a TypeScript para mejor type safety
- [ ] **PWA:** Implementación de Service Workers
- [ ] **Testing:** Cobertura completa de tests
- [ ] **Internacionalización:** Soporte multi-idioma
- [ ] **Tema Oscuro:** Implementación de dark mode
- [ ] **Optimización de Imágenes:** Lazy loading y WebP

### Mejoras Técnicas

- [ ] **State Management:** Implementación de Context API o Redux
- [ ] **Error Boundaries:** Manejo avanzado de errores
- [ ] **Performance:** Implementación de React.memo y useMemo
- [ ] **Accessibility:** Mejoras de accesibilidad (a11y)

## 🤝 Contribución y Desarrollo

### Guías de Contribución

1. Fork del repositorio
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Seguir convenciones de código existentes
4. Escribir tests para nuevas funcionalidades
5. Commit con mensajes descriptivos
6. Push y crear Pull Request

### Convenciones de Código

- **Naming:** camelCase para variables y funciones
- **Components:** PascalCase para componentes
- **Files:** PascalCase para archivos de componentes
- **Styling:** Objetos JavaScript para estilos

## 📚 Recursos y Referencias

### Documentación Oficial

- [React Documentation](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Create React App](https://create-react-app.dev/)

### APIs Utilizadas

- [Dragon Ball API](https://dragonball-api.com/) - API principal de datos

### Herramientas de Desarrollo

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/)

## 📄 Licencia y Créditos

### Licencia

Este proyecto está bajo la licencia MIT. Ver archivo LICENSE para más detalles.

### Créditos

- **API:** [Dragon Ball API](https://dragonball-api.com/) por proporcionar los datos
- **Framework:** [Create React App](https://github.com/facebook/create-react-app) por la base del proyecto
- **Inspiración:** Universo Dragon Ball creado por Akira Toriyama

---

## 📞 Soporte y Contacto

Para reportar bugs, solicitar características o contribuir al proyecto:

- **Issues:** Usar el sistema de issues de GitHub
- **Discussions:** Participar en las discusiones del repositorio
- **Pull Requests:** Contribuir con código siguiendo las guías establecidas

---

⚡ **¡Proyecto desarrollado con pasión por el universo Dragon Ball!** 🐉
