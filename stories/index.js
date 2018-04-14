import * as buttons from "../src/buttons";
import React from "react";
import { storiesOf } from "@storybook/react";

console.log(Object.values(buttons));

const renderAllButtons = buttons => <div>{Object.values(buttons).map((Button, i) => <Button key={i} />)}</div>;

//eslint-ignore-next-line
storiesOf("Button", module).add("All buttons", () => renderAllButtons(buttons));
