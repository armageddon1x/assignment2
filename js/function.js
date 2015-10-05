//Javascript functions

//first function
function prism_volume(length, width, height){
	var volume=length*width*height;
	return volume;
};

console.log(prism_volume(3,4,5));
console.log(prism_volume(5,10,20));

//second function
function message(name, age){
	return "Hello "+name+", you are "+age+" years old.";
};


console.log(message("Vinicio", 26));
console.log(message("Jessica", 22));

//third function
function madlibs(noun, verb, adjective){
	return "I was standing on the "+noun+", but the "+noun+" broke and I "+verb+
" all the way into the "+adjective+" wall!"
};

console.log(madlibs("fish", "tripped", "hardened"));
console.log(madlibs("box", "climbed", "nonexistent"));