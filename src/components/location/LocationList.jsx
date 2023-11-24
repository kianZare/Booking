import { Link } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
import { useHotels } from "../context/HotelsProvider";

function LocationList() {
  // const { data, isLoading } = useFetch("http://localhost:5000/hotels", "");
  const {isLoading, hotels } = useHotels()


  if (isLoading) <p>loading ...</p>;

  return (
    <div className="nearbyLocation">
      <h2>Nearby Locations</h2>
        <div className="locationList">
          {hotels.map((item) => {
            return (
              <Link
              key={item.id}
              to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
            >   
              <div className="itemWrap" key={item.id}>
                <div className="locationItem">
                  <img src={item.picture_url.url} alt={item.name} />
                  <div className="locationItemDesc">
                    <p className="location">{item.smart_location}</p>
                    <p className="name">{item.name}</p>
                    <p className="price">
                      £ {item.price} &nbsp;
                      <span>night</span>
                    </p>
                  </div>
                </div>
              </div>
          </Link>
            );
          })}
        </div>
    </div>
  );
}

export default LocationList;
