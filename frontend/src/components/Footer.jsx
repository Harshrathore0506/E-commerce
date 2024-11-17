import React from "react";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 p-10  rounded-2xl my-10 mt-40 text-sm bg-black">
        <div>
          <h1 className="text-white text-2xl">Trendify</h1>
          <p className="w-full md:w-2/3 text-white">
            Experience ultimate comfort with our memory foam slippers. Designed
            to mold to your feet for personalized support.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-white">COMPANY</p>
          <ul className="flex flex-col gap-1 text-white">
            <li>Home</li>
            <li>About US</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-white">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-white">
            <li>+916265476456</li>
            <li>hr8775587@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Trendify.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
