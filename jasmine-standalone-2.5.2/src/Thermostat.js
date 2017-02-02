function Thermostat () {
  this._degrees = 20;
};

Thermostat.prototype.degrees = function(degrees) {
  return this._degrees = degrees || this._degrees
};

Thermostat.prototype.up = function(degrees) {
  return this.degrees(this.degrees() + degrees)
};
