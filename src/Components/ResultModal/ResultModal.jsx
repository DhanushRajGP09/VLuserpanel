import React from "react";
import "./ResultModal.css";
import { useNavigate } from "react-router";
import { getQuestionAnswer } from "../../features/Courseslice";
import { useSelector } from "react-redux";
import axios from "axios";

export default function ResultModal(props) {
  const navigate = useNavigate();

  const getthereduxquestion = useSelector(getQuestionAnswer);
  console.log("getthe", getthereduxquestion);

  const token = JSON.parse(localStorage.getItem("token"));

  const localID = JSON.parse(localStorage.getItem("assignmentID"));
  console.log("localid", localID);

  const handleSubmit = () => {
    console.log("entered");
    axios({
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        assignmentId: localID,
        questionAnswers: getthereduxquestion,
      },
      url: `https://app-virtuallearning-230106135903.azurewebsites.net/user/assignment`,
    }).then(function (response) {
      console.log(response);
      navigate("/home/congrats");
    });
  };

  return (
    <div>
      <div
        className="deletemodal"
        style={{ display: props.resultmodal ? "flex" : "none" }}
      >
        <div className="deleteoverlay">
          <div className="Endmodal-content">
            <div className="EndTestMainDiv">
              <div className="EndTestInsideDiv">
                Do you want to end the test?
                <div className="EndTestInsideSubDiv">
                  <span>You still have 50 second remaining</span>
                  <span>
                    If you want to check your answer again, press cancel button.
                    If you want to end the test and submit your answers you can
                    press submit button.
                  </span>
                </div>
              </div>
              <div className="ApplyCancel-div" style={{ marginBottom: "2%" }}>
                <div
                  className="ClearAllButton"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    props.setResultModal(false);
                  }}
                >
                  Cancel
                </div>
                <div
                  className="ApplyFilterButton"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    props.setResultModal(false);

                    handleSubmit();
                  }}
                >
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
