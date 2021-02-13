

import { addNewContact } from '../controllers/crmControllers';

const routes = (app) => {
    app.route('/contact')
    .get((req,res) => {
        console.log(`Request de : ${req.originalUrl}`);
        console.log(`Request type : ${req.method}`);
        next();
    }, (req, res, next) => {
        res.send(`Demande GET avec succès depuis : ${req.originalUrl}`);
    })
    .post(addNewContact);

    app.route('/contact/:contactId')
        .put((req,res) => 
            res.send('Demande PUT avec succès'))
        .delete((req,res) => 
            res.send('Demande DELETE avec succès'));
}

export default routes;