import React from "react";
import { Button, TabnavWrapper } from "./styled";

export default function Tabnav() {
  return (
    <TabnavWrapper>
      <p>Forecast</p>
      <Button to="/">Current</Button>
      <Button to="7days">7 days</Button>
    </TabnavWrapper>
  );
}
