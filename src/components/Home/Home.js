import React from "react";
import banner from "../../images/burger-promo.png";
const Home = () => {
  return (
    <div className="bg-home">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
        <div className="left mt-10 md:mt-0 pb-10 md:pb-0 ">
          <h3 className="text-subTitle font-bold text-2xl lg:text-3xl">
            Best In Town
          </h3>
          <h1 className="text-title text-4xl lg:text-5xl font-extrabold">
            ENJOY OUR <br /> CHICKEN{" "}
            <span className="text-subTitle">BURGER</span> FAST FOOD
          </h1>
          <p className="my-4 text-subTitle">Bacon-Potatos-Bbq Sauce</p>
          <button className="rounded-xl py-4 px-10 bg-subTitle text-white font-semibold">
            Order Now
          </button>
        </div>
        <div className="right">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
