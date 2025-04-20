import { describe, expect, it } from "vitest";
import { OpenSearchApiRssParser } from ".";
import { SEARCH_RESPONSE_PATTERN_0 } from "./__fixtures__/response";
import { SEARCH_RESPONSE_PATTERN_1 } from "./__fixtures__/response1";
import { SEARCH_RESPONSE_PATTERN_2 } from "./__fixtures__/response2";

describe("OpenSearchApiRssParser()", () => {
  it("検索結果が0件の時itemはundefined", () => {
    const data = OpenSearchApiRssParser(SEARCH_RESPONSE_PATTERN_0);
    const items = data.rss.channel.item;

    expect(data.rss.channel["openSearch:totalResults"]).toEqual(0);
    expect(items).toBeUndefined();
  });

  it("検索結果が1件の時itemはobject型", () => {
    const data = OpenSearchApiRssParser(SEARCH_RESPONSE_PATTERN_1);
    const items = data.rss.channel.item;

    expect(data.rss.channel["openSearch:totalResults"]).toEqual(1);
    expect(typeof items === "object" && !Array.isArray(items)).toBeTruthy();
    if (typeof items === "object" && !Array.isArray(items)) {
      expect(items.title).toEqual(
        "Clean Architecture : 達人に学ぶソフトウェアの構造と設計",
      );
    }
  });

  it("検索結果が複数件の時itemは配列型", () => {
    const data = OpenSearchApiRssParser(SEARCH_RESPONSE_PATTERN_2);
    const items = data.rss.channel.item;

    expect(data.rss.channel["openSearch:totalResults"] > 1).toBeTruthy();
    expect(Array.isArray(items)).toBeTruthy();
    if (Array.isArray(items)) {
      // 規定値は200件が最大
      expect(items.length).toEqual(200);
    }
  });
});
