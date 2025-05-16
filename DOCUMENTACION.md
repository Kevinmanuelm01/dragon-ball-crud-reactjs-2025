# Dragon Ball CRUD

Aplicación web desarrollada en React que permite visualizar, crear, editar y eliminar (de forma simulada) personajes del universo Dragon Ball, consumiendo la API pública [dragonball-api.com](https://dragonball-api.com/).

## Características

- **Visualización de personajes:** Consulta la información de personajes de Dragon Ball usando la API pública.
- **Navegación:** Avanza y retrocede entre personajes usando controles de navegación.
- **Edición:** Modifica los datos de un personaje (simulado, no persiste en la API).
- **Eliminación:** Elimina un personaje (simulado, no persiste en la API).
- **Creación:** Crea un nuevo personaje ficticio (simulado, no persiste en la API).
- **Interfaz amigable:** Diseño simple y fácil de usar.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone <url-del-repositorio>
   cd dragon-ball-crud-reactjs
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia la aplicación:

   ```bash
   npm start
   ```

   La app estará disponible en [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

- `npm start`: Ejecuta la app en modo desarrollo.
- `npm test`: Lanza el corredor de pruebas.
- `npm run build`: Genera una versión optimizada para producción.
- `npm run eject`: Expone la configuración de Create React App (irreversible).

## Estructura del proyecto

```
dragon-ball-crud-reactjs/
│
├── public/
├── src/
│   ├── App.js           # Lógica principal de la app y componentes
│   ├── App.css          # Estilos principales
│   ├── index.js         # Punto de entrada de React
│   ├── ...otros archivos
├── package.json
└── README.md
```

## Detalles de funcionamiento

- **Consumo de API:** Se utiliza `fetch` para obtener los datos de los personajes desde la API.
- **CRUD simulado:** Las operaciones de crear, editar y eliminar son simuladas en el frontend, ya que la API pública no permite modificar datos.
- **Estados y hooks:** Se usan hooks de React (`useState`, `useEffect`) para manejar el estado y los ciclos de vida.
- **Validaciones:** Se incluyen validaciones básicas en los formularios de edición y creación.

## Dependencias principales

- React 19.x
- @testing-library/react
- @testing-library/jest-dom
- react-scripts

## Notas

- Este proyecto es solo para fines educativos y de práctica con React y consumo de APIs.
- Las operaciones de edición, creación y eliminación no afectan la base de datos real de la API.

## Créditos

- API utilizada: [dragonball-api.com](https://dragonball-api.com/)
- Proyecto basado en [Create React App](https://github.com/facebook/create-react-app)
