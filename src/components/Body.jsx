import RestaurentCard from "./RestaurentCard";
//import resList from "./utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [topRatedRes, setTopRatedRes] = useState([]);
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5900637&lng=77.08878279999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setTopRatedRes(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(json);
  };

  return (
    <div id="bodyMain">
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="text-left">
          Restaurants with online food delivery in Delhi
        </h2>
        <button
          className="filter-rating"
          onClick={() => {
            const filteredList = topRatedRes.filter(
              (res) => res.avgRating > 4.3
            );
            setTopRatedRes(filteredList);
          }}>
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-card-container">
        {topRatedRes.map((restaurent) => (
          <RestaurentCard key={restaurent.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
