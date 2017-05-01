import { EFieldTypes } from './field-types';

export class MappingDefinition {
  
  constructor(fieldName: string,fieldType: EFieldTypes) {
    this.fieldName = fieldName;
    this.fieldType = fieldType;
  }

  fieldName: string;
  fieldType: EFieldTypes;

  toString() {
    return 'Name: ' + this.fieldName + '  Type: ' + EFieldTypes[this.fieldType];
  }
} 

 