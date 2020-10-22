const formatDate = require("./formatDate")

describe("formatDate tests", () => {
    it("returns a string", () => {
        expect(typeof formatDate("2018-01-19T14:47:14.514Z")).toBe("string")
    })
    it("returns a date and time in the correct format", () => {
        const input = "2018-01-19T14:47:14.514Z"
        const expected = "19-01-2018 at 14:47"
        expect(formatDate(input)).toBe(expected)
    })
})