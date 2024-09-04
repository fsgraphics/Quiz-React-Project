import { useEffect, useState } from "react";

const useApiCurated = (url, apiKey) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPhotos, setCurrentphotos] = useState(null);
  const [apiUrl, setApiUrl] = useState(null);

  useEffect(() => {
    async function curatedPhotos() {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: apiKey,
          },
        });
        setApiUrl(response);

        const data = await response.json();
        setLoading(false);
        setCurrentphotos(data);
      } catch (err) {
        console.log(err);

        setLoading(false);
        setError(true);
      }
    }

    curatedPhotos();
  }, [apiKey, url]);
  return {
    loading,
    error,
    currentPhotos,
    apiUrl,
  };
};
export default useApiCurated;
