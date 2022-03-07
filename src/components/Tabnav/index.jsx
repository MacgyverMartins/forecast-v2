import React, { memo } from "react";
import { Link, TabnavWrapper } from "./styled";

function Tabnav() {
  return (
    <TabnavWrapper>
      <p>Forecast</p>
      <div>
        <Link to="/">Current</Link>
        <Link to="/7days">7 days</Link>
      </div>
    </TabnavWrapper>
  );
}

export default memo(Tabnav);
