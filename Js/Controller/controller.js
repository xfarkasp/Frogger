frogger.subscribe(hpDown);
function initObstacles(){
    //pruh 1
    for(let i =0; i<2;i++){
        let x=i*350;
        carsArray.push(new Obstacles(x, canvas.height-grid*2-55, grid*2, grid-20, 1*gameSpeed, 'car'));
    }
    //pruh 2
    for(let i =0; i<2;i++){
        let x=i*350;
        carsArray.push(new Obstacles(x, canvas.height-grid*2-115, grid*2, grid-20, -3*gameSpeed, 'car'));
    }
    //pruh 3
    for(let i =0; i<3;i++){
        let x=i*150;
        carsArray.push(new Obstacles(x, canvas.height-grid*2-175, grid*2, grid-20, 4*gameSpeed, 'car'));
    }
    // //voda 1
    for(let i =0; i<2;i++){
        let x=i*250;
        drevaArray.push(new Obstacles(x, canvas.height-grid*2-450, grid*2, grid-20, 2*gameSpeed, 'drevo'));
    }
    // //voda 2
    for(let i =0; i<3;i++){
        let x=i*195;
        drevaArray.push(new Obstacles(x, (canvas.height-grid*2-500), grid-10, grid-10, -3*gameSpeed, 'korytnacka'));
    }
    
}
initObstacles();
function level2(){
    //pruh 0
    for(let i =0; i<4;i++){
        let x=i*150;
        carsArray.push(new Obstacles(x, canvas.height-grid*2, grid*2, grid-20, -3*gameSpeed, 'car'));
    }

    for(let i =0; i<2;i++){
        let x=i*250;
        drevaArray.push(new Obstacles(x, (canvas.height-grid*2-400), grid-10, grid-10, -3*gameSpeed, 'korytnacka'));
        //drevaArray.push(new Obstacles(x, canvas.height-grid*2-400, grid-10, grid-10*zmiznutie, 3, 'korytnacka'));
    }
    for(let i =0; i<2;i++){
        let x=i*250;
        drevaArray.push(new Obstacles(x, canvas.height-grid*2-340, grid*2, grid-20, -5*gameSpeed, 'drevo'));
    }
}
function level3(){
    //pruh 0
    for(let i =0; i<2;i++){
        let x=i*250;
        drevaArray.push(new Obstacles(x, canvas.height-grid*2-290, grid*2, grid-20, 5*gameSpeed, 'drevo'));
    }
}

//riadenie prekazok
function handleObstacles(){
    for(let i=0; i< carsArray.length; i++){
        carsArray[i].update();
        carsArray[i].draw();

    }
    for(let i=0; i< drevaArray.length; i++){
        drevaArray[i].update();
        drevaArray[i].draw();
    }
    for(let i =0; i < carsArray.length; i++){
        if(collision(frogger, carsArray[i])){
            console.log("zrazka");
            if(zvukStav){
            zvukZrazka.play();
            }
            frogger.fire();
            //hpDown();
        }
    }
    if(frogger.y < vodaZaciatok && frogger.y > 100){
        bayWatch=false;
        for(let i =0; i < drevaArray.length; i++){
            if(collision(frogger, drevaArray[i])){
                if(drevaArray[i].type=="korytnacka"){
                    console.log("som na korytnacke");
                    // if(zmiznutie==1){
                    //     myTimeout = setTimeout(potopSa(drevaArray[i]), 3000);
                    // }
                    
                    //const myTimeout = setTimeout(potopSa, 100);

                }
                //console.log("voda safe");
                frogger.x+=drevaArray[i].speed;
                bayWatch=true;
                if(this.x < canvas.width - this.width||this.x > this.width){
                    bayWatch=false;
                }
                
            }
        }
        if(bayWatch==false){
            zvukPotopenie.play();
            frogger.fire();
        }    
    }
}
//sthnutie zivota
function hpDown(){
    frogger.lives--;
    srdieckaWidth[frogger.lives]=0;
    score-=50;
    frogger.reset();
}
//detekcia kolizie
function collision(first, second){
    return!(
        first.x > second.x + second.width ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height-10 ||
        first.y + first.height-10 < second.y
    );
}
//funkcia na kontrolu ci sa hrac nachadza na vzhernej pozicii
function victory(vstup){
    if(frogger.y < 80){
        console.log("victory");
        score+=250;
        level++;
        if(level==1){
            mapa1.src = 'Assets/Mapy/lvl2.png';
            level2();
            vodaZaciatok=305;
        }
        else if(level==2){
            mapa1.src = 'Assets/Mapy/lvl3.png';
            level3();
            vodaZaciatok=390;
        }
        else{
            score+=500;
            youWonValue=1;
        }
        frogger.reset();
    }
}
function replay(){
    console.log("replay");
    mapa1.src = 'Assets/Mapy/lvl1.png';
    level=0;
    vodaZaciatok=200;
    bayWatch= true;
    xOd=0;
    xDo=150;
    smerTvare=0;
    gameOverValue=0;
    youWonValue=0;
    carsArray=[];
    drevaArray=[];
    frogger= new Frogger();
    initObstacles();
    lbName=nameInput.value;
	if(lbName!=''){
		localStorage.setItem('score'+cookieSize, score);
		localStorage.setItem('player'+cookieSize, lbName);
		cookieSize++;
		localStorage.setItem('socreSize', cookieSize);
        leaderArr.push([lbName, score]);
	}
    score=0;
    lbName = '';
    nameInput.value='';
    srdieckaX = [5, 30, 55];
	srdieckaY = [25, 25, 25];
	srdieckaWidth = [25, 25, 25];
	srdieckaHeight = [25, 25, 25];
    frogger.subscribe(hpDown);
    if(replayValue==true)
        main();
}