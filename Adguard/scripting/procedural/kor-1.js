/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: kor-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".aside_item.banner\",\"tasks\":[[\"has\",{\"selector\":\"> h4[style~=\\\"font-size:13px;color:#999999;margin:0\\\"]\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}"],["{\"selector\":\".nav-mobile\",\"action\":[\"style\",\"width: calc(100% - 290px) !important;\"],\"tasks\":[[\"matches-css\",{\"name\":\"display\",\"value\":\"^none$\"}],[\"spath\",\" ~ .base > .main\"]]}"],["{\"selector\":\"*[class*=\\\"not_cookie\\\"]\",\"action\":[\"remove-class\",\"not_cookie\"]}"],["{\"selector\":\".alert.alert-danger\",\"tasks\":[[\"has\",{\"selector\":\"> a\",\"tasks\":[[\"has-text\",\"[AD]\"]]}]]}"],["{\"selector\":\".popular-news-widget\",\"tasks\":[[\"has\",{\"selector\":\"> *\",\"tasks\":[[\"matches-css\",{\"name\":\"display\",\"value\":\"^none$\"}]]}]]}"],["{\"selector\":\"li.search-product__ad-badge\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"table\",\"tasks\":[[\"has\",{\"selector\":\"> tbody > tr > td\",\"tasks\":[[\"has-text\",\"bannerManager\"],[\"spath\",\":not(:has(> *))\"]]}]]}"],["{\"selector\":\"#mdnw-main-recommend-realCuration-swipeContainer > div[id*=\\\"-ad-\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"section.gall-lst-group > ul > li\",\"tasks\":[[\"has\",{\"selector\":\"> div.detail-top-lnk > a[href*=\\\"//addc.dcinside.com/\\\"].lt > span\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}"],["{\"selector\":\"table.gall_list tr:not([data-type][data-no])\",\"tasks\":[[\"has\",{\"selector\":\"td\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}"],["{\"selector\":\"#right-sidebar > .inside-right-sidebar > div[class]\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"Hi there, I\\\\'m EGG.\"]]}]]}"],["{\"selector\":\".trendpickup__container > .trendtab-cont:has(p.badge--ad)\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".trendtabs__list > li[data-adv_yn=\\\"Y\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"body div:is(.bd, .hd) div[style] > *[class*=\\\" \\\"]\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"matches-css\",{\"name\":\"padding\",\"value\":\"5px 10px 20px\"}],[\"matches-css\",{\"name\":\"height\",\"value\":\"^[0-9]{2,3}\"}]]}","{\"selector\":\"body[class*=\\\"mac_os\\\"] div[class=\\\"hd\\\"] ~ *[id][class*=\\\" \\\"]\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"matches-css\",{\"name\":\"padding\",\"value\":\"5px 10px 20px\"}],[\"matches-css\",{\"name\":\"height\",\"value\":\"^[0-9]{2,3}\"}]]}","{\"selector\":\"header[class=\\\"hd\\\"] ~ .fmad_wrapper ~ *[class]\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"matches-css\",{\"name\":\"padding\",\"value\":\"5px 10px 20px\"}],[\"matches-css\",{\"name\":\"height\",\"value\":\"^[0-9]{2,3}\"}]]}"],["{\"selector\":\".alert-danger.container\",\"tasks\":[[\"has-text\",\"[AD]\"]]}"],["{\"selector\":\".offer-container > .suggestion-item\",\"tasks\":[[\"has\",{\"selector\":\"a[href=\\\"#\\\"] > span\",\"tasks\":[[\"has-text\",\"광고\"]]}]]}"],["{\"selector\":\"a[target=\\\"_blank\\\"][href^=\\\"http://\\\"].menu-a\",\"tasks\":[[\"has-text\",\"보증토토\"]]}"],["{\"selector\":\"#cafe-data > #cafe-intro\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=28173877($|&)/\"]]}","{\"selector\":\"#cafe-menu .cafe-menu-tit\",\"tasks\":[[\"has-text\",\"AD\"],[\"matches-path\",\"/joonggonara($|\\\\\\\\/|\\\\\\\\?)/\"]]}","{\"selector\":\"#cafe-menu .cafe-menu-tit\",\"tasks\":[[\"has-text\",\"AD\"],[\"spath\",\" + ul\"],[\"matches-path\",\"/joonggonara($|\\\\\\\\/|\\\\\\\\?)/\"]]}","{\"selector\":\"#cafe-menu .cafe-menu-tit\",\"tasks\":[[\"has-text\",\"우리카페 협력업체\"],[\"matches-path\",\"/fx8300($|\\\\\\\\/|\\\\\\\\?)/\"]]}","{\"selector\":\"#cafe-menu .cafe-menu-tit\",\"tasks\":[[\"has-text\",\"우리카페 협력업체\"],[\"spath\",\" + ul\"],[\"matches-path\",\"/fx8300($|\\\\\\\\/|\\\\\\\\?)/\"]]}","{\"selector\":\"#content-area #upperArticleList tr.board-notice\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"td.p-nick > a\",\"tasks\":[[\"has-text\",\"중고나라스태프\"]]}]]}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"td.p-nick > a\",\"tasks\":[[\"has-text\",\"중나중나지기\"]]}]]}],[\"matches-path\",\"(&|\\\\\\\\.|\\\\\\\\?)clubid=10050146($|&)/\"]]}","{\"selector\":\"#editorMainContent *\",\"tasks\":[[\"has\",{\"selector\":\"~ div[title][style]:has(a[target=\\\"_blank\\\"][href*=\\\".police.go.kr/\\\"])\"}],[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=10050146($|&)/\"]]}","{\"selector\":\"#editorMainContent > *:has(a > img)\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=14062859(&|$)/\"]]}","{\"selector\":\"#editorMainContent > div:nth-child(1)\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=14062859(&|$)/\"]]}","{\"selector\":\"#editorMainContent a[href*=\\\"//cafe.naver.com/eyejoker7?iframe\\\"][target=\\\"_blank\\\"] ~ *\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=29560217($|&)/\"]]}","{\"selector\":\"#editorMainContent div[title][style^=\\\"color\\\"]:not(:has(a[target=\\\"_blank\\\"])) ~ *:has(a[target=\\\"_blank\\\"])\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=13764661($|&)/\"]]}","{\"selector\":\"#editorMainContent table:not([width$=\\\"%\\\"]) > tbody > tr > td[width][valign]\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=12789486(&|$)/\"]]}","{\"selector\":\"#editorMainContent tr ~ .ad + tr:not([class])\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=14605461($|&)/\"]]}","{\"selector\":\"#editorMainContent tr ~ .ad\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=14605461($|&)/\"]]}","{\"selector\":\"#editorMainContent tr ~ tr:not([class]):has(+ .ad)\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=14605461($|&)/\"]]}","{\"selector\":\"#main-area #cafe-intro\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=27738104(&|$)/\"]]}","{\"selector\":\"#main-area > #cafe-intro\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=10110775(&|$)/\"]]}","{\"selector\":\"#upperArticleList ._noticeArticle\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=27738104(&|$)/\"]]}","{\"selector\":\"#upperArticleList ._noticeArticle:has(a[href][class][onclick])\",\"tasks\":[[\"has\",{\"selector\":\".td_name a[onclick][href][class]\",\"tasks\":[[\"has-text\",\"삼성스마트폰카페운영\"]]}],[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=13764661($|&)/\"]]}","{\"selector\":\".ArticleFormBanner\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=14062859(&|$)/\"]]}","{\"selector\":\".article-board .board-notice\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=27738104(&|$)/\"]]}","{\"selector\":\".article-board tr.type_main\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\".td_name .m-tcol-c\",\"tasks\":[[\"has-text\",\"/(카페지기|매니저)/\"]]}]]}],[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=28173877($|&)/\"]]}","{\"selector\":\"img[src][alt=\\\"매니저 등록 배너\\\"]\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=10001688(&|$)/\"]]}","{\"selector\":\"img[src][alt=\\\"매니저 등록 배너\\\"]\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=10110775(&|$)/\"]]}","{\"selector\":\"img[src][alt=\\\"매니저 등록 배너\\\"]\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=12175294(&|$)/\"]]}","{\"selector\":\"img[src][alt=\\\"매니저 등록 배너\\\"]\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=12789486(&|$)/\"]]}","{\"selector\":\"img[src][alt=\\\"매니저 등록 배너\\\"]\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=13764661(&|$)/\"]]}","{\"selector\":\"img[src][alt=\\\"매니저 등록 배너\\\"]\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=14605461(&|$)/\"]]}","{\"selector\":\"img[src][alt=\\\"매니저 등록 배너\\\"]\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=18736796(&|$)/\"]]}","{\"selector\":\"img[src][alt=\\\"매니저 등록 배너\\\"]\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=27738104(&|$)/\"]]}","{\"selector\":\"img[src][alt=\\\"매니저 등록 배너\\\"]\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=27842958($|&)/\"]]}","{\"selector\":\"table[role=\\\"presentation\\\"] #editorMainContent p[style^=\\\"text-align\\\"]:has(a[href*=\\\".twitch.tv/\\\"] + a[href*=\\\".twitch.tv/\\\"]) ~ p\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=27842958($|&)/\"]]}","{\"selector\":\"table[role=\\\"presentation\\\"] div[style=\\\"text-align: center;\\\"]:has(a[href$=\\\"/perfumelove/1193249\\\"])\",\"tasks\":[[\"matches-path\",\"/(&|\\\\\\\\.|\\\\\\\\?)clubid=10001688($|&)/\"]]}"],["{\"selector\":\".banner_add\",\"tasks\":[[\"matches-path\",\"/ca-fe\\\\\\\\/web\\\\\\\\/cafes\\\\\\\\/(appleiphone|12789486)(\\\\\\\\/|\\\\\\\\?)/\"]]}","{\"selector\":\".banner_add\",\"tasks\":[[\"matches-path\",\"/ca-fe\\\\\\\\/web\\\\\\\\/cafes\\\\\\\\/(inmacbook|12175294)(\\\\\\\\/|\\\\\\\\?)/\"]]}","{\"selector\":\".banner_add\",\"tasks\":[[\"matches-path\",\"/ca-fe\\\\\\\\/web\\\\\\\\/cafes\\\\\\\\/(perfumelove|10001688)(\\\\\\\\/|\\\\\\\\?)/\"]]}","{\"selector\":\".banner_add\",\"tasks\":[[\"matches-path\",\"/ca-fe\\\\\\\\/web\\\\\\\\/cafes\\\\\\\\/(true8|18736796)(\\\\\\\\/|\\\\\\\\?)/\"]]}","{\"selector\":\".banner_add.bottom\",\"tasks\":[[\"matches-path\",\"/ca-fe\\\\\\\\/web\\\\\\\\/cafes\\\\\\\\/(anycallusershow|13764661)(\\\\\\\\/|\\\\\\\\?)/\"]]}","{\"selector\":\".banner_add.bottom\",\"tasks\":[[\"matches-path\",\"/ca-fe\\\\\\\\/web\\\\\\\\/cafes\\\\\\\\/(ghdi58|14062859)(\\\\\\\\/|\\\\\\\\?)/\"]]}","{\"selector\":\".banner_add.bottom\",\"tasks\":[[\"matches-path\",\"/ca-fe\\\\\\\\/web\\\\\\\\/cafes\\\\\\\\/(jpnstory|10110775)(\\\\\\\\/|\\\\\\\\?)/\"]]}","{\"selector\":\".banner_add.bottom\",\"tasks\":[[\"matches-path\",\"/ca-fe\\\\\\\\/web\\\\\\\\/cafes\\\\\\\\/(steamindiegame|27842958)(\\\\\\\\/|\\\\\\\\?)/\"]]}","{\"selector\":\".location_bar\",\"tasks\":[[\"has\",{\"selector\":\".active\",\"tasks\":[[\"has-text\",\"전체공지\"]]}],[\"spath\",\" ~ .location_fix li.board_box\"],[\"has\",{\"selector\":\"a[href].txt_area span.nick\",\"tasks\":[[\"has-text\",\"삼성스마트폰카페운영\"]]}],[\"matches-path\",\"/ca-fe\\\\\\\\/(web\\\\\\\\/cafes\\\\\\\\/|)(anycallusershow|13764661)($|\\\\\\\\/|\\\\\\\\?)/\"]]}","{\"selector\":\".location_bar\",\"tasks\":[[\"has\",{\"selector\":\".active\",\"tasks\":[[\"has-text\",\"전체공지\"]]}],[\"spath\",\" ~ .location_fix li.board_box\"],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href].txt_area span.nick\",\"tasks\":[[\"has-text\",\"/중고나라스태프|중나중나지기/\"]]}]]}],[\"matches-path\",\"/ca-fe\\\\\\\\/(web\\\\\\\\/cafes\\\\\\\\/|)(joonggonara|joonggonara\\\\\\\\.cafe|10050146)($|\\\\\\\\/|\\\\\\\\?)/\"]]}"],["{\"selector\":\"#content > .recommend_section:has(> div[style^=\\\"padding:\\\"] > #m_pay_deliverytracking)\",\"tasks\":[[\"has-text\",\"/^[ \\\\n]+$/\"]]}"],["{\"selector\":\".app-board-section > ul.app-board-template-list > li.notice\",\"tasks\":[[\"has\",{\"selector\":\"> a[href] > span > font[color]\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}"],["{\"selector\":\"div.article ~ aside#sidebar\",\"tasks\":[[\"has\",{\"selector\":\".facebook_like\",\"tasks\":[[\"matches-css\",{\"name\":\"display\",\"value\":\"^none$\"}]]}]]}"],["{\"selector\":\"form#fboardlist table tr\",\"tasks\":[[\"has\",{\"selector\":\"span.text-muted\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}"],["{\"selector\":\".nplr div[class=\\\"\\\"] li\",\"tasks\":[[\"has\",{\"selector\":\"li\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}"],["{\"selector\":\".rnb > .rnb_cont\",\"tasks\":[[\"matches-css\",{\"name\":\"height\",\"value\":\"^0px$\"}],[\"matches-css\",{\"name\":\"padding-top\",\"value\":\"^30px$\"}]]}"],["{\"selector\":\"div[class^=\\\"col-md-\\\"] div[class*=\\\"-main-\\\"]\",\"tasks\":[[\"has-text\",\"/보증업체|검증업체/\"]]}"],["{\"selector\":\"section[class^=\\\"css-\\\"] section[class^=\\\"css-\\\"] > [class^=\\\"css-\\\"]:is(:has(section > a[target=\\\"_blank\\\"]), :has(> div[class^=\\\"media-area \\\"]))\",\"tasks\":[[\"has-text\",\" · AD\"],[\"spath\",\":not(:has(section ~ section))\"]]}"],["{\"selector\":\"article[data-list-container=\\\"searchList\\\"] li\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"AD\"],[\"spath\",\".gray_round_badge\"]]}]]}"],["{\"selector\":\".search_box_listdeal > .list_conts_wrap\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"AD\"],[\"spath\",\".round_badge\"]]}]]}"],["{\"selector\":\"#hdSearchBarLink\",\"action\":[\"remove-attr\",\"value\"]}","{\"selector\":\"#hdSearchBarText\",\"action\":[\"remove-attr\",\"value\"]}"],["{\"selector\":\"tr\",\"tasks\":[[\"has\",{\"selector\":\"> td > a[href^=\\\"../ad_board/\\\"]\",\"tasks\":[[\"has-text\",\"광고\"]]}]]}","{\"selector\":\"tr.is_notice\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"(광고)\"]]}]]}","{\"selector\":\"ul > li\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"./ad_board/\\\"]\",\"tasks\":[[\"has-text\",\"광고\"]]}]]}"],["{\"selector\":\"#welcomeMainBanner_welcomeMain div[id*=\\\"_containerWrap_\\\"]:has(img[src$=\\\"Banner/ad.jpg\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[module-design-id] ~ div > .component\",\"action\":[\"style\",\"margin-top: 0px !important;\"],\"tasks\":[[\"has\",{\"selector\":\"div:has(.text--smiledelivery_slogan)\"}],[\"spath\",\" .section--component_title\"]]}"],["{\"selector\":\".app > div > div > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class] > div[class] > div[class]\",\"tasks\":[[\"has-text\",\"파워링크\"]]}]]}","{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > div\",\"tasks\":[[\"has-text\",\"연관상품\"],[\"spath\",\" > div\"],[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"has-text\",\"AD\"]]}],[\"spath\",\" > img[alt=\\\"AD 가이드\\\"]\"]]}]]}"],["{\"selector\":\".group-deal .list > div\",\"tasks\":[[\"has\",{\"selector\":\"span.ad\",\"tasks\":[[\"matches-css\",{\"name\":\"background-image\",\"value\":\"images\\\\/deal\\\\/ad\\\\.png\"}]]}]]}"],["{\"selector\":\"._listA tr.notice\",\"tasks\":[[\"has\",{\"selector\":\"span[style]\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}","{\"selector\":\"main#main .eq.section #bd table tr\",\"tasks\":[[\"has\",{\"selector\":\".no ~ .title span\",\"tasks\":[[\"has-text\",\"[AD]\"]]}]]}"],["{\"selector\":\".banner_control_inner li[data-target=\\\"#75\\\"].banner_group_item\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".welcome_banner_inner li.swiper-slide:has(img[src*=\\\"image.kyobobook.co.kr/newimages/adcenter/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"ul[class^=\\\"ad\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[class$=\\\"con_b\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> *\",\"tasks\":[[\"matches-css\",{\"name\":\"display\",\"value\":\"^none$\"}]]}]]}"],["{\"selector\":\"div[class*=\\\"Banner\\\"] div[data-swiper-slide-index].swiper-slide:has(a[href^=\\\"/banners/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#container aside[class^=\\\"aside-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"iframe\",\"tasks\":[[\"matches-css\",{\"name\":\"display\",\"value\":\"^none$\"}]]}]]}"],["{\"selector\":\".section-intro > .m-latest-renew\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"MD 추천도서\"]]}]]}","{\"selector\":\".section-intro > .m-latest-renew\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"오늘의 책\"]]}]]}","{\"selector\":\"div[style]#cenArea > h2[style]\",\"tasks\":[[\"has-text\",\"오늘의 책\"]]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"section[id^=\\\"custom_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div.widget_text > h3\",\"tasks\":[[\"has-text\",\"SPONSORED\"],[\"spath\",\".widgettitle\"]]}]]}"],["{\"selector\":\"#bo_v_atc.mheight\",\"action\":[\"remove-class\",\"mheight\"]}"],["{\"selector\":\"#article-list > .notice\",\"tasks\":[[\"has\",{\"selector\":\".list-header\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}","{\"selector\":\"div[style*=\\\"padding:\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[style] div[style]\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}"],["{\"selector\":\".topbar-area\",\"tasks\":[[\"has\",{\"selector\":\"> .badge\",\"tasks\":[[\"has-text\",\"뉴스\"]]}]]}"],["{\"selector\":\".ent_wrapper.slide-vertical-effect .ent_news\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\".ent_prefix\",\"tasks\":[[\"has-text\",\"ZZAPFLIX\"]]}]]}]]}"],["{\"selector\":\"#sidebar > .module\",\"tasks\":[[\"has-text\",\"Ad\"]]}"],["{\"selector\":\".na-col > div[id^=\\\"carousel_\\\"].carousel-fade .carousel-item:has(a[href]:not([href*=\\\"//coolenjoy.net/\\\"])[target=\\\"_self\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"body.nate .section_cont [disp-attr]\",\"tasks\":[[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"matches-css\",{\"name\":\"display\",\"value\":\"^none$\"}]]}]]}"],["{\"selector\":\".menu-ul > .menu-li\",\"tasks\":[[\"has\",{\"selector\":\"> a\",\"tasks\":[[\"has-text\",\"보증토토\"]]}]]}"],["{\"selector\":\"table.table-divider > tbody > tr.notice\",\"tasks\":[[\"has\",{\"selector\":\"> td.title > a > strong[style]\",\"tasks\":[[\"has-text\",\"[프리미엄]\"]]}]]}"],["{\"selector\":\".container .recent_news_inner\",\"tasks\":[[\"has\",{\"selector\":\"> h3\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}"],["{\"selector\":\"div[class*=\\\"senkawa\\\"] div[class] > div[id]:not([class])\",\"tasks\":[[\"has-text\",\"/^(|[​\\\\n\\\\t ]+)$/\"]]}"]];

const hostnamesMap = new Map([["ajunews.com",0],["algumon.com",1],["apycsports.com",2],["yachuk.com",2],["momkim.co.kr",2],["blacktoon253.com",3],["blacktoon254.com",3],["blacktoon255.com",3],["blacktoon256.com",3],["blacktoon257.com",3],["blacktoon258.com",3],["blacktoon259.com",3],["blacktoon260.com",3],["blacktoon261.com",3],["blacktoon262.com",3],["blacktoon263.com",3],["blacktoon264.com",3],["sports.chosun.com",4],["coupang.com",5],["dailymedipharm.com",6],["m.danawa.com",7],["app.dcinside.com",8],["m.dcinside.com",8],["gall.dcinside.com",9],["game.dcinside.com",9],["eggrank.com",10],["enuri.com",11],["m.fmkorea.com",12],["frtoon199.com",13],["frtoon200.com",13],["frtoon201.com",13],["frtoon202.com",13],["frtoon203.com",13],["frtoon204.com",13],["frtoon205.com",13],["frtoon206.com",13],["frtoon207.com",13],["frtoon208.com",13],["frtoon209.com",13],["frtoon210.com",13],["frtoon211.com",13],["frtoon212.com",13],["hogangnono.com",14],["img.imimggggg87878.com",15],["cafe.naver.com",16],["m.cafe.naver.com",17],["m.pay.naver.com",18],["newreop.com",19],["tipsandtrickskorea.com",20],["torrentdia100.com",21],["torrentdia101.com",21],["torrentdia102.com",21],["torrentdia103.com",21],["torrentdia104.com",21],["torrentdia105.com",21],["torrentdia106.com",21],["torrentdia107.com",21],["torrentdia108.com",21],["torrentdia109.com",21],["torrentdia110.com",21],["torrentdia111.com",21],["torrentdia112.com",21],["torrentdia113.com",21],["torrentdia99.com",21],["torrentsee188.com",22],["torrentsee189.com",22],["torrentsee190.com",22],["torrentsee191.com",22],["torrentsee192.com",22],["torrentsee193.com",22],["torrentsee194.com",22],["torrentsee196.com",22],["torrentsee197.com",22],["torrentsee198.com",22],["torrentsee199.com",22],["torrentsee200.com",22],["torrentsee201.com",22],["torrentsee202.com",22],["torrentsee203.com",22],["torrentsee204.com",22],["news.tvchosun.com",23],["viewtorrent13.com",24],["viewtorrent14.com",24],["viewtorrent15.com",24],["viewtorrent16.com",24],["viewtorrent17.com",24],["viewtorrent18.com",24],["viewtorrent19.com",24],["viewtorrent20.com",24],["viewtorrent21.com",24],["viewtorrent22.com",24],["viewtorrent23.com",24],["viewtorrent24.com",24],["viewtorrent25.com",24],["pedia.watcha.com",25],["msearch.wemakeprice.com",26],["search.wemakeprice.com",27],["yes24.com",28],["2cpu.co.kr",29],["aladin.co.kr",30],["browse.auction.co.kr",31],["m.bunjang.co.kr",32],["coocha.co.kr",33],["eomisae.co.kr",34],["kyobobook.co.kr",35],["m.mt.co.kr",36],["m.nocutnews.co.kr",37],["programmers.co.kr",38],["m.yna.co.kr",39],["ypbooks.co.kr",40],["meeco.kr",41],["ppss.kr",42],["semoi.kr",43],["tgd.kr",44],["arca.live",45],["zzzz.lol",46],["bonik.me",47],["coolenjoy.net",48],["m.search.daum.net",49],["hdhd304.net",50],["hdhd305.net",50],["hdhd306.net",50],["hdhd307.net",50],["hdhd308.net",50],["hdhd309.net",50],["hdhd310.net",50],["hdhd311.net",50],["hdhd312.net",50],["hdhd313.net",50],["hdhd314.net",50],["hdhd315.net",50],["hdhd316.net",50],["hdhd317.net",50],["hdhd318.net",50],["koreaminecraft.net",51],["koreatimes.net",52],["namu.wiki",53]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["m.cafe.naver.com",[16]]]);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
