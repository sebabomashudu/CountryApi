import { LoadingAndError } from './LoadingAndError';

interface CountryDetailLoaderProps {
  loading: boolean;
  error: string | null;
  country: any | null;
}

export function CountryDetailLoader({ loading, error, country }: CountryDetailLoaderProps) {
  return (
    <LoadingAndError
      loading={loading && !country}
      error={error}
      loadingMessage="Loading country details..."
    />
  );
}