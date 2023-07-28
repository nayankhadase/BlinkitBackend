const allCategory = require("../Models/allcategory")


module.exports.get_all_category = async (req, res) => {
    try {
        const allcategory = await allCategory.find()
        console.log(allcategory);
        return res.status(200).json({
            "response": {
                "status": 1,
                "data": allcategory
            }
        })
    } catch (error) {
        return res.status(400).send(error)
    }
}