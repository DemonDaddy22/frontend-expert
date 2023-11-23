export const sampleUsage = `function Fetcher() {
  const { responseJSON, isLoading, error } = useFetch(url);
  const [url, setUrl] = useState('');
  return (
    <>
      <input value={url} onChange={(e) => setUrl(e.target.value)} />
      {
        error ? <p>Error: {error}</p> :
        isLoading ? <p>Loading...</p> :
        <p>Response: {responseJSON}</p>
      }
    </>
  );
}`;

export const solutionCode = `// use fetch hook`;
