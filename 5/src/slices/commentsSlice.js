// BEGIN (write your solution here)
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  comments: [],
};
const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment(state, { payload }) {
      state.comments.push(payload);
    },
    setComments(state, { payload }) {
      state.comments = payload;
    },
  },
});

export const { actions } = commentsSlice;
export default commentsSlice.reducer;
// END
