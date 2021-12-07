const express = require( 'express' );
const CakeRouter = express.Router();
const { CakesController } = require( '../controllers/cakesController' );

CakeRouter
    .route( '/' )
    .post( CakesController.createCake )
    .get( CakesController.getAllCakes );

CakeRouter
    .route( '/:id' )
    .get( CakesController.getOneCake )
    .post( CakesController.addComment )

module.exports = { CakeRouter };