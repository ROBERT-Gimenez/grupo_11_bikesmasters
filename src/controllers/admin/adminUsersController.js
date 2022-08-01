const db = require('../../database/models');
const fs = require('fs')
const path = require('path')

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
            res.render(`admin/users/adminUserEdit#${req.params.id}`, {
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
            res.redirect(`/admin/usuarios#${req.params.id}`)
        } catch (error) {
            res.send(error)
        }
    },

    userDelete: async (req, res) => {
        let userId = +req.params.id
        try {
            let user = await db.Usuario.findByPk(userId)
            if(fs.existsSync(path.join(__dirname, '../../../public/images/profile/' + user.avatar)) && user.avatar !== "user-default.png") {
                fs.unlinkSync(path.join(__dirname, '../../../public/images/profile/' + user.avatar))
                let userDeleted = await db.Usuario.destroy({ where: { id: userId } })
                let userDirectionDeleted = await db.Direccione.destroy({ where: { id: user.direccion_id } })
            } else {
                let userDeleted = await db.Usuario.destroy({ where: { id: userId } })
                let userDirectionDeleted = await db.Direccione.destroy({ where: { id: user.direccion_id } })
            }
            res.redirect(`/admin/usuarios`)
        } catch (error) {
            res.send(error + "Error 400")
        }
    }
}