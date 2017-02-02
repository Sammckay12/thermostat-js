function Thermostat () {
  this._defaultTemperature = 20
  this._degrees = this._defaultTemperature;
  this._minTemperature = 10;
  this._powersaving = true;
  this._maxTemp = 25;
  this._maxTempWithPowerSavingTrue = 25;
  this._maxTempWithPowerSavingFalse = 32;
  this._energyUsageLowLowerThan = 18
  this._energyUsageMediumLowerThan  = 25
};

Thermostat.prototype.readTemperature = function(){
    return this._degrees
 };

Thermostat.prototype.changeTemperature = function(degrees) {
  errorMsg = 'Cannot change temperature: '
  if (degrees < this._minTemperature) { throw (errorMsg + 'Min temperature is ' + this._minTemperature ) };
  if (degrees > this._maxTemp) {
    throw (errorMsg + 'Max temp is ' + this._maxTemp + ' when power saving is ' +  this.getPowerSavingModeOnOrOff())
  };

  return this._degrees = degrees
};

Thermostat.prototype.up = function(degrees) {
  return this.changeTemperature(degrees + this.readTemperature())
};

Thermostat.prototype.down = function(degrees) {
  return this.changeTemperature( this.readTemperature() - degrees)
};

Thermostat.prototype.readPowerSavingMode = function () {
  return this._powersaving
};

Thermostat.prototype.changePowerSavingMode = function (bool) {
  this._maxTemp = bool ? this._maxTempWithPowerSavingTrue : this._maxTempWithPowerSavingFalse;
  return this._powersaving = bool
};


Thermostat.prototype.getPowerSavingModeOnOrOff = function () {
  return this._powersaving ? 'on' : 'off'
};

Thermostat.prototype.resetTemperature = function () {
  return this._degrees = this._defaultTemperature;
};

Thermostat.prototype.energyUsage = function () {
  if (this.readTemperature() < this._energyUsageLowLowerThan) {
    return 'low-usage'
  } else if (this.readTemperature() < this._energyUsageMediumLowerThan) {
    return 'medium-usage'
  } else {
    return 'high-usage'
  }
};
