export default abstract class Race {
  constructor(
    private _name: string,
    private _dexterity: number,
  ) {

  }

  static createdRacesInstances(): number {
    // Esse número corresponde à quantidade de instâncias criadas a partir das classes estendidas da classe Race
    throw new Error('Not implemented');
  }

  abstract maxLifePoints(): number;

  get name() { return this._name; }

  get dexterity() { return this._dexterity; }
}