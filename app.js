const fs = require("fs");
let allElements = []

module.exports = {

    //CSV-JSON parser
    // @description converts CSV into JSON, takes _-;, as default delimmters,if delimiter is not specified
    // @params filePath,delimiter-string,string
    // @return  JSON
    csvJson: (filePath = '', delimiter = `_-;,`) => {
        switch (filePath) {
            case '': throw new ReferenceError(`filePath must be a specified`)
            case (undefined || 'undefined'): throw TypeError(`filePath cannot be undefined`)
            case (null || 'null'): throw TypeError(`filePath cannot be null`)
            default:
                break;
        }
        if (typeof (filePath) !== 'string') { throw new TypeError(`filePath must be a valid string`) }
        else if (typeof (delimiter) !== 'string') throw new TypeError(`delimiter must be a valid string`)
        else {
            return new Promise((resolve, reject) => {
                fs.createReadStream(filePath, 'utf-8')
                    .on("data", function (row) {
                        var content = JSON.stringify(row);
                        var data = JSON.parse(content);
                        // after reading from file converting to JSON
                        const rows = data.split("\n")
                        const titleRow = rows[0]
                        const dataList = rows.slice(1, rows.length)
                        let singleElement = {}
                        for (i in dataList) {
                            for (j in dataList[i].split(",")) {
                                let singleEntry = dataList[i].split(",")[j]
                                if (singleEntry == "" || singleEntry == "\r") { singleEntry = null }
                                delimiter.split('').some(specialChar => {
                                    if (JSON.stringify(singleEntry).includes(specialChar)) {
                                        singleEntry = singleEntry.toString().replace(/"/g, "").split(specialChar)
                                        return true;
                                    }
                                });
                                singleElement[titleRow.split(",")[j].trim()] = singleEntry
                                const size = Object.keys(singleElement).length;
                                if (size == titleRow.split(",").length) {
                                    allElements.push(singleElement)
                                    singleElement = {}
                                }
                            }
                        }
                    })
                    .on('end', () => {
                        resolve(allElements);
                    });
            })
        }
    },

    //JSON-CSV parser
    // @description converts JSON into CSV, 
    // @params filePath,delimiter-string,string
    // @return  JSON
    jsonCSV: () => { }
}
