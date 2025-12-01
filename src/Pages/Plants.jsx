import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Components/Card';
import PageLoader from '../Components/PageLoader';

const Plants = () => {
  const data = useLoaderData();
  console.log(data);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    document.title = "Plants | Green-Nest";
  }, []);
  

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [data]);

  if (loading) {
    return <PageLoader />;
  }

  

  return (
    <div className="min-h-screen bg-[#f0fdf4] py-8">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            All Plants Collection
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our complete collection of beautiful plants
          </p>
        </div>

        <div className="mt-4 text-xl font-semibold mb-12">
          Total Plants: ({data?.length || 0})
        </div>

        {data && Array.isArray(data) ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {data.map((item) =>
              item && item.image ? <Card key={item.plantId} item={item} /> : null
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No plants data available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Plants;
