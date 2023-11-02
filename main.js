var image1 = document.querySelector("#image1");
var image2 = document.querySelector("#image2");
var image3 = document.querySelector("#image3");

var image4 = document.querySelector("#image4");
var image5 = document.querySelector("#image5");
var image6 = document.querySelector("#image6");

var image7 = document.querySelector("#image7");
var image8 = document.querySelector("#image8");
var image9 = document.querySelector("#image9");

var nTries = 0;
var lImage1 = false;
var lImage2 = false;
var lImage3 = false;
var lImage4 = false;
var lImage5 = false;
var lImage6 = false;
var lImage7 = false;
var lImage8 = false;
var lImage9 = false;

var resetPerformed = false;
var enableScore1 = true;
var currentPlayer = 1;

var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
var round = document.querySelector("#round");
var nScore1 = 0;
var nScore2 = 0;
var ground = 1;

var current = document.querySelector("#current");
var modal = document.getElementById("modal");
var confirmBtn = document.getElementById("confirmChoice");
var playerChoiceInput = document.getElementById("playerChoice");

current.innerHTML = "1";


modal.style.display = "flex";

confirmBtn.onclick = function() {
  var playerChoice = parseInt(playerChoiceInput.value);
  if (playerChoice < 1 || playerChoice > 9 || isNaN(playerChoice)) {
    alert("Invalid input. Please enter a number between 1 and 9.");
  } else {
    nCorrect = playerChoice;
    modal.style.display = "none";
  }
}

function switchTurn() {
    currentPlayer = currentPlayer === 1 ? 1 : 1;
    round.innerHTML = ground + " - Player " + currentPlayer + " will guess";
}

image1.onclick = function() {
    if (lImage1 == true)
        return;

    if (nCorrect == 1) {
        image1.src = "tre.gif";
        alert("You found the treasure");
        nScore2++;
        score2.innerHTML = nScore2;
        
		if (!enableScore1) {
            alert("You found the treasure");
            nScore1++;
            score1.innerHTML = nScore1;
            nScore2--;
            score2.innerHTML = nScore2;
        }

        window.setTimeout(function() {
            rounds();
            Reset();
            switchTurn();
        }, 3000);
    } else {
        image1.src = "wro.gif";
        nTries++;
            if (nTries == 3) {
                ShowCorrect()
                alert("Another player steal your point for not guessing right");
                nScore1++;
                score1.innerHTML = nScore1;
                
				if (!enableScore1) {
					alert("Another player steal your point for not guessing right");
                    nScore2++;
                    score2.innerHTML = nScore2;
                    nScore1--;
                    score1.innerHTML = nScore1;
        }

        window.setTimeout(function() {
            rounds();
            Reset();
            switchTurn();
        }, 3000);
            } else {
                alert("Wrong guess! " + (3 - nTries) + " more tries.");
                lImage1 = true;
                
            }
    }
}

image2.onclick = function() {
    if (lImage2 == true)
        return;

    if (nCorrect == 2) {
        image2.src = "tre.gif";
        alert("You found the treasure");
        nScore2++;
        score2.innerHTML = nScore2;
        
		if (!enableScore1) {
            alert("You found the treasure");
            nScore1++;
            score1.innerHTML = nScore1;
            nScore2--;
            score2.innerHTML = nScore2;
        }

        window.setTimeout(function() {
            rounds();
            Reset();
            switchTurn();
        }, 3000);
    } else {
        image2.src = "wro.gif";
        nTries++;
            if (nTries == 3) {
                ShowCorrect()
                alert("Another player steal your point for not guessing right");
                nScore1++;
                score1.innerHTML = nScore1;
                
				if (!enableScore1) {
					alert("Another player steal your point for not guessing right");
                    nScore2++;
                    score2.innerHTML = nScore2;
                    nScore1--;
                    score1.innerHTML = nScore1;
        }

        window.setTimeout(function() {
            rounds();
            Reset();
            switchTurn();
        }, 3000);
            } else {
                alert("Wrong guess! " + (3 - nTries) + " more tries.");
                lImage2 = true;
                
            }
    }
}

