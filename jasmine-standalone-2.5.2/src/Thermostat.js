function Thermostat () {
  this._degrees = 20;
  this._minTemperature = 10;
};

Thermostat.prototype.degrees = function(degrees) {
  if (degrees < this._minTemperature) { throw ('Cannot change temperature: Min temperature is ' + this._minTemperature ) };
  return this._degrees = degrees || this._degrees
};

Thermostat.prototype.up = function(degrees) {
  return this.degrees(this.degrees() + degrees)
};

Thermostat.prototype.down = function(degrees) {
  return this.degrees(this.degrees() - degrees)
};
