import equipment from '@/config/equipment.json';
import Bays from '@/config/bays.json';

const { collection } = Bays;
const { data } = equipment;

// validate the bay configuration

// bays must be an array

Bays.forEach(config => {

  // instansiate a new bay
  bay = new Bay(config)
});

interface Meta {
  name: string,
  description: string,
  climateControl: []
}

interface Cluster {
  name: string,
  description: string,
  pods: number
}

interface Equipment {
  equipmentId: number,
  enabled: boolean,
  pin: number,
  passive: boolean,
  abstraction: string,
  description: string
}

interface ValidBay {
  meta: Meta
  cluster: Cluster,
  equipment: Equipment,
}