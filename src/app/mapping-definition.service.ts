import { ESTemplate } from './es-template';
import { MappingDefinition } from './mapping-definition';
import { Injectable } from '@angular/core';
import { EFieldTypes } from './field-types';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MappingDefinitionService {

  constructor(private http: Http) {
  }

  getTemplateFromES(): Promise<ESTemplate> {
    return this.http.get('http://localhost:9200/_template/serilog-events-template')
      .toPromise()
      .then(f=>Promise.resolve(this.parseTemplate(f.text())))
      .catch(f=>alert('Unable to fetch template from Elasticsearch' + f))
  }

  uploadToES(template : ESTemplate) : void {
      alert('upload placeholder')
  }

  parseTemplate(templateString: string) : ESTemplate {
    var template = JSON.parse(templateString)['serilog-events-template']
    var fields = template.mappings['_default_'].properties.fields.properties;
    var mappings = Object.keys(fields).map(fieldName=>new MappingDefinition(fieldName, EFieldTypes[<string>fields[fieldName].type] ));
    var esTemplate = new ESTemplate(templateString, mappings, null);

    return esTemplate;
  }
}
