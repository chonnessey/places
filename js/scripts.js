function Place(name, location, landmarks, season, fact) {
  this.name = name;
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.fact = fact;
}

let place1 = new Place("Milan", "Italy", ["The Duomo", "San Siro", "La Scala"], "Winter", "Has the most skyscrapers in Italy!");

let place2 = new Place("Sinaloa", "Mexico", ["Adrian's gma's house", "Malecon"], "Summer", "Mazatlan has the longest Boulevard in Mexico.");

let place3 = new Place("Squamish", "Canada", ["The Chief", "Brohm Lake"], "Summer", "Squamish has some of the best climbing in North America");
