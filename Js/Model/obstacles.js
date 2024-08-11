class Obstacles{
    constructor(x, y, width, height, speed, type){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
        this.frameX = 0;
        this.frameY = 0;
        //random cisla pre animaciu korytnaciek
        this.random=Math.floor(Math.random()*30+30);
        //random cisla pre random auta
        this.carType =(Math.floor(Math.random())*3)
    }
    draw(){
        if(this.type=="car"){
            if(this.carType==1)
                this.carType++;
            ctx.drawImage(auta, this.frameX*155+6.5, this.carType*this.height , grid*2.7, grid+20, this.x, this.y, this.width, this.height);
        }
        else if(this.type=="drevo"){
            //ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.drawImage(drevoImg, this.frameX*537, 0, 537, 312, this.x-15, this.y, this.width+25, this.height+15);
        }
        if(this.type=="korytnacka"){

            if(fps % this.random==0){
                if(this.frameX>=1)
                    this.frameX=0;
            
                else{
                    this.frameX=1;
                }
            }    
            //ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.drawImage(korytnackaImg, this.frameX*69, 0, 69, 69, this.x-15, this.y-15, this.width+25, this.height+25);
        }      
        
    }
    update(){
        this.x += this.speed*gameSpeed;
        if(this.speed>0){
            
            if(this.x > canvas.width + this.width){
                this.x = 0-this.width;
                this.carType =(Math.floor(Math.random()*3))
            }
        }
        else{
            if(this.type=="car")
                this.frameX = 1;
            else if(this.type=="drevo")
                this.frameX = 1;
            if(this.x < 0 - this.width){
                this.x = canvas.width;
                this.carType =(Math.floor(Math.random()*3))
                this.random=Math.floor(Math.random()*(12-9)+9);
            }
        }

    }
}
