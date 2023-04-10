import { useEffect, useState } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

import { fetchResponse } from "services/fetchResponse";
import { getNormalizeErrorMsg } from "services/getNormalizeErrorMsg";

export const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [listSearch, setListSearch] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = ({ searchQuery }) => {
    setSearchQuery(searchQuery.trim());
    setCurrentPage(1);
    setListSearch([]);
  }

  useEffect(() => {
    if (searchQuery) {
      setIsLoading(true);
      fetchResponse(searchQuery, currentPage)
        .then(({ data }) => {
          setListSearch(prevData => [...prevData, ...data.hits]);
          setIsLoading(false);
        }).catch(({ config }) => {
          setIsLoading(false);
          setError(getNormalizeErrorMsg(config.url));
        });
      return;
    }
  }, [searchQuery, currentPage]);

  const onIncrementPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  }

  return (
    <div className="App">
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery
        onIncrementPage={onIncrementPage}
        error={error}
        isLoading={isLoading}
        listSearch={listSearch}
      />
    </div>
  );
};
