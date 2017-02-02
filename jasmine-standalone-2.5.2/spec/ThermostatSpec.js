describe('thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('readTemperature()', function() {
    it('starts on 20 degrees' , function() {
      expect(thermostat.readTemperature()).toEqual(20);
    });
  });

  describe('changeTemperature(degrees)', function(){
    it('The minimum temperature is 10 degrees', function(){
      expect(function() {thermostat.changeTemperature(9)}).toThrow('Cannot change temperature: Min temperature is 10')
    });
  });

  describe('up(degrees)', function() {
    it('increases temperature by degrees' , function() {
      thermostat.up(5);
      expect(thermostat.readTemperature()).toEqual(25);
    });
  });

  describe('down(degrees)', function() {
    it('decreases temperature by degrees' , function() {
      thermostat.down(5);
      expect(thermostat.readTemperature()).toEqual(15);
    });
  });

  describe('power saving', function() {
    it('has a maximum temperature of 25 when power saving is on' , function() {
      // thermostat.up(5);
      // expect(thermostat.degrees()).toEqual(25);
    });
  });


 });
