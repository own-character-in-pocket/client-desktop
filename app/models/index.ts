import { Model, ORM } from '../libs/orm';
import { EntityModel } from './EntityModel';
import { TemplateModel } from './TemplateModel';
import { UniverseModel } from './UniverseModel';

export { EntityModel } from './Entity';
export { FieldModel } from './Field';
export { FieldGroupModel } from './FieldGroup';
export { FieldTypeModel } from './FieldType';

const FILE_NAME = ':memory:';
const MODEL_LIST: Model[] = [EntityModel, TemplateModel, UniverseModel];

export const orm = ORM.create(FILE_NAME, MODEL_LIST);
