import Race from './Race';

export default class Orc extends Race {
  private _count: number;
  private _maxLifePoints: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._count = 0;
    this._maxLifePoints = 74;
    // this.createdRacesInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  createdRacesInstances(): number {
    this._count += 1;
    return this._count;
  }
}