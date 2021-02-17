// scope el de una variable
function printNumber1() {
  var i;
  for (i = 0; i < 10; i++) {
    function eventuallyPrint(n) {
      setTimeout(function () {
        console.log("otra funcion", n);
      }, 100);
    }
    eventuallyPrint(i);
  }
}
function printNumber2() {
  for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log("segunda function usando let", i);
    }, 100);
  }
}
// printNumber1();
// printNumber2()
