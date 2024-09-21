const collection = require("../Models/Model")





exports.createAccount = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await collection.create({ name, email, password });

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while creating the user.',
            error: error.message // It's generally not a good idea to expose error messages directly to the client in a production environment.
        });
    }
};
