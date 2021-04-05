function Place(name, location, landmarks, season, fact) {
  this.name = name;
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.fact = fact;
}

Place.prototype.display()

// let place1 = new Place("Milan", "Italy", ["The Duomo", "San Siro", "La Scala"], "Winter", "Has the most skyscrapers in Italy!");

let place2 = new Place("Sinaloa", "Mexico", ["Adrian's gma's house", "Malecon"], "Summer", "Mazatlan has the longest Boulevard in Mexico.");

// let place3 = new Place("Squamish", "Canada", ["The Chief", "Brohm Lake"], "Summer", "Squamish has some of the best climbing in North America");







$(document).ready(function() {
  $("#places").submit(function(event) {
    event.preventDefault();
    const inputName = $("#name").val();
    const inputLocation = $("#location").val();
    const inputLandmarks = $("#landmarks").val();
    const inputSeason = $("#season").val();
    const inputFact = $("#fact").val();
    let newPlace = new Place(inputName, inputLocation, inputLandmarks, inputSeason, inputFact);
console.log(newPlace);
    // $(".new-place").append("<div>" + "<ul>" + "<li>" + inputName + "<li>" + inputLocation + "<li>" + inputLandmarks + "<li>" + inputSeason + "<li>" + inputFact)
    //$(".new-place").append("<div>" + "<ul>" + "<li>" + Object.values(newPlace));
      newPlace.forEach(element => {
        $(".new-place").append("<li>" + element + "</li>")
      });
  });
});