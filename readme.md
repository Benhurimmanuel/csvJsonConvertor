# Description
 
 This Package can be used to convert csv files to JSON objects and vice versa

# LICENSE 
MIT License

Copyright (c) 2023 Benhurimmanuel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Install
```
$ npm install english_contractions
```

```
$ const csv_json_convertor = require("parse-csv-json");

//note : by default the delimmter for the csv are `_-;,`, delimtters can be changed in the fucntion by passing as a continous string

//csv_json_convertor.csvJson(pathtofile,delimtter)
csv_json_convertor.csvJson("./test.csv")
csv_json_convertor.csvJson("./test.csv",`$`)

//input
//output
```

