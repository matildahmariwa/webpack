//'use strict';

window.calculator = window.calculator || {};

(function() {
	var getIntById = function(id) {
		return parseInt(document.getElementById(id).value, 10);
	};

	var calculate = function() {
		var x = parseInt(document.getElementById('x').value);
        var y = parseInt(document.getElementById('y').value);
        document.getElementById('result').innerHTML = (x * y).toString();
	};

	var me =function() {
		window.document.getElementById('bd').style.background="red";
		 };
			

	window.calculator.init = function() {
		document.getElementById('multiply').addEventListener('click', calculate);
		document.getElementById('changeColor').addEventListener('click',me);
	};


		
		

})();

