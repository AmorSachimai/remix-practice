import { describe, expect, it } from "vitest";
import { OpenSearchApiRssParser } from ".";
import { SEARCH_RESPONSE_PATTERN_0 } from "./__fixtures__/response";
import { SEARCH_RESPONSE_PATTERN_1 } from "./__fixtures__/response1";
import { SEARCH_RESPONSE_PATTERN_2 } from "./__fixtures__/response2";
import { SEARCH_RESPONSE_PATTERN_3 } from "./__fixtures__/response3";
import { SEARCH_RESPONSE_PATTERN_4 } from "./__fixtures__/response4";

describe("OpenSearchApiRssParser()", () => {
  it("検索結果が0件の時itemはundefined", () => {
    const data = OpenSearchApiRssParser(SEARCH_RESPONSE_PATTERN_0);
    const items = data.rss.channel.item;

    expect(data.rss.channel["openSearch:totalResults"]).toEqual(0);
    expect(items).toBeUndefined();
    expect(data).toMatchSnapshot();
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
    expect(data).toMatchSnapshot();
  });

  it("検索結果が複数件の時itemは配列型", () => {
    const data = OpenSearchApiRssParser(SEARCH_RESPONSE_PATTERN_2);
    const items = data.rss.channel.item;

    expect(data.rss.channel["openSearch:totalResults"] > 1).toBeTruthy();
    expect(Array.isArray(items)).toBeTruthy();
    expect(data).toMatchSnapshot();
  });

  it("製作者が数値の場合文字列変換して返す", () => {
    const data = OpenSearchApiRssParser(SEARCH_RESPONSE_PATTERN_3);
    const items = data.rss.channel.item;

    expect(data.rss.channel["openSearch:totalResults"] > 1).toBeTruthy();
    expect(Array.isArray(items)).toBeTruthy();
    expect(data).toMatchSnapshot();
  });

  it("バックスラッシュは削除される事", () => {
    const data = OpenSearchApiRssParser(SEARCH_RESPONSE_PATTERN_4);
    const items = data.rss.channel.item;

    expect(Array.isArray(items)).toBeTruthy();
    expect(data).toMatchSnapshot();
  });

  it("subjectがnumberとしてパースされることを修正", () => {
    const data = OpenSearchApiRssParser(SEARCH_RESPONSE_PATTERN_4);
    const items = data.rss.channel.item;

    expect(Array.isArray(items)).toBeTruthy();
    expect(data).toMatchSnapshot();
  });
});
