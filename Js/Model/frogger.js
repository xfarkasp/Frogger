class Frogger{
    constructor(){
        this.width=45;
        this.height=45;
        this.x = 275;
        this.y = canvas.height - this.height-10;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
        this.lives=3;
        //zoznam observerov
        this.handlers = []; 
    }
    update(){
       // console.log("update");
        if(keys[38]){ //hore
            if(this.moving == false){
                //score+=25;
                this.y -= grid;
                this.moving = true;
                xOd=1120;
                xDo=150;
                
            }
        }
        if(keys[40]){ //dole
            if(this.y < canvas.height - this.height-10 && this.moving == false){
                
                this.y += grid;
                this.moving = true;
                
                xOd=1120;
            }
        }
        if(keys[37]){ //dolava
            if(this.x > this.width-50 && this.moving == false){
                
                this.x -= grid;
                this.moving = true;
                smerTvare=0;
                if(!(fps%30==0))
                    xOd=180;
                
                
                else
                    xOd=400;
            }
        }

        if(keys[39]){ //doprava
            if(this.x < canvas.width - this.width   && this.moving == false){
                
                this.x += grid;
                this.moving = true;
                smerTvare=1; 

                for(let i=0; i<1000;i++)
                    xOd=750;

                for(let i=0; i<2000;i++)
                    xOd=950;
            }
        }

    }
    draw(){
        ctx.drawImage(hrac, xOd, 0, 150, 242, this.x, this.y, this.width, this.height+15 );
        
    }
    jump(){
        //console.log("jump");
        if(zvukStav){
            zvukSkok.play();
        }
        //this.notify("pain", observerTest);
    }
    reset(){
        if(this.lives>0){
            this.x = 275;
            this.y = canvas.height - this.height-10;
            
        }
        else
            gameOverValue=1;  
    }
    //observer funkcie
    //registracia
    subscribe(fn) {
        this.handlers.push(fn);
    }
    //vymazanie
    unsubscribe(fn) {
        this.handlers = this.handlers.filter(
            function (item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    }
    //notifikacia
    fire(o, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function (item) {
            item.call(scope, o);
        });
    }   
}
let frogger= new Frogger();







