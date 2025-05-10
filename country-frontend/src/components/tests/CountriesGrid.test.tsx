import { render, screen } from '@testing-library/react';
import { CountriesGrid } from '../CountriesGrid';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { TestWrapper } from '../../test-utils';

describe('CountriesGrid', () => {
  const mockCountries = [
    { name: 'Country 1', flagUrl: 'https://flagcdn.com/c1.svg' },
    { name: 'Country 2', flagUrl: 'https://flagcdn.com/c2.svg' },
    { name: 'Country 3', flagUrl: 'https://flagcdn.com/c3.svg' },
    { name: 'Country 4', flagUrl: 'https://flagcdn.com/c4.svg' },
    { name: 'Country 5', flagUrl: 'https://flagcdn.com/c5.svg' },
    { name: 'Country 6', flagUrl: 'https://flagcdn.com/c6.svg' },
  ];

  it('renders correct number of countries in grid format', () => {
    render(
      <TestWrapper>
        <CountriesGrid countries={mockCountries} />
      </TestWrapper>
    );

    // Should create 2 rows (6 countries / 5 columns = 2 rows)
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(2);
    
    // Check all country names are rendered
    mockCountries.forEach(country => {
      expect(screen.getByText(country.name)).toBeInTheDocument();
    });
  });

  it('renders empty cells when countries count is not multiple of columns', () => {
    const partialCountries = mockCountries.slice(0, 4); // 4 countries
    
    render(
      <TestWrapper>
        <CountriesGrid countries={partialCountries} />
      </TestWrapper>
    );

    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(1);
    
    // Should have 5 cells (1 row × 5 columns)
    const cells = screen.getAllByRole('cell');
    expect(cells).toHaveLength(5);
    
    // 4 cells with countries, 1 empty
    partialCountries.forEach(country => {
      expect(screen.getByText(country.name)).toBeInTheDocument();
    });
  });

  it('handles custom column count', () => {
    render(
      <TestWrapper>
        <CountriesGrid countries={mockCountries} columns={3} />
      </TestWrapper>
    );

    // 6 countries / 3 columns = 2 rows
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(2);
  });

  it('displays nothing when countries array is empty', () => {
    const { container } = render(
      <TestWrapper>
        <CountriesGrid countries={[]} />
      </TestWrapper>
    );
    
    expect(container).toBeEmptyDOMElement();
  });
});