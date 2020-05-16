import { GraphQLObjectType } from 'graphql';
import { createFieldMap } from '../../utils';
import { addEntityToUniverse } from './addEntityToUniverse';
import { addFieldGroupListToEntity } from './addFieldGroupListToEntity';
import { addFieldGroupListToTemplate } from './addFieldGroupListToTemplate';
import { addFieldListToFieldGroup } from './addFieldListToFieldGroup';
import { addTemplateToUniverse } from './addTemplateToUniverse';
import { createEntity } from './createEntity';
import { createTemplate } from './createTemplate';
import { createUniverse } from './createUniverse';
import { deleteEntity } from './deleteEntityList';
import { deleteFieldGroupList } from './deleteFieldGroupList';
import { deleteFieldList } from './deleteFieldList';
import { deleteTemplate } from './deleteTemplate';
import { deleteUniverse } from './deleteUniverse';
import { linkEntityToEntity } from './linkEntityToEntity';
import { removeEntityFromUniverse } from './removeEntityFromUniverse';
import { removeTemplateFromUniverse } from './removeTemplateFromUniverse';
import { unlinkEntityToEntity } from './unlinkEntityToEntity';
import { updateEntity } from './updateEntity';
import { updateField } from './updateField';
import { updateFieldGroup } from './updateFieldGroup';
import { updateFieldGroupOrderFromEntity } from './updateFieldGroupOrderFromEntity';
import { updateFieldGroupOrderFromTemplate } from './updateFieldGroupOrderFromTemplate';
import { updateTemplate } from './updateTemplate';
import { updateUniverse } from './updateUniverse';

export const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  fields: createFieldMap({
    addEntityToUniverse,
    addFieldGroupListToEntity,
    addFieldGroupListToTemplate,
    addFieldListToFieldGroup,
    addTemplateToUniverse,
    createEntity,
    createTemplate,
    createUniverse,
    deleteEntity,
    deleteFieldGroupList,
    deleteFieldList,
    deleteTemplate,
    deleteUniverse,
    linkEntityToEntity,
    removeEntityFromUniverse,
    removeTemplateFromUniverse,
    unlinkEntityToEntity,
    updateEntity,
    updateField,
    updateFieldGroup,
    updateFieldGroupOrderFromEntity,
    updateFieldGroupOrderFromTemplate,
    updateTemplate,
    updateUniverse
  })
});
