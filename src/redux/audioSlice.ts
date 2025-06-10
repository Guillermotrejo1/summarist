import { createSlice } from '@reduxjs/toolkit';

interface AudioState {
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  audioRef: HTMLAudioElement | null;
  progressBarRef: HTMLInputElement | null;
}

const initialState: AudioState = {
  currentTime: 0,
  duration: 0,
  isPlaying: false,
  audioRef: null,
  progressBarRef: null,
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setCurrentTime(state, action) {
      state.currentTime = action.payload;
    },
    setDuration(state, action) {
      state.duration = action.payload;
    },
    setIsPlaying(state, action) {
      state.isPlaying = action.payload;
    },
    setAudioRef(state, action) {
      state.audioRef = action.payload;
    },
    setProgressBarRef(state, action) {
      state.progressBarRef = action.payload;
    },
  },
});

export const { setCurrentTime, setDuration, setIsPlaying, setAudioRef, setProgressBarRef } = audioSlice.actions;
export default audioSlice.reducer;
