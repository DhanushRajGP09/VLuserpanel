import React, { useEffect, useState } from "react";
import "./Quiz.css";
import closequiz from "../../Assets/closequiz.png";
import radio from "../../Assets/Ellipse 10.png";
import clock from "../../Assets/Group 183@2x.png";
import leftarrow from "../../Assets/icn_next question 2.png";
import rightarrow from "../../Assets/Rightarrownext.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import greentick from "../../Assets/Answer Tick Icon.png";
import submitbutton from "../../Assets/Submitbut.png";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuestionAnswer,
  deletequestionanswer,
  getQuestionAnswer,
} from "../../features/Courseslice";

export default function Quiz(props) {
  const token = JSON.parse(localStorage.getItem("token"));

  const [questiondata, setQuestionData] = useState("");
  const [carouselindex, setcarouselindex] = useState(0);

  const localid = JSON.parse(localStorage.getItem("assignmentID"));
  const localname = JSON.parse(localStorage.getItem("assignmentName"));
  const localduration = JSON.parse(localStorage.getItem("assignmentDuration"));

  const getthereduxquestion = useSelector(getQuestionAnswer);
  console.log("getthereduxquestion", getthereduxquestion);

  const duration = (localduration / 3600 + " ").substr(0, 3);

  const navigate = useNavigate();

  console.log("qdad", questiondata);

  const getTheQuestions = () => {
    console.log("entered");
    axios({
      method: "get",
      params: {
        assignmentId: localid,
        limit: 100,
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: "https://app-virtuallearning-230106135903.azurewebsites.net/user/questions",
    })
      .then(function (response) {
        console.log("questiondata", response.data);
        setQuestionData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dispatch = useDispatch();

  const handleOption = (index, num, id, answer) => {
    document.getElementById(`option${num}${index}`).style.backgroundColor =
      "#EC5D52";
    document.getElementById(`option${num}radio${index}`).src = greentick;
    document.getElementById(`option${num}text${index}`).style.color = "white";
    dispatch(
      addQuestionAnswer({
        questionId: id,
        givenAnswer: answer,
      })
    );
  };
  const removeselect = (index, num, id, answer) => {
    document.getElementById(`option${num}${index}`).style.backgroundColor =
      "white";
    document.getElementById(`option${num}radio${index}`).src = radio;
    document.getElementById(`option${num}text${index}`).style.color = "#2b2b2b";
    dispatch(
      deletequestionanswer({
        questionId: id,
        givenAnswer: answer,
      })
    );
  };

  useEffect(() => {
    getTheQuestions();
  }, []);

  return (
    <div className="QuizMain-div">
      <div className="QuizHeaderMain">
        {localname}
        <img
          src={closequiz}
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/home/Courseview");
          }}
        ></img>
      </div>
      <Carousel
        className="carousel-style"
        renderIndicator={false}
        selectedItem={carouselindex}
      >
        {questiondata.length > 0 ? (
          questiondata.map((data, index) => {
            return (
              <div className="QuestionsDiv">
                <div className="QuestionHeaderMain">
                  Question {index + 1} of {questiondata?.length}
                  <div className="QuestionTime-div">
                    <div>
                      <img src={clock}></img>
                    </div>

                    <span className="TimeRemainingText">
                      {duration} mins remaining
                    </span>
                  </div>
                </div>
                <div className="QuestionContainerMain-div">
                  <span className="QuestionText">{data.questionName}</span>
                  <div className="OptionsContainerMain-div">
                    <div
                      className="OptionContainer"
                      id={`option1${index}`}
                      onClick={() => {
                        if (
                          document.getElementById(`option1${index}`).style
                            .backgroundColor === "white"
                        ) {
                          handleOption(
                            index,
                            1,
                            data.questionId,
                            data?.options[0]
                          );
                        } else {
                          removeselect(
                            index,
                            1,
                            data.questionId,
                            data?.options[0]
                          );
                        }
                      }}
                    >
                      <div className="Radio-div">
                        <img
                          src={radio}
                          className="ellipse"
                          id={`option1radio${index}`}
                        ></img>
                      </div>

                      <span className="OptionText" id={`option1text${index}`}>
                        {data?.options[0]}{" "}
                      </span>
                    </div>
                    <div
                      className="OptionContainer"
                      id={`option2${index}`}
                      onClick={() => {
                        if (
                          document.getElementById(`option2${index}`).style
                            .backgroundColor === "white"
                        ) {
                          handleOption(
                            index,
                            2,
                            data.questionId,
                            data?.options[1]
                          );
                        } else {
                          removeselect(
                            index,
                            2,
                            data.questionId,
                            data?.options[1]
                          );
                        }
                      }}
                    >
                      <div className="Radio-div">
                        <img
                          src={radio}
                          className="ellipse"
                          id={`option2radio${index}`}
                        ></img>
                      </div>
                      <span className="OptionText" id={`option2text${index}`}>
                        {data?.options[1]}{" "}
                      </span>
                    </div>
                    <div
                      className="OptionContainer"
                      id={`option3${index}`}
                      onClick={() => {
                        if (
                          document.getElementById(`option3${index}`).style
                            .backgroundColor === "white"
                        ) {
                          handleOption(
                            index,
                            3,
                            data.questionId,
                            data?.options[2]
                          );
                        } else {
                          removeselect(
                            index,
                            3,
                            data.questionId,
                            data?.options[2]
                          );
                        }
                      }}
                    >
                      <div className="Radio-div">
                        <img
                          src={radio}
                          className="ellipse"
                          id={`option3radio${index}`}
                        ></img>
                      </div>
                      <span className="OptionText" id={`option3text${index}`}>
                        {data?.options[2]}
                      </span>
                    </div>
                    <div
                      className="OptionContainer"
                      id={`option4${index}`}
                      onClick={() => {
                        if (
                          document.getElementById(`option4${index}`).style
                            .backgroundColor === "white"
                        ) {
                          handleOption(
                            index,
                            4,
                            data.questionId,
                            data?.options[3]
                          );
                        } else {
                          removeselect(
                            index,
                            4,
                            data.questionId,
                            data?.options[3]
                          );
                        }
                      }}
                    >
                      <div className="Radio-div">
                        <img
                          src={radio}
                          className="ellipse"
                          id={`option4radio${index}`}
                        ></img>
                      </div>
                      <span className="OptionText" id={`option4text${index}`}>
                        {data?.options[3]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <>Loading............</>
        )}
      </Carousel>
      <div className="QuestionPaginationMain-div">
        <div className="QuestionPaginationInside-div">
          <div className="ChapterPaginationtext-div">
            Chapter 3
            <span className="ChapterNamePagination">
              Setting up a new project
            </span>
          </div>

          <div className="ChapterPaginationArrows-div">
            {carouselindex > 0 ? (
              <img
                src={leftarrow}
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  setcarouselindex((prev) => prev - 1);
                }}
              ></img>
            ) : (
              <img
                src={leftarrow}
                style={{ cursor: "pointer", display: "none" }}
              ></img>
            )}

            {carouselindex < questiondata.length - 1 ? (
              <img
                src={rightarrow}
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  setcarouselindex((prev) => prev + 1);
                }}
              ></img>
            ) : (
              <img
                src={submitbutton}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  props.setResultModal(true);
                }}
              ></img>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
