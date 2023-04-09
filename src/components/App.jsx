import { useState } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export const App = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = ({ searchQuery }) => {
    setSearchQuery(searchQuery);
  }

  return (
    <div className="App">
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery searchQuery={searchQuery.trim()} />
    </div>
  );
};
