function computerPlay() {
			let playOptions = ['rock', 'paper', 'scissors'];
			let chosenOption = playOptions[Math.floor(Math.random() * playOptions.length)];
			return chosenOption;
		} 

function singleRound(playerSelection, computerSelection) {
	// return [win / lose / draw, playerSelection, computerSelection]
			let result = '';
			if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock') {
				result = `win`
			} else if (playerSelection == 'rock' && computerSelection == 'rock' || playerSelection == 'paper' && computerSelection == 'paper' || playerSelection == 'scissors' && computerSelection == 'scissors') {
				result = `draw`
			} else {
				result = `lose`
			}
			return [result, playerSelection, computerSelection];
		} 

function makeMessageForSingleRound([result, playerSelection, computerSelection]) {
	let messege = ''
	if (result == 'win' || result == 'lose') {
		messege += `You ${result}! `;
	} else {
		messege += `Draw. `;
	}
	messege += `Your choice: ${playerSelection}. Computer choice: ${computerSelection}`;
	return messege; 
}

function clickButton() {
	// should proc function singleRound() with argument given at button;
}

console.log();

//document.addEventListener("click", function() {
//	let mess = makeMessageForSingleRound((singleRound(computerPlay(), computerPlay())))
//	document.getElementById("para_message").innerHTML = `${mess}`;
//})


let player_score = 0;
let computer_score = 0;
let draws = 0;

document.addEventListener("click", function() {
	if (player_score > 4) {
		let final_mess = `Congratz! You win!`
		window.alert(final_mess);
	} else if (computer_score > 4){
		let final_mess = `Game Over! Computer scored 5 before you!`
		window.alert(final_mess);
	}
}, false)




document.getElementById("rock_button").addEventListener("click", function() {
	let results = singleRound("rock", computerPlay())
	if (results[0] === 'win') {
		//add 1 to player score
		let player_score_display = document.querySelector('#player_score');
		player_score += 1;
		player_score_display.innerHTML = player_score;

		console.log('win')
	} else if (results[0] === 'lose') {
		//add 1 to computer score
		let computer_score_display = document.querySelector('#computer_score');
		computer_score += 1;
		computer_score_display.innerHTML = computer_score;

		console.log('lose')
	} else {
		// add 1 to draws.
		let draws_display = document.querySelector('#draws');
		draws += 1;
		draws_display.innerHTML = draws;
		console.log('draw')
	}
	let mess = makeMessageForSingleRound(results);
	document.getElementById("para_message").innerHTML = `${mess}`;
	

})


document.getElementById("paper_button").addEventListener("click", function() {
	let results = singleRound("paper", computerPlay())
	if (results[0] === 'win') {
		//add 1 to player score
		let player_score_display = document.querySelector('#player_score');
		player_score += 1;
		player_score_display.innerHTML = player_score;

		console.log('win')
	} else if (results[0] === 'lose') {
		//add 1 to computer score
		let computer_score_display = document.querySelector('#computer_score');
		computer_score += 1;
		computer_score_display.innerHTML = computer_score;

		console.log('lose')
	} else {
		// add 1 to draws.
		let draws_display = document.querySelector('#draws');
		draws += 1;
		draws_display.innerHTML = draws;
		console.log('draw')
	}
	let mess = makeMessageForSingleRound(results);
	document.getElementById("para_message").innerHTML = `${mess}`;
	

})


document.getElementById("scissors_button").addEventListener("click", function() {
	let results = singleRound("scissors", computerPlay())
	if (results[0] === 'win') {
		//add 1 to player score
		let player_score_display = document.querySelector('#player_score');
		player_score += 1;
		player_score_display.innerHTML = player_score;

		console.log('win')
	} else if (results[0] === 'lose') {
		//add 1 to computer score
		let computer_score_display = document.querySelector('#computer_score');
		computer_score += 1;
		computer_score_display.innerHTML = computer_score;

		console.log('lose')
	} else {
		// add 1 to draws.
		let draws_display = document.querySelector('#draws');
		draws += 1;
		draws_display.innerHTML = draws;
		console.log('draw')
	}
	let mess = makeMessageForSingleRound(results);
	document.getElementById("para_message").innerHTML = `${mess}`;
	

})


