module.exports = {
  test: /\.vue(\.erb)?$/,
  use: [
    {
      loader: 'vue-loader',
    },
  ],
};

//webpackはJSファイルのみそのまま扱うためJSファイル以外のものは読み込めない。
// このファイルではwebpackにVueファイルを認識させるための設定を書いている
