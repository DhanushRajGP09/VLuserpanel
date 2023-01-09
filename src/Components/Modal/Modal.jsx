import React from "react";
import "./Modal.css";
import { useDispatch, useSelector } from "react-redux";
import close from "../../Assets/X (1).png";
import design from "../../Assets/icn_categories suggestion_design.png";
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
import {
  addDurationRequest,
  addToFilter,
  addcategories,
  deleteFromFilter,
  deletefromCategories,
  deletefromDurationRequest,
  getCategories,
  getDurationRequestlist,
  getFilter,
} from "../../features/Courseslice";

function Modal(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getcategories = useSelector(getCategories);
  console.log("categories", getcategories);

  const getduration = useSelector(getDurationRequestlist);
  console.log("duration", getduration);
  const getfilter = useSelector(getFilter);
  console.log("filte", getfilter);

  const token = JSON.parse(localStorage.getItem("token"));
  console.log("tokenfrom da", token);

  function handlecategories(id, data) {
    if (document.getElementById(id).style.backgroundColor === "white") {
      document.getElementById(id).style.backgroundColor = "#FCBE4B";
      dispatch(addcategories(data));
    } else if ((document.getElementById(id).style.backgroundColor = "white")) {
      document.getElementById(id).style.backgroundColor = "white";
      dispatch(deletefromCategories(data));
    }
  }

  function handleDuration(id, start, end) {
    if (document.getElementById(id).style.backgroundColor === "white") {
      document.getElementById(id).style.backgroundColor = "#FCBE4B";
      dispatch(
        addDurationRequest({
          startDuration: start,
          endDuration: end,
        })
      );
    } else if ((document.getElementById(id).style.backgroundColor = "white")) {
      document.getElementById(id).style.backgroundColor = "white";
      dispatch(
        deletefromDurationRequest({
          startDuration: start,
          endDuration: end,
        })
      );
    }
  }

  return (
    <div>
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
                  <div
                    className="CatNameIcon-Div"
                    id="design"
                    onClick={() => {
                      handlecategories("design", 2);
                    }}
                  >
                    <img src={design}></img>
                    Design
                  </div>
                  <div
                    className="CatNameIcon-Div"
                    id="development"
                    onClick={() => {
                      handlecategories("development", 1);
                    }}
                  >
                    <img src={development}></img>
                    Development
                  </div>
                  <div
                    className="CatNameIcon-Div"
                    id="Business"
                    onClick={() => {
                      handlecategories("Business", 11);
                    }}
                  >
                    <img src={business}></img>
                    Business
                  </div>
                  <div
                    className="CatNameIcon-Div"
                    id="Music"
                    onClick={() => {
                      handlecategories("Music", 9);
                    }}
                  >
                    <img src={Music}></img>
                    Music
                  </div>
                  <div
                    className="CatNameIcon-Div"
                    id="Finance"
                    onClick={() => {
                      handlecategories("Finance", 3);
                    }}
                  >
                    <img src={finance}></img>
                    Finance
                  </div>
                  <div
                    className="CatNameIcon-Div"
                    id="health&fitness"
                    onClick={() => {
                      handlecategories("health&fitness", 6);
                    }}
                  >
                    <img src={health}></img>
                    Health & Fitness
                  </div>
                  <div
                    className="CatNameIcon-Div"
                    id="IT&software"
                    onClick={() => {
                      handlecategories("IT&software", 5);
                    }}
                  >
                    <img src={Itandsoftware}></img>
                    IT & Software
                  </div>
                  <div
                    className="CatNameIcon-Div"
                    id="Marketing"
                    onClick={() => {
                      handlecategories("Marketing", 4);
                    }}
                  >
                    <img src={Marketing}></img>
                    Marketing
                  </div>
                  <div
                    className="CatNameIcon-Div"
                    id="Lifestyle"
                    onClick={() => {
                      handlecategories("Lifestyle", 10);
                    }}
                  >
                    <img src={Lifestyle}></img>
                    Lifestyle
                  </div>
                  <div
                    className="CatNameIcon-Div"
                    id="Photography"
                    onClick={() => {
                      handlecategories("Photography", 8);
                    }}
                  >
                    <img src={Photography}></img>
                    Photography
                  </div>
                </div>
                <span className="TopSearchText" style={{ color: "black" }}>
                  Duration
                </span>
                <div className="SearchFilterDurationMain-div">
                  <div
                    className="SearchFilterDurationContainer"
                    id="3/10"
                    onClick={() => {
                      handleDuration("3/10", 3, 10);
                    }}
                  >
                    3/10 Chapters
                  </div>
                  <div
                    className="SearchFilterDurationContainer"
                    id="10/20"
                    onClick={() => {
                      handleDuration("10/20", 10, 20);
                    }}
                  >
                    10/20 Chapters
                  </div>
                  <div
                    className="SearchFilterDurationContainer"
                    id="20/30"
                    onClick={() => {
                      handleDuration("20/30", 20, 30);
                    }}
                  >
                    20/30 Chapters
                  </div>
                  <div
                    className="SearchFilterDurationContainer"
                    id="30/40"
                    onClick={() => {
                      handleDuration("30/40", 30, 40);
                    }}
                  >
                    30/40 Chapters
                  </div>
                  <div
                    className="SearchFilterDurationContainer"
                    id="50"
                    onClick={() => {
                      handleDuration("50", 50, 100);
                    }}
                  >
                    50+Chapters
                  </div>
                </div>
              </div>
              <div className="ApplyCancel-div">
                <div
                  className="ApplyFilterButton"
                  onClick={() => {
                    dispatch(
                      addToFilter({
                        categories: getcategories,
                        durationRequestList: getduration,
                      })
                    );
                    props.setModal(false);
                  }}
                >
                  Apply Filter
                </div>
                <div
                  className="ClearAllButton"
                  onClick={() => {
                    dispatch(deleteFromFilter());
                    props.setModal(false);
                  }}
                >
                  Clear All
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
