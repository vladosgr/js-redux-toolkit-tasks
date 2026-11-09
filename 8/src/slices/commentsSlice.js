import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { actions as usersActions } from "./usersSlice.js";
import { actions as postsActions } from "./postsSlice.js";

const commentsAdapter = createEntityAdapter();

const initialState = commentsAdapter.getInitialState();

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComments: commentsAdapter.addMany,
    addComment: commentsAdapter.addOne,
  },
  // BEGIN (write your solution here)
  extraReducers: (builder) => {
    builder.addCase(postsActions.removePost, (state, { payload: post }) => {
      const restComments = Object.values(state.entities).filter(
        (comment) => !post.comments.includes(comment.id)
      );
      commentsAdapter.setAll(state, restComments);
    });
    builder.addCase(usersActions.removeUser, (state, { payload: id }) => {
      const restComments = Object.values(state.entities).filter(
        (comment) => comment.author !== id
      );
      commentsAdapter.setAll(state, restComments);
    });

  },
  // END
});

export const { actions } = commentsSlice;
export const selectors = commentsAdapter.getSelectors(
  (state) => state.comments
);
export default commentsSlice.reducer;
