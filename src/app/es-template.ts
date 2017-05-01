import { MappingDefinition } from './mapping-definition';

export class ESTemplate {
  template : string;
  fieldMappings : MappingDefinition[];
  unmappedFieldsWithConflicts : MappingDefinition[];

  constructor(template : string, fieldMappings : MappingDefinition[],unmappedFieldsWithConflicts : MappingDefinition[]) {
    this.template = template;
    this.fieldMappings = fieldMappings;
    this.unmappedFieldsWithConflicts = unmappedFieldsWithConflicts;
  }
}
