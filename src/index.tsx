import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import { SimplePopup } from "./lib/SimplePopup";
import { Container } from "react-bootstrap";

let opened = false;

let open = () => { };
let close = () => { };

ReactDOM.render(
  [
    <button onClick={() => {
      if (opened) {
        close();
      } else {
        open();
      }
      opened = !opened;
    }}>Open Popup!</button>,
    <Container>
      <SimplePopup title="Test Popup" message="Here's a popup!" buttons={[{
        label: 'Ok!',
        id: 'okButton'
      }]} controls={(c, o) => { close = c; open = o }} on={id => close()}/>
    </Container>], document.getElementById("root"));
