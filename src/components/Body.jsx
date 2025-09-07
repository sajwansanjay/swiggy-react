import RestaurentCard from "./RestaurentCard";
import resList from "./utils/mockData";

const Body = () => {
  return (
    <>
      <div>
        <h2 className="text-left">
          Restaurants with online food delivery in Delhi
        </h2>
      </div>
      <div className="res-card-container">
        {resList.map((restaurent) => (
          <RestaurentCard resData={restaurent} />
        ))}
      </div>
    </>
  );
};

export default Body;
