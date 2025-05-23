import type { Preview } from "@storybook/react";

// reset.cssをstorybookに適用
import "@my-packages/style-schema/reset.css";
import "@my-packages/style-schema/global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
