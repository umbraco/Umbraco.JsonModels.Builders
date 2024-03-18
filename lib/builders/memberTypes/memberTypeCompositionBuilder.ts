import { MemberTypeBuilder } from "./memberTypeBuilder";

export class MemberTypeCompositionBuilder {
  parentBuilder: MemberTypeBuilder;
  memberTypeId: string
  compositionType: string;

  constructor(parentBuilder: MemberTypeBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withMemberTypeId(memberTypeId: string) {
    this.memberTypeId = memberTypeId;
    return this;
  }

  withCompositionType(compositionType: string) {
    this.compositionType = compositionType;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    return {
      memberType: {
        id: this.memberTypeId || null
      },
      compositionType: this.compositionType || "Composition"
    };
  }
}