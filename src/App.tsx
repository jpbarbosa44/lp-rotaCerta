import { FirstModule } from "./components/first-module";
import { FourthModule } from "./components/fourth-module";
import { SecondModule } from "./components/second-module";
import { ThirdModule } from "./components/third-module";

export function App() {

  return (
    <div className="flex flex-col">
      <FirstModule />
      <SecondModule />
      <ThirdModule />
      <FourthModule />
    </div>
  )
}
