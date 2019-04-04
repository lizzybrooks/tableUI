// Open your console to see the output
let names;

function setup() {
  var inp = createInput('');
  inp.input(myInputEvent);
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
  names = this.value();
  text(names, 100,100);

}
