import { createSelector } from 'reselect';

const selectSlider = state => state.slider;

export const sliderItems = createSelector(
  [selectSlider],
  slider => slider.items
);

export const selectSliders = idParam =>
  createSelector(
    [sliderItems],
    sliders => sliders.filter(item => item.id == idParam)
  );

