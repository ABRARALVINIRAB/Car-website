import React from "react";
import bgImage from "../../images/Header.png";
import "./Header.css";

const Header = () => {
  return (
    <div className=" lg:h-[564px] sm:h-[900px]  w-100  header-bg ')] ">
      <h1 className=" md:pt-40 sm:pt-12 ">
        Say hello to your next <br />
        awesome vehicle
      </h1>
      <p className=" mt-3">
        Featuring Used, Wholesale and Salvage Cars, Trucks <br />& SUVs for Sale
      </p>

      <div className="header-footer mt-[148px] border-2 md:w-[945px] md:h-[82px]  mx-auto sm:w-[414px] sm:h[653px] lg:grid lg:grid-cols-6 bg-[#FFFFFF] md:grid md:grid-cols-6 sm:w[414px] sm:flex sm:flex-col ">
        <div className="border-r-[#EDE8E9] border-r-2 h-[32px] ">
          <div>
            <h4 className="type ml-2 mt-4">Type</h4>
          </div>
          <div>
            <select className="used-car new p-1 ml-2" name="" id="">
              <option className="" value="Used Car">
                Used Car &nbsp; &nbsp;{" "}
              </option>
            </select>
          </div>
        </div>
        <div className="border-r-[#EDE8E9] border-r-2 h-[32px] ">
          <div>
            <h4 className="type ml-2 mt-4">Make</h4>
          </div>
          <div>
            <select className="used-car new p-1 ml-2" name="" id="">
              <option className="" value="Used Car">
                Infinity &nbsp; &nbsp;{" "}
              </option>
            </select>
          </div>
        </div>
        <div className="border-r-[#EDE8E9] border-r-2 h-[32px] ">
          <div>
            <h4 className="type ml-2 mt-4">Year</h4>
          </div>
          <div>
            <select className="used-car new p-1 ml-2" name="" id="">
              <option className="" value="Used Car">
                Year &nbsp; &nbsp;{" "}
              </option>
            </select>
          </div>
        </div>
        <div className="border-r-[#EDE8E9] border-r-2 h-[32px] ">
          <div>
            <h4 className="type ml-2 mt-4">Model</h4>
          </div>
          <div>
            <select className="used-car new p-1 ml-2" name="" id="">
              <option className="" value="Used Car">
                Model &nbsp; &nbsp;{" "}
              </option>
            </select>
          </div>
        </div>
        <div className="new border-r-[#EDE8E9] border-r-2 h-[32px]">
          <div>
            <h4 className="type ml-2 mt-4">Price</h4>
          </div>
          <div>
            <select className="used-car p-1 ml-2 new" name="" id="">
              <option className="" value="Used Car">
                Price &nbsp; &nbsp;{" "}
              </option>
            </select>
          </div>
        </div>
        <div className=" ">
          <div>
            <button className="search new bg-[#7963F0] border-2 p-1 h-[2.3rem] w-[7.8rem] mt-[1.6rem]  rounded-lg sm:w-full">
              {" "}
              <i class="fas fa-search"></i> Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
