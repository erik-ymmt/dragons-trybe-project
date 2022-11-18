import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _opponents: (SimpleFighter | Fighter)[],
  ) {
    super(_player);
  }

  fight(): number {
    let fighting = true;
    while (fighting) {
      this.playerAttack();
      this.opponentsAttack();
      const allOpponentsDefeated = this._opponents
        .every((e) => e.lifePoints === -1);

      if (this._player.lifePoints === -1) {
        // console.log('player lost>>>>', this._player);
        // console.log('opponents won>>>>', this._opponents);
        fighting = false;
        return -1;
      }
      if (allOpponentsDefeated) {
        // console.log('player won>>>>', this._player);
        // console.log('opponents lost>>>>', this._opponents);
        fighting = false;
        return 1;
      }
    }
    return 0;
  }

  playerAttack() {
    const opponentsSorted = this._opponents
      .sort((a, b) => a.lifePoints - b.lifePoints);
    const opponentsAlive = opponentsSorted.filter((o) => o.lifePoints !== -1);
    this._player.attack(opponentsAlive[0]);
  }

  opponentsAttack() {
    this._opponents.forEach((e) => {
      if (e.lifePoints !== -1) {
        e.attack(this._player);
      }
    });
  }
}
