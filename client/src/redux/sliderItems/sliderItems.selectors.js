import { createSelector } from 'reselect';

const selectSlider = state => state.slider;

export const sliderItems = createSelector(
  [selectSlider],
  slider => slider.items
);
