function calcula(caracter){
	switch(caracter){
		case '+':
		var num1 = parseFloat(document.getElementById("numero1").value);
		var num2 = parseFloat(document.getElementById("numero2").value);
		document.getElementById("resultado").value = num1 + num2;
		break;
		
		case'-':
		var num1 = parseFloat(document.getElementById("numero1").value);
		var num2 = parseFloat(document.getElementById("numero2").value);
		document.getElementById("resultado").value = num1 - num2;
		break;
		
		case'x':
		var num1 = parseFloat(document.getElementById("numero1").value);
		var num2 = parseFloat(document.getElementById("numero2").value);
		document.getElementById("resultado").value = num1 * num2;
		break;
		
		case '/':
		var num1 = parseFloat(document.getElementById("numero1").value);
		var num2 = parseFloat(document.getElementById("numero2").value);
		document.getElementById("resultado").value = num1 / num2;
		break;
		
		case 'C':
		document.getElementById("numero1").value = ""; 
		document.getElementById("numero2").value = "";
		document.getElementById("resultado").value = "";
		break;
	}
}