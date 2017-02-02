function Thermostat () {
  this._degrees = 20;
  this._minTemperature = 10;
  this.powersaving = true;
  this._maxTempWithPowerSavingTrue = 25;
  this._maxTempWithPowerSavingFalse = 32;

};

Thermostat.prototype.readTemperature = function(){
    return this._degrees
 };

Thermostat.prototype.changeTemperature = function(degrees) {
  errorMsg = 'Cannot change temperature: '
  if (degrees < this._minTemperature) { throw (errorMsg + 'Min temperature is ' + this._minTemperature ) };
  if (this.powersaving && degrees > this._maxTempWithPowerSavingTrue) {
    throw (errorMsg + 'Max temp is 25 when power saving is on' )
  }
  if (this.powersaving == false && degrees > this._maxTempWithPowerSavingFalse) {
    throw (errorMsg + 'Max temp is 32 when power saving is off' )
  }

  return this._degrees = degrees
};

Thermostat.prototype.up = function(degrees) {
  return this.changeTemperature(degrees + this.readTemperature())
};

Thermostat.prototype.down = function(degrees) {
  return this.changeTemperature( this.readTemperature() - degrees)
};
