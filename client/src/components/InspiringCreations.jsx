import React, { useEffect, useState } from "react";

const InspiringCreations = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Dummy data or fetch from your backend
    setImages([
      { url: "https://via.placeholder.com/300x200?text=AI+Image+1" },
      { url: "https://via.placeholder.com/300x200?text=AI+Image+2" },
      { url: "https://via.placeholder.com/300x200?text=AI+Image+3" },
    ]);
    // Real API call example:
    // fetch("/api/image/all")
    //   .then(res => res.json())
    //   .then(data => setImages(data.images));
  }, []);

  return (
    <div className="my-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Inspiring Creations</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {images.length === 0 && (
          <p className="col-span-full text-center text-gray-500">No images yet. Start creating!</p>
        )}
        {images.map((img, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow hover:scale-105 transition">
            <img src={img.url} alt="Inspiring Creation" className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InspiringCreations;