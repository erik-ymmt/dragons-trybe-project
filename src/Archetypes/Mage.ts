import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _count = 0;
  private _attack: EnergyType;
  constructor(name: string) {
    super(name);
    this._attack = 'mana';
    Mage._count += 1;
  }

  get energyType(): EnergyType {
    return this._attack;
  }

  static createdArchetypeInstances(): number {
    return this._count;
  }
} 