// import { TrackType } from "@/app/types/tracks";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type currentTrackType =  {
//   currentTrack: TrackType|null,
// }

// const initialState: currentTrackType = {
//   currentTrack: null,
// };

// const currentTrackSlice = createSlice({
//   name: "current track",
//   initialState,
//   reducers: {
//     setCurrentTrackState: (state, action: PayloadAction<TrackType>) => {
//       state.currentTrack = action.payload;
//     },
//   },
// });

// export const { setCurrentTrackState } = currentTrackSlice.actions;
// export const currentTrackReducer = currentTrackSlice.reducer;