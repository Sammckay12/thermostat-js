function Thermostat () {
  this._degrees = 20;
  this._minTemperature = 10;
};

Thermostat.prototype.readTemperature = function(){
    return this._degrees
 };

Thermostat.prototype.changeTemperature = function(degrees) {
  if (degrees < this._minTemperature) { throw ('Cannot change temperature: Min temperature is ' + this._minTemperature ) };
  return this._degrees = degrees
};

Thermostat.prototype.up = function(degrees) {
  return this.changeTemperature(degrees + this.readTemperature())
};

Thermostat.prototype.down = function(degrees) {
  return this.changeTemperature( this.readTemperature() - degrees)
};