image3.onclick = function() {
    if (lImage3 == true)
        return;

    if (nCorrect == 3) {
        image3.src = "tre.gif";
        alert("You found the treasure");
        nScore2++;
        score2.innerHTML = nScore2;
        
		if (!enableScore1) {
            alert("You found the treasure");
            nScore1++;
            score1.innerHTML = nScore1;
            nScore2--;
            score2.innerHTML = nScore2;
        }

        window.setTimeout(function() {
            rounds();
            Reset();
            switchTurn();
        }, 3000);
    } else {
        image3.src = "wro.gif";
        nTries++;
            if (nTries == 3) {
                ShowCorrect()
                alert("Another player steal your point for not guessing right");
                nScore1++;
                score1.innerHTML = nScore1;
                
				if (!enableScore1) {
					alert("Another player steal your point for not guessing right");
                    nScore2++;
                    score2.innerHTML = nScore2;
                    nScore1--;
                    score1.innerHTML = nScore1;
        }

        window.setTimeout(function() {
            rounds();
            Reset();
            switchTurn();
        }, 3000);
            } else {
                alert("Wrong guess! " + (3 - nTries) + " more tries.");
                lImage3 = true;
                
            }
    }
}

image4.onclick = function() {
    if (lImage4 == true)
        return;

    if (nCorrect == 4) {
        image4.src = "tre.gif";
        alert("You found the treasure");
        nScore2++;
        score2.innerHTML = nScore2;
        
		if (!enableScore1) {
            alert("You found the treasure");
            nScore1++;
            score1.innerHTML = nScore1;
            nScore2--;
            score2.innerHTML = nScore2;
        }

        window.setTimeout(function() {
            rounds();
            Reset();
            switchTurn();
        }, 3000);
    } else {
        image4.src = "wro.gif";
        nTries++;
            if (nTries == 3) {
                ShowCorrect()
                alert("Another player steal your point for not guessing right");
                nScore1++;
                score1.innerHTML = nScore1;
                
				if (!enableScore1) {
					alert("Another player steal your point for not guessing right");
                    nScore2++;
                    score2.innerHTML = nScore2;
                    nScore1--;
                    score1.innerHTML = nScore1;
        }

        window.setTimeout(function() {
            rounds();
            Reset();
            switchTurn();
        }, 3000);
            } else {
                alert("Wrong guess! " + (3 - nTries) + " more tries.");
                lImage4 = true;
                
            }
    }
}

image5.onclick = function() {
    if (lImage5 == true)
        return;

    if (nCorrect == 5) {
        image5.src = "tre.gif";
        alert("You found the treasure");
        nScore2++;
        score2.innerHTML = nScore2;
        
		if (!enableScore1) {
            alert("You found the treasure");
            nScore1++;
            score1.innerHTML = nScore1;
            nScore2--;
            score2.innerHTML = nScore2;
        }

        window.setTimeout(function() {
            rounds();
            Reset();
            switchTurn();
        }, 3000);
    } else {
        image5.src = "wro.gif";
        nTries++;
            if (nTries == 3) {
                ShowCorrect()
                alert("Another player steal your point for not guessing right");
                nScore1++;
                score1.innerHTML = nScore1;
                
				if (!enableScore1) {
					alert("Another player steal your point for not guessing right");
                    nScore2++;
                    score2.innerHTML = nScore2;
                    nScore1--;
                    score1.innerHTML = nScore1;
        }

        window.setTimeout(function() {
            rounds();
            Reset();
            switchTurn();
        }, 3000);
            } else {
                alert("Wrong guess! " + (3 - nTries) + " more tries.");
                lImage5 = true;
                
            }
    }
}

image6.onclick = function() {
    if (lImage6 == true)
        return;

    if (nCorrect == 6) {
        image6.src = "tre.gif";
        alert("You found the treasure");
        nScore2++;
        score2.innerHTML = nScore2;
        
		if (!enableScore1) {
            alert("You found the treasure");
            nScore1++;
            score1.innerHTML = nScore1;
            nScore2--;
            score2.innerHTML = nScore2;
        }

        window.setTimeout(function() {
            rounds();
            Reset();
            switchTurn();
        }, 3000);
    } else {
        image6.src = "wro.gif";
        nTries++;
            if (nTries == 3) {
                ShowCorrect()
                alert("Another player steal your point for not guessing right");
                nScore1++;
                score1.innerHTML = nScore1;
				if (!enableScore1) {
					alert("Another player steal your point for not guessing right");
                    nScore2++;
                    score2.innerHTML = nScore2;
                    nScore1--;
                    score1.innerHTML = nScore1;
        }

        window.setTimeout(function() {
            rounds();
            Reset();
            switchTurn();
        }, 3000);
            } else {
                alert("Wrong guess! " + (3 - nTries) + " more tries.");
                lImage6 = true;
                
            }
    }
}


image7.onclick = function() {
    if (lImage7 == true)
        return;

    if (nCorrect == 7) {
        image7.src = "tre.gif";
        alert("You found the treasure");
        nScore2++;
        score2.innerHTML = nScore2;
        
		if (!enableScore1) {
            alert("You found the treasure");
            nScore1++;
            score1.innerHTML = nScore1;
            nScore2--;
            score2.innerHTML = nScore2;
        }

        window.setTimeout(function() {
            rounds();
            Reset();
            switchTurn();
        }, 3000);
    } else {
        image7.src = "wro.gif";
        nTries++;
            if (nTries == 3) {
                ShowCorrect()
                alert("Another player steal your point for not guessing right");
                nScore1++;
                score1.innerHTML = nScore1;
                
				if (!enableScore1) {
					alert("Another player steal your point for not guessing right");
                    nScore2++;
                    score2.innerHTML = nScore2;
                    nScore1--;
                    score1.innerHTML = nScore1;
        }

        window.setTimeout(function() {
            rounds();
            Reset();
            switchTurn();
        }, 3000);
            } else {
                alert("Wrong guess! " + (3 - nTries) + " more tries.");
                lImage7 = true;
                
            }
    }
}


image8.onclick = function() {
    if (lImage8 == true)
        return;

    if (nCorrect == 8) {
        image8.src = "tre.gif";
        alert("You found the treasure");
        nScore2++;
        score2.innerHTML = nScore2;
        
		if (!enableScore1) {
            alert("You found the treasure");
            nScore1++;
            score1.innerHTML = nScore1;
            nScore2--;
            score2.innerHTML = nScore2;
        }

        window.setTimeout(function() {
            rounds();
            Reset();
            switchTurn();
        }, 3000);
    } else {
        image8.src = "wro.gif";
        nTries++;
            if (nTries == 3) {
                ShowCorrect()
                alert("Another player steal your point for not guessing right");
                nScore1++;
                score1.innerHTML = nScore1;
                
				if (!enableScore1) {
					alert("Another player steal your point for not guessing right");
                    nScore2++;
                    score2.innerHTML = nScore2;
                    nScore1--;
                    score1.innerHTML = nScore1;
        }

        window.setTimeout(function() {
            rounds();
            Reset();
            switchTurn();
        }, 3000);
            } else {
                alert("Wrong guess! " + (3 - nTries) + " more tries.");
                lImage8 = true;
                
            }
    }
}


image9.onclick = function() {
    if (lImage9 == true)
        return;

    if (nCorrect == 9) {
        image9.src = "tre.gif";
        alert("You found the treasure");
        nScore2++;
        score2.innerHTML = nScore2;
        
		if (!enableScore1) {
            alert("You found the treasure");
            nScore1++;
            score1.innerHTML = nScore1;
            nScore2--;
            score2.innerHTML = nScore2;
        }

        window.setTimeout(function() {
            rounds();
            Reset();
            switchTurn();
        }, 3000);
    } else {
        image9.src = "wro.gif";
        nTries++;
            if (nTries == 3) {
                ShowCorrect()
                alert("Another player steal your point for not guessing right");
                nScore1++;
                score1.innerHTML = nScore1;
                
				if (!enableScore1) {
					alert("Another player steal your point for not guessing right");
                    nScore2++;
                    score2.innerHTML = nScore2;
                    nScore1--;
                    score1.innerHTML = nScore1;
        }

        window.setTimeout(function() {
            rounds();
            Reset();
            switchTurn();
        }, 300);
            } else {
                alert("Wrong guess! " + (3 - nTries) + " more tries.");
                lImage9 = true;
                
            }
    }
}

