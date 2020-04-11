import React from "react";
import { Link } from "react-router-dom";
import "./home-page.styles.scss";

export const homePage = () => (
  <div className="home-page">
    <ul>
      <Link to="/play">
        <li>Play</li>
      </Link>
    </ul>
  </div>
);
