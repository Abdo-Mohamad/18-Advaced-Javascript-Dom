//
function HouseKeeper(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;

  this.moveSuitcase = function () {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
  };
  this.cleaingRepertoire = this.cleaingRepertoire;
  this.clean = function ( ) {
    alert("Cleaing in the progress...");
  }

}

var houseKeeper1 = new HouseKeeper("Jane", 25, true, ["English", "Spanis"]);
