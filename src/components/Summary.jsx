import { useMemo } from "react";
import successImage from "../assets/images/success.png";
import classes from "../components/Styles/Summary.module.css";
import useApiCurated from "../hooks/useApiCurated";
// import useFetch from "./../hooks/useFetch";
// import usePexelsapi from "../hooks/usePexelsapi";

const min = 0;
const max = 14;
const random = parseInt(Math.random() * (+max - +min) + +min);
console.log(random);

// eslint-disable-next-line react/prop-types
const Summary = ({ score, noq }) => {
  const getKeyword = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [noq, score]);

  const url = `https://api.pexels.com/v1/search?query=${getKeyword}&per_page`;

  const { loading, error, currentPhotos } = useApiCurated(url);

  const image = currentPhotos
    ? currentPhotos?.photos[random].src.medium
    : successImage;

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      {loading && <div className={classes.badge}>Loading your badge...</div>}

      {error && <div className={classes.badge}>An error occured!</div>}

      {!loading && !error && (
        <div className={classes.badge}>
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  );

  // const { loading, curatedPhotos } = usePexelsapi();
  // currentPhotos.map((value, index) => console.log(value));
  // return (
  //   // <div className={classes.summary}>
  //   //   <div className={classes.point}>
  //   //     <p className={classes.score}>
  //   //       Your score is <br />
  //   //       {score} out of {noq * 5}
  //   //     </p>
  //   //   </div>

  //   //   {loading && (
  //   //     <div className={classes.badge}>Loading your badge.........</div>
  //   //   )}
  //   //   {curatedPhotos && curatedPhotos.length > 0 ? (
  //   //     <div className={classes.badge}>
  //   //       {curatedPhotos.map((data) => (
  //   //         <div key={data.id}>
  //   //           <img
  //   //             src={data.src.medium}
  //   //             alt={data.alt}
  //   //             style={{ width: "40px", height: "300px" }}
  //   //           />
  //   //         </div>
  //   //       ))}
  //   //     </div>
  //   //   ) : (
  //   //     <div className={classes.badge}>An Eror occurred!</div>
  //   //   )}
  //   // </div>
  //   <>
  //     <h1>Bangladesh</h1>
  //   </>
  // );
};

export default Summary;
