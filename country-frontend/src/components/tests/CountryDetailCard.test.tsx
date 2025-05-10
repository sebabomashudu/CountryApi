import { render, screen } from '@testing-library/react';
import { CountryDetailCard } from '../CountryDetailCard';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('CountryDetailCard', () => {
  const mockCountry = {
    name: 'Testland',
    flagUrl: 'https://flagcdn.com/test.svg',
    capital: 'Testville',
    population: 8500000
  };

  it('renders the country name and flag', () => {
    render(<CountryDetailCard country={mockCountry} />);

    expect(screen.getByText(mockCountry.name)).toBeInTheDocument();
    expect(screen.getByAltText(`${mockCountry.name} flag`))
      .toHaveAttribute('src', mockCountry.flagUrl);
  });

  it('displays capital information', () => {
    render(<CountryDetailCard country={mockCountry} />);

    expect(screen.getByText(/Capital:/)).toBeInTheDocument();
    expect(screen.getByText(mockCountry.capital)).toBeInTheDocument();
  });

  it('displays formatted population', () => {
    render(<CountryDetailCard country={mockCountry} />);

    expect(screen.getByText(/Population:/)).toBeInTheDocument();
    expect(screen.getByText('8,500,000')).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const { container } = render(<CountryDetailCard country={mockCountry} />);
    expect(container).toMatchSnapshot();
  });
});