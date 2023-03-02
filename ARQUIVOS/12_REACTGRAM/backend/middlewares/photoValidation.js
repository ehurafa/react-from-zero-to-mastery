const { body } = require("express-validator")

const photoInsertValidation = () => {
    return [
        body("title")
            .not()
            .equals("undefined")
            .withMesssage("O título é obrigatório.")
            .isString()
            .withMesssage("O título é obrigatório.")
            .isLength({ min: 3 })
            .withMesssage("O título precisa ter no mínimo 3 caracteres."),
        body("image")
            .custom((value, { req }) => {
                if(!req.file) {
                    throw new Error("A imagem é obrigatória.")
                }
                return true;
            })

    ]
};

const photoUpdateValidation = () => {
    retun [
        body("title")
        .optional()
        .isString()
        .withMessage("O título é obrigatório.")
        .isLength({ min: 3 })
        .withMesssage("O título precisa ter no mínimo 3 caracteres.")
    ]
}

module.exports = {
    photoInsertValidation,
    photoUpdateValidation
}