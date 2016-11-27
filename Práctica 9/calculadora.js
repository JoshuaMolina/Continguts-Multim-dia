var game = new Phaser.Game(400, 500, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.image('boton-0', 'images/siete.png');
    game.load.image('boton-1', 'images/cuatro.png');
    game.load.image('boton-2', 'images/uno.png');
    game.load.image('boton-3', 'images/igual.png');
    game.load.image('boton-4', 'images/ocho.png');
    game.load.image('boton-5', 'images/cinco.png');
    game.load.image('boton-6', 'images/dos.png');
    game.load.image('boton-7', 'images/cero.png');
    game.load.image('boton-8', 'images/nueve.png');
    game.load.image('boton-9', 'images/seis.png');
    game.load.image('boton-10', 'images/tres.png');
    game.load.image('boton-11', 'images/division.png');
    game.load.image('boton-12', 'images/clear.png');
    game.load.image('boton-13', 'images/multiply.png');
    game.load.image('boton-14', 'images/restar.png');
    game.load.image('boton-15', 'images/add.png');

}

var background, button;
var num1 = "", num2 = "", op = 0, result = 0, llave = "", text;

function create() {

    game.stage.backgroundColor = '#DDDDDD';

    var style = { font: "32px Arial", fill: "#ff0044", align: "center" };
    text = game.add.text(100, 400, "", style);
    

    var n = 0;
    for (var i = 0; i < 4; i++){
	for(var j = 0; j < 4; j++){
	   var key = "boton-"+n;
	   button = game.add.button(i * 100 + 10, j * 100, key, actionOnClick, {keyname:n}, 0, 0, 0);
	   button.events.onInputDown.add(onInputDown);
           button.events.onInputUp.add(onInputUp);
	   n++;
	}
    } 
}

function actionOnClick () {
    
    llave = this.keyname;

    if (llave == 0){
        if(op == 0) num1 += String(7);
        else num2 += String(7);
    }
    else if (llave == 1){
        if(op == 0) num1 += String(4);
        else num2 += String(4);
    }
    else if (llave == 2){
        if(op == 0) num1 += String(1);
        else num2 += String(1);
    }
    else if (llave == 7){
        if(op == 0) num1 += String(0);
        else num2 += String(0);
    }
    else if (llave == 4){
        if(op == 0) num1 += String(8);
        else num2 += String(8);
    }
    else if (llave == 5){
        if(op == 0) num1 += String(5);
        else num2 += String(5);
    }
    else if (llave == 6){
        if(op == 0) num1 += String(2);
        else num2 += String(2);
    }
    else if (llave == 8){
        if(op == 0) num1 += String(9);
        else num2 += String(9);
    }
    else if (llave == 9){
        if(op == 0) num1 += String(6);
        else num2 += String(6);
    }
    else if (llave == 10){
        if(op == 0) num1 += String(3);
        else num2 += String(3);
    }

    else if (llave == 11 || llave == 13 || llave == 14 || llave == 15){
        op = llave;
    }

    else if(llave == 3){

       if (op == 15){
            result = Number(num1) + Number(num2);
       }
       else if (op == 14){
            result = Number(num1) - Number(num2);
       }
       else if (op == 13){
            result = Number(num1) * Number(num2);
       }
       else if (op == 11){
            result = Number(num1) / Number(num2);
       }
       else {
	    result = Number(num1);
       }
      
       text.text = "Result: " + String(result);
       num1 = result;
       result = 0;
       op = 0;
       num2 = "";
       
    }

    else {
        result = 0;

	text.text = "Result: " + String(result);

	op = 0;
	num1 = "";
	num2 = "";
    }
}

// Funciones para que haga la animación de los botones

function onInputUp(button) {

    game.add.tween(button.scale).to({x: 1, y: 1}, 200, Phaser.Easing.Cubic.Out, true);
}

function onInputDown(button) {

    game.add.tween(button.scale).to({x: 0.8, y: 0.8}, 200, Phaser.Easing.Cubic.Out, true);
}
