import { useEffect, useState } from "react";
import { createClient } from "pexels";

const usePexelsapi = () => {
  // genral states
  const [loading, setLoading] = useState(true);
  const [curatedPhotos, setCuratedPhotos] = useState(null);

  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const api = "Oq35bjwHJJWsD3oVLXKDMfzHO8hyxfVoLBEoe8VfR6UwO2yXrJnSR21D";

  useEffect(() => {
    setLoading(true);
    const client = createClient(api); // my api key

    client.photos
      .curated({
        page: currentPage,
        per_page: perPage,
      })
      .then((res) => {
        if (res.page === currentPage) {
          // if the response is correct
          setCuratedPhotos(res.photos);
          setCurrentPage(res.page);
          setTotalPages(Math.ceil(res.total_results / perPage)); // 800 instead of 8000
          setPerPage(res.per_page);
        } else {
          console.log("Unexpected API Response", res);
          setCuratedPhotos(null); // incase server returns wrong result
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [currentPage, perPage]);
  return {
    loading,
    curatedPhotos,
    totalPages,
  };
};

export default usePexelsapi;
