import * as buttons from "../src/buttons";
import React from "react";
import { storiesOf } from "@storybook/react";

const renderAllButtons = buttons => <div>{Object.values(buttons).map((Button, i) => <Button key={i} />)}</div>;

//eslint-disable-next-line
storiesOf("Social login buttons", module).add("All buttons", () => renderAllButtons(buttons));
