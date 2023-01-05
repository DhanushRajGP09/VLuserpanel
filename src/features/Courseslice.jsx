import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CourseSlice = createSlice({
  name: "Course",
  initialState: {
    courseId: "",
    ongoingCourse: {},
    courseName: " ",
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
  },
  extraReducers: {},
});

export const { addcourseId, addongoingCourse, addcourseName } =
  CourseSlice.actions;

export const getCourseId = (state) => state.Course.courseId;
export const getOngoingCourse = (state) => state.Course.ongoingCourse;
export const getOngoingCourseName = (state) => state.Course.courseName;
export default CourseSlice.reducer;
