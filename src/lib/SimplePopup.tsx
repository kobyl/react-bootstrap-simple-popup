import * as React from "react";
import { Modal, Button } from "react-bootstrap";

export interface ButtonInfo {
  label: string;
  class?: string;
  id?: string;
}

export interface Props {
  title: string;
  buttons?: ButtonInfo[];
  message?: string;
  controls: (close: () => void, open: () => void) => void;
  on?: (buttonId: string) => void;
}

interface State {
  opened: boolean;
}

export class SimplePopup extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
  }

  componentDidMount() {
    console.log("popup mounted");

    this.props.controls(
      () => this.setState({ opened: false }),
      () => this.setState({ opened: true }),
    );
  }

  render() {
    let on = this.props.on || (() => {});
    let buttons = this.props.buttons || [];

    return (
      <Modal show={this.state.opened} onHide={() => {}}>
        <Modal.Header>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {this.props.message && <p>{this.props.message}</p>}
          {this.props.children && this.props.children}
        </Modal.Body>

        <Modal.Footer>
          {buttons.map(info => {
            return (
              <Button
                className={info.class}
                onClick={() => {
                  on(info.id);
                }}
              >
                {info.label}
              </Button>
            );
          })}
        </Modal.Footer>
      </Modal>
    );
  }
}
