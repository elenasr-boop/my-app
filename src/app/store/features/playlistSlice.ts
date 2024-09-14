import { TrackType } from "@/app/types/tracks";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlaylistStateType =  {
  currentTrack: TrackType|null,
  tracks: TrackType[],
  isPlaying: boolean,
  shuffleTracks: TrackType[],
}

const initialState: PlaylistStateType = {
  currentTrack: null,
  tracks: [],
  isPlaying: false,
  shuffleTracks: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentTrackState: (state, action: PayloadAction<TrackType>) => {
      state.currentTrack = action.payload;
    },
    setTracksState: (state, action: PayloadAction<TrackType[]>) => {
        state.tracks = action.payload;
    },
    setShuffle: (state, action: PayloadAction<boolean>) => {
        if (action.payload) {
            state.shuffleTracks = state.tracks.sort((a, b) => 0.5 - Math.random());
        } else {
            state.shuffleTracks = [...state.tracks];
        }
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
        state.isPlaying = action.payload;
    }
  },
});

export const { setCurrentTrackState } = playlistSlice.actions;
export const { setTracksState } = playlistSlice.actions;
export const { setShuffle } = playlistSlice.actions;
export const { setIsPlaying } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;