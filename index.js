import { firebase } from 'devices-core-firebase';
import { beacon } from 'beacon';
const TEAM = 'RÆVSNÆRK';
const fb = new firebase(TEAM);

//Incorporated this library: https://github.com/sandeepmistry/node-bleacon

//This is used to create a fake beacon, with id, major, minor, measuredPower
beacon.startAdvertising('e2c56db5dffb48d2b060d0f5a71096e0', 0, 10, -59);

//This is to detect beacons in general
beacon.on('discover', function(Beacon) {    
  console.log('Beacon found: ' + JSON.stringify(Beacon));
});

//This is to detect more detailed data from the bigger beacons
beacon.on('telemetrydata', function(telemetrydata){
	console.log('telemetrydata: ', telemetrydata);
});

//Here you can either scan for everything, or a specific ID, and major and minor
beacon.startScanning(/*'e2c56db5dffb48d2b060d0f5a71096e0', 0, 0*/);
