import React from "react";
import { Link, TabnavWrapper } from "./styled";

export default function Tabnav() {
  return (
    <TabnavWrapper>
      <p>Forecast</p>
      <Link to="/">Current</Link>
      <Link to="/7days">7 days</Link>
    </TabnavWrapper>
  );
}
