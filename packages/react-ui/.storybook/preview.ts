import type { Preview } from "@storybook/react";

// reset.cssをstorybookに適用
import "@sample/style-schema/reset.css";
import "@sample/style-schema/global.css";

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
