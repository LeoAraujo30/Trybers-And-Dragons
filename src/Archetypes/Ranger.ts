import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static count = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger.count += 1;
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.count;
  }
}