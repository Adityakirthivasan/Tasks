import React from "react";
import OrgChart from "./OrgChart";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Dynamic Org Chart Builder
      </h1>
      <OrgChart />
    </div>
  );
};

export default App;