const db = require('../../database/models');

module.exports = {
    list: async (req, res) => {
        try {
            const users = await db.Usuario.findAll({ include: ['UserRol', 'direccion'] })
            res.render('admin/users/adminUsersList', {
                titulo: "Usuarios registrados",
                users,
                css:'adminIndex.css',
                session: req.session
            })
        } catch(error) {
            res.send(error)
        }
    },

    userDetail: async (req, res) => {
        try {
            const users = await db.Usuario.findAll({ include: ['UserRol', 'direccion'] })
            const userEdit = await db.Usuario.findOne({
                where: {
                    id: req.params.id,
                },
                include: ['UserRol']
            })
            const rols = await db.UserRol.findAll()
            res.render(`admin/users/adminUserEdit`, {
                titulo: "Editar usuario",
                userEdit,
                users,
                rols,
                css:'adminIndex.css',
                session: req.session
            })
        } catch (error) {
            res.send(error)
        }
    },

    userUpdate: async (req, res) => {
        try {
            const userUpdated = await db.Usuario.update({
                rol_id: req.body.rol 
            }, {
                where: {
                    id: req.params.id
                }
            })
            res.redirect(`/admin/usuarios#${+req.params.id}`)
        } catch (error) {
            res.send(error)
        }
    }
}