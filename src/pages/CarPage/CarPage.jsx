import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarById } from "../../redux/operations";
import { clearSelectedCar } from "../../redux/slice";
import { selectSelectedCar, selectCarsLoading } from "../../redux/selectors";

const CarPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectSelectedCar);
  const isLoading = useSelector(selectCarsLoading);

  useEffect(() => {
    dispatch(fetchCarById(id));
    return () => {
      dispatch(clearSelectedCar());
    };
  }, [dispatch, id]);

  if (isLoading || !car) return <p>Loading car details...</p>;

  return (
    <div className="car-page-container">
      <div className="top-section">
        <img src={car.img} alt={car.brand} className="car-image" />
        <div className="car-info">
          <h2>
            {car.brand}{" "}
            <span>
              {car.model}, {car.year}
            </span>{" "}
            <span className="car-id">Id: {car.id}</span>
          </h2>
          <p>
            {car.address} | Mileage: {car.mileage.toLocaleString()} km
          </p>
          <p className="price">${car.rentalPrice}</p>
          <p className="description">{car.description}</p>

          <h3>Rental Conditions:</h3>
          <ul>
            {car.rentalConditions.map((cond, index) => (
              <li key={index}>✔️ {cond}</li>
            ))}
          </ul>

          <h3>Car Specifications:</h3>
          <ul>
            <li>Year: {car.year}</li>
            <li>Type: {car.type}</li>
            <li>Fuel Consumption: {car.fuelConsumption}</li>
            <li>Engine Size: {car.engineSize}</li>
          </ul>

          <h3>Accessories and functionalities:</h3>
          <ul>
            {car.accessories.map((item, i) => (
              <li key={i}>✔️ {item}</li>
            ))}
            {car.functionalities.map((item, i) => (
              <li key={i}>✔️ {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="booking-form">
        <h3>Book your car now</h3>
        <p>Stay connected! We are always ready to help you.</p>
        <form>
          <input type="text" placeholder="Name*" required />
          <input type="email" placeholder="Email*" required />
          <input type="date" placeholder="Booking date" />
          <textarea placeholder="Comment"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default CarPage;
