interface LoadingAndErrorProps {
  loading: boolean;
  error: string | null;
  loadingMessage?: string;
}

export function LoadingAndError({ 
  loading, 
  error, 
  loadingMessage = 'Loading...' 
}: LoadingAndErrorProps) {
  if (loading) return <div className="p-4 text-center">{loadingMessage}</div>;
  if (error) return <div className="p-4 text-red-500 text-center">{error}</div>;
  return null;
}