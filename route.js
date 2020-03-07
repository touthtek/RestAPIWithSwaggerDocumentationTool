const express = require('express');
const router = express.Router();
const controller = require('./usercontroller');
const path = require('path');



/**
 * @swagger
 * /user:
 *   get:
 *     description: use to request all users
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.get('/user', controller.getalluser);

/**
 * @swagger
 * /user/{userid}:
 *   get:
 *     description: use to request single user
 *     responses:
 *       '200':
 *         description: A successful response
 *     parameters:
 *       -  in: path
 *          name : userid
 *          schema : 
 *            type : integer
 *          required : true
 *          description : id of the user  
 */
router.get('/user/:userid', controller.getuserbyid);

/**
 * @swagger
 * /adduser:
 *   post:
 *     description: use to add user
 *     responses:
 *       '200':
 *         description: A successful response
 *     consumes:
 *       -  application/json
 *     parameters:
 *       -  in: body
 *          name: user
 *          description: The user to create.
 *          schema:
 *            type: object
 *            required:
 *              -  title
 *            properties : 
 *              title : 
 *                type : string
 *              name :
 *                type : string
 *              phone : 
 *                type : string
 *              email :
 *                type : string
 *              password :
 *                type : string
 */
router.post('/adduser', controller.adduser);



/**
 * @swagger
 * /login:
 *   post:
 *     description: User Login
 *     responses:
 *       '200':
 *         description: User login successful
 *       '401' : 
 *         description : Authorisation faild
 *     consumes:
 *       -  application/json
 *     parameters:
 *       -  in: body
 *          name: user
 *          description: The user is created.
 *          schema:
 *            type: object
 *            required:
 *              -  email
 *            properties : 
 *             
 *              email :
 *                type : string
 *              password :
 *                type : string
 */
router.post('/login', controller.login);


 router.get('/', (req, res) => res.status(200).redirect(
      "/api-doc"
    ));


 router.get('/login', (req, res) => res.status(200).sendFile(path.join(path.dirname(process.mainModule.filename), 'login.html')));

    router.get('/adduser', (req, res) => res.status(200).sendFile(path.join(path.dirname(process.mainModule.filename), 'user.html')));


module.exports = router;
