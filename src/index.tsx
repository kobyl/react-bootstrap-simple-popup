import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import { SimplePopup } from "./lib/SimplePopup";
import { Container } from "react-bootstrap";

let simpleOpen = () => { };
let simpleClose = () => { };

let childrenOpen = () => { };
let childrenClose = () => { };

ReactDOM.render(
  [
    <button onClick={() => {
      childrenOpen();
    }}>Open Popup With children</button>,
    <button onClick={() => {
      simpleOpen();
    }}>Open Simple Popup</button>,
    <Container>
      <SimplePopup title="Test Simple Popup" message="This one just displays this message" buttons={[{
        label: 'Ok!',
        id: 'okButton'
      }]}
        controls={(c, o) => { simpleOpen = o; simpleClose = c }}
        on={() => simpleClose()}
      />
      <SimplePopup title="Popup with children"
        controls={(c, o) => { childrenOpen = o; childrenClose = c }}>
        <p>This one has embedded content</p>
        <input type='text' style={{ width: '100%' }}
          value='...with some form elements.' /><br />
        <button onClick={() => childrenClose()}>Close</button>
      </SimplePopup>
    </Container>], document.getElementById("root"));
