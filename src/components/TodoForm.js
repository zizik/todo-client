import React from "react";
import { Form, Input, Button } from "semantic-ui-react";

const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <label>Last Name</label>
      <Input type="text" placeholder="Search..." action>
        <input />
        <Button type="submit" onClick={() => console.log("test")}>
          Search
        </Button>
      </Input>
    </Form.Field>
  </Form>
);

export default FormExampleForm;
