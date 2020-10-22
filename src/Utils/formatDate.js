const formatDate = (dateStr) => {
    // return "date formatted"
    const day = dateStr.slice(8,10)
    // console.log(day);
    const month = dateStr.slice(5, 7)
    // console.log(month);
    const year = dateStr.slice(0, 4)
    // console.log(year);
    const time = dateStr.slice(11, dateStr.length -8)
    // console.log(time);
    return `${day}-${month}-${year} at ${time}`
}

module.exports = formatDate

// 2018-01-19T14:47:14.514Z

// 2017-09-26T21:34:42.072Z