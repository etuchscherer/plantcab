import Bays from '@/config/bays.json';
import { info } from '@/services/logging';

const { equipment: equipmentCollection } = Bays;
const label = 'bootstrap';

const loadEquipment = () => {

  info('loading equipment', label);

  equipmentCollection.forEach(equipment => {

    info('eq :: ' + JSON.stringify(equipment), label);
  });
};

export default loadEquipment;