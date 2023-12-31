const date = new Date('October 19 2024 21:00:00 GMT+0530')

const Main = {
    year: 2023,
    season: 3,
    tagline: "A Hub For Cyber Geeks!",
    dates: {
        day1: new Date(2023, 9, 20).toDateString().split(" ").slice(1).join(" "),
        day2: new Date(2023, 9, 21).toDateString().split(" ").slice(1).join(" ")
    },
    registrationClosingDate: date, // month is 0 indexed; Jan is 0;
    brochureDownload: "https://drive.google.com/u/0/uc?id=10re6i_oqC3SXiTLW5HEefl-bqKkeToRS&export=download",
    brochurePreview: "https://drive.google.com/file/d/10re6i_oqC3SXiTLW5HEefl-bqKkeToRS/preview",
    updateMessage: ""
}

export default Main
