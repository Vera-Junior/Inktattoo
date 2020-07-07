module.exports = {
    plugins: [
      require('autoprefixer'), //проставляет префиксы стилям
      require('css-mqpacker') //сжимает медиа запросы
      // require('cssnano')({ //максимально минифицирует исходные стили
      //   preset: [
      //     'default', {
      //       discardComments: {
      //         removeAll: true,
      //       }
      //     }
        // ]
      // })
    ]
  }