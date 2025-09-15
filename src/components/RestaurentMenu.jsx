import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { ITEM_URL, API_RESID } from "./utils/constants";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await fetch(API_RESID + resId);
      const json = await data.json();
      setResInfo(json.data);
    };
    fetchMenu();
  }, [resId]);

  /* const fetchMenu = async () => {
    const data = await fetch(API_RESID + resId);
    const json = await data.json();
    console.log(json.data.cards[2].card.card.info);
    setResInfo(json.data);
  }; */

  if (!resInfo) return <Shimmer />;

  // ✅ Restaurant info
  const restaurantCard = resInfo?.cards?.find((c) => c?.card?.card?.info);
  const { name, avgRatingString, costForTwoMessage, totalRatingsString } =
    restaurantCard?.card?.card?.info ?? {};

  // ✅ Menu section
  const regularCards = resInfo?.cards?.find(
    (c) => c?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const recommendedCard = regularCards?.find((c) => c?.card?.card?.itemCards)
    ?.card?.card;

  const { title, itemCards } = recommendedCard ?? {};

  console.log(itemCards);

  return (
    <div className="container-box">
      <h1>{name}</h1>
      <p>
        Rating {avgRatingString} ({totalRatingsString}) | {costForTwoMessage}
      </p>
      <h3>
        {title} {`(${itemCards?.length})`}
      </h3>
      <div className="recommended-section">
        {itemCards.map((item) => (
          <div
            className="item-box d-flex justify-content-between"
            key={item?.card?.info?.id}>
            <div className="item-info">
              <h4>{item?.card?.info?.name}</h4>
              <p>
                ₹{" "}
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </p>
              {/* <p>Rating 4.2 (13)</p> */}
              <p>
                {item?.card?.info?.ratings?.aggregatedRating?.rating
                  ? `Rating ${item?.card?.info?.ratings?.aggregatedRating?.rating} (${item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})`
                  : ""}
              </p>
              <p>{item?.card?.info?.description}</p>
            </div>
            <div className="item-image">
              <img src={ITEM_URL + item?.card?.info?.imageId} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurentMenu;
