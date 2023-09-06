import TempPicker from "./components/TempPicker";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div>
      <TempPicker />
      <Analytics />
    </div>
  );
};

export default App;
