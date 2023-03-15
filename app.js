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
                singleElement[titleRow.split(",")[j]] = dataList[i].split(",")[j]

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


// const rows = require("./asd.json")

// const titleRow = rows[0]
// const dataList = rows.slice(1, rows.length)
// let singleElement = {}
// let allElements = []
// for (i in dataList) {
//     for (j in dataList[i].split(",")) {
//         singleElement[titleRow.split(",")[j]] = dataList[i].split(",")[j]

//         const size = Object.keys(singleElement).length;
//         if (size == titleRow.split(",").length) {
//             allElements.push(singleElement)
//             singleElement = {}
//         }
//     }
// }

// console.log(allElements);



                // Candidates will not be allowed to enter the exam venue after entry closing time. Candidates should carry 2 latest passport size photographs and an original valid photo identity card having the same date of birth as printed on the admit card. If the Photo ID card does not have the Date of Birth then the candidate must carry an additional certificate also in original as proof of their Date of Birth, failing which they will not be admitted for the exam. In case of any mismatch in the date of birth, candidate will not be admitted for the exam.

