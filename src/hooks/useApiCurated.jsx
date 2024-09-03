import { useEffect, useState } from "react";

const useApiCurated = (url) => {
  const api = "Oq35bjwHJJWsD3oVLXKDMfzHO8hyxfVoLBEoe8VfR6UwO2yXrJnSR21D";
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
            Authorization: api,
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
  }, [url]);

  return {
    loading,
    error,
    currentPhotos,
    apiUrl,
  };
};
export default useApiCurated;
