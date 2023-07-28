const allCategory = require("../Models/allcategory")

module.exports.add_main_category = async (req,res) => {
    const {title} = req.body
    const img = req.file.path
    console.log(title,img);

    if (title.length == 0){
        return res.status(200).json({
            "response": {
                "status": 2,
                "reason": "unknown"
            }
        })
    }
    try {
        const newCat = new allCategory({
            title,
            img
        })
        await newCat.save()
        return res.status(200).json({
            "response": {
                "status": 1,
                "reason": "data saved"
            }
        })
    } catch (error) {
        return res.status(400).json({
            "response": {
                "status": 2,
                "reason": error.message
            }
        })
    }
}