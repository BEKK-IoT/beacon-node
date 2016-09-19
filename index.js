var Beacon = require('beacon');

//This is used to create a fake beacon
Beacon.startAdvertising('e2c56db5dffb48d2b060d0f5a71096e0', 0, 0, -59);

//This is to detect beacons in general
Beacon.on('discover', function(Beacon) {
  console.log('Beacon found: ' + JSON.stringify(Beacon));
});

//This is to detect more detailed data from the bigger beacons
Beacon.on('telemetrydata', function(telemetrydata){
	console.log('telemetrydata: ', telemetrydata);
});

//Here you can either scan for everything, or a specific ID
Beacon.startScanning(/*'e2c56db5dffb48d2b060d0f5a71096e0', 0, 0*/);
