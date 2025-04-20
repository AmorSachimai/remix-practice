/**
 * ### レスポンスアイテムが200件の時
 * Search results for title=`名探偵コナン`
 * @link https://ndlsearch.ndl.go.jp/api/opensearch?title=%E5%90%8D%E6%8E%A2%E5%81%B5%E3%82%B3%E3%83%8A%E3%83%B3
 */
export const SEARCH_RESPONSE_PATTERN_2: string = `
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:openSearch="http://a9.com/-/spec/opensearchrss/1.0/" xmlns:dcndl="http://ndl.go.jp/dcndl/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" version="2.0">
  <channel>
    <title>名探偵コナン - 国立国会図書館サーチ OpenSearch</title>
    <link>https://ndlsearch.ndl.go.jp/api/opensearch?title=%E5%90%8D%E6%8E%A2%E5%81%B5%E3%82%B3%E3%83%8A%E3%83%B3</link>
    <description>Search results for title=名探偵コナン</description>
    <language>ja</language>
    <openSearch:totalResults>1736</openSearch:totalResults>
    <openSearch:startIndex>1</openSearch:startIndex>
    <openSearch:itemsPerPage>200</openSearch:itemsPerPage>
    <item>
      <title>アニソン・ファンタジー : やさしい女声合唱曲集</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I023779282</link>
      <description><![CDATA[<p>Giovanni Records,2012,<p><ul><li>タイトル：アニソン・ファンタジー : やさしい女声合唱曲集</li><li>タイトル（読み）：アニソン ・ ファンタジー</li><li>責任表示：石若雅弥 編曲,石若雅弥 指揮,桒田真希 ピアノ,La Couronne 演奏</li><li>シリーズ名：コーラスライブラリー</li></ul>]]></description>
      <author>石若雅弥 編曲,石若雅弥 指揮,桒田真希 ピアノ,La Couronne 演奏</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I023779282</guid>
      <pubDate>Wed, 22 Nov 2023 22:55:18 +0900</pubDate>
      <dc:title>アニソン・ファンタジー : やさしい女声合唱曲集</dc:title>
      <dcndl:titleTranscription>アニソン ・ ファンタジー</dcndl:titleTranscription>
      <dcndl:seriesTitle>コーラスライブラリー</dcndl:seriesTitle>
      <dc:publisher>Giovanni Records</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2012</dc:date>
      <dcterms:issued>2012.7</dcterms:issued>
      <dcndl:price>2381円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">GVCS-31205</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">023779282</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23911015</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>所要時間: 43分43秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I023779282"/>
      <dc:description> 2012</dc:description>
    </item>
    <item>
      <title>アニメ&amp;キッズ・ヒット・マーチ</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I22213001303003589</link>
      <description><![CDATA[<p>2016,日本コロムビア,2016-03,<p><ul><li>タイトル：アニメ&キッズ・ヒット・マーチ</li><li>タイトル（読み）：アニメ アンド キッズ ヒット マーチ</li><li>各巻タイトル：動物戦隊ジュウオウジャー/サザエさん</li><li>各巻タイトル（読み）：ドウブツ センタイ ジュウオウジャー サザエサン</li></ul>]]></description>
      <author>中右 貴久,菊岡 彩,コロムビア・オーケストラ</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I22213001303003589</guid>
      <pubDate>Mon, 17 Jun 2024 22:15:29 +0900</pubDate>
      <dc:title>アニメ&amp;キッズ・ヒット・マーチ</dc:title>
      <dcndl:titleTranscription>アニメ アンド キッズ ヒット マーチ</dcndl:titleTranscription>
      <dc:creator>中右 貴久</dc:creator>
      <dc:creator>菊岡 彩</dc:creator>
      <dc:creator>コロムビア・オーケストラ</dc:creator>
      <dcndl:creatorTranscription>ナカウ タカヒサ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>キクオカ アヤ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>コロムビア オーケストラ</dcndl:creatorTranscription>
      <dcndl:volume>2016</dcndl:volume>
      <dcndl:volumeTitle>動物戦隊ジュウオウジャー/サザエさん</dcndl:volumeTitle>
      <dcndl:volumeTitleTranscription>ドウブツ センタイ ジュウオウジャー サザエサン</dcndl:volumeTitleTranscription>
      <dc:publisher>日本コロムビア</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2016-03</dc:date>
      <dcterms:issued>2016.3</dcterms:issued>
      <dcndl:price>￥２８００</dcndl:price>
      <dc:extent>1</dc:extent>
      <dc:identifier xsi:type="dcndl:TRCMARCNO">16903008</dc:identifier>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=3001303003589"/>
      <dc:description> 2016-03</dc:description>
    </item>
    <item>
      <title>アニメ&amp;キッズ・ヒット・マーチ</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I22213001303005635</link>
      <description><![CDATA[<p>2018,日本コロムビア,2018-03,<p><ul><li>タイトル：アニメ&キッズ・ヒット・マーチ</li><li>タイトル（読み）：アニメ アンド キッズ ヒット マーチ</li><li>各巻タイトル：べるがなる/ゲゲゲの鬼太郎/ふるさと</li><li>各巻タイトル（読み）：ベル ガ ナル ゲゲゲ ノ キタロウ フルサト</li></ul>]]></description>
      <author>菊岡 彩,中右 貴久,コロムビア・オーケストラ</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I22213001303005635</guid>
      <pubDate>Sat, 31 Aug 2024 19:25:31 +0900</pubDate>
      <dc:title>アニメ&amp;キッズ・ヒット・マーチ</dc:title>
      <dcndl:titleTranscription>アニメ アンド キッズ ヒット マーチ</dcndl:titleTranscription>
      <dc:creator>菊岡 彩</dc:creator>
      <dc:creator>中右 貴久</dc:creator>
      <dc:creator>コロムビア・オーケストラ</dc:creator>
      <dcndl:creatorTranscription>キクオカ アヤ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ナカウ タカヒサ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>コロムビア オーケストラ</dcndl:creatorTranscription>
      <dcndl:volume>2018</dcndl:volume>
      <dcndl:volumeTitle>べるがなる/ゲゲゲの鬼太郎/ふるさと</dcndl:volumeTitle>
      <dcndl:volumeTitleTranscription>ベル ガ ナル ゲゲゲ ノ キタロウ フルサト</dcndl:volumeTitleTranscription>
      <dc:publisher>日本コロムビア</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2018-03</dc:date>
      <dcterms:issued>2018.3</dcterms:issued>
      <dcndl:price>￥２８００</dcndl:price>
      <dc:extent>1</dc:extent>
      <dc:identifier xsi:type="dcndl:TRCMARCNO">18901839</dc:identifier>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=3001303005635"/>
      <dc:description> 2018-03</dc:description>
    </item>
    <item>
      <title>アニメ&amp;ヒーローソング大全集 : 最新版ベストヒット : 「ONE PIECE」「名探偵コナン」譜面特集ほか</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I024016529</link>
      <description><![CDATA[<p>実業之日本社,2012,978-4-408-63280-3<p><ul><li>タイトル：アニメ&ヒーローソング大全集 : 最新版ベストヒット : 「ONE PIECE」「名探偵コナン」譜面特集ほか</li><li>タイトル（読み）：アニメ アンド ヒーロー ソング ダイゼンシュウ : サイシンバン ベスト ヒット : ワン ピース メイタンテイ コナン フメン トクシュウ ホカ</li><li>シリーズ名：実用百科</li><li>シリーズ名（読み）：ジツヨウ ヒャッカ</li><li>NDC(9)：767.8</li></ul>]]></description>
      <author/>
      <category>図書</category>
      <category>楽譜</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I024016529</guid>
      <pubDate>Mon, 1 May 2023 19:59:38 +0900</pubDate>
      <dc:title>アニメ&amp;ヒーローソング大全集 : 最新版ベストヒット : 「ONE PIECE」「名探偵コナン」譜面特集ほか</dc:title>
      <dcndl:titleTranscription>アニメ アンド ヒーロー ソング ダイゼンシュウ : サイシンバン ベスト ヒット : ワン ピース メイタンテイ コナン フメン トクシュウ ホカ</dcndl:titleTranscription>
      <dcndl:seriesTitle>実用百科</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ジツヨウ ヒャッカ</dcndl:seriesTitleTranscription>
      <dc:publisher>実業之日本社</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2012</dc:date>
      <dcterms:issued>2012.11</dcterms:issued>
      <dcndl:price>1238円</dcndl:price>
      <dc:extent>231p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-408-63280-3</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">024016529</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22160208</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">07289237</dc:identifier>
      <dcndl:genre>楽譜</dcndl:genre>
      <dcndl:genreTranscription>ガクフ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">YM311</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">767.8</dc:subject>
      <dc:description>索引あり</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1007000249508"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009811609363"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I024016529"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784408632803"/>
      <dc:description> 2012</dc:description>
    </item>
    <item>
      <title>アニメ・ザット・ジャズ</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I032412747</link>
      <description><![CDATA[<p>2,P-Vine,2022,<p><ul><li>タイトル：アニメ・ザット・ジャズ</li><li>タイトル（読み）：アニメ ・ ザット ・ ジャズ</li><li>責任表示：オール・ザット・ジャズ</li><li>シリーズ名：Anime jazz</li></ul>]]></description>
      <author>オール・ザット・ジャズ</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I032412747</guid>
      <pubDate>Thu, 20 Oct 2022 22:06:28 +0900</pubDate>
      <dc:title>アニメ・ザット・ジャズ</dc:title>
      <dcndl:titleTranscription>アニメ ・ ザット ・ ジャズ</dcndl:titleTranscription>
      <dcndl:volume>2</dcndl:volume>
      <dcndl:seriesTitle>Anime jazz</dcndl:seriesTitle>
      <dc:publisher>P-Vine</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2022</dc:date>
      <dcterms:issued>[2022.9]</dcterms:issued>
      <dcndl:price>3980円</dcndl:price>
      <dc:extent>レコード 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">SRVLP-4</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">032412747</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23745299</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMA</dc:subject>
      <dc:description>出版</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I032412747"/>
      <dc:description> 2022</dc:description>
    </item>
    <item>
      <title>アニメスタイルインタビューズ</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I029643818</link>
      <description><![CDATA[<p>01(2019.4),スタイル,2019,978-4-8021-5305-8<p><ul><li>タイトル：アニメスタイルインタビューズ</li><li>タイトル（読み）：アニメ スタイル インタビューズ</li><li>シリーズ名：メディアパルムック</li><li>シリーズ名（読み）：メディア パル ムック</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author/>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I029643818</guid>
      <pubDate>Mon, 13 May 2019 20:08:39 +0900</pubDate>
      <dc:title>アニメスタイルインタビューズ</dc:title>
      <dcndl:titleTranscription>アニメ スタイル インタビューズ</dcndl:titleTranscription>
      <dcndl:volume>01(2019.4)</dcndl:volume>
      <dcndl:seriesTitle>メディアパルムック</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>メディア パル ムック</dcndl:seriesTitleTranscription>
      <dc:publisher>スタイル</dc:publisher>
      <dc:publisher>メディアパル (発売)</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2019</dc:date>
      <dcterms:issued>2019.5</dcterms:issued>
      <dcndl:price>1300円</dcndl:price>
      <dc:extent>119p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-8021-5305-8</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">029643818</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23202846</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">07428700</dc:identifier>
      <dc:subject>アニメーション</dc:subject>
      <dc:subject xsi:type="dcndl:NDLC">Y94</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I029643818"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B13688747"/>
      <dc:description> 2019</dc:description>
    </item>
    <item>
      <title>アニメソング・アルティメットボックス 日テレ60&amp;YTV 55</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I025321345</link>
      <description><![CDATA[<p>2 平成篇 ディスク3,バップ,2013,<p><ul><li>タイトル：アニメソング・アルティメットボックス 日テレ60&YTV 55</li><li>タイトル（読み）：アニメ ソング アルティメット ボックス</li></ul>]]></description>
      <author/>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I025321345</guid>
      <pubDate>Wed, 26 Mar 2014 22:23:00 +0900</pubDate>
      <dc:title>アニメソング・アルティメットボックス 日テレ60&amp;YTV 55</dc:title>
      <dcndl:titleTranscription>アニメ ソング アルティメット ボックス</dcndl:titleTranscription>
      <dcndl:volume>2 平成篇 ディスク3</dcndl:volume>
      <dc:publisher>バップ</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2013</dc:date>
      <dcterms:issued>2013.11</dcterms:issued>
      <dc:extent>録音ディスク 1枚 (76分)</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">VPCG-84953C</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">025321345</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22375090</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I025321345"/>
      <dc:description> 2013</dc:description>
    </item>
    <item>
      <title>アニメティックlove : あのアニメあの曲にもう一度逢いたくて</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I033651496</link>
      <description><![CDATA[<p>ユニバーサルミュージック,2024,<p><ul><li>タイトル：アニメティックlove : あのアニメあの曲にもう一度逢いたくて</li><li>タイトル（読み）：アニメティック love</li></ul>]]></description>
      <author/>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I033651496</guid>
      <pubDate>Thu, 21 Nov 2024 22:16:44 +0900</pubDate>
      <dc:title>アニメティックlove : あのアニメあの曲にもう一度逢いたくて</dc:title>
      <dcndl:titleTranscription>アニメティック love</dcndl:titleTranscription>
      <dc:publisher>ユニバーサルミュージック</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2024</dc:date>
      <dcterms:issued>2024.10</dcterms:issued>
      <dcndl:price>2200円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">UICZ-8238</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">033651496</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">24050012</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>所要時間: 78分10秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=3008000166221"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I033651496"/>
      <dc:description> 2024</dc:description>
    </item>
    <item>
      <title>アニメメドレー : ピアノソロ</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I27210010299642</link>
      <description><![CDATA[<p>ヤマハミュージックメディア,2002-04,4-636-25156-3<p><ul><li>タイトル：アニメメドレー : ピアノソロ</li><li>タイトル（読み）：アニメ メドレー</li><li>責任表示：石川 芳/ピアノアレンジ,金益 研二/ピアノアレンジ,鈴木 奈美/ピアノアレンジ</li><li>シリーズ名：バイエルでひける こどもポップス</li><li>シリーズ名（読み）：バイエル デ ヒケル コドモ ポップス</li><li>NDC(9)：763.2</li></ul>]]></description>
      <author>石川 芳/ピアノアレンジ,金益 研二/ピアノアレンジ,鈴木 奈美/ピアノアレンジ</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I27210010299642</guid>
      <pubDate>Sat, 5 Oct 2024 09:00:00 +0900</pubDate>
      <dc:title>アニメメドレー : ピアノソロ</dc:title>
      <dcndl:titleTranscription>アニメ メドレー</dcndl:titleTranscription>
      <dcndl:seriesTitle>バイエルでひける こどもポップス</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>バイエル デ ヒケル コドモ ポップス</dcndl:seriesTitleTranscription>
      <dc:publisher>ヤマハミュージックメディア</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2002-04</dc:date>
      <dcterms:issued>2002.4</dcterms:issued>
      <dcndl:price>1000</dcndl:price>
      <dc:extent>31cm</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">4-636-25156-3</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">4-636-25156-3</dc:identifier>
      <dc:subject>ピアノ</dc:subject>
      <dc:subject xsi:type="dcndl:NDC">763.2</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">763.2</dc:subject>
      <dc:subject xsi:type="dcndl:NDC8">763.2</dc:subject>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0010299642"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=1013019"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=1034593"/>
      <dc:description> 2002-04</dc:description>
    </item>
    <item>
      <title>アニメ</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000004125971</link>
      <description><![CDATA[<p>2,ヤマハミュージックメディア,2003,4-636-74270-2<p><ul><li>タイトル：アニメ</li><li>タイトル（読み）：アニメ</li><li>シリーズ名：エレクトーンポピュラー・シリーズ ; v.30</li><li>シリーズ名（読み）：エレクトーン ポピュラー シリーズ</li><li>NDC(9)：763.99</li></ul>]]></description>
      <author/>
      <category>図書</category>
      <category>楽譜</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000004125971</guid>
      <pubDate>Mon, 24 Apr 2023 20:58:42 +0900</pubDate>
      <dc:title>アニメ</dc:title>
      <dcndl:titleTranscription>アニメ</dcndl:titleTranscription>
      <dcndl:volume>2</dcndl:volume>
      <dcndl:seriesTitle>エレクトーンポピュラー・シリーズ ; v.30</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>エレクトーン ポピュラー シリーズ</dcndl:seriesTitleTranscription>
      <dc:publisher>ヤマハミュージックメディア</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2003</dc:date>
      <dcterms:issued>2003.5(第2版)</dcterms:issued>
      <dcndl:price>2300円</dcndl:price>
      <dc:extent>53p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">4-636-74270-2</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">4-636-74270-2</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000004125971</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">20415527</dc:identifier>
      <dcndl:genre>楽譜</dcndl:genre>
      <dcndl:genreTranscription>ガクフ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">YM11</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">763.99</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000004125971"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=1125260"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784636742701"/>
      <dc:description> 2003</dc:description>
    </item>
    <item>
      <title>あの夏色の空へと続く</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I024053922</link>
      <description><![CDATA[<p>GIZA,2012,<p><ul><li>タイトル：あの夏色の空へと続く</li><li>タイトル（読み）：アノ ナツイロ ノ ソラ エ ト ツズク</li><li>責任表示：なついろ</li></ul>]]></description>
      <author>なついろ</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I024053922</guid>
      <pubDate>Thu, 28 Jul 2022 20:39:54 +0900</pubDate>
      <dc:title>あの夏色の空へと続く</dc:title>
      <dcndl:titleTranscription>アノ ナツイロ ノ ソラ エ ト ツズク</dcndl:titleTranscription>
      <dc:publisher>GIZA</dc:publisher>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2012</dc:date>
      <dcterms:issued>2012.11</dcterms:issued>
      <dcndl:price>2800円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">GZCD-5004</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">024053922</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23708739</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>頒布</dc:description>
      <dc:description>所要時間: 50分31秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I024053922"/>
      <dc:description> 2012</dc:description>
    </item>
    <item>
      <title>アメリカ英会話 (えいかいわ) 探検 (たんけん) ノート : 名探偵コナンわかる!できる!話 (はな) せる!/ 青山剛昌原作 ; 巽一郎, 巽スカイ・ヘザー著</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000136-I1130282269398065536</link>
      <description><![CDATA[<p>小学館,2004,4095108614<p><ul><li>タイトル：アメリカ英会話 (えいかいわ) 探検 (たんけん) ノート : 名探偵コナンわかる!できる!話 (はな) せる!/ 青山剛昌原作 ; 巽一郎, 巽スカイ・ヘザー著</li><li>タイトル（読み）：アメリカ エイカイワ タンケン ノート : メイタンテイ コナン ワカル デキル ハナセル</li></ul>]]></description>
      <author>青山, 剛昌,巽, 一朗,巽, スカイ・ヘザー</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000136-I1130282269398065536</guid>
      <pubDate>Sun, 22 Dec 2024 00:00:10 +0900</pubDate>
      <dc:title>アメリカ英会話 (えいかいわ) 探検 (たんけん) ノート : 名探偵コナンわかる!できる!話 (はな) せる!/ 青山剛昌原作 ; 巽一郎, 巽スカイ・ヘザー著</dc:title>
      <dcndl:titleTranscription>アメリカ エイカイワ タンケン ノート : メイタンテイ コナン ワカル デキル ハナセル</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌</dc:creator>
      <dc:creator>巽, 一朗</dc:creator>
      <dc:creator>巽, スカイ・ヘザー</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>タツミ, イチロウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>タツミ, スカイ ヘザー</dcndl:creatorTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>ja</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2004</dc:date>
      <dcterms:issued>2004.12</dcterms:issued>
      <dc:identifier xsi:type="dcndl:ISBN">4095108614</dc:identifier>
      <dc:identifier xsi:type="dcndl:NIIBibID">BB00006697</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YU81</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BB00006697"/>
      <dc:description> 2004</dc:description>
    </item>
    <item>
      <title>幾千の迷宮で幾千の謎を解いて</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I027735224</link>
      <description><![CDATA[<p>[Being],2017,<p><ul><li>タイトル：幾千の迷宮で幾千の謎を解いて</li><li>タイトル（読み）：イクセン ノ メイキュウ デ イクセン ノ ナゾ オ トイテ</li><li>責任表示：BREAKERZ</li></ul>]]></description>
      <author>BREAKERZ</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I027735224</guid>
      <pubDate>Thu, 4 Aug 2022 22:07:25 +0900</pubDate>
      <dc:title>幾千の迷宮で幾千の謎を解いて</dc:title>
      <dcndl:titleTranscription>イクセン ノ メイキュウ デ イクセン ノ ナゾ オ トイテ</dcndl:titleTranscription>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2017</dc:date>
      <dcterms:issued>2017.1</dcterms:issued>
      <dcndl:price>1481円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">ZACL-4046</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">027735224</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23712063</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>初回限定盤A</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I027735224"/>
      <dc:description> 2017</dc:description>
    </item>
    <item>
      <title>幾千の迷宮で幾千の謎を解いて</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I027735225</link>
      <description><![CDATA[<p>[Being],2017,<p><ul><li>タイトル：幾千の迷宮で幾千の謎を解いて</li><li>タイトル（読み）：イクセン ノ メイキュウ デ イクセン ノ ナゾ オ トイテ</li><li>責任表示：BREAKERZ</li></ul>]]></description>
      <author>BREAKERZ</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I027735225</guid>
      <pubDate>Sat, 6 Aug 2022 01:32:15 +0900</pubDate>
      <dc:title>幾千の迷宮で幾千の謎を解いて</dc:title>
      <dcndl:titleTranscription>イクセン ノ メイキュウ デ イクセン ノ ナゾ オ トイテ</dcndl:titleTranscription>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2017</dc:date>
      <dcterms:issued>2017.1</dcterms:issued>
      <dcndl:price>1389円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">ZACL-6041</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">027735225</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23712929</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>初回限定盤B</dc:description>
      <dc:description>付属資料: DVD 1枚 (12 cm) : 「幾千の迷宮で幾千の謎を解いて」music clip + music clip off shot</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I027735225"/>
      <dc:description> 2017</dc:description>
    </item>
    <item>
      <title>いたずらのうと 名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000128-IB16471366</link>
      <description><![CDATA[<p>小学館,2007,<p><ul><li>タイトル：いたずらのうと 名探偵コナン</li><li>タイトル（読み）：イタズラノウト メイタンテイ コナン</li><li>責任表示：青山剛昌∥原作,松田辰彦∥絵,久野繁∥デザイン,宮沢温子∥デザイン</li><li>シリーズ名：小学館のカラーワイド</li><li>シリーズ名（読み）：ショウガクカン ノ カラー ワイド</li><li>NDC(10)：E</li></ul>]]></description>
      <author>青山/剛昌,松田/辰彦,久野/繁,宮沢/温子,青山剛昌∥原作,松田辰彦∥絵,久野繁∥デザイン,宮沢温子∥デザイン</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000128-IB16471366</guid>
      <pubDate>Mon, 8 Apr 2024 08:00:00 +0900</pubDate>
      <dc:title>いたずらのうと 名探偵コナン</dc:title>
      <dcndl:titleTranscription>イタズラノウト メイタンテイ コナン</dcndl:titleTranscription>
      <dc:creator>青山/剛昌</dc:creator>
      <dc:creator>松田/辰彦</dc:creator>
      <dc:creator>久野/繁</dc:creator>
      <dc:creator>宮沢/温子</dc:creator>
      <dcndl:creatorTranscription>アオヤマ ゴウショウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>マツダ タツヒコ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ヒサノ シゲル</dcndl:creatorTranscription>
      <dcndl:seriesTitle>小学館のカラーワイド</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクカン ノ カラー ワイド</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JA</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2007</dc:date>
      <dcterms:issued>2007.12</dcterms:issued>
      <dcndl:price>381円</dcndl:price>
      <dc:extent>68p ; 26×21cm</dc:extent>
      <dc:subject xsi:type="dcndl:NDC10">E</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16471366"/>
      <dc:description> 2007</dc:description>
    </item>
    <item>
      <title>インターネット謎のメール事件:名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I3411B12811406</link>
      <description><![CDATA[<p>小学館,2000,<p><ul><li>タイトル：インターネット謎のメール事件:名探偵コナン</li><li>タイトル（読み）：インターネット　ナゾ　ノ　メール　ジケン:メイタンテイ　コナン</li><li>責任表示：小学館</li><li>NDC(9)：407</li></ul>]]></description>
      <author>小学館第七編集部マルチ・ソフト編集部/企画,小学館</author>
      <category>映像資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I3411B12811406</guid>
      <pubDate>Wed, 14 Aug 2024 04:24:32 +0900</pubDate>
      <dc:title>インターネット謎のメール事件:名探偵コナン</dc:title>
      <dcndl:titleTranscription>インターネット　ナゾ　ノ　メール　ジケン:メイタンテイ　コナン</dcndl:titleTranscription>
      <dc:creator>小学館第七編集部マルチ・ソフト編集部/企画</dc:creator>
      <dcndl:creatorTranscription>シヨウガクカン</dcndl:creatorTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2000</dc:date>
      <dcterms:issued>2000.</dcterms:issued>
      <dc:subject>科学</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">407</dc:subject>
      <dc:subject xsi:type="dcndl:NDC8">407</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www2.hplibra.pref.hiroshima.jp/bib/?B12811406"/>
      <dc:description> 2000</dc:description>
    </item>
    <item>
      <title>宇宙</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000136-I1130000798331611520</link>
      <description><![CDATA[<p>小学館,2004,4092172095<p><ul><li>タイトル：宇宙</li><li>タイトル（読み）：ウチュウ</li><li>責任表示：池内了監修・執筆 ; 半田利弘, 大内正己, 橋本樹明指導・執筆</li><li>NDC(9)：440.38</li></ul>]]></description>
      <author>池内, 了,半田, 利弘,大内, 正己,橋本, 樹明,池内了監修・執筆 ; 半田利弘, 大内正己, 橋本樹明指導・執筆</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000136-I1130000798331611520</guid>
      <pubDate>Sun, 22 Dec 2024 00:00:10 +0900</pubDate>
      <dc:title>宇宙</dc:title>
      <dcndl:titleTranscription>ウチュウ</dcndl:titleTranscription>
      <dc:creator>池内, 了</dc:creator>
      <dc:creator>半田, 利弘</dc:creator>
      <dc:creator>大内, 正己</dc:creator>
      <dc:creator>橋本, 樹明</dc:creator>
      <dcndl:creatorTranscription>イケウチ, サトル</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ハンダ, トシヒロ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>オオウチ, マサミ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ハシモト, タツアキ</dcndl:creatorTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>ja</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2004</dc:date>
      <dcterms:issued>2004.7</dcterms:issued>
      <dc:identifier xsi:type="dcndl:ISBN">4092172095</dc:identifier>
      <dc:identifier xsi:type="dcndl:NIIBibID">BA67668260</dc:identifier>
      <dc:subject>宇宙 -- 図鑑</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">440.38</dc:subject>
      <dc:subject xsi:type="dcndl:NDC8">440.38</dc:subject>
      <dc:description>付属資料: ドラえもん宇宙たんけんゲーム(1セット), わたしたちの銀河と太陽系(ポスター1枚)</dc:description>
      <dc:description>参考文献: p183</dc:description>
      <dc:description>「小学館の図鑑NEOスペシャルDVD : 名探偵コナンびっくり生き物大集合!」 (1枚 ; 12cm)付もあり</dc:description>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BA67668260"/>
      <dc:description> 2004</dc:description>
    </item>
    <item>
      <title>宇宙と重力の不思議</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000007845465</link>
      <description><![CDATA[<p>小学館,2005,4-09-296105-7<p><ul><li>タイトル：宇宙と重力の不思議</li><li>タイトル（読み）：ウチュウ ト ジュウリョク ノ フシギ</li><li>責任表示：青山剛昌 原作,ガリレオ工房 監修,金井正幸 まんが</li><li>シリーズ名：小学館学習まんがシリーズ. サイエンスコナン : 名探偵コナン実験・観察ファイル</li><li>シリーズ名（読み）：ショウガクカン ガクシュウ マンガ シリーズ. サイエンス コナン : メイタンテイ コナン ジッケン カンサツ ファイル</li><li>NDC(9)：440.12</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,ガリレオ工房,金井, 正幸,青山剛昌 原作,ガリレオ工房 監修,金井正幸 まんが</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000007845465</guid>
      <pubDate>Tue, 19 Jul 2022 19:00:48 +0900</pubDate>
      <dc:title>宇宙と重力の不思議</dc:title>
      <dcndl:titleTranscription>ウチュウ ト ジュウリョク ノ フシギ</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>ガリレオ工房</dc:creator>
      <dc:creator>金井, 正幸</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ガリレオ コウボウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>カナイ, マサユキ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>小学館学習まんがシリーズ. サイエンスコナン : 名探偵コナン実験・観察ファイル</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクカン ガクシュウ マンガ シリーズ. サイエンス コナン : メイタンテイ コナン ジッケン カンサツ ファイル</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2005</dc:date>
      <dcterms:issued>2005.8</dcterms:issued>
      <dcndl:price>800円</dcndl:price>
      <dc:extent>189p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">4-09-296105-7</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">4-09-296105-7</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000007845465</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">20836426</dc:identifier>
      <dc:subject>宇宙</dc:subject>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y11</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">440.12</dc:subject>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.hokkaido.jp/wo/opc/srh/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1006500248410"/>
      <rdfs:seeAlso rdf:resource="https://www.plib.pref.aomori.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1102657573"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.ibaraki.jp/licsxp-kopac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001001240292"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://catalog.library.metro.tokyo.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1106571358"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=422560&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.sagamihara.kanagawa.jp/TOSHOW/asp/WwShousaiKen.aspx?FCode=1176049"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.nagano.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001100264162"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.nagoya.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009915031772"/>
      <rdfs:seeAlso rdf:resource="https://www.shiga-pref-library.jp/wo/opc_srh/srh_detail/1862999/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bib/?B12000067"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0011028891"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000500080848"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1007001196944"/>
      <rdfs:seeAlso rdf:resource="http://www.lib.wakayama-c.ed.jp/winj/opac/switch-detail-iccap.do?bibid=1100484424"/>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.tottori.jp/winj/opac/switch-detail-iccap.do?bibid=1101256745"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009810771843"/>
      <rdfs:seeAlso rdf:resource="https://www2.hplibra.pref.hiroshima.jp/bib/?B11996318"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1102707539"/>
      <rdfs:seeAlso rdf:resource="https://library.pref.yamaguchi.lg.jp//wo/opc_srh/srh_detail/1000246021/"/>
      <rdfs:seeAlso rdf:resource="https://alislibopac.bunmori.tokushima.jp/winj/opac/switch-detail-iccap.do?bibid=1102096605"/>
      <rdfs:seeAlso rdf:resource="https://opac.toshokan.city.fukuoka.lg.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www2.tosyo-saga.jp/kentosyo2/opac/switch-detail-iccap.do?bibid=1100748820"/>
      <rdfs:seeAlso rdf:resource="https://opac.miraionlibrary.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009810825496"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000007845465"/>
      <rdfs:seeAlso rdf:resource="https://mediaarts-db.artmuseums.go.jp/id/M432400"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16448571"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/092961050000d0000000"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784092961050"/>
      <dc:description> 2005</dc:description>
    </item>
    <item>
      <title>美しい鰭</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I032688339</link>
      <description><![CDATA[<p>ユニバーサルミュージック,2023,<p><ul><li>タイトル：美しい鰭</li><li>タイトル（読み）：ウツクシイ ヒレ</li><li>責任表示：スピッツ</li></ul>]]></description>
      <author>スピッツ</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I032688339</guid>
      <pubDate>Thu, 8 Jun 2023 22:46:51 +0900</pubDate>
      <dc:title>美しい鰭</dc:title>
      <dcndl:titleTranscription>ウツクシイ ヒレ</dcndl:titleTranscription>
      <dc:publisher>ユニバーサルミュージック</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2023</dc:date>
      <dcterms:issued>2023.4</dcterms:issued>
      <dcndl:price>1350円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">UPCH-6001</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">032688339</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23842713</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>所要時間: 11分20秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I032688339"/>
      <dc:description> 2023</dc:description>
    </item>
    <item>
      <title>運動会スタンダード・マーチ・ベスト20-2</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000008976485</link>
      <description><![CDATA[<p>ビクターエンタテインメント,1998,<p><ul><li>タイトル：運動会スタンダード・マーチ・ベスト20-2</li><li>タイトル（読み）：ウンドウカイスタンダード マーチ ベスト20-2</li></ul>]]></description>
      <author/>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000008976485</guid>
      <pubDate>Wed, 22 Aug 2007 08:59:59 +0900</pubDate>
      <dc:title>運動会スタンダード・マーチ・ベスト20-2</dc:title>
      <dcndl:titleTranscription>ウンドウカイスタンダード マーチ ベスト20-2</dcndl:titleTranscription>
      <dc:publisher>ビクターエンタテインメント</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">1998</dc:date>
      <dcterms:issued>1998.4</dcterms:issued>
      <dc:extent>録音ディスク 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">VICG-60089</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000008976485</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>収録時間: 67分00秒</dc:description>
      <dc:description>ジャンル: 効果音</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000008976485"/>
      <dc:description> 1998</dc:description>
    </item>
    <item>
      <title>運動会の音楽</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I029029910</link>
      <description><![CDATA[<p>日本コロムビア,2018,<p><ul><li>タイトル：運動会の音楽</li><li>タイトル（読み）：ウンドウカイ ノ オンガク</li><li>責任表示：永井由利子, 宮里暁美 監修</li><li>シリーズ名：幼稚園・保育所・こども園向新保育行事&日常保育音楽集 ; 3</li></ul>]]></description>
      <author>永井由利子, 宮里暁美 監修</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I029029910</guid>
      <pubDate>Tue, 24 Jul 2018 02:06:43 +0900</pubDate>
      <dc:title>運動会の音楽</dc:title>
      <dcndl:titleTranscription>ウンドウカイ ノ オンガク</dcndl:titleTranscription>
      <dcndl:seriesTitle>幼稚園・保育所・こども園向新保育行事&amp;日常保育音楽集 ; 3</dcndl:seriesTitle>
      <dc:publisher>日本コロムビア</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2018</dc:date>
      <dcterms:issued>2018.5</dcterms:issued>
      <dc:extent>録音ディスク 1枚 (69分)</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">COCE-40339</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">029029910</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23078191</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I029029910"/>
      <dc:description> 2018</dc:description>
    </item>
    <item>
      <title>運命のルーレット廻して ; サヨナラは始まりの言葉</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I027014360</link>
      <description><![CDATA[<p>[Being],2016,<p><ul><li>タイトル：運命のルーレット廻して ; サヨナラは始まりの言葉</li><li>タイトル（読み）：ウンメイ ノ ルーレット マワシテ ; サヨナラ ワ ハジマリ ノ コトバ</li><li>責任表示：La PomPon</li></ul>]]></description>
      <author>La PomPon</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I027014360</guid>
      <pubDate>Wed, 29 Jun 2022 02:16:58 +0900</pubDate>
      <dc:title>運命のルーレット廻して ; サヨナラは始まりの言葉</dc:title>
      <dcndl:titleTranscription>ウンメイ ノ ルーレット マワシテ ; サヨナラ ワ ハジマリ ノ コトバ</dcndl:titleTranscription>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2016</dc:date>
      <dcterms:issued>2016.3</dcterms:issued>
      <dcndl:price>1852円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">JBCZ-4019</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">027014360</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23695549</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>初回限定盤</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I027014360"/>
      <dc:description> 2016</dc:description>
    </item>
    <item>
      <title>運命のルーレット廻して ; サヨナラは始まりの言葉</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I027014361</link>
      <description><![CDATA[<p>[Being],2016,<p><ul><li>タイトル：運命のルーレット廻して ; サヨナラは始まりの言葉</li><li>タイトル（読み）：ウンメイ ノ ルーレット マワシテ ; サヨナラ ワ ハジマリ ノ コトバ</li><li>責任表示：La PomPon</li></ul>]]></description>
      <author>La PomPon</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I027014361</guid>
      <pubDate>Thu, 25 Aug 2022 02:16:17 +0900</pubDate>
      <dc:title>運命のルーレット廻して ; サヨナラは始まりの言葉</dc:title>
      <dcndl:titleTranscription>ウンメイ ノ ルーレット マワシテ ; サヨナラ ワ ハジマリ ノ コトバ</dcndl:titleTranscription>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2016</dc:date>
      <dcterms:issued>2016.3</dcterms:issued>
      <dcndl:price>1111円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">JBCZ-6038</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">027014361</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23719994</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I027014361"/>
      <dc:description> 2016</dc:description>
    </item>
    <item>
      <title>映画音楽に恋して-風の吹く先に : beautiful film music</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I031747732</link>
      <description><![CDATA[<p>King Records,2021,<p><ul><li>タイトル：映画音楽に恋して-風の吹く先に : beautiful film music</li><li>タイトル（読み）：エイガ オンガク ニ コイシテ - カゼ ノ フク サキ ニ</li><li>責任表示：MARIERIKA ピアノ・ヴァイオリン・ヴィオラ</li></ul>]]></description>
      <author>MARIERIKA ピアノ・ヴァイオリン・ヴィオラ</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I031747732</guid>
      <pubDate>Wed, 30 Mar 2022 02:00:52 +0900</pubDate>
      <dc:title>映画音楽に恋して-風の吹く先に : beautiful film music</dc:title>
      <dcndl:titleTranscription>エイガ オンガク ニ コイシテ - カゼ ノ フク サキ ニ</dcndl:titleTranscription>
      <dc:publisher>King Records</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2021</dc:date>
      <dcterms:issued>2021.12</dcterms:issued>
      <dcndl:price>1818円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">KICS-4036</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">031747732</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23660041</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>所要時間: 65分36秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I031747732"/>
      <dc:description> 2021</dc:description>
    </item>
    <item>
      <title>映画音楽に恋して～風の吹く先に～</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I01213008000155900</link>
      <description><![CDATA[<p>キングレコード,2021-12,<p><ul><li>タイトル：映画音楽に恋して～風の吹く先に～</li><li>タイトル（読み）：エイガ　オンガク　ニ　コイシテ　カゼ　ノ　フク　サキ　ニ</li><li>責任表示：MARIERIKA／演</li><li>NDC(9)：M46</li></ul>]]></description>
      <author>MARIERIKA,アンドレア・モリコーネ,エンニオ・モリコーネ,ジャスティン・ポール,クリスティン・アンダーソン=ロペス,ロバート・ロペス,ERIKA,久石　譲,辻井 伸行,米津 玄師,ハロルド・アーレン,エドガー・イップ・ハーバーグ,リー・ハーライン,チャールズ・チャップリン,Nakajin,FUKASE,Saori,徳永 暁人,ピエトロ・マスカーニ,MARIERIKA／演</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I01213008000155900</guid>
      <pubDate>Tue, 17 May 2022 23:15:24 +0900</pubDate>
      <dc:title>映画音楽に恋して～風の吹く先に～</dc:title>
      <dcndl:titleTranscription>エイガ　オンガク　ニ　コイシテ　カゼ　ノ　フク　サキ　ニ</dcndl:titleTranscription>
      <dc:creator>MARIERIKA</dc:creator>
      <dc:creator>アンドレア・モリコーネ</dc:creator>
      <dc:creator>エンニオ・モリコーネ</dc:creator>
      <dc:creator>ジャスティン・ポール</dc:creator>
      <dc:creator>クリスティン・アンダーソン=ロペス</dc:creator>
      <dc:creator>ロバート・ロペス</dc:creator>
      <dc:creator>ERIKA</dc:creator>
      <dc:creator>久石　譲</dc:creator>
      <dc:creator>辻井 伸行</dc:creator>
      <dc:creator>米津 玄師</dc:creator>
      <dc:creator>ハロルド・アーレン</dc:creator>
      <dc:creator>エドガー・イップ・ハーバーグ</dc:creator>
      <dc:creator>リー・ハーライン</dc:creator>
      <dc:creator>チャールズ・チャップリン</dc:creator>
      <dc:creator>Nakajin</dc:creator>
      <dc:creator>FUKASE</dc:creator>
      <dc:creator>Saori</dc:creator>
      <dc:creator>徳永 暁人</dc:creator>
      <dc:creator>ピエトロ・マスカーニ</dc:creator>
      <dcndl:creatorTranscription>マリエリカ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>モリコーネ　アンドレア</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>モリコーネ　エンニオ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ポール　ジャスティン</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アンダーソン　ロペス　クリスティン</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ロバート ロペス</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>エリカ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ヒサイシ　ジョウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ツジイ ノブユキ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ヨネズ ケンシ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アーレン　ハロルド</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ハーバーグ　エドガーイップ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ハーライン　リー</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>チャップリン　チャールズ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ナカジン</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>フカセ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>サオリ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>トクナガ アキヒト</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>マスカーニ　ピエトロ</dcndl:creatorTranscription>
      <dc:publisher>キングレコード</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2021-12</dc:date>
      <dcterms:issued>2021.12</dcterms:issued>
      <dcndl:price>￥１８１８</dcndl:price>
      <dc:extent>１枚</dc:extent>
      <dc:subject xsi:type="dcndl:NDC9">M46</dc:subject>
      <dc:description>★全曲インストゥルメンタル★　
１．愛のテーマ　「ニュー・シネマ・パラダイス」より　 アンドレア・モリコーネ／作曲、エンニオ・モリコーネ／作曲、MARIERIKA／編曲　　
２．ディス・イズ・ミー　「グレイテスト・ショーマン」より　 ベンジ・パセク／作曲、ジャスティン・ポール／作曲、MARIERIKA／編曲　　
３．リメンバー・ミー　「リメンバー・ミー」より　 クリスティン・アンダーソン=ロペス／作曲、ロバート・ロペス／作曲、ERIKA／編曲　　
４．人生のメリーゴーランド　「ハウルの動く城」より　 久石　譲／作曲、MARIERIKA／編曲　　
５．ふたたび　「千と千尋の神隠し」より　 久石　譲／作曲、MARIERIKA／編曲　　
６．神様のカルテ　「神様のカルテ」より　 辻井 伸行／作曲、MARIERIKA／編曲　　
７．打上花火　「打ち上げ花火、下から見るか？横から見るか？」より　 米津 玄師／作曲、ERIKA／編曲　　
８．虹の彼方に　「オズの魔法使」より　 ハロルド・アーレン／作曲、エドガー・イップ・ハーバーグ／作曲、MARIERIKA／編曲　　
９．星に願いを　「ピノキオ」より　 リー・ハーライン／作曲、MARIERIKA／編曲　　
１０．スマイル　「モダン・タイムス」より　 チャールズ・チャップリン／作曲、MARIERIKA／編曲　　
１１．Summer　「菊次郎の夏」より　 久石　譲／作曲、MARIERIKA／編曲　　
１２．RAIN　「メアリと魔女の花」より　 Nakajin／作曲、FUKASE／作曲、Saori／作曲、ERIKA／編曲　　
１３．旅立ち　「魔女の宅急便」より　 久石　譲／作曲、MARIERIKA／編曲　　
１４．渡月橋 ~君　想ふ∼　「劇場版　名探偵コナン　から紅の恋歌」より　 徳永 暁人／作曲、ERIKA／編曲　　
１５．歌劇《カヴァレリア・ルスティカーナ》より間奏曲　「ゴッドファーザーPARTⅢ」より　 ピエトロ・マスカーニ／作曲、MARIERIKA／編曲　　
１６．風の吹く先に―エピローグ―　 ERIKA／作曲、MARIERIKA／編曲</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=3008000155900"/>
      <dc:description> 2021-12</dc:description>
    </item>
    <item>
      <title>えいが名探偵コナン世紀末の魔術師 : コナンたいかいとうキッドのまき</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000002801176</link>
      <description><![CDATA[<p>小学館,1999,4-09-114761-5<p><ul><li>タイトル：えいが名探偵コナン世紀末の魔術師 : コナンたいかいとうキッドのまき</li><li>タイトル（読み）：エイガ メイタンテイ コナン セイキマツ ノ マジュツシ : コナン タイ カイトウ キッド ノ マキ</li><li>シリーズ名：小学館のテレビ絵本</li><li>シリーズ名（読み）：ショウガクカン ノ テレビ エホン</li></ul>]]></description>
      <author/>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000002801176</guid>
      <pubDate>Mon, 8 Aug 2022 18:50:33 +0900</pubDate>
      <dc:title>えいが名探偵コナン世紀末の魔術師 : コナンたいかいとうキッドのまき</dc:title>
      <dcndl:titleTranscription>エイガ メイタンテイ コナン セイキマツ ノ マジュツシ : コナン タイ カイトウ キッド ノ マキ</dcndl:titleTranscription>
      <dcndl:seriesTitle>小学館のテレビ絵本</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクカン ノ テレビ エホン</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">1999</dc:date>
      <dcterms:issued>c1999</dcterms:issued>
      <dcndl:price>400円</dcndl:price>
      <dc:extent>17p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">4-09-114761-5</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">4-09-114761-5</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000002801176</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">99108789</dc:identifier>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000002801176"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16175636"/>
      <dc:description> 1999</dc:description>
    </item>
    <item>
      <title>えいが名探偵コナン : 天国へのカウントダウンのまき</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000003010762</link>
      <description><![CDATA[<p>小学館,2001,4-09-115381-X<p><ul><li>タイトル：えいが名探偵コナン : 天国へのカウントダウンのまき</li><li>タイトル（読み）：エイガ メイタンテイ コナン : テンゴク エノ カウントダウン ノ マキ</li><li>シリーズ名：小学館のテレビ絵本. ギンピカシール絵本</li><li>シリーズ名（読み）：ショウガクカン ノ テレビ エホン. ギンピカ シール エホン</li></ul>]]></description>
      <author/>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000003010762</guid>
      <pubDate>Mon, 1 Aug 2022 18:33:18 +0900</pubDate>
      <dc:title>えいが名探偵コナン : 天国へのカウントダウンのまき</dc:title>
      <dcndl:titleTranscription>エイガ メイタンテイ コナン : テンゴク エノ カウントダウン ノ マキ</dcndl:titleTranscription>
      <dcndl:seriesTitle>小学館のテレビ絵本. ギンピカシール絵本</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクカン ノ テレビ エホン. ギンピカ シール エホン</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2001</dc:date>
      <dcterms:issued>c2001</dcterms:issued>
      <dcndl:price>476円</dcndl:price>
      <dc:extent>19p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">4-09-115381-X</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">4-09-115381-X</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000003010762</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">20185175</dc:identifier>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000003010762"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16236759"/>
      <dc:description> 2001</dc:description>
    </item>
    <item>
      <title>えいが名探偵コナン : 瞳の中の暗殺者のまき</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000002901069</link>
      <description><![CDATA[<p>小学館,2000,4-09-114806-9<p><ul><li>タイトル：えいが名探偵コナン : 瞳の中の暗殺者のまき</li><li>タイトル（読み）：エイガ メイタンテイ コナン : ヒトミ ノ ナカ ノ アンサツシャ ノ マキ</li><li>シリーズ名：小学館のテレビ絵本. ギンピカシール絵本</li><li>シリーズ名（読み）：ショウガクカン ノ テレビ エホン. ギンピカ シール エホン</li></ul>]]></description>
      <author/>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000002901069</guid>
      <pubDate>Mon, 1 Aug 2022 18:46:36 +0900</pubDate>
      <dc:title>えいが名探偵コナン : 瞳の中の暗殺者のまき</dc:title>
      <dcndl:titleTranscription>エイガ メイタンテイ コナン : ヒトミ ノ ナカ ノ アンサツシャ ノ マキ</dcndl:titleTranscription>
      <dcndl:seriesTitle>小学館のテレビ絵本. ギンピカシール絵本</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクカン ノ テレビ エホン. ギンピカ シール エホン</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2000</dc:date>
      <dcterms:issued>c2000</dcterms:issued>
      <dcndl:price>476円</dcndl:price>
      <dc:extent>19p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">4-09-114806-9</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">4-09-114806-9</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000002901069</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">20079860</dc:identifier>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <rdfs:seeAlso rdf:resource="https://opac.miraionlibrary.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000000489279"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000002901069"/>
      <dc:description> 2000</dc:description>
    </item>
    <item>
      <title>えいが名探偵コナン : ベイカー街の亡霊のまき</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000003667312</link>
      <description><![CDATA[<p>小学館,2002,4-09-115385-2<p><ul><li>タイトル：えいが名探偵コナン : ベイカー街の亡霊のまき</li><li>タイトル（読み）：エイガ メイタンテイ コナン : ベイカー ストリート ノ ボウレイ ノ マキ</li><li>シリーズ名：小学館のテレビ絵本. ギンピカシール絵本</li><li>シリーズ名（読み）：ショウガクカン ノ テレビ エホン. ギンピカ シール エホン</li></ul>]]></description>
      <author/>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000003667312</guid>
      <pubDate>Mon, 25 Jul 2022 17:14:57 +0900</pubDate>
      <dc:title>えいが名探偵コナン : ベイカー街の亡霊のまき</dc:title>
      <dcndl:titleTranscription>エイガ メイタンテイ コナン : ベイカー ストリート ノ ボウレイ ノ マキ</dcndl:titleTranscription>
      <dcndl:seriesTitle>小学館のテレビ絵本. ギンピカシール絵本</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクカン ノ テレビ エホン. ギンピカ シール エホン</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2002</dc:date>
      <dcterms:issued>c2002</dcterms:issued>
      <dcndl:price>476円</dcndl:price>
      <dc:extent>19p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">4-09-115385-2</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">4-09-115385-2</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000003667312</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">20300456</dc:identifier>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.iwate.jp/opac/advanced-search"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000003667312"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16240129"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784091153852"/>
      <dc:description> 2002</dc:description>
    </item>
    <item>
      <title>エスケープ・フロム・ナイト : 名探偵コナン : 快新、K新</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I033696426</link>
      <description><![CDATA[<p>カンパニュラの鐘 + Room-C,2016,<p><ul><li>タイトル：エスケープ・フロム・ナイト : 名探偵コナン : 快新、K新</li><li>タイトル（読み）：エスケープ ・ フロム ・ ナイト : メイタンテイ コナン : カイシン 、 Kシン</li><li>責任表示：六花, mio 執筆</li></ul>]]></description>
      <author>六花, mio 執筆</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I033696426</guid>
      <pubDate>Mon, 30 Sep 2024 22:49:18 +0900</pubDate>
      <dc:title>エスケープ・フロム・ナイト : 名探偵コナン : 快新、K新</dc:title>
      <dcndl:titleTranscription>エスケープ ・ フロム ・ ナイト : メイタンテイ コナン : カイシン 、 Kシン</dcndl:titleTranscription>
      <dc:publisher>カンパニュラの鐘 + Room-C</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2016</dc:date>
      <dcterms:issued>2016.9</dcterms:issued>
      <dc:extent>52 p</dc:extent>
      <dc:identifier xsi:type="dcndl:NDLBibID">033696426</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">24029344</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">Y94</dc:subject>
      <dc:description>出版</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I033696426"/>
      <dc:description> 2016</dc:description>
    </item>
    <item>
      <title>江戸の謎</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000009785552</link>
      <description><![CDATA[<p>小学館,2008,978-4-09-296126-5<p><ul><li>タイトル：江戸の謎</li><li>タイトル（読み）：エド ノ ナゾ</li><li>責任表示：青山剛昌 原作,丸伝次郎 まんが,大石学 監修,平良隆久 シナリオ</li><li>シリーズ名：小学館学習まんがシリーズ. 名探偵コナン推理ファイル ; 特別編</li><li>シリーズ名（読み）：ショウガクカン ガクシュウ マンガ シリーズ. メイタンテイ コナン スイリ ファイル ; トクベツヘン</li><li>NDC(9)：213.61</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,丸, 伝次郎,大石, 学, 1953-,平良, 隆久,青山剛昌 原作,丸伝次郎 まんが,大石学 監修,平良隆久 シナリオ</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000009785552</guid>
      <pubDate>Mon, 4 Jul 2022 21:54:46 +0900</pubDate>
      <dc:title>江戸の謎</dc:title>
      <dcndl:titleTranscription>エド ノ ナゾ</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>丸, 伝次郎</dc:creator>
      <dc:creator>大石, 学, 1953-</dc:creator>
      <dc:creator>平良, 隆久</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>マル, デンジロウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>オオイシ, マナブ, 1953-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>タイラ, タカヒサ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>小学館学習まんがシリーズ. 名探偵コナン推理ファイル ; 特別編</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクカン ガクシュウ マンガ シリーズ. メイタンテイ コナン スイリ ファイル ; トクベツヘン</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2008</dc:date>
      <dcterms:issued>2008.11</dcterms:issued>
      <dcndl:price>750円</dcndl:price>
      <dc:extent>143p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-296126-5</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000009785552</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">21516516</dc:identifier>
      <dc:subject>日本--歴史--江戸時代</dc:subject>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y2</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">213.61</dc:subject>
      <dc:description>年表あり</dc:description>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.hokkaido.jp/wo/opc/srh/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1008000097555"/>
      <rdfs:seeAlso rdf:resource="https://www.plib.pref.aomori.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1103003604"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.ibaraki.jp/licsxp-kopac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001001626180"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.city.saitama.jp/bookdetail?num=2216853&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=1794505&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.sagamihara.kanagawa.jp/TOSHOW/asp/WwShousaiKen.aspx?FCode=2414534"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.ishikawa.lg.jp/wo/opc_srh/srh_detail/1100000186281/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.nagoya.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000810114436"/>
      <rdfs:seeAlso rdf:resource="https://www.shiga-pref-library.jp/wo/opc_srh/srh_detail/2174752/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bib/?B12397128"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0011752586"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000800396719"/>
      <rdfs:seeAlso rdf:resource="http://www.lib.wakayama-c.ed.jp/winj/opac/switch-detail-iccap.do?bibid=1100547657"/>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.tottori.jp/winj/opac/switch-detail-iccap.do?bibid=1101543834"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009811130633"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1103039114"/>
      <rdfs:seeAlso rdf:resource="https://library.pref.yamaguchi.lg.jp//wo/opc_srh/srh_detail/1000590370/"/>
      <rdfs:seeAlso rdf:resource="https://www.ehimetosyokan.jp/winj/opac/switch-detail-iccap.do?bibid=1100576929"/>
      <rdfs:seeAlso rdf:resource="https://opac.toshokan.city.fukuoka.lg.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www2.tosyo-saga.jp/kentosyo2/opac/switch-detail-iccap.do?bibid=1101162107"/>
      <rdfs:seeAlso rdf:resource="https://opac.miraionlibrary.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000000496515"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000009785552"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16478995"/>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BA87756360"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784092961265"/>
      <dc:description> 2008</dc:description>
    </item>
    <item>
      <title>焔燃かく語りき : 『サンデー』でぼくらが学んだこと</title>
      <link>https://ndlsearch.ndl.go.jp/books/R000000004-I026576078</link>
      <description><![CDATA[<p><p><ul><li>タイトル：焔燃かく語りき : 『サンデー』でぼくらが学んだこと</li><li>タイトル（読み）：エンネンカク カタリキ : 『 サンデー 』 デ ボク ラ ガ マナンダ コト</li><li>責任表示：島本 和彦,斎藤 宣彦</li><li>シリーズ名：特集 週刊少年サンデーの時代 : トキワ荘から『うる星やつら』『タッチ』『名探偵コナン』そして『マギ』『銀の匙』へ : マンガの青春は終わらない</li><li>シリーズ名（読み）：トクシュウ シュウカン ショウネン サンデー ノ ジダイ : トキワソウ カラ 『 ウル ホシ ヤツラ 』 『 タッチ 』 『 メイ タンテイ コナン 』 ソシテ 『 マギ 』 『 ギン ノ サジ 』 エ : マンガ ノ セイシュン ワ オワラナイ</li></ul>]]></description>
      <author>島本 和彦,斎藤 宣彦,島本 和彦,斎藤 宣彦</author>
      <category>記事</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R000000004-I026576078</guid>
      <pubDate>Wed, 26 Jun 2024 20:40:54 +0900</pubDate>
      <dc:title>焔燃かく語りき : 『サンデー』でぼくらが学んだこと</dc:title>
      <dcndl:titleTranscription>エンネンカク カタリキ : 『 サンデー 』 デ ボク ラ ガ マナンダ コト</dcndl:titleTranscription>
      <dc:creator>島本 和彦</dc:creator>
      <dc:creator>斎藤 宣彦</dc:creator>
      <dcndl:seriesTitle>特集 週刊少年サンデーの時代 : トキワ荘から『うる星やつら』『タッチ』『名探偵コナン』そして『マギ』『銀の匙』へ : マンガの青春は終わらない</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>トクシュウ シュウカン ショウネン サンデー ノ ジダイ : トキワソウ カラ 『 ウル ホシ ヤツラ 』 『 タッチ 』 『 メイ タンテイ コナン 』 ソシテ 『 マギ 』 『 ギン ノ サジ 』 エ : マンガ ノ セイシュン ワ オワラナイ</dcndl:seriesTitleTranscription>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:identifier xsi:type="dcndl:NDLBibID">026576078</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">ZK24</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R000000004-I026576078"/>
      <rdfs:seeAlso rdf:resource="https://cir.nii.ac.jp/crid/1520291855421312512"/>
      <dc:description>掲載誌：ユリイカ = Eureka 3(通号 641) p.84-100</dc:description>
    </item>
    <item>
      <title>大高忍『マギ』のすばらしさと｢サンデーらしさ｣のあいだに関係はあるのかないのか会議</title>
      <link>https://ndlsearch.ndl.go.jp/books/R000000004-I026576229</link>
      <description><![CDATA[<p><p><ul><li>タイトル：大高忍『マギ』のすばらしさと｢サンデーらしさ｣のあいだに関係はあるのかないのか会議</li><li>タイトル（読み）：オオダカ ニン 『 マギ 』 ノ スバラシサ ト 「 サンデー ラシサ 」 ノ アイダ ニ カンケイ ワ アル ノ カナイ ノ カ カイギ</li><li>責任表示：飯田 一史</li><li>シリーズ名：特集 週刊少年サンデーの時代 : トキワ荘から『うる星やつら』『タッチ』『名探偵コナン』そして『マギ』『銀の匙』へ : マンガの青春は終わらない</li><li>シリーズ名（読み）：トクシュウ シュウカン ショウネン サンデー ノ ジダイ : トキワソウ カラ 『 ウル ホシ ヤツラ 』 『 タッチ 』 『 メイ タンテイ コナン 』 ソシテ 『 マギ 』 『 ギン ノ サジ 』 エ : マンガ ノ セイシュン ワ オワラナイ</li></ul>]]></description>
      <author>飯田 一史,飯田 一史</author>
      <category>記事</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R000000004-I026576229</guid>
      <pubDate>Wed, 26 Jun 2024 20:40:39 +0900</pubDate>
      <dc:title>大高忍『マギ』のすばらしさと｢サンデーらしさ｣のあいだに関係はあるのかないのか会議</dc:title>
      <dcndl:titleTranscription>オオダカ ニン 『 マギ 』 ノ スバラシサ ト 「 サンデー ラシサ 」 ノ アイダ ニ カンケイ ワ アル ノ カナイ ノ カ カイギ</dcndl:titleTranscription>
      <dc:creator>飯田 一史</dc:creator>
      <dcndl:seriesTitle>特集 週刊少年サンデーの時代 : トキワ荘から『うる星やつら』『タッチ』『名探偵コナン』そして『マギ』『銀の匙』へ : マンガの青春は終わらない</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>トクシュウ シュウカン ショウネン サンデー ノ ジダイ : トキワソウ カラ 『 ウル ホシ ヤツラ 』 『 タッチ 』 『 メイ タンテイ コナン 』 ソシテ 『 マギ 』 『 ギン ノ サジ 』 エ : マンガ ノ セイシュン ワ オワラナイ</dcndl:seriesTitleTranscription>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:identifier xsi:type="dcndl:NDLBibID">026576229</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">ZK24</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R000000004-I026576229"/>
      <rdfs:seeAlso rdf:resource="https://cir.nii.ac.jp/crid/1521417753437177600"/>
      <dc:description>掲載誌：ユリイカ = Eureka 3(通号 641) p.195-205</dc:description>
    </item>
    <item>
      <title>オーバーライト ; 脳内survivor</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I023585607</link>
      <description><![CDATA[<p>[Being],2012,<p><ul><li>タイトル：オーバーライト ; 脳内survivor</li><li>タイトル（読み）：オーバーライト ; ノウナイ survivor</li><li>責任表示：BREAKERZ</li></ul>]]></description>
      <author>BREAKERZ</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I023585607</guid>
      <pubDate>Fri, 15 Jul 2022 00:55:05 +0900</pubDate>
      <dc:title>オーバーライト ; 脳内survivor</dc:title>
      <dcndl:titleTranscription>オーバーライト ; ノウナイ survivor</dcndl:titleTranscription>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2012</dc:date>
      <dcterms:issued>2012.6</dcterms:issued>
      <dcndl:price>1600円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">ZACL-4037</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">023585607</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23702716</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>初回限定盤A</dc:description>
      <dc:description>付属資料: DVD 1枚 (12 cm) : Music clip + music clip off shot</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I023585607"/>
      <dc:description> 2012</dc:description>
    </item>
    <item>
      <title>オーバーライト ; 脳内survivor</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I023585609</link>
      <description><![CDATA[<p>[Being],2012,<p><ul><li>タイトル：オーバーライト ; 脳内survivor</li><li>タイトル（読み）：オーバーライト ; ノウナイ survivor</li><li>責任表示：BREAKERZ</li></ul>]]></description>
      <author>BREAKERZ</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I023585609</guid>
      <pubDate>Fri, 15 Jul 2022 00:54:34 +0900</pubDate>
      <dc:title>オーバーライト ; 脳内survivor</dc:title>
      <dcndl:titleTranscription>オーバーライト ; ノウナイ survivor</dcndl:titleTranscription>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2012</dc:date>
      <dcterms:issued>2012.6</dcterms:issued>
      <dcndl:price>1200円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">ZACL-4039</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">023585609</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23702714</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>通常盤</dc:description>
      <dc:description>所要時間: 13分52秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I023585609"/>
      <dc:description> 2012</dc:description>
    </item>
    <item>
      <title>ＯＰＡＭ大分県立美術館チラシパンフレット等</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I44111110343548</link>
      <description><![CDATA[<p>平成３１年度・令和元年度,大分県立美術館,2019,<p><ul><li>タイトル：ＯＰＡＭ大分県立美術館チラシパンフレット等</li><li>タイトル（読み）：オーパム　オオイタ　ケンリツ　ビジュツカン　チラシ　パンフレットナド</li><li>責任表示：大分県立美術館 〔編〕</li></ul>]]></description>
      <author>大分県立美術館,大分県立美術館 〔編〕</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I44111110343548</guid>
      <pubDate>Wed, 27 Oct 2021 11:19:27 +0900</pubDate>
      <dc:title>ＯＰＡＭ大分県立美術館チラシパンフレット等</dc:title>
      <dcndl:titleTranscription>オーパム　オオイタ　ケンリツ　ビジュツカン　チラシ　パンフレットナド</dcndl:titleTranscription>
      <dc:creator>大分県立美術館</dc:creator>
      <dcndl:creatorTranscription>オオイタケンリツビジュツカン</dcndl:creatorTranscription>
      <dcndl:volume>平成３１年度・令和元年度</dcndl:volume>
      <dc:publisher>大分県立美術館</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2019</dc:date>
      <dcterms:issued>2019.4～2020.3</dcterms:issued>
      <dc:extent>30枚 ; 30cm</dc:extent>
      <dc:description>「やっぱりぼくにはわからん展」は２枚あり（デザイン違い）．　バインダー入り．</dc:description>
      <rdfs:seeAlso rdf:resource="https://library.pref.oita.jp/winj/opac/switch-detail-iccap.do?bibid=1110343548"/>
      <dc:description> 2019</dc:description>
    </item>
    <item>
      <title>オー!リバル</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I026083626</link>
      <description><![CDATA[<p>Sony Music Labels,2015,<p><ul><li>タイトル：オー!リバル</li><li>タイトル（読み）：オー リバル</li><li>責任表示：ポルノグラフィティ</li></ul>]]></description>
      <author>ポルノグラフィティ</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I026083626</guid>
      <pubDate>Fri, 22 May 2015 20:15:42 +0900</pubDate>
      <dc:title>オー!リバル</dc:title>
      <dcndl:titleTranscription>オー リバル</dcndl:titleTranscription>
      <dc:publisher>Sony Music Labels</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2015</dc:date>
      <dcterms:issued>2015.4</dcterms:issued>
      <dcndl:price>1481円</dcndl:price>
      <dc:extent>録音ディスク 1枚 (14分)</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">SECL-1669</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">026083626</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22566762</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>初回生産限定盤</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I026083626"/>
      <dc:description> 2015</dc:description>
    </item>
    <item>
      <title>オルゴールが奏でるシネマ&amp;ドラマ・ヒッツ</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I029106992</link>
      <description><![CDATA[<p>日本クラウン,2018,<p><ul><li>タイトル：オルゴールが奏でるシネマ&ドラマ・ヒッツ</li><li>タイトル（読み）：オルゴール ガ カナデル シネマ & ドラマ ヒッツ</li><li>シリーズ名：オルゴール・セレクション</li></ul>]]></description>
      <author/>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I029106992</guid>
      <pubDate>Thu, 29 Nov 2018 20:12:29 +0900</pubDate>
      <dc:title>オルゴールが奏でるシネマ&amp;ドラマ・ヒッツ</dc:title>
      <dcndl:titleTranscription>オルゴール ガ カナデル シネマ &amp; ドラマ ヒッツ</dcndl:titleTranscription>
      <dcndl:seriesTitle>オルゴール・セレクション</dcndl:seriesTitle>
      <dc:publisher>日本クラウン</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2018</dc:date>
      <dcterms:issued>2018.10</dcterms:issued>
      <dcndl:price>2037円</dcndl:price>
      <dc:extent>録音ディスク 2枚 (114分)</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">CRCI-20864</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">029106992</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23137060</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=3001303005790"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I029106992"/>
      <dc:description> 2018</dc:description>
    </item>
    <item>
      <title>オレンジ色に乾杯</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I031531471</link>
      <description><![CDATA[<p>GIZA,2021,<p><ul><li>タイトル：オレンジ色に乾杯</li><li>タイトル（読み）：オレンジイロ ニ カンパイ</li><li>責任表示：SARD UNDERGROUND</li></ul>]]></description>
      <author>SARD UNDERGROUND</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I031531471</guid>
      <pubDate>Tue, 5 Jul 2022 00:40:25 +0900</pubDate>
      <dc:title>オレンジ色に乾杯</dc:title>
      <dcndl:titleTranscription>オレンジイロ ニ カンパイ</dcndl:titleTranscription>
      <dc:publisher>GIZA</dc:publisher>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2021</dc:date>
      <dcterms:issued>2021.9</dcterms:issued>
      <dcndl:price>4500円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">GZCA-5306</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">031531471</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23698067</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>頒布</dc:description>
      <dc:description>初回限定盤A</dc:description>
      <dc:description>所要時間: 44分47秒</dc:description>
      <dc:description>付属資料: DVD 1枚 (12 cm) : SARD UNDERGROUND memory of 2019-2021</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I031531471"/>
      <dc:description> 2021</dc:description>
    </item>
    <item>
      <title>オレンジ色に乾杯</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I031531472</link>
      <description><![CDATA[<p>GIZA,2021,<p><ul><li>タイトル：オレンジ色に乾杯</li><li>タイトル（読み）：オレンジイロ ニ カンパイ</li><li>責任表示：SARD UNDERGROUND</li></ul>]]></description>
      <author>SARD UNDERGROUND</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I031531472</guid>
      <pubDate>Thu, 23 Jun 2022 23:17:44 +0900</pubDate>
      <dc:title>オレンジ色に乾杯</dc:title>
      <dcndl:titleTranscription>オレンジイロ ニ カンパイ</dcndl:titleTranscription>
      <dc:publisher>GIZA</dc:publisher>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2021</dc:date>
      <dcterms:issued>2021.9</dcterms:issued>
      <dcndl:price>4000円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">GZCA-5307</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">031531472</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23693584</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>頒布</dc:description>
      <dc:description>初回限定盤B</dc:description>
      <dc:description>所要時間: 44分47秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I031531472"/>
      <dc:description> 2021</dc:description>
    </item>
    <item>
      <title>音楽家・大野克夫の世界 傷だらけの天使・太陽にほえろ!・名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000010904086</link>
      <description><![CDATA[<p>ユニバーサルミュージック,2010,<p><ul><li>タイトル：音楽家・大野克夫の世界 傷だらけの天使・太陽にほえろ!・名探偵コナン</li><li>タイトル（読み）：オンガクカ オオノ カツオ ノ セカイ</li><li>責任表示：大野克夫 [作曲・編曲]</li></ul>]]></description>
      <author>大野克夫 [作曲・編曲]</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000010904086</guid>
      <pubDate>Wed, 28 Jul 2010 20:13:40 +0900</pubDate>
      <dc:title>音楽家・大野克夫の世界 傷だらけの天使・太陽にほえろ!・名探偵コナン</dc:title>
      <dcndl:titleTranscription>オンガクカ オオノ カツオ ノ セカイ</dcndl:titleTranscription>
      <dc:publisher>ユニバーサルミュージック</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2010</dc:date>
      <dcterms:issued>2010.5</dcterms:issued>
      <dcndl:price>2000円 (税込)</dcndl:price>
      <dc:extent>録音ディスク 1枚 (64分)</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">UPCY-6582</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000010904086</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">21781942</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000010904086"/>
      <dc:description> 2010</dc:description>
    </item>
    <item>
      <title>カインド・オブ・ピンク</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I22213001303006625</link>
      <description><![CDATA[<p>KING RECORDS,2019-09,<p><ul><li>タイトル：カインド・オブ・ピンク</li><li>タイトル（読み）：カインド オブ ピンク</li><li>責任表示：ユッコ・ミラー／sax</li></ul>]]></description>
      <author>ユッコ・ミラー,ユッコ・ミラー／sax</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I22213001303006625</guid>
      <pubDate>Wed, 20 Nov 2024 19:25:30 +0900</pubDate>
      <dc:title>カインド・オブ・ピンク</dc:title>
      <dcndl:titleTranscription>カインド オブ ピンク</dcndl:titleTranscription>
      <dc:creator>ユッコ・ミラー</dc:creator>
      <dcndl:creatorTranscription>ユッコ ミラー</dcndl:creatorTranscription>
      <dc:publisher>KING RECORDS</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2019-09</dc:date>
      <dcterms:issued>2019.9</dcterms:issued>
      <dcndl:price>￥３０００</dcndl:price>
      <dc:extent>1</dc:extent>
      <dc:identifier xsi:type="dcndl:TRCMARCNO">19904800</dc:identifier>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=3001303006625"/>
      <dc:description> 2019-09</dc:description>
    </item>
    <item>
      <title>カインド・オブ・ピンク</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I029773839</link>
      <description><![CDATA[<p>King Record,2019,<p><ul><li>タイトル：カインド・オブ・ピンク</li><li>タイトル（読み）：カインド オブ ピンク</li><li>責任表示：ユッコ・ミラー</li></ul>]]></description>
      <author>ユッコ・ミラー</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I029773839</guid>
      <pubDate>Fri, 6 Dec 2019 20:13:24 +0900</pubDate>
      <dc:title>カインド・オブ・ピンク</dc:title>
      <dcndl:titleTranscription>カインド オブ ピンク</dcndl:titleTranscription>
      <dc:publisher>King Record</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2019</dc:date>
      <dcterms:issued>2019.9</dcterms:issued>
      <dcndl:price>3000円</dcndl:price>
      <dc:extent>録音ディスク 1枚 (64分)</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">KICJ-830</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">029773839</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23303621</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>通常盤</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I029773839"/>
      <dc:description> 2019</dc:description>
    </item>
    <item>
      <title>カウントダウン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I029028655</link>
      <description><![CDATA[<p>[Being],2018,<p><ul><li>タイトル：カウントダウン</li><li>タイトル（読み）：カウント ダウン</li><li>責任表示：NormCore</li></ul>]]></description>
      <author>NormCore</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I029028655</guid>
      <pubDate>Sat, 23 Jul 2022 00:34:59 +0900</pubDate>
      <dc:title>カウントダウン</dc:title>
      <dcndl:titleTranscription>カウント ダウン</dcndl:titleTranscription>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2018</dc:date>
      <dcterms:issued>2018.8</dcterms:issued>
      <dcndl:price>1852円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">JBCZ-6090</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">029028655</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23706234</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>名探偵コナン盤</dc:description>
      <dc:description>付属資料: DVD 1枚 (12 cm) : 名探偵コナンオープニングノンクレジットver</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I029028655"/>
      <dc:description> 2018</dc:description>
    </item>
    <item>
      <title>カウントダウン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I029028656</link>
      <description><![CDATA[<p>[Being],2018,<p><ul><li>タイトル：カウントダウン</li><li>タイトル（読み）：カウント ダウン</li><li>責任表示：NormCore</li></ul>]]></description>
      <author>NormCore</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I029028656</guid>
      <pubDate>Thu, 7 Jul 2022 02:42:31 +0900</pubDate>
      <dc:title>カウントダウン</dc:title>
      <dcndl:titleTranscription>カウント ダウン</dcndl:titleTranscription>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2018</dc:date>
      <dcterms:issued>2018.8</dcterms:issued>
      <dcndl:price>1389円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">JBCZ-6091</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">029028656</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23699371</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>初回限定盤</dc:description>
      <dc:description>付属資料: DVD 1枚 (12 cm) : Music video&amp;music videoオフショット</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I029028656"/>
      <dc:description> 2018</dc:description>
    </item>
    <item>
      <title>神風エクスプレス</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I028758042</link>
      <description><![CDATA[<p>Being,2018,<p><ul><li>タイトル：神風エクスプレス</li><li>タイトル（読み）：カミカゼ エクスプレス</li><li>責任表示：焚吐, みやかわくん</li></ul>]]></description>
      <author>焚吐, みやかわくん</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I028758042</guid>
      <pubDate>Fri, 17 Jun 2022 02:50:26 +0900</pubDate>
      <dc:title>神風エクスプレス</dc:title>
      <dcndl:titleTranscription>カミカゼ エクスプレス</dcndl:titleTranscription>
      <dc:publisher>Being</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2018</dc:date>
      <dcterms:issued>2018.2</dcterms:issued>
      <dcndl:price>1389円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">JBCZ-6074</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">028758042</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23690941</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>初回限定盤</dc:description>
      <dc:description>所要時間: 12分37秒</dc:description>
      <dc:description>付属資料: DVD 1枚 (12 cm) : 「神風エクスプレス」music video&amp;メイキング映像</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I028758042"/>
      <dc:description> 2018</dc:description>
    </item>
    <item>
      <title>神風エクスプレス</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I028758043</link>
      <description><![CDATA[<p>Being,2018,<p><ul><li>タイトル：神風エクスプレス</li><li>タイトル（読み）：カミカゼ エクスプレス</li><li>責任表示：焚吐, みやかわくん</li></ul>]]></description>
      <author>焚吐, みやかわくん</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I028758043</guid>
      <pubDate>Fri, 17 Jun 2022 02:50:52 +0900</pubDate>
      <dc:title>神風エクスプレス</dc:title>
      <dcndl:titleTranscription>カミカゼ エクスプレス</dcndl:titleTranscription>
      <dc:publisher>Being</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2018</dc:date>
      <dcterms:issued>2018.2</dcterms:issued>
      <dcndl:price>926円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">JBCZ-4039</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">028758043</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23690942</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>通常盤</dc:description>
      <dc:description>所要時間: 13分8秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I028758043"/>
      <dc:description> 2018</dc:description>
    </item>
    <item>
      <title>神風エクスプレス</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I028758044</link>
      <description><![CDATA[<p>Being,2018,<p><ul><li>タイトル：神風エクスプレス</li><li>タイトル（読み）：カミカゼ エクスプレス</li><li>責任表示：焚吐, みやかわくん</li></ul>]]></description>
      <author>焚吐, みやかわくん</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I028758044</guid>
      <pubDate>Fri, 17 Jun 2022 02:45:18 +0900</pubDate>
      <dc:title>神風エクスプレス</dc:title>
      <dcndl:titleTranscription>カミカゼ エクスプレス</dcndl:titleTranscription>
      <dc:publisher>Being</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2018</dc:date>
      <dcterms:issued>2018.2</dcterms:issued>
      <dcndl:price>926円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">JBCZ-6075</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">028758044</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23690932</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>名探偵コナン盤</dc:description>
      <dc:description>所要時間: 9分56秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I028758044"/>
      <dc:description> 2018</dc:description>
    </item>
    <item>
      <title>上條淳士 : エイティーズ･コンクレート</title>
      <link>https://ndlsearch.ndl.go.jp/books/R000000004-I026576183</link>
      <description><![CDATA[<p><p><ul><li>タイトル：上條淳士 : エイティーズ･コンクレート</li><li>タイトル（読み）：カミジョウジュンシ : エイティーズ ・ コンクレート</li><li>責任表示：天野 昌直</li><li>シリーズ名：特集 週刊少年サンデーの時代 : トキワ荘から『うる星やつら』『タッチ』『名探偵コナン』そして『マギ』『銀の匙』へ : マンガの青春は終わらない</li><li>シリーズ名（読み）：トクシュウ シュウカン ショウネン サンデー ノ ジダイ : トキワソウ カラ 『 ウル ホシ ヤツラ 』 『 タッチ 』 『 メイ タンテイ コナン 』 ソシテ 『 マギ 』 『 ギン ノ サジ 』 エ : マンガ ノ セイシュン ワ オワラナイ</li></ul>]]></description>
      <author>天野 昌直,天野 昌直</author>
      <category>記事</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R000000004-I026576183</guid>
      <pubDate>Wed, 26 Jun 2024 20:40:43 +0900</pubDate>
      <dc:title>上條淳士 : エイティーズ･コンクレート</dc:title>
      <dcndl:titleTranscription>カミジョウジュンシ : エイティーズ ・ コンクレート</dcndl:titleTranscription>
      <dc:creator>天野 昌直</dc:creator>
      <dcndl:seriesTitle>特集 週刊少年サンデーの時代 : トキワ荘から『うる星やつら』『タッチ』『名探偵コナン』そして『マギ』『銀の匙』へ : マンガの青春は終わらない</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>トクシュウ シュウカン ショウネン サンデー ノ ジダイ : トキワソウ カラ 『 ウル ホシ ヤツラ 』 『 タッチ 』 『 メイ タンテイ コナン 』 ソシテ 『 マギ 』 『 ギン ノ サジ 』 エ : マンガ ノ セイシュン ワ オワラナイ</dcndl:seriesTitleTranscription>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:identifier xsi:type="dcndl:NDLBibID">026576183</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">ZK24</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R000000004-I026576183"/>
      <rdfs:seeAlso rdf:resource="https://cir.nii.ac.jp/crid/1521980705010249344"/>
      <dc:description>掲載誌：ユリイカ = Eureka 3(通号 641) p.165-168</dc:description>
    </item>
    <item>
      <title>空っぽの心</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I032035022</link>
      <description><![CDATA[<p>GIZA,2022,<p><ul><li>タイトル：空っぽの心</li><li>タイトル（読み）：カラッポ ノ ココロ</li><li>責任表示：SARD UNDERGROUND</li></ul>]]></description>
      <author>SARD UNDERGROUND</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I032035022</guid>
      <pubDate>Mon, 27 Mar 2023 22:59:06 +0900</pubDate>
      <dc:title>空っぽの心</dc:title>
      <dcndl:titleTranscription>カラッポ ノ ココロ</dcndl:titleTranscription>
      <dc:publisher>GIZA</dc:publisher>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2022</dc:date>
      <dcterms:issued>2022.5</dcterms:issued>
      <dcndl:price>1800円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">GZCA-7184</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">032035022</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23811173</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>頒布</dc:description>
      <dc:description>初回限定盤</dc:description>
      <dc:description>所要時間: 18分29秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I032035022"/>
      <dc:description> 2022</dc:description>
    </item>
    <item>
      <title>空っぽの心</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I032035023</link>
      <description><![CDATA[<p>GIZA,2022,<p><ul><li>タイトル：空っぽの心</li><li>タイトル（読み）：カラッポ ノ ココロ</li><li>責任表示：SARD UNDERGROUND</li></ul>]]></description>
      <author>SARD UNDERGROUND</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I032035023</guid>
      <pubDate>Mon, 27 Mar 2023 22:58:09 +0900</pubDate>
      <dc:title>空っぽの心</dc:title>
      <dcndl:titleTranscription>カラッポ ノ ココロ</dcndl:titleTranscription>
      <dc:publisher>GIZA</dc:publisher>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2022</dc:date>
      <dcterms:issued>2022.5</dcterms:issued>
      <dcndl:price>1000円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">GZCA-7185</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">032035023</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23811167</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>頒布</dc:description>
      <dc:description>名探偵コナン盤</dc:description>
      <dc:description>所要時間: 9分36秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I032035023"/>
      <dc:description> 2022</dc:description>
    </item>
    <item>
      <title>空っぽの心</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I032035024</link>
      <description><![CDATA[<p>GIZA,2022,<p><ul><li>タイトル：空っぽの心</li><li>タイトル（読み）：カラッポ ノ ココロ</li><li>責任表示：SARD UNDERGROUND</li></ul>]]></description>
      <author>SARD UNDERGROUND</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I032035024</guid>
      <pubDate>Mon, 27 Mar 2023 22:58:37 +0900</pubDate>
      <dc:title>空っぽの心</dc:title>
      <dcndl:titleTranscription>カラッポ ノ ココロ</dcndl:titleTranscription>
      <dc:publisher>GIZA</dc:publisher>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2022</dc:date>
      <dcterms:issued>2022.5</dcterms:issued>
      <dcndl:price>1000円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">GZCA-7186</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">032035024</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23811170</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>頒布</dc:description>
      <dc:description>通常盤</dc:description>
      <dc:description>所要時間: 15分12秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I032035024"/>
      <dc:description> 2022</dc:description>
    </item>
    <item>
      <title>川崎フロンターレオフィシャルマッチデープログラム</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I14222485010</link>
      <description><![CDATA[<p>Vol.181,フロムワン,2012,<p><ul><li>タイトル：川崎フロンターレオフィシャルマッチデープログラム</li><li>タイトル（読み）：カワサキ フロンターレ オフィシャル マッチ デー プログラム</li><li>責任表示：フロムワン 編集 川崎フロンターレ 監修</li><li>NDC(9)：783.47</li></ul>]]></description>
      <author>フロムワン,川崎フロンターレ,フロムワン 編集 川崎フロンターレ 監修</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I14222485010</guid>
      <pubDate>Sat, 27 Jan 2024 09:00:00 +0900</pubDate>
      <dc:title>川崎フロンターレオフィシャルマッチデープログラム</dc:title>
      <dcndl:titleTranscription>カワサキ フロンターレ オフィシャル マッチ デー プログラム</dcndl:titleTranscription>
      <dc:creator>フロムワン</dc:creator>
      <dc:creator>川崎フロンターレ</dc:creator>
      <dcndl:creatorTranscription>フロムワン</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>カワサキ フロンターレ</dcndl:creatorTranscription>
      <dcndl:volume>Vol.181</dcndl:volume>
      <dc:publisher>フロムワン</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2012</dc:date>
      <dcterms:issued>2012.4</dcterms:issued>
      <dcndl:price>¥239</dcndl:price>
      <dc:extent>21p ; 26cm</dc:extent>
      <dc:subject>川崎フロンターレ</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">783.47</dc:subject>
      <dc:subject xsi:type="dcndl:NDC8">783.47</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=2485010&amp;ctg=1"/>
      <dc:description> 2012</dc:description>
    </item>
    <item>
      <title>環境の謎</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000008118934</link>
      <description><![CDATA[<p>小学館,2006,4-09-296117-0<p><ul><li>タイトル：環境の謎</li><li>タイトル（読み）：カンキョウ ノ ナゾ</li><li>責任表示：青山剛昌 原作,山岸栄一 まんが,高月紘 監修</li><li>シリーズ名：小学館学習まんがシリーズ. 名探偵コナン推理ファイル</li><li>シリーズ名（読み）：ショウガクカン ガクシュウ マンガ シリーズ. メイタンテイ コナン スイリ ファイル</li><li>NDC(9)：519</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,山岸, 栄一,高月, 紘, 1941-,青山剛昌 原作,山岸栄一 まんが,高月紘 監修</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000008118934</guid>
      <pubDate>Mon, 11 Jul 2022 20:08:05 +0900</pubDate>
      <dc:title>環境の謎</dc:title>
      <dcndl:titleTranscription>カンキョウ ノ ナゾ</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>山岸, 栄一</dc:creator>
      <dc:creator>高月, 紘, 1941-</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ヤマギシ, エイイチ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>タカツキ, ヒロシ, 1941-</dcndl:creatorTranscription>
      <dcndl:seriesTitle>小学館学習まんがシリーズ. 名探偵コナン推理ファイル</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクカン ガクシュウ マンガ シリーズ. メイタンテイ コナン スイリ ファイル</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2006</dc:date>
      <dcterms:issued>2006.3</dcterms:issued>
      <dcndl:price>800円</dcndl:price>
      <dc:extent>191p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">4-09-296117-0</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">4-09-296117-0</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000008118934</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">20993852</dc:identifier>
      <dc:subject>環境問題</dc:subject>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y11</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">519</dc:subject>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.hokkaido.jp/wo/opc/srh/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1006600303333"/>
      <rdfs:seeAlso rdf:resource="https://www.plib.pref.aomori.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1102717390"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.iwate.jp/opac/advanced-search"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.ibaraki.jp/licsxp-kopac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001001307971"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://catalog.library.metro.tokyo.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1106795007"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=492170&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.sagamihara.kanagawa.jp/TOSHOW/asp/WwShousaiKen.aspx?FCode=1217990"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.ishikawa.lg.jp/wo/opc_srh/srh_detail/1009910709657/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.nagoya.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009915081365"/>
      <rdfs:seeAlso rdf:resource="https://www.shiga-pref-library.jp/wo/opc_srh/srh_detail/1917718/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bib/?B12096601"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0011156718"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000600135981"/>
      <rdfs:seeAlso rdf:resource="http://www.lib.wakayama-c.ed.jp/winj/opac/switch-detail-iccap.do?bibid=1100494005"/>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.tottori.jp/winj/opac/switch-detail-iccap.do?bibid=1101321417"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009810836455"/>
      <rdfs:seeAlso rdf:resource="https://www2.hplibra.pref.hiroshima.jp/bib/?B12018427"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1102765932"/>
      <rdfs:seeAlso rdf:resource="https://library.pref.yamaguchi.lg.jp//wo/opc_srh/srh_detail/1000306364/"/>
      <rdfs:seeAlso rdf:resource="https://opac.toshokan.city.fukuoka.lg.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://opac.miraionlibrary.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009810884847"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000008118934"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16453884"/>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BA77378187"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784092961173"/>
      <dc:description> 2006</dc:description>
    </item>
    <item>
      <title>学習ドリル名探偵コナンと伸ばす考える力! : 低学年</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I031698183</link>
      <description><![CDATA[<p>小学館,2021,978-4-09-253625-8<p><ul><li>タイトル：学習ドリル名探偵コナンと伸ばす考える力! : 低学年</li><li>タイトル（読み）：ガクシュウ ドリル メイタンテイ コナン ト ノバス カンガエル チカラ : テイガクネン</li><li>責任表示：小島亜華里 著,青山剛昌 画,黒上晴夫 監修</li><li>NDC(10)：141.5</li></ul>]]></description>
      <author>小島亜華里 著,青山剛昌 画,黒上晴夫 監修</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I031698183</guid>
      <pubDate>Thu, 21 Oct 2021 20:45:33 +0900</pubDate>
      <dc:title>学習ドリル名探偵コナンと伸ばす考える力! : 低学年</dc:title>
      <dcndl:titleTranscription>ガクシュウ ドリル メイタンテイ コナン ト ノバス カンガエル チカラ : テイガクネン</dcndl:titleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2021</dc:date>
      <dcterms:issued>2021.10</dcterms:issued>
      <dcndl:price>1200円</dcndl:price>
      <dc:extent>61p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-253625-8</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">031698183</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23596448</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">34259263</dc:identifier>
      <dc:subject>思考</dc:subject>
      <dc:subject xsi:type="dcndl:NDLC">Y32</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">141.5</dc:subject>
      <dc:description>出版</dc:description>
      <rdfs:seeAlso rdf:resource="https://www2.hplibra.pref.hiroshima.jp/bib/?B12756400"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I031698183"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B13991311"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/092536250000d0000000"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784092536258"/>
      <dc:description> 2021</dc:description>
    </item>
    <item>
      <title>君への嘘</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I025897975</link>
      <description><![CDATA[<p>[Being],2015,<p><ul><li>タイトル：君への嘘</li><li>タイトル（読み）：キミ エノ ウソ</li><li>責任表示：VALSHE</li></ul>]]></description>
      <author>VALSHE</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I025897975</guid>
      <pubDate>Tue, 5 Jul 2022 23:24:31 +0900</pubDate>
      <dc:title>君への嘘</dc:title>
      <dcndl:titleTranscription>キミ エノ ウソ</dcndl:titleTranscription>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2015</dc:date>
      <dcterms:issued>2015.2</dcterms:issued>
      <dcndl:price>1800円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">JBCZ-6015</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">025897975</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23698604</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>初回限定盤</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I025897975"/>
      <dc:description> 2015</dc:description>
    </item>
    <item>
      <title>君への嘘</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I025897976</link>
      <description><![CDATA[<p>[Being],2015,<p><ul><li>タイトル：君への嘘</li><li>タイトル（読み）：キミ エノ ウソ</li><li>責任表示：VALSHE</li></ul>]]></description>
      <author>VALSHE</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I025897976</guid>
      <pubDate>Tue, 5 Jul 2022 23:25:00 +0900</pubDate>
      <dc:title>君への嘘</dc:title>
      <dcndl:titleTranscription>キミ エノ ウソ</dcndl:titleTranscription>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2015</dc:date>
      <dcterms:issued>2015.2</dcterms:issued>
      <dcndl:price>1500円</dcndl:price>
      <dc:extent>CD 2枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">JBCZ-6016</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">025897976</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23698605</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>名探偵コナン盤</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I025897976"/>
      <dc:description> 2015</dc:description>
    </item>
    <item>
      <title>君想ふ-春夏秋冬</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I029164242</link>
      <description><![CDATA[<p>[Being],2018,<p><ul><li>タイトル：君想ふ-春夏秋冬</li><li>タイトル（読み）：キミ オモウ - シュンカシュウトウ</li><li>責任表示：Mai Kuraki</li></ul>]]></description>
      <author>Mai Kuraki</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I029164242</guid>
      <pubDate>Wed, 20 Jul 2022 19:13:56 +0900</pubDate>
      <dc:title>君想ふ-春夏秋冬</dc:title>
      <dcndl:titleTranscription>キミ オモウ - シュンカシュウトウ</dcndl:titleTranscription>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2018</dc:date>
      <dcterms:issued>2018.10</dcterms:issued>
      <dcndl:price>3000円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">VNCM-9038</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">029164242</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23704509</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>初回限定盤春</dc:description>
      <dc:description>所要時間: 33分4秒</dc:description>
      <dc:description>付属資料: DVD 1枚 (12 cm) : Music clip</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I029164242"/>
      <dc:description> 2018</dc:description>
    </item>
    <item>
      <title>きみと恋のままで終われないいつも夢のままじゃいられない ; 薔薇色の人生</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I029381958</link>
      <description><![CDATA[<p>[Being],2019,<p><ul><li>タイトル：きみと恋のままで終われないいつも夢のままじゃいられない ; 薔薇色の人生</li><li>タイトル（読み）：キミ ト コイ ノ ママ デ オワレナイ イツモ ユメ ノ ママ ジャ イラレナイ ; バライロ ノ ジンセイ</li><li>責任表示：倉木麻衣</li></ul>]]></description>
      <author>倉木麻衣</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I029381958</guid>
      <pubDate>Sat, 23 Jul 2022 00:28:56 +0900</pubDate>
      <dc:title>きみと恋のままで終われないいつも夢のままじゃいられない ; 薔薇色の人生</dc:title>
      <dcndl:titleTranscription>キミ ト コイ ノ ママ デ オワレナイ イツモ ユメ ノ ママ ジャ イラレナイ ; バライロ ノ ジンセイ</dcndl:titleTranscription>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2019</dc:date>
      <dcterms:issued>2019.3</dcterms:issued>
      <dcndl:price>1300円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">VNCM-6043</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">029381958</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23706221</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>初回限定盤A</dc:description>
      <dc:description>付属資料: DVD 1枚 (12 cm) : きみと恋のままで終われないいつも夢のままじゃいられないMV</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I029381958"/>
      <dc:description> 2019</dc:description>
    </item>
    <item>
      <title>きみと恋のままで終われないいつも夢のままじゃいられない ; 薔薇色の人生</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I029381960</link>
      <description><![CDATA[<p>[Being],2019,<p><ul><li>タイトル：きみと恋のままで終われないいつも夢のままじゃいられない ; 薔薇色の人生</li><li>タイトル（読み）：キミ ト コイ ノ ママ デ オワレナイ イツモ ユメ ノ ママ ジャ イラレナイ ; バライロ ノ ジンセイ</li><li>責任表示：倉木麻衣</li></ul>]]></description>
      <author>倉木麻衣</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I029381960</guid>
      <pubDate>Sat, 23 Jul 2022 00:28:31 +0900</pubDate>
      <dc:title>きみと恋のままで終われないいつも夢のままじゃいられない ; 薔薇色の人生</dc:title>
      <dcndl:titleTranscription>キミ ト コイ ノ ママ デ オワレナイ イツモ ユメ ノ ママ ジャ イラレナイ ; バライロ ノ ジンセイ</dcndl:titleTranscription>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2019</dc:date>
      <dcterms:issued>2019.3</dcterms:issued>
      <dcndl:price>1300円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">VNCM-6045</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">029381960</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23706220</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>名探偵コナン盤</dc:description>
      <dc:description>付属資料: DVD 1枚 (12 cm) : 「名探偵コナン」OP&amp;EDノンテロップ映像</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I029381960"/>
      <dc:description> 2019</dc:description>
    </item>
    <item>
      <title>君の涙にこんなに恋してる</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I023779269</link>
      <description><![CDATA[<p>GIZA,2012,<p><ul><li>タイトル：君の涙にこんなに恋してる</li><li>タイトル（読み）：キミ ノ ナミダ ニ コンナニ コイシテル</li><li>責任表示：なついろ</li></ul>]]></description>
      <author>なついろ</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I023779269</guid>
      <pubDate>Sat, 23 Jul 2022 00:22:00 +0900</pubDate>
      <dc:title>君の涙にこんなに恋してる</dc:title>
      <dcndl:titleTranscription>キミ ノ ナミダ ニ コンナニ コイシテル</dcndl:titleTranscription>
      <dc:publisher>GIZA</dc:publisher>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2012</dc:date>
      <dcterms:issued>2012.8</dcterms:issued>
      <dcndl:price>1095円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">GZCD-7001</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">023779269</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23706204</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>頒布</dc:description>
      <dc:description>名探偵コナン盤</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I023779269"/>
      <dc:description> 2012</dc:description>
    </item>
    <item>
      <title>キメキメダンスde go!</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I023764035</link>
      <description><![CDATA[<p>King Record,2012,<p><ul><li>タイトル：キメキメダンスde go!</li><li>タイトル（読み）：キメキメ ダンス de go</li><li>シリーズ名：2012井出まさお発表会 ; 2</li></ul>]]></description>
      <author/>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I023764035</guid>
      <pubDate>Fri, 31 May 2013 20:47:02 +0900</pubDate>
      <dc:title>キメキメダンスde go!</dc:title>
      <dcndl:titleTranscription>キメキメ ダンス de go</dcndl:titleTranscription>
      <dcndl:seriesTitle>2012井出まさお発表会 ; 2</dcndl:seriesTitle>
      <dc:publisher>King Record</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2012</dc:date>
      <dcterms:issued>2012.8</dcterms:issued>
      <dcndl:price>1600円 (税込)</dcndl:price>
      <dc:extent>録音ディスク 1枚 (23分)</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">KICG-8304</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">023764035</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22247596</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I023764035"/>
      <dc:description> 2012</dc:description>
    </item>
    <item>
      <title>休日はミステリー小説と名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R000000004-I032368861</link>
      <description><![CDATA[<p><p><ul><li>タイトル：休日はミステリー小説と名探偵コナン</li><li>タイトル（読み）：キュウジツ ワ ミステリー ショウセツ ト メイ タンテイ コナン</li><li>責任表示：高橋 彩</li></ul>]]></description>
      <author>高橋 彩,高橋 彩</author>
      <category>記事</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R000000004-I032368861</guid>
      <pubDate>Wed, 14 Sep 2022 01:48:51 +0900</pubDate>
      <dc:title>休日はミステリー小説と名探偵コナン</dc:title>
      <dcndl:titleTranscription>キュウジツ ワ ミステリー ショウセツ ト メイ タンテイ コナン</dcndl:titleTranscription>
      <dc:creator>高橋 彩</dc:creator>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:identifier xsi:type="dcndl:NDLBibID">032368861</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">ZU8</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R000000004-I032368861"/>
      <rdfs:seeAlso rdf:resource="https://cir.nii.ac.jp/crid/1520856362153620224"/>
      <dc:description>掲載誌：図書館だより / 三重短期大学附属図書館 編 49 p.7-11</dc:description>
    </item>
    <item>
      <title>恐竜の謎</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000004196120</link>
      <description><![CDATA[<p>小学館,2003,4-09-296102-2<p><ul><li>タイトル：恐竜の謎</li><li>タイトル（読み）：キョウリュウ ノ ナゾ</li><li>責任表示：青山剛昌 原作,太田勝, 窪田一裕 まんが,真鍋真 監修</li><li>シリーズ名：小学館学習まんがシリーズ. 名探偵コナン推理ファイル</li><li>シリーズ名（読み）：ショウガクカン ガクシュウ マンガ シリーズ. メイタンテイ コナン スイリ ファイル</li><li>NDC(9)：457.87</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,太田, 勝,窪田, 一裕,真鍋, 真, 1959-,青山剛昌 原作,太田勝, 窪田一裕 まんが,真鍋真 監修</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000004196120</guid>
      <pubDate>Mon, 25 Jul 2022 19:02:02 +0900</pubDate>
      <dc:title>恐竜の謎</dc:title>
      <dcndl:titleTranscription>キョウリュウ ノ ナゾ</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>太田, 勝</dc:creator>
      <dc:creator>窪田, 一裕</dc:creator>
      <dc:creator>真鍋, 真, 1959-</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>オオタ, マサル</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>クボタ, カズヒロ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>マナベ, マコト, 1959-</dcndl:creatorTranscription>
      <dcndl:seriesTitle>小学館学習まんがシリーズ. 名探偵コナン推理ファイル</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクカン ガクシュウ マンガ シリーズ. メイタンテイ コナン スイリ ファイル</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2003</dc:date>
      <dcterms:issued>2003.8</dcterms:issued>
      <dcndl:price>800円</dcndl:price>
      <dc:extent>191p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">4-09-296102-2</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">4-09-296102-2</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000004196120</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">20433480</dc:identifier>
      <dc:subject>恐竜</dc:subject>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y11</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">457.87</dc:subject>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.hokkaido.jp/wo/opc/srh/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1006300058203"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.ibaraki.jp/licsxp-kopac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001000999216"/>
      <rdfs:seeAlso rdf:resource="https://www1.library.pref.gunma.jp/winj/opac/switch-detail-iccap.do?bibid=1100456684"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.city.saitama.jp/bookdetail?num=1221539&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=230059&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.sagamihara.kanagawa.jp/TOSHOW/asp/WwShousaiKen.aspx?FCode=1032332"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.ishikawa.lg.jp/wo/opc_srh/srh_detail/1009910453139/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.nagoya.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009913032409"/>
      <rdfs:seeAlso rdf:resource="https://www.shiga-pref-library.jp/wo/opc_srh/srh_detail/1670204/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bib/?B11127423"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000001633398"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009810487462"/>
      <rdfs:seeAlso rdf:resource="https://www2.hplibra.pref.hiroshima.jp/bib/?B12018352"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1100887561"/>
      <rdfs:seeAlso rdf:resource="https://library.pref.yamaguchi.lg.jp//wo/opc_srh/srh_detail/9810355532/"/>
      <rdfs:seeAlso rdf:resource="https://alislibopac.bunmori.tokushima.jp/winj/opac/switch-detail-iccap.do?bibid=1101353594"/>
      <rdfs:seeAlso rdf:resource="https://opac.toshokan.city.fukuoka.lg.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www2.tosyo-saga.jp/kentosyo2/opac/switch-detail-iccap.do?bibid=1100592098"/>
      <rdfs:seeAlso rdf:resource="https://opac.miraionlibrary.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009810598362"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000004196120"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16243692"/>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BB0903637X"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784092961029"/>
      <dc:description> 2003</dc:description>
    </item>
    <item>
      <title>クウフク : starring VALSHE</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I032652790</link>
      <description><![CDATA[<p>[B ZONE],2023,<p><ul><li>タイトル：クウフク : starring VALSHE</li><li>タイトル（読み）：クウフク</li><li>責任表示：今夜、あの街から</li></ul>]]></description>
      <author>今夜、あの街から</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I032652790</guid>
      <pubDate>Sat, 13 Jul 2024 01:27:44 +0900</pubDate>
      <dc:title>クウフク : starring VALSHE</dc:title>
      <dcndl:titleTranscription>クウフク</dcndl:titleTranscription>
      <dc:publisher>[B ZONE]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2023</dc:date>
      <dcterms:issued>2023.4</dcterms:issued>
      <dcndl:price>2000円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">JBCZ-6124</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">032652790</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23999659</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>名探偵コナン盤</dc:description>
      <dc:description>所要時間: 9分59秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I032652790"/>
      <dc:description> 2023</dc:description>
    </item>
    <item>
      <title>倉木麻衣×名探偵コナンCOLLABORATION BEST 21 : 真実はいつも歌にある!</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I11212986896</link>
      <description><![CDATA[<p>Being Group,2017,<p><ul><li>タイトル：倉木麻衣×名探偵コナンCOLLABORATION BEST 21 : 真実はいつも歌にある!</li><li>タイトル（読み）：クラキ マイ メイタンテイ コナン コラボレーション ベスト ニジュウイチ : シンジツ ワ イツモ ウタ ニ アル</li><li>責任表示：倉木 麻衣 歌</li></ul>]]></description>
      <author>倉木 麻衣,倉木 麻衣 歌</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I11212986896</guid>
      <pubDate>Wed, 19 Jul 2023 09:00:00 +0900</pubDate>
      <dc:title>倉木麻衣×名探偵コナンCOLLABORATION BEST 21 : 真実はいつも歌にある!</dc:title>
      <dcndl:titleTranscription>クラキ マイ メイタンテイ コナン コラボレーション ベスト ニジュウイチ : シンジツ ワ イツモ ウタ ニ アル</dcndl:titleTranscription>
      <dc:creator>倉木 麻衣</dc:creator>
      <dcndl:creatorTranscription>クラキ,マイ</dcndl:creatorTranscription>
      <dc:publisher>Being Group</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2017</dc:date>
      <dcterms:issued>2017.10</dcterms:issued>
      <dcndl:price>¥2593</dcndl:price>
      <dc:description>発売</dc:description>
      <dc:description>容器のタイトル:21 COLLABORATION</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.lib.city.saitama.jp/bookdetail?num=2986896&amp;ctg=1"/>
      <dc:description> 2017</dc:description>
    </item>
    <item>
      <title>倉木麻衣×名探偵コナンCOLLABORATION BEST 21　：　真実はいつも歌にある!</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I22213001303004965</link>
      <description><![CDATA[<p>2017-10,<p><ul><li>タイトル：倉木麻衣×名探偵コナンCOLLABORATION BEST 21　：　真実はいつも歌にある!</li><li>タイトル（読み）：クラキ マイ メイタンテイ コナン コラボレーション ベスト ニジュウイチ　シンジツ ワ イツモ ウタ ニ アル</li><li>責任表示：倉木 麻衣／歌</li></ul>]]></description>
      <author>倉木 麻衣,倉木 麻衣／歌</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I22213001303004965</guid>
      <pubDate>Thu, 6 Mar 2025 02:05:30 +0900</pubDate>
      <dc:title>倉木麻衣×名探偵コナンCOLLABORATION BEST 21　：　真実はいつも歌にある!</dc:title>
      <dcndl:titleTranscription>クラキ マイ メイタンテイ コナン コラボレーション ベスト ニジュウイチ　シンジツ ワ イツモ ウタ ニ アル</dcndl:titleTranscription>
      <dc:creator>倉木 麻衣</dc:creator>
      <dcndl:creatorTranscription>クラキ マイ</dcndl:creatorTranscription>
      <dc:date xsi:type="dcterms:W3CDTF">2017-10</dc:date>
      <dcterms:issued>2017.10</dcterms:issued>
      <dcndl:price>￥２５９３</dcndl:price>
      <dc:extent>2</dc:extent>
      <dc:identifier xsi:type="dcndl:TRCMARCNO">17906307</dc:identifier>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=3001303004965"/>
      <dc:description> 2017-10</dc:description>
    </item>
    <item>
      <title>倉木麻衣×名探偵コナンCOLLABORATION BEST 21-真実はいつも歌にある!-</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I028735954</link>
      <description><![CDATA[<p>ヤマハミュージックエンタテインメントホールディングス出版部,2018,978-4-636-95202-5<p><ul><li>タイトル：倉木麻衣×名探偵コナンCOLLABORATION BEST 21-真実はいつも歌にある!-</li><li>タイトル（読み）：クラキ マイ メイタンテイ コナン コラボレーション ベスト ニジュウイチ シンジツ ワ イツモ ウタ ニ アル</li><li>シリーズ名：ピアノソロ/中級</li><li>シリーズ名（読み）：ピアノ ソロ チュウキュウ</li><li>NDC(10)：763.2</li></ul>]]></description>
      <author/>
      <category>図書</category>
      <category>楽譜</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I028735954</guid>
      <pubDate>Mon, 22 May 2023 17:46:15 +0900</pubDate>
      <dc:title>倉木麻衣×名探偵コナンCOLLABORATION BEST 21-真実はいつも歌にある!-</dc:title>
      <dcndl:titleTranscription>クラキ マイ メイタンテイ コナン コラボレーション ベスト ニジュウイチ シンジツ ワ イツモ ウタ ニ アル</dcndl:titleTranscription>
      <dcndl:seriesTitle>ピアノソロ/中級</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ピアノ ソロ チュウキュウ</dcndl:seriesTitleTranscription>
      <dc:publisher>ヤマハミュージックエンタテインメントホールディングス出版部</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2018</dc:date>
      <dcterms:issued>2018.1</dcterms:issued>
      <dcndl:price>2300円</dcndl:price>
      <dc:extent>118p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-636-95202-5</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">028735954</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23083348</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">33709201</dc:identifier>
      <dc:subject>ピアノ</dc:subject>
      <dcndl:genre>楽譜</dcndl:genre>
      <dcndl:genreTranscription>ガクフ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">YM11</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">763.2</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I028735954"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784636952025"/>
      <dc:description> 2018</dc:description>
    </item>
    <item>
      <title>倉木麻衣×名探偵コナンcollaboration best 21-真実はいつも歌にある!</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I028376972</link>
      <description><![CDATA[<p>[Being],2017,<p><ul><li>タイトル：倉木麻衣×名探偵コナンcollaboration best 21-真実はいつも歌にある!</li><li>タイトル（読み）：クラキ マイ × メイタンテイ コナン collaboration best 21 - シンジツ ワ イツモ ウタ ニ アル !</li></ul>]]></description>
      <author/>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I028376972</guid>
      <pubDate>Thu, 16 Jun 2022 22:05:32 +0900</pubDate>
      <dc:title>倉木麻衣×名探偵コナンcollaboration best 21-真実はいつも歌にある!</dc:title>
      <dcndl:titleTranscription>クラキ マイ × メイタンテイ コナン collaboration best 21 - シンジツ ワ イツモ ウタ ニ アル !</dcndl:titleTranscription>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2017</dc:date>
      <dcterms:issued>2017.10</dcterms:issued>
      <dcndl:price>2593円</dcndl:price>
      <dc:extent>CD 2枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">VNCM-9036</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">028376972</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23690673</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>通常盤</dc:description>
      <dc:description>所要時間: 90分58秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I028376972"/>
      <dc:description> 2017</dc:description>
    </item>
    <item>
      <title>倉木麻衣×名探偵コナンcollaboration best 21-真実はいつも歌にある!</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I029381971</link>
      <description><![CDATA[<p>[Being],2019,<p><ul><li>タイトル：倉木麻衣×名探偵コナンcollaboration best 21-真実はいつも歌にある!</li><li>タイトル（読み）：クラキ マイ × メイタンテイ コナン collaboration best 21 - シンジツ ワ イツモ ウタ ニ アル !</li></ul>]]></description>
      <author/>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I029381971</guid>
      <pubDate>Thu, 16 Jun 2022 22:05:59 +0900</pubDate>
      <dc:title>倉木麻衣×名探偵コナンcollaboration best 21-真実はいつも歌にある!</dc:title>
      <dcndl:titleTranscription>クラキ マイ × メイタンテイ コナン collaboration best 21 - シンジツ ワ イツモ ウタ ニ アル !</dcndl:titleTranscription>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2019</dc:date>
      <dcterms:issued>2019.1</dcterms:issued>
      <dcndl:price>3056円</dcndl:price>
      <dc:extent>CD 2枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">VNCM-9043</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">029381971</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23690674</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>付属資料: DVD 1枚 (12 cm) : TVアニメOP&amp;ED + 劇場版EDノンテロップ映像</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I029381971"/>
      <dc:description> 2019</dc:description>
    </item>
    <item>
      <title>くりかえすこと、まえへすすむこと</title>
      <link>https://ndlsearch.ndl.go.jp/books/R000000004-I026576132</link>
      <description><![CDATA[<p><p><ul><li>タイトル：くりかえすこと、まえへすすむこと</li><li>タイトル（読み）：クリカエス コト 、 マエ エ ススム コト</li><li>責任表示：中田 健太郎</li><li>シリーズ名：特集 週刊少年サンデーの時代 : トキワ荘から『うる星やつら』『タッチ』『名探偵コナン』そして『マギ』『銀の匙』へ : マンガの青春は終わらない</li><li>シリーズ名（読み）：トクシュウ シュウカン ショウネン サンデー ノ ジダイ : トキワソウ カラ 『 ウル ホシ ヤツラ 』 『 タッチ 』 『 メイ タンテイ コナン 』 ソシテ 『 マギ 』 『 ギン ノ サジ 』 エ : マンガ ノ セイシュン ワ オワラナイ</li></ul>]]></description>
      <author>中田 健太郎,中田 健太郎</author>
      <category>記事</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R000000004-I026576132</guid>
      <pubDate>Wed, 26 Jun 2024 20:40:49 +0900</pubDate>
      <dc:title>くりかえすこと、まえへすすむこと</dc:title>
      <dcndl:titleTranscription>クリカエス コト 、 マエ エ ススム コト</dcndl:titleTranscription>
      <dc:creator>中田 健太郎</dc:creator>
      <dcndl:seriesTitle>特集 週刊少年サンデーの時代 : トキワ荘から『うる星やつら』『タッチ』『名探偵コナン』そして『マギ』『銀の匙』へ : マンガの青春は終わらない</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>トクシュウ シュウカン ショウネン サンデー ノ ジダイ : トキワソウ カラ 『 ウル ホシ ヤツラ 』 『 タッチ 』 『 メイ タンテイ コナン 』 ソシテ 『 マギ 』 『 ギン ノ サジ 』 エ : マンガ ノ セイシュン ワ オワラナイ</dcndl:seriesTitleTranscription>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:identifier xsi:type="dcndl:NDLBibID">026576132</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">ZK24</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R000000004-I026576132"/>
      <rdfs:seeAlso rdf:resource="https://cir.nii.ac.jp/crid/1521136280885339520"/>
      <dc:description>掲載誌：ユリイカ = Eureka 3(通号 641) p.130-136</dc:description>
    </item>
    <item>
      <title>Case Closed : 名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I47111101545953</link>
      <description><![CDATA[<p>Volume 17,VIZ Media,LLC,2007,1421508826<p><ul><li>タイトル：Case Closed : 名探偵コナン</li><li>タイトル（読み）：ケース クローズド : メイタンテイ コナン</li><li>責任表示：GoshoAoyama [著] ; NaokoAmemiya [訳]</li><li>NDC(10)：726.1</li><li>NDC(9)：726.1</li></ul>]]></description>
      <author>青山, 剛昌,Naoko, Amemiya,GoshoAoyama [著] ; NaokoAmemiya [訳]</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I47111101545953</guid>
      <pubDate>Mon, 21 Sep 2020 09:00:00 +0900</pubDate>
      <dc:title>Case Closed : 名探偵コナン</dc:title>
      <dcndl:titleTranscription>ケース クローズド : メイタンテイ コナン</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌</dc:creator>
      <dc:creator>Naoko, Amemiya</dc:creator>
      <dcndl:creatorTranscription>アオヤマ,ゴウショウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アメミヤ,ナオコ</dcndl:creatorTranscription>
      <dcndl:volume>Volume 17</dcndl:volume>
      <dcndl:edition>VIZ Media Ed.[ペーパーバック]</dcndl:edition>
      <dc:publisher>VIZ Media,LLC</dc:publisher>
      <dcndl:publicationPlace>US</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2007</dc:date>
      <dcterms:issued>2007.5</dcterms:issued>
      <dcndl:price>US$9.99</dcndl:price>
      <dc:extent>1冊 ; 19cm</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">1421508826</dc:identifier>
      <dc:subject xsi:type="dcndl:NDC10">726.1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">726.1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC8">726.1</dc:subject>
      <dc:description>装丁 : ソフトカバー</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.okinawa.jp/winj/opac/switch-detail-iccap.do?bibid=1101545953"/>
      <dc:description> 2007</dc:description>
    </item>
    <item>
      <title>Case Closed : 名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I47111101546003</link>
      <description><![CDATA[<p>Volume 11,VIZ Media,LLC,2006,1421504414<p><ul><li>タイトル：Case Closed : 名探偵コナン</li><li>タイトル（読み）：ケース クローズド : メイタンテイ コナン</li><li>責任表示：GoshoAoyama [著] ; NaokoAmemiya [英語監修] ; JoeYamazaki [訳]</li><li>シリーズ名：Shonen Sunday : Manga Starts on Sunday</li><li>シリーズ名（読み）：ショウネン サンデー : マンガ スターツ オン サンデー</li><li>NDC(10)：726.1</li><li>NDC(9)：726.1</li></ul>]]></description>
      <author>青山, 剛昌,Naoko, Amemiya,Joe, Yamazaki,GoshoAoyama [著] ; NaokoAmemiya [英語監修] ; JoeYamazaki [訳]</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I47111101546003</guid>
      <pubDate>Mon, 21 Sep 2020 09:00:00 +0900</pubDate>
      <dc:title>Case Closed : 名探偵コナン</dc:title>
      <dcndl:titleTranscription>ケース クローズド : メイタンテイ コナン</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌</dc:creator>
      <dc:creator>Naoko, Amemiya</dc:creator>
      <dc:creator>Joe, Yamazaki</dc:creator>
      <dcndl:creatorTranscription>アオヤマ,ゴウショウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アメミヤ,ナオコ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ヤマザキ,ジョー</dcndl:creatorTranscription>
      <dcndl:volume>Volume 11</dcndl:volume>
      <dcndl:edition>Shonen Sunday Ed.[ペーパーバック]</dcndl:edition>
      <dcndl:seriesTitle>Shonen Sunday : Manga Starts on Sunday</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー : マンガ スターツ オン サンデー</dcndl:seriesTitleTranscription>
      <dc:publisher>VIZ Media,LLC</dc:publisher>
      <dcndl:publicationPlace>US</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2006</dc:date>
      <dcterms:issued>2006.5</dcterms:issued>
      <dcndl:price>US$9.99</dcndl:price>
      <dc:extent>1冊 ; 19cm</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">1421504414</dc:identifier>
      <dc:subject xsi:type="dcndl:NDC10">726.1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">726.1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC8">726.1</dc:subject>
      <dc:description>装丁 : ソフトカバー</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.okinawa.jp/winj/opac/switch-detail-iccap.do?bibid=1101546003"/>
      <dc:description> 2006</dc:description>
    </item>
    <item>
      <title>Case Closed : 名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I47111101546004</link>
      <description><![CDATA[<p>Volume 12,VIZ Media,LLC,2006,1421504421<p><ul><li>タイトル：Case Closed : 名探偵コナン</li><li>タイトル（読み）：ケース クローズド : メイタンテイ コナン</li><li>責任表示：GoshoAoyama [著] ; NaokoAmemiya [訳・英語監修]</li><li>シリーズ名：Shonen Sunday : Manga Starts on Sunday</li><li>シリーズ名（読み）：ショウネン サンデー : マンガ スターツ オン サンデー</li><li>NDC(10)：726.1</li><li>NDC(9)：726.1</li></ul>]]></description>
      <author>青山, 剛昌,Naoko, Amemiya,GoshoAoyama [著] ; NaokoAmemiya [訳・英語監修]</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I47111101546004</guid>
      <pubDate>Mon, 21 Sep 2020 09:00:00 +0900</pubDate>
      <dc:title>Case Closed : 名探偵コナン</dc:title>
      <dcndl:titleTranscription>ケース クローズド : メイタンテイ コナン</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌</dc:creator>
      <dc:creator>Naoko, Amemiya</dc:creator>
      <dcndl:creatorTranscription>アオヤマ,ゴウショウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アメミヤ,ナオコ</dcndl:creatorTranscription>
      <dcndl:volume>Volume 12</dcndl:volume>
      <dcndl:edition>Shonen Sunday Ed.[ペーパーバック]</dcndl:edition>
      <dcndl:seriesTitle>Shonen Sunday : Manga Starts on Sunday</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー : マンガ スターツ オン サンデー</dcndl:seriesTitleTranscription>
      <dc:publisher>VIZ Media,LLC</dc:publisher>
      <dcndl:publicationPlace>US</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2006</dc:date>
      <dcterms:issued>2006.7</dcterms:issued>
      <dcndl:price>US$9.99</dcndl:price>
      <dc:extent>1冊 ; 19cm</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">1421504421</dc:identifier>
      <dc:subject xsi:type="dcndl:NDC10">726.1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">726.1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC8">726.1</dc:subject>
      <dc:description>装丁 : ソフトカバー</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.okinawa.jp/winj/opac/switch-detail-iccap.do?bibid=1101546004"/>
      <dc:description> 2006</dc:description>
    </item>
    <item>
      <title>Case Closed : 名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I47111101546006</link>
      <description><![CDATA[<p>Volume 13,VIZ Media,LLC,2006,1421504438<p><ul><li>タイトル：Case Closed : 名探偵コナン</li><li>タイトル（読み）：ケース クローズド : メイタンテイ コナン</li><li>責任表示：GoshoAoyama [著] ; NaokoAmemiya [訳・英語監修]</li><li>シリーズ名：Shonen Sunday : Manga Starts on Sunday</li><li>シリーズ名（読み）：ショウネン サンデー : マンガ スターツ オン サンデー</li><li>NDC(10)：726.1</li><li>NDC(9)：726.1</li></ul>]]></description>
      <author>青山, 剛昌,Naoko, Amemiya,GoshoAoyama [著] ; NaokoAmemiya [訳・英語監修]</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I47111101546006</guid>
      <pubDate>Mon, 21 Sep 2020 09:00:00 +0900</pubDate>
      <dc:title>Case Closed : 名探偵コナン</dc:title>
      <dcndl:titleTranscription>ケース クローズド : メイタンテイ コナン</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌</dc:creator>
      <dc:creator>Naoko, Amemiya</dc:creator>
      <dcndl:creatorTranscription>アオヤマ,ゴウショウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アメミヤ,ナオコ</dcndl:creatorTranscription>
      <dcndl:volume>Volume 13</dcndl:volume>
      <dcndl:edition>Shonen Sunday Ed.[ペーパーバック]</dcndl:edition>
      <dcndl:seriesTitle>Shonen Sunday : Manga Starts on Sunday</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー : マンガ スターツ オン サンデー</dcndl:seriesTitleTranscription>
      <dc:publisher>VIZ Media,LLC</dc:publisher>
      <dcndl:publicationPlace>US</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2006</dc:date>
      <dcterms:issued>2006.9</dcterms:issued>
      <dcndl:price>US$9.99</dcndl:price>
      <dc:extent>1冊 ; 19cm</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">1421504438</dc:identifier>
      <dc:subject xsi:type="dcndl:NDC10">726.1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">726.1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC8">726.1</dc:subject>
      <dc:description>装丁 : ソフトカバー</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.okinawa.jp/winj/opac/switch-detail-iccap.do?bibid=1101546006"/>
      <dc:description> 2006</dc:description>
    </item>
    <item>
      <title>Case Closed : 名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I47111101546008</link>
      <description><![CDATA[<p>Volume 14,VIZ Media,LLC,2006,1421504445<p><ul><li>タイトル：Case Closed : 名探偵コナン</li><li>タイトル（読み）：ケース クローズド : メイタンテイ コナン</li><li>責任表示：GoshoAoyama [著] ; NaokoAmemiya [訳]</li><li>シリーズ名：Shonen Sunday : Manga Starts on Sunday</li><li>シリーズ名（読み）：ショウネン サンデー : マンガ スターツ オン サンデー</li><li>NDC(10)：726.1</li><li>NDC(9)：726.1</li></ul>]]></description>
      <author>青山, 剛昌,Naoko, Amemiya,GoshoAoyama [著] ; NaokoAmemiya [訳]</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I47111101546008</guid>
      <pubDate>Mon, 21 Sep 2020 09:00:00 +0900</pubDate>
      <dc:title>Case Closed : 名探偵コナン</dc:title>
      <dcndl:titleTranscription>ケース クローズド : メイタンテイ コナン</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌</dc:creator>
      <dc:creator>Naoko, Amemiya</dc:creator>
      <dcndl:creatorTranscription>アオヤマ,ゴウショウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アメミヤ,ナオコ</dcndl:creatorTranscription>
      <dcndl:volume>Volume 14</dcndl:volume>
      <dcndl:edition>Shonen Sunday Ed.[ペーパーバック]</dcndl:edition>
      <dcndl:seriesTitle>Shonen Sunday : Manga Starts on Sunday</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー : マンガ スターツ オン サンデー</dcndl:seriesTitleTranscription>
      <dc:publisher>VIZ Media,LLC</dc:publisher>
      <dcndl:publicationPlace>US</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2006</dc:date>
      <dcterms:issued>2006.11</dcterms:issued>
      <dcndl:price>US$9.99</dcndl:price>
      <dc:extent>1冊 ; 19cm</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">1421504445</dc:identifier>
      <dc:subject xsi:type="dcndl:NDC10">726.1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">726.1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC8">726.1</dc:subject>
      <dc:description>装丁 : ソフトカバー</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.okinawa.jp/winj/opac/switch-detail-iccap.do?bibid=1101546008"/>
      <dc:description> 2006</dc:description>
    </item>
    <item>
      <title>Case Closed : 名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I47111101546009</link>
      <description><![CDATA[<p>Volume 16,VIZ Media,LLC,2007,1421508818<p><ul><li>タイトル：Case Closed : 名探偵コナン</li><li>タイトル（読み）：ケース クローズド : メイタンテイ コナン</li><li>責任表示：GoshoAoyama [著] ; NaokoAmemiya [訳]</li><li>シリーズ名：Shonen Sunday : Manga Starts on Sunday</li><li>シリーズ名（読み）：ショウネン サンデー : マンガ スターツ オン サンデー</li><li>NDC(10)：726.1</li><li>NDC(9)：726.1</li></ul>]]></description>
      <author>青山, 剛昌,Naoko, Amemiya,GoshoAoyama [著] ; NaokoAmemiya [訳]</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I47111101546009</guid>
      <pubDate>Mon, 21 Sep 2020 09:00:00 +0900</pubDate>
      <dc:title>Case Closed : 名探偵コナン</dc:title>
      <dcndl:titleTranscription>ケース クローズド : メイタンテイ コナン</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌</dc:creator>
      <dc:creator>Naoko, Amemiya</dc:creator>
      <dcndl:creatorTranscription>アオヤマ,ゴウショウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アメミヤ,ナオコ</dcndl:creatorTranscription>
      <dcndl:volume>Volume 16</dcndl:volume>
      <dcndl:edition>Shonen Sunday Ed.[ペーパーバック]</dcndl:edition>
      <dcndl:seriesTitle>Shonen Sunday : Manga Starts on Sunday</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー : マンガ スターツ オン サンデー</dcndl:seriesTitleTranscription>
      <dc:publisher>VIZ Media,LLC</dc:publisher>
      <dcndl:publicationPlace>US</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2007</dc:date>
      <dcterms:issued>2007.3</dcterms:issued>
      <dcndl:price>US$9.99</dcndl:price>
      <dc:extent>1冊 ; 19cm</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">1421508818</dc:identifier>
      <dc:subject xsi:type="dcndl:NDC10">726.1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">726.1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC8">726.1</dc:subject>
      <dc:description>装丁 : ソフトカバー</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.okinawa.jp/winj/opac/switch-detail-iccap.do?bibid=1101546009"/>
      <dc:description> 2007</dc:description>
    </item>
    <item>
      <title>Case Closed : 名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I47111101546012</link>
      <description><![CDATA[<p>Volume 18,VIZ Media,LLC,2007,1421508832<p><ul><li>タイトル：Case Closed : 名探偵コナン</li><li>タイトル（読み）：ケース クローズド : メイタンテイ コナン</li><li>責任表示：GoshoAoyama [著] ; NaokoAmemiya [訳]</li><li>シリーズ名：Shonen Sunday : Manga Starts on Sunday</li><li>シリーズ名（読み）：ショウネン サンデー : マンガ スターツ オン サンデー</li><li>NDC(10)：726.1</li><li>NDC(9)：726.1</li></ul>]]></description>
      <author>青山, 剛昌,Naoko, Amemiya,GoshoAoyama [著] ; NaokoAmemiya [訳]</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I47111101546012</guid>
      <pubDate>Mon, 21 Sep 2020 09:00:00 +0900</pubDate>
      <dc:title>Case Closed : 名探偵コナン</dc:title>
      <dcndl:titleTranscription>ケース クローズド : メイタンテイ コナン</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌</dc:creator>
      <dc:creator>Naoko, Amemiya</dc:creator>
      <dcndl:creatorTranscription>アオヤマ,ゴウショウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アメミヤ,ナオコ</dcndl:creatorTranscription>
      <dcndl:volume>Volume 18</dcndl:volume>
      <dcndl:edition>Shonen Sunday Ed.[ペーパーバック]</dcndl:edition>
      <dcndl:seriesTitle>Shonen Sunday : Manga Starts on Sunday</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー : マンガ スターツ オン サンデー</dcndl:seriesTitleTranscription>
      <dc:publisher>VIZ Media,LLC</dc:publisher>
      <dcndl:publicationPlace>US</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2007</dc:date>
      <dcterms:issued>2007.7</dcterms:issued>
      <dcndl:price>US$9.99</dcndl:price>
      <dc:extent>1冊 ; 19cm</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">1421508832</dc:identifier>
      <dc:subject xsi:type="dcndl:NDC10">726.1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">726.1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC8">726.1</dc:subject>
      <dc:description>装丁 : ソフトカバー</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.okinawa.jp/winj/opac/switch-detail-iccap.do?bibid=1101546012"/>
      <dc:description> 2007</dc:description>
    </item>
    <item>
      <title>Case Closed : 名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I47111101546014</link>
      <description><![CDATA[<p>Volume 19,VIZ Media,LLC,2007,1421508849<p><ul><li>タイトル：Case Closed : 名探偵コナン</li><li>タイトル（読み）：ケース クローズド : メイタンテイ コナン</li><li>責任表示：GoshoAoyama [著] ; NaokoAmemiya [英語監修]</li><li>シリーズ名：Shonen Sunday : Manga Starts on Sunday</li><li>シリーズ名（読み）：ショウネン サンデー : マンガ スターツ オン サンデー</li><li>NDC(10)：726.1</li><li>NDC(9)：726.1</li></ul>]]></description>
      <author>青山, 剛昌,Naoko, Amemiya,GoshoAoyama [著] ; NaokoAmemiya [英語監修]</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I47111101546014</guid>
      <pubDate>Mon, 21 Sep 2020 09:00:00 +0900</pubDate>
      <dc:title>Case Closed : 名探偵コナン</dc:title>
      <dcndl:titleTranscription>ケース クローズド : メイタンテイ コナン</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌</dc:creator>
      <dc:creator>Naoko, Amemiya</dc:creator>
      <dcndl:creatorTranscription>アオヤマ,ゴウショウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アメミヤ,ナオコ</dcndl:creatorTranscription>
      <dcndl:volume>Volume 19</dcndl:volume>
      <dcndl:edition>Shonen Sunday Ed.[ペーパーバック]</dcndl:edition>
      <dcndl:seriesTitle>Shonen Sunday : Manga Starts on Sunday</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー : マンガ スターツ オン サンデー</dcndl:seriesTitleTranscription>
      <dc:publisher>VIZ Media,LLC</dc:publisher>
      <dcndl:publicationPlace>US</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2007</dc:date>
      <dcterms:issued>2007.9</dcterms:issued>
      <dcndl:price>US$9.99</dcndl:price>
      <dc:extent>1冊 ; 19cm</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">1421508849</dc:identifier>
      <dc:subject xsi:type="dcndl:NDC10">726.1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">726.1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC8">726.1</dc:subject>
      <dc:description>装丁 : ソフトカバー</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.okinawa.jp/winj/opac/switch-detail-iccap.do?bibid=1101546014"/>
      <dc:description> 2007</dc:description>
    </item>
    <item>
      <title>Case Closed : 名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I47111101545948</link>
      <description><![CDATA[<p>Volume 20,VIZ Media,LLC,2007,1421508856<p><ul><li>タイトル：Case Closed : 名探偵コナン</li><li>タイトル（読み）：ケース クローズド : メイタンテイ コナン</li><li>責任表示：GoshoAoyama [著] ; NaokoAmemiya [訳]</li><li>シリーズ名：Shonen Sunday : Manga Starts on Sunday</li><li>シリーズ名（読み）：ショウネン サンデー : マンガ スターツ オン サンデー</li><li>NDC(10)：726.1</li><li>NDC(9)：726.1</li></ul>]]></description>
      <author>青山, 剛昌,Naoko, Amemiya,GoshoAoyama [著] ; NaokoAmemiya [訳]</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I47111101545948</guid>
      <pubDate>Mon, 21 Sep 2020 09:00:00 +0900</pubDate>
      <dc:title>Case Closed : 名探偵コナン</dc:title>
      <dcndl:titleTranscription>ケース クローズド : メイタンテイ コナン</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌</dc:creator>
      <dc:creator>Naoko, Amemiya</dc:creator>
      <dcndl:creatorTranscription>アオヤマ,ゴウショウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アメミヤ,ナオコ</dcndl:creatorTranscription>
      <dcndl:volume>Volume 20</dcndl:volume>
      <dcndl:edition>Shonen Sunday Ed.[ペーパーバック]</dcndl:edition>
      <dcndl:seriesTitle>Shonen Sunday : Manga Starts on Sunday</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー : マンガ スターツ オン サンデー</dcndl:seriesTitleTranscription>
      <dc:publisher>VIZ Media,LLC</dc:publisher>
      <dcndl:publicationPlace>US</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2007</dc:date>
      <dcterms:issued>2007.11</dcterms:issued>
      <dcndl:price>US$9.99</dcndl:price>
      <dc:extent>1冊 ; 19cm</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">1421508856</dc:identifier>
      <dc:subject xsi:type="dcndl:NDC10">726.1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">726.1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC8">726.1</dc:subject>
      <dc:description>装丁 : ソフトカバー</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.okinawa.jp/winj/opac/switch-detail-iccap.do?bibid=1101545948"/>
      <dc:description> 2007</dc:description>
    </item>
    <item>
      <title>建設FILE : 名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I25111854406</link>
      <description><![CDATA[<p>日本建設業団体連合会,2005,<p><ul><li>タイトル：建設FILE : 名探偵コナン</li><li>タイトル（読み）：ケンセツ ファイル : メイタンテイ コナン</li><li>責任表示：日本建設業団体連合会 編</li></ul>]]></description>
      <author>日本建設業団体連合会,日本建設業団体連合会 編</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I25111854406</guid>
      <pubDate>Fri, 6 Sep 2024 09:00:00 +0900</pubDate>
      <dc:title>建設FILE : 名探偵コナン</dc:title>
      <dcndl:titleTranscription>ケンセツ ファイル : メイタンテイ コナン</dcndl:titleTranscription>
      <dc:creator>日本建設業団体連合会</dc:creator>
      <dcndl:creatorTranscription>ニホン ケンセツギョウ ダンタイ レンゴウカイ</dcndl:creatorTranscription>
      <dc:publisher>日本建設業団体連合会</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2005</dc:date>
      <dcndl:price>頒価不明</dcndl:price>
      <dc:extent>143p ; 18cm</dc:extent>
      <dc:subject>建設業-日本</dc:subject>
      <dc:subject xsi:type="dcndl:NDC8">510</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.shiga-pref-library.jp/wo/opc_srh/srh_detail/1854406/"/>
      <dc:description> 2005</dc:description>
    </item>
    <item>
      <title>劇場版アニメコミック 名探偵コナン 紺碧の棺</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000128-IB16470619</link>
      <description><![CDATA[<p>上,小学館,2007,<p><ul><li>タイトル：劇場版アニメコミック 名探偵コナン 紺碧の棺</li><li>タイトル（読み）：ゲキジョウバン アニメコミック メイタンテイ コナン コンペキ ノ ジョリー ロジャー</li><li>責任表示：青山剛昌∥原作</li><li>シリーズ名：少年サンデーコミックススペシャル ; 1194</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル ; 001194</li></ul>]]></description>
      <author>青山/剛昌,青山剛昌∥原作</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000128-IB16470619</guid>
      <pubDate>Fri, 4 Oct 2024 10:42:40 +0900</pubDate>
      <dc:title>劇場版アニメコミック 名探偵コナン 紺碧の棺</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン アニメコミック メイタンテイ コナン コンペキ ノ ジョリー ロジャー</dcndl:titleTranscription>
      <dc:creator>青山/剛昌</dc:creator>
      <dcndl:creatorTranscription>アオヤマ ゴウショウ</dcndl:creatorTranscription>
      <dcndl:volume>上</dcndl:volume>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル ; 1194</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル ; 001194</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JA</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2007</dc:date>
      <dcterms:issued>2007.11</dcterms:issued>
      <dcndl:price>781円</dcndl:price>
      <dc:extent>205p ; 18×13cm</dc:extent>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16470619"/>
      <dc:description> 2007</dc:description>
    </item>
    <item>
      <title>劇場版アニメコミック 名探偵コナン 紺碧の棺</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000128-IB16471611</link>
      <description><![CDATA[<p>下,小学館,2007,<p><ul><li>タイトル：劇場版アニメコミック 名探偵コナン 紺碧の棺</li><li>タイトル（読み）：ゲキジョウバン アニメコミック メイタンテイ コナン コンペキ ノ ジョリー ロジャー</li><li>責任表示：青山剛昌∥原作</li><li>シリーズ名：少年サンデーコミックススペシャル ; 1195</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル ; 001195</li></ul>]]></description>
      <author>青山/剛昌,青山剛昌∥原作</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000128-IB16471611</guid>
      <pubDate>Fri, 4 Oct 2024 10:47:50 +0900</pubDate>
      <dc:title>劇場版アニメコミック 名探偵コナン 紺碧の棺</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン アニメコミック メイタンテイ コナン コンペキ ノ ジョリー ロジャー</dcndl:titleTranscription>
      <dc:creator>青山/剛昌</dc:creator>
      <dcndl:creatorTranscription>アオヤマ ゴウショウ</dcndl:creatorTranscription>
      <dcndl:volume>下</dcndl:volume>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル ; 1195</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル ; 001195</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JA</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2007</dc:date>
      <dcterms:issued>2007.12</dcterms:issued>
      <dcndl:price>781円</dcndl:price>
      <dc:extent>200p ; 18×13cm</dc:extent>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16471611"/>
      <dc:description> 2007</dc:description>
    </item>
    <item>
      <title>劇場版アニメコミック 名探偵コナン 漆黒の追跡者</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000128-IB16495425</link>
      <description><![CDATA[<p>上,小学館,2009,<p><ul><li>タイトル：劇場版アニメコミック 名探偵コナン 漆黒の追跡者</li><li>タイトル（読み）：ゲキジョウバン アニメコミック メイタンテイ コナン シッコク ノ チェイサー</li><li>責任表示：青山剛昌∥原作</li><li>シリーズ名：少年サンデーコミックススペシャル ; 2057</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル ; 002057</li></ul>]]></description>
      <author>青山/剛昌,青山剛昌∥原作</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000128-IB16495425</guid>
      <pubDate>Fri, 4 Oct 2024 12:05:13 +0900</pubDate>
      <dc:title>劇場版アニメコミック 名探偵コナン 漆黒の追跡者</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン アニメコミック メイタンテイ コナン シッコク ノ チェイサー</dcndl:titleTranscription>
      <dc:creator>青山/剛昌</dc:creator>
      <dcndl:creatorTranscription>アオヤマ ゴウショウ</dcndl:creatorTranscription>
      <dcndl:volume>上</dcndl:volume>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル ; 2057</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル ; 002057</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JA</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2009</dc:date>
      <dcterms:issued>2009.11</dcterms:issued>
      <dcndl:price>781円</dcndl:price>
      <dc:extent>204p ; 18×13cm</dc:extent>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16495425"/>
      <dc:description> 2009</dc:description>
    </item>
    <item>
      <title>劇場版アニメコミック 名探偵コナン 漆黒の追跡者</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000128-IB16497039</link>
      <description><![CDATA[<p>下,小学館,2009,<p><ul><li>タイトル：劇場版アニメコミック 名探偵コナン 漆黒の追跡者</li><li>タイトル（読み）：ゲキジョウバン アニメコミック メイタンテイ コナン シッコク ノ チェイサー</li><li>責任表示：青山剛昌∥原作</li><li>シリーズ名：少年サンデーコミックススペシャル ; 2058</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル ; 002058</li></ul>]]></description>
      <author>青山/剛昌,青山剛昌∥原作</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000128-IB16497039</guid>
      <pubDate>Fri, 4 Oct 2024 12:06:13 +0900</pubDate>
      <dc:title>劇場版アニメコミック 名探偵コナン 漆黒の追跡者</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン アニメコミック メイタンテイ コナン シッコク ノ チェイサー</dcndl:titleTranscription>
      <dc:creator>青山/剛昌</dc:creator>
      <dcndl:creatorTranscription>アオヤマ ゴウショウ</dcndl:creatorTranscription>
      <dcndl:volume>下</dcndl:volume>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル ; 2058</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル ; 002058</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JA</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2009</dc:date>
      <dcterms:issued>2009.12</dcterms:issued>
      <dcndl:price>781円</dcndl:price>
      <dc:extent>204p ; 18×13cm</dc:extent>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16497039"/>
      <dc:description> 2009</dc:description>
    </item>
    <item>
      <title>劇場版アニメコミック 名探偵コナン 天空の難破船 : 劇場版アニメコミック</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000128-IB16508536</link>
      <description><![CDATA[<p>上,小学館,2010,<p><ul><li>タイトル：劇場版アニメコミック 名探偵コナン 天空の難破船 : 劇場版アニメコミック</li><li>タイトル（読み）：ゲキジョウバン アニメコミック メイタンテイ コナン テンクウ ノ ロスト シップ : ゲキジョウバン アニメ コミック</li><li>責任表示：青山剛昌∥原作</li><li>シリーズ名：少年サンデーコミックススペシャル ; 2574</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル ; 002574</li></ul>]]></description>
      <author>青山/剛昌,青山剛昌∥原作</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000128-IB16508536</guid>
      <pubDate>Mon, 8 Apr 2024 08:00:00 +0900</pubDate>
      <dc:title>劇場版アニメコミック 名探偵コナン 天空の難破船 : 劇場版アニメコミック</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン アニメコミック メイタンテイ コナン テンクウ ノ ロスト シップ : ゲキジョウバン アニメ コミック</dcndl:titleTranscription>
      <dc:creator>青山/剛昌</dc:creator>
      <dcndl:creatorTranscription>アオヤマ ゴウショウ</dcndl:creatorTranscription>
      <dcndl:volume>上</dcndl:volume>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル ; 2574</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル ; 002574</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JA</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2010</dc:date>
      <dcterms:issued>2010.11</dcterms:issued>
      <dcndl:price>781円</dcndl:price>
      <dc:extent>204p ; 18×13cm</dc:extent>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16508536"/>
      <dc:description> 2010</dc:description>
    </item>
    <item>
      <title>劇場版名探偵コナンから紅の恋歌(ラブレター)</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I030356244</link>
      <description><![CDATA[<p>小学館,2020,978-4-09-850109-0<p><ul><li>タイトル：劇場版名探偵コナンから紅の恋歌(ラブレター)</li><li>タイトル（読み）：ゲキジョウバン メイタンテイ コナン カラクレナイ ノ ラブ レター</li><li>責任表示：青山剛昌 原作,大倉崇裕 脚本</li><li>シリーズ名：少年サンデーコミックススペシャル</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル</li><li>NDC(10)：726.1</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,大倉, 崇裕, 1968-,青山剛昌 原作,大倉崇裕 脚本</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I030356244</guid>
      <pubDate>Mon, 14 Feb 2022 19:21:57 +0900</pubDate>
      <dc:title>劇場版名探偵コナンから紅の恋歌(ラブレター)</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン メイタンテイ コナン カラクレナイ ノ ラブ レター</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>大倉, 崇裕, 1968-</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>オオクラ, タカヒロ, 1968-</dcndl:creatorTranscription>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2020</dc:date>
      <dcterms:issued>2020.4</dcterms:issued>
      <dcndl:price>880円</dcndl:price>
      <dc:extent>408p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-850109-0</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">030356244</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23407295</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">07448440</dc:identifier>
      <dcndl:genre>漫画</dcndl:genre>
      <dcndl:genreTranscription>マンガ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y84</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">726.1</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.library.city.nagoya.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1002110047520"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I030356244"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16544750"/>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BC02131992"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/098501090000d0000000"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784098501090"/>
      <dc:description> 2020</dc:description>
    </item>
    <item>
      <title>劇場版 : 名探偵コナン : から紅の恋歌(ラブレター)</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000136-I1130282269160106624</link>
      <description><![CDATA[<p>小学館 (発売),2017,<p><ul><li>タイトル：劇場版 : 名探偵コナン : から紅の恋歌(ラブレター)</li><li>タイトル（読み）：ゲキジョウバン : メイタンテイ コナン : カラクレナイ ノ ラブレター</li><li>責任表示：静野孔文監督 ; 大倉崇裕脚本</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author>静野, 孔文,大倉, 崇裕,青山, 剛昌,静野孔文監督 ; 大倉崇裕脚本</author>
      <category>映像資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000136-I1130282269160106624</guid>
      <pubDate>Sun, 22 Dec 2024 00:00:10 +0900</pubDate>
      <dc:title>劇場版 : 名探偵コナン : から紅の恋歌(ラブレター)</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン : メイタンテイ コナン : カラクレナイ ノ ラブレター</dcndl:titleTranscription>
      <dc:creator>静野, 孔文</dc:creator>
      <dc:creator>大倉, 崇裕</dc:creator>
      <dc:creator>青山, 剛昌</dc:creator>
      <dcndl:creatorTranscription>オオクラ, タカヒロ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ</dcndl:creatorTranscription>
      <dc:publisher>小学館 (発売)</dc:publisher>
      <dc:publisher>Being (販売)</dc:publisher>
      <dcndl:publicationPlace>ja</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2017</dc:date>
      <dcterms:issued>2017.10</dcterms:issued>
      <dc:identifier xsi:type="dcndl:NIIBibID">BB25690089</dc:identifier>
      <dc:subject>アニメーション</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <dc:description>日本語字幕</dc:description>
      <dc:description>特典映像: 劇場用予告, 特報</dc:description>
      <dc:description>原作: 青山剛昌</dc:description>
      <dc:description>キャスト: 高山みなみ(江戸川コナン), 小山力也(毛利小五郎)</dc:description>
      <dc:description>主題歌: 倉木麻衣「渡月橋 ～君 想ふ～」</dc:description>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BB25690089"/>
      <dc:description> 2017</dc:description>
    </item>
    <item>
      <title>劇場版「名探偵コナン銀翼の奇術師」オリジナル・サウンドトラック</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I031499732</link>
      <description><![CDATA[<p>ユニバーサルミュージック,2021,<p><ul><li>タイトル：劇場版「名探偵コナン銀翼の奇術師」オリジナル・サウンドトラック</li><li>タイトル（読み）：ゲキジョウバン 「 メイタンテイ コナン ギンヨク ノ マジシャン」 オリジナル ・ サウンドトラック</li><li>責任表示：大野克夫 音楽</li><li>シリーズ名：名探偵コナンオリジナル・サウンドトラック1997-2006 box</li></ul>]]></description>
      <author>大野克夫 音楽</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I031499732</guid>
      <pubDate>Wed, 30 Jun 2021 22:11:38 +0900</pubDate>
      <dc:title>劇場版「名探偵コナン銀翼の奇術師」オリジナル・サウンドトラック</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン 「 メイタンテイ コナン ギンヨク ノ マジシャン」 オリジナル ・ サウンドトラック</dcndl:titleTranscription>
      <dcndl:seriesTitle>名探偵コナンオリジナル・サウンドトラック1997-2006 box</dcndl:seriesTitle>
      <dc:publisher>ユニバーサルミュージック</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2021</dc:date>
      <dcterms:issued>2021.5</dcterms:issued>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">UPCY-9944</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">031499732</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23547259</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>完全生産限定盤</dc:description>
      <dc:description>所要時間: 66分25秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I031499732"/>
      <dc:description> 2021</dc:description>
    </item>
    <item>
      <title>劇場版「名探偵コナン黒鉄の魚影」シール</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000128-IB14271559</link>
      <description><![CDATA[<p>小学館,2023,978-4-09-735602-8<p><ul><li>タイトル：劇場版「名探偵コナン黒鉄の魚影」シール</li><li>タイトル（読み）：ゲキジョウバン メイタンテイ コナン クロガネ ノ サブマリン シール</li><li>シリーズ名：まるごとシールブックDX</li><li>シリーズ名（読み）：マルゴト シール ブック デラックス</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author/>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000128-IB14271559</guid>
      <pubDate>Mon, 8 Apr 2024 08:00:00 +0900</pubDate>
      <dc:title>劇場版「名探偵コナン黒鉄の魚影」シール</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン メイタンテイ コナン クロガネ ノ サブマリン シール</dcndl:titleTranscription>
      <dcndl:seriesTitle>まるごとシールブックDX</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>マルゴト シール ブック デラックス</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JA</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2023</dc:date>
      <dcterms:issued>2023.4</dcterms:issued>
      <dcndl:price>¥650</dcndl:price>
      <dc:extent>16枚 ; 14cm</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-735602-8</dc:identifier>
      <dc:identifier xsi:type="dcndl:TRCMARCNO">23704550</dc:identifier>
      <dc:subject>アニメーション</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B14271559"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784097356028"/>
      <dc:description> 2023</dc:description>
    </item>
    <item>
      <title>劇場版 名探偵コナン 紺碧の棺</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000128-IB16503912</link>
      <description><![CDATA[<p>小学館,2010,<p><ul><li>タイトル：劇場版 名探偵コナン 紺碧の棺</li><li>タイトル（読み）：ゲキジョウバン メイタンテイ コナン コンペキ ノ ジョリー ロジャー</li><li>責任表示：青山剛昌∥原作</li><li>シリーズ名：少年サンデーコミックススペシャル ; 2253</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル ; 002253</li></ul>]]></description>
      <author>青山/剛昌,青山剛昌∥原作</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000128-IB16503912</guid>
      <pubDate>Mon, 8 Apr 2024 08:00:00 +0900</pubDate>
      <dc:title>劇場版 名探偵コナン 紺碧の棺</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン メイタンテイ コナン コンペキ ノ ジョリー ロジャー</dcndl:titleTranscription>
      <dc:creator>青山/剛昌</dc:creator>
      <dcndl:creatorTranscription>アオヤマ ゴウショウ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル ; 2253</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル ; 002253</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JA</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2010</dc:date>
      <dcterms:issued>2010.4</dcterms:issued>
      <dcndl:price>743円</dcndl:price>
      <dc:extent>404p ; 18×13cm</dc:extent>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16503912"/>
      <dc:description> 2010</dc:description>
    </item>
    <item>
      <title>劇場版 : 名探偵コナン : 業火の向日葵</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000136-I1130282271485977216</link>
      <description><![CDATA[<p>小学館 (発売),2015,<p><ul><li>タイトル：劇場版 : 名探偵コナン : 業火の向日葵</li><li>タイトル（読み）：ゲキジョウバン : メイタンテイ コナン : ゴウカ ノ ヒマワリ</li><li>責任表示：静野孔文監督 ; 櫻井武晴脚本</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author>静野, 孔文,桜井, 武晴,青山, 剛昌,静野孔文監督 ; 櫻井武晴脚本</author>
      <category>映像資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000136-I1130282271485977216</guid>
      <pubDate>Sun, 22 Dec 2024 00:00:10 +0900</pubDate>
      <dc:title>劇場版 : 名探偵コナン : 業火の向日葵</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン : メイタンテイ コナン : ゴウカ ノ ヒマワリ</dcndl:titleTranscription>
      <dc:creator>静野, 孔文</dc:creator>
      <dc:creator>桜井, 武晴</dc:creator>
      <dc:creator>青山, 剛昌</dc:creator>
      <dcndl:creatorTranscription>サクライ, タケハル</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ</dcndl:creatorTranscription>
      <dc:publisher>小学館 (発売)</dc:publisher>
      <dc:publisher>Being (販売)</dc:publisher>
      <dcndl:publicationPlace>ja</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2015</dc:date>
      <dcterms:issued>2015.11</dcterms:issued>
      <dc:identifier xsi:type="dcndl:NIIBibID">BB25689239</dc:identifier>
      <dc:subject>アニメーション</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <dc:description>日本語字幕</dc:description>
      <dc:description>特典映像: 劇場版予告編, 特報</dc:description>
      <dc:description>原作: 青山剛昌</dc:description>
      <dc:description>キャスト: 高山みなみ(江戸川コナン), 小山力也(毛利小五郎)</dc:description>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BB25689239"/>
      <dc:description> 2015</dc:description>
    </item>
    <item>
      <title>劇場版名探偵コナン主題歌集20 All Songs</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I22213001303004939</link>
      <description><![CDATA[<p>2017-03,<p><ul><li>タイトル：劇場版名探偵コナン主題歌集20 All Songs</li><li>タイトル（読み）：ゲキジョウバン メイタンテイ コナン シュダイカシュウ トゥエンティ オール ソングス</li><li>責任表示：杏子／[ほか]演奏</li></ul>]]></description>
      <author>杏子,ZARD,B'z,小松 未歩,倉木 麻衣,杏子／[ほか]演奏</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I22213001303004939</guid>
      <pubDate>Sat, 12 Apr 2025 19:55:30 +0900</pubDate>
      <dc:title>劇場版名探偵コナン主題歌集20 All Songs</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン メイタンテイ コナン シュダイカシュウ トゥエンティ オール ソングス</dcndl:titleTranscription>
      <dc:creator>杏子</dc:creator>
      <dc:creator>ZARD</dc:creator>
      <dc:creator>B'z</dc:creator>
      <dc:creator>小松 未歩</dc:creator>
      <dc:creator>倉木 麻衣</dc:creator>
      <dcndl:creatorTranscription>キョウコ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ザード</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ビーズ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>コマツ ミホ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>クラキ マイ</dcndl:creatorTranscription>
      <dc:date xsi:type="dcterms:W3CDTF">2017-03</dc:date>
      <dcterms:issued>2017.3</dcterms:issued>
      <dcndl:price>￥３０００</dcndl:price>
      <dc:extent>2</dc:extent>
      <dc:identifier xsi:type="dcndl:TRCMARCNO">17901725</dc:identifier>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=3001303004939"/>
      <dc:description> 2017-03</dc:description>
    </item>
    <item>
      <title>劇場版名探偵コナン主題歌集20 all songs</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I027814579</link>
      <description><![CDATA[<p>[Being],2017,<p><ul><li>タイトル：劇場版名探偵コナン主題歌集20 all songs</li><li>タイトル（読み）：ゲキジョウバン メイタンテイ コナン シュダイカシュウ 20 all songs</li></ul>]]></description>
      <author/>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I027814579</guid>
      <pubDate>Thu, 16 Jun 2022 22:11:21 +0900</pubDate>
      <dc:title>劇場版名探偵コナン主題歌集20 all songs</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン メイタンテイ コナン シュダイカシュウ 20 all songs</dcndl:titleTranscription>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2017</dc:date>
      <dcterms:issued>2017.3</dcterms:issued>
      <dcndl:price>3000円</dcndl:price>
      <dc:extent>CD 2枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">JBCZ-9047</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">027814579</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23690691</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>通常盤</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I027814579"/>
      <dc:description> 2017</dc:description>
    </item>
    <item>
      <title>劇場版名探偵コナン純黒の悪夢(ナイトメア)</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I029627002</link>
      <description><![CDATA[<p>小学館,2019,978-4-09-129218-6<p><ul><li>タイトル：劇場版名探偵コナン純黒の悪夢(ナイトメア)</li><li>タイトル（読み）：ゲキジョウバン メイタンテイ コナン ジュンコク ノ ナイトメア</li><li>責任表示：青山剛昌 原作,櫻井武晴 脚本</li><li>シリーズ名：少年サンデーコミックススペシャル</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル</li><li>NDC(10)：726.1</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,櫻井, 武晴, 1970-,青山剛昌 原作,櫻井武晴 脚本</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I029627002</guid>
      <pubDate>Mon, 31 Jan 2022 18:53:40 +0900</pubDate>
      <dc:title>劇場版名探偵コナン純黒の悪夢(ナイトメア)</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン メイタンテイ コナン ジュンコク ノ ナイトメア</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>櫻井, 武晴, 1970-</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>サクライ, タケハル, 1970-</dcndl:creatorTranscription>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2019</dc:date>
      <dcterms:issued>2019.4</dcterms:issued>
      <dcndl:price>880円</dcndl:price>
      <dc:extent>407p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-129218-6</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">029627002</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23217934</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">07425907</dc:identifier>
      <dcndl:genre>漫画</dcndl:genre>
      <dcndl:genreTranscription>マンガ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y84</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">726.1</dc:subject>
      <dc:description>「名探偵コナン純黒の悪夢 上・下」(2016年刊)の合本</dc:description>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0015326865"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I029627002"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16541760"/>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BD01364642"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/091292180000d0000000"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784091292186"/>
      <dc:description> 2019</dc:description>
    </item>
    <item>
      <title>劇場版「名探偵コナン」水平線上の陰謀公式ファンブック</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000007704529</link>
      <description><![CDATA[<p>小学館,2005,4-09-106219-9<p><ul><li>タイトル：劇場版「名探偵コナン」水平線上の陰謀公式ファンブック</li><li>タイトル（読み）：ゲキジョウバン メイタンテイ コナン スイヘイセンジョウ ノ ストラテジー コウシキ ファンブック</li><li>シリーズ名：ワンダーライフスペシャル</li><li>シリーズ名（読み）：ワンダー ライフ スペシャル</li><li>NDC(9)：778.77</li></ul>]]></description>
      <author/>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000007704529</guid>
      <pubDate>Tue, 19 Jul 2022 20:49:54 +0900</pubDate>
      <dc:title>劇場版「名探偵コナン」水平線上の陰謀公式ファンブック</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン メイタンテイ コナン スイヘイセンジョウ ノ ストラテジー コウシキ ファンブック</dcndl:titleTranscription>
      <dcndl:seriesTitle>ワンダーライフスペシャル</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ワンダー ライフ スペシャル</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2005</dc:date>
      <dcterms:issued>2005.5</dcterms:issued>
      <dcndl:price>838円</dcndl:price>
      <dc:extent>74p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">4-09-106219-9</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">4-09-106219-9</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000007704529</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">20771576</dc:identifier>
      <dc:subject>アニメーション</dc:subject>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y6</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">778.77</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.library.city.nagoya.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009915005755"/>
      <rdfs:seeAlso rdf:resource="https://www.shiga-pref-library.jp/wo/opc_srh/srh_detail/1836311/"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0010965716"/>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.tottori.jp/winj/opac/switch-detail-iccap.do?bibid=1101234299"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009810739802"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1102677385"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000007704529"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16445969"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784091062192"/>
      <dc:description> 2005</dc:description>
    </item>
    <item>
      <title>劇場版「名探偵コナン水平線上の陰謀」オリジナル・サウンドトラック</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I031499738</link>
      <description><![CDATA[<p>ユニバーサルミュージック,2021,<p><ul><li>タイトル：劇場版「名探偵コナン水平線上の陰謀」オリジナル・サウンドトラック</li><li>タイトル（読み）：ゲキジョウバン 「 メイタンテイ コナン スイヘイセンジョウ ノ ストラテジー 」 オリジナル ・ サウンドトラック</li><li>責任表示：大野克夫 音楽</li><li>シリーズ名：名探偵コナンオリジナル・サウンドトラック1997-2006 box</li></ul>]]></description>
      <author>大野克夫 音楽</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I031499738</guid>
      <pubDate>Wed, 30 Jun 2021 22:12:01 +0900</pubDate>
      <dc:title>劇場版「名探偵コナン水平線上の陰謀」オリジナル・サウンドトラック</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン 「 メイタンテイ コナン スイヘイセンジョウ ノ ストラテジー 」 オリジナル ・ サウンドトラック</dcndl:titleTranscription>
      <dcndl:seriesTitle>名探偵コナンオリジナル・サウンドトラック1997-2006 box</dcndl:seriesTitle>
      <dc:publisher>ユニバーサルミュージック</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2021</dc:date>
      <dcterms:issued>2021.5</dcterms:issued>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">UPCY-9945</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">031499738</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23547261</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>完全生産限定盤</dc:description>
      <dc:description>所要時間: 67分39秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I031499738"/>
      <dc:description> 2021</dc:description>
    </item>
    <item>
      <title>劇場版 名探偵コナン 水平線上の陰謀</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000128-IB16474540</link>
      <description><![CDATA[<p>小学館,2008,<p><ul><li>タイトル：劇場版 名探偵コナン 水平線上の陰謀</li><li>タイトル（読み）：ゲキジョウバン メイタンテイ コナン スイヘイセンジョウ ノ ストラテジー</li><li>責任表示：青山剛昌∥原作</li><li>シリーズ名：少年サンデーコミックススペシャル ; 1424</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル ; 001424</li></ul>]]></description>
      <author>青山/剛昌,青山剛昌∥原作</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000128-IB16474540</guid>
      <pubDate>Thu, 26 Sep 2024 10:03:53 +0900</pubDate>
      <dc:title>劇場版 名探偵コナン 水平線上の陰謀</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン メイタンテイ コナン スイヘイセンジョウ ノ ストラテジー</dcndl:titleTranscription>
      <dc:creator>青山/剛昌</dc:creator>
      <dcndl:creatorTranscription>アオヤマ ゴウショウ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル ; 1424</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル ; 001424</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JA</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2008</dc:date>
      <dcterms:issued>2008.4</dcterms:issued>
      <dcndl:price>743円</dcndl:price>
      <dc:extent>405p ; 18×13cm</dc:extent>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16474540"/>
      <dc:description> 2008</dc:description>
    </item>
    <item>
      <title>劇場版名探偵コナン世紀末の魔術師</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I23211009914086413</link>
      <description><![CDATA[<p>上巻,小学館,1999-10,4-09-124875-6<p><ul><li>タイトル：劇場版名探偵コナン世紀末の魔術師</li><li>タイトル（読み）：ゲキジヨウバン メイタンテイ コナン セイキマツ ノ マジユツシ</li><li>責任表示：青山剛昌／原作</li><li>シリーズ名：少年サンデーコミックスビジュアルセレクション</li><li>NDC(9)：C</li></ul>]]></description>
      <author>青山剛昌,青山剛昌／原作</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I23211009914086413</guid>
      <pubDate>Wed, 23 Aug 2023 17:00:43 +0900</pubDate>
      <dc:title>劇場版名探偵コナン世紀末の魔術師</dc:title>
      <dcndl:titleTranscription>ゲキジヨウバン メイタンテイ コナン セイキマツ ノ マジユツシ</dcndl:titleTranscription>
      <dc:creator>青山剛昌</dc:creator>
      <dcndl:creatorTranscription>アオヤマ ゴウショウ</dcndl:creatorTranscription>
      <dcndl:volume>上巻</dcndl:volume>
      <dcndl:seriesTitle>少年サンデーコミックスビジュアルセレクション</dcndl:seriesTitle>
      <dc:publisher>小学館</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">1999-10</dc:date>
      <dcterms:issued>1999.10</dcterms:issued>
      <dcndl:price>¥781</dcndl:price>
      <dc:extent>203p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">4-09-124875-6</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">4-09-124875-6</dc:identifier>
      <dc:subject xsi:type="dcndl:NDC9">C</dc:subject>
      <dc:description>奥付の書名:名探偵コナン世紀末の魔術師 背の書名:劇場版名探偵コナン</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.nagoya.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009914086413"/>
      <rdfs:seeAlso rdf:resource="https://mediaarts-db.artmuseums.go.jp/id/M467933"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16177374"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784091248756"/>
      <dc:description> 1999-10</dc:description>
    </item>
    <item>
      <title>劇場版「名探偵コナン世紀末の魔術師」オリジナル・サウンドトラック</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I031499686</link>
      <description><![CDATA[<p>ユニバーサルミュージック,2021,<p><ul><li>タイトル：劇場版「名探偵コナン世紀末の魔術師」オリジナル・サウンドトラック</li><li>タイトル（読み）：ゲキジョウバン 「 メイタンテイ コナン セイキマツ ノ マジュツシ 」 オリジナル ・ サウンドトラック</li><li>責任表示：大野克夫 音楽</li><li>シリーズ名：名探偵コナンオリジナル・サウンドトラック1997-2006 box</li></ul>]]></description>
      <author>大野克夫 音楽</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I031499686</guid>
      <pubDate>Wed, 30 Jun 2021 22:09:29 +0900</pubDate>
      <dc:title>劇場版「名探偵コナン世紀末の魔術師」オリジナル・サウンドトラック</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン 「 メイタンテイ コナン セイキマツ ノ マジュツシ 」 オリジナル ・ サウンドトラック</dcndl:titleTranscription>
      <dcndl:seriesTitle>名探偵コナンオリジナル・サウンドトラック1997-2006 box</dcndl:seriesTitle>
      <dc:publisher>ユニバーサルミュージック</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2021</dc:date>
      <dcterms:issued>2021.5</dcterms:issued>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">UPCY-9939</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">031499686</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23547248</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>完全生産限定盤</dc:description>
      <dc:description>所要時間: 62分25秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I031499686"/>
      <dc:description> 2021</dc:description>
    </item>
    <item>
      <title>劇場版 名探偵コナン 隻眼の残像シール</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000137-I9784097356141</link>
      <description><![CDATA[<p>小学館,2025-04-18,9784097356141<p><ul><li>タイトル：劇場版 名探偵コナン 隻眼の残像シール</li><li>タイトル（読み）：ゲキジョウバンメイタンテイコナン セキガンノフラッシュバックシール</li><li>責任表示：小学館 著・文・その他</li><li>シリーズ名：まるごとシールブック</li></ul>]]></description>
      <author>小学館,小学館 著・文・その他</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000137-I9784097356141</guid>
      <pubDate>Thu, 17 Apr 2025 18:54:00 +0900</pubDate>
      <dc:title>劇場版 名探偵コナン 隻眼の残像シール</dc:title>
      <dcndl:titleTranscription>ゲキジョウバンメイタンテイコナン セキガンノフラッシュバックシール</dcndl:titleTranscription>
      <dc:creator>小学館</dc:creator>
      <dcndl:creatorTranscription>ショウガクカン</dcndl:creatorTranscription>
      <dcndl:seriesTitle>まるごとシールブック</dcndl:seriesTitle>
      <dc:publisher>小学館</dc:publisher>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2025-04-18</dc:date>
      <dcndl:price>700</dcndl:price>
      <dc:extent>32p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">9784097356141</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">9784097356141</dc:identifier>
      <dc:subject>敢助</dc:subject>
      <dc:description>発売</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784097356141"/>
      <dc:description> 2025-04-18</dc:description>
    </item>
    <item>
      <title>劇場版 名探偵コナン 戦慄の楽譜</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000128-IB16479872</link>
      <description><![CDATA[<p>上,小学館,2008,<p><ul><li>タイトル：劇場版 名探偵コナン 戦慄の楽譜</li><li>タイトル（読み）：ゲキジョウバン メイタンテイ コナン センリツ ノ フルスコア</li><li>責任表示：青山剛昌∥原作</li><li>シリーズ名：少年サンデーコミックスビジュアルセレクション ; 1475</li><li>シリーズ名（読み）：ショウネン サンデー コミックス ビジュアル セレクション ; 001475</li></ul>]]></description>
      <author>青山/剛昌,青山剛昌∥原作</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000128-IB16479872</guid>
      <pubDate>Fri, 11 Oct 2024 09:48:18 +0900</pubDate>
      <dc:title>劇場版 名探偵コナン 戦慄の楽譜</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン メイタンテイ コナン センリツ ノ フルスコア</dcndl:titleTranscription>
      <dc:creator>青山/剛昌</dc:creator>
      <dcndl:creatorTranscription>アオヤマ ゴウショウ</dcndl:creatorTranscription>
      <dcndl:volume>上</dcndl:volume>
      <dcndl:seriesTitle>少年サンデーコミックスビジュアルセレクション ; 1475</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス ビジュアル セレクション ; 001475</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JA</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2008</dc:date>
      <dcterms:issued>2008.11</dcterms:issued>
      <dcndl:price>781円</dcndl:price>
      <dc:extent>203p ; 18×13cm</dc:extent>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16479872"/>
      <dc:description> 2008</dc:description>
    </item>
    <item>
      <title>劇場版 名探偵コナン 戦慄の楽譜</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000128-IB16480360</link>
      <description><![CDATA[<p>下,小学館,2008,<p><ul><li>タイトル：劇場版 名探偵コナン 戦慄の楽譜</li><li>タイトル（読み）：ゲキジョウバン メイタンテイ コナン センリツ ノ フルスコア</li><li>責任表示：青山剛昌∥原作</li><li>シリーズ名：少年サンデーコミックスビジュアルセレクション ; 1476</li><li>シリーズ名（読み）：ショウネン サンデー コミックス ビジュアル セレクション ; 001476</li></ul>]]></description>
      <author>青山/剛昌,青山剛昌∥原作</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000128-IB16480360</guid>
      <pubDate>Fri, 11 Oct 2024 09:49:40 +0900</pubDate>
      <dc:title>劇場版 名探偵コナン 戦慄の楽譜</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン メイタンテイ コナン センリツ ノ フルスコア</dcndl:titleTranscription>
      <dc:creator>青山/剛昌</dc:creator>
      <dcndl:creatorTranscription>アオヤマ ゴウショウ</dcndl:creatorTranscription>
      <dcndl:volume>下</dcndl:volume>
      <dcndl:seriesTitle>少年サンデーコミックスビジュアルセレクション ; 1476</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス ビジュアル セレクション ; 001476</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JA</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2008</dc:date>
      <dcterms:issued>2008.12</dcterms:issued>
      <dcndl:price>781円</dcndl:price>
      <dc:extent>200p ; 18×13cm</dc:extent>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16480360"/>
      <dc:description> 2008</dc:description>
    </item>
    <item>
      <title>劇場版名探偵コナンゼロの執行人原画・設定資料集</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I029360238</link>
      <description><![CDATA[<p>小学館,2018,978-4-09-179267-9<p><ul><li>タイトル：劇場版名探偵コナンゼロの執行人原画・設定資料集</li><li>タイトル（読み）：ゲキジョウバン メイタンテイ コナン ゼロ ノ シッコウニン ゲンガ セッテイ シリョウシュウ</li><li>責任表示：青山剛昌 著作・原作者</li><li>シリーズ名：少年サンデーグラフィック</li><li>シリーズ名（読み）：ショウネン サンデー グラフィック</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,青山剛昌 著作・原作者</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I029360238</guid>
      <pubDate>Thu, 24 Jan 2019 18:42:05 +0900</pubDate>
      <dc:title>劇場版名探偵コナンゼロの執行人原画・設定資料集</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン メイタンテイ コナン ゼロ ノ シッコウニン ゲンガ セッテイ シリョウシュウ</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:seriesTitle>少年サンデーグラフィック</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー グラフィック</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2018</dc:date>
      <dcterms:issued>2018.12</dcterms:issued>
      <dcndl:price>2400円</dcndl:price>
      <dc:extent>173p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-179267-9</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">029360238</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23158032</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">33856061</dc:identifier>
      <dc:subject>アニメーション</dc:subject>
      <dc:subject xsi:type="dcndl:NDLC">Y88</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.tottori.jp/winj/opac/switch-detail-iccap.do?bibid=1120235972"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I029360238"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B13642511"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784091792679"/>
      <dc:description> 2018</dc:description>
    </item>
    <item>
      <title>劇場版 : 名探偵コナン : ゼロの執行人</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000136-I1130000797922482944</link>
      <description><![CDATA[<p>小学館 (発売),2018,<p><ul><li>タイトル：劇場版 : 名探偵コナン : ゼロの執行人</li><li>タイトル（読み）：ゲキジョウバン : メイタンテイ コナン : ゼロ ノ シッコウニン</li><li>責任表示：立川譲監督 ; 櫻井武晴脚本</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author>立川, 譲,桜井, 武晴,青山, 剛昌,立川譲監督 ; 櫻井武晴脚本</author>
      <category>映像資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000136-I1130000797922482944</guid>
      <pubDate>Sun, 22 Dec 2024 00:00:10 +0900</pubDate>
      <dc:title>劇場版 : 名探偵コナン : ゼロの執行人</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン : メイタンテイ コナン : ゼロ ノ シッコウニン</dcndl:titleTranscription>
      <dc:creator>立川, 譲</dc:creator>
      <dc:creator>桜井, 武晴</dc:creator>
      <dc:creator>青山, 剛昌</dc:creator>
      <dcndl:creatorTranscription>サクライ, タケハル</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ</dcndl:creatorTranscription>
      <dc:publisher>小学館 (発売)</dc:publisher>
      <dc:publisher>Being (販売)</dc:publisher>
      <dcndl:publicationPlace>ja</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2018</dc:date>
      <dcterms:issued>2018.10</dcterms:issued>
      <dc:identifier xsi:type="dcndl:NIIBibID">BB27691730</dc:identifier>
      <dc:subject>アニメーション</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <dc:description>日本語字幕</dc:description>
      <dc:description>原作: 青山剛昌</dc:description>
      <dc:description>キャスト: 高山みなみ(江戸川コナン), 小山力也(毛利小五郎)</dc:description>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BB27691730"/>
      <dc:description> 2018</dc:description>
    </item>
    <item>
      <title>劇場版名探偵コナン : ゼロの執行人原画・設定資料集 = Detective conan : Zero the enforcer key animations &amp; design works</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000136-I1130282272403179136</link>
      <description><![CDATA[<p>小学館,2018,9784091792679<p><ul><li>タイトル：劇場版名探偵コナン : ゼロの執行人原画・設定資料集 = Detective conan : Zero the enforcer key animations & design works</li><li>タイトル（読み）：ゲキジョウバン メイタンテイ コナン : ゼロ ノ シッコウニン ゲンガ・セッテイ シリョウシュウ</li><li>責任表示：青山剛昌著作・原作</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author>青山, 剛昌,青山剛昌著作・原作</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000136-I1130282272403179136</guid>
      <pubDate>Sun, 22 Dec 2024 00:00:10 +0900</pubDate>
      <dc:title>劇場版名探偵コナン : ゼロの執行人原画・設定資料集 = Detective conan : Zero the enforcer key animations &amp; design works</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン メイタンテイ コナン : ゼロ ノ シッコウニン ゲンガ・セッテイ シリョウシュウ</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ</dcndl:creatorTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>ja</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2018</dc:date>
      <dcterms:issued>2018.12</dcterms:issued>
      <dc:identifier xsi:type="dcndl:ISBN">9784091792679</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">9784091792679</dc:identifier>
      <dc:identifier xsi:type="dcndl:NIIBibID">BB27775262</dc:identifier>
      <dc:subject>アニメーション</dc:subject>
      <dc:subject xsi:type="dcndl:NDLC">Y88</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BB27775262"/>
      <dc:description> 2018</dc:description>
    </item>
    <item>
      <title>劇場版名探偵コナン全人物調書 : サンデー公式ガイド&lt;オールカラーエディション&gt;</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000008527271</link>
      <description><![CDATA[<p>小学館,2007,978-4-09-120823-1<p><ul><li>タイトル：劇場版名探偵コナン全人物調書 : サンデー公式ガイド<オールカラーエディション></li><li>タイトル（読み）：ゲキジョウバン メイタンテイ コナン ゼンジンブツ チョウショ</li><li>責任表示：青山剛昌 原作</li><li>NDC(9)：778.77</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,青山剛昌 原作</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000008527271</guid>
      <pubDate>Tue, 5 Jun 2007 23:14:20 +0900</pubDate>
      <dc:title>劇場版名探偵コナン全人物調書 : サンデー公式ガイド&lt;オールカラーエディション&gt;</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン メイタンテイ コナン ゼンジンブツ チョウショ</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2007</dc:date>
      <dcterms:issued>2007.4</dcterms:issued>
      <dcndl:price>619円</dcndl:price>
      <dc:extent>160p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-120823-1</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000008527271</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">21230862</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">Y88</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">778.77</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.library.city.nagoya.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000910006951"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0011426977"/>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.tottori.jp/winj/opac/switch-detail-iccap.do?bibid=1101420402"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009811179850"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1102938877"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000008527271"/>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BA84458548"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784091208231"/>
      <dc:description> 2007</dc:description>
    </item>
    <item>
      <title>劇場版名探偵コナン全人物調書 : ALL COLOR EDITION Sunday Official Guide Book</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000128-IB16465409</link>
      <description><![CDATA[<p>小学館,2007,<p><ul><li>タイトル：劇場版名探偵コナン全人物調書 : ALL COLOR EDITION Sunday Official Guide Book</li><li>タイトル（読み）：ゲキジョウバン メイタンテイ コナン ゼン ジンブツ チョウショ : ALL COLOR EDITION SUNDAY OFFCIAL GUIDE BOOK</li><li>責任表示：青山剛昌∥原作,須藤昌朋∥カバーイラスト原案,山中純子∥カバーイラスト原案,久保田学∥カバーデザイン,佐藤健児∥本文デザイン,サトウケンジ</li><li>シリーズ名：少年サンデーコミックス ; 0823</li><li>シリーズ名（読み）：ショウネン サンデー コミックス ; 000823</li></ul>]]></description>
      <author>青山/剛昌,須藤/昌朋,山中/純子,久保田/学,佐藤/健児,サトウ/ケンジ,青山剛昌∥原作,須藤昌朋∥カバーイラスト原案,山中純子∥カバーイラスト原案,久保田学∥カバーデザイン,佐藤健児∥本文デザイン,サトウケンジ</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000128-IB16465409</guid>
      <pubDate>Mon, 8 Apr 2024 08:00:00 +0900</pubDate>
      <dc:title>劇場版名探偵コナン全人物調書 : ALL COLOR EDITION Sunday Official Guide Book</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン メイタンテイ コナン ゼン ジンブツ チョウショ : ALL COLOR EDITION SUNDAY OFFCIAL GUIDE BOOK</dcndl:titleTranscription>
      <dc:creator>青山/剛昌</dc:creator>
      <dc:creator>須藤/昌朋</dc:creator>
      <dc:creator>山中/純子</dc:creator>
      <dc:creator>久保田/学</dc:creator>
      <dc:creator>佐藤/健児</dc:creator>
      <dc:creator>サトウ/ケンジ</dc:creator>
      <dcndl:creatorTranscription>アオヤマ ゴウショウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>スドウ マサトモ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>クボタ マナブ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>少年サンデーコミックス ; 0823</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス ; 000823</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JA</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2007</dc:date>
      <dcterms:issued>2007.4</dcterms:issued>
      <dcndl:price>619円</dcndl:price>
      <dc:extent>160p ; 18×12cm</dc:extent>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16465409"/>
      <dc:description> 2007</dc:description>
    </item>
    <item>
      <title>劇場版「名探偵コナン探偵たちの鎮魂歌」オリジナル・サウンドトラック</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I031499741</link>
      <description><![CDATA[<p>ユニバーサルミュージック,2021,<p><ul><li>タイトル：劇場版「名探偵コナン探偵たちの鎮魂歌」オリジナル・サウンドトラック</li><li>タイトル（読み）：ゲキジョウバン 「 メイタンテイ コナン タンテイ タチ ノ レクイエム 」 オリジナル ・ サウンドトラック</li><li>責任表示：大野克夫 音楽</li><li>シリーズ名：名探偵コナンオリジナル・サウンドトラック1997-2006 box</li></ul>]]></description>
      <author>大野克夫 音楽</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I031499741</guid>
      <pubDate>Wed, 30 Jun 2021 22:12:27 +0900</pubDate>
      <dc:title>劇場版「名探偵コナン探偵たちの鎮魂歌」オリジナル・サウンドトラック</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン 「 メイタンテイ コナン タンテイ タチ ノ レクイエム 」 オリジナル ・ サウンドトラック</dcndl:titleTranscription>
      <dcndl:seriesTitle>名探偵コナンオリジナル・サウンドトラック1997-2006 box</dcndl:seriesTitle>
      <dc:publisher>ユニバーサルミュージック</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2021</dc:date>
      <dcterms:issued>2021.5</dcterms:issued>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">UPCY-9946</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">031499741</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23547264</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>完全生産限定盤</dc:description>
      <dc:description>所要時間: 68分30秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I031499741"/>
      <dc:description> 2021</dc:description>
    </item>
    <item>
      <title>劇場版「名探偵コナン天国へのカウントダウン」オリジナル・サウンドトラック</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I031499704</link>
      <description><![CDATA[<p>ユニバーサルミュージック,2021,<p><ul><li>タイトル：劇場版「名探偵コナン天国へのカウントダウン」オリジナル・サウンドトラック</li><li>タイトル（読み）：ゲキジョウバン 「 メイタンテイ コナン テンゴク エ ノ カウントダウン 」 オリジナル ・ サウンドトラック</li><li>責任表示：大野克夫 音楽</li><li>シリーズ名：名探偵コナンオリジナル・サウンドトラック1997-2006 box</li></ul>]]></description>
      <author>大野克夫 音楽</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I031499704</guid>
      <pubDate>Wed, 30 Jun 2021 22:10:17 +0900</pubDate>
      <dc:title>劇場版「名探偵コナン天国へのカウントダウン」オリジナル・サウンドトラック</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン 「 メイタンテイ コナン テンゴク エ ノ カウントダウン 」 オリジナル ・ サウンドトラック</dcndl:titleTranscription>
      <dcndl:seriesTitle>名探偵コナンオリジナル・サウンドトラック1997-2006 box</dcndl:seriesTitle>
      <dc:publisher>ユニバーサルミュージック</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2021</dc:date>
      <dcterms:issued>2021.5</dcterms:issued>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">UPCY-9941</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">031499704</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23547252</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>完全生産限定盤</dc:description>
      <dc:description>所要時間: 62分12秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I031499704"/>
      <dc:description> 2021</dc:description>
    </item>
    <item>
      <title>劇場版「名探偵コナン時計じかけの摩天楼」オリジナル・サウンドトラック</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I031319960</link>
      <description><![CDATA[<p>ユニバーサルミュージック,2021,<p><ul><li>タイトル：劇場版「名探偵コナン時計じかけの摩天楼」オリジナル・サウンドトラック</li><li>タイトル（読み）：ゲキジョウバン 「 メイタンテイ コナン トケイジカケ ノ マテンロウ 」 オリジナル ・ サウンドトラック</li><li>責任表示：大野克夫 音楽</li><li>シリーズ名：名探偵コナンオリジナル・サウンドトラック1997-2006 box</li></ul>]]></description>
      <author>大野克夫 音楽</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I031319960</guid>
      <pubDate>Wed, 30 Jun 2021 22:08:08 +0900</pubDate>
      <dc:title>劇場版「名探偵コナン時計じかけの摩天楼」オリジナル・サウンドトラック</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン 「 メイタンテイ コナン トケイジカケ ノ マテンロウ 」 オリジナル ・ サウンドトラック</dcndl:titleTranscription>
      <dcndl:seriesTitle>名探偵コナンオリジナル・サウンドトラック1997-2006 box</dcndl:seriesTitle>
      <dc:publisher>ユニバーサルミュージック</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2021</dc:date>
      <dcterms:issued>2021.5</dcterms:issued>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">UPCY-9937</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">031319960</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23547242</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>完全生産限定盤</dc:description>
      <dc:description>所要時間: 50分30秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I031319960"/>
      <dc:description> 2021</dc:description>
    </item>
    <item>
      <title>劇場版 : 名探偵コナン : 時計じかけの摩天楼</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000136-I1130282271182850304</link>
      <description><![CDATA[<p>小学館 (発売),2011,<p><ul><li>タイトル：劇場版 : 名探偵コナン : 時計じかけの摩天楼</li><li>タイトル（読み）：ゲキジョウバン : メイタンテイ コナン : トケイ ジカケ ノ マテンロウ</li><li>責任表示：こだま兼嗣監督 ; 古内一成脚本</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author>こだま, 兼嗣,古内, 一成,青山, 剛昌,こだま兼嗣監督 ; 古内一成脚本</author>
      <category>映像資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000136-I1130282271182850304</guid>
      <pubDate>Sun, 22 Dec 2024 00:00:10 +0900</pubDate>
      <dc:title>劇場版 : 名探偵コナン : 時計じかけの摩天楼</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン : メイタンテイ コナン : トケイ ジカケ ノ マテンロウ</dcndl:titleTranscription>
      <dc:creator>こだま, 兼嗣</dc:creator>
      <dc:creator>古内, 一成</dc:creator>
      <dc:creator>青山, 剛昌</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ</dcndl:creatorTranscription>
      <dc:publisher>小学館 (発売)</dc:publisher>
      <dcndl:publicationPlace>ja</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2011</dc:date>
      <dcterms:issued>2011.2</dcterms:issued>
      <dc:identifier xsi:type="dcndl:NIIBibID">BB26436636</dc:identifier>
      <dc:subject>アニメーション</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <dc:description>1997年度作品</dc:description>
      <dc:description>原作: 青山剛昌</dc:description>
      <dc:description>キャスト: 高山みなみ(江戸川コナン), 神谷明(毛利小五郎)</dc:description>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BB26436636"/>
      <dc:description> 2011</dc:description>
    </item>
    <item>
      <title>劇場版「名探偵コナンハロウィンの花嫁」シール</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000128-IB14066865</link>
      <description><![CDATA[<p>小学館,2022,978-4-09-735595-3<p><ul><li>タイトル：劇場版「名探偵コナンハロウィンの花嫁」シール</li><li>タイトル（読み）：ゲキジョウバン メイタンテイ コナン ハロウィン ノ ハナヨメ シール</li><li>シリーズ名：まるごとシールブックDX</li><li>シリーズ名（読み）：マルゴト シール ブック デラックス</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author/>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000128-IB14066865</guid>
      <pubDate>Mon, 8 Apr 2024 08:00:00 +0900</pubDate>
      <dc:title>劇場版「名探偵コナンハロウィンの花嫁」シール</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン メイタンテイ コナン ハロウィン ノ ハナヨメ シール</dcndl:titleTranscription>
      <dcndl:seriesTitle>まるごとシールブックDX</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>マルゴト シール ブック デラックス</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JA</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2022</dc:date>
      <dcterms:issued>2022.4</dcterms:issued>
      <dcndl:price>¥650</dcndl:price>
      <dc:extent>16枚 ; 14cm</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-735595-3</dc:identifier>
      <dc:identifier xsi:type="dcndl:TRCMARCNO">22704690</dc:identifier>
      <dc:subject>アニメーション</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B14066865"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784097355953"/>
      <dc:description> 2022</dc:description>
    </item>
    <item>
      <title>劇場版 名探偵コナン ハロウィンの花嫁〔新装〕</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000137-I9784098540747</link>
      <description><![CDATA[<p>小学館,2025-04-18,9784098540747<p><ul><li>タイトル：劇場版 名探偵コナン ハロウィンの花嫁〔新装〕</li><li>タイトル（読み）：ゲキジョウバン メイタンテイコナン ハロウィンノハナヨメ シンソウ</li><li>責任表示：青山 剛昌 原著,大倉 崇裕 脚本,トムス・エンタテインメント 著・文・その他</li><li>シリーズ名：少年サンデーコミックス</li></ul>]]></description>
      <author>青山 剛昌,大倉 崇裕,トムス・エンタテインメント,青山 剛昌 原著,大倉 崇裕 脚本,トムス・エンタテインメント 著・文・その他</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000137-I9784098540747</guid>
      <pubDate>Wed, 9 Apr 2025 00:48:00 +0900</pubDate>
      <dc:title>劇場版 名探偵コナン ハロウィンの花嫁〔新装〕</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン メイタンテイコナン ハロウィンノハナヨメ シンソウ</dcndl:titleTranscription>
      <dc:creator>青山 剛昌</dc:creator>
      <dc:creator>大倉 崇裕</dc:creator>
      <dc:creator>トムス・エンタテインメント</dc:creator>
      <dcndl:creatorTranscription>アオヤマ ゴウショウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>オオクラ タカヒロ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>トムスエンタテインメント</dcndl:creatorTranscription>
      <dcndl:seriesTitle>少年サンデーコミックス</dcndl:seriesTitle>
      <dc:publisher>小学館</dc:publisher>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2025-04-18</dc:date>
      <dcndl:price>1300</dcndl:price>
      <dc:extent>416p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">9784098540747</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">9784098540747</dc:identifier>
      <dc:description>発売</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784098540747"/>
      <dc:description> 2025-04-18</dc:description>
    </item>
    <item>
      <title>劇場版名探偵コナン緋色の弾丸 : ぜんぶで100もん</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I031357345</link>
      <description><![CDATA[<p>小学館,2021,978-4-09-725099-9<p><ul><li>タイトル：劇場版名探偵コナン緋色の弾丸 : ぜんぶで100もん</li><li>タイトル（読み）：ゲキジョウバン メイタンテイ コナン ヒイロ ノ ダンガン : ゼンブ デ ヒャクモン</li><li>シリーズ名：知育ちがいさがしブック</li><li>シリーズ名（読み）：チイク チガイサガシ ブック</li><li>NDC(10)：798.3</li></ul>]]></description>
      <author/>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I031357345</guid>
      <pubDate>Mon, 21 Jun 2021 20:35:08 +0900</pubDate>
      <dc:title>劇場版名探偵コナン緋色の弾丸 : ぜんぶで100もん</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン メイタンテイ コナン ヒイロ ノ ダンガン : ゼンブ デ ヒャクモン</dcndl:titleTranscription>
      <dcndl:seriesTitle>知育ちがいさがしブック</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>チイク チガイサガシ ブック</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2021</dc:date>
      <dcterms:issued>2021.4</dcterms:issued>
      <dcndl:price>600円</dcndl:price>
      <dc:extent>1冊(ページ付なし)</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-725099-9</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">031357345</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23541859</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">34191652</dc:identifier>
      <dc:subject>パズル</dc:subject>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y12</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">798.3</dc:subject>
      <dc:description>出版</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.ishikawa.lg.jp/wo/opc_srh/srh_detail/1000001409846/"/>
      <rdfs:seeAlso rdf:resource="https://opac.library.kochi.jp/winj/opac/switch-detail-iccap.do?bibid=1120544512"/>
      <rdfs:seeAlso rdf:resource="https://opac.miraionlibrary.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000002936970"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I031357345"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B13922788"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784097250999"/>
      <dc:description> 2021</dc:description>
    </item>
    <item>
      <title>劇場版「名探偵コナン瞳の中の暗殺者」オリジナル・サウンドトラック</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I031499697</link>
      <description><![CDATA[<p>ユニバーサルミュージック,2021,<p><ul><li>タイトル：劇場版「名探偵コナン瞳の中の暗殺者」オリジナル・サウンドトラック</li><li>タイトル（読み）：ゲキジョウバン 「 メイタンテイ コナン ヒトミ ノ ナカ ノ アンサツシャ 」 オリジナル ・ サウンドトラック</li><li>責任表示：大野克夫 音楽</li><li>シリーズ名：名探偵コナンオリジナル・サウンドトラック1997-2006 box</li></ul>]]></description>
      <author>大野克夫 音楽</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I031499697</guid>
      <pubDate>Wed, 30 Jun 2021 22:09:51 +0900</pubDate>
      <dc:title>劇場版「名探偵コナン瞳の中の暗殺者」オリジナル・サウンドトラック</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン 「 メイタンテイ コナン ヒトミ ノ ナカ ノ アンサツシャ 」 オリジナル ・ サウンドトラック</dcndl:titleTranscription>
      <dcndl:seriesTitle>名探偵コナンオリジナル・サウンドトラック1997-2006 box</dcndl:seriesTitle>
      <dc:publisher>ユニバーサルミュージック</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2021</dc:date>
      <dcterms:issued>2021.5</dcterms:issued>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">UPCY-9940</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">031499697</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23547250</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>完全生産限定盤</dc:description>
      <dc:description>所要時間: 72分59秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I031499697"/>
      <dc:description> 2021</dc:description>
    </item>
    <item>
      <title>劇場版「名探偵コナン100万ドルの五稜星」シール</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000128-IB16980704</link>
      <description><![CDATA[<p>小学館,2024,978-4-09-735607-3<p><ul><li>タイトル：劇場版「名探偵コナン100万ドルの五稜星」シール</li><li>タイトル（読み）：ゲキジョウバン メイタンテイ コナン ヒャクマンドル ノ ミチシルベ シール</li><li>シリーズ名：まるごとシールブックDX</li><li>シリーズ名（読み）：マルゴト シール ブック デラックス</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author/>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000128-IB16980704</guid>
      <pubDate>Mon, 8 Apr 2024 08:00:00 +0900</pubDate>
      <dc:title>劇場版「名探偵コナン100万ドルの五稜星」シール</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン メイタンテイ コナン ヒャクマンドル ノ ミチシルベ シール</dcndl:titleTranscription>
      <dcndl:seriesTitle>まるごとシールブックDX</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>マルゴト シール ブック デラックス</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JA</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2024</dc:date>
      <dcterms:issued>2024.4</dcterms:issued>
      <dcndl:price>¥650</dcndl:price>
      <dc:extent>16枚 ; 14cm</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-735607-3</dc:identifier>
      <dc:identifier xsi:type="dcndl:TRCMARCNO">24704668</dc:identifier>
      <dc:subject>アニメーション</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16980704"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784097356073"/>
      <dc:description> 2024</dc:description>
    </item>
    <item>
      <title>劇場版「名探偵コナンベイカー街の亡霊」オリジナル・サウンドトラック</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I031499714</link>
      <description><![CDATA[<p>ユニバーサルミュージック,2021,<p><ul><li>タイトル：劇場版「名探偵コナンベイカー街の亡霊」オリジナル・サウンドトラック</li><li>タイトル（読み）：ゲキジョウバン 「 メイタンテイ コナン ベイカーストリート ノ ボウレイ 」 オリジナル ・ サウンドトラック</li><li>責任表示：大野克夫 音楽</li><li>シリーズ名：名探偵コナンオリジナル・サウンドトラック1997-2006 box</li></ul>]]></description>
      <author>大野克夫 音楽</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I031499714</guid>
      <pubDate>Wed, 30 Jun 2021 22:10:39 +0900</pubDate>
      <dc:title>劇場版「名探偵コナンベイカー街の亡霊」オリジナル・サウンドトラック</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン 「 メイタンテイ コナン ベイカーストリート ノ ボウレイ 」 オリジナル ・ サウンドトラック</dcndl:titleTranscription>
      <dcndl:seriesTitle>名探偵コナンオリジナル・サウンドトラック1997-2006 box</dcndl:seriesTitle>
      <dc:publisher>ユニバーサルミュージック</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2021</dc:date>
      <dcterms:issued>2021.5</dcterms:issued>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">UPCY-9942</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">031499714</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23547254</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>完全生産限定盤</dc:description>
      <dc:description>所要時間: 77分20秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I031499714"/>
      <dc:description> 2021</dc:description>
    </item>
    <item>
      <title>劇場版「名探偵コナン迷宮の十字路」オリジナル・サウンドトラック</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I031499723</link>
      <description><![CDATA[<p>ユニバーサルミュージック,2021,<p><ul><li>タイトル：劇場版「名探偵コナン迷宮の十字路」オリジナル・サウンドトラック</li><li>タイトル（読み）：ゲキジョウバン 「 メイタンテイ コナン メイキュウ ノ クロスロード 」 オリジナル ・ サウンドトラック</li><li>責任表示：大野克夫 音楽</li><li>シリーズ名：名探偵コナンオリジナル・サウンドトラック1997-2006 box</li></ul>]]></description>
      <author>大野克夫 音楽</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I031499723</guid>
      <pubDate>Wed, 30 Jun 2021 22:11:09 +0900</pubDate>
      <dc:title>劇場版「名探偵コナン迷宮の十字路」オリジナル・サウンドトラック</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン 「 メイタンテイ コナン メイキュウ ノ クロスロード 」 オリジナル ・ サウンドトラック</dcndl:titleTranscription>
      <dcndl:seriesTitle>名探偵コナンオリジナル・サウンドトラック1997-2006 box</dcndl:seriesTitle>
      <dc:publisher>ユニバーサルミュージック</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2021</dc:date>
      <dcterms:issued>2021.5</dcterms:issued>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">UPCY-9943</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">031499723</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23547256</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>完全生産限定盤</dc:description>
      <dc:description>所要時間: 55分3秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I031499723"/>
      <dc:description> 2021</dc:description>
    </item>
    <item>
      <title>劇場版「名探偵コナン14番目の標的」オリジナル・サウンドトラック</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I031499661</link>
      <description><![CDATA[<p>ユニバーサルミュージック,2021,<p><ul><li>タイトル：劇場版「名探偵コナン14番目の標的」オリジナル・サウンドトラック</li><li>タイトル（読み）：ゲキジョウバン 「 メイタンテイ コナン 14バンメ ノ ターゲット 」 オリジナル ・ サウンドトラック</li><li>責任表示：大野克夫 音楽</li><li>シリーズ名：名探偵コナンオリジナル・サウンドトラック1997-2006 box</li></ul>]]></description>
      <author>大野克夫 音楽</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I031499661</guid>
      <pubDate>Wed, 30 Jun 2021 22:09:04 +0900</pubDate>
      <dc:title>劇場版「名探偵コナン14番目の標的」オリジナル・サウンドトラック</dc:title>
      <dcndl:titleTranscription>ゲキジョウバン 「 メイタンテイ コナン 14バンメ ノ ターゲット 」 オリジナル ・ サウンドトラック</dcndl:titleTranscription>
      <dcndl:seriesTitle>名探偵コナンオリジナル・サウンドトラック1997-2006 box</dcndl:seriesTitle>
      <dc:publisher>ユニバーサルミュージック</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2021</dc:date>
      <dcterms:issued>2021.5</dcterms:issued>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">UPCY-9938</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">031499661</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23547246</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>完全生産限定盤</dc:description>
      <dc:description>所要時間: 57分46秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I031499661"/>
      <dc:description> 2021</dc:description>
    </item>
    <item>
      <title>月刊コミック小学四年生 : 名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000128-IB16502844</link>
      <description><![CDATA[<p>小学館,2010,<p><ul><li>タイトル：月刊コミック小学四年生 : 名探偵コナン</li><li>タイトル（読み）：ゲッカン コミック ショウガク ヨネンセイ : メイタンテイ コナン</li></ul>]]></description>
      <author/>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000128-IB16502844</guid>
      <pubDate>Mon, 8 Apr 2024 08:00:00 +0900</pubDate>
      <dc:title>月刊コミック小学四年生 : 名探偵コナン</dc:title>
      <dcndl:titleTranscription>ゲッカン コミック ショウガク ヨネンセイ : メイタンテイ コナン</dcndl:titleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JA</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2010</dc:date>
      <dcterms:issued>2010.4</dcterms:issued>
      <dcndl:price>[記載なし]</dcndl:price>
      <dc:extent>[1冊] ; 19×13cm</dc:extent>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16502844"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16506082"/>
      <dc:description> 2010</dc:description>
    </item>
    <item>
      <title>恋に恋して ; Special morning day to you</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I023793046</link>
      <description><![CDATA[<p>[Being],2012,<p><ul><li>タイトル：恋に恋して ; Special morning day to you</li><li>タイトル（読み）：コイ ニ コイシテ ; Special morning day to you</li><li>責任表示：倉木麻衣</li></ul>]]></description>
      <author>倉木麻衣</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I023793046</guid>
      <pubDate>Fri, 5 Aug 2022 01:52:34 +0900</pubDate>
      <dc:title>恋に恋して ; Special morning day to you</dc:title>
      <dcndl:titleTranscription>コイ ニ コイシテ ; Special morning day to you</dcndl:titleTranscription>
      <dc:publisher>[Being]</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2012</dc:date>
      <dcterms:issued>2012.8</dcterms:issued>
      <dcndl:price>1300円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">VNCM-6027</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">023793046</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23712399</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>初回限定盤</dc:description>
      <dc:description>所要時間: 17分41秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I023793046"/>
      <dc:description> 2012</dc:description>
    </item>
    <item>
      <title>国民的アニメメドレー : ドラえもんのうた-葛飾ラプソディー-サザエさん一家-ゲゲゲの鬼太郎-おどるポンポコリン-オラはにんきもの-「名探偵コナン」メイン・テーマ-ようかい体操第一 : 吹奏楽</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I033043622</link>
      <description><![CDATA[<p>Akiba Winds Music Publishing,2018,978-4-9110-6552-5<p><ul><li>タイトル：国民的アニメメドレー : ドラえもんのうた-葛飾ラプソディー-サザエさん一家-ゲゲゲの鬼太郎-おどるポンポコリン-オラはにんきもの-「名探偵コナン」メイン・テーマ-ようかい体操第一 : 吹奏楽</li><li>タイトル（読み）：コクミンテキ アニメ メドレー : ドラエモン ノ ウタ - カツシカ ラプソディー - サザエサン イッカ - ゲゲゲ ノ キタロウ - オドル ポンポコリン - オラ ワ ニンキモノ - 「 メイタンテイ コナン 」 メイン ・ テーマ - ヨウカイ タイソウ ダイイチ : スイソウガク</li><li>責任表示：今村愛紀 編曲</li><li>NDC(10)：764</li></ul>]]></description>
      <author>今村愛紀 編曲</author>
      <category>楽譜</category>
      <category>文書・図像類</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I033043622</guid>
      <pubDate>Fri, 1 Mar 2024 19:39:17 +0900</pubDate>
      <dc:title>国民的アニメメドレー : ドラえもんのうた-葛飾ラプソディー-サザエさん一家-ゲゲゲの鬼太郎-おどるポンポコリン-オラはにんきもの-「名探偵コナン」メイン・テーマ-ようかい体操第一 : 吹奏楽</dc:title>
      <dcndl:titleTranscription>コクミンテキ アニメ メドレー : ドラエモン ノ ウタ - カツシカ ラプソディー - サザエサン イッカ - ゲゲゲ ノ キタロウ - オドル ポンポコリン - オラ ワ ニンキモノ - 「 メイタンテイ コナン 」 メイン ・ テーマ - ヨウカイ タイソウ ダイイチ : スイソウガク</dcndl:titleTranscription>
      <dc:publisher>Akiba Winds Music Publishing</dc:publisher>
      <dc:publisher>東京音楽制作</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2018</dc:date>
      <dcterms:issued>2018.9</dcterms:issued>
      <dcndl:price>16000円</dcndl:price>
      <dc:extent>スコア 19 p, パート譜 37枚</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-9110-6552-5</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">033043622</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23948003</dc:identifier>
      <dcndl:genre>楽譜</dcndl:genre>
      <dcndl:genreTranscription>ガクフ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">YM11</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">764</dc:subject>
      <dc:description>出版</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I033043622"/>
      <dc:description> 2018</dc:description>
    </item>
    <item>
      <title>心が強くなる : ONE PIECE/はじめの一歩/名探偵コナン/アゲイン!!/SLAM DUNK/ブラック・ジャックなど</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000136-I1130282273324164864</link>
      <description><![CDATA[<p>学研教育出版,2014,9784055010535<p><ul><li>タイトル：心が強くなる : ONE PIECE/はじめの一歩/名探偵コナン/アゲイン!!/SLAM DUNK/ブラック・ジャックなど</li><li>NDC(9)：726.101</li></ul>]]></description>
      <author/>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000136-I1130282273324164864</guid>
      <pubDate>Sun, 22 Dec 2024 00:00:10 +0900</pubDate>
      <dc:title>心が強くなる : ONE PIECE/はじめの一歩/名探偵コナン/アゲイン!!/SLAM DUNK/ブラック・ジャックなど</dc:title>
      <dc:publisher>学研教育出版</dc:publisher>
      <dc:publisher>学研マーケティング (発売)</dc:publisher>
      <dcndl:publicationPlace>ja</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2014</dc:date>
      <dcterms:issued>2014.2</dcterms:issued>
      <dc:identifier xsi:type="dcndl:ISBN">9784055010535</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">9784055010535</dc:identifier>
      <dc:identifier xsi:type="dcndl:NIIBibID">BB15891492</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">Y6</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">726.101</dc:subject>
      <dc:description>索引あり</dc:description>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BB15891492"/>
      <dc:description> 2014</dc:description>
    </item>
    <item>
      <title>心にひびくマンガの名言 : 人生の大切なことはマンガがすべて教えてくれる</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I025167943</link>
      <description><![CDATA[<p>1,学研教育出版,2014,978-4-05-501053-5<p><ul><li>タイトル：心にひびくマンガの名言 : 人生の大切なことはマンガがすべて教えてくれる</li><li>タイトル（読み）：ココロ ニ ヒビク マンガ ノ メイゲン : ジンセイ ノ タイセツ ナ コト ワ マンガ ガ スベテ オシエテ クレル</li><li>NDC(9)：726.101</li></ul>]]></description>
      <author/>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I025167943</guid>
      <pubDate>Mon, 13 Jun 2022 18:14:51 +0900</pubDate>
      <dc:title>心にひびくマンガの名言 : 人生の大切なことはマンガがすべて教えてくれる</dc:title>
      <dcndl:titleTranscription>ココロ ニ ヒビク マンガ ノ メイゲン : ジンセイ ノ タイセツ ナ コト ワ マンガ ガ スベテ オシエテ クレル</dcndl:titleTranscription>
      <dcndl:volume>1</dcndl:volume>
      <dc:publisher>学研教育出版</dc:publisher>
      <dc:publisher>学研マーケティング (発売)</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2014</dc:date>
      <dcterms:issued>2014.2</dcterms:issued>
      <dcndl:price>2800円</dcndl:price>
      <dc:extent>45p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-05-501053-5</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">025167943</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22361433</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">33046425</dc:identifier>
      <dc:subject>漫画</dc:subject>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y6</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">726.101</dc:subject>
      <dc:description>索引あり</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.apl.pref.akita.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009920158027"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.ibaraki.jp/licsxp-kopac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001002247923"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.saitama.jp//winj/opac/switch-detail-iccap.do?bibid=1101493632"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.city.saitama.jp/bookdetail?num=411041&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://catalog.library.metro.tokyo.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1152402653"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=2493215&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.yamanashi.jp/licsxp-opac/WOpacMnuTopInitAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www.tosyokan.pref.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1002000406915"/>
      <rdfs:seeAlso rdf:resource="http://opac1.library.pref.mie.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1110339160"/>
      <rdfs:seeAlso rdf:resource="http://www.lib.wakayama-c.ed.jp/winj/opac/switch-detail-iccap.do?bibid=1102632753"/>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.tottori.jp/winj/opac/switch-detail-iccap.do?bibid=1101995618"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009811760552"/>
      <rdfs:seeAlso rdf:resource="https://library.pref.yamaguchi.lg.jp//wo/opc_srh/srh_detail/1001158372/"/>
      <rdfs:seeAlso rdf:resource="https://alislibopac.bunmori.tokushima.jp/winj/opac/switch-detail-iccap.do?bibid=1103652100"/>
      <rdfs:seeAlso rdf:resource="https://www.ehimetosyokan.jp/winj/opac/switch-detail-iccap.do?bibid=1101109648"/>
      <rdfs:seeAlso rdf:resource="https://www2.tosyo-saga.jp/kentosyo2/opac/switch-detail-iccap.do?bibid=1101711993"/>
      <rdfs:seeAlso rdf:resource="https://opac.miraionlibrary.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000002234113"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.miyazaki.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1101887722"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I025167943"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B12996372"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784055010535"/>
      <dc:description> 2014</dc:description>
    </item>
    <item>
      <title>心にひびくマンガの名言 : 人生の大切なことはマンガがすべて教えてくれる</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I025167946</link>
      <description><![CDATA[<p>4,学研教育出版,2014,978-4-05-501056-6<p><ul><li>タイトル：心にひびくマンガの名言 : 人生の大切なことはマンガがすべて教えてくれる</li><li>タイトル（読み）：ココロ ニ ヒビク マンガ ノ メイゲン : ジンセイ ノ タイセツ ナ コト ワ マンガ ガ スベテ オシエテ クレル</li><li>NDC(9)：726.101</li></ul>]]></description>
      <author/>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I025167946</guid>
      <pubDate>Mon, 13 Jun 2022 20:01:58 +0900</pubDate>
      <dc:title>心にひびくマンガの名言 : 人生の大切なことはマンガがすべて教えてくれる</dc:title>
      <dcndl:titleTranscription>ココロ ニ ヒビク マンガ ノ メイゲン : ジンセイ ノ タイセツ ナ コト ワ マンガ ガ スベテ オシエテ クレル</dcndl:titleTranscription>
      <dcndl:volume>4</dcndl:volume>
      <dc:publisher>学研教育出版</dc:publisher>
      <dc:publisher>学研マーケティング (発売)</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2014</dc:date>
      <dcterms:issued>2014.2</dcterms:issued>
      <dcndl:price>2800円</dcndl:price>
      <dc:extent>45p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-05-501056-6</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">025167946</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22361439</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">33046428</dc:identifier>
      <dc:subject>漫画</dc:subject>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y6</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">726.101</dc:subject>
      <dc:description>索引あり</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.apl.pref.akita.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009920158030"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.ibaraki.jp/licsxp-kopac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001002247926"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.saitama.jp//winj/opac/switch-detail-iccap.do?bibid=1101493635"/>
      <rdfs:seeAlso rdf:resource="https://catalog.library.metro.tokyo.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1152402659"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=2493218&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.yamanashi.jp/licsxp-opac/WOpacMnuTopInitAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www.tosyokan.pref.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1002000406918"/>
      <rdfs:seeAlso rdf:resource="http://www.lib.wakayama-c.ed.jp/winj/opac/switch-detail-iccap.do?bibid=1102632756"/>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.tottori.jp/winj/opac/switch-detail-iccap.do?bibid=1101995621"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009811760555"/>
      <rdfs:seeAlso rdf:resource="https://library.pref.yamaguchi.lg.jp//wo/opc_srh/srh_detail/1001158375/"/>
      <rdfs:seeAlso rdf:resource="https://alislibopac.bunmori.tokushima.jp/winj/opac/switch-detail-iccap.do?bibid=1103652103"/>
      <rdfs:seeAlso rdf:resource="https://www.ehimetosyokan.jp/winj/opac/switch-detail-iccap.do?bibid=1101109651"/>
      <rdfs:seeAlso rdf:resource="https://www2.tosyo-saga.jp/kentosyo2/opac/switch-detail-iccap.do?bibid=1101711996"/>
      <rdfs:seeAlso rdf:resource="https://opac.miraionlibrary.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000002234116"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.miyazaki.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1101887726"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I025167946"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B12996375"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784055010566"/>
      <dc:description> 2014</dc:description>
    </item>
    <item>
      <title>心にひびくマンガの名言 : 人生の大切なことはマンガがすべて教えてくれる</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I025167947</link>
      <description><![CDATA[<p>5,学研教育出版,2014,978-4-05-501057-3<p><ul><li>タイトル：心にひびくマンガの名言 : 人生の大切なことはマンガがすべて教えてくれる</li><li>タイトル（読み）：ココロ ニ ヒビク マンガ ノ メイゲン : ジンセイ ノ タイセツ ナ コト ワ マンガ ガ スベテ オシエテ クレル</li><li>NDC(9)：726.101</li></ul>]]></description>
      <author/>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I025167947</guid>
      <pubDate>Mon, 13 Jun 2022 19:36:21 +0900</pubDate>
      <dc:title>心にひびくマンガの名言 : 人生の大切なことはマンガがすべて教えてくれる</dc:title>
      <dcndl:titleTranscription>ココロ ニ ヒビク マンガ ノ メイゲン : ジンセイ ノ タイセツ ナ コト ワ マンガ ガ スベテ オシエテ クレル</dcndl:titleTranscription>
      <dcndl:volume>5</dcndl:volume>
      <dc:publisher>学研教育出版</dc:publisher>
      <dc:publisher>学研マーケティング (発売)</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2014</dc:date>
      <dcterms:issued>2014.2</dcterms:issued>
      <dcndl:price>2800円</dcndl:price>
      <dc:extent>45p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-05-501057-3</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">025167947</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22361440</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">33046430</dc:identifier>
      <dc:subject>漫画</dc:subject>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y6</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">726.101</dc:subject>
      <dc:description>索引あり</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.apl.pref.akita.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009920158031"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.ibaraki.jp/licsxp-kopac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001002247927"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.saitama.jp//winj/opac/switch-detail-iccap.do?bibid=1101493636"/>
      <rdfs:seeAlso rdf:resource="https://catalog.library.metro.tokyo.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1152402661"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=2493219&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.yamanashi.jp/licsxp-opac/WOpacMnuTopInitAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www.tosyokan.pref.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1002000406919"/>
      <rdfs:seeAlso rdf:resource="http://www.lib.wakayama-c.ed.jp/winj/opac/switch-detail-iccap.do?bibid=1102632757"/>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.tottori.jp/winj/opac/switch-detail-iccap.do?bibid=1101995622"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009811760556"/>
      <rdfs:seeAlso rdf:resource="https://library.pref.yamaguchi.lg.jp//wo/opc_srh/srh_detail/1001158376/"/>
      <rdfs:seeAlso rdf:resource="https://alislibopac.bunmori.tokushima.jp/winj/opac/switch-detail-iccap.do?bibid=1103652104"/>
      <rdfs:seeAlso rdf:resource="https://www.ehimetosyokan.jp/winj/opac/switch-detail-iccap.do?bibid=1101109652"/>
      <rdfs:seeAlso rdf:resource="https://www2.tosyo-saga.jp/kentosyo2/opac/switch-detail-iccap.do?bibid=1101711997"/>
      <rdfs:seeAlso rdf:resource="https://opac.miraionlibrary.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000002234117"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.miyazaki.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1101887697"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I025167947"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B12996376"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784055010573"/>
      <dc:description> 2014</dc:description>
    </item>
    <item>
      <title>こどもへの阿久悠 かつてこどもだったあなたへ、そしてそのこどもたちへ</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I024927464</link>
      <description><![CDATA[<p>日本コロムビア,2013,<p><ul><li>タイトル：こどもへの阿久悠 かつてこどもだったあなたへ、そしてそのこどもたちへ</li><li>タイトル（読み）：コドモ エノ アク ユウ</li><li>責任表示：阿久悠 [作詞]</li></ul>]]></description>
      <author>阿久悠 [作詞]</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I024927464</guid>
      <pubDate>Fri, 18 Apr 2014 19:44:22 +0900</pubDate>
      <dc:title>こどもへの阿久悠 かつてこどもだったあなたへ、そしてそのこどもたちへ</dc:title>
      <dcndl:titleTranscription>コドモ エノ アク ユウ</dcndl:titleTranscription>
      <dc:publisher>日本コロムビア</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2013</dc:date>
      <dcterms:issued>2013.12</dcterms:issued>
      <dcndl:price>2940円 (税込)</dcndl:price>
      <dc:extent>録音ディスク 2枚 (132分)</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">COCP-38373</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">024927464</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22386260</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=3001303001127"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I024927464"/>
      <dc:description> 2013</dc:description>
    </item>
    <item>
      <title>こどものうた</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000009009784</link>
      <description><![CDATA[<p>コロムビアミュージックエンタテインメント,1998,<p><ul><li>タイトル：こどものうた</li><li>タイトル（読み）：コドモノ ウタ</li></ul>]]></description>
      <author/>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000009009784</guid>
      <pubDate>Sat, 25 Aug 2007 08:59:59 +0900</pubDate>
      <dc:title>こどものうた</dc:title>
      <dcndl:titleTranscription>コドモノ ウタ</dcndl:titleTranscription>
      <dc:publisher>コロムビアミュージックエンタテインメント</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">1998</dc:date>
      <dcterms:issued>1998.5</dcterms:issued>
      <dc:extent>録音ディスク 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">COCC-15094</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000009009784</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>収録時間: 75分05秒</dc:description>
      <dc:description>ジャンル: 児童向け (童謡) , 学芸等</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000009009784"/>
      <dc:description> 1998</dc:description>
    </item>
    <item>
      <title>コナンからの挑戦状!! : 名探偵コナン特別編集コミックス</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000003670559</link>
      <description><![CDATA[<p>小学館,2002,4-09-124715-6<p><ul><li>タイトル：コナンからの挑戦状!! : 名探偵コナン特別編集コミックス</li><li>タイトル（読み）：コナン カラノ チョウセンジョウ</li><li>責任表示：青山剛昌 著</li><li>シリーズ名：少年サンデーコミックススペシャル</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル</li><li>NDC(9)：726.1</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,青山剛昌 著</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000003670559</guid>
      <pubDate>Mon, 21 Feb 2022 18:04:57 +0900</pubDate>
      <dc:title>コナンからの挑戦状!! : 名探偵コナン特別編集コミックス</dc:title>
      <dcndl:titleTranscription>コナン カラノ チョウセンジョウ</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2002</dc:date>
      <dcterms:issued>2002.9</dcterms:issued>
      <dcndl:price>571円</dcndl:price>
      <dc:extent>2冊</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">4-09-124715-6</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">4-09-124715-6</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000003670559</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">20304262</dc:identifier>
      <dcndl:genre>漫画</dcndl:genre>
      <dcndl:genreTranscription>マンガ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDC9">726.1</dc:subject>
      <dc:description>「事件編」「解決編」に分冊刊行</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1008001468521"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000003670559"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16214868"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16214869"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784091247155"/>
      <dc:description> 2002</dc:description>
    </item>
    <item>
      <title>コナンからの挑戦状!! : 名探偵コナン特別編集コミックス</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000004230856</link>
      <description><![CDATA[<p>2,小学館,2003,<p><ul><li>タイトル：コナンからの挑戦状!! : 名探偵コナン特別編集コミックス</li><li>タイトル（読み）：コナン カラノ チョウセンジョウ</li><li>責任表示：青山剛昌 著</li><li>シリーズ名：少年サンデーコミックススペシャル</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル</li><li>NDC(9)：726.1</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,青山剛昌 著</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000004230856</guid>
      <pubDate>Tue, 5 Oct 2021 19:14:48 +0900</pubDate>
      <dc:title>コナンからの挑戦状!! : 名探偵コナン特別編集コミックス</dc:title>
      <dcndl:titleTranscription>コナン カラノ チョウセンジョウ</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:volume>2</dcndl:volume>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2003</dc:date>
      <dcterms:issued>2003.9</dcterms:issued>
      <dcndl:price>全571円</dcndl:price>
      <dc:extent>2冊 (別冊付録とも)</dc:extent>
      <dc:identifier xsi:type="dcndl:NDLBibID">000004230856</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">20474612</dc:identifier>
      <dcndl:genre>漫画</dcndl:genre>
      <dcndl:genreTranscription>マンガ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y84</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">726.1</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000004230856"/>
      <dc:description> 2003</dc:description>
    </item>
    <item>
      <title>コナンからの挑戦状!! : 名探偵コナン特別編集コミックス</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000009994596</link>
      <description><![CDATA[<p>3 解決編,小学館,2009,<p><ul><li>タイトル：コナンからの挑戦状!! : 名探偵コナン特別編集コミックス</li><li>タイトル（読み）：コナン カラノ チョウセンジョウ</li><li>責任表示：青山剛昌 著</li><li>シリーズ名：少年サンデーコミックススペシャル</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル</li><li>NDC(9)：726.1</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,青山剛昌 著</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000009994596</guid>
      <pubDate>Mon, 1 Nov 2021 18:34:25 +0900</pubDate>
      <dc:title>コナンからの挑戦状!! : 名探偵コナン特別編集コミックス</dc:title>
      <dcndl:titleTranscription>コナン カラノ チョウセンジョウ</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:volume>3 解決編</dcndl:volume>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2009</dc:date>
      <dcterms:issued>c2009</dcterms:issued>
      <dc:extent>168p</dc:extent>
      <dc:identifier xsi:type="dcndl:NDLBibID">000009994596</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">21540585</dc:identifier>
      <dcndl:genre>漫画</dcndl:genre>
      <dcndl:genreTranscription>マンガ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y84</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">726.1</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000009994596"/>
      <dc:description> 2009</dc:description>
    </item>
    <item>
      <title>コナンからの挑戦状!! : 名探偵コナン特別編集コミックス</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000009994591</link>
      <description><![CDATA[<p>3 事件編,小学館,2009,<p><ul><li>タイトル：コナンからの挑戦状!! : 名探偵コナン特別編集コミックス</li><li>タイトル（読み）：コナン カラノ チョウセンジョウ</li><li>責任表示：青山剛昌 著</li><li>シリーズ名：少年サンデーコミックススペシャル</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル</li><li>NDC(9)：726.1</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,青山剛昌 著</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000009994591</guid>
      <pubDate>Mon, 1 Nov 2021 19:58:34 +0900</pubDate>
      <dc:title>コナンからの挑戦状!! : 名探偵コナン特別編集コミックス</dc:title>
      <dcndl:titleTranscription>コナン カラノ チョウセンジョウ</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:volume>3 事件編</dcndl:volume>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2009</dc:date>
      <dcterms:issued>2009.1</dcterms:issued>
      <dc:extent>264p</dc:extent>
      <dc:identifier xsi:type="dcndl:NDLBibID">000009994591</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">21540588</dc:identifier>
      <dcndl:genre>漫画</dcndl:genre>
      <dcndl:genreTranscription>マンガ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y84</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">726.1</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000009994591"/>
      <dc:description> 2009</dc:description>
    </item>
    <item>
      <title>コナンの通信簿 : 「名探偵コナン」研究読本</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000004302839</link>
      <description><![CDATA[<p>21世紀BOX,2003,4-88469-310-8<p><ul><li>タイトル：コナンの通信簿 : 「名探偵コナン」研究読本</li><li>タイトル（読み）：コナン ノ ツウシンボ</li><li>責任表示：羽馬光家, 名探偵研究倶楽部 編</li><li>NDC(9)：726.101</li></ul>]]></description>
      <author>羽馬, 光家,羽馬光家, 名探偵研究倶楽部 編</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000004302839</guid>
      <pubDate>Wed, 21 Jan 2004 22:56:52 +0900</pubDate>
      <dc:title>コナンの通信簿 : 「名探偵コナン」研究読本</dc:title>
      <dcndl:titleTranscription>コナン ノ ツウシンボ</dcndl:titleTranscription>
      <dc:creator>羽馬, 光家</dc:creator>
      <dcndl:creatorTranscription>ハマ, ミツイエ</dcndl:creatorTranscription>
      <dc:publisher>21世紀BOX</dc:publisher>
      <dc:publisher>太陽出版 (発売)</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2003</dc:date>
      <dcterms:issued>2003.3</dcterms:issued>
      <dcndl:price>1500円</dcndl:price>
      <dc:extent>214p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">4-88469-310-8</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">4-88469-310-8</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000004302839</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">20527748</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">Y88</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">726.101</dc:subject>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0010483566"/>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.tottori.jp/winj/opac/switch-detail-iccap.do?bibid=1101067301"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1100840139"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000004302839"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16219449"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784884693107"/>
      <dc:description> 2003</dc:description>
    </item>
    <item>
      <title>このアレンジがすごい!魅せる!聴かせる♪究極のアニメソング</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I024642696</link>
      <description><![CDATA[<p>ヤマハミュージックメディア (発売),2013,978-4-636-89783-8<p><ul><li>タイトル：このアレンジがすごい!魅せる!聴かせる♪究極のアニメソング</li><li>タイトル（読み）：コノ アレンジ ガ スゴイ ミセル キカセル キュウキョク ノ アニメ ソング</li><li>責任表示：石川芳, 内田美雪, 大宝博, 金益研二, 春畑セロリ, ピアニスターHIROSHI ピアノ編曲</li><li>シリーズ名：ピアノソロ中上級</li><li>シリーズ名（読み）：ピアノ ソロ チュウジョウキュウ</li><li>NDC(9)：763.2</li></ul>]]></description>
      <author>石川, 芳, 1957-,石川芳, 内田美雪, 大宝博, 金益研二, 春畑セロリ, ピアニスターHIROSHI ピアノ編曲</author>
      <category>図書</category>
      <category>楽譜</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I024642696</guid>
      <pubDate>Mon, 1 May 2023 21:49:16 +0900</pubDate>
      <dc:title>このアレンジがすごい!魅せる!聴かせる♪究極のアニメソング</dc:title>
      <dcndl:titleTranscription>コノ アレンジ ガ スゴイ ミセル キカセル キュウキョク ノ アニメ ソング</dcndl:titleTranscription>
      <dc:creator>石川, 芳, 1957-</dc:creator>
      <dcndl:creatorTranscription>イシカワ, カオル, 1957-</dcndl:creatorTranscription>
      <dcndl:seriesTitle>ピアノソロ中上級</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ピアノ ソロ チュウジョウキュウ</dcndl:seriesTitleTranscription>
      <dc:publisher>ヤマハミュージックメディア (発売)</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2013</dc:date>
      <dcterms:issued>2013.7</dcterms:issued>
      <dcndl:price>1800円</dcndl:price>
      <dc:extent>87p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-636-89783-8</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">024642696</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22393148</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">32941715</dc:identifier>
      <dcndl:genre>楽譜</dcndl:genre>
      <dcndl:genreTranscription>ガクフ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">YM11</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">763.2</dc:subject>
      <rdfs:seeAlso rdf:resource="https://alislibopac.bunmori.tokushima.jp/winj/opac/switch-detail-iccap.do?bibid=1103690224"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I024642696"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784636897838"/>
      <dc:description> 2013</dc:description>
    </item>
    <item>
      <title>これだけでOK!名探偵コナンドリル*算数 : 小学3年生～</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I024945316</link>
      <description><![CDATA[<p>計算編,小学館,2013,978-4-09-227006-0<p><ul><li>タイトル：これだけでOK!名探偵コナンドリル*算数 : 小学3年生～</li><li>タイトル（読み）：コレダケ デ オーケー メイタンテイ コナン ドリル サンスウ : ショウガク サンネンセイ</li><li>責任表示：四谷大塚 出題・監修</li></ul>]]></description>
      <author>四谷大塚 出題・監修</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I024945316</guid>
      <pubDate>Tue, 12 Nov 2013 20:36:18 +0900</pubDate>
      <dc:title>これだけでOK!名探偵コナンドリル*算数 : 小学3年生～</dc:title>
      <dcndl:titleTranscription>コレダケ デ オーケー メイタンテイ コナン ドリル サンスウ : ショウガク サンネンセイ</dcndl:titleTranscription>
      <dcndl:volume>計算編</dcndl:volume>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2013</dc:date>
      <dcterms:issued>2013.11</dcterms:issued>
      <dcndl:price>1000円</dcndl:price>
      <dc:extent>111p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-227006-0</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">024945316</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22319682</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">33004315</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">Y32</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I024945316"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B12967224"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784092270060"/>
      <dc:description> 2013</dc:description>
    </item>
    <item>
      <title>これだけでOK!名探偵コナンドリル*算数 : 小学3年生～</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I025529709</link>
      <description><![CDATA[<p>図形編,小学館,2014,978-4-09-227007-7<p><ul><li>タイトル：これだけでOK!名探偵コナンドリル*算数 : 小学3年生～</li><li>タイトル（読み）：コレダケ デ オーケー メイタンテイ コナン ドリル サンスウ : ショウガク サンネンセイ</li><li>責任表示：四谷大塚 出題・監修</li></ul>]]></description>
      <author>四谷大塚 出題・監修</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I025529709</guid>
      <pubDate>Thu, 10 Jul 2014 19:23:21 +0900</pubDate>
      <dc:title>これだけでOK!名探偵コナンドリル*算数 : 小学3年生～</dc:title>
      <dcndl:titleTranscription>コレダケ デ オーケー メイタンテイ コナン ドリル サンスウ : ショウガク サンネンセイ</dcndl:titleTranscription>
      <dcndl:volume>図形編</dcndl:volume>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2014</dc:date>
      <dcterms:issued>2014.7</dcterms:issued>
      <dcndl:price>1000円</dcndl:price>
      <dc:extent>111p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-227007-7</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">025529709</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22426817</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">33117419</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">Y32</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I025529709"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B13050932"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784092270077"/>
      <dc:description> 2014</dc:description>
    </item>
    <item>
      <title>昆虫の謎</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000007344162</link>
      <description><![CDATA[<p>小学館,2004,4-09-296115-4<p><ul><li>タイトル：昆虫の謎</li><li>タイトル（読み）：コンチュウ ノ ナゾ</li><li>責任表示：青山剛昌 原作,太田勝, 窪田一裕 まんが,小池啓一 監修</li><li>シリーズ名：小学館学習まんがシリーズ. 名探偵コナン推理ファイル</li><li>シリーズ名（読み）：ショウガクカン ガクシュウ マンガ シリーズ. メイタンテイ コナン スイリ ファイル</li><li>NDC(9)：486</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,太田, 勝,窪田, 一裕,小池, 啓一, 1949-,青山剛昌 原作,太田勝, 窪田一裕 まんが,小池啓一 監修</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000007344162</guid>
      <pubDate>Tue, 19 Jul 2022 22:44:31 +0900</pubDate>
      <dc:title>昆虫の謎</dc:title>
      <dcndl:titleTranscription>コンチュウ ノ ナゾ</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>太田, 勝</dc:creator>
      <dc:creator>窪田, 一裕</dc:creator>
      <dc:creator>小池, 啓一, 1949-</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>オオタ, マサル</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>クボタ, カズヒロ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>コイケ, ケイイチ, 1949-</dcndl:creatorTranscription>
      <dcndl:seriesTitle>小学館学習まんがシリーズ. 名探偵コナン推理ファイル</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクカン ガクシュウ マンガ シリーズ. メイタンテイ コナン スイリ ファイル</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2004</dc:date>
      <dcterms:issued>2004.5</dcterms:issued>
      <dcndl:price>800円</dcndl:price>
      <dc:extent>190p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">4-09-296115-4</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">4-09-296115-4</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000007344162</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">20584268</dc:identifier>
      <dc:subject>昆虫</dc:subject>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y11</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">486</dc:subject>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.hokkaido.jp/wo/opc/srh/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1006400128669"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.iwate.jp/opac/advanced-search"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.ibaraki.jp/licsxp-kopac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001001087797"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.city.saitama.jp/bookdetail?num=1262643&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=310259&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.sagamihara.kanagawa.jp/TOSHOW/asp/WwShousaiKen.aspx?FCode=1084949"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.ishikawa.lg.jp/wo/opc_srh/srh_detail/1009910526627/"/>
      <rdfs:seeAlso rdf:resource="https://www.tosyokan.pref.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000410023444"/>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001100374830"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.nagoya.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009914010772"/>
      <rdfs:seeAlso rdf:resource="https://www.shiga-pref-library.jp/wo/opc_srh/srh_detail/1739262/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bib/?B11178932"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0010744893"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000001718628"/>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.tottori.jp/winj/opac/switch-detail-iccap.do?bibid=1101156510"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009810566731"/>
      <rdfs:seeAlso rdf:resource="https://www2.hplibra.pref.hiroshima.jp/bib/?B12018366"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1100671117"/>
      <rdfs:seeAlso rdf:resource="https://library.pref.yamaguchi.lg.jp//wo/opc_srh/srh_detail/1000111267/"/>
      <rdfs:seeAlso rdf:resource="https://alislibopac.bunmori.tokushima.jp/winj/opac/switch-detail-iccap.do?bibid=1101520362"/>
      <rdfs:seeAlso rdf:resource="https://opac.toshokan.city.fukuoka.lg.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www2.tosyo-saga.jp/kentosyo2/opac/switch-detail-iccap.do?bibid=1100640480"/>
      <rdfs:seeAlso rdf:resource="https://opac.miraionlibrary.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009810694610"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000007344162"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16246413"/>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BB04544985"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784092961159"/>
      <dc:description> 2004</dc:description>
    </item>
    <item>
      <title>サイエンスコナン宇宙と重力の不思議 : 名探偵コナン実験・観察ファイル</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000136-I1130000796868685952</link>
      <description><![CDATA[<p>小学館,2005,4092961057<p><ul><li>タイトル：サイエンスコナン宇宙と重力の不思議 : 名探偵コナン実験・観察ファイル</li><li>タイトル（読み）：サイエンス コナン ウチュウ ト ジュウリョク ノ フシギ : メイタンテイ コナン ジッケン カンサツ ファイル</li><li>責任表示：青山剛昌原作 ; ガリレオ工房監修 ; 金井正幸まんが</li><li>NDC(9)：440</li></ul>]]></description>
      <author>青山, 剛昌,ガリレオ工房,金井, 正幸,青山剛昌原作 ; ガリレオ工房監修 ; 金井正幸まんが</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000136-I1130000796868685952</guid>
      <pubDate>Sun, 22 Dec 2024 00:00:10 +0900</pubDate>
      <dc:title>サイエンスコナン宇宙と重力の不思議 : 名探偵コナン実験・観察ファイル</dc:title>
      <dcndl:titleTranscription>サイエンス コナン ウチュウ ト ジュウリョク ノ フシギ : メイタンテイ コナン ジッケン カンサツ ファイル</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌</dc:creator>
      <dc:creator>ガリレオ工房</dc:creator>
      <dc:creator>金井, 正幸</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ガリレオ コウボウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>カナイ, マサユキ</dcndl:creatorTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>ja</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2005</dc:date>
      <dcterms:issued>2005.8</dcterms:issued>
      <dc:identifier xsi:type="dcndl:ISBN">4092961057</dc:identifier>
      <dc:identifier xsi:type="dcndl:NIIBibID">BA74934761</dc:identifier>
      <dc:subject>宇宙</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">440</dc:subject>
      <dc:subject xsi:type="dcndl:NDC8">440</dc:subject>
      <dc:description>構成: 松下英之</dc:description>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BA74934761"/>
      <dc:description> 2005</dc:description>
    </item>
    <item>
      <title>サイエンスコナン解明!身のまわりの不思議 : 名探偵コナン実験・観察ファイル</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I026285024</link>
      <description><![CDATA[<p>小学館,2015,978-4-09-296166-1<p><ul><li>タイトル：サイエンスコナン解明!身のまわりの不思議 : 名探偵コナン実験・観察ファイル</li><li>タイトル（読み）：サイエンス コナン カイメイ ミ ノ マワリ ノ フシギ : メイタンテイ コナン ジッケン カンサツ ファイル</li><li>責任表示：青山剛昌 原作,川村康文 監修,金井正幸 まんが</li><li>シリーズ名：小学館学習まんがシリーズ. CONAN COMIC STUDY SERIES</li><li>シリーズ名（読み）：ショウガクカン ガクシュウ マンガ シリーズ. コナン コミック スタディ シリーズ</li><li>NDC(9)：404.9</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,川村, 康文, 1959-,金井, 正幸,青山剛昌 原作,川村康文 監修,金井正幸 まんが</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I026285024</guid>
      <pubDate>Mon, 6 Jun 2022 19:48:25 +0900</pubDate>
      <dc:title>サイエンスコナン解明!身のまわりの不思議 : 名探偵コナン実験・観察ファイル</dc:title>
      <dcndl:titleTranscription>サイエンス コナン カイメイ ミ ノ マワリ ノ フシギ : メイタンテイ コナン ジッケン カンサツ ファイル</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>川村, 康文, 1959-</dc:creator>
      <dc:creator>金井, 正幸</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>カワムラ, ヤスフミ, 1959-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>カナイ, マサユキ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>小学館学習まんがシリーズ. CONAN COMIC STUDY SERIES</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクカン ガクシュウ マンガ シリーズ. コナン コミック スタディ シリーズ</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2015</dc:date>
      <dcterms:issued>2015.4</dcterms:issued>
      <dcndl:price>850円</dcndl:price>
      <dc:extent>159p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-296166-1</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">026285024</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22557236</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">33251540</dc:identifier>
      <dc:subject>科学</dc:subject>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y11</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">404.9</dc:subject>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.hokkaido.jp/wo/opc/srh/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1008000929348"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.ibaraki.jp/licsxp-kopac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1003000029790"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://catalog.library.metro.tokyo.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1152623881"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=2634666&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.sagamihara.kanagawa.jp/TOSHOW/asp/WwShousaiKen.aspx?FCode=1870502"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.nagoya.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001510005633"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bib/?B13155451"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0013491033"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1007000521218"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1007001196952"/>
      <rdfs:seeAlso rdf:resource="http://www.lib.wakayama-c.ed.jp/winj/opac/switch-detail-iccap.do?bibid=1102752350"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009811896611"/>
      <rdfs:seeAlso rdf:resource="https://www2.hplibra.pref.hiroshima.jp/bib/?B12178443"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1103709352"/>
      <rdfs:seeAlso rdf:resource="https://library.pref.yamaguchi.lg.jp//wo/opc_srh/srh_detail/1001275403/"/>
      <rdfs:seeAlso rdf:resource="https://opac.toshokan.city.fukuoka.lg.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www2.tosyo-saga.jp/kentosyo2/opac/switch-detail-iccap.do?bibid=1101827371"/>
      <rdfs:seeAlso rdf:resource="https://opac.miraionlibrary.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000002355696"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I026285024"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B13155451"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/092961660000d0000000"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784092961661"/>
      <dc:description> 2015</dc:description>
    </item>
    <item>
      <title>サイエンスコナン元素の不思議 : 名探偵コナン実験・観察ファイル</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I028311865</link>
      <description><![CDATA[<p>小学館,2017,978-4-09-296634-5<p><ul><li>タイトル：サイエンスコナン元素の不思議 : 名探偵コナン実験・観察ファイル</li><li>タイトル（読み）：サイエンス コナン ゲンソ ノ フシギ : メイタンテイ コナン ジッケン カンサツ ファイル</li><li>責任表示：青山剛昌 原作,川村康文 監修</li><li>シリーズ名：小学館学習まんがシリーズ. CONAN COMIC STUDY SERIES</li><li>シリーズ名（読み）：ショウガクカン ガクシュウ マンガ シリーズ. コナン コミック スタディ シリーズ</li><li>NDC(10)：431.11</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,川村, 康文, 1959-,青山剛昌 原作,川村康文 監修</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I028311865</guid>
      <pubDate>Mon, 23 May 2022 22:02:31 +0900</pubDate>
      <dc:title>サイエンスコナン元素の不思議 : 名探偵コナン実験・観察ファイル</dc:title>
      <dcndl:titleTranscription>サイエンス コナン ゲンソ ノ フシギ : メイタンテイ コナン ジッケン カンサツ ファイル</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>川村, 康文, 1959-</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>カワムラ, ヤスフミ, 1959-</dcndl:creatorTranscription>
      <dcndl:seriesTitle>小学館学習まんがシリーズ. CONAN COMIC STUDY SERIES</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクカン ガクシュウ マンガ シリーズ. コナン コミック スタディ シリーズ</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2017</dc:date>
      <dcterms:issued>2017.7</dcterms:issued>
      <dcndl:price>850円</dcndl:price>
      <dc:extent>159p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-296634-5</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">028311865</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22919904</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">33627717</dc:identifier>
      <dc:subject>元素</dc:subject>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y11</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">431.11</dc:subject>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.hokkaido.jp/wo/opc/srh/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1008001182247"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://catalog.library.metro.tokyo.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1153036287"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=2932811&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.sagamihara.kanagawa.jp/TOSHOW/asp/WwShousaiKen.aspx?FCode=2048074"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.ishikawa.lg.jp/wo/opc_srh/srh_detail/1000001060217/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.nagoya.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001710031726"/>
      <rdfs:seeAlso rdf:resource="https://www.shiga-pref-library.jp/wo/opc_srh/srh_detail/4512776/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bib/?B13458175"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0014343366"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1007000750263"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1007001196956"/>
      <rdfs:seeAlso rdf:resource="http://www.lib.wakayama-c.ed.jp/winj/opac/switch-detail-iccap.do?bibid=1102972136"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009812136853"/>
      <rdfs:seeAlso rdf:resource="https://www2.hplibra.pref.hiroshima.jp/bib/?B12383498"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1110174582"/>
      <rdfs:seeAlso rdf:resource="https://library.pref.yamaguchi.lg.jp//wo/opc_srh/srh_detail/1001489143/"/>
      <rdfs:seeAlso rdf:resource="https://alislibopac.bunmori.tokushima.jp/winj/opac/switch-detail-iccap.do?bibid=1110078330"/>
      <rdfs:seeAlso rdf:resource="https://opac.library.kochi.jp/winj/opac/switch-detail-iccap.do?bibid=1120214047"/>
      <rdfs:seeAlso rdf:resource="https://opac.toshokan.city.fukuoka.lg.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www2.tosyo-saga.jp/kentosyo2/opac/switch-detail-iccap.do?bibid=1102039816"/>
      <rdfs:seeAlso rdf:resource="https://opac.miraionlibrary.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000002583612"/>
      <rdfs:seeAlso rdf:resource="https://www2.library.pref.kagoshima.jp/kento/opac/switch-detail-iccap.do?bibid=1111670821"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I028311865"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B13458175"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/092966340000d0000000"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784092966345"/>
      <dc:description> 2017</dc:description>
    </item>
    <item>
      <title>サイエンスコナン七変化する水の不思議 : 名探偵コナン実験・観察ファイル</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000010631221</link>
      <description><![CDATA[<p>小学館,2009,978-4-09-296111-1<p><ul><li>タイトル：サイエンスコナン七変化する水の不思議 : 名探偵コナン実験・観察ファイル</li><li>タイトル（読み）：サイエンス コナン シチヘンゲスル ミズ ノ フシギ : メイタンテイ コナン ジッケン カンサツ ファイル</li><li>責任表示：青山剛昌 原作,金井正幸 まんが,ガリレオ工房 監修</li><li>シリーズ名：小学館学習まんがシリーズ</li><li>シリーズ名（読み）：ショウガクカン ガクシュウ マンガ シリーズ</li><li>NDC(9)：435.44</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,金井, 正幸,ガリレオ工房,青山剛昌 原作,金井正幸 まんが,ガリレオ工房 監修</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000010631221</guid>
      <pubDate>Mon, 4 Jul 2022 18:10:49 +0900</pubDate>
      <dc:title>サイエンスコナン七変化する水の不思議 : 名探偵コナン実験・観察ファイル</dc:title>
      <dcndl:titleTranscription>サイエンス コナン シチヘンゲスル ミズ ノ フシギ : メイタンテイ コナン ジッケン カンサツ ファイル</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>金井, 正幸</dc:creator>
      <dc:creator>ガリレオ工房</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>カナイ, マサユキ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ガリレオ コウボウ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>小学館学習まんがシリーズ</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクカン ガクシュウ マンガ シリーズ</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2009</dc:date>
      <dcterms:issued>2009.12</dcterms:issued>
      <dcndl:price>800円</dcndl:price>
      <dc:extent>189p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-296111-1</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000010631221</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">21687676</dc:identifier>
      <dc:identifier xsi:type="dcndl:NSMARCNO">104246400</dc:identifier>
      <dc:subject>水</dc:subject>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y11</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">435.44</dc:subject>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.hokkaido.jp/wo/opc/srh/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1008000225539"/>
      <rdfs:seeAlso rdf:resource="https://www.plib.pref.aomori.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1103116181"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.ibaraki.jp/licsxp-kopac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001001750036"/>
      <rdfs:seeAlso rdf:resource="https://www1.library.pref.gunma.jp/winj/opac/switch-detail-iccap.do?bibid=1101830676"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://catalog.library.metro.tokyo.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1107956283"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=1920810&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.sagamihara.kanagawa.jp/TOSHOW/asp/WwShousaiKen.aspx?FCode=1485082"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.nagoya.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000910075071"/>
      <rdfs:seeAlso rdf:resource="https://www.shiga-pref-library.jp/wo/opc_srh/srh_detail/2271746/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bib/?B12510478"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0011980092"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000900499702"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1007001196946"/>
      <rdfs:seeAlso rdf:resource="http://www.lib.wakayama-c.ed.jp/winj/opac/switch-detail-iccap.do?bibid=1102104356"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009811249982"/>
      <rdfs:seeAlso rdf:resource="https://www2.hplibra.pref.hiroshima.jp/bib/?B11996504"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1103148571"/>
      <rdfs:seeAlso rdf:resource="https://library.pref.yamaguchi.lg.jp//wo/opc_srh/srh_detail/1000699855/"/>
      <rdfs:seeAlso rdf:resource="https://www.ehimetosyokan.jp/winj/opac/switch-detail-iccap.do?bibid=1100585902"/>
      <rdfs:seeAlso rdf:resource="https://opac.toshokan.city.fukuoka.lg.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www2.tosyo-saga.jp/kentosyo2/opac/switch-detail-iccap.do?bibid=1101273190"/>
      <rdfs:seeAlso rdf:resource="https://opac.miraionlibrary.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000000792101"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000010631221"/>
      <rdfs:seeAlso rdf:resource="https://mediaarts-db.artmuseums.go.jp/id/M468198"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16495365"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/092961110000d0000000"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784092961111"/>
      <dc:description> 2009</dc:description>
    </item>
    <item>
      <title>サイエンスコナン忍者の不思議 : 名探偵コナン実験・観察ファイル</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I027563978</link>
      <description><![CDATA[<p>小学館,2016,978-4-09-296629-1<p><ul><li>タイトル：サイエンスコナン忍者の不思議 : 名探偵コナン実験・観察ファイル</li><li>タイトル（読み）：サイエンス コナン ニンジャ ノ フシギ : メイタンテイ コナン ジッケン カンサツ ファイル</li><li>責任表示：青山剛昌 原作,川村康文 監修</li><li>シリーズ名：小学館学習まんがシリーズ. CONAN COMIC STUDY SERIES</li><li>シリーズ名（読み）：ショウガクカン ガクシュウ マンガ シリーズ. コナン コミック スタディ シリーズ</li><li>NDC(9)：789.8</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,川村, 康文, 1959-,青山剛昌 原作,川村康文 監修</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I027563978</guid>
      <pubDate>Mon, 30 May 2022 21:23:55 +0900</pubDate>
      <dc:title>サイエンスコナン忍者の不思議 : 名探偵コナン実験・観察ファイル</dc:title>
      <dcndl:titleTranscription>サイエンス コナン ニンジャ ノ フシギ : メイタンテイ コナン ジッケン カンサツ ファイル</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>川村, 康文, 1959-</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>カワムラ, ヤスフミ, 1959-</dcndl:creatorTranscription>
      <dcndl:seriesTitle>小学館学習まんがシリーズ. CONAN COMIC STUDY SERIES</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクカン ガクシュウ マンガ シリーズ. コナン コミック スタディ シリーズ</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2016</dc:date>
      <dcterms:issued>2016.9</dcterms:issued>
      <dcndl:price>850円</dcndl:price>
      <dc:extent>159p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-296629-1</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">027563978</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22787820</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">33493525</dc:identifier>
      <dc:subject>忍者</dc:subject>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y12</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">789.8</dc:subject>
      <dc:description>文献あり</dc:description>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.hokkaido.jp/wo/opc/srh/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1008001087673"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://catalog.library.metro.tokyo.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1152883034"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=2825853&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.sagamihara.kanagawa.jp/TOSHOW/asp/WwShousaiKen.aspx?FCode=1983805"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.nagoya.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001610052712"/>
      <rdfs:seeAlso rdf:resource="https://www.shiga-pref-library.jp/wo/opc_srh/srh_detail/4445140/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bib/?B13348208"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0014169715"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1007000665569"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1007001196955"/>
      <rdfs:seeAlso rdf:resource="http://www.lib.wakayama-c.ed.jp/winj/opac/switch-detail-iccap.do?bibid=1102889238"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1110094753"/>
      <rdfs:seeAlso rdf:resource="https://library.pref.yamaguchi.lg.jp//wo/opc_srh/srh_detail/1001410361/"/>
      <rdfs:seeAlso rdf:resource="https://alislibopac.bunmori.tokushima.jp/winj/opac/switch-detail-iccap.do?bibid=1104055348"/>
      <rdfs:seeAlso rdf:resource="https://opac.toshokan.city.fukuoka.lg.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www2.tosyo-saga.jp/kentosyo2/opac/switch-detail-iccap.do?bibid=1101961626"/>
      <rdfs:seeAlso rdf:resource="https://opac.miraionlibrary.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000002499695"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I027563978"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B13348208"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/092966290000d0000000"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784092966291"/>
      <dc:description> 2016</dc:description>
    </item>
    <item>
      <title>サイエンスコナン防災の不思議 : 名探偵コナン実験・観察ファイル</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I028404639</link>
      <description><![CDATA[<p>小学館,2017,978-4-09-296635-2<p><ul><li>タイトル：サイエンスコナン防災の不思議 : 名探偵コナン実験・観察ファイル</li><li>タイトル（読み）：サイエンス コナン ボウサイ ノ フシギ : メイタンテイ コナン ジッケン カンサツ ファイル</li><li>責任表示：青山剛昌 原作,川村康文 監修</li><li>シリーズ名：小学館学習まんがシリーズ. CONAN COMIC STUDY SERIES</li><li>シリーズ名（読み）：ショウガクカン ガクシュウ マンガ シリーズ. コナン コミック スタディ シリーズ</li><li>NDC(10)：369.3</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,川村, 康文, 1959-,青山剛昌 原作,川村康文 監修</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I028404639</guid>
      <pubDate>Mon, 23 May 2022 20:54:35 +0900</pubDate>
      <dc:title>サイエンスコナン防災の不思議 : 名探偵コナン実験・観察ファイル</dc:title>
      <dcndl:titleTranscription>サイエンス コナン ボウサイ ノ フシギ : メイタンテイ コナン ジッケン カンサツ ファイル</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>川村, 康文, 1959-</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>カワムラ, ヤスフミ, 1959-</dcndl:creatorTranscription>
      <dcndl:seriesTitle>小学館学習まんがシリーズ. CONAN COMIC STUDY SERIES</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクカン ガクシュウ マンガ シリーズ. コナン コミック スタディ シリーズ</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2017</dc:date>
      <dcterms:issued>2017.8</dcterms:issued>
      <dcndl:price>850円</dcndl:price>
      <dc:extent>159p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-296635-2</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">028404639</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22939718</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">33646030</dc:identifier>
      <dc:subject>災害予防</dc:subject>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">369.3</dc:subject>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.hokkaido.jp/wo/opc/srh/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1008001193221"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://catalog.library.metro.tokyo.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1153056235"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=2944882&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.sagamihara.kanagawa.jp/TOSHOW/asp/WwShousaiKen.aspx?FCode=2055877"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.ishikawa.lg.jp/wo/opc_srh/srh_detail/1000001069883/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.nagoya.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001710042380"/>
      <rdfs:seeAlso rdf:resource="https://www.shiga-pref-library.jp/wo/opc_srh/srh_detail/4520838/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bib/?B13471955"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0014362502"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1007000760380"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1007001196958"/>
      <rdfs:seeAlso rdf:resource="http://www.lib.wakayama-c.ed.jp/winj/opac/switch-detail-iccap.do?bibid=1102981793"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009812146595"/>
      <rdfs:seeAlso rdf:resource="https://www2.hplibra.pref.hiroshima.jp/bib/?B12393745"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1110184047"/>
      <rdfs:seeAlso rdf:resource="https://library.pref.yamaguchi.lg.jp//wo/opc_srh/srh_detail/1001498624/"/>
      <rdfs:seeAlso rdf:resource="https://alislibopac.bunmori.tokushima.jp/winj/opac/switch-detail-iccap.do?bibid=1110094486"/>
      <rdfs:seeAlso rdf:resource="https://opac.library.kochi.jp/winj/opac/switch-detail-iccap.do?bibid=1120222038"/>
      <rdfs:seeAlso rdf:resource="https://opac.toshokan.city.fukuoka.lg.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www2.tosyo-saga.jp/kentosyo2/opac/switch-detail-iccap.do?bibid=1102049128"/>
      <rdfs:seeAlso rdf:resource="https://www2.library.pref.kagoshima.jp/kento/opac/switch-detail-iccap.do?bibid=1111681316"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I028404639"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B13471955"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/092966350000d0000000"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784092966352"/>
      <dc:description> 2017</dc:description>
    </item>
    <item>
      <title>最初の刑事--ウィッチャー警部とロード・ヒル・ハウス殺人事件(抜粋)</title>
      <link>https://ndlsearch.ndl.go.jp/books/R000000004-I11095106</link>
      <description><![CDATA[<p><p><ul><li>タイトル：最初の刑事--ウィッチャー警部とロード・ヒル・ハウス殺人事件(抜粋)</li><li>タイトル（読み）：サイショ ノ ケイジ ウィッチャー ケイブ ト ロード ヒル ハウス サツジン ジケン バッスイ</li><li>責任表示：Kate Summerscale,日暮 雅通 訳</li><li>シリーズ名：特集 その名は--名探偵コナン ; 名探偵コナンのライヴァルたち</li><li>シリーズ名（読み）：トクシュウ ソノ ナ ワ メイ タンテイ コナン ; メイ タンテイ コナン ノ ライヴァル タチ</li></ul>]]></description>
      <author>Kate Summerscale,日暮 雅通,Kate Summerscale,日暮 雅通 訳</author>
      <category>記事</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R000000004-I11095106</guid>
      <pubDate>Fri, 10 Jun 2011 22:37:52 +0900</pubDate>
      <dc:title>最初の刑事--ウィッチャー警部とロード・ヒル・ハウス殺人事件(抜粋)</dc:title>
      <dcndl:titleTranscription>サイショ ノ ケイジ ウィッチャー ケイブ ト ロード ヒル ハウス サツジン ジケン バッスイ</dcndl:titleTranscription>
      <dc:creator>Kate Summerscale</dc:creator>
      <dc:creator>日暮 雅通</dc:creator>
      <dcndl:seriesTitle>特集 その名は--名探偵コナン ; 名探偵コナンのライヴァルたち</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>トクシュウ ソノ ナ ワ メイ タンテイ コナン ; メイ タンテイ コナン ノ ライヴァル タチ</dcndl:seriesTitleTranscription>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:identifier xsi:type="dcndl:NDLBibID">11095106</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">ZK21</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R000000004-I11095106"/>
      <rdfs:seeAlso rdf:resource="https://cir.nii.ac.jp/crid/1521417755747669760"/>
      <dc:description>掲載誌：ハヤカワミステリマガジン = Hayakawa's mystery magazine 6(通号 664) p.44～47</dc:description>
    </item>
    <item>
      <title>さいしん!キッズソング-ワンダフォー!</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I023764032</link>
      <description><![CDATA[<p>King Record,2012,<p><ul><li>タイトル：さいしん!キッズソング-ワンダフォー!</li><li>タイトル（読み）：サイシン キッズ ソング ワンダフォー</li></ul>]]></description>
      <author/>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I023764032</guid>
      <pubDate>Fri, 1 Mar 2013 00:20:28 +0900</pubDate>
      <dc:title>さいしん!キッズソング-ワンダフォー!</dc:title>
      <dcndl:titleTranscription>サイシン キッズ ソング ワンダフォー</dcndl:titleTranscription>
      <dc:publisher>King Record</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2012</dc:date>
      <dcterms:issued>2012.9</dcterms:issued>
      <dcndl:price>2300円 (税込)</dcndl:price>
      <dc:extent>録音ディスク 2枚 (132分)</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">KICG-346</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">023764032</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22204601</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I023764032"/>
      <dc:description> 2012</dc:description>
    </item>
    <item>
      <title>サキソフォックスのお気に入り</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I22213001303002217</link>
      <description><![CDATA[<p>SUPERKIDS RECORDS,2009-09,<p><ul><li>タイトル：サキソフォックスのお気に入り</li><li>タイトル（読み）：サキソフォックス　ノ　オキニイリ</li><li>責任表示：SAXOFOX／演奏</li></ul>]]></description>
      <author>サキソフォックス,SAXOFOX／演奏</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I22213001303002217</guid>
      <pubDate>Mon, 10 Jun 2024 19:55:30 +0900</pubDate>
      <dc:title>サキソフォックスのお気に入り</dc:title>
      <dcndl:titleTranscription>サキソフォックス　ノ　オキニイリ</dcndl:titleTranscription>
      <dc:creator>サキソフォックス</dc:creator>
      <dcndl:creatorTranscription>サキソフォックス</dcndl:creatorTranscription>
      <dc:publisher>SUPERKIDS RECORDS</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2009-09</dc:date>
      <dcterms:issued>[2009.9]</dcterms:issued>
      <dcndl:price>￥２６００</dcndl:price>
      <dc:extent>1</dc:extent>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=3001303002217"/>
      <dc:description> 2009-09</dc:description>
    </item>
    <item>
      <title>サキソフォックスのお気にいり</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I028566179</link>
      <description><![CDATA[<p>SUPERKIDS RECORDS,<p><ul><li>タイトル：サキソフォックスのお気にいり</li><li>タイトル（読み）：サキソフォックス ノ オキニイリ</li><li>責任表示：サキソフォックス [演奏]</li></ul>]]></description>
      <author>サキソフォックス [演奏]</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I028566179</guid>
      <pubDate>Thu, 7 Nov 2019 22:56:30 +0900</pubDate>
      <dc:title>サキソフォックスのお気にいり</dc:title>
      <dcndl:titleTranscription>サキソフォックス ノ オキニイリ</dcndl:titleTranscription>
      <dc:publisher>SUPERKIDS RECORDS</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dcterms:issued>[201-]</dcterms:issued>
      <dcndl:price>2600円</dcndl:price>
      <dc:extent>録音ディスク 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">SKSF-090910</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">028566179</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23287459</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I028566179"/>
      <dc:description/>
    </item>
    <item>
      <title>さだめ</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I029000451</link>
      <description><![CDATA[<p>Being,2018,<p><ul><li>タイトル：さだめ</li><li>タイトル（読み）：サダメ</li><li>責任表示：1First place</li></ul>]]></description>
      <author>1First place</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I029000451</guid>
      <pubDate>Tue, 26 Jul 2022 00:21:12 +0900</pubDate>
      <dc:title>さだめ</dc:title>
      <dcndl:titleTranscription>サダメ</dcndl:titleTranscription>
      <dc:publisher>Being</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2018</dc:date>
      <dcterms:issued>2018.8</dcterms:issued>
      <dcndl:price>1667円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">JBCZ-4045</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">029000451</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23706881</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>初回限定盤</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I029000451"/>
      <dc:description> 2018</dc:description>
    </item>
    <item>
      <title>さだめ</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I029000453</link>
      <description><![CDATA[<p>Being,2018,<p><ul><li>タイトル：さだめ</li><li>タイトル（読み）：サダメ</li><li>責任表示：First place</li></ul>]]></description>
      <author>First place</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I029000453</guid>
      <pubDate>Thu, 21 Jul 2022 01:38:40 +0900</pubDate>
      <dc:title>さだめ</dc:title>
      <dcndl:titleTranscription>サダメ</dcndl:titleTranscription>
      <dc:publisher>Being</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2018</dc:date>
      <dcterms:issued>2018.8</dcterms:issued>
      <dcndl:price>926円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">JBCZ-6089</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">029000453</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23704994</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>名探偵コナン盤</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I029000453"/>
      <dc:description> 2018</dc:description>
    </item>
    <item>
      <title>サミットガイド : 名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I18111104767092</link>
      <description><![CDATA[<p>外務省国内広報課,2008,<p><ul><li>タイトル：サミットガイド : 名探偵コナン</li><li>タイトル（読み）：サミット ガイド</li><li>責任表示：青山剛昌 原作,太田勝 まんが,窪田一裕 まんが</li></ul>]]></description>
      <author>アオヤマ,ゴウショウ,オオタ,マサル,クボタ,カズヒロ,青山剛昌 原作,太田勝 まんが,窪田一裕 まんが</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I18111104767092</guid>
      <pubDate>Thu, 3 Jul 2008 09:00:00 +0900</pubDate>
      <dc:title>サミットガイド : 名探偵コナン</dc:title>
      <dcndl:titleTranscription>サミット ガイド</dcndl:titleTranscription>
      <dc:creator>アオヤマ,ゴウショウ</dc:creator>
      <dc:creator>オオタ,マサル</dc:creator>
      <dc:creator>クボタ,カズヒロ</dc:creator>
      <dcndl:creatorTranscription>アオヤマ,ゴウショウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>オオタ,マサル</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>クボタ,カズヒロ</dcndl:creatorTranscription>
      <dc:publisher>外務省国内広報課</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2008</dc:date>
      <dcndl:price>頒価不明</dcndl:price>
      <dc:extent>1冊(ページ付なし) ; 26cm</dc:extent>
      <dc:subject>サミット</dc:subject>
      <dc:subject xsi:type="dcndl:NDC8">K319</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.library-archives.pref.fukui.lg.jp/wo/opc_srh/srh_detail/1104767092/"/>
      <dc:description> 2008</dc:description>
    </item>
    <item>
      <title>『サンデー』を彩ってきたマンガたち : 主要作品解題</title>
      <link>https://ndlsearch.ndl.go.jp/books/R000000004-I026576239</link>
      <description><![CDATA[<p><p><ul><li>タイトル：『サンデー』を彩ってきたマンガたち : 主要作品解題</li><li>タイトル（読み）：『 サンデー 』 オ イロドッテ キタ マンガ タチ : シュヨウ サクヒン カイダイ</li><li>責任表示：さやわか,中田 健太郎</li><li>シリーズ名：特集 週刊少年サンデーの時代 : トキワ荘から『うる星やつら』『タッチ』『名探偵コナン』そして『マギ』『銀の匙』へ : マンガの青春は終わらない</li><li>シリーズ名（読み）：トクシュウ シュウカン ショウネン サンデー ノ ジダイ : トキワソウ カラ 『 ウル ホシ ヤツラ 』 『 タッチ 』 『 メイ タンテイ コナン 』 ソシテ 『 マギ 』 『 ギン ノ サジ 』 エ : マンガ ノ セイシュン ワ オワラナイ</li></ul>]]></description>
      <author>さやわか,中田 健太郎,さやわか,中田 健太郎</author>
      <category>記事</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R000000004-I026576239</guid>
      <pubDate>Wed, 26 Jun 2024 20:40:38 +0900</pubDate>
      <dc:title>『サンデー』を彩ってきたマンガたち : 主要作品解題</dc:title>
      <dcndl:titleTranscription>『 サンデー 』 オ イロドッテ キタ マンガ タチ : シュヨウ サクヒン カイダイ</dcndl:titleTranscription>
      <dc:creator>さやわか</dc:creator>
      <dc:creator>中田 健太郎</dc:creator>
      <dcndl:seriesTitle>特集 週刊少年サンデーの時代 : トキワ荘から『うる星やつら』『タッチ』『名探偵コナン』そして『マギ』『銀の匙』へ : マンガの青春は終わらない</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>トクシュウ シュウカン ショウネン サンデー ノ ジダイ : トキワソウ カラ 『 ウル ホシ ヤツラ 』 『 タッチ 』 『 メイ タンテイ コナン 』 ソシテ 『 マギ 』 『 ギン ノ サジ 』 エ : マンガ ノ セイシュン ワ オワラナイ</dcndl:seriesTitleTranscription>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:identifier xsi:type="dcndl:NDLBibID">026576239</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">ZK24</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R000000004-I026576239"/>
      <rdfs:seeAlso rdf:resource="https://cir.nii.ac.jp/crid/1523388080232785792"/>
      <dc:description>掲載誌：ユリイカ = Eureka 3(通号 641) p.206-224</dc:description>
    </item>
    <item>
      <title>サンデーとは高橋留美子である</title>
      <link>https://ndlsearch.ndl.go.jp/books/R000000004-I026576105</link>
      <description><![CDATA[<p><p><ul><li>タイトル：サンデーとは高橋留美子である</li><li>タイトル（読み）：サンデー トワ タカハシ ルミコ デ アル</li><li>責任表示：斎藤 環</li><li>シリーズ名：特集 週刊少年サンデーの時代 : トキワ荘から『うる星やつら』『タッチ』『名探偵コナン』そして『マギ』『銀の匙』へ : マンガの青春は終わらない</li><li>シリーズ名（読み）：トクシュウ シュウカン ショウネン サンデー ノ ジダイ : トキワソウ カラ 『 ウル ホシ ヤツラ 』 『 タッチ 』 『 メイ タンテイ コナン 』 ソシテ 『 マギ 』 『 ギン ノ サジ 』 エ : マンガ ノ セイシュン ワ オワラナイ</li></ul>]]></description>
      <author>斎藤 環,斎藤 環</author>
      <category>記事</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R000000004-I026576105</guid>
      <pubDate>Wed, 26 Jun 2024 20:40:52 +0900</pubDate>
      <dc:title>サンデーとは高橋留美子である</dc:title>
      <dcndl:titleTranscription>サンデー トワ タカハシ ルミコ デ アル</dcndl:titleTranscription>
      <dc:creator>斎藤 環</dc:creator>
      <dcndl:seriesTitle>特集 週刊少年サンデーの時代 : トキワ荘から『うる星やつら』『タッチ』『名探偵コナン』そして『マギ』『銀の匙』へ : マンガの青春は終わらない</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>トクシュウ シュウカン ショウネン サンデー ノ ジダイ : トキワソウ カラ 『 ウル ホシ ヤツラ 』 『 タッチ 』 『 メイ タンテイ コナン 』 ソシテ 『 マギ 』 『 ギン ノ サジ 』 エ : マンガ ノ セイシュン ワ オワラナイ</dcndl:seriesTitleTranscription>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:identifier xsi:type="dcndl:NDLBibID">026576105</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">ZK24</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R000000004-I026576105"/>
      <rdfs:seeAlso rdf:resource="https://cir.nii.ac.jp/crid/1521417755551288576"/>
      <dc:description>掲載誌：ユリイカ = Eureka 3(通号 641) p.110-114</dc:description>
    </item>
    <item>
      <title>THE BEST OF DETECTIVE CONAN　：　名探偵コナン　テーマ曲集</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I01213008000122541</link>
      <description><![CDATA[<p>ＺＡＩＮ　ＲＥＣＯＲＤＳ,2000,<p><ul><li>タイトル：THE BEST OF DETECTIVE CONAN　：　名探偵コナン　テーマ曲集</li><li>タイトル（読み）：ザ　ベスト　オブ　ディテクティブ　コナン　メイタンテイ　コナン　テーマ　キョクシュウ</li><li>NDC(9)：M51</li></ul>]]></description>
      <author>小松 未歩,坂井 泉水,栗林　誠一郎,池田　大介,ＺＡＲＤ,稲葉浩志,松本　孝弘,B'z,AZUKI 七,Garnet Crow,愛内　里菜,大野愛果,宇徳　敬子,ＤＥＥＮ,WAG,倉木麻衣</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I01213008000122541</guid>
      <pubDate>Sun, 13 Sep 2020 21:00:33 +0900</pubDate>
      <dc:title>THE BEST OF DETECTIVE CONAN　：　名探偵コナン　テーマ曲集</dc:title>
      <dcndl:titleTranscription>ザ　ベスト　オブ　ディテクティブ　コナン　メイタンテイ　コナン　テーマ　キョクシュウ</dcndl:titleTranscription>
      <dc:creator>小松 未歩</dc:creator>
      <dc:creator>坂井 泉水</dc:creator>
      <dc:creator>栗林　誠一郎</dc:creator>
      <dc:creator>池田　大介</dc:creator>
      <dc:creator>ＺＡＲＤ</dc:creator>
      <dc:creator>稲葉浩志</dc:creator>
      <dc:creator>松本　孝弘</dc:creator>
      <dc:creator>B'z</dc:creator>
      <dc:creator>AZUKI 七</dc:creator>
      <dc:creator>Garnet Crow</dc:creator>
      <dc:creator>愛内　里菜</dc:creator>
      <dc:creator>大野愛果</dc:creator>
      <dc:creator>宇徳　敬子</dc:creator>
      <dc:creator>ＤＥＥＮ</dc:creator>
      <dc:creator>WAG</dc:creator>
      <dc:creator>倉木麻衣</dc:creator>
      <dcndl:creatorTranscription>コマツ ミホ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>サカイ イズミ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>クリバヤシ　セイイチロウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>イケダ　ダイスケ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ザード</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>イナバ　コウシ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>マツモト　タカヒロ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ビーズ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アズキ ナナ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ガーネット クロウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アイウチ　リナ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>オオノ　アイカ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ウトク　ケイコ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ディーン</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ワグ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>クラキ　マイ</dcndl:creatorTranscription>
      <dc:publisher>ＺＡＩＮ　ＲＥＣＯＲＤＳ</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2000</dc:date>
      <dcterms:issued>2000</dcterms:issued>
      <dcndl:price>頒価不明</dcndl:price>
      <dc:extent>１枚</dc:extent>
      <dc:subject xsi:type="dcndl:NDC9">M51</dc:subject>
      <dc:description>１． 謎　小松　未歩／作詞・作曲・歌、古井　弘人／編曲
　　２．運命のルーレット廻して　坂井　泉水／作詞､栗林　誠一郎／作曲､池田　大介／編曲､ＺＡＲＤ／歌
　　３．ギリギリｃｈｏｐ　稲葉　浩志／作詞・編曲、松本　孝弘／作曲・編曲、Ｂ’ｚ／歌
　　４．Mysterious Eyes　ＡＺＵＫＩ　七／作詞、中村　由利／作曲、古井　弘人／編曲、ＧＡＲＮＥＴ　ＣＲＯＷ／歌
　　５．恋はスリル、ショック、サスペンス　愛内　里菜／作詞・歌、大野　愛果／作曲、尾城　九龍／編曲
　　６．光と影のロマン　宇徳　敬子／作詞・作曲・歌、池田　大輔／編曲
　　７．君がいない夏　小松　未歩／作詞・作曲、池田　大介／編曲、ＤＥＥＮ／歌
　　８．願い事ひとつだけ　小松　未歩／作詞・作曲・歌、古井　弘人／編曲
　　９．氷の上に立つように　小松 未歩／作詞・作曲・歌、古井　弘人／編曲
　　１０．Still for your love　三好　真美／作詞、三好　誠／作曲・編曲、古井　弘人／編曲
　　１１．Free magic  ＡＺＵＫＩ　七／作詞、三好　誠／作曲、古井　弘人／編曲、ＷＡＧ／歌
　　１２．Secret of my Heart　倉木 麻衣／作詞・歌、大野 愛果／作曲、Ｃｙｂｅｒｓｏｕｎｄ／編曲
　　１３．夏の幻　ＡＺＵＫＩ　七／作詞 中村　由利／作曲、古井　弘人／編曲、Ｇａｒｎｅｔ　Ｃｒｏｗ／歌
　　１４．少女の頃に戻ったみたい　坂井　泉水／作詞、大野　愛果／作曲、池田　大介／編曲、ＺＡＲＤ／歌
　　１５．ONE　稲葉　浩志／作詞・編曲、松本　孝弘／作曲・編曲、Ｂ’ｚ／歌
　　１６．あなたがいるから　小松　未歩／作詞・作曲・歌、池田　大介／編曲</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=3008000122541"/>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=3001300087738"/>
      <dc:description> 2000</dc:description>
    </item>
    <item>
      <title>The best of detective Conan　：　名探偵コナン テーマ曲集 2</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I22213001300093915</link>
      <description><![CDATA[<p>2,B-Gram RECORDS,2003-12,<p><ul><li>タイトル：The best of detective Conan　：　名探偵コナン テーマ曲集 2</li><li>タイトル（読み）：ザ ベスト オブ ディテクティヴ コナン　メイタンテイ コナン テーマキョクシュウ</li><li>責任表示：倉木 麻衣／[ほか]演奏</li></ul>]]></description>
      <author>倉木 麻衣／[ほか]演奏</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I22213001300093915</guid>
      <pubDate>Sun, 9 Mar 2025 18:55:32 +0900</pubDate>
      <dc:title>The best of detective Conan　：　名探偵コナン テーマ曲集 2</dc:title>
      <dcndl:titleTranscription>ザ ベスト オブ ディテクティヴ コナン　メイタンテイ コナン テーマキョクシュウ</dcndl:titleTranscription>
      <dcndl:volume>2</dcndl:volume>
      <dc:publisher>B-Gram RECORDS</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2003-12</dc:date>
      <dcterms:issued>2003.12</dcterms:issued>
      <dcndl:price>￥２６６７</dcndl:price>
      <dc:extent>1</dc:extent>
      <dc:identifier xsi:type="dcndl:TRCMARCNO">04901198</dc:identifier>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=3001300093915"/>
      <dc:description> 2003-12</dc:description>
    </item>
    <item>
      <title>THE BEST OF DETECTIVE CONAN　：　名探偵コナン テーマ曲集 3</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I22213001301441511</link>
      <description><![CDATA[<p>3,2008-08,<p><ul><li>タイトル：THE BEST OF DETECTIVE CONAN　：　名探偵コナン テーマ曲集 3</li><li>タイトル（読み）：ザ ベスト オブ ディテクティヴ コナン　メイタンテイ コナン テーマキョクシュウ</li><li>責任表示：ZARD／[ほか]演奏</li></ul>]]></description>
      <author>ZARD,Zard,ZARD／[ほか]演奏</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I22213001301441511</guid>
      <pubDate>Sun, 9 Mar 2025 18:55:32 +0900</pubDate>
      <dc:title>THE BEST OF DETECTIVE CONAN　：　名探偵コナン テーマ曲集 3</dc:title>
      <dcndl:titleTranscription>ザ ベスト オブ ディテクティヴ コナン　メイタンテイ コナン テーマキョクシュウ</dcndl:titleTranscription>
      <dc:creator>ZARD</dc:creator>
      <dc:creator>Zard</dc:creator>
      <dcndl:creatorTranscription>ザード</dcndl:creatorTranscription>
      <dcndl:volume>3</dcndl:volume>
      <dc:date xsi:type="dcterms:W3CDTF">2008-08</dc:date>
      <dcterms:issued>2008.8</dcterms:issued>
      <dcndl:price>￥３０４８</dcndl:price>
      <dc:extent>2</dc:extent>
      <dc:identifier xsi:type="dcndl:TRCMARCNO">08907359</dc:identifier>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=3001301441511"/>
      <dc:description> 2008-08</dc:description>
    </item>
    <item>
      <title>THE BEST OF DETECTIVE CONAN　：　名探偵コナン テーマ曲集 4</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I22213001301964988</link>
      <description><![CDATA[<p>4,2011-12,<p><ul><li>タイトル：THE BEST OF DETECTIVE CONAN　：　名探偵コナン テーマ曲集 4</li><li>タイトル（読み）：ザ ベスト オブ ディテクティヴ コナン　メイタンテイ コナン テーマキョクシュウ</li><li>責任表示：B'z／[ほか]演奏</li></ul>]]></description>
      <author>B'z,GARNET CROW,倉木 麻衣,Naifu,B'z／[ほか]演奏</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I22213001301964988</guid>
      <pubDate>Sun, 5 Jan 2025 18:05:30 +0900</pubDate>
      <dc:title>THE BEST OF DETECTIVE CONAN　：　名探偵コナン テーマ曲集 4</dc:title>
      <dcndl:titleTranscription>ザ ベスト オブ ディテクティヴ コナン　メイタンテイ コナン テーマキョクシュウ</dcndl:titleTranscription>
      <dc:creator>B'z</dc:creator>
      <dc:creator>GARNET CROW</dc:creator>
      <dc:creator>倉木 麻衣</dc:creator>
      <dc:creator>Naifu</dc:creator>
      <dcndl:creatorTranscription>ビーズ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ガーネット クロウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>クラキ マイ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ナイフ</dcndl:creatorTranscription>
      <dcndl:volume>4</dcndl:volume>
      <dc:date xsi:type="dcterms:W3CDTF">2011-12</dc:date>
      <dcterms:issued>2011.12</dcterms:issued>
      <dcndl:price>￥３０４８</dcndl:price>
      <dc:extent>2</dc:extent>
      <dc:identifier xsi:type="dcndl:TRCMARCNO">11908832</dc:identifier>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=3001301964988"/>
      <dc:description> 2011-12</dc:description>
    </item>
    <item>
      <title>THE BEST OF DETECTIVE CONAN　：　名探偵コナン テーマ曲集 5</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I22213001303002107</link>
      <description><![CDATA[<p>5,2014-10,<p><ul><li>タイトル：THE BEST OF DETECTIVE CONAN　：　名探偵コナン テーマ曲集 5</li><li>タイトル（読み）：ザ ベスト オブ ディテクティヴ コナン　メイタンテイ コナン テーマキョクシュウ</li><li>責任表示：KNOCK OUT MONKEY／[ほか]演奏</li></ul>]]></description>
      <author>KNOCK OUT MONKEY,Knock Out Monkey,VALSHE,B'z,倉木 麻衣,なついろ,KNOCK OUT MONKEY／[ほか]演奏</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I22213001303002107</guid>
      <pubDate>Mon, 3 Mar 2025 01:05:31 +0900</pubDate>
      <dc:title>THE BEST OF DETECTIVE CONAN　：　名探偵コナン テーマ曲集 5</dc:title>
      <dcndl:titleTranscription>ザ ベスト オブ ディテクティヴ コナン　メイタンテイ コナン テーマキョクシュウ</dcndl:titleTranscription>
      <dc:creator>KNOCK OUT MONKEY</dc:creator>
      <dc:creator>Knock Out Monkey</dc:creator>
      <dc:creator>VALSHE</dc:creator>
      <dc:creator>B'z</dc:creator>
      <dc:creator>倉木 麻衣</dc:creator>
      <dc:creator>なついろ</dc:creator>
      <dcndl:creatorTranscription>ノックアウト モンキー</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>バルシェ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ビーズ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>クラキ マイ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ナツイロ</dcndl:creatorTranscription>
      <dcndl:volume>5</dcndl:volume>
      <dc:date xsi:type="dcterms:W3CDTF">2014-10</dc:date>
      <dcterms:issued>2014.10</dcterms:issued>
      <dcndl:price>￥２９６３</dcndl:price>
      <dc:extent>1</dc:extent>
      <dc:identifier xsi:type="dcndl:TRCMARCNO">14907900</dc:identifier>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=3001303002107"/>
      <dc:description> 2014-10</dc:description>
    </item>
    <item>
      <title>THE BEST OF DETECTIVE CONAN　：　名探偵コナン テーマ曲集 6</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000001-I22213001303007235</link>
      <description><![CDATA[<p>6,2020-03,<p><ul><li>タイトル：THE BEST OF DETECTIVE CONAN　：　名探偵コナン テーマ曲集 6</li><li>タイトル（読み）：ザ ベスト オブ ディテクティヴ コナン　メイタンテイ コナン テーマキョクシュウ</li><li>責任表示：倉木 麻衣／[ほか]演奏</li></ul>]]></description>
      <author>倉木 麻衣,BREAKERZ,La PomPon,稲葉 浩志,B'z,倉木 麻衣／[ほか]演奏</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000001-I22213001303007235</guid>
      <pubDate>Thu, 27 Feb 2025 20:45:30 +0900</pubDate>
      <dc:title>THE BEST OF DETECTIVE CONAN　：　名探偵コナン テーマ曲集 6</dc:title>
      <dcndl:titleTranscription>ザ ベスト オブ ディテクティヴ コナン　メイタンテイ コナン テーマキョクシュウ</dcndl:titleTranscription>
      <dc:creator>倉木 麻衣</dc:creator>
      <dc:creator>BREAKERZ</dc:creator>
      <dc:creator>La PomPon</dc:creator>
      <dc:creator>稲葉 浩志</dc:creator>
      <dc:creator>B'z</dc:creator>
      <dcndl:creatorTranscription>クラキ マイ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ブレイカーズ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ラ ポンポン</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>イナバ コウシ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ビーズ</dcndl:creatorTranscription>
      <dcndl:volume>6</dcndl:volume>
      <dc:date xsi:type="dcterms:W3CDTF">2020-03</dc:date>
      <dcterms:issued>2020.3</dcterms:issued>
      <dcndl:price>￥３５００</dcndl:price>
      <dc:extent>2</dc:extent>
      <dc:identifier xsi:type="dcndl:TRCMARCNO">20901343</dc:identifier>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=3001303007235"/>
      <dc:description> 2020-03</dc:description>
    </item>
    <item>
      <title>残心残暑</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I033569562</link>
      <description><![CDATA[<p>Pony Canyon,2024,<p><ul><li>タイトル：残心残暑</li><li>タイトル（読み）：ザンシン ザンショ</li><li>責任表示：aiko</li></ul>]]></description>
      <author>aiko</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I033569562</guid>
      <pubDate>Thu, 26 Sep 2024 23:30:22 +0900</pubDate>
      <dc:title>残心残暑</dc:title>
      <dcndl:titleTranscription>ザンシン ザンショ</dcndl:titleTranscription>
      <dc:publisher>Pony Canyon</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2024</dc:date>
      <dcterms:issued>[2024.8]</dcterms:issued>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">PCCA-15032</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">033569562</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">24028170</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>発売番号: PCCA-15032 (Blu-ray Disc) との組み合わせ</dc:description>
      <dc:description>初回限定仕様盤A</dc:description>
      <dc:description>所要時間: 57分37秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I033569562"/>
      <dc:description> 2024</dc:description>
    </item>
    <item>
      <title>シティ・クルージン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I032416781</link>
      <description><![CDATA[<p>King Records,2022,<p><ul><li>タイトル：シティ・クルージン</li><li>タイトル（読み）：シティ ・ クルージン</li><li>責任表示：ユッコ・ミラー</li></ul>]]></description>
      <author>ユッコ・ミラー</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I032416781</guid>
      <pubDate>Tue, 14 Feb 2023 00:56:30 +0900</pubDate>
      <dc:title>シティ・クルージン</dc:title>
      <dcndl:titleTranscription>シティ ・ クルージン</dcndl:titleTranscription>
      <dc:publisher>King Records</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2022</dc:date>
      <dcterms:issued>2022.12</dcterms:issued>
      <dcndl:price>3000円</dcndl:price>
      <dc:extent>CD 1枚</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">KICJ-860</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">032416781</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23795421</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <dc:description>出版</dc:description>
      <dc:description>所要時間: 50分56秒</dc:description>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I032416781"/>
      <dc:description> 2022</dc:description>
    </item>
    <item>
      <title>［シネマ・デイジー］劇場版　名探偵コナン　時計じかけの摩天楼</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000038-I4022979</link>
      <description><![CDATA[<p>小学館,2011-02,<p><ul><li>タイトル：［シネマ・デイジー］劇場版　名探偵コナン　時計じかけの摩天楼</li><li>タイトル（読み）：シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　トケイジカケ　ノ　マテンロウ</li><li>責任表示：こだま兼嗣 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</li><li>シリーズ名：劇場版 : １</li><li>NDC(9)：778.77</li></ul>]]></description>
      <author>こだま兼嗣 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000038-I4022979</guid>
      <pubDate>Tue, 7 May 2024 09:00:00 +0900</pubDate>
      <dc:title>［シネマ・デイジー］劇場版　名探偵コナン　時計じかけの摩天楼</dc:title>
      <dcndl:titleTranscription>シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　トケイジカケ　ノ　マテンロウ</dcndl:titleTranscription>
      <dcndl:seriesTitle>劇場版 : １</dcndl:seriesTitle>
      <dc:publisher>小学館</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2011-02</dc:date>
      <dcterms:issued>2011年2月</dcterms:issued>
      <dc:extent>1巻 (1時間37分)</dc:extent>
      <dc:subject xsi:type="dcndl:NDC9">778.77</dc:subject>
      <dc:description>DAISY version:２．０２</dc:description>
      <dc:description>音声圧縮形式:ＭＰ３</dc:description>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=4022979"/>
      <dc:description> 2011-02</dc:description>
    </item>
    <item>
      <title>［シネマ・デイジー］劇場版　名探偵コナン　１４番目の標的</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000038-I4066632</link>
      <description><![CDATA[<p>ビーヴィジョン,2011-02,<p><ul><li>タイトル：［シネマ・デイジー］劇場版　名探偵コナン　１４番目の標的</li><li>タイトル（読み）：シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　１４バンメ　ノ　ターゲット</li><li>責任表示：こだま兼嗣 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</li><li>シリーズ名：劇場版 : ２</li><li>NDC(9)：778.77</li></ul>]]></description>
      <author>こだま兼嗣 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000038-I4066632</guid>
      <pubDate>Mon, 12 Oct 2020 09:00:00 +0900</pubDate>
      <dc:title>［シネマ・デイジー］劇場版　名探偵コナン　１４番目の標的</dc:title>
      <dcndl:titleTranscription>シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　１４バンメ　ノ　ターゲット</dcndl:titleTranscription>
      <dcndl:seriesTitle>劇場版 : ２</dcndl:seriesTitle>
      <dc:publisher>ビーヴィジョン</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2011-02</dc:date>
      <dcterms:issued>2011年2月</dcterms:issued>
      <dc:extent>1巻 (1時間44分)</dc:extent>
      <dc:subject xsi:type="dcndl:NDC9">778.77</dc:subject>
      <dc:description>DAISY version:２．０２</dc:description>
      <dc:description>音声圧縮形式:ＭＰ３</dc:description>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=4066632"/>
      <dc:description> 2011-02</dc:description>
    </item>
    <item>
      <title>［シネマ・デイジー］劇場版　名探偵コナン　世紀末の魔術師</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000038-I4123230</link>
      <description><![CDATA[<p>ビーヴィジョン,2011-02,<p><ul><li>タイトル：［シネマ・デイジー］劇場版　名探偵コナン　世紀末の魔術師</li><li>タイトル（読み）：シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　セイキマツ　ノ　マジュツシ</li><li>責任表示：こだま兼嗣 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</li><li>シリーズ名：劇場版 : ３</li><li>NDC(9)：778.77</li></ul>]]></description>
      <author>こだま兼嗣 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000038-I4123230</guid>
      <pubDate>Mon, 28 Dec 2021 09:00:00 +0900</pubDate>
      <dc:title>［シネマ・デイジー］劇場版　名探偵コナン　世紀末の魔術師</dc:title>
      <dcndl:titleTranscription>シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　セイキマツ　ノ　マジュツシ</dcndl:titleTranscription>
      <dcndl:seriesTitle>劇場版 : ３</dcndl:seriesTitle>
      <dc:publisher>ビーヴィジョン</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2011-02</dc:date>
      <dcterms:issued>2011年2月</dcterms:issued>
      <dc:extent>1巻 (1時間40分)</dc:extent>
      <dc:subject xsi:type="dcndl:NDC9">778.77</dc:subject>
      <dc:description>DAISY version:２．０２</dc:description>
      <dc:description>音声圧縮形式:ＭＰ３</dc:description>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=4123230"/>
      <dc:description> 2011-02</dc:description>
    </item>
    <item>
      <title>［シネマ・デイジー］劇場版　名探偵コナン　瞳の中の暗殺者</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000038-I4123237</link>
      <description><![CDATA[<p>ビーヴィジョン,2011-02,<p><ul><li>タイトル：［シネマ・デイジー］劇場版　名探偵コナン　瞳の中の暗殺者</li><li>タイトル（読み）：シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　ヒトミ　ノ　ナカノ　アンサツシャ</li><li>責任表示：こだま兼嗣 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</li><li>シリーズ名：劇場版 : ４</li><li>NDC(9)：778.77</li></ul>]]></description>
      <author>こだま兼嗣 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000038-I4123237</guid>
      <pubDate>Thu, 17 Dec 2020 09:00:00 +0900</pubDate>
      <dc:title>［シネマ・デイジー］劇場版　名探偵コナン　瞳の中の暗殺者</dc:title>
      <dcndl:titleTranscription>シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　ヒトミ　ノ　ナカノ　アンサツシャ</dcndl:titleTranscription>
      <dcndl:seriesTitle>劇場版 : ４</dcndl:seriesTitle>
      <dc:publisher>ビーヴィジョン</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2011-02</dc:date>
      <dcterms:issued>2011年2月</dcterms:issued>
      <dc:extent>1巻 (1時間43分)</dc:extent>
      <dc:subject xsi:type="dcndl:NDC9">778.77</dc:subject>
      <dc:description>DAISY version:２．０２</dc:description>
      <dc:description>音声圧縮形式:ＭＰ３</dc:description>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=4123237"/>
      <dc:description> 2011-02</dc:description>
    </item>
    <item>
      <title>［シネマ・デイジー］劇場版　名探偵コナン　天国へのカウントダウン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000038-I4123240</link>
      <description><![CDATA[<p>ビーヴィジョン,2011-02,<p><ul><li>タイトル：［シネマ・デイジー］劇場版　名探偵コナン　天国へのカウントダウン</li><li>タイトル（読み）：シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　テンゴク　エノ　カウントダウン</li><li>責任表示：こだま兼嗣 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</li><li>シリーズ名：劇場版 : ５</li><li>NDC(9)：778.77</li></ul>]]></description>
      <author>こだま兼嗣 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000038-I4123240</guid>
      <pubDate>Wed, 3 Mar 2021 09:00:00 +0900</pubDate>
      <dc:title>［シネマ・デイジー］劇場版　名探偵コナン　天国へのカウントダウン</dc:title>
      <dcndl:titleTranscription>シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　テンゴク　エノ　カウントダウン</dcndl:titleTranscription>
      <dcndl:seriesTitle>劇場版 : ５</dcndl:seriesTitle>
      <dc:publisher>ビーヴィジョン</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2011-02</dc:date>
      <dcterms:issued>2011年2月</dcterms:issued>
      <dc:extent>1巻 (1時間43分)</dc:extent>
      <dc:subject xsi:type="dcndl:NDC9">778.77</dc:subject>
      <dc:description>DAISY version:２．０２</dc:description>
      <dc:description>音声圧縮形式:ＭＰ３</dc:description>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=4123240"/>
      <dc:description> 2011-02</dc:description>
    </item>
    <item>
      <title>［シネマ・デイジー］劇場版　名探偵コナン　ベイカー街（ストリート）の亡霊</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000038-I4182352</link>
      <description><![CDATA[<p>ビーヴィジョン,2011-02,<p><ul><li>タイトル：［シネマ・デイジー］劇場版　名探偵コナン　ベイカー街（ストリート）の亡霊</li><li>タイトル（読み）：シネマ　デイジー　ゲキジョウバン　メイタンテイ　コナン　ベイカーストリート　ノ　ボウレイ</li><li>責任表示：こだま兼嗣 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</li><li>シリーズ名：劇場版 : ６</li><li>NDC(9)：778.77</li></ul>]]></description>
      <author>こだま兼嗣 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000038-I4182352</guid>
      <pubDate>Thu, 13 May 2021 09:00:00 +0900</pubDate>
      <dc:title>［シネマ・デイジー］劇場版　名探偵コナン　ベイカー街（ストリート）の亡霊</dc:title>
      <dcndl:titleTranscription>シネマ　デイジー　ゲキジョウバン　メイタンテイ　コナン　ベイカーストリート　ノ　ボウレイ</dcndl:titleTranscription>
      <dcndl:seriesTitle>劇場版 : ６</dcndl:seriesTitle>
      <dc:publisher>ビーヴィジョン</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2011-02</dc:date>
      <dcterms:issued>2011年2月</dcterms:issued>
      <dc:extent>1巻 (1時間50分)</dc:extent>
      <dc:subject xsi:type="dcndl:NDC9">778.77</dc:subject>
      <dc:description>DAISY version:２．０２</dc:description>
      <dc:description>音声圧縮形式:ＭＰ３</dc:description>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=4182352"/>
      <dc:description> 2011-02</dc:description>
    </item>
    <item>
      <title>［シネマ・デイジー］劇場版　名探偵コナン　迷宮の十字路（クロスロード）</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000038-I4448175</link>
      <description><![CDATA[<p>ビーイング,2011-02,<p><ul><li>タイトル：［シネマ・デイジー］劇場版　名探偵コナン　迷宮の十字路（クロスロード）</li><li>タイトル（読み）：シネマ　デイジー　ゲキジョウバン　メイタンテイ　コナン　メイキュウ　ノ　クロスロード</li><li>責任表示：こだま兼嗣 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</li><li>シリーズ名：劇場版 : ７</li><li>NDC(9)：778.77</li></ul>]]></description>
      <author>こだま兼嗣 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000038-I4448175</guid>
      <pubDate>Thu, 26 Dec 2024 09:00:00 +0900</pubDate>
      <dc:title>［シネマ・デイジー］劇場版　名探偵コナン　迷宮の十字路（クロスロード）</dc:title>
      <dcndl:titleTranscription>シネマ　デイジー　ゲキジョウバン　メイタンテイ　コナン　メイキュウ　ノ　クロスロード</dcndl:titleTranscription>
      <dcndl:seriesTitle>劇場版 : ７</dcndl:seriesTitle>
      <dc:publisher>ビーイング</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2011-02</dc:date>
      <dcterms:issued>2011年2月</dcterms:issued>
      <dc:extent>1巻 (1時間52分)</dc:extent>
      <dc:subject xsi:type="dcndl:NDC9">778.77</dc:subject>
      <dc:description>DAISY version:２．０２</dc:description>
      <dc:description>音声圧縮形式:ＭＰ３</dc:description>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=4448175"/>
      <dc:description> 2011-02</dc:description>
    </item>
    <item>
      <title>［シネマ・デイジー］劇場版　名探偵コナン　銀翼の奇術師</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000038-I4452682</link>
      <description><![CDATA[<p>ビーヴィジョン,2011-02,<p><ul><li>タイトル：［シネマ・デイジー］劇場版　名探偵コナン　銀翼の奇術師</li><li>タイトル（読み）：シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　ギンヨク　ノ　マジシャン</li><li>責任表示：山本泰一郎 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</li><li>シリーズ名：劇場版 : ８</li><li>NDC(9)：778.77</li></ul>]]></description>
      <author>山本／泰一郎,山本泰一郎 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000038-I4452682</guid>
      <pubDate>Thu, 26 Dec 2024 09:00:00 +0900</pubDate>
      <dc:title>［シネマ・デイジー］劇場版　名探偵コナン　銀翼の奇術師</dc:title>
      <dcndl:titleTranscription>シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　ギンヨク　ノ　マジシャン</dcndl:titleTranscription>
      <dc:creator>山本／泰一郎</dc:creator>
      <dcndl:creatorTranscription>ヤマモト，ヤスイチロウ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>劇場版 : ８</dcndl:seriesTitle>
      <dc:publisher>ビーヴィジョン</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2011-02</dc:date>
      <dcterms:issued>2011年2月</dcterms:issued>
      <dc:extent>1巻 (1時間51分)</dc:extent>
      <dc:subject xsi:type="dcndl:NDC9">778.77</dc:subject>
      <dc:description>DAISY version:２．０２</dc:description>
      <dc:description>音声圧縮形式:ＭＰ３</dc:description>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=4452682"/>
      <dc:description> 2011-02</dc:description>
    </item>
    <item>
      <title>［シネマ・デイジー］劇場版　名探偵コナン　水平線上の陰謀（ストラテジー）</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000038-I4474327</link>
      <description><![CDATA[<p>ビーヴィジョン,2011-02,<p><ul><li>タイトル：［シネマ・デイジー］劇場版　名探偵コナン　水平線上の陰謀（ストラテジー）</li><li>タイトル（読み）：シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　スイヘイセンジョウ　ノ　ストラテジー</li><li>責任表示：山本泰一郎 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</li><li>シリーズ名：劇場版 : ９</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author>山本／泰一郎,山本泰一郎 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000038-I4474327</guid>
      <pubDate>Wed, 19 Oct 2022 09:00:00 +0900</pubDate>
      <dc:title>［シネマ・デイジー］劇場版　名探偵コナン　水平線上の陰謀（ストラテジー）</dc:title>
      <dcndl:titleTranscription>シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　スイヘイセンジョウ　ノ　ストラテジー</dcndl:titleTranscription>
      <dc:creator>山本／泰一郎</dc:creator>
      <dcndl:creatorTranscription>ヤマモト，ヤスイチロウ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>劇場版 : ９</dcndl:seriesTitle>
      <dc:publisher>ビーヴィジョン</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2011-02</dc:date>
      <dcterms:issued>2011年2月</dcterms:issued>
      <dc:extent>1巻 (1時間53分)</dc:extent>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <dc:description>DAISY version:２．０２</dc:description>
      <dc:description>音声圧縮形式:ＭＰ３</dc:description>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=4474327"/>
      <dc:description> 2011-02</dc:description>
    </item>
    <item>
      <title>［シネマ・デイジー］劇場版　名探偵コナン　探偵たちの鎮魂歌</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000038-I4474337</link>
      <description><![CDATA[<p>ビーヴィジョン,2011-02,<p><ul><li>タイトル：［シネマ・デイジー］劇場版　名探偵コナン　探偵たちの鎮魂歌</li><li>タイトル（読み）：シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　タンテイタチ　ノ　レクイエム</li><li>責任表示：山本泰一郎 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</li><li>シリーズ名：劇場版 : １０</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author>山本／泰一郎,山本泰一郎 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000038-I4474337</guid>
      <pubDate>Thu, 26 Dec 2024 09:00:00 +0900</pubDate>
      <dc:title>［シネマ・デイジー］劇場版　名探偵コナン　探偵たちの鎮魂歌</dc:title>
      <dcndl:titleTranscription>シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　タンテイタチ　ノ　レクイエム</dcndl:titleTranscription>
      <dc:creator>山本／泰一郎</dc:creator>
      <dcndl:creatorTranscription>ヤマモト，ヤスイチロウ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>劇場版 : １０</dcndl:seriesTitle>
      <dc:publisher>ビーヴィジョン</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2011-02</dc:date>
      <dcterms:issued>2011年2月</dcterms:issued>
      <dc:extent>1巻 (1時間56分)</dc:extent>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <dc:description>DAISY version:２．０２</dc:description>
      <dc:description>音声圧縮形式:ＭＰ３</dc:description>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=4474337"/>
      <dc:description> 2011-02</dc:description>
    </item>
    <item>
      <title>［シネマ・デイジー］劇場版　名探偵コナン　紺碧の棺（ジョリー・ロジャー）</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000038-I4512542</link>
      <description><![CDATA[<p>ビーヴィジョン,2007-11,<p><ul><li>タイトル：［シネマ・デイジー］劇場版　名探偵コナン　紺碧の棺（ジョリー・ロジャー）</li><li>タイトル（読み）：シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　コンペキ　ノ　ジョリー　ロジャー</li><li>責任表示：山本泰一郎 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</li><li>シリーズ名：劇場版 : １１</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author>山本／泰一郎,山本泰一郎 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000038-I4512542</guid>
      <pubDate>Thu, 26 Dec 2024 09:00:00 +0900</pubDate>
      <dc:title>［シネマ・デイジー］劇場版　名探偵コナン　紺碧の棺（ジョリー・ロジャー）</dc:title>
      <dcndl:titleTranscription>シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　コンペキ　ノ　ジョリー　ロジャー</dcndl:titleTranscription>
      <dc:creator>山本／泰一郎</dc:creator>
      <dcndl:creatorTranscription>ヤマモト，ヤスイチロウ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>劇場版 : １１</dcndl:seriesTitle>
      <dc:publisher>ビーヴィジョン</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2007-11</dc:date>
      <dcterms:issued>2007年11月</dcterms:issued>
      <dc:extent>1巻 (1時間49分)</dc:extent>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <dc:description>DAISY version:２．０２</dc:description>
      <dc:description>音声圧縮形式:ＭＰ３</dc:description>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=4512542"/>
      <dc:description> 2007-11</dc:description>
    </item>
    <item>
      <title>［シネマ・デイジー］劇場版　名探偵コナン　戦慄の楽譜（フルスコア）</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000038-I4512549</link>
      <description><![CDATA[<p>ビーヴィジョン,2008-11,<p><ul><li>タイトル：［シネマ・デイジー］劇場版　名探偵コナン　戦慄の楽譜（フルスコア）</li><li>タイトル（読み）：シネマ　デイジー　ゲキジョウバン　メイタンテイ　コナン　センリツ　ノ　フルスコア</li><li>責任表示：山本泰一郎 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</li><li>シリーズ名：劇場版 : １２</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author>山本／泰一郎,山本泰一郎 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000038-I4512549</guid>
      <pubDate>Thu, 26 Dec 2024 09:00:00 +0900</pubDate>
      <dc:title>［シネマ・デイジー］劇場版　名探偵コナン　戦慄の楽譜（フルスコア）</dc:title>
      <dcndl:titleTranscription>シネマ　デイジー　ゲキジョウバン　メイタンテイ　コナン　センリツ　ノ　フルスコア</dcndl:titleTranscription>
      <dc:creator>山本／泰一郎</dc:creator>
      <dcndl:creatorTranscription>ヤマモト，ヤスイチロウ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>劇場版 : １２</dcndl:seriesTitle>
      <dc:publisher>ビーヴィジョン</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2008-11</dc:date>
      <dcterms:issued>2008年11月</dcterms:issued>
      <dc:extent>1巻 (1時間59分)</dc:extent>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <dc:description>DAISY version:２．０２</dc:description>
      <dc:description>音声圧縮形式:ＭＰ３</dc:description>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=4512549"/>
      <dc:description> 2008-11</dc:description>
    </item>
    <item>
      <title>［シネマ・デイジー］劇場版　名探偵コナン　天空の難破船（ロスト・シップ）</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000038-I4582663</link>
      <description><![CDATA[<p>ビーヴィジョン,2010-11,<p><ul><li>タイトル：［シネマ・デイジー］劇場版　名探偵コナン　天空の難破船（ロスト・シップ）</li><li>タイトル（読み）：シネマ　デイジー　ゲキジョウバン　メイタンテイ　コナン　テンクウ　ノ　ロスト　シップ</li><li>責任表示：山本泰一郎 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</li><li>シリーズ名：劇場版 : １４</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author>山本／泰一郎,山本泰一郎 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000038-I4582663</guid>
      <pubDate>Thu, 26 Dec 2024 09:00:00 +0900</pubDate>
      <dc:title>［シネマ・デイジー］劇場版　名探偵コナン　天空の難破船（ロスト・シップ）</dc:title>
      <dcndl:titleTranscription>シネマ　デイジー　ゲキジョウバン　メイタンテイ　コナン　テンクウ　ノ　ロスト　シップ</dcndl:titleTranscription>
      <dc:creator>山本／泰一郎</dc:creator>
      <dcndl:creatorTranscription>ヤマモト，ヤスイチロウ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>劇場版 : １４</dcndl:seriesTitle>
      <dc:publisher>ビーヴィジョン</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2010-11</dc:date>
      <dcterms:issued>2010年11月</dcterms:issued>
      <dc:extent>1巻 (1時間45分)</dc:extent>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <dc:description>DAISY version:２．０２</dc:description>
      <dc:description>音声圧縮形式:ＭＰ３</dc:description>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=4582663"/>
      <dc:description> 2010-11</dc:description>
    </item>
    <item>
      <title>［シネマ・デイジー］劇場版　名探偵コナン　沈黙の１５分（クォーター）</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000038-I4582664</link>
      <description><![CDATA[<p>ビーヴィジョン,2011-11,<p><ul><li>タイトル：［シネマ・デイジー］劇場版　名探偵コナン　沈黙の１５分（クォーター）</li><li>タイトル（読み）：シネマ　デイジー　ゲキジョウバン　メイタンテイ　コナン　チンモク　ノ　クォーター</li><li>責任表示：山本泰一郎 総監督,静野孔文 監督,高山みなみ 〔ほか〕出演</li><li>シリーズ名：劇場版 : １５</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author>山本／泰一郎,しずの／こうぶん,山本泰一郎 総監督,静野孔文 監督,高山みなみ 〔ほか〕出演</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000038-I4582664</guid>
      <pubDate>Thu, 26 Dec 2024 09:00:00 +0900</pubDate>
      <dc:title>［シネマ・デイジー］劇場版　名探偵コナン　沈黙の１５分（クォーター）</dc:title>
      <dcndl:titleTranscription>シネマ　デイジー　ゲキジョウバン　メイタンテイ　コナン　チンモク　ノ　クォーター</dcndl:titleTranscription>
      <dc:creator>山本／泰一郎</dc:creator>
      <dc:creator>しずの／こうぶん</dc:creator>
      <dcndl:creatorTranscription>ヤマモト，ヤスイチロウ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>劇場版 : １５</dcndl:seriesTitle>
      <dc:publisher>ビーヴィジョン</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2011-11</dc:date>
      <dcterms:issued>2011年11月</dcterms:issued>
      <dc:extent>1巻 (1時間52分)</dc:extent>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <dc:description>DAISY version:２．０２</dc:description>
      <dc:description>音声圧縮形式:ＭＰ３</dc:description>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=4582664"/>
      <dc:description> 2011-11</dc:description>
    </item>
    <item>
      <title>［シネマ・デイジー］劇場版　名探偵コナン　１１人目のストライカー</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000038-I4700908</link>
      <description><![CDATA[<p>ビーヴィジョン,2012-11,<p><ul><li>タイトル：［シネマ・デイジー］劇場版　名探偵コナン　１１人目のストライカー</li><li>タイトル（読み）：シネマ　デイジー　ゲキジョウバン　メイタンテイ　コナン　ジュウイチニンメ　ノ　ストライカー</li><li>責任表示：山本泰一郎 総監督,静野孔文 監督,高山みなみ 〔ほか〕出演</li><li>シリーズ名：劇場版 : １６</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author>山本／泰一郎,しずの／こうぶん,山本泰一郎 総監督,静野孔文 監督,高山みなみ 〔ほか〕出演</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000038-I4700908</guid>
      <pubDate>Thu, 26 Dec 2024 09:00:00 +0900</pubDate>
      <dc:title>［シネマ・デイジー］劇場版　名探偵コナン　１１人目のストライカー</dc:title>
      <dcndl:titleTranscription>シネマ　デイジー　ゲキジョウバン　メイタンテイ　コナン　ジュウイチニンメ　ノ　ストライカー</dcndl:titleTranscription>
      <dc:creator>山本／泰一郎</dc:creator>
      <dc:creator>しずの／こうぶん</dc:creator>
      <dcndl:creatorTranscription>ヤマモト，ヤスイチロウ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>劇場版 : １６</dcndl:seriesTitle>
      <dc:publisher>ビーヴィジョン</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2012-11</dc:date>
      <dcterms:issued>2012年11月</dcterms:issued>
      <dc:extent>1巻 (1時間53分)</dc:extent>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <dc:description>DAISY version:２．０２</dc:description>
      <dc:description>音声圧縮形式:ＭＰ３</dc:description>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=4700908"/>
      <dc:description> 2012-11</dc:description>
    </item>
    <item>
      <title>［シネマ・デイジー］劇場版　名探偵コナン　絶海の探偵（プライベート・アイ）</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000038-I4730432</link>
      <description><![CDATA[<p>ビーイング,2013-10,<p><ul><li>タイトル：［シネマ・デイジー］劇場版　名探偵コナン　絶海の探偵（プライベート・アイ）</li><li>タイトル（読み）：シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　ゼッカイ　ノ　プライベート・アイ</li><li>責任表示：静野孔文 監督,櫻井武晴 脚本,青山剛昌 原作,高山みなみ ［ほか］出演</li><li>シリーズ名：劇場版 : １７</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author>しずの／こうぶん,櫻井，武晴,青山／剛昌,高山／みなみ,静野孔文 監督,櫻井武晴 脚本,青山剛昌 原作,高山みなみ ［ほか］出演</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000038-I4730432</guid>
      <pubDate>Thu, 26 Dec 2024 09:00:00 +0900</pubDate>
      <dc:title>［シネマ・デイジー］劇場版　名探偵コナン　絶海の探偵（プライベート・アイ）</dc:title>
      <dcndl:titleTranscription>シネマ　デイジー　ゲキジョウバン　メイタンテイコナン　ゼッカイ　ノ　プライベート・アイ</dcndl:titleTranscription>
      <dc:creator>しずの／こうぶん</dc:creator>
      <dc:creator>櫻井，武晴</dc:creator>
      <dc:creator>青山／剛昌</dc:creator>
      <dc:creator>高山／みなみ</dc:creator>
      <dcndl:creatorTranscription>サクライ，タケハル</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アオヤマ，ゴウショウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>タカヤマ，ミナミ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>劇場版 : １７</dcndl:seriesTitle>
      <dc:publisher>ビーイング</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2013-10</dc:date>
      <dcterms:issued>2013年10月</dcterms:issued>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <dc:description>DAISY version:２．０２</dc:description>
      <dc:description>音声圧縮形式:ＭＰ３</dc:description>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=4730432"/>
      <dc:description> 2013-10</dc:description>
    </item>
    <item>
      <title>［シネマ・デイジー］劇場版　名探偵コナン　漆黒の追跡者（チェイサー）</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000038-I4582658</link>
      <description><![CDATA[<p>ビーヴィジョン,2009-11,<p><ul><li>タイトル：［シネマ・デイジー］劇場版　名探偵コナン　漆黒の追跡者（チェイサー）</li><li>タイトル（読み）：シネマ　デイジー　ゲキジョウバン　メイタンテンテイ　コナン　シッコク　ノ　チェイサー</li><li>責任表示：こだま兼嗣 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</li><li>シリーズ名：劇場版 : １３</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author>こだま／兼嗣,こだま兼嗣 監督,高山みなみ 出演,山崎和佳奈 〔ほか〕出演</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000038-I4582658</guid>
      <pubDate>Thu, 26 Dec 2024 09:00:00 +0900</pubDate>
      <dc:title>［シネマ・デイジー］劇場版　名探偵コナン　漆黒の追跡者（チェイサー）</dc:title>
      <dcndl:titleTranscription>シネマ　デイジー　ゲキジョウバン　メイタンテンテイ　コナン　シッコク　ノ　チェイサー</dcndl:titleTranscription>
      <dc:creator>こだま／兼嗣</dc:creator>
      <dcndl:creatorTranscription>コダマ，ケンジ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>劇場版 : １３</dcndl:seriesTitle>
      <dc:publisher>ビーヴィジョン</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2009-11</dc:date>
      <dcterms:issued>2009年11月</dcterms:issued>
      <dc:extent>1巻 (1時間54分)</dc:extent>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <dc:description>DAISY version:２．０２</dc:description>
      <dc:description>音声圧縮形式:ＭＰ３</dc:description>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=4582658"/>
      <dc:description> 2009-11</dc:description>
    </item>
    <item>
      <title>［シネマ・デイジー］ルパン三世ｖｓ名探偵コナンＴＨＥ　ＭＯＶＩＥ</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000038-I4734707</link>
      <description><![CDATA[<p>バップ,2014-06,<p><ul><li>タイトル：［シネマ・デイジー］ルパン三世ｖｓ名探偵コナンＴＨＥ　ＭＯＶＩＥ</li><li>タイトル（読み）：シネマ　デイジー　ルパン　サンセイ　ヴイエス　メイタンテイ　コナン　ザ　ムーヴィー</li><li>責任表示：モンキー・パンチ 原作,青山剛昌 原作,亀垣一 監督,前川淳 脚本</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author>モンキー・パンチ,青山／剛昌,モンキー・パンチ 原作,青山剛昌 原作,亀垣一 監督,前川淳 脚本</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000038-I4734707</guid>
      <pubDate>Thu, 26 Dec 2024 09:00:00 +0900</pubDate>
      <dc:title>［シネマ・デイジー］ルパン三世ｖｓ名探偵コナンＴＨＥ　ＭＯＶＩＥ</dc:title>
      <dcndl:titleTranscription>シネマ　デイジー　ルパン　サンセイ　ヴイエス　メイタンテイ　コナン　ザ　ムーヴィー</dcndl:titleTranscription>
      <dc:creator>モンキー・パンチ</dc:creator>
      <dc:creator>青山／剛昌</dc:creator>
      <dcndl:creatorTranscription>モンキー　パンチ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アオヤマ，ゴウショウ</dcndl:creatorTranscription>
      <dc:publisher>バップ</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2014-06</dc:date>
      <dcterms:issued>2014年6月</dcterms:issued>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=4734707"/>
      <dc:description> 2014-06</dc:description>
    </item>
    <item>
      <title>［シネマ・デイジー］ルパン三世ｖｓ名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000038-I4753191</link>
      <description><![CDATA[<p>バップ,2009-07,<p><ul><li>タイトル：［シネマ・デイジー］ルパン三世ｖｓ名探偵コナン</li><li>タイトル（読み）：シネマ　デイジー　ルパン　サンセイ　ヴイエス　メイタンテイ　コナン</li><li>責任表示：モンキー・パンチ 原作,青山剛昌 原作,亀垣一 監督,前川淳 脚本</li><li>NDC(10)：778.77</li></ul>]]></description>
      <author>モンキー・パンチ,青山／剛昌,モンキー・パンチ 原作,青山剛昌 原作,亀垣一 監督,前川淳 脚本</author>
      <category>図書</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000038-I4753191</guid>
      <pubDate>Tue, 18 Feb 2025 09:00:00 +0900</pubDate>
      <dc:title>［シネマ・デイジー］ルパン三世ｖｓ名探偵コナン</dc:title>
      <dcndl:titleTranscription>シネマ　デイジー　ルパン　サンセイ　ヴイエス　メイタンテイ　コナン</dcndl:titleTranscription>
      <dc:creator>モンキー・パンチ</dc:creator>
      <dc:creator>青山／剛昌</dc:creator>
      <dcndl:creatorTranscription>モンキー　パンチ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アオヤマ，ゴウショウ</dcndl:creatorTranscription>
      <dc:publisher>バップ</dc:publisher>
      <dc:date xsi:type="dcterms:W3CDTF">2009-07</dc:date>
      <dcterms:issued>2009年7月</dcterms:issued>
      <dc:subject xsi:type="dcndl:NDC10">778.77</dc:subject>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=4753191"/>
      <dc:description> 2009-07</dc:description>
    </item>
    <item>
      <title>週刊少年マンガ誌･風雲五五年史</title>
      <link>https://ndlsearch.ndl.go.jp/books/R000000004-I026576087</link>
      <description><![CDATA[<p><p><ul><li>タイトル：週刊少年マンガ誌･風雲五五年史</li><li>タイトル（読み）：シュウカン ショウネン マンガシ ・ フウウン ゴゴネンシ</li><li>責任表示：斎藤 宣彦</li><li>シリーズ名：特集 週刊少年サンデーの時代 : トキワ荘から『うる星やつら』『タッチ』『名探偵コナン』そして『マギ』『銀の匙』へ : マンガの青春は終わらない</li><li>シリーズ名（読み）：トクシュウ シュウカン ショウネン サンデー ノ ジダイ : トキワソウ カラ 『 ウル ホシ ヤツラ 』 『 タッチ 』 『 メイ タンテイ コナン 』 ソシテ 『 マギ 』 『 ギン ノ サジ 』 エ : マンガ ノ セイシュン ワ オワラナイ</li></ul>]]></description>
      <author>斎藤 宣彦,斎藤 宣彦</author>
      <category>記事</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R000000004-I026576087</guid>
      <pubDate>Wed, 26 Jun 2024 20:40:53 +0900</pubDate>
      <dc:title>週刊少年マンガ誌･風雲五五年史</dc:title>
      <dcndl:titleTranscription>シュウカン ショウネン マンガシ ・ フウウン ゴゴネンシ</dcndl:titleTranscription>
      <dc:creator>斎藤 宣彦</dc:creator>
      <dcndl:seriesTitle>特集 週刊少年サンデーの時代 : トキワ荘から『うる星やつら』『タッチ』『名探偵コナン』そして『マギ』『銀の匙』へ : マンガの青春は終わらない</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>トクシュウ シュウカン ショウネン サンデー ノ ジダイ : トキワソウ カラ 『 ウル ホシ ヤツラ 』 『 タッチ 』 『 メイ タンテイ コナン 』 ソシテ 『 マギ 』 『 ギン ノ サジ 』 エ : マンガ ノ セイシュン ワ オワラナイ</dcndl:seriesTitleTranscription>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:identifier xsi:type="dcndl:NDLBibID">026576087</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">ZK24</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R000000004-I026576087"/>
      <rdfs:seeAlso rdf:resource="https://cir.nii.ac.jp/crid/1521980703390853120"/>
      <dc:description>掲載誌：ユリイカ = Eureka 3(通号 641) p.101-109</dc:description>
    </item>
    <item>
      <title>主張を受け入れさせるモダリティ表現 : 『名探偵コナン』を題材に</title>
      <link>https://ndlsearch.ndl.go.jp/books/R000000004-I025690863</link>
      <description><![CDATA[<p><p><ul><li>タイトル：主張を受け入れさせるモダリティ表現 : 『名探偵コナン』を題材に</li><li>タイトル（読み）：シュチョウ オ ウケイレサセル モダリティ ヒョウゲン : 『 メイ タンテイ コナン 』 オ ダイザイ ニ</li><li>責任表示：河野 波子</li></ul>]]></description>
      <author>河野 波子,河野 波子</author>
      <category>記事</category>
      <category>デジタル</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R000000004-I025690863</guid>
      <pubDate>Tue, 26 Aug 2014 01:15:16 +0900</pubDate>
      <dc:title>主張を受け入れさせるモダリティ表現 : 『名探偵コナン』を題材に</dc:title>
      <dcndl:titleTranscription>シュチョウ オ ウケイレサセル モダリティ ヒョウゲン : 『 メイ タンテイ コナン 』 オ ダイザイ ニ</dcndl:titleTranscription>
      <dc:creator>河野 波子</dc:creator>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:identifier xsi:type="dcndl:NDLBibID">025690863</dc:identifier>
      <dc:subject>主張</dc:subject>
      <dc:subject xsi:type="dcndl:NDLC">ZV1</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R000000004-I025690863"/>
      <rdfs:seeAlso rdf:resource="https://cir.nii.ac.jp/crid/1520009409098438144"/>
      <dc:description>掲載誌：人間文化 = Humanities and sciences : H&amp;S / 神戸学院大学人文学会 編 34 p.85-92</dc:description>
    </item>
    <item>
      <title>小学館ジュニア文庫 名探偵コナン 長野県警セレクション 宿命の三人組</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000137-I092315080000d0000000</link>
      <description><![CDATA[<p><p><ul><li>タイトル：小学館ジュニア文庫 名探偵コナン 長野県警セレクション 宿命の三人組</li><li>タイトル（読み）：ショウガクカンジュニアブンコメイタンテイコナンナガノケンケイセレクションシュクメイノトリオ</li><li>責任表示：酒井匙 著・文・その他,青山剛昌 イラスト,青山剛昌 原著</li><li>シリーズ名：小学館ジュニア文庫</li><li>シリーズ名（読み）：ショウガクカンジュニアブンコ</li></ul>]]></description>
      <author>酒井匙,青山剛昌,酒井匙 著・文・その他,青山剛昌 イラスト,青山剛昌 原著</author>
      <category>図書</category>
      <category>電子書籍・電子雑誌</category>
      <category>デジタル</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000137-I092315080000d0000000</guid>
      <pubDate>Sun, 13 Apr 2025 18:47:00 +0900</pubDate>
      <dc:title>小学館ジュニア文庫 名探偵コナン 長野県警セレクション 宿命の三人組</dc:title>
      <dcndl:titleTranscription>ショウガクカンジュニアブンコメイタンテイコナンナガノケンケイセレクションシュクメイノトリオ</dcndl:titleTranscription>
      <dc:creator>酒井匙</dc:creator>
      <dc:creator>青山剛昌</dc:creator>
      <dcndl:creatorTranscription>サカイサジ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アオヤマゴウショウ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>小学館ジュニア文庫</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクカンジュニアブンコ</dcndl:seriesTitleTranscription>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:subject>名探偵コナンサンデー</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/092315080000d0000000"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784092315082"/>
      <dc:description/>
    </item>
    <item>
      <title>小学生にもとれる!資格・検定カタログ</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I030075039</link>
      <description><![CDATA[<p>小学館,2019,978-4-09-227313-9<p><ul><li>タイトル：小学生にもとれる!資格・検定カタログ</li><li>タイトル（読み）：ショウガクセイ ニモ トレル シカク ケンテイ カタログ</li><li>責任表示：鈴木秀明 監修</li><li>シリーズ名：小学生のミカタ</li><li>シリーズ名（読み）：ショウガクセイ ノ ミカタ</li><li>NDC(10)：366.29</li></ul>]]></description>
      <author>鈴木, 秀明, 1981-,鈴木秀明 監修</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I030075039</guid>
      <pubDate>Mon, 16 May 2022 19:16:55 +0900</pubDate>
      <dc:title>小学生にもとれる!資格・検定カタログ</dc:title>
      <dcndl:titleTranscription>ショウガクセイ ニモ トレル シカク ケンテイ カタログ</dcndl:titleTranscription>
      <dc:creator>鈴木, 秀明, 1981-</dc:creator>
      <dcndl:creatorTranscription>スズキ, ヒデアキ, 1981-</dcndl:creatorTranscription>
      <dcndl:seriesTitle>小学生のミカタ</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクセイ ノ ミカタ</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2019</dc:date>
      <dcterms:issued>2019.12</dcterms:issued>
      <dcndl:price>900円</dcndl:price>
      <dc:extent>159p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-227313-9</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">030075039</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23305482</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">34002674</dc:identifier>
      <dc:subject>資格制度</dc:subject>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y1</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">366.29</dc:subject>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.hokkaido.jp/wo/opc/srh/"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1008001434181"/>
      <rdfs:seeAlso rdf:resource="https://www.plib.pref.aomori.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1104121894"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.miyagi.jp/wo/opc_srh/srh_detail/1101178139/"/>
      <rdfs:seeAlso rdf:resource="https://opac.library.fcs.ed.jp/winj/opac/switch-detail-iccap.do?bibid=1103648576"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.pref.ibaraki.jp/licsxp-kopac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1003000488860"/>
      <rdfs:seeAlso rdf:resource="https://www1.library.pref.gunma.jp/winj/opac/switch-detail-iccap.do?bibid=1110753877"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://catalog.library.metro.tokyo.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1153467286"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=3313495&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.sagamihara.kanagawa.jp/TOSHOW/asp/WwShousaiKen.aspx?FCode=2429513"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.ishikawa.lg.jp/wo/opc_srh/srh_detail/1000001278879/"/>
      <rdfs:seeAlso rdf:resource="https://www.library-archives.pref.fukui.lg.jp/wo/opc_srh/srh_detail/1000054417/"/>
      <rdfs:seeAlso rdf:resource="https://www.tosyokan.pref.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1006000431884"/>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001103646128"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.nagoya.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001910087580"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bib/?B13758133"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0014782056"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1007000986180"/>
      <rdfs:seeAlso rdf:resource="http://www.lib.wakayama-c.ed.jp/winj/opac/switch-detail-iccap.do?bibid=1120085142"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009812360622"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1110384660"/>
      <rdfs:seeAlso rdf:resource="https://alislibopac.bunmori.tokushima.jp/winj/opac/switch-detail-iccap.do?bibid=1110414735"/>
      <rdfs:seeAlso rdf:resource="https://opac.library.kochi.jp/winj/opac/switch-detail-iccap.do?bibid=1120426662"/>
      <rdfs:seeAlso rdf:resource="http://www.lib.pref.fukuoka.jp/winj/opac/switch-detail-iccap.do?bibid=1111580972"/>
      <rdfs:seeAlso rdf:resource="https://opac.toshokan.city.fukuoka.lg.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www2.tosyo-saga.jp/kentosyo2/opac/switch-detail-iccap.do?bibid=1102245963"/>
      <rdfs:seeAlso rdf:resource="https://opac.miraionlibrary.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000002807347"/>
      <rdfs:seeAlso rdf:resource="https://www2.library.pref.kagoshima.jp/kento/opac/switch-detail-iccap.do?bibid=1111883867"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I030075039"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B13758133"/>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BC10656018"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/092273130000d0000000"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784092273139"/>
      <dc:description> 2019</dc:description>
    </item>
    <item>
      <title>小学校行事★放送用音楽集</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I030179427</link>
      <description><![CDATA[<p>運動会の音楽,日本コロムビア,2020,<p><ul><li>タイトル：小学校行事★放送用音楽集</li><li>タイトル（読み）：ショウガッコウ ギョウジ ホウソウヨウ オンガクシュウ</li><li>責任表示：石上則子 監修</li></ul>]]></description>
      <author>石上則子 監修</author>
      <category>録音資料</category>
      <category>記録メディア</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I030179427</guid>
      <pubDate>Thu, 17 Dec 2020 20:28:10 +0900</pubDate>
      <dc:title>小学校行事★放送用音楽集</dc:title>
      <dcndl:titleTranscription>ショウガッコウ ギョウジ ホウソウヨウ オンガクシュウ</dcndl:titleTranscription>
      <dcndl:volume>運動会の音楽</dcndl:volume>
      <dc:publisher>日本コロムビア</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2020</dc:date>
      <dcterms:issued>2020.3</dcterms:issued>
      <dcndl:price>6000円</dcndl:price>
      <dc:extent>録音ディスク 2枚 (139分)</dc:extent>
      <dc:identifier xsi:type="dcndl:RIS502">COCE-41041</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">030179427</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">23466828</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">YMC11</dc:subject>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I030179427"/>
      <dc:description> 2020</dc:description>
    </item>
    <item>
      <title>小説名探偵コナン : 江神原の魔女</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000009433147</link>
      <description><![CDATA[<p>小学館,2008,978-4-09-121426-3<p><ul><li>タイトル：小説名探偵コナン : 江神原の魔女</li><li>タイトル（読み）：ショウセツ メイタンテイ コナン : エジンバラ ノ ウィッチ</li><li>責任表示：青山剛昌 原作,平良隆久 小説</li><li>シリーズ名：少年サンデーコミックススペシャル</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル</li><li>NDC(9)：913.6</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,平良, 隆久,青山剛昌 原作,平良隆久 小説</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000009433147</guid>
      <pubDate>Tue, 2 Sep 2008 19:55:12 +0900</pubDate>
      <dc:title>小説名探偵コナン : 江神原の魔女</dc:title>
      <dcndl:titleTranscription>ショウセツ メイタンテイ コナン : エジンバラ ノ ウィッチ</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>平良, 隆久</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>タイラ, タカヒサ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2008</dc:date>
      <dcterms:issued>2008.7</dcterms:issued>
      <dcndl:price>686円</dcndl:price>
      <dc:extent>265p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-121426-3</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000009433147</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">21464089</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">KH582</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">913.6</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1008000073005"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://opac.lib.city.yokohama.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1108051538"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=1772093&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001101504235"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0011687297"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000800377704"/>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.tottori.jp/winj/opac/switch-detail-iccap.do?bibid=1101520450"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009811108849"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1103010043"/>
      <rdfs:seeAlso rdf:resource="https://alislibopac.bunmori.tokushima.jp/winj/opac/switch-detail-iccap.do?bibid=1102771660"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000009433147"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=1389765"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=1464902"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=1464903"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16476659"/>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BC14481255"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784091214263"/>
      <dc:description> 2008</dc:description>
    </item>
    <item>
      <title>小説名探偵コナンから紅の恋歌(ラブレター)</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I028649976</link>
      <description><![CDATA[<p>小学館,2017,978-4-09-406483-4<p><ul><li>タイトル：小説名探偵コナンから紅の恋歌(ラブレター)</li><li>タイトル（読み）：ショウセツ メイタンテイ コナン カラクレナイ ノ ラブ レター</li><li>責任表示：青山剛昌 原作,大倉崇裕 著</li><li>シリーズ名：小学館文庫 ; お14-1</li><li>シリーズ名（読み）：ショウガクカン ブンコ ; オ-14-1</li><li>NDC(10)：913.6</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,大倉, 崇裕, 1968-,青山剛昌 原作,大倉崇裕 著</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I028649976</guid>
      <pubDate>Fri, 22 Dec 2017 20:21:39 +0900</pubDate>
      <dc:title>小説名探偵コナンから紅の恋歌(ラブレター)</dc:title>
      <dcndl:titleTranscription>ショウセツ メイタンテイ コナン カラクレナイ ノ ラブ レター</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>大倉, 崇裕, 1968-</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>オオクラ, タカヒロ, 1968-</dcndl:creatorTranscription>
      <dcndl:seriesTitle>小学館文庫 ; お14-1</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクカン ブンコ ; オ-14-1</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2017</dc:date>
      <dcterms:issued>2017.12</dcterms:issued>
      <dcndl:price>600円</dcndl:price>
      <dc:extent>280p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-406483-4</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">028649976</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22986219</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">33692014</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">KH897</dc:subject>
      <dc:subject xsi:type="dcndl:NDC10">913.6</dc:subject>
      <rdfs:seeAlso rdf:resource="https://opac.lib.city.yokohama.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1113545508"/>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001103474226"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0014415305"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1007000787942"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009812174420"/>
      <rdfs:seeAlso rdf:resource="https://opac.miraionlibrary.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000002620675"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.okinawa.jp/winj/opac/switch-detail-iccap.do?bibid=1101484729"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I028649976"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=3832313"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=3839647"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B13509145"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784094064834"/>
      <dc:description> 2017</dc:description>
    </item>
    <item>
      <title>小説名探偵コナン : 工藤新一の復活!黒の組織との対決</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000009214083</link>
      <description><![CDATA[<p>特別編,小学館,2007,978-4-09-121255-9<p><ul><li>タイトル：小説名探偵コナン : 工藤新一の復活!黒の組織との対決</li><li>タイトル（読み）：ショウセツ メイタンテイ コナン : クドウ シンイチ ノ フッカツ クロ ノ ソシキ トノ コンフロンティション</li><li>責任表示：青山剛昌 原作,渡邉睦月 テレビシナリオ,平良隆久 小説</li><li>シリーズ名：少年サンデーコミックススペシャル</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル</li><li>NDC(9)：913.6</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,渡邊, 睦月,平良, 隆久,青山剛昌 原作,渡邉睦月 テレビシナリオ,平良隆久 小説</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000009214083</guid>
      <pubDate>Fri, 25 Jan 2008 18:44:31 +0900</pubDate>
      <dc:title>小説名探偵コナン : 工藤新一の復活!黒の組織との対決</dc:title>
      <dcndl:titleTranscription>ショウセツ メイタンテイ コナン : クドウ シンイチ ノ フッカツ クロ ノ ソシキ トノ コンフロンティション</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>渡邊, 睦月</dc:creator>
      <dc:creator>平良, 隆久</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ワタナベ, ムツキ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>タイラ, タカヒサ</dcndl:creatorTranscription>
      <dcndl:volume>特別編</dcndl:volume>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2007</dc:date>
      <dcterms:issued>2007.12</dcterms:issued>
      <dcndl:price>686円</dcndl:price>
      <dc:extent>229p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-121255-9</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000009214083</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">21350977</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">KH582</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">913.6</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1008000095261"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://opac.lib.city.yokohama.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1107095454"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=1793256&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001101525334"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0011576598"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009811128549"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1103037093"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000009214083"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=1432325"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=3307684"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784091212559"/>
      <dc:description> 2007</dc:description>
    </item>
    <item>
      <title>小説 名探偵コナン : 工藤新一の復活</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000128-IB16471086</link>
      <description><![CDATA[<p>特別編,小学館,2007,<p><ul><li>タイトル：小説 名探偵コナン : 工藤新一の復活</li><li>タイトル（読み）：ショウセツ メイタンテイ コナン : クドウ シンイチ ノ フッカツ</li><li>責任表示：青山剛昌∥原作,渡邉睦月∥テレビシナリオ,平良隆久∥小説,山【ぎし】栄一∥イラスト,伊波光司[ほか]∥カバーデザイン</li><li>シリーズ名：少年サンデーコミックススペシャル</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル</li></ul>]]></description>
      <author>青山/剛昌,渡邉/睦月,平良/隆久,山【ぎし】/栄一,伊波/光司[ほか],青山剛昌∥原作,渡邉睦月∥テレビシナリオ,平良隆久∥小説,山【ぎし】栄一∥イラスト,伊波光司[ほか]∥カバーデザイン</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000128-IB16471086</guid>
      <pubDate>Mon, 8 Apr 2024 08:00:00 +0900</pubDate>
      <dc:title>小説 名探偵コナン : 工藤新一の復活</dc:title>
      <dcndl:titleTranscription>ショウセツ メイタンテイ コナン : クドウ シンイチ ノ フッカツ</dcndl:titleTranscription>
      <dc:creator>青山/剛昌</dc:creator>
      <dc:creator>渡邉/睦月</dc:creator>
      <dc:creator>平良/隆久</dc:creator>
      <dc:creator>山【ぎし】/栄一</dc:creator>
      <dc:creator>伊波/光司[ほか]</dc:creator>
      <dcndl:creatorTranscription>アオヤマ ゴウショウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ワタナベ ムツキ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>タイラ タカヒサ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ヤマギシ エイイチ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>イナミ コウジ</dcndl:creatorTranscription>
      <dcndl:volume>特別編</dcndl:volume>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JA</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2007</dc:date>
      <dcterms:issued>2007.12</dcterms:issued>
      <dcndl:price>686円</dcndl:price>
      <dc:extent>229p ; 18×12cm</dc:extent>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16471086"/>
      <dc:description> 2007</dc:description>
    </item>
    <item>
      <title>小説 名探偵コナン : 工藤新一への挑戦状</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000128-IB16512423</link>
      <description><![CDATA[<p>特別編,小学館,2011,<p><ul><li>タイトル：小説 名探偵コナン : 工藤新一への挑戦状</li><li>タイトル（読み）：ショウセツ メイタンテイ コナン : クドウ シンイチ ヘ ノ チョウセンジョウ</li><li>責任表示：青山剛昌∥原作,秦建日子∥テレビシナリオ,平良隆久∥小説,阿部ゆたか∥イラスト,丸伝次郎∥イラスト</li><li>シリーズ名：少年サンデーコミックススペシャル</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル</li></ul>]]></description>
      <author>青山/剛昌,秦/建日子,平良/隆久,阿部/ゆたか,丸/伝次郎,青山剛昌∥原作,秦建日子∥テレビシナリオ,平良隆久∥小説,阿部ゆたか∥イラスト,丸伝次郎∥イラスト</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000128-IB16512423</guid>
      <pubDate>Mon, 8 Apr 2024 08:00:00 +0900</pubDate>
      <dc:title>小説 名探偵コナン : 工藤新一への挑戦状</dc:title>
      <dcndl:titleTranscription>ショウセツ メイタンテイ コナン : クドウ シンイチ ヘ ノ チョウセンジョウ</dcndl:titleTranscription>
      <dc:creator>青山/剛昌</dc:creator>
      <dc:creator>秦/建日子</dc:creator>
      <dc:creator>平良/隆久</dc:creator>
      <dc:creator>阿部/ゆたか</dc:creator>
      <dc:creator>丸/伝次郎</dc:creator>
      <dcndl:creatorTranscription>アオヤマ ゴウショウ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ハタ タケヒコ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>タイラ タカヒサ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アベ ユタカ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>マル デンジロウ</dcndl:creatorTranscription>
      <dcndl:volume>特別編</dcndl:volume>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JA</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2011</dc:date>
      <dcterms:issued>2011.4</dcterms:issued>
      <dcndl:price>686円</dcndl:price>
      <dc:extent>241p ; 18×12cm</dc:extent>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16512423"/>
      <dc:description> 2011</dc:description>
    </item>
    <item>
      <title>小説名探偵コナン : 甲州埋蔵金伝説</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000007698441</link>
      <description><![CDATA[<p>小学館,2005,4-09-121706-0<p><ul><li>タイトル：小説名探偵コナン : 甲州埋蔵金伝説</li><li>タイトル（読み）：ショウセツ メイタンテイ コナン : コウシュウ マイゾウキン デンセツ</li><li>責任表示：青山剛昌 原作,谷豊 小説・イラスト</li><li>シリーズ名：少年サンデーコミックススペシャル</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル</li><li>NDC(9)：913.6</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,谷, 豊, 1965-,青山剛昌 原作,谷豊 小説・イラスト</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000007698441</guid>
      <pubDate>Tue, 26 Apr 2005 20:13:12 +0900</pubDate>
      <dc:title>小説名探偵コナン : 甲州埋蔵金伝説</dc:title>
      <dcndl:titleTranscription>ショウセツ メイタンテイ コナン : コウシュウ マイゾウキン デンセツ</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>谷, 豊, 1965-</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>タニ, ユタカ, 1965-</dcndl:creatorTranscription>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2005</dc:date>
      <dcterms:issued>2005.5</dcterms:issued>
      <dcndl:price>686円</dcndl:price>
      <dc:extent>271p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">4-09-121706-0</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">4-09-121706-0</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000007698441</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">20762974</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">KH596</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">913.6</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://opac.lib.city.yokohama.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1105027288"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=464443&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0010988672"/>
      <rdfs:seeAlso rdf:resource="https://www.lib-sakai.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000500085137"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1102711994"/>
      <rdfs:seeAlso rdf:resource="https://alislibopac.bunmori.tokushima.jp/winj/opac/switch-detail-iccap.do?bibid=1102027128"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000007698441"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=1099094"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=1121361"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=1121362"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=1584181"/>
      <rdfs:seeAlso rdf:resource="https://mina.ndl.go.jp/books/R100000049-I000008112850"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16446274"/>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BA79649729"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784091217066"/>
      <dc:description> 2005</dc:description>
    </item>
    <item>
      <title>小説名探偵コナン : 殺人交響曲</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000008119485</link>
      <description><![CDATA[<p>小学館,2006,4-09-120308-6<p><ul><li>タイトル：小説名探偵コナン : 殺人交響曲</li><li>タイトル（読み）：ショウセツ メイタンテイ コナン : サツジン シンフォニー</li><li>責任表示：青山剛昌 原作,谷豊 小説・イラスト</li><li>シリーズ名：少年サンデーコミックススペシャル</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル</li><li>NDC(9)：913.6</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,谷, 豊, 1965-,青山剛昌 原作,谷豊 小説・イラスト</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000008119485</guid>
      <pubDate>Mon, 20 Mar 2006 20:48:44 +0900</pubDate>
      <dc:title>小説名探偵コナン : 殺人交響曲</dc:title>
      <dcndl:titleTranscription>ショウセツ メイタンテイ コナン : サツジン シンフォニー</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>谷, 豊, 1965-</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>タニ, ユタカ, 1965-</dcndl:creatorTranscription>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2006</dc:date>
      <dcterms:issued>2006.3</dcterms:issued>
      <dcndl:price>686円</dcndl:price>
      <dc:extent>245p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">4-09-120308-6</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">4-09-120308-6</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000008119485</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">20992443</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">KH596</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">913.6</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1006600321689"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://opac.lib.city.yokohama.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1106012243"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=560402&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0011175483"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009810856455"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1102785282"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000008119485"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=1118162"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=1118163"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=1516829"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16455146"/>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BC14481186"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784091203083"/>
      <dc:description> 2006</dc:description>
    </item>
    <item>
      <title>小説名探偵コナン : 特別編 : 工藤新一への挑戦状～さよならまでの序章</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000008318172</link>
      <description><![CDATA[<p>小学館,2006,4-09-120689-1<p><ul><li>タイトル：小説名探偵コナン : 特別編 : 工藤新一への挑戦状～さよならまでの序章</li><li>タイトル（読み）：ショウセツ メイタンテイ コナン : トクベツヘン : クドウ シンイチ エノ チョウセンジョウ サヨナラ マデノ プロローグ</li><li>責任表示：青山剛昌 原作,渡邉睦月 テレビシナリオ,平良隆久 小説</li><li>シリーズ名：少年サンデーコミックススペシャル</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル</li><li>NDC(9)：913.6</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,渡邊, 睦月,平良, 隆久,青山剛昌 原作,渡邉睦月 テレビシナリオ,平良隆久 小説</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000008318172</guid>
      <pubDate>Mon, 23 Oct 2006 19:34:40 +0900</pubDate>
      <dc:title>小説名探偵コナン : 特別編 : 工藤新一への挑戦状～さよならまでの序章</dc:title>
      <dcndl:titleTranscription>ショウセツ メイタンテイ コナン : トクベツヘン : クドウ シンイチ エノ チョウセンジョウ サヨナラ マデノ プロローグ</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>渡邊, 睦月</dc:creator>
      <dc:creator>平良, 隆久</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ワタナベ, ムツキ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>タイラ, タカヒサ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2006</dc:date>
      <dcterms:issued>2006.10</dcterms:issued>
      <dcndl:price>686円</dcndl:price>
      <dc:extent>248p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">4-09-120689-1</dc:identifier>
      <dc:identifier xsi:type="dcndl:ISBN13">4-09-120689-1</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000008318172</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">21113088</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">KH582</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">913.6</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1006600376513"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://opac.lib.city.yokohama.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1106069602"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=560865&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.toshokan.city.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001100600818"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0011321424"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009810917656"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1102842899"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000008318172"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=1225807"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=1225810"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=1389767"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16459573"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784091206893"/>
      <dc:description> 2006</dc:description>
    </item>
    <item>
      <title>小説名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000011171779</link>
      <description><![CDATA[<p>特別編 [3],小学館,2011,978-4-09-122849-9<p><ul><li>タイトル：小説名探偵コナン</li><li>タイトル（読み）：ショウセツ メイタンテイ コナン</li><li>責任表示：青山剛昌 原作</li><li>シリーズ名：少年サンデーコミックススペシャル</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル</li><li>NDC(9)：913.6</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,秦, 建日子, 1968-,平良, 隆久,青山剛昌 原作</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000011171779</guid>
      <pubDate>Tue, 31 May 2011 19:26:17 +0900</pubDate>
      <dc:title>小説名探偵コナン</dc:title>
      <dcndl:titleTranscription>ショウセツ メイタンテイ コナン</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>秦, 建日子, 1968-</dc:creator>
      <dc:creator>平良, 隆久</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ハタ, タケヒコ, 1968-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>タイラ, タカヒサ</dcndl:creatorTranscription>
      <dcndl:volume>特別編 [3]</dcndl:volume>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2011</dc:date>
      <dcterms:issued>2011.4</dcterms:issued>
      <dcndl:price>686円</dcndl:price>
      <dc:extent>241p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-122849-9</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000011171779</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">21927851</dc:identifier>
      <dc:identifier xsi:type="dcndl:NSMARCNO">135449400</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">KH582</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">913.6</dc:subject>
      <dc:description>イラスト: 阿部ゆたか, 丸伝次郎</dc:description>
      <dc:description>並列シリーズ名: SHONEN SUNDAY COMICS SPECIAL</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=2192445&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0012346401"/>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.tottori.jp/winj/opac/switch-detail-iccap.do?bibid=1101773780"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009811425095"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1103294570"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000011171779"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=1870092"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=3307683"/>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BC14481302"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784091228499"/>
      <dc:description> 2011</dc:description>
    </item>
    <item>
      <title>小説名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I000011279233</link>
      <description><![CDATA[<p>特別編 [4],小学館,2011,978-4-09-123319-6<p><ul><li>タイトル：小説名探偵コナン</li><li>タイトル（読み）：ショウセツ メイタンテイ コナン</li><li>責任表示：青山剛昌 原作</li><li>シリーズ名：少年サンデーコミックススペシャル ; SSCS-3319</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル ; SSCS(3319)</li><li>NDC(9)：913.6</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,秦, 建日子, 1968-,及川, 真実,いさみ, たかお,平良, 隆久,青山剛昌 原作</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I000011279233</guid>
      <pubDate>Mon, 17 Oct 2011 23:57:50 +0900</pubDate>
      <dc:title>小説名探偵コナン</dc:title>
      <dcndl:titleTranscription>ショウセツ メイタンテイ コナン</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>秦, 建日子, 1968-</dc:creator>
      <dc:creator>及川, 真実</dc:creator>
      <dc:creator>いさみ, たかお</dc:creator>
      <dc:creator>平良, 隆久</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ハタ, タケヒコ, 1968-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>オイカワ, マミ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>イサミ, タカオ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>タイラ, タカヒサ</dcndl:creatorTranscription>
      <dcndl:volume>特別編 [4]</dcndl:volume>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル ; SSCS-3319</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル ; SSCS(3319)</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2011</dc:date>
      <dcterms:issued>2011.9</dcterms:issued>
      <dcndl:price>686円</dcndl:price>
      <dc:extent>272p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-123319-6</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">000011279233</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">21991197</dc:identifier>
      <dc:identifier xsi:type="dcndl:NSMARCNO">136392200</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">KH582</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">913.6</dc:subject>
      <dc:description>イラスト: 阿部ゆたか, 丸伝次郎</dc:description>
      <dc:description>並列シリーズ名: SHONEN SUNDAY COMICS SPECIAL</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://opac.lib.city.yokohama.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1111065973"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=2222228&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0012400731"/>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.tottori.jp/winj/opac/switch-detail-iccap.do?bibid=1101806372"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1103350666"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I000011279233"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=1954115"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=3028470"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B16516228"/>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BC14481313"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784091233196"/>
      <dc:description> 2011</dc:description>
    </item>
    <item>
      <title>小説名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I023230413</link>
      <description><![CDATA[<p>特別編 [5],小学館,2011,978-4-09-123446-9<p><ul><li>タイトル：小説名探偵コナン</li><li>タイトル（読み）：ショウセツ メイタンテイ コナン</li><li>責任表示：青山剛昌 原作</li><li>シリーズ名：少年サンデーコミックススペシャル = SHONEN SUNDAY COMICS SPECIAL ; SSCS-3446</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル ; SSCS(3446)</li><li>NDC(9)：913.6</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,秦, 建日子, 1968-,林, 誠人,杉山, 嘉一, 1970-,平良, 隆久,青山剛昌 原作</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I023230413</guid>
      <pubDate>Thu, 25 Oct 2012 00:47:38 +0900</pubDate>
      <dc:title>小説名探偵コナン</dc:title>
      <dcndl:titleTranscription>ショウセツ メイタンテイ コナン</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>秦, 建日子, 1968-</dc:creator>
      <dc:creator>林, 誠人</dc:creator>
      <dc:creator>杉山, 嘉一, 1970-</dc:creator>
      <dc:creator>平良, 隆久</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ハタ, タケヒコ, 1968-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ハヤシ, マサト</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>スギヤマ, ヨシカズ, 1970-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>タイラ, タカヒサ</dcndl:creatorTranscription>
      <dcndl:volume>特別編 [5]</dcndl:volume>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル = SHONEN SUNDAY COMICS SPECIAL ; SSCS-3446</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル ; SSCS(3446)</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2011</dc:date>
      <dcterms:issued>2011.12</dcterms:issued>
      <dcndl:price>686円</dcndl:price>
      <dc:extent>288p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-123446-9</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">023230413</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22038080</dc:identifier>
      <dc:identifier xsi:type="dcndl:NSMARCNO">136961600</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">KH582</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">913.6</dc:subject>
      <dc:description>イラスト: 阿部ゆたか, 丸伝次郎</dc:description>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1008000489752"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=2243652&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0012437744"/>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.tottori.jp/winj/opac/switch-detail-iccap.do?bibid=1101825594"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009811509694"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1103367466"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I023230413"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=2029144"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=3181426"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B12734431"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784091234469"/>
      <dc:description> 2011</dc:description>
    </item>
    <item>
      <title>小説名探偵コナン : 特別編 : 工藤新一への挑戦状-対決!!工藤新一vs服部平治</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I023558263</link>
      <description><![CDATA[<p>小学館,2012,978-4-09-123447-6<p><ul><li>タイトル：小説名探偵コナン : 特別編 : 工藤新一への挑戦状-対決!!工藤新一vs服部平治</li><li>タイトル（読み）：ショウセツ メイタンテイ コナン : トクベツヘン : クドウ シンイチ エ ノ チョウセンジョウ-タイケツ!!クドウ シンイチ vs ハットリ ヘイジ</li><li>責任表示：青山剛昌 原作,秦建日子, 杉山嘉一, 及川真実, 岸田伊織 テレビシナリオ,平良隆久 小説</li><li>シリーズ名：少年サンデーコミックススペシャル = Shonen sunday comics special</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル = Shonen sunday comics special</li><li>NDC(9)：913.6</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,秦, 建日子, 1968-,杉山, 嘉一, 1970-,及川, 真実,平良, 隆久,青山剛昌 原作,秦建日子, 杉山嘉一, 及川真実, 岸田伊織 テレビシナリオ,平良隆久 小説</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I023558263</guid>
      <pubDate>Thu, 17 May 2012 22:38:59 +0900</pubDate>
      <dc:title>小説名探偵コナン : 特別編 : 工藤新一への挑戦状-対決!!工藤新一vs服部平治</dc:title>
      <dcndl:titleTranscription>ショウセツ メイタンテイ コナン : トクベツヘン : クドウ シンイチ エ ノ チョウセンジョウ-タイケツ!!クドウ シンイチ vs ハットリ ヘイジ</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>秦, 建日子, 1968-</dc:creator>
      <dc:creator>杉山, 嘉一, 1970-</dc:creator>
      <dc:creator>及川, 真実</dc:creator>
      <dc:creator>平良, 隆久</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ハタ, タケヒコ, 1968-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>スギヤマ, ヨシカズ, 1970-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>オイカワ, マミ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>タイラ, タカヒサ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル = Shonen sunday comics special</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル = Shonen sunday comics special</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2012</dc:date>
      <dcterms:issued>2012.4</dcterms:issued>
      <dcndl:price>743円</dcndl:price>
      <dc:extent>396p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-123447-6</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">023558263</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22062703</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">KH582</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">913.6</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1008000533969"/>
      <rdfs:seeAlso rdf:resource="https://opac.lib.city.yokohama.lg.jp/winj/opac/switch-detail-iccap.do?bibid=1112029167"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=2283195&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0012516877"/>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.tottori.jp/winj/opac/switch-detail-iccap.do?bibid=1101854651"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1103404287"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I023558263"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=2022490"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=2231704"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B12772896"/>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BC14481368"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784091234476"/>
      <dc:description> 2012</dc:description>
    </item>
    <item>
      <title>小説名探偵コナン : 特別編 : 工藤新一京都新撰組殺人事件</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I023737929</link>
      <description><![CDATA[<p>小学館,2012,978-4-09-123752-1<p><ul><li>タイトル：小説名探偵コナン : 特別編 : 工藤新一京都新撰組殺人事件</li><li>タイトル（読み）：ショウセツ メイタンテイ コナン : トクベツヘン : クドウ シンイチ キョウト シンセングミ サツジン ジケン</li><li>責任表示：青山剛昌 原作,秦建日子, 猪原健太 テレビシナリオ,平良隆久 小説</li><li>シリーズ名：少年サンデーコミックススペシャル = Shonen sunday comics special</li><li>シリーズ名（読み）：ショウネン サンデー コミックス スペシャル = Shonen sunday comics special</li><li>NDC(9)：913.6</li></ul>]]></description>
      <author>青山, 剛昌, 1963-,秦, 建日子, 1968-,猪原, 健太, 1982-,平良, 隆久,青山剛昌 原作,秦建日子, 猪原健太 テレビシナリオ,平良隆久 小説</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I023737929</guid>
      <pubDate>Mon, 2 Jul 2012 18:25:45 +0900</pubDate>
      <dc:title>小説名探偵コナン : 特別編 : 工藤新一京都新撰組殺人事件</dc:title>
      <dcndl:titleTranscription>ショウセツ メイタンテイ コナン : トクベツヘン : クドウ シンイチ キョウト シンセングミ サツジン ジケン</dcndl:titleTranscription>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dc:creator>秦, 建日子, 1968-</dc:creator>
      <dc:creator>猪原, 健太, 1982-</dc:creator>
      <dc:creator>平良, 隆久</dc:creator>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>ハタ, タケヒコ, 1968-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>イハラ, ケンタ, 1982-</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>タイラ, タカヒサ</dcndl:creatorTranscription>
      <dcndl:seriesTitle>少年サンデーコミックススペシャル = Shonen sunday comics special</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウネン サンデー コミックス スペシャル = Shonen sunday comics special</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2012</dc:date>
      <dcterms:issued>2012.6</dcterms:issued>
      <dcndl:price>743円</dcndl:price>
      <dc:extent>289p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-123752-1</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">023737929</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22086513</dc:identifier>
      <dc:subject xsi:type="dcndl:NDLC">KH582</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">913.6</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1008000554989"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=2304345&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0012553693"/>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.tottori.jp/winj/opac/switch-detail-iccap.do?bibid=1101869060"/>
      <rdfs:seeAlso rdf:resource="http://www.library.city.hiroshima.jp/winj/opac/switch-detail-iccap.do?bibid=1103414956"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I023737929"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=2224625"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=3181427"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B12789538"/>
      <rdfs:seeAlso rdf:resource="https://ci.nii.ac.jp/ncid/BC14481390"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784091237521"/>
      <dc:description> 2012</dc:description>
    </item>
    <item>
      <title>小説名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I026499623</link>
      <description><![CDATA[<p>CASE1,小学館,2015,978-4-09-230826-8<p><ul><li>タイトル：小説名探偵コナン</li><li>タイトル（読み）：ショウセツ メイタンテイ コナン</li><li>責任表示：土屋つかさ 著,青山剛昌 原作・イラスト</li><li>シリーズ名：小学館ジュニア文庫</li><li>シリーズ名（読み）：ショウガクカン ジュニア ブンコ</li><li>NDC(9)：913.6</li></ul>]]></description>
      <author>土屋, つかさ,青山, 剛昌, 1963-,土屋つかさ 著,青山剛昌 原作・イラスト</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I026499623</guid>
      <pubDate>Mon, 6 Jun 2022 18:22:20 +0900</pubDate>
      <dc:title>小説名探偵コナン</dc:title>
      <dcndl:titleTranscription>ショウセツ メイタンテイ コナン</dcndl:titleTranscription>
      <dc:creator>土屋, つかさ</dc:creator>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dcndl:creatorTranscription>ツチヤ, ツカサ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:volume>CASE1</dcndl:volume>
      <dcndl:seriesTitle>小学館ジュニア文庫</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクカン ジュニア ブンコ</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2015</dc:date>
      <dcterms:issued>2015.7</dcterms:issued>
      <dcndl:price>680円</dcndl:price>
      <dc:extent>192p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-230826-8</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">026499623</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22594041</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">33298889</dc:identifier>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y7</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">913.6</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.library.city.sapporo.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1008000953482"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.chiba.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=2658284&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.sagamihara.kanagawa.jp/TOSHOW/asp/WwShousaiKen.aspx?FCode=1887664"/>
      <rdfs:seeAlso rdf:resource="https://www.tosyokan.pref.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1006000023367"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.nagoya.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001510030085"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bib/?B13183992"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0013546762"/>
      <rdfs:seeAlso rdf:resource="http://www.library.pref.tottori.jp/winj/opac/switch-detail-iccap.do?bibid=1102107815"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009811920125"/>
      <rdfs:seeAlso rdf:resource="https://opac.toshokan.city.fukuoka.lg.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www2.tosyo-saga.jp/kentosyo2/opac/switch-detail-iccap.do?bibid=1101847671"/>
      <rdfs:seeAlso rdf:resource="https://opac.miraionlibrary.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000002377752"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.okinawa.jp/winj/opac/switch-detail-iccap.do?bibid=1101248076"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I026499623"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=3347730"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=3360115"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B13183992"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/092308260000d0000000"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784092308268"/>
      <dc:description> 2015</dc:description>
    </item>
    <item>
      <title>小説名探偵コナン</title>
      <link>https://ndlsearch.ndl.go.jp/books/R100000002-I026799780</link>
      <description><![CDATA[<p>CASE2,小学館,2015,978-4-09-230845-9<p><ul><li>タイトル：小説名探偵コナン</li><li>タイトル（読み）：ショウセツ メイタンテイ コナン</li><li>責任表示：土屋つかさ 著,青山剛昌 原作・イラスト</li><li>シリーズ名：小学館ジュニア文庫</li><li>シリーズ名（読み）：ショウガクカン ジュニア ブンコ</li><li>NDC(9)：913.6</li></ul>]]></description>
      <author>土屋, つかさ,青山, 剛昌, 1963-,土屋つかさ 著,青山剛昌 原作・イラスト</author>
      <category>図書</category>
      <category>紙</category>
      <guid isPermaLink="true">https://ndlsearch.ndl.go.jp/books/R100000002-I026799780</guid>
      <pubDate>Mon, 6 Jun 2022 20:00:35 +0900</pubDate>
      <dc:title>小説名探偵コナン</dc:title>
      <dcndl:titleTranscription>ショウセツ メイタンテイ コナン</dcndl:titleTranscription>
      <dc:creator>土屋, つかさ</dc:creator>
      <dc:creator>青山, 剛昌, 1963-</dc:creator>
      <dcndl:creatorTranscription>ツチヤ, ツカサ</dcndl:creatorTranscription>
      <dcndl:creatorTranscription>アオヤマ, ゴウショウ, 1963-</dcndl:creatorTranscription>
      <dcndl:volume>CASE2</dcndl:volume>
      <dcndl:seriesTitle>小学館ジュニア文庫</dcndl:seriesTitle>
      <dcndl:seriesTitleTranscription>ショウガクカン ジュニア ブンコ</dcndl:seriesTitleTranscription>
      <dc:publisher>小学館</dc:publisher>
      <dcndl:publicationPlace>JP</dcndl:publicationPlace>
      <dc:date xsi:type="dcterms:W3CDTF">2015</dc:date>
      <dcterms:issued>2015.11</dcterms:issued>
      <dcndl:price>680円</dcndl:price>
      <dc:extent>191p</dc:extent>
      <dc:identifier xsi:type="dcndl:ISBN">978-4-09-230845-9</dc:identifier>
      <dc:identifier xsi:type="dcndl:NDLBibID">026799780</dc:identifier>
      <dc:identifier xsi:type="dcndl:JPNO">22652486</dc:identifier>
      <dc:identifier xsi:type="dcndl:TOHANMARCNO">33353678</dc:identifier>
      <dcndl:genre>児童図書</dcndl:genre>
      <dcndl:genreTranscription>ジドウ トショ</dcndl:genreTranscription>
      <dc:subject xsi:type="dcndl:NDLC">Y7</dc:subject>
      <dc:subject xsi:type="dcndl:NDC9">913.6</dc:subject>
      <rdfs:seeAlso rdf:resource="https://www.library.city.kawasaki.jp/bookdetail?num=2700832&amp;ctg=1"/>
      <rdfs:seeAlso rdf:resource="https://www.lib.sagamihara.kanagawa.jp/TOSHOW/asp/WwShousaiKen.aspx?FCode=1914414"/>
      <rdfs:seeAlso rdf:resource="https://www.tosyokan.pref.shizuoka.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1006000054720"/>
      <rdfs:seeAlso rdf:resource="https://www.library.city.nagoya.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1001510067310"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bib/?B13227272"/>
      <rdfs:seeAlso rdf:resource="https://web.oml.city.osaka.lg.jp/webopac_i_ja/0013832666"/>
      <rdfs:seeAlso rdf:resource="https://opac.libnet.pref.okayama.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1009811956573"/>
      <rdfs:seeAlso rdf:resource="https://opac.toshokan.city.fukuoka.lg.jp/licsxp-opac/WOpacTifSchCmpdDispAction.do"/>
      <rdfs:seeAlso rdf:resource="https://www2.tosyo-saga.jp/kentosyo2/opac/switch-detail-iccap.do?bibid=1101878562"/>
      <rdfs:seeAlso rdf:resource="https://opac.miraionlibrary.jp/licsxp-opac/WOpacMsgNewListToTifTilDetailAction.do?tilcod=1000002411207"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.okinawa.jp/winj/opac/switch-detail-iccap.do?bibid=1101279702"/>
      <rdfs:seeAlso rdf:resource="https://ndlsearch.ndl.go.jp/books/R100000002-I026799780"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=3372605"/>
      <rdfs:seeAlso rdf:resource="https://library.sapie.or.jp/cgi-bin/CN1MN1?S00101=J00DTL04&amp;S00222=3817491"/>
      <rdfs:seeAlso rdf:resource="https://www.library.pref.osaka.jp/bibj/?B13227272"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/092308450000d0000000"/>
      <rdfs:seeAlso rdf:resource="https://www.books.or.jp/book-details/9784092308459"/>
      <dc:description> 2015</dc:description>
    </item>
  </channel>
</rss>
`;
