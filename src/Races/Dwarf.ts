import Race from './Race';

export default class Dwarf extends Race {
  private _count: number;
  constructor(name: string, dexterity: number, private _maxLifePoints = 80) {
    super(name, dexterity);
    this._count = 0;
    this.createdRacesInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  createdRacesInstances(): number {
    this._count += 1;
    return this._count;
  }
}