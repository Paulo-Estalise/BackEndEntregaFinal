const validRoleAdmin = (req, res, next) => {
    if (req.user.role === "admin") {
        req.logger.verbose("Como admin, não será possível acessar o carrinho de compras e o chat.")
        return next()
    } else {
        res.status(403).render("msgForbidden", { message: "Acesso restrito: área de admin." })
    }
}

const validRoleUser = (req, res, next) => {
    if (req.user.role === "user") {
        req.logger.verbose("Como user, não será possível acessar a área restrita de administração e o painel de controle.")
        return next()
    } else {
        res.status(403).render("msgForbidden", { message: "Acesso restrito: área de usuário." })
    }
}

export default { validRoleAdmin, validRoleUser }
