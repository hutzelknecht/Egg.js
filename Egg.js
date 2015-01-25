/**
 * @class Egg
 * usage:
 * 
 * 		@example
 * 
 * 		var egg = new Egg();
 * 		egg.timePretty() // should return 06:38
 * 
 * 		egg.weight = 66;
 * 		egg.timePretty() // should return 07:14
 * 
 */
var Egg = function(){};

Egg.VERSION = 0.1;

(function(){
	var E = Egg.prototype;

	E.weight = 58; // Gewichtsklasse (s=50,m=58,l=68,xl=80)
	E.height = 300; // m üNN (default=300)
	E.tStart = 7; // temperature at start (default=7)
	E.tYolk = 72; // consistency of the yolk (sehr weich=62,wachsweich=72,eher hart=80)
	
	// boiling temperature
	E.tBoil = function(){ 
		return 100 - (parseFloat(this.height) / 285);
	};
	
	// cooking time (calculated)
	E.time = function(){ 
		if (!this.weight || !parseFloat(this.weight)) {
			console.warn("weight of the egg not valid:", this.weight);
		}
		if (typeof this.height != "number") {
			console.warn("height of the egg not valid:", this.height);
		}
		if (!this.tStart || !parseFloat(this.tStart)) {
			console.warn("start temperature of the egg not valid:", this.tStart);
		}
		if (!this.tYolk || !parseFloat(this.tYolk)) {	
			console.warn("temperature of the egg yolk not valid:", this.tYolk);
		}
		return 0.465 * Math.pow(this.weight, 2 / 3) * Math.log(0.76 * (this.tBoil() - this.tStart) / (this.tBoil() - this.tYolk));
	}; 
	
	// cooking time in minutes
	E.timeMin = function(){ 
		var time = this.time();
		return parseInt(time) || "00";
	};
	
	// cooking time in seconds
	E.timeSec = function(){ 
		var time = this.time();
		var timeMin = this.timeMin();
		return parseInt((time - timeMin) * 60) || "00";
	};
	
	// pretty time as in "00:00" (minutes:seconds)
	E.timePretty = function(){
		var padL = function (str) {
			str = "" + str;
			var pad = "00";
			return (pad.substring(0, pad.length - str.length) + str);
		}
		return padL(this.timeMin()) + ":" + padL(this.timeSec());
	}
})();
