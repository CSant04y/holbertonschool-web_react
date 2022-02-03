const path = require('path');

module.exports = {
    mode: 'production',
    entry: './js/dashboard_main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    use: [
                        {
                          loader: 'img-optimize-loader',
                          options: {
                            compress: {
                              // loseless compression for png
                              optipng: {
                                optimizationLevel: 4,
                              },
                              // lossy compression for png. This will generate smaller file than optipng.
                              pngquant: {
                                quality: [0.2, 0.8],
                              },
                              // Compression for webp.
                              // You can also tranform jpg/png into webp.
                              webp: {
                                quality: 100,
                              },
                              // Compression for svg.
                              svgo: true,
                              // Compression for gif.
                              gifsicle: {
                                optimizationLevel: 3,
                              },
                              // Compression for jpg.
                              mozjpeg: {
                                progressive: true,
                                quality: 60,
                              },
                            },
                          },
                        },
                      ],
                },
        ],
    },
};
