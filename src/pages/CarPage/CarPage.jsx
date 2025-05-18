import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarById } from "../../redux/operations";
import { clearSelectedCar } from "../../redux/slice";
import { selectSelectedCar, selectCarsLoading } from "../../redux/selectors";
import styles from "./CarPage.module.css";

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

  const shortId = car.id ? String(car.id).slice(0, 4) : "";

  const addressParts = car.address?.split(",").map((part) => part.trim());
  const city = addressParts?.[addressParts.length - 2] || "";
  const country = addressParts?.[addressParts.length - 1] || "";

  return (
    <div className={styles.pageContainer}>
      <div className={styles.imgAndForm}>
        <img src={car.img} alt={car.brand} className={styles.carImage} />
        <div className={styles.bookingContainer}>
          <h3 className={styles.bookingTitle}>Book your car now</h3>
          <p className={styles.bookingSubtitle}>
            Stay connected! We are always ready to help you.
          </p>
          <form className={styles.bookingForm}>
            <input
              type="text"
              placeholder="Name*"
              required
              className={styles.formInput}
            />
            <input
              type="email"
              placeholder="Email*"
              required
              className={styles.formInput}
            />
            <input
              type="date"
              placeholder="Booking date"
              className={styles.formInput}
            />
            <textarea
              placeholder="Comment"
              className={styles.formTextarea}
            ></textarea>
            <div className={styles.btnContainer}>
              <button type="submit" className={styles.submitButton}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.carDetails}>
        <h2 className={styles.carTitle}>
          {car.brand}{" "}
          <span className={styles.modelYear}>
            {car.model}, {car.year}
          </span>{" "}
          <span className={styles.carId}>Id: {shortId}</span>
        </h2>
        <p className={styles.carSubtitle}>
          {city}, {country} Mileage: {car.mileage.toLocaleString()} km
        </p>
        <p className={styles.carPrice}>${car.rentalPrice}</p>
        <p className={styles.carDescription}>{car.description}</p>

        <h3 className={styles.sectionTitle}>Rental Conditions:</h3>
        <ul className={styles.conditionsList}>
          {car.rentalConditions.map((cond, index) => (
            <li key={index} className={styles.conditionItem}>
              {cond}
            </li>
          ))}
        </ul>

        <h3 className={styles.sectionTitle}>Car Specifications:</h3>
        <ul className={styles.specsList}>
          <li className={styles.specItem}>Year: {car.year}</li>
          <li className={styles.specItem}>Type: {car.type}</li>
          <li className={styles.specItem}>
            Fuel Consumption: {car.fuelConsumption}
          </li>
          <li className={styles.specItem}>Engine Size: {car.engineSize}</li>
        </ul>

        <h3 className={styles.sectionTitle}>
          Accessories and functionalities:
        </h3>
        <ul className={styles.accessoriesList}>
          {car.accessories.map((item, i) => (
            <li key={i} className={styles.accessoryItem}>
              {item}
            </li>
          ))}
          {car.functionalities.map((item, i) => (
            <li key={i} className={styles.accessoryItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarPage;
