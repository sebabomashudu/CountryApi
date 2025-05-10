import { MemoryRouter } from 'react-router-dom';
import type { ReactNode } from 'react';  

export function TestWrapper({ children }: { children: ReactNode }) {
  return <MemoryRouter>{children}</MemoryRouter>;
}