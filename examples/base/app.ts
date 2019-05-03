import TangYueFan from '../../src/index'

// TangYueFan({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })
// TangYueFan({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// })
// const date = new Date()
//
// TangYueFan({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date
//   }
// })
// //
// TangYueFan({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: '@:$, '
//   }
// })
//
// TangYueFan({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: 'bar',
//     baz: null
//   }
// })
//
// TangYueFan({
//   method: 'get',
//   url: '/base/get#hash',
//   params: {
//     foo: 'bar'
//   }
// })
//
// TangYueFan({
//   method: 'get',
//   url: '/base/get?foo=bar',
//   params: {
//     bar: 'baz'
//   }
// })

// TangYueFan({
//   method: 'post',
//   url: '/base/post',
//   data: {
//     a: 1,
//     b: 2
//   }
// })
// //
// TangYueFan({
//   method: 'post',
//   url: '/base/post',
//   headers: {
//     'content-type': 'application/json;charset=utf-8',
//     'Accept':'application/json'
//   },
//   data: {
//     a: 1,
//     b: 2
//   }
// })
// //
//
// const paramsString = 'q=URLUtils.searchParams&topic=api'
// const searchParams = new URLSearchParams(paramsString)
//
// TangYueFan({
//   method: 'post',
//   url: '/base/post',
//   data: {searchParams}
// })

TangYueFan({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
}).then((res) => {
  console.log(res)
})
//
TangYueFan({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: {
    a: 3,
    b: 4
  }
}).then((res) => {
  console.log(res)
})
