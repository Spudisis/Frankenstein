import React from "react";
import json from "./example.json";
import { Header } from "./modules";
import { CreateApplication } from "./pages";
function App() {
  React.useEffect(() => {
    console.log(json);
  }, []);

  return (
    <div className="App">
      <Header />

      <CreateApplication />
    </div>
  );
}

export default App;
