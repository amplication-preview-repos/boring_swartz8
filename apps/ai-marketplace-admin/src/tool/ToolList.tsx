import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ToolList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tools"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
