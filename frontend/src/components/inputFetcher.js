import { useState, useEffect } from 'react';

const useFetch = (category) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/items/${category}`, {
          signal: abortController.signal,
        });
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();

    // Clean-up function
    return () => {
      abortController.abort();
      // Cleanup logic if needed
    };
  }, [category]);

  return { data, loading, error };
};

export default useFetch;
