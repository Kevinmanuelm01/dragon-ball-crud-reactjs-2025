# Dragon Ball CRUD React App 🐉

## 📋 Description

Modern web application built with React that allows managing Dragon Ball universe characters. Features complete CRUD functionality (Create, Read, Update, Delete) consuming the public Dragon Ball API and local storage for simulated operations.

## ✨ Main Features

### 🔧 Core Technologies

- **React 19.1** with modern Hooks and latest optimizations
- **React Router DOM v7** for advanced SPA navigation
- **Create React App** as development foundation
- **LocalStorage** for data persistence
- **Fetch API** for REST services consumption
- **Modular architecture** with separation of concerns

### 🎯 Features

- **Character visualization:** Paginated list with search filters
- **Dragon Ball Z Logo:** Prominent visual identity in the application
- **Intuitive navigation:** Pagination controls and view navigation
- **Complete CRUD:** Create, edit and delete characters (simulated)
- **Image management:** Character image upload and display
- **Responsive interface:** Adaptive design for different devices
- **Local persistence:** Change storage in localStorage
- **Centralized services:** API and utilities organized modularly

### 🎨 User Experience

- Clean and modern interface inspired by Dragon Ball
- Asynchronous loading with loading states
- Error handling and validations
- Real-time filtering
- Smooth navigation between screens

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <your-repository>
cd dragon-ball-crud-reactjs
npm install
```

### 2. Start Development

```bash
npm start
# The application will be available at http://localhost:3000
```

### 3. Build for Production

```bash
npm run build
```

## 📱 Application Usage

### Character List

- View all characters with pagination
- Filter by name in real-time
- Access details, editing or deletion
- Create new custom characters

### Character Detail

- Complete character information
- Inline editing mode
- Transformation visualization
- Navigation between characters

## 📁 Project Structure

```
dragon-ball-crud-reactjs/
├── public/
│   ├── LOGODBZ.png          # Dragon Ball Z Logo
│   ├── index.html           # Main HTML template
│   └── manifest.json        # PWA configuration
├── src/
│   ├── components/          # Reusable components (empty, ready for expansion)
│   ├── pages/              # Main application pages
│   │   ├── PantallaListaPersonaje.js    # Character list with logo
│   │   └── PantallaDetallePersonaje.js  # Character detail/editing
│   ├── services/           # Services and APIs
│   │   └── dragonBallApi.js # Centralized Dragon Ball API client
│   ├── utils/              # Utilities and helpers
│   │   └── localStorage.js  # Centralized localStorage management
│   ├── config/             # Configurations and constants
│   │   └── constants.js     # Application constants
│   ├── types/              # Type definitions (JSDoc)
│   │   └── personaje.js     # Character types and validations
│   ├── hooks/              # Custom hooks (ready for expansion)
│   ├── styles/             # Component-organized styles
│   │   ├── PantallaListaPersonajeStyle.js
│   │   └── PantallaDetallePersonajeStyle.js
│   ├── App.js              # Root component and routing
│   ├── App.css             # Global styles
│   ├── index.js            # Entry point
│   └── reportWebVitals.js  # Performance metrics
├── package.json            # Dependencies and improved scripts
└── README.md              # Updated documentation
```

## 🔧 Available Scripts

### Development

```bash
npm start          # Development server
npm run dev        # Alias for npm start
npm run build      # Production build
npm test           # Run tests
npm run eject      # Expose configuration (irreversible)
```

### Testing and Quality

```bash
npm run test:coverage    # Tests with coverage report
npm run test:ci         # Tests for CI/CD
npm run lint            # Code analysis with ESLint
npm run lint:fix        # Fix linting issues automatically
```

### Formatting and Style

```bash
npm run format          # Format code with Prettier
npm run format:check    # Check format without modifying
npm run pre-commit      # Pre-commit validations (lint + format + test)
```

### Analysis and Optimization

```bash
npm run build:analyze   # Build + bundle analysis
npm run serve          # Serve production build
npm run preview        # Build + local preview
npm run clean          # Clean node_modules and reinstall
```

## 🎯 Technical Features

### State Management

- **useState** for local component state
- **useEffect** for side effects and lifecycle
- **useCallback** for render optimization
- **localStorage** for data persistence

### Component Architecture

- Functional components with Hooks
- **Modular separation:** pages, services, utils, config, types
- **Centralized services:** dragonBallApi.js for all requests
- **Reusable utilities:** localStorage.js for data management
- **Organized constants:** constants.js for configuration
- **Documented types:** JSDoc for data definitions
- JS object style reuse
- Centralized error handling

### API Integration

- Consumption of [Dragon Ball API](https://dragonball-api.com/)
- Loading and error state handling
- Client-side pagination and filtering
- Local data fallback

### Optimizations

- Image lazy loading
- Search filter debouncing
- Expensive function memoization
- Efficient re-render management

## 🌐 External API

### Dragon Ball API

- **Base URL:** `https://dragonball-api.com/api`
- **Used Endpoints:**
  - `GET /characters?page={n}&limit={n}` - Paginated list
  - `GET /characters/{id}` - Character detail
- **Features:** Public REST API, no authentication required

## 💾 Local Storage

### LocalStorage Keys

- `personajesCreados` - User-created characters
- `personajesEliminados` - Deleted character IDs
- Automatic change persistence
- Synchronization with external API

## 🔒 Security Considerations

- Form input validation
- User data sanitization
- Safe handling of uploaded images
- XSS prevention in dynamic content

## 📦 Main Dependencies

### Core Framework

- **React:** 19.1.0 - Main framework with latest features
- **React DOM:** 19.1.0 - Optimized web rendering
- **React Router DOM:** 7.9.1 - SPA navigation with new functionalities

### Development and Build

- **react-scripts:** 5.0.1 - Development and build tools
- **web-vitals:** 4.2.4 - Updated performance metrics

### Testing (Updated)

- **@testing-library/react:** 13.4.0 - React component testing
- **@testing-library/jest-dom:** 6.6.3 - Additional Jest matchers
- **@testing-library/user-event:** 14.5.2 - User event simulation
- **@testing-library/dom:** 10.4.0 - DOM testing utilities

### 🚀 Upcoming Improvements

### Planned Features

- [ ] **TypeScript:** Gradual migration for better type safety
- [ ] **Unit tests:** Complete coverage of components and services
- [ ] **Complete PWA:** Service workers and offline functionality
- [ ] **Image optimization:** Lazy loading and WebP
- [ ] **Dark/light mode:** Dynamic theme system
- [ ] **Internationalization:** Multi-language support (i18n)

### Technical Improvements

- [ ] **Global state:** Context API or Zustand for advanced management
- [ ] **Smart caching:** React Query for request optimization
- [ ] **Bundle splitting:** Code splitting by routes
- [ ] **Performance:** Memoization and React 19 optimizations
- [ ] **Accessibility:** WCAG 2.1 AA compliance
- [ ] **CI/CD:** Automated pipeline with GitHub Actions

## 🤝 Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- **API:** [Dragon Ball API](https://dragonball-api.com/) for their excellent service
- **Framework:** [Create React App](https://github.com/facebook/create-react-app)
- **Inspiration:** Dragon Ball universe by Akira Toriyama

---

⚡ **Developed with passion for the Dragon Ball universe!** 🐉
