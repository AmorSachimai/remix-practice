import type { Meta, StoryObj } from "@storybook/react";
import { BookCard } from ".";

const meta = {
  component: BookCard,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof BookCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    title: "転生して田舎でスローライフをおくりたい13",
    imageUrl: "https://ndlsearch.ndl.go.jp/thumbnail/9784299065421.jpg",
    author: "錬金王,阿倍野ちゃこ",
    description:
      "待望の第13巻は、お米を求めて海向こうの国へと旅立つ、アルフリート一行のストーリー!",
  },
};
