import Race from './Race';

export default class Elf extends Race {
  private static _count = 0;
  private _maxLifePoints: number;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._count += 1;
  }

  static createdRacesInstances(): number {
    return this._count;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}
