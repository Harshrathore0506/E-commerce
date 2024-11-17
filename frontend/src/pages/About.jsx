import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 ">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md-w-2/4 text-gray-600">
          <p>
            Welcome to Trendify, your one-stop destination for fashion. Our
            mission is to provide high-quality, affordable products that cater
            to your needs and preferences.
          </p>
          <p>
            At Trendify, we believe in more than just shopping — we believe in
            building connections. That's why we are committed to delivering a
            seamless shopping experience, exceptional customer service, and
            products that inspire joy and satisfaction.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            We are more than just a store. we are a community. Whether you're
            here for a quick buy or a shopping spree, our goal is to make every
            visit memorable.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 ">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-2xl bg-black">
          <b className="text-white">Quality Assurance:</b>
          <p className="text-white">
            Each item is carefully inspected to ensure it meets our high
            standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-2xl bg-black">
          <b className="text-white">Secure Shopping:</b>
          <p className="text-white">
            Your privacy and security are our top priorities, with encrypted
            transactions and reliable payment gateways.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-2xl bg-black">
          <b className="text-white">Fast Delivery:</b>
          <p className="text-white">
            Enjoy swift shipping and hassle-free returns on every purchase.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
