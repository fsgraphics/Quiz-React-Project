/* eslint-disable no-undef */
import React from "react";
import successImage from "../assets/images/success.png";
import classes from "../components/Styles/Summary.module.css";
// import useFetch from "./../hooks/useFetch";
import usePexelsapi from "../hooks/usePexelsapi";

const Summary = ({ score, noq }) => {

  const getKeyword = () => {
    if((score /(noq * 5)) * 100 < 50) {
      return "failed";
    } else if((score /(noq * 5)) * 100 < 75) {
      return "good";
    } else if((score /(noq * 5)) * 100 < 100){
      return "very good";
    } else{
      return "excellent";
    }
  }

  const {loading, currentPhotos} = usePexelsapi();
  // const imges = currentPhotos ? currentPhotos?.src.medium : successImage;
 
  // const { loading, error, result } = useFetch(`https://api.pexels.com/v1/search?query=${getKeyword()}&per_page=1`, "GET", {Authorization:Oq35bjwHJJWsD3oVLXKDMfzHO8hyxfVoLBEoe8VfR6UwO2yXrJnSR21D});
  // const image = result ? result?.photos[0].src.medium : successImage;
  // console.log("Fazle Hasan========>")
  
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      {loading && <div className={classes.badge} >Loading your badge.........</div>}
      {/* {error && <div className={classes.badge} >An Eror occurred!</div>} */}
      {!loading && (<div className={classes.badge}>
        <img src={currentPhotos} alt="Success" style={{width:"100px",
        height: "68px"}}  />
      </div>)}
    </div>
  );
};

export default Summary;
