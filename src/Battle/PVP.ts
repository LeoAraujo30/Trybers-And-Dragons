import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private p1: Fighter, private p2: Fighter) {
    super(p1);
  }

  fight(): number {
    let result = 0;
    for (let i = 0; i === 0;) {
      this.p1.attack(this.p2);
      this.p2.attack(this.p1);
    
      if (this.p1.lifePoints === -1 || this.p2.lifePoints === -1) {
        i = 1;
        result = super.fight();
      }
    }
    return result;
  }
}