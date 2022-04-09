module.exports = {
    list: (req, res) => {
        res.render('admin/adminIndex')
    },
    listproduct: (req, res) => {
        res.render('admin/adproduct')
    },
    editproduct: (req, res) => {
        res.render('admin/editproduct')
    },

}