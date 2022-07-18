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
            const user = await db.Usuario.findOne({
                where: {
                    id: req.params.id,
                },
                include: ['UserRol', 'direccion']
            })
            res.send(user)
        } catch (error) {
            res.send(error)
        }
    },

    userUpdate: (req, res) => {

    }
}