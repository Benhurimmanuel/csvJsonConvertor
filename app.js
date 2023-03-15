const fs = require("fs");


fs.createReadStream("./data.csv", 'utf-8')
    .on("data", function (row) {
        var content = JSON.stringify(row);
        var data = JSON.parse(content);

        // after reading from file converting to JSON
        const rows = data.split("\n")
        const titleRow = rows[0]
        const dataList = rows.slice(1, rows.length)

        let singleElement = {}
        let allElements = []

        for (i in dataList) {
            for (j in dataList[i].split(",")) {
                let singleEntry = dataList[i].split(",")[j]
                if (singleEntry == "") { singleEntry = null }
                if (JSON.stringify(singleEntry).includes("-")) {
                    let arrayElements = JSON.stringify(singleEntry).split("-")
                    singleEntry = arrayElements.toString().replace(/"/g, "").split(",")
                }
                singleElement[titleRow.split(",")[j]] = singleEntry
                const size = Object.keys(singleElement).length;
                if (size == titleRow.split(",").length) {
                    allElements.push(singleElement)
                    singleElement = {}
                }
            }
        }
        //writing to file
        fs.writeFileSync("./data.json", JSON.stringify(allElements))
    })




