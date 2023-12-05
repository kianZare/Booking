import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useHotels } from "../context/HotelsProvider";
import { useEffect } from "react";

function SingleHotel() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getHotel, isLoadingCurrentHotel, currentHotel } = useHotels();
  useEffect(() => {
    getHotel(id);
  }, [id]);

  if (isLoadingCurrentHotel || !currentHotel) return <Loader />;

  return (
    <div className="room">
      <div className="roomDetail">
        <h2>{currentHotel.name}</h2>
        <div>
          {currentHotel.number_of_reviews} reviews &bull;{" "}
          {currentHotel.smart_location}
        </div>
        <img src={currentHotel.xl_picture_url} alt={currentHotel.name} />
        <p className="priceHotele">
          £ {currentHotel.price} &nbsp;
          <span>per night</span>
        </p>

        <p className="hoteleDescription">{currentHotel.description}</p>
        <div className="singlePageBtns">
          <button className="btn1 book">Book</button>
          <button
            className="btn1 back"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleHotel;
