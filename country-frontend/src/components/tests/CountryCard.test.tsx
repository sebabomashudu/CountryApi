import { render, screen } from '@testing-library/react';
import { CountryCard } from '../CountryCard';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { TestWrapper } from '../../test-utils';

describe('CountryCard', () => {
  const mockCountry = {
    name: 'Test Country',
    flagUrl: 'https://flagcdn.com/test.svg',
  };

  it('renders country name and flag', () => {
    render(
      <TestWrapper>
        <CountryCard country={mockCountry} />
      </TestWrapper>
    );
    
    expect(screen.getByText('Test Country')).toBeInTheDocument();
    expect(screen.getByAltText('Test Country flag')).toHaveAttribute(
      'src',
      'https://flagcdn.com/test.svg'
    );
  });

  it('links to the correct country page', () => {
    render(
      <TestWrapper>
        <CountryCard country={mockCountry} />
      </TestWrapper>
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/country/Test Country');
  });
});