import { z } from "zod";

const numberToString = z.union([
  z.string(),
  z.number().transform((val) => val.toString()),
]);

const identifierSchema = z.object({
  "#text": z.union([z.string(), z.number()]),
  "@_xsi:type": z.string(),
});

const subjectSchema = z.union([
  z.string(),
  z.object({
    "#text": z.union([z.string(), z.number()]),
    "@_xsi:type": z.string(),
  }),
]);

const creatorSchema = z.union([
  z.string(),
  // number型をstring型に変換
  numberToString,
  z.array(z.union([z.string(), numberToString])),
]);

const itemSchema = z.object({
  title: z.string(),
  link: z.string(),
  description: z.string(),
  author: z.string().optional(),
  category: z.union([z.string(), z.array(z.string())]),
  "dc:title": z.string(),
  "dc:date": z
    .object({
      "#text": z.union([z.string(), z.number()]),
      "@_xsi:type": z.string(),
    })
    .optional(),
  "dc:description": z.union([
    z.string(),
    z.number(),
    z.array(z.union([z.string(), z.number()])),
  ]),
  "dc:extent": z.union([z.string(), z.number()]).optional(),
  "dc:identifier": z
    .union([identifierSchema, z.array(identifierSchema)])
    .optional(),
  "dc:publisher": z.union([z.string(), z.array(z.string())]).optional(),
  "dc:subject": z.union([subjectSchema, z.array(subjectSchema)]).optional(),
  "dcndl:genre": z.string().optional(),
  "dcndl:genreTranscription": z.string().optional(),
  "dcndl:price": z.union([z.string(), z.number()]).optional(),
  "dcndl:publicationPlace": z.string().optional(),
  "dcndl:seriesTitle": z.string().optional(),
  "dcndl:titleTranscription": z.string().optional(),
  "dcndl:volume": z.union([z.string(), z.number()]).optional(),
  guid: z.object({
    "#text": z.string(),
    "@_isPermaLink": z.boolean(),
  }),
  pubDate: z.string(),
  "dc:creator": creatorSchema.optional(),
  "dcndl:creatorTranscription": z
    .union([z.string(), z.array(z.string())])
    .optional(),
});

const channelSchema = z.object({
  title: z.string(),
  item: z.union([itemSchema, z.array(itemSchema)]).optional(),
  description: z.string(),
  language: z.string(),
  link: z.string(),
  "openSearch:itemsPerPage": z.number(),
  "openSearch:startIndex": z.number(),
  "openSearch:totalResults": z.number(),
});

const rssSchema = z.object({
  channel: channelSchema,
});

export const openSearchResponseSchema = z.object({
  rss: rssSchema,
});
