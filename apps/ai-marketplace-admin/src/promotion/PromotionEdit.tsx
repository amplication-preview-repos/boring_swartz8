import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ToolTitle } from "../tool/ToolTitle";
import { UserTitle } from "../user/UserTitle";

export const PromotionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="paymentAmount" source="paymentAmount" />
        <DateTimeInput label="promotionEnd" source="promotionEnd" />
        <DateTimeInput label="promotionStart" source="promotionStart" />
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
