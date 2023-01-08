import React from "react";
import "./Modal.css";
import { useDispatch, useSelector } from "react-redux";
import close from "../../Assets/X (1).png";
import design from "../../Assets/icn_categories suggestion_design_selected.png";
import development from "../../Assets/icn_categories suggestion_code.png";
import business from "../../Assets/icn_categories suggestion_business.png";
import Music from "../../Assets/icn_categories suggestion_music.png";
import finance from "../../Assets/icn_categories suggestion_finance.png";
import health from "../../Assets/icn_categories suggestion_fitness.png";
import Itandsoftware from "../../Assets/icn_categories suggestion_IT.png";
import Marketing from "../../Assets/icn_categories suggestion_marketing.png";
import Lifestyle from "../../Assets/icn_categories suggestion_lifestyle.png";
import Photography from "../../Assets/icn_categories suggestion_photography.png";

import axios from "axios";
import { Navigate, useNavigate } from "react-router";

function Modal(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("token"));
  console.log("tokenfrom da", token);

  return (
    <div
      className="deletemodal"
      style={{ display: props.modal ? "flex" : "none" }}
    >
      <div className="deleteoverlay">
        <div className="deletemodal-content">
          <div className="deletemodal-inner-content">
            <div className="SearchFilterText-Close-div">
              <div></div>
              <span className="SearchFilterText">Search Filter</span>
              <img
                src={close}
                style={{ width: "26px", height: "26px", cursor: "pointer" }}
                onClick={() => {
                  props.setModal(false);
                }}
              ></img>
            </div>
            <div className="SearchFilterMin-div">
              <span className="TopSearchText" style={{ color: "black" }}>
                Search from Categories
              </span>
              <div className="SearchFilterCategory-div">
                <div className="CatNameIcon-Div">
                  <img src={design}></img>
                  Design
                </div>
                <div className="CatNameIcon-Div">
                  <img src={development}></img>
                  Development
                </div>
                <div className="CatNameIcon-Div">
                  <img src={business}></img>
                  Business
                </div>
                <div className="CatNameIcon-Div">
                  <img src={Music}></img>
                  Music
                </div>
                <div className="CatNameIcon-Div">
                  <img src={finance}></img>
                  Finance
                </div>
                <div className="CatNameIcon-Div">
                  <img src={health}></img>
                  Health & Fitness
                </div>
                <div className="CatNameIcon-Div">
                  <img src={Itandsoftware}></img>
                  IT & Software
                </div>
                <div className="CatNameIcon-Div">
                  <img src={Marketing}></img>
                  Marketing
                </div>
                <div className="CatNameIcon-Div">
                  <img src={Lifestyle}></img>
                  Lifestyle
                </div>
                <div className="CatNameIcon-Div">
                  <img src={Photography}></img>
                  Photograohy
                </div>
              </div>
              <span className="TopSearchText" style={{ color: "black" }}>
                Duration
              </span>
              <div className="SearchFilterDurationMain-div">
                <div className="SearchFilterDurationContainer">
                  5/10 Chapters
                </div>
                <div className="SearchFilterDurationContainer">
                  10/20 Chapters
                </div>
                <div className="SearchFilterDurationContainer">
                  20/30 Chapters
                </div>
                <div className="SearchFilterDurationContainer">
                  30/40 Chapters
                </div>
                <div className="SearchFilterDurationContainer">50+Chapters</div>
              </div>
            </div>
            <div className="ApplyCancel-div">
              <div className="ApplyFilterButton">Apply Filter</div>
              <div className="ClearAllButton">Clear All</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
