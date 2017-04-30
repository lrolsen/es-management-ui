import { MappingDefinition } from './mapping-definition';

export class ESTemplate {
  template : string;
  fieldMappings : MappingDefinition[];
  unmappedFieldsWithConflicts : MappingDefinition[];
}
