import React, { useState } from "react";
import { ReactReader } from "react-reader";

export default function EpubReader({ url }) {
  const [location, setLocation] = useState(null);
  const [page, setPage] = useState(1);
  const [rendition, setRendition] = useState(null);

  const nextPage = () => {
    if (rendition) {
      rendition.next()
      setPage((prev)=>prev+1)
    };
  };

  const prevPage = () => {
    if (rendition) {rendition.prev()
      setPage((prev)=>prev-1)
    };
  };

  return (
    <div className="flex flex-col h-[100%]">
      <div className="mb-2 text-sm text-right text-blue">
        Страница: {page}
      </div>

      

      <ReactReader
       className="z-0"
        url={url}
        location={location}
        getRendition={(rend) => {
          setRendition(rend);
          rend.themes.default({ body: { "font-family": "Inter, sans-serif" } });


        }}
        locationChanged={(loc) => setLocation(loc)}
      />
      <div className="flex gap-4 mb-2 justify-end py-6">
        <button onClick={prevPage} className="px-4 py-2 bg-accent-1 text-beige-1 rounded">Назад</button>
        <button onClick={nextPage} className="px-4 py-2 bg-accent-1 text-beige-1 rounded">Вперед</button>
      </div>
    </div>
  );
}