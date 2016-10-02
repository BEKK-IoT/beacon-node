# beacon-node

This is a node-project to get you started working with beacons. 
It comes with two library dependencies: Firebase and Beacon. 
Beacon is a forked node library from [Bleacon](https://github.com/sandeepmistry/node-bleacon).
We have replaced the [estimote specs](https://github.com/Estimote/estimote-specs).
You know firebase from the last workshop.

## Setup

`git clone `
`npm install`

## Firebase

## Beacon API

```javascript
import { Beacon } from 'beacon';
```

### Start advertising

"Create" an iBeacon

```javascript
var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0';
var major = 0; // 0 - 65535
var minor = 0; // 0 - 65535
var measuredPower = -59; // -128 - 127 (measured RSSI at 1 meter)

Beacon.startAdvertising(uuid, major, minor, measuredPower);
```

### Stop advertising

Stop your iBeacon

```javascript
Beacon.stopAdvertising();
```

### Start scanning

```javascript
var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0';
var major = 0; // 0 - 65535
var minor = 0; // 0 - 65535

Beacon.startScanning([uuid], [major], [minor]);
```

Examples

```javascript
Beacon.startScanning(); // scan for any beacons

Beacon.startScanning(uuid); // scan for beacons with a particular uuid

Beacon.startScanning(uuid, major); // scan for beacons with a particular uuid and major

Beacon.startScanning(uuid, major, minor); // scan for beacons with a particular uuid. major, and minor
```

### Stop scanning

```javascript
Beacon.stopScanning();
```

### Events

```javascript
Bleacon.on('discover', function(bleacon) {
    // ...
});
```

```bleacon``` properties:

 * uuid
   * advertised uuid
 * major
   * advertised major
 * minor
   * advertised minor
 * measuredPower
   * advertised measured RSSI at 1 meter away
 * rssi
   * current RSSI
 * accuracy
   * +/- meters, based on measuredPower and RSSI
 * proximity
   * current proximity ('unknown', 'immediate', 'near', or 'far')

```javascript
Bleacon.on('telemetrydata', function(telemetrydata) {
    // ...
});
```

```telemetrydata``` properties

Due limited size on package, telemetry data is seperated in two packages.

Package A:

 * shortIdentifier 
   * The short identifier of the beacons
 * protocolVersion
   * protocol version of service, our beacons use protocol 1
 * acceleration
   * acceleration of the beacon
 * isMoving 
   * bool
 * motionStateDuration 
   * not supported for out beacons
 * gpio
    * status on state on pins: high or low
 * errors
    * clock or firmware errors
    
Package B:

 * shortIdentifier 
   * The short identifier of the beacons
 * protocolVersion
   * protocol version of service, our beacons use protocol 1
 * magneticField
   * ?
 * ambientLightLevel 
   * ambient light in the room
 * temperature 
   * temoerature in the room
 * uptime
    * ?
 * batteryVoltage
    * ?
 * batteryLevel
    * status on state on pins: high or low
 * errors
    * clock or firmware errors

