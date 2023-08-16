module.exports = {
    module: {
        rules: [
          // {
          //   test: /\.(png|jpg|gif)$/i,
          //   type: 'asset',
          // },
          // {
          //   test: /((\.(sass|less))|(index\.css))$/,
          //   use: ["style-loader", "css-loader", 'sass-loader'],
          // },
          {
            test: /\.(css)$/,
            use: ["ts-loader"],
          },
        ],
    },
};
