import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import veryColdFace from "../assets/Emojis/veryColdFace.png";
import coldFace from "../assets/Emojis/coldFace.png";
import coolFace from "../assets/Emojis/coolFace.png";
import hotFace from "../assets/Emojis/hotFace.png";
import veryHotFace from "../assets/Emojis/veryHotface.png";

const InstantTempPicker = () => {
  const [rangeSliderCurrentValue, setRangeSliderCurrentValue] = useState([
    0, 20,
  ]);
  const [sliderTemp, setSliderTemp] = useState({
    cel: 0.0,
    feh: 0.0,
    kel: 0.0,
  });

  const celsiusToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
  };

  const celsiusToKelvin = (celsius) => {
    const kelvin = celsius + 273.15;
    return kelvin;
  };

  const handleSliderChange = (_newVal) => {
    setRangeSliderCurrentValue([0, _newVal[1]]);
  };

  useEffect(() => {
    const celTemp = parseFloat(rangeSliderCurrentValue[1]);
    const fehTemp = parseFloat(celsiusToFahrenheit(celTemp));
    const kelTemp = parseFloat(celsiusToKelvin(celTemp));
    setSliderTemp({
      cel: celTemp,
      feh: fehTemp,
      kel: kelTemp,
    });
    console.log(sliderTemp);
  }, [rangeSliderCurrentValue]);

  return (
    <div className="flex flex-col w-full gap-2">
      <span className="text-2xl text-white font-semibold">
        Instant Converter
      </span>
      <div className="w-full flex gap-10">
        <div className="w-full flex flex-col gap-2">
          <RangeSlider
            aria-label={["min", "max"]}
            colorScheme="teal"
            max={50}
            value={rangeSliderCurrentValue}
            onChange={handleSliderChange}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={1} boxSize={6} />
          </RangeSlider>
          <span className="text-lg font-medium text-white italic">
            Temperature in:
          </span>
          <div className="w-full flex items-center gap-2 md:gap-5 lg:gap-12 text-white text-xs md:text-xm lg:text-lg">
            <span>Celsius: {sliderTemp.cel} &deg;C</span>
            <span>Fahrenheit: {sliderTemp.feh} &deg;F</span>
            <span>Kelvin: {sliderTemp.kel} &deg;K</span>
          </div>
        </div>
        <img
          src={
            rangeSliderCurrentValue[1] > 40
              ? veryHotFace
              : rangeSliderCurrentValue[1] <= 40 &&
                rangeSliderCurrentValue[1] > 25
              ? hotFace
              : rangeSliderCurrentValue[1] <= 25 &&
                rangeSliderCurrentValue[1] > 15
              ? coolFace
              : rangeSliderCurrentValue[1] <= 15 &&
                rangeSliderCurrentValue[1] > 5
              ? coldFace
              : veryColdFace
          }
          alt="emoji"
          className="w-[5rem] h-[6rem] object-contain"
        />
      </div>
    </div>
  );
};

export default InstantTempPicker;
