	var width = canvas.getAttribute('width');
	var height = canvas.getAttribute('height');
	var mouseX;
	var mouseY;
	var bgImage = new Image();
	var playImage = new Image();
	var instructImage = new Image();
	var settingsImage = new Image();
	
    var instrukcie = new Image();
    instrukcie.src = "Assets/Okna/instrukcie.png";

    var leaderBoard = new Image();
    leaderBoard.src = "Assets/Okna/leaderboards.png";

    var returnButton = new Image();
    returnButton.src = "Assets/Buttons/return.png";

    const musicButton= new Image();
    musicButton.src = 'Assets/Buttons/icons8-music-record-48.png';

    const soundButton= new Image();
    soundButton.src = 'Assets/Buttons/icons8-speaker-48.png';

	const retryButton= new Image();
    retryButton.src = 'Assets/Buttons/replayButton.png';

	const mainMenuButton= new Image();
    mainMenuButton.src = 'Assets/Buttons/mainMenuButton.png';

	const mainMenuBlackButton= new Image();
    mainMenuBlackButton.src = 'Assets/Buttons/mainMenuBlack.png';

	const pauseButton= new Image();
    pauseButton.src = 'Assets/Buttons/pasueButton.png';

	const pauseMenu= new Image();
    pauseMenu.src = 'Assets/Okna/pauseMenu.png';

	const restartButton= new Image();
    restartButton.src = 'Assets/Buttons/restartButton.png';

	const continueButton= new Image();
    continueButton.src = 'Assets/Buttons/continueButton.png';

	var backgroundY = 0;
	
	//0=play 1=instrukcie 2=leaderBoard 3=hudba 4=return instrukcii/leadrBoard 5=zvuky 6=endGame replay 7=endGame mainMenu 8=pauseButton 9=pauseMainMenu 10=pauseRestar 11=pauseContiniue
	var buttonX = [350, 350, 350, 530, 60, 565, 250, 250, 500, 230, 230, 230];
	var buttonY = [300, 400, 500, 10, 700, 10, 650, 700, 12, 430, 370, 350];
	var buttonWidth = [200, 200, 200, 160, 50, 0, 150,150, 28, 170, 175, 175];
	var buttonHeight = [75, 75, 75, 40, 25, 34, 25, 25, 30, 30, 30, 30];
	
	var frames = 30;
    var timerId = 0;
	var fadeId = 0;
	var time = 0.0;
    var hudbaStav=1;
    var zvukStav=0;
    
	bgImage.onload = function(){
		ctx.drawImage(bgImage, 0, backgroundY, 600, 750);
	};
	bgImage.src = "Assets/Okna/menucko.png";
	
	playImage.onload = function(){
		ctx.drawImage(playImage, buttonX[0], buttonY[0], buttonWidth[0], buttonHeight[0]);
	}
	playImage.src = "Assets/Buttons/play_button.png";
	instructImage.onload = function(){
		ctx.drawImage(instructImage, buttonX[1], buttonY[1], buttonWidth[1], buttonHeight[1]);
	}
	instructImage.src = "Assets/Buttons/inst_button.png";
	settingsImage.onload = function(){
		ctx.drawImage(settingsImage, buttonX[2], buttonY[2], buttonWidth[2], buttonHeight[2]);
	}
	settingsImage.src = "Assets/Buttons/leaderboards_button.png";

	canvas.addEventListener("mousemove", checkPos);
	canvas.addEventListener("mouseup", checkClick);
	
	function update() {
		clear();
		draw();  
	}
	function clear() {
		ctx.clearRect(0, 0, width, height);
	}
	function draw(){ 
		ctx.drawImage(bgImage, 0, backgroundY, 600, 750);
		ctx.drawImage(playImage, buttonX[0], buttonY[0], buttonWidth[0], buttonHeight[0]);
		ctx.drawImage(instructImage, buttonX[1], buttonY[1], buttonWidth[1], buttonHeight[1]);
        ctx.drawImage(settingsImage, buttonX[2], buttonY[2], buttonWidth[2], buttonHeight[2]);

	}
	function checkPos(mouseEvent){
		if(mouseEvent.pageX || mouseEvent.pageY == 0){
			mouseX = mouseEvent.pageX - this.offsetLeft;
			mouseY = mouseEvent.pageY - this.offsetTop;
		}else if(mouseEvent.offsetX || mouseEvent.offsetY == 0){
			mouseX = mouseEvent.offsetX;
			mouseY = mouseEvent.offsetY;
		}
		
	}
	//po kliknuti mysi
	function checkClick(mouseEvent){
			if(menuckoButtons==true){
				//play
				if(mouseY > buttonY[0] && mouseY < buttonY[0] + buttonHeight[0] && mouseX > buttonX[0] && mouseX < buttonX[0] + buttonWidth[0]){
                    console.log("button 1");
					//initObstacles();
                    music.play();
					zvukStav=1;
                    ctx.clearRect(0, 0, width, height);
					menuckoButtons=false;
                    main();
				}
				//instrukcie
                else if(mouseY > buttonY[1] && mouseY < buttonY[1] + buttonHeight[1] && mouseX > buttonX[1] && mouseX < buttonX[1] + buttonWidth[1]){
                    console.log("button 2");
					ctx.clearRect(0, 0, width, height);
                    ctx.drawImage(instrukcie ,0, 0, 600, 750);
					ctx.drawImage(returnButton, buttonX[4], buttonY[4], buttonWidth[4], buttonHeight[4]);
				}
				//leader board
                else if(mouseY > buttonY[2] && mouseY < buttonY[2] + buttonHeight[2] && mouseX > buttonX[2] && mouseX < buttonX[2] + buttonWidth[2]){
                    console.log("button 3");
					ctx.clearRect(0, 0, width, height);
                    ctx.drawImage(leaderBoard ,0, 0, 600, 750);
                    ctx.drawImage(returnButton, buttonX[4], buttonY[4], buttonWidth[4], buttonHeight[4]);
					leaderArr.sort(function(a,b) {
						return b[1]-a[1];
					});
					for(let i=0; i<10;i++){
						if(i==cookieSize)
							break;
						ctx.font = 'bold 25pt ArcadeClassic'
						ctx.fillText(i+1, 87, 325+i*40);
						ctx.fillText(leaderArr[i][0], 185, 325+i*40);
						ctx.fillText(leaderArr[i][1], 350, 325+i*40);
						
					}

				}
				//return
                else if(mouseY > buttonY[4] && mouseY < buttonY[4] + buttonHeight[4]&& mouseX > buttonX[4] && mouseX < buttonX[4] + buttonWidth[4]){
                    console.log("button inst return");
					ctx.clearRect(0, 0, width, height);
					draw();
				}
			}
			//hudba 
			if(mouseY > buttonY[3] && mouseY < buttonY[3] + buttonHeight[3] && mouseX > buttonX[3]+50 && mouseX < buttonX[3] +80){
				console.log("hudba");
				if(hudbaStav==1){
					music.pause();
					hudbaStav=0;
					musicButton.src = 'Assets/Buttons/MusicMuted.png';
				}
				else if(hudbaStav==0){
					music.play();
					hudbaStav=1;
					musicButton.src = 'Assets/Buttons/icons8-music-record-48.png';
				}
			}
            //zvuky
            else if(mouseY > buttonY[5] && mouseY < buttonY[5] + buttonHeight[5] && mouseX > buttonX[5]+50 && mouseX < buttonX[5] +80){
                console.log("hudba2");
                 if(zvukStav==1){  
                    zvukStav=0;
                    soundButton.src = 'Assets/Buttons/soundMuted.png';
                }
                else if(zvukStav==0){    
                    zvukStav=1;
                    soundButton.src = 'Assets/Buttons/icons8-speaker-48.png';
                   }
			}
			//replay
			else if(mouseY > buttonY[6] && mouseY < buttonY[6] + buttonHeight[6] && mouseX > buttonX[6] && mouseX < buttonX[6]+buttonWidth[6]){
				replayValue=true;
				replay();
				replayValue=false;
				nameInput.style.display = "none";
			}
			//main menu
			else if(mouseY > buttonY[7] && mouseY < buttonY[7] + buttonHeight[7] && mouseX > buttonX[7] && mouseX < buttonX[7]+buttonWidth[7]){
				replayValue=false;
				replay();
				menuckoButtons=true;
				update();
				nameInput.style.display = "none";
				clearInterval(timerId);
			}
			//pause
			else if(mouseY > buttonY[8] && mouseY < buttonY[8] + buttonHeight[8] && mouseX > buttonX[8]+50 && mouseX < buttonX[8]+buttonWidth[8]+46){
				console.log("pause")
				pauseValue=true;
				gameSpeed=0;
			}
			if(pauseValue==true){
				//pasue main menu
				if(mouseY > buttonY[9] && mouseY < buttonY[9] + buttonHeight[9] && mouseX > buttonX[9] && mouseX < buttonX[9]+buttonWidth[9]){
					console.log("pause")
					pauseValue=false;
					replayValue=false;
					menuckoButtons=true;
					gameSpeed=1;
					replay();
				}
				//pause restart
				// else if(mouseY > buttonY[10] && mouseY < buttonY[10] + buttonHeight[10] && mouseX > buttonX[10] && mouseX < buttonX[10]+buttonWidth[10]){
				// 	// console.log("restart")
				// 	// pauseValue=false;
				// 	// replayValue=true;
				// 	// gameSpeed=1;
				// 	// replay();
				// 	// replayValue=false;3
				// 	replayValue=true;
				// 	gameSpeed=1;
				// 	pauseValue=false;
				// 	replay();
				// 	replayValue=false;

				// }
				//pause continue
				else if(mouseY > buttonY[11] && mouseY < buttonY[11] + buttonHeight[11] && mouseX > buttonX[11] && mouseX < buttonX[11]+buttonWidth[11]){
					ctx.clearRect(0, 0, width, height);
					pauseValue=false;
					gameSpeed=1;
					
				}
			}
		}