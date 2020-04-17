class person {
	constructor(name, surname, gender, date) {
		this.name = name;
		this.surname = surname;
		this.gender = gender;
		this.date = date;
	}
}
var human = new person('Leonid', 'Matiko', 'M', '12/3/1973');
var code = "";

_surname = human.surname.replace(/[^BCDFGHJKLMNPQRSTVWXYZ]/gi, "");
_surname += human.surname.replace(/[^AEIOU]/gi, "");
_surname += "XXX";
_surname = _surname.substr(0, 3);
code += _surname.toUpperCase();


_name = human.name.replace(/[^BCDFGHJKLMNPQRSTVWXYZ]/gi, "");
_name += "XXX";
_name = _name.substr(0, 3);
code += _name.toUpperCase();

const MONTH= { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H", 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };

valid = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;
arr = human.date.match(valid);
day = arr[1];
month = arr[3];
year = arr[4];

code += year.substr(-2);

code += MONTH[month];

if (human.gender == 'M') {
	day_of_birth = day;
	if (day_of_birth < 10) {
		code += '0';
		code += day_of_birth;
	}
	else {
		code += day_of_birth;
	}
}
else {
	code += (parseInt(day) + 40);
}
