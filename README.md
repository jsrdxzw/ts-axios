# Ajax Library Based on Typescript

### Usage

```bash
git clone https://github.com/jsrdxzw/ts-axios.git
npm install
```

### params参数
```javascript
  TangYueFan("https://www.google.com?key=hello#abc=def",{
    name:'zhangsan',
    children:['yang','li'],
    current: new Date(),
    car:{
      name:'BMW',
      price:180000
    }
  })
  // -> url: https://www.google.com?key=hello&name=zhangsan&children[]=yang&children[]=li&current=2019-05-03T07:26:44.704Z&car=%7B%22name%22:%22BMW%22,%22price%22:180000%7D
```
这里的`params`参数里面支持普通属性，数组，时间对象，普通对象等形式,并且支持特殊字符,如空格，$等

















