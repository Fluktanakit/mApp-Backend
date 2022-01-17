const users = require("../../models/mongo/users.js")

exports.insert = async (req, res, next) => {
    let data = new users({
        email:"tanakit421711@gmail.com",
        name: "tanakit",
        lastname:"Sleep"
    })
    data.save()
    res.status(200).json({
        message:"บันทึกข้อมูลเรียบร้อย"
    })
}