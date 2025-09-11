import { RESTAURENT_CDN } from "./utils/constants";

const RestaurentCard = (props) => {
  //console.log(props);
  const { resData } = props;
  const { name, avgRating, deliveryTime, cuisines, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="restaurent-card">
      <img src={RESTAURENT_CDN + cloudinaryImageId} />

      <div>
        <h3>{name}</h3>
        <p>
          <span>{avgRating}</span> <span>{deliveryTime}</span>
        </p>
        <p className="m-0">{cuisines}</p>
      </div>
    </div>
  );
};

export default RestaurentCard;
