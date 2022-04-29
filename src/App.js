import HomePage from "./pages/HomePage";
import Actor from "./pages/Actor";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { ActorContext } from "./context/actorContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ActorContext>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/actor" element={<Actor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ActorContext>
    </div>
  );
}

export default App;
