import {BrowserRouter} from "react-router-dom";
import {ROUTES} from "./routes/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <ROUTES />
      </BrowserRouter>
    </>
  );
}

export default App;
