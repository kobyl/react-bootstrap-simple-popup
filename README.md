A simple popup based on bootstrap's modal. I wanted something that allowed the caller to control when it popped up, so on mount it will callback the caller with a set of control functions, open and close.

These do what you'd expect.

This project is built with yarn, but npm should work as well.

To test run npm install and npm run start
To build the library run npm run build

### Usage

```
let open = () => { };
let close = () => { };

ReactDOM.render(
  [
    <button onClick={() => {
        open();
    }}>Open Popup!</button>,
    <Container>
      <SimplePopup title="Test Popup" message="Here's a popup!" buttons={[{
        label: 'Ok!',
        id: 'okButton'
      }]} controls={(c, o) => { close = c; open = o }} on={id => close()}/>
    </Container>], document.getElementById("root"));
```

