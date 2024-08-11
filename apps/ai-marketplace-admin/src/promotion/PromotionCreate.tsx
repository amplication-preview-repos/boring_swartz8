import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ToolTitle } from "../tool/ToolTitle";
import { UserTitle } from "../user/UserTitle";

export const PromotionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
