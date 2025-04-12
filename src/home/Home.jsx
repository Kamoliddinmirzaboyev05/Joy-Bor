import React from "react";
import "./Home.css";
import { CiSearch } from "react-icons/ci";
function Home() {
  return (
    <div className="homePage">
      <div className="hero">
        <div className="container">
          <div className="heroText">
            <h1>Search, explore and book your room!</h1>
            <form action="#">
              <select name="city" id="city">
                <option value="tashkent">Tashkent</option>
                <option value="tashkent">Tashkent</option>
                <option value="tashkent">Tashkent</option>
                <option value="tashkent">Tashkent</option>
                <option value="tashkent">Tashkent</option>
                <option value="tashkent">Tashkent</option>
                <option value="tashkent">Tashkent</option>
              </select>
              <input type="text" placeholder="Qidirish..." />
              <CiSearch />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
