import { firebase } from 'devices-core-firebase';
import { beacon } from 'beacon';
// var beacon = require('beacon')
const TEAM = 'my-awsome-team-name';
const fb = new firebase(TEAM);

//This is used to create a fake beacon
beacon.startAdvertising('e2c56db5dffb48d2b060d0f5a71096e0', 0, 0, -59);

//This is to detect beacons in general
beacon.on('discover', function(Beacon) {
  console.log('Beacon found: ' + JSON.stringify(Beacon));
});

//This is to detect more detailed data from the bigger beacons
beacon.on('telemetrydata', function(telemetrydata){
	console.log('telemetrydata: ', telemetrydata);
});

//Here you can either scan for everything, or a specific ID
beacon.startScanning(/*'e2c56db5dffb48d2b060d0f5a71096e0', 0, 0*/);
