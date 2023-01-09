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
    Topcategory1: [],
    Topcategory2: [],
    categoryid: " ",
    categoryCourse: [],
    TheChoice: "",
    CourseData: {},
    categories: [],
    durationRequestList: [],
    filter: {},
  },
  reducers: {
    addcourseId: (state, { payload }) => {
      state.courseId = payload;
    },
    addToFilter: (state, { payload }) => {
      state.filter = payload;
    },
    deleteFromFilter: (state, { payload }) => {
      state.filter = {};
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
    addTopcategory1: (state, { payload }) => {
      state.Topcategory1 = payload;
    },
    addTopcategory2: (state, { payload }) => {
      state.Topcategory2 = payload;
    },
    addcategoryid: (state, { payload }) => {
      state.categoryid = payload;
    },
    addCategoryCourse: (state, { payload }) => {
      state.categoryCourse = payload;
    },
    addTheChoice: (state, { payload }) => {
      state.TheChoice = payload;
    },
    addCourseData: (state, { payload }) => {
      state.CourseData = payload;
    },
    addcategories: (state, action) => {
      let isPresent = false;
      for (let item of state.categories) {
        if (item === action.payload) {
          isPresent = true;
        }
      }
      if (!isPresent) {
        console.log("Got a hit");
        state.categories.unshift(action.payload);
      }
    },
    addDurationRequest: (state, action) => {
      let isPresent = false;
      for (let item of state.durationRequestList) {
        if (item === action.payload) {
          isPresent = true;
        }
      }
      if (!isPresent) {
        console.log("Got a hit");
        state.durationRequestList.unshift(action.payload);
      }
    },
    deletefromCategories: (state, { payload }) => {
      state.categories = state.categories.filter((data) => data !== payload);
    },
    deletefromDurationRequest: (state, { payload }) => {
      state.durationRequestList = state.durationRequestList.filter(
        (data) => data.startDuration !== payload.startDuration
      );
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
  addTopcategory1,
  addTopcategory2,
  addcategoryid,
  addCategoryCourse,
  addTheChoice,
  addCourseData,
  deletefromCategories,
  deletefromDurationRequest,
  addDurationRequest,
  addcategories,
  deleteFromFilter,
  addToFilter,
} = CourseSlice.actions;

export const getCourseId = (state) => state.Course.courseId;
export const getOngoingCourse = (state) => state.Course.ongoingCourse;
export const getOngoingCourseName = (state) => state.Course.courseName;
export const getCourseOverview = (state) => state.Course.courseOverview;
export const getChoiceCourse = (state) => state.Course.Choice;
export const getTopcategory1 = (state) => state.Course.Topcategory1;
export const getTopcategory2 = (state) => state.Course.Topcategory2;
export const getCategoryID = (state) => state.Course.categoryid;
export const getCategoryCourse = (state) => state.Course.categoryCourse;
export const getTheChoice = (state) => state.Course.TheChoice;
export const getCourseData = (state) => state.Course.CourseData;
export const getCategories = (state) => state.Course.categories;
export const getFilter = (state) => state.Course.filter;
export const getDurationRequestlist = (state) =>
  state.Course.durationRequestList;

export default CourseSlice.reducer;
