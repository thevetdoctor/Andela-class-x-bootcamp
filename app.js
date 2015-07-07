var naijaArtists = ["Tuface","9ice","Timaya","Olamide"];
Array.protoype.trending = function() {
	for (i = 0; i < this.length; i++)
	console.log([] + " is trending at the moment in Naija!");
};
naija.trending();

var church = [];
church.push("RCCG","Christ Embassy","Anglican Church","Catholic Church");

naijaArtists.concat(church);

