/*
	search - if not there define
	tell definition
	show the list on certain letter
	add new - check if it is there

	1. add new + check if the word is there
	2. search and show definition
	3. search and add new
	4. show the list

	word: definition --> key: value

*/

"use strict";

var dictionary = {
	hello: "use this word to greet people",
	hungry: "when somebody wants to eat",
	apple: "fruit from apple tree"
}; //evrything will be stored here

function addNew(obj) { //adds new item to the dictionary
	var word = prompt("Please enter the word that you would like to add to the dictionary", "");
	if (obj[word]) {
		var nextStep = prompt("The word '" + word +"' is already in the dictionary.\nEnter '1' if you would like to see the definition.\nEnter '2' if you would like to change the definition");
		if (nextStep === "1") {
			viewDef(obj, word);
		} else{
			changeDef(obj, word);	
		};
	} else {
		var value = prompt("Enter the definition of the word '" + word + "'", "");
		return obj[word] = value;	
	};
}

function viewDef(obj, key) {
	if (key == null){
		var key = prompt("Definition of what word would you like to see?", "");
	};
	if (obj[key]){
		return console.log(obj[key]);
	} else {
		var value = prompt("Unfortunately '" + key + "' is not in the dictionary.\nPlease enter the definition of the word '" + key + "'", "");
		return obj[word] = value;
	};
}

function changeDef(obj, key){
	var newValue = prompt("What is the new definition?", "");
	return obj[key] = newValue;
}

function showList(obj){
	var userLetter = prompt("Enter the letter", "");
	var words = Object.keys(obj);
	var letterWords = words.filter(function compareLetters(word){
		return word.charAt(0) === userLetter;
	});
	return letterWords;
}


