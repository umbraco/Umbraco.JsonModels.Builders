import {DataTypeBuilder} from './dataTypeBuilder';
import {SliderDataType} from "../../models";

export class SliderDataTypeBuilder extends DataTypeBuilder {
  preValues: any = [];
  enableRange;
  lowerValue;
  upperValue;
  minValue;
  maxValue;
  step;

  constructor(protected sliderDataType: SliderDataType = new SliderDataType()) {
    super(sliderDataType);
  }

  withEnableRange(enabled: boolean) {
    this.enableRange = enabled;
    return this;
  }

  withInitialLowerValue(lowerValue: number) {
    this.lowerValue = lowerValue;
    return this;
  }

  withInitialUpperValue(upperValue: number) {
    this.upperValue = 0;
    if (this.enableRange == true) {
      this.upperValue = upperValue;
    }
    return this;
  }

  withMinValue(minValue: number) {
    this.minValue = minValue;
    return this;
  }

  withMaxValue(maxValue: number) {
    this.maxValue = maxValue;
    return this;
  }

  withStep(step: number) {
    this.step = step;
    return this;
  }

  build() {
    this.preValues.push({
      key: 'enableRange',
      value: this.enableRange || false,
    });

    this.preValues.push({
      key: 'initVal1',
      value: this.lowerValue || 0,
    });

    this.preValues.push({
      key: 'initVal2',
      value: this.upperValue || 0,
    });

    this.preValues.push({
      key: 'minVal',
      value: this.minValue || 0,
    });

    this.preValues.push({
      key: 'maxVal',
      value: this.maxValue || 0,
    });

    this.preValues.push({
      key: 'step',
      value: this.step || 0,
    });

    this.dataType.addPrevalues(this.preValues);
    return super.build();
  }
}