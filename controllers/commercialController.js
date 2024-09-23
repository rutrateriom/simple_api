const Commercial = require('../models/Commercial');
//get
exports.getAllCommercials = async (req, res) => {
    try {
        const commercials = await Commercial.find();
        res.status(200).json(commercials);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
//post
exports.addCommercial = async (req, res) => {
    const commercial = new Commercial({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        sales: req.body.sales,
    });

    try {
        const newCommercial = await commercial.save();
        res.status(201).json(newCommercial);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
//delete
exports.deleteCommercial = async (req, res) => {
    try {
        await Commercial.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
