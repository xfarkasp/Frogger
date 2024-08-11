window.addEventListener('keydown', function(e){
    keys=[];
    keys[e.keyCode]=true;
    if(keys[37] || keys[38] || keys[39] || keys[40]){
        frogger.jump();
    }
});
window.addEventListener('keyup', function(e){
    delete keys[e.keyCode];
    frogger.moving = false;
    if(smerTvare==0){
        xOd=0;
        xDo=150;
    }
    else{
        xOd=550;
        xDo=150;
    }
});