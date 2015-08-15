# require-anywhere
Require files relative to the position of your package.json

## Install

`npm install require-anywhere`

## Usage

```javascript
var anywhere = require("require-anywhere")(__dirname);

// Requires the file 'utils.js' in '/path/to/your-app/libs/'
// where '/path/to/your-app/' is the directory where your package.json resides
var utils = anywhere("libs/utils");
```
