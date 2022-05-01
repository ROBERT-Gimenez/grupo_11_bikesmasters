
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const {users , writeUsers}=require('../data');
const { validationResult } = require('express-validator');


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const removeAccents = (str) => {return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");}


module.exports = {
    index: (req, res)=> {
        res.render('home' ,{
            css:'home.css',
			products,	
			toThousand,
            session:req.session
        }
        )
    },
    search: (req, res) => {
        let searchResult = [];
            products.forEach(product => {
                if(removeAccents(product.name.toLowerCase()).includes(req.query.keywords.toLowerCase())){
                    searchResult.push(product)
                }
            }
            );
            res.render ('products/searchResults',{
                titulo: 'Bikesmasters',
                css: 'home.css',
                resultado: searchResult ,
                keyword: req.query.keywords,
                toThousand
            })
    },

    login: (req, res) => {
        res.render('users/login', {
            titulo: "Login",
            css: 'login.css',
            session:req.session
        })
    },

    update: {
        //Completar lógica para guardar los datos
    },

    register: (req, res) => {
        res.render('users/register', {
            titulo: "Registrarse",
            session: req.session
        })
    },
}