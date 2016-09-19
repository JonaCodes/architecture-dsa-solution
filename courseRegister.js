//array of students, each has 'prev courses' array
//design system to register them to appropriate classes based on:
	//what they need to graduate
	//what they've taken (pre-reqs)
	//optional: 
		//availability of classroom (say, max 14 students)
		//must have passed class to be enrolled
/* 

Current student status
============================================
student ||		prevCourses									||
==========================================||
Erika   ||    MTH 101, MTH 102, ENG 100		||
------------------------------------------||
Gali		||		ENG 100, ENG 110, BIO 200		||
------------------------------------------||
Reut		||		BIO 200											||
============================================

Desired result
============================================
course  ||	students											||
==========================================||
MTH 101 ||  Gali, Reut										||
------------------------------------------||
MTH 102	||	Gali, Reut										||
------------------------------------------||
ENG 100	||	Reut													||
------------------------------------------||
ENG 110	||	Erika, Reut										||
------------------------------------------||
BIO 200	||	Erika													||
------------------------------------------||
BIO 300	||	Erika, Gali, Reut							||
============================================
*/


//My code
function hasTaken(num){
	if(num > -1){return true}; return false
}

var Student = function(name, prevCourses){
	this.name = name
	this.MTH101 = hasTaken(prevCourses.indexOf("MTH 101"))
	this.MTH102 = hasTaken(prevCourses.indexOf("MTH 102"))
	this.ENG100 = hasTaken(prevCourses.indexOf("ENG 100"))
	this.ENG110 = hasTaken(prevCourses.indexOf("ENG 110"))
	this.BIO200 = hasTaken(prevCourses.indexOf("BIO 200"))
	this.BIO300 = hasTaken(prevCourses.indexOf("BIO 300"))
}

var erika = new Student("Erika", ["MTH 101", "MTH 102", "ENG 100"])
var gali = new Student("Gali", ["ENG 100", "ENG 110", "BIO 200"])
var reut = new Student("Reut", ["BIO 200"]) 
var students = [erika, gali, reut]

var classes = {
	MTH101Students: [],
	MTH102Students: [],
	ENG100Students: [],
	ENG110Students: [],
	BIO200Students: [],
	BIO300Students: []
}

for(s in students){
	var student = students[s]

	for(course in student){
		if(!student[course]){
			classes[course + "Students"].push(student.name)
			return
		}
	}
}

//console.log(classes)




