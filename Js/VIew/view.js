function main(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(mapa1 ,0, 0, 600, 800);
    ctx.drawImage(musicButton, buttonX[3], buttonY[3], 34, 34);
    ctx.drawImage(soundButton, buttonX[5], buttonY[5], 34, 34);
    ctx.drawImage(pauseButton, buttonX[8], buttonY[8], buttonWidth[8], buttonHeight[8]);
    ctx.font = "30px ArcadeClassic";
    ctx.fillText(score, 185, 50);
    if(cookieSize!=0){
        if(score<leaderArr[0][1])
        ctx.fillText(leaderArr[0][1], 350, 50);
    else
        ctx.fillText(score, 350, 50);
    }
    else
        ctx.fillText(score, 350, 50);
     
    for(let i=0; i<3 ;i++)
        ctx.drawImage(srdiecko , srdieckaX[i], srdieckaY[i], srdieckaWidth[i], srdieckaHeight[i]);
    handleObstacles();
    frogger.draw();
    if(pauseValue==false){
        frogger.update();
        victory(frogger);
    }
    else{
        ctx.drawImage(pauseMenu , 60, 225, 500, 250);
		ctx.drawImage(mainMenuBlackButton, buttonX[9], buttonY[9], buttonWidth[9], buttonHeight[9]);
		//ctx.drawImage(restartButton, buttonX[10], buttonY[10], buttonWidth[10], buttonHeight[10]);
		ctx.drawImage(continueButton, buttonX[11], buttonY[11], buttonWidth[11], buttonHeight[11]);
    }
    if(gameOverValue==0&&youWonValue==0){
    if(menuckoButtons==false){
        requestAnimationFrame(main);
    }
    else
        update();
    }
    else if(youWonValue==1){
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(youWon, 0, 0, 600, 760);
        zvukGameWon.play();
        nameInput.style.display = "inline-block";
        ctx.drawImage(retryButton, buttonX[6], buttonY[6], buttonWidth[6], buttonHeight[6]);
        ctx.drawImage(mainMenuButton, buttonX[7], buttonY[7], buttonWidth[7], buttonHeight[7]);
        ctx.font = "50px ArcadeClassic";
        ctx.fillText(score, 350, 570);
    }
    else{
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(gameOver, 0, 0, 600, 760)
        zvukGameOver.play();
        nameInput.style.display = "inline-block";
        ctx.drawImage(retryButton, buttonX[6], buttonY[6], buttonWidth[6], buttonHeight[6]);
        ctx.drawImage(mainMenuButton, buttonX[7], buttonY[7], buttonWidth[7], buttonHeight[7]);
        ctx.font = "50px ArcadeClassic";
        ctx.fillText(score, 350, 570);
    }
    fps++;
}

