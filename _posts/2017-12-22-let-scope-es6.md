---
title: "code scope for let keyword in ES6"
layout: post
image:
headerImage: false
tag:
- javascript
- ECMAscript
- Example
category: blog
author: HyeonD
description:
---

자바스크립트를 다시 시작 해보자라는 마음으로 집에 있던 자바 스크립트 책을 하나 꺼내 들고 리뷰를 해볼 생각이다. 첫번째로 자바 스크립트의 변수 사용과 변수가 적용되는 그 반경에 대해 알아보고자 한다.

아래의 코드는 ES6 기준으로 변수 선언시 사용되는 키워드 var 와 let의 차이점과 각 키워드가 영향을 미치는 스코프에 관한 샘플코드이다.

<script src="https://gist.github.com/historiabdevil/725d520f44c93a283c0bc7a6bee365ac.js"></script>

위의 결과 값은 어떻게 나올까? 실행 결과는 아래와 같다.

```
❯ node let.js
let : Hello [if]
var : World [if]
let : Hello [function]
var : World [if]
let : Hello
var : World
```
let의 경우는 각 블럭별 변수가 다르게 할당이 되었다는 것을 알 수 있다.

var의 경우는 함수 블럭안에서는 덮어 쓰기가 되며 함수를 빠져 나왔을때는 전역변수의 값을 사용하였다.

자바스크립트의 변수 선언시 전역변수의 유혹을 뿌리 칠 수는 없다. 나역시도 그렇다. 콜백의 늪에서 값을 공유하기 위해서는 전역변수만이 답이라고 생각하기도 하지만 그것은 나의 실력 탓일것이다. 
