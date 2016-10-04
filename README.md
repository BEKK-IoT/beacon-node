

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

#### Discover

```javascript
Bleacon.on('discover', function(bleacon) {
    // ...
});
```
   
   
#### Telemetry data

```javascript
Bleacon.on('telemetrydata', function(telemetrydata) {
    // ...
});
```