function ShowCorrect() {
		
	if ( nCorrect == 1 ) {
		image1.src = "tre.gif";
	}
	else if ( nCorrect == 2 ) {
		image2.src = "tre.gif";
	}
	else if ( nCorrect == 3 ) {
		image3.src = "tre.gif";
	}
	else if ( nCorrect == 4 ) {
		image4.src = "tre.gif";
	}
	else if ( nCorrect == 5 ) {
		image5.src = "tre.gif";
	}
	else if ( nCorrect == 6 ) {
		image6.src = "tre.gif";
	}
	else if ( nCorrect == 7 ) {
		image7.src = "tre.gif";
	}
	else if ( nCorrect == 8 ) {
		image8.src = "tre.gif";
	}
	else if ( nCorrect == 9 ) {
		image9.src = "tre.gif";
	}
	
}

function Reset() {
    if (resetPerformed) {
        return;
    }

    ground++
    round.innerHTML = ground;
    resetPerformed = true;
    
    current.innerHTML = "2";

var delayTime = 1000;
function showModalWithDelay() {

  modal.style.display = "flex";
}

setTimeout(showModalWithDelay, delayTime);

confirmBtn.onclick = function() {
  var playerChoice = parseInt(playerChoiceInput.value);
  if (playerChoice < 1 || playerChoice > 9 || isNaN(playerChoice)) {
    alert("Invalid input. Please enter a number between 1 and 9.");
  } else {
    nCorrect = playerChoice;
    modal.style.display = "none";
  }
}

    image1.src = "1.png";
    image2.src = "2.png";
    image3.src = "3.png";
    image4.src = "4.png";
    image5.src = "5.png";
    image6.src = "6.png";
    image7.src = "7.png";
    image8.src = "8.png";
    image9.src = "9.png";

    lImage1 = false;
    lImage2 = false;
    lImage3 = false;
    lImage4 = false;
    lImage5 = false;
    lImage6 = false;
    lImage7 = false;
    lImage8 = false;
    lImage9 = false;

    nTries = 0;
	enableScore1 = false;	

}

var nextButton = document.querySelector("#next");

nextButton.addEventListener("click", function(event) {
    event.preventDefault();
    if (ground <= 5) {
        rerunProgram();
        round.innerHTML = " 3 - Player 2 will guess";
    }
    else if (ground === 4) {
        if (nScore1 > nScore2) {
          alert("Game is Over! Player 1 won");
        } else if (nScore2 > nScore1) {
          alert("Game is Over! Player 2 won");
        } else {
          alert("Game is Over! It's a tie");
        }
        location.reload();
      }
    
  });

function rerunProgram() {

round.innerHTML = "Round: 3 - Player 2 will guess";
current.innerHTML = "1";
resetPerformed = false;

modal.style.display = "flex";

confirmBtn.onclick = function() {
  var playerChoice = parseInt(playerChoiceInput.value);
  if (playerChoice < 1 || playerChoice > 9 || isNaN(playerChoice)) {
    alert("Invalid input. Please enter a number between 1 and 9.");
  } else {
    nCorrect = playerChoice;
    ground++

    modal.style.display = "none";

  }
}
image1.src = "1.png";
image2.src = "2.png";
image3.src = "3.png";
image4.src = "4.png";
image5.src = "5.png";
image6.src = "6.png";
image7.src = "7.png";
image8.src = "8.png";
image9.src = "9.png";

lImage1 = false;
lImage2 = false;
lImage3 = false;
lImage4 = false;
lImage5 = false;
lImage6 = false;
lImage7 = false;
lImage8 = false;
lImage9 = false;

nTries = 0;
enableScore1 = true;
}

function rounds() {
    if (ground === 4) {
      if (nScore1 > nScore2) {
        alert("Game is Over! Player 1 won with " + nScore1 + " points");
      } else if (nScore2 > nScore1) {
        alert("Game is Over! Player 2 won with " + nScore2 + " points");
      } else {
        alert("Game is Over! It's a tie");
      }
  
      var reloadConfirmation = confirm("Do you want to restart the game?");
      if (reloadConfirmation) {
        location.reload();
      }
    }
  }
