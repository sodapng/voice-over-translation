// sliderVolume - current volume of the slider
// otherSliderVolume - volume of the other slider
// tempVolume - previous volume of the slider
function syncVolume(element, sliderVolume, otherSliderVolume, tempVolume) {
  // calculate the difference between the current and previous volumes
  let diff = sliderVolume - tempVolume;
  // adjust the other slider volume by adding or subtracting the difference
  let finalValue = otherSliderVolume + diff;
  // clamp the final value between 0 and 100
  finalValue = Math.min(Math.max(finalValue, 0), 100);
  // set the element volume to the final value divided by 100
  element.volume = finalValue / 100;
  // return the final value
  return finalValue;
}

export { syncVolume };