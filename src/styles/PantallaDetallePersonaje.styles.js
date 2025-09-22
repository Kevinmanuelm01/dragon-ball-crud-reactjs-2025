import styled, { keyframes } from 'styled-components';

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

export const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

// --- Layout Principal ---
export const Container = styled.div`
  min-height: 100vh;
  background-color: #f8fafc;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

// --- Header ---
export const Header = styled.header`
  text-align: center;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);
  position: relative;
`;

export const Title = styled.h1`
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const BackButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
`;

// --- Contenido Principal ---
export const Main = styled.main`
  padding: 0 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 1rem 2rem;
  }
`;

// --- Estados de Carga y Error ---
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.2rem;
  color: #64748b;
  
  &::before {
    content: '';
    width: 2rem;
    height: 2rem;
    border: 3px solid #e2e8f0;
    border-top: 3px solid #3b82f6;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
    margin-right: 1rem;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.2rem;
  color: #ef4444;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem;
`;

// --- Tarjeta de Personaje ---
export const CharacterCard = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  overflow: hidden;
  margin-bottom: 2rem;
  animation: ${slideIn} 0.6s ease-out;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const CharacterImageContainer = styled.div`
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 250px;
  }
`;

export const CharacterImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  border-radius: 12px;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.2));

  &:hover {
    transform: scale(1.05);
  }
`;

export const CharacterInfo = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const CharacterName = styled.h2`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e293b;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CharacterDetail = styled.p`
  margin: 0;
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.6;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f1f5f9;

  strong {
    color: #1e293b;
    font-weight: 600;
    margin-right: 0.5rem;
  }

  &:last-child {
    border-bottom: none;
  }
`;

// --- Sección de Transformaciones ---
export const TransformationsSection = styled.section`
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  padding: 2rem;
  margin-bottom: 2rem;
  animation: ${slideIn} 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const SectionTitle = styled.h3`
  margin: 0 0 1.5rem 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: #1e293b;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
    border-radius: 2px;
  }
`;

export const TransformationsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }
`;

export const TransformationItem = styled.div`
  background-color: #f8fafc;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    border-color: #e2e8f0;
    background-color: white;
  }
`;

export const TransformationImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  border: 3px solid #e2e8f0;
  transition: all 0.3s ease;
  background-color: #ffffff;
  padding: 8px;

  ${TransformationItem}:hover & {
    border-color: #3b82f6;
    transform: scale(1.05);
  }
`;

export const TransformationName = styled.p`
  margin: 0 0 0.5rem 0;
  font-weight: 600;
  color: #1e293b;
  font-size: 1rem;
`;

export const TransformationKi = styled.p`
  margin: 0;
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 500;
`;

// --- Acciones CRUD ---
export const CrudActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const CrudButton = styled.button`
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(255, 107, 53, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(255, 107, 53, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const EditButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const DeleteButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(239, 68, 68, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

// --- Formulario de Edición ---
export const EditForm = styled.form`
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  padding: 2rem;
  animation: ${slideIn} 0.6s ease-out;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #374151;
  font-size: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background-color: white;
  outline: none;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &[type="file"] {
    padding: 0.5rem;
    border-style: dashed;
    background-color: #f9fafb;
  }

  @media (max-width: 480px) {
    font-size: 16px; /* Evita zoom en iOS */
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background-color: white;
  outline: none;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

export const PreviewImage = styled.img`
  max-width: 120px;
  height: auto;
  display: block;
  margin-top: 0.75rem;
  border-radius: 8px;
  border: 2px solid #e5e7eb;
`;

export const FormActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const SaveButton = styled.button`
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const CancelButton = styled.button`
  padding: 0.75rem 2rem;
  background: #6b7280;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;

  &:hover {
    background: #4b5563;
    transform: translateY(-2px);
  }
`;