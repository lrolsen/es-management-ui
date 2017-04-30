import { Component, OnInit } from '@angular/core';

import { ESTemplate } from './es-template';
import { EFieldTypes } from './field-types';
import { MappingDefinition } from './mapping-definition';
import { MappingDefinitionService } from './mapping-definition.service';
import { FormsModule }   from '@angular/forms'
import {EnumKeyValueListPipe} from "./enumlist.pipe";

@Component({
  selector: 'mapping-mgnt',
  templateUrl: './mapping-mgnt.component.html',
  styleUrls: [ './mapping-mgnt.component.css' ]
})

export class MappingMgntComponent implements OnInit {
    esTemplate : ESTemplate;
    fieldTypes : EFieldTypes[];

    constructor(private mappingDefinitionService: MappingDefinitionService) { }
    
    ngOnInit(): void {
        this.fieldTypes = Object.keys(EFieldTypes).map(k => EFieldTypes[k]).filter(v => typeof v === "string");
        this.esTemplate = this.mappingDefinitionService.getTemplateFromES();
    }

    deleteMappingClicked(mapping : MappingDefinition) : void {
        var index = this.esTemplate.fieldMappings.indexOf(mapping);
        this.esTemplate.fieldMappings.splice(index,1);
    }

    addNewMappingClicked() : void {
        this.esTemplate.fieldMappings.push(new MappingDefinition('',EFieldTypes.string))
    }

    createMappingForConflictingTypeClicked(mapping : MappingDefinition) : void {
        var index = this.esTemplate.unmappedFieldsWithConflicts.indexOf(mapping);
        this.esTemplate.unmappedFieldsWithConflicts.splice(index,1);

        this.esTemplate.fieldMappings.push(mapping);
    }

    uploadToESClicked() : void {
        this.mappingDefinitionService.uploadToES(this.esTemplate);
    }
}
