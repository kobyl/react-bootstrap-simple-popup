A simple popup based on bootstrap's modal. I wanted something that allowed the caller to control when it popped up, so on mount it will callback the caller with a set of control functions, open and close.

These do what you'd expect.

This project is built with yarn, but npm should work as well.

To test run npm install and npm run start
To build the library run npm run build

Two ways to use it:
### Static 

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

You can also put components in the children and they will get rendered. So if you want form elements in there you can do:

```
<SimpleModal ...>
  <input .../>
</SimpleModal>
```

### Dynamic 

I also discovered I wanted to do some inline workflow. ie. Do some work, ask the user something and respond.

```
let open = () => { };
let close = () => { };
let openWithProps = (displayProps) => void;

ReactDOM.render(
[
    <button
      onClick={() => {
        openWithProps({
          title: "Title is set during click",
          message:
            "We modified the title, message, buttons and callbacks!",
          buttons: [
            {
              id: "new1",
              label: "Choice 1"
            },
            {
              id: "new2",
              label: "Choice 2"
            }
          ],
          on: id => {
            alert(id + "was clicked");
          }
        });
      }}
    >,
<Container>
    <SimplePopup title="Test Popup" message="Here's a popup!" buttons={[{
    label: 'Ok!',
    id: 'okButton'
    }]} controls={(c, o, withProps) => { close = c; open = o, openWithProps = withProps }} on={id => close()}/>
</Container>], document.getElementById("root"));
```
