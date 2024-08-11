import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ToolTitle } from "../tool/ToolTitle";
import { UserTitle } from "../user/UserTitle";

export const RatingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="ratingValue" source="ratingValue" />
        <TextInput label="review" multiline source="review" />
        <ReferenceInput source="tool.id" reference="Tool" label="tool">
          <SelectInput optionText={ToolTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
