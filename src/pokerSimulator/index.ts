import { BehaviorType } from "./types";

export class PokerSimulator {
  private behaviorType?: BehaviorType;

  constructor(behaviorType: BehaviorType = "tag") {
    this.behaviorType = behaviorType;
  }
}
