const quotes = [
  {
    quote: "하면 못 할 것이 없다",
    author: "-짥고 좋은 글귀1-",
  },
  {
    quote: "무슨일을 어떻게 하는가에 따라 일생이 결정된다.",
    author: "-짥고 좋은 글귀2-",
  },
  {
    quote: "삶은 죽음으로 가는것이 아니라 완성으로 가는 것이다.",
    author: "-짥고 좋은 글귀3-",
  },
  {
    quote: "웃을 수 없다면 우리는 모두 돌아버릴 것이다.",
    author: "-짥고 좋은 글귀4-",
  },
  {
    quote: "어제의 꿈은 오늘의 희망이며 내일의 현실이다",
    author: "-짥고 좋은 글귀5-",
  },
];
const title = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const quotesArr = quotes[Math.floor(Math.random() * quotes.length)];
title.innerHTML = quotesArr.quote;
author.innerHTML = `${quotesArr.author}`;
