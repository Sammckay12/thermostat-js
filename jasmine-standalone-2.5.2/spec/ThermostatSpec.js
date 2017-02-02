describe('thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('degrees', function() {
    it('starts on 20 degrees' , function() {
      expect(thermostat.degrees()).toEqual(20);
    });
  });

  describe('up(degrees)', function() {
    it('increases temperature by degrees' , function() {
      thermostat.up(5);
      expect(thermostat.degrees()).toEqual(25);
    });
  });


 });
