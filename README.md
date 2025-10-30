# rare-hanzi-zhuyin
生僻汉字注音，适用于人名注音处理等

```ts
import { zhuyin } from 'rare-hanzi-zhuyin'

zhuyin('煜') // => yù
zhuyin('一') // => undefined 只录入了生僻字，常用字不会返回
```
