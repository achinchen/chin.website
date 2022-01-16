---
title: 原來好的設計能橫跨語言
authors: chin
tags: [open-source, ruby]
---

好的 codebase 橫跨語言，能讓不同背景的開發者一樣好上手

<!--truncate-->


## 前言

故事是這樣的。

有陣子工作上使用 **fluentd** _a cross platform open-source data collection software project_ 的服務。某天看著 fluentd 拿到 data 後回的 response 發呆，心想為什麼要回我 200 搭配空字串呢？既然沒有要做什麼事情，回我個 204 不是比較好嗎？

後來跟主管聊天的時候吐槽了一下，他說是這樣嗎？我看看。
動作很迅速的他說：「真的耶，不如我們來發個 PR 修吧。」
~~然後我就發 PR 且被 approved 了~~

## 現實

當然沒那麼簡單啦，重點其實是我對 ruby 這個語言真的是說是半生熟都高估自己了。
更別說我在發 PR 的過程中連環境都起不來，全靠寫測試來看 code 可不可以動 😂

## 心得

雖然只是很小的 PR，但是卻讓我有機會走一次從一個全然無知的使用者到開源貢獻者的過程。而身為對於 ruby 不熟悉的開發者，能夠透過妥善的專案架構安排、模組切分，讓一個局外人能參與其中，順利在不會動的環境下完成貢獻，確實是對路人開發者的一大鼓舞。

我一直認為設計這件事情是非常重要的，雖然難免在時程的壓力下，需要做出一些適度的妥協。但是盡可能的先思考設計，再著手寫程式真的會花費相對低的成本，一開始急就章的將就各種東西，建立各種不必要的 flags，後面連自己在抓蟲的時候都嫌難讀，更何況如果專案不是自己一個人要維護呢？不過就算是自己一人維護，也還是盡可能做到自己的極限，這樣比較不會在數日後想搭時光機回到當初。

雖然在不同的領域有各自適合的設計方式，但是元件的設計不應該因為是相對小的單位就被忽視，架構設計不分大小，維持良好的寫作習慣能減少造孽現場跟降低事故發生後修復的成本。


## 結論

> Is what the developer intended good for the users of this code? The “users” are usually both end-users (when they are affected by the change) and developers (who will have to “use” this code in the future).
>
> [google/eng-practices#reviewer/looking-for](https://github.com/google/eng-practices/blob/1ff57066de111c422ebcf019b82539daad3751b3/review/reviewer/looking-for.md)


我想這個世界的讚美總是太少，減法看世界的人生總是有點辛苦，
如果 PR 有讓你覺得很棒的地方或是設計，請不要吝嗇你的稱讚，
因為可能這將影響一個人願不願意保持這樣的好或是朝向更好，
只要我們能夠更溫柔的對待這個世界，終將一日可能讓這個世界溫柔以待彼此吧。
