# WebPack
*  [Entry](https://webpack.js.org/concepts/#entry) 
*  [Output](https://webpack.js.org/concepts/#output) 
*  [Loaders](https://webpack.js.org/concepts/#loaders) 
*  [Plugins](https://webpack.js.org/concepts/#plugins) 
*  [Mode](https://webpack.js.org/concepts/#mode) 
*  [Browser Compatibility](https://webpack.js.org/concepts/#browser-compatibility) 

For a better understanding of the ideas behind module bundlers and how they work under the hood, consult these resources:
*  [Manually Bundling an Application](https://www.youtube.com/watch?v=UNMkLHzofQI) 
*  [Live Coding a Simple Module Bundler](https://www.youtube.com/watch?v=Gc9-7PBqOC8) 
*  [Detailed Explanation of a Simple Module Bundler](https://github.com/ronami/minipack) 

# Entry:
* An entry point indicates which module web pack  should use to begin building out its internal dependency graph.
``` 
// webpack.config.js

module.exports = {
  entry: './path/to/my/entry/file.js',
};

```
# Output:
* The output property tells webpack where to emit the bundles it creates and how to name these files.  It defaults to `./dist/main.js `for the main output file and to the `./dist` folder for any other generated file.

``` javascript
webpack.config.js

const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
};
```

# Loaders: 
Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid  [modules](https://webpack.js.org/concepts/modules)  that can be consumed by your application and added to the dependency graph.


At a high level, loaders have two properties in your webpack configuration:

The test property identifies which file or files should be transformed.
The use property indicates which loader should be used to do the transforming.

``` javascript
webpack.config.js

const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
};
```

# Plugins:
While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

In order to use a plugin, you need to require() it and add it to the plugins array. Most plugins are customizable through options. Since you can use a plugin multiple times in a configuration for different purposes, you need to create an instance of it by calling it with the new operator.

``` javascript
webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
```

# Mode:
By setting the mode parameter to either development, production or none, you can enable webpack’s built-in optimizations that correspond to each environment. The default value is production.
```
module.exports = {
mode: ‘production’,
};
```
# ## About me

### **Carlos Esquivel**
Carlos Esquivel is originally from Tulsa. After taking a gap year and working in sales, he decided to make a switch into the technology industry to obtain skills in software engineering. As the pandemic hit, Holberton school provided an opportunity to learn and grow in a remote working environment.

As a software engineering student, Carlos enjoys the creative aspects of problem solving such as how collaboration can foster the transfer of knowledge.

* 📖 [Medium](https://1831-9922.medium.com/)
* :bird:[Twitter](https://twitter.com/esquivelcarlo12)

* :robot: [GitHub](https://github.com/CSant04y)

* :briefcase: [LinkedIn](https://www.linkedin.com/in/carlos-esquivel-515768186/)

