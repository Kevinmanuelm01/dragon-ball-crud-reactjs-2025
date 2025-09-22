// PantallaListaPersonaje.styles.js
import styled, { keyframes } from "styled-components";

// --- Animaciones ---
export const spin = keyframes` 
  0% { transform: rotate(0deg); } 
  100% { transform: rotate(360deg); } 
`;

export const fadeIn = keyframes` 
  from { opacity: 0; transform: translateY(10px); } 
  to { opacity: 1; transform: translateY(0); } 
`;

export const slideIn = keyframes` 
  from { opacity: 0; transform: scale(0.95); } 
  to { opacity: 1; transform: scale(1); } 
`;

// --- Layout Principal ---
export const Container = styled.div`
  min-height: 100vh;
  background-color: #f8fafc;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
`;

// --- Header ---
export const Header = styled.header`
  text-align: center;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);
`;

export const Logo = styled.img`
  max-width: 300px;
  height: auto;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    max-width: 200px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

// --- Toolbar ---
export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    padding: 0 1rem;
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
  max-width: 400px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  outline: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 0.75rem center;
  background-size: 1.25rem;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #9ca3af;
  }

  @media (max-width: 480px) {
    font-size: 16px; /* Evita zoom en iOS */
  }
`;

export const ToolbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const AddBtn = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
  }
`;

// --- Contenido Principal ---
export const Main = styled.main`
  padding: 0 2rem 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 1rem 2rem;
  }
`;

// --- Estados de carga y error ---
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  font-size: 1.2rem;
  color: #667eea;
  font-weight: 600;
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: #ef4444;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 12px;
  margin: 2rem;
  font-weight: 600;
`;

// --- Tabla ---
export const TableContainer = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  margin-bottom: 2rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const TableRow = styled.tr`
  transition: all 0.2s ease;

  &:hover {
    background-color: #f8fafc;
  }

  &:nth-child(even) {
    background-color: #f9fafb;
  }
`;

export const TableCell = styled.td`
  padding: 1.5rem 0.75rem;
  border-bottom: 1px solid #e5e7eb;
  vertical-align: middle;

  /* Columnas específicas */
  &:nth-child(1) { /* ID */
    width: 40px;
    text-align: center;
    font-weight: 600;
  }
  
  &:nth-child(2) { /* IMAGEN - Mantener tamaño */
    width: 80px;
    text-align: center;
  }
  
  &:nth-child(3) { /* NOMBRE */
    width: 18%;
    min-width: 100px;
  }
  
  &:nth-child(4) { /* RAZA */
    width: 12%;
    min-width: 80px;
  }
  
  &:nth-child(5) { /* ACCIONES - Tamaño justo para 2 botones */
    width: 120px;
    white-space: nowrap;
  }

  /* Responsive para tablets */
  @media (max-width: 768px) {
    padding: 0.75rem 0.25rem;
    font-size: 0.9rem;
    
    &:nth-child(1) { width: 50px; }
    &:nth-child(2) { width: 80px; }
    &:nth-child(3) { width: 22%; min-width: 120px; }
    &:nth-child(4) { width: 18%; min-width: 100px; }
    &:nth-child(5) { width: 120px; }
  }

  /* Responsive para móviles */
  @media (max-width: 480px) {
    padding: 0.5rem 0.25rem;
    font-size: 0.85rem;
    
    &:nth-child(1) { width: 40px; }
    &:nth-child(2) { width: 70px; }
    &:nth-child(3) { width: 25%; min-width: 100px; }
    &:nth-child(4) { width: 20%; min-width: 80px; }
    &:nth-child(5) { width: 100px; }
  }
`;

export const TableImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  object-fit: contain;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;
  background-color: #f8fafc;
  padding: 8px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ClickableName = styled.span`
  cursor: pointer;
  color: #3b82f6;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: #1d4ed8;
    text-decoration: underline;
  }
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const ActionButton = styled.button`
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) => {
    switch (props.$variant) {
      case "view":
        return `
          background-color: #3b82f6;
          color: white;
          &:hover {
            background-color: #2563eb;
            transform: translateY(-1px);
          }
        `;
      case "edit":
        return `
          background-color: #f59e0b;
          color: white;
          &:hover {
            background-color: #d97706;
            transform: translateY(-1px);
          }
        `;
      case "delete":
        return `
          background-color: #ef4444;
          color: white;
          &:hover {
            background-color: #dc2626;
            transform: translateY(-1px);
          }
        `;
      default:
        return `
          background-color: #6b7280;
          color: white;
        `;
    }
  }}
`;

// --- Paginación ---
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
`;

export const PaginationButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    border-color: #3b82f6;
    color: #3b82f6;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PaginationInfo = styled.span`
  font-weight: 600;
  color: #374151;
  padding: 0 1rem;
`;
