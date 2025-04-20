import type { OpenSearchOptions, OpenSearchResponseType } from "./types";
import { parseOpenSearchXml } from "./utils/parse";
import { buildQuery } from "./utils/query";
import { validationOpenSearchSchema } from "./utils/validation";

const OPEN_SEARCH_URL = "https://ndlsearch.ndl.go.jp/api/opensearch" as const;

/**
 * ## Open Search APIのレスポンス(XML)をパースする
 * 検索結果のxmlはRSS2.0形式で返却される為、それに準拠したパースを行う。
 */
export const OpenSearchApiRssParser = (xml: string): OpenSearchResponseType => {
  const parsedObj = parseOpenSearchXml(xml);
  return validationOpenSearchSchema(parsedObj);
};

/**
 * ## Open Search API 検索実行
 * 検索結果のxmlはRSS2.0形式で返却される為、それに準拠したパースを行う。
 */
export const OpenSearchAPI = async (
  options: OpenSearchOptions,
): Promise<OpenSearchResponseType> => {
  const query = buildQuery(options);
  const req = `${OPEN_SEARCH_URL}?${query}`;

  const res = await fetch(req);
  const xml = await res.text();

  return OpenSearchApiRssParser(xml);
};
