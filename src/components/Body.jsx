import RestaurentCard from "./RestaurentCard";
//import resList from "./utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "/api/dapi/restaurants/list/v5?lat=28.5900637&lng=77.08878279999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  };

  return listOfRestaurents === 0 ? (
    <Shimmer />
  ) : (
    <div id="bodyMain">
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="text-left">
          Restaurants with online food delivery in Delhi
        </h2>
        <div className="d-flex">
          <div className="search d-flex">
            <input
              type="text"
              id="search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              onClick={() =>
                setFilteredRestaurent(
                  listOfRestaurents.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  )
                )
              }>
              Search
            </button>
          </div>
          <button
            className="filter-rating"
            onClick={() => {
              const topRatedRestaurent = listOfRestaurents.filter(
                (res) => res?.info?.avgRating > 4.3
              );
              setFilteredRestaurent(topRatedRestaurent);
            }}>
            Top Rated Restaurent
          </button>
        </div>
      </div>
      <div className="res-card-container">
        {filteredRestaurent.map((restaurent) => (
          <Link
            to={"/restaurents/" + restaurent.info.id}
            key={restaurent.info.id}
            className="restaurent-card">
            <RestaurentCard resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
