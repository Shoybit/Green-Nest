import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import Slider from "../Components/Slider";
import Card from "../Components/Card";
import PlantsTips from "../Components/PlantsTips";
import GreenExperts from "../Components/GreenExperts";
import EcoDecorIdeas from "../Components/EcoDecorIdeas";
import PlantOfTheWeek from "../Components/PlantOfTheWeek";
import GardeningTip from "../Components/GardeningTip";
import PageLoader from "../Components/PageLoader";
import EcoDeco from "../Components/EcoDeco";

const Home = () => {
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Home | Green-Nest";
  }, []);

  const topRatedPlants =
    data && Array.isArray(data)
      ? data.filter((item) => item && item.rating >= 4.8)
      : [];

  console.log("Top rated plants:", topRatedPlants);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [data]);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className=" w-11/12 mx-auto min-h-screen bg-green-50">
      <Slider />

      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Top Rated Plants
          </h1>
        </div>

        {data && Array.isArray(data) ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
            {topRatedPlants.map((plant) =>
              plant && plant.image ? <Card key={plant.id} item={plant} /> : null
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No plants data available</p>
          </div>
        )}

        <div className="text-center mt-12 ">
          <Link to={"/plants"}>
            <button className="text-1xl bg-green-600 text-white rounded-2xl w-[100px] h-[50px] hover:bg-green-700 cursor-pointer">
              All Plants
            </button>
          </Link>
        </div>
        <div className="border-b-2 mt-5 text-gray-400"></div>
      </section>
      <PlantsTips></PlantsTips>
      <GreenExperts></GreenExperts>
      <EcoDecorIdeas></EcoDecorIdeas>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlantOfTheWeek></PlantOfTheWeek>
        <GardeningTip></GardeningTip>
      </div>
      <EcoDeco></EcoDeco>
    </div>
  );
};

export default Home;
