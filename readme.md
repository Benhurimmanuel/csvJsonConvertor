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
$ npm i parse-csv-json
```
```
 await csv_json_convertor.csvJson(pathtofile,delimtter)
 note: empty strings will be converted to null 
```

```

//example

$ const csv_json_convertor = require("parse-csv-json");

//note : by default the delimmter for the csv are `_-;,`, delimtters can be changed in the fucntion by passing as a continous string


const test =async ()=>{
   console.lpg(await csv_json_convertor.csvJson("./test.csv"))
   //console.lpg(await csv_json_convertor.csvJson("./test.csv",`$`))
}


//input
Series Title,Season,Episode,Series Status
Series 1,S13,14,
Series 2,S6,14,
Series 3,S5,17,
Series 4,S1,16,
Series 5,S20,15,
Series 6,s1,3,
Series 7,S3,6,
Series 8,S6,10,Ended
Series 9,S8,10,Ended
Series 10,S5,10,Ended
Series 11,S01,7,
Series 12,S03,23,
Series 13,S01,2,

//output
$[
  {
    'Series Title': 'Series 1',
    Season: 'S13',
    Episode: '14',
    'Series Status': null
  },
  {
    'Series Title': 'Series 2',
    Season: 'S6',
    Episode: '14',
    'Series Status': null
  },
  {
    'Series Title': 'Series 3',
    Season: 'S5',
    Episode: '17',
    'Series Status': null
  },
  {
    'Series Title': 'Series 4',
    Season: 'S1',
    Episode: '16',
    'Series Status': null
  },
  {
    'Series Title': 'Series 5',
    Season: 'S20',
    Episode: '15',
    'Series Status': null
  },
  {
    'Series Title': 'Series 6',
    Season: 's1',
    Episode: '3',
    'Series Status': null
  },
  {
    'Series Title': 'Series 7',
    Season: 'S3',
    Episode: '6',
    'Series Status': null
  },
  {
    'Series Title': 'Series 8',
    Season: 'S6',
    Episode: '10',
    'Series Status': 'Ended\r'
  },
  {
    'Series Title': 'Series 9',
    Season: 'S8',
    Episode: '10',
    'Series Status': 'Ended\r'
  },
  {
    'Series Title': 'Series 10',
    Season: 'S5',
    Episode: '10',
    'Series Status': 'Ended\r'
  },
  {
    'Series Title': 'Series 11',
    Season: 'S01',
    Episode: '7',
    'Series Status': null
  },
  {
    'Series Title': 'Series 12',
    Season: 'S03',
    Episode: '23',
    'Series Status': null
  },
  {
    'Series Title': 'Series 13',
    Season: 'S01',
    Episode: '2',
    'Series Status': null
  }
]
```

