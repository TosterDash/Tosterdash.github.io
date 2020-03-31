//Canvas size
    var XW = 800;
    var YW = 500;


//Variables asignacion de propiedades Circulo
    var xCir = XW/2;
    var yCir = YW-100;
    var radioCir = 30
    var velocidadCir = 5

    var start = false

    

//areglo de bolas

	var balls=[];




function pelota(x,y,color,radio,velocidad,sentidoX,sentidoY){
	this.x=x;
    this.y=y;
    this.color=color; //pedir un arreglo para el rgb
    this.radio=radio;
    this.velocidad=velocidad;

    this.sentidoCircleX = sentidoX;
    this.sentidoCircleY = sentidoY;

    const rebotar = () =>{
     

        if(this.sentidoCircleX){

            this.x += this.velocidad;
            if(this.x >= XW){
            this.sentidoCircleX=false;

            }
        }
        else {
            this.x -= this.velocidad;
            if(this.x<=0){
            this.sentidoCircleX=true;
            }
        }
        
        if(this.sentidoCircleY){
            this.y += this.velocidad;
            if(this.y >= height){
            this.sentidoCircleY=false;
            }
        }
        else {
            this.y -= this.velocidad;
            if(this.y<=0){
            this.sentidoCircleY=true;
            }
        }


        //REBOTAR PELOTAS////////////////////////////
        for (var i = 0; i < balls.length; i++) {
        	if (this.x == balls[i].x && this.y == balls[i].y) {

        	}else{
        		var dx = this.x - balls[i].x;
				var dy = this.y - balls[i].y;
				var distance = Math.sqrt(dx * dx + dy * dy);
				if (distance < this.radio + balls[i].radio) {
    			// collision detected!
    			if (this.sentidoCircleX && this.sentidoCircleY) {
    				this.sentidoCircleX=false
    				this.sentidoCircleY=false
    			}
    			else if (this.sentidoCircleX && this.sentidoCircleY==false) {
    				this.sentidoCircleX=false
    				this.sentidoCircleY=true
    			}
    			else if (this.sentidoCircleX==false && this.sentidoCircleY) {
    				this.sentidoCircleX=true
    				this.sentidoCircleY=false
    			}
    			else if (this.sentidoCircleX==false && this.sentidoCircleY==false) {
    				this.sentidoCircleX=true
    				this.sentidoCircleY=true
    			}
			}	
        	}
        	
        }
        

     }

    this.draw = () => {
        fill(color.r,color.g,color.b)
        let size = this.radio*2;
        ellipse(this.x, this.y,size,size);
        rebotar();
    };
}












//PRINCIPAL CANVAS-----------------------------------------------------

function setup(){
    createCanvas(XW,YW);
    frameRate(60);
    noStroke()
}



function draw(){
    background("white");

    if (start){
    	for (var i = 0; i < balls.length; i++) {
    	
    	balls[i].draw();
    	
   		}
   
    }

    
    
   
    
    


}

function mouseClicked(){
	start=true
	let sentido = [false,true];
	var bola=new pelota(mouseX,mouseY, {r: random(0,255) ,g: random(0,255) ,b: random(0,255)}, radioCir, velocidadCir,random(sentido),random(sentido));
	balls.push(bola);
}
