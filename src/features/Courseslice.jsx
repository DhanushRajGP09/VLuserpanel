import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CourseSlice = createSlice({
  name: "Course",
  initialState: {
    courseId: "",
    ongoingCourse: {},
    courseName: " ",
    courseOverview: {},
    Choice: [],
    Topbusiness: {},
    Topdesign: [],
  },
  reducers: {
    addcourseId: (state, { payload }) => {
      state.courseId = payload;
    },
    addongoingCourse: (state, { payload }) => {
      state.ongoingCourse = payload;
    },
    addcourseName: (state, { payload }) => {
      state.courseName = payload;
    },
    addcourseOverview: (state, { payload }) => {
      state.courseOverview = payload;
    },
    addChoiceCourse: (state, { payload }) => {
      state.Choice = payload;
    },
    addTopbusiness: (state, { payload }) => {
      state.Topbusiness = payload;
    },
    addTopdesign: (state, { payload }) => {
      state.Topdesign = payload;
    },
  },
  extraReducers: {},
});

export const {
  addcourseId,
  addongoingCourse,
  addcourseName,
  addcourseOverview,
  addChoiceCourse,
  addTopbusiness,
  addTopdesign,
} = CourseSlice.actions;

export const getCourseId = (state) => state.Course.courseId;
export const getOngoingCourse = (state) => state.Course.ongoingCourse;
export const getOngoingCourseName = (state) => state.Course.courseName;
export const getCourseOverview = (state) => state.Course.courseOverview;
export const getChoiceCourse = (state) => state.Course.Choice;
export const getTopBusiness = (state) => state.Course.Topbusiness;
export const getTopdesign = (state) => state.Course.Topdesign;
export default CourseSlice.reducer;
