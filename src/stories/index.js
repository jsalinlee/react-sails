import React from "react";
import { storiesOf } from "@storybook/react";
import MultiUploadCards from "../lib/components/MultiUploadCards/MultiUploadCards";
import FormDemo from "./FormDemo";

storiesOf("MultiUploadCards", module)
  .add("upload multiple files", () => <MultiUploadCards />)
  .add("form", () => <FormDemo />);
