import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Card from "../Components/Card";
import PageLoader from "../Components/PageLoader";

const Plants = () => {
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([]);

  useEffect(() => {
    document.title = "Plants | Green-Nest";
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [data]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setFilteredPlants(
        data.filter((plant) =>
          plant.plantName.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, data]);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen bg-[#f0fdf4] py-8">
      <div className="w-11/12 mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            All Plants Collection
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our complete collection of beautiful plants
          </p>
        </div>
        {/* Search Bar and Total Count */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-8 gap-4">
          <input
            type="text"
            placeholder="Search plants..."
            className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/5 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="text-xl font-semibold">
            Total Plants: ({filteredPlants.length})
          </div>
        </div>

        {/* Plant Grid */}
        {filteredPlants && filteredPlants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPlants.map((item) =>
              item && item.image ? (
                <Card key={item.plantId} item={item} />
              ) : null
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No plants found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Plants;
