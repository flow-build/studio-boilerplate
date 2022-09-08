import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<h1>Path "/" Works</h1>} />
            <Route path="*" element={<h1>Path Not Found!</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
