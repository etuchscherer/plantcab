# Configuring

## Warning - TODO :
To alievate confusion with so many pieces are in motion. I'm going to hardcode data / and config in json files for the time being. Eventually this will be moved to redis.

## equipment.json

This file contains information about the hardware components being used in the cabinet.

## bays.json

A bay is defined as a single environment. A cabinet may have multiple bays, and each bay's environment _can_ be configured independently. ( Or possibly share configuration ).

Each bay contains a cluster of tubs. A cluster is a minimum of 1 tub.

We'll keep relevant metadata about the bay in `bay.meta`, and a collection of installed and configured equipment in `bay.equipment`, as well as a description of the cluster in `bay.cluster`.

```
bay: {
  meta: {
    name: 'Kitchen',
    description: 'herbs for the kitchen',
    climateControl: [
      true,
      {
        autoFanOn: 20,
        autoFanOff: 25,
        lightOn: 0600,
        lightOff: 2200
      }
    ]
  },
  cluster: [{
    name: "tub 1",
    description: "geneovese sweet basil",
    pods: 10,
  }],
  equipment: [
    // see section on bay.equipment
  ]
}
```

### bay.equipment

A collection of configured equipment for each bay. Remember, equipment configured here is for the environment, not the cluster, or pod.

API:

`equipment.equipmentId` numeric id of the corresponding equipment, from equipment.json.
`equipment.enabled` boolean, true if the equipment is enabled. Otherwise false.
`equipment.pin` numeric id of the physical GPIO pin.
`equipment.passive` boolean, true if the equipment needs to be activly controlled ( E.G. a light ).
`equipment.abstraction` the object we're going to use to abstract functionality.
`equipment.description` any useful meta that will help you out in 6 months.
