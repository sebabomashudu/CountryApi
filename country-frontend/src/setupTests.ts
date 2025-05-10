import '@testing-library/jest-dom/vitest'; // Note the /vitest extension
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});