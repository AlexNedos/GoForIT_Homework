
function human() {
	this.name = 'Jack';
	this.age = 22;
	this.gender = 'male';
	this.height = 183;
	this.weigt = 75
};

function student() {
	this.study = 'University';
	this.grant = 900;
	this.watchTV = function() {
		console.log('student watch TV');
	}
};

student.prototype = new human();
var newstudent = new student;
console.log('newstudent', newstudent);
newstudent.watchTV();	


function worker() {
	this.job = 'CD Projekt RED';
	this.money = 3000;
	this.work = function(){
		console.log('worker working');
	}
};

worker.prototype = new human();
var newworker = new worker;
console.log('newworker', newworker);
newworker.work();	
