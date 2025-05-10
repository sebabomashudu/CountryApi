import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '../../pages/HomePage';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchAllCountries } from '../../services/api';
import { TestWrapper } from '../../test-utils';

// Mock the API module
vi.mock('../../services/api', () => ({
  fetchAllCountries: vi.fn(),
}));

describe('HomePage', () => {
  beforeEach(() => {
    // Clear all mocks between tests
    vi.clearAllMocks();
  });

  it('displays loading state initially', () => {
    // Mock an unresolved promise to test loading state
    vi.mocked(fetchAllCountries).mockReturnValue(new Promise(() => {}));
    
    render(
      <TestWrapper>
        <HomePage />
      </TestWrapper>
    );
    
    expect(screen.getByText('Loading countries...')).toBeInTheDocument();
  });

  it('displays countries after loading', async () => {
    const mockCountries = [
      { name: 'Country 1', flagUrl: 'flag1.svg' },
      { name: 'Country 2', flagUrl: 'flag2.svg' },
    ];
    
    vi.mocked(fetchAllCountries).mockResolvedValue(mockCountries);
    
    render(
      <TestWrapper>
        <HomePage />
      </TestWrapper>
    );
    
    await waitFor(() => {
      expect(screen.getByText('Country 1')).toBeInTheDocument();
      expect(screen.getByText('Country 2')).toBeInTheDocument();
    });
    
    expect(screen.queryByText('Loading countries...')).not.toBeInTheDocument();
  });

  it('displays error message when fetch fails', async () => {
    vi.mocked(fetchAllCountries).mockRejectedValue(new Error('API Error'));
    
    render(
      <TestWrapper>
        <HomePage />
      </TestWrapper>
    );
    
    await waitFor(() => {
      expect(screen.getByText('Failed to load countries')).toBeInTheDocument();
    });
    
    expect(screen.queryByText('Loading countries...')).not.toBeInTheDocument();
  });
});