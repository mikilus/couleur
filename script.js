let changer = function(val){
	document.getElementsByTagName('body')[0].style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}
let timer = null;

function stop(){
	clearInterval(timer);
	timer = null;
};


function lancer() {
	if(timer != null){
		return;
	}
	timer = setInterval(() => {changer(true);},300);
};
