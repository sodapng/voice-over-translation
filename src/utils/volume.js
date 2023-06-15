function syncVolume(element, sliderVolume, otherSliderVolume, tempVolume) {
  let finalValue = otherSliderVolume + (sliderVolume - tempVolume);
  finalValue = Math.min(Math.max(finalValue, 0), 100);
  element.volume = finalValue / 100;
  return finalValue;
}

export { syncVolume };
