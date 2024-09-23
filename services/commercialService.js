const Commercial = require('../models/Commercial');

exports.addCommercial = async (data) => {
    const commercial = new Commercial(data);
    return await commercial.save();
};

exports.getAllCommercials = async () => {
    return await Commercial.find();
};

exports.deleteCommercial = async (id) => {
    return await Commercial.findByIdAndDelete(id);
};
