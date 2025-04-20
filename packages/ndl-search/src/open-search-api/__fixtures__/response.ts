/**
 * ### レスポンスアイテムが0件の時
 * Search results for title=多分ないであろう題字で検索した結果
 * @link https://ndlsearch.ndl.go.jp/api/opensearch?title=%E5%A4%9A%E5%88%86%E3%81%AA%E3%81%84%E3%81%A7%E3%81%82%E3%82%8D%E3%81%86%E9%A1%8C%E5%AD%97%E3%81%A7%E6%A4%9C%E7%B4%A2%E3%81%97%E3%81%9F%E7%B5%90%E6%9E%9C
 */
export const SEARCH_RESPONSE_PATTERN_0: string = `
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:openSearch="http://a9.com/-/spec/opensearchrss/1.0/" xmlns:dcndl="http://ndl.go.jp/dcndl/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" version="2.0">
  <channel>
    <title>多分ないであろう題字で検索した結果 - 国立国会図書館サーチ OpenSearch</title>
    <link>https://ndlsearch.ndl.go.jp/api/opensearch?title=%E5%A4%9A%E5%88%86%E3%81%AA%E3%81%84%E3%81%A7%E3%81%82%E3%82%8D%E3%81%86%E9%A1%8C%E5%AD%97%E3%81%A7%E6%A4%9C%E7%B4%A2%E3%81%97%E3%81%9F%E7%B5%90%E6%9E%9C</link>
    <description>Search results for title=多分ないであろう題字で検索した結果</description>
    <language>ja</language>
    <openSearch:totalResults>0</openSearch:totalResults>
    <openSearch:startIndex>1</openSearch:startIndex>
    <openSearch:itemsPerPage>200</openSearch:itemsPerPage>
  </channel>
</rss>
`;
