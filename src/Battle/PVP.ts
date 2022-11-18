import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private _p1: Fighter, private _p2: Fighter) {
    super(_p1);
  }

  fight(): number {
    let fighting = true;
    while (fighting) {
      this._p1.attack(this._p2);
      this._p2.attack(this._p1);
  
      if (this._p1.lifePoints === -1) {
        fighting = false;
        return -1;
      }
      if (this._p2.lifePoints === -1) {
        fighting = false;
        return 1;
      }
    }
    return 0;
  }
}