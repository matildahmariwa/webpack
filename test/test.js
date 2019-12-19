describe('Calculator', function() {


    beforeEach(function(){
    var operand= '<div id ="operand">'+
        '<input id="y" type="number"></input>' +
        '<input id="x" type="number"></input>'+
        '<div id="bd"></div>'+
        '<input id="multiply" type="button" ></input>' +
        'Result: <span id="result"></span>' + 
        '<button id ="changeColor">Change color</button> </div>';
        document.body.insertAdjacentHTML(
           'afterbegin',operand  );
});

// remove the html fixture from the DOM
afterEach(function() {
    document.body.removeChild(document.getElementById('operand'));
});

// call the init function of calculator to register DOM elements
// beforeEach(function() {
//     window.calculator.init();
// });



    // // inject the HTML fixture for the tests
    beforeEach(function() {
      window.calculator.init();
      });
  
    // remove the html fixture from the DOM
    // afterEach(function() {
    // //   document.body.removeChild(window.document.getElementById('fixture'));
    // });
  
    //call the init function of calculator to register DOM elements
    
  
    it('should return 12 for 3 * 4', function() {
      document.getElementById('x').value = 3;
      document.getElementById('y').value = 4;
      document.getElementById('multiply').click();

      expect(document.getElementById('result').innerHTML).toBe('12');
    });
  
    // it('should calculate zero for invalid x value', function() {
    //   window.document.getElementById('x').value = 'hello';
    //   window.document.getElementById('y').value = 2;
    //   window.document.getElementById('multiply').click();
    //   expect(window.document.getElementById('result').innerHTML).toBe('0');
    // });
  
    it('should calculate zero for invalid y value', function() {
      window.document.getElementById('x').value = 1;
      window.document.getElementById('y').value = 'goodbye';
      window.document.getElementById('multiply').click();
      expect(window.document.getElementById('result').innerHTML).toBe('NaN');
    });

    //change background color test
it('should produce background color of red when clicked',function(){
    window.document.getElementById('changeColor').click();
    var c = window.document.getElementById('bd').style.backgroundColor;
   
    expect(c).toBe("red");
    // expect(window.document.body.style.backgroundColor).toBe('red');

});

  
  });