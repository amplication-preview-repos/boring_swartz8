import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TOOL_TITLE_FIELD } from "./ToolTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ToolShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="authorizationDetails" source="authorizationDetails" />
        <TextField label="category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="features" source="features" />
        <TextField label="ID" source="id" />
        <TextField
          label="monthlyPaymentDetails"
          source="monthlyPaymentDetails"
        />
        <TextField label="name" source="name" />
        <TextField label="pictures" source="pictures" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="yearlyPaymentDetails" source="yearlyPaymentDetails" />
        <ReferenceManyField
          reference="Promotion"
          target="toolId"
          label="Promotions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="paymentAmount" source="paymentAmount" />
            <TextField label="promotionEnd" source="promotionEnd" />
            <TextField label="promotionStart" source="promotionStart" />
            <ReferenceField label="tool" source="tool.id" reference="Tool">
              <TextField source={TOOL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Rating" target="toolId" label="Ratings">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="ratingValue" source="ratingValue" />
            <TextField label="review" source="review" />
            <ReferenceField label="tool" source="tool.id" reference="Tool">
              <TextField source={TOOL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="toolId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="paymentMethod" source="paymentMethod" />
            <ReferenceField label="tool" source="tool.id" reference="Tool">
              <TextField source={TOOL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="transactionDate" source="transactionDate" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
