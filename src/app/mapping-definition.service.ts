import { ESTemplate } from './es-template';
import { MappingDefinition } from './mapping-definition';
import { Injectable } from '@angular/core';
import { EFieldTypes } from './field-types';

@Injectable()
export class MappingDefinitionService {

  getTemplateFromES(): ESTemplate {
    return esTemplate2;
  }

  uploadToES(template : ESTemplate) : void {
      alert('upload placeholder')
  }
}

export var  esTemplate2 : ESTemplate = {
    template : 'pest',
    fieldMappings : [
      {fieldName : 'abc1', fieldType : EFieldTypes.string},
      {fieldName : 'abc2', fieldType : EFieldTypes.integer},
      {fieldName : 'abc3', fieldType : EFieldTypes.double},
      {fieldName : 'abc4', fieldType : EFieldTypes.string},
      {fieldName : 'abc5', fieldType : EFieldTypes.string},
    ],
    unmappedFieldsWithConflicts : [
      {fieldName : 'conflictingField1', fieldType : EFieldTypes.string},
      {fieldName : 'conflictingField2', fieldType : EFieldTypes.integer},
      {fieldName : 'conflictingField3', fieldType : EFieldTypes.string}
    ]
  };

