describe('thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('degrees', function() {
    it('starts on 20 degrees' , function() {
      expect(thermostat.degrees()).toEqual(20);
    });
    it('The minimum temperature is 10 degrees', function(){
      expect(function() {thermostat.degrees(9)}).toThrow('Cannot change temperature: Min temperature is 10')
    });
  });

  describe('up(degrees)', function() {
    it('increases temperature by degrees' , function() {
      thermostat.up(5);
      expect(thermostat.degrees()).toEqual(25);
    });
  });

  describe('down(degrees)', function() {
    it('decreases temperature by degrees' , function() {
      thermostat.down(5);
      expect(thermostat.degrees()).toEqual(15);
    });


  });


 });
