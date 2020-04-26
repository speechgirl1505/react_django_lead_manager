module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        // test: /\.css$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
