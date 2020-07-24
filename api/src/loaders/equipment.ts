import Bays from '@/config/bays.json';
import { info } from '@/services/logging';
import Light from '@/objects/light';
import express from 'express';
import SystemManager from '@/services/systemManager';
import { dasherize } from 'ember-cli-string-utils';

const label = 'bootstrap';

const loadEquipment = (app: express.Application) => {

  Bays.forEach(bay => {
    const { equipment: equipmentCollection, meta } = bay;
    const { systemManager }: { systemManager: SystemManager} = app.locals;

    info('loading equipment', label);

    equipmentCollection.forEach(equipment => {
      const { abstraction, pin, isEnabled, name } = equipment;
      const key = `bay ${meta.id} gpio ${pin}`;
      let hardware;

      info(`${name} is enabled, adding to system manager.`, label);

      if (isEnabled) {
        if (abstraction === 'Light') {
          hardware = new Light(pin);
        }

        // add more abstraction types here
      }

      systemManager.set(dasherize(key), hardware);
    });

  });
};

export default loadEquipment;