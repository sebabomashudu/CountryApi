// src/test-utils.tsx
import { MemoryRouter } from 'react-router-dom';
import type { ReactNode } from 'react';  // Note the 'type' keyword here

export function TestWrapper({ children }: { children: ReactNode }) {
  return <MemoryRouter>{children}</MemoryRouter>;
}