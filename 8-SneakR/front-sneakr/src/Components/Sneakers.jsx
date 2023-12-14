import React, { useState, useEffect } from "react";
import axios from "axios";

const Sneakers = () => {
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/products?populate=*");
        const responseData = response.data.data;

        if (Array.isArray(responseData)) {
          const sneakersWithImages = responseData.map((sneaker, index) => ({
            ...sneaker,
            image: { url: `http://example.com/image${index + 1}.jpg` },
            showDescription: false,
          }));

          setSneakers(sneakersWithImages);
        } else {
          console.error("Invalid data format:", responseData);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => setSearchTerm(event.target.value);

  const toggleDescription = (sneakerIndex) => {
    setSneakers((prevSneakers) =>
      prevSneakers.map((sneaker, index) =>
        index === sneakerIndex ? { ...sneaker, showDescription: !sneaker.showDescription } : sneaker
      )
    );
  };

  const filteredSneakers = sneakers.filter((sneaker) =>
    sneaker.attributes.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4 pt-20">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search any sneakers..."
          className="p-2 md:p-3 border rounded-md w-full focus:outline-none focus:border-black"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {filteredSneakers.map((sneaker, index) => (
          <div key={sneaker.id} className="bg-white p-4 rounded-md shadow-md">
            <div className="flex justify-between">
              <div>
                <h2 className="text-lg font-bold">{sneaker.attributes.Name}</h2>
                <p className="text-sm text-gray-500">{sneaker.attributes.Brand}</p>
                <p className="text-sm text-gray-500">${sneaker.attributes.Price}</p>
              </div>
              <button
                onClick={() => toggleDescription(index)}
                className="font-bold"
              >
                Description ↩︎  
              </button> 
            </div>
            {sneaker.image && sneaker.image.url ? (
              <img src={sneaker.attributes.Image.data[0].attributes.name} alt={sneaker.name} />
            ) : (
              <p>No Image Available</p>
            )}
            <div className="p-4">
              {sneaker.showDescription && (
                <p className="text-sm text-gray-700">{sneaker.attributes.Description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sneakers;
