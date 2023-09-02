import { useState } from "react";
import InstantTempPicker from "./InstantTempPicker";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";

const TempPicker = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [kelvin, setKelvin] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit((parseFloat(value) * 9) / 5 + 32);
    setKelvin(parseFloat(value) + 273.15);
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(((parseFloat(value) - 32) * 5) / 9);
    setKelvin(((parseFloat(value) - 32) * 5) / 9 + 273.15);
  };

  const handleKelvinChange = (e) => {
    const value = e.target.value;
    setKelvin(value);
    setCelsius(parseFloat(value) - 273.15);
    setFahrenheit(((parseFloat(value) - 273.15) * 9) / 5 + 32);
  };
  return (
    <div className="w-screen h-screen min-h-screen bg-blue-950 p-5 overflow-x-hidden">
      <div className="w-full min-h-full bg-blue-900 rounded-lg px-8 md:px-24 py-8 flex flex-col">
        <InstantTempPicker />
        <div className="mt-10 flex flex-col gap-y-4 md:gap-y-10">
          <span className="text-xl md:text-4xl text-white font-semibold">
            Inter-scale Temperature Converter
          </span>
          <div className="flex flex-col-reverse lg:flex-row gap-10">
            <div className="w-full flex flex-col gap-5">
              <InputGroup size="lg">
                <InputLeftAddon children="Celsius" />
                <Input
                  type="number"
                  value={celsius}
                  onChange={handleCelsiusChange}
                  backgroundColor="white"
                  placeholder="Temperature in Celsius"
                />
                <InputRightAddon children="°C" />
              </InputGroup>
              <InputGroup size="lg">
                <InputLeftAddon children="Fahrenheit" />
                <Input
                  type="number"
                  value={fahrenheit}
                  onChange={handleFahrenheitChange}
                  backgroundColor="white"
                  placeholder="Temperature in Fahrenheit"
                />
                <InputRightAddon children="°F" />
              </InputGroup>
              <InputGroup size="lg">
                <InputLeftAddon children="Kelvin" />
                <Input
                  type="number"
                  value={kelvin}
                  onChange={handleKelvinChange}
                  backgroundColor="white"
                  placeholder="Temperature in Kelvin"
                />
                <InputRightAddon children="K" />
              </InputGroup>
            </div>
            <div className="w-full flex flex-col gap-2 md:gap-5 text-white font-recursive text-lg md:text-2xl font-medium">
              <span>Formulas:</span>
              <span>°C = (°F - 32) × 5/9 = K - 273.15</span>
              <span>°F = (°C × 9/5) + 32 = (K - 273.15) × 9/5 + 32</span>
              <span>K = °C + 273.15 = (°F - 32) × 5/9 + 273.15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempPicker;
