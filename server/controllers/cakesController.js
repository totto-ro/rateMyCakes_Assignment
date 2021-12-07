const {CakeModel} = require( '../models/cakeModel' );
const {CommentModel} = require( '../models/commentModel' )

const CakesController = {


    getOneCake: function (request, response) {
        let id = request.params.id;

        CakeModel
        .getCakeById( id )
            .then(data => {
                if( data === null ){
                    throw new Error( "That cake doesn't exist" );
                }
                else{
                    CakeModel
                        .getCakeById( id )
                        .then( result => {
                            response.status( 200 ).json( result );
                        });
                }
            })
            .catch( error => {
                response.statusMessage = error.message;
                response.status( 404 ).end();
            })
    },

    getAllCakes : function( request, response ){
        CakeModel.getAllCakes()
            .then( cakes => {
                let cakesMap = cakes.map( cake => {
                    // Map through comments here if you need to include comments too
                    return {
                        id : cake._id,
                        bakerName : cake.bakerName,
                        image : cake.image,
                        comments : cake.comments
                    }
                } )
                response.status( 200 ).json( cakesMap );
            });
    },
    createCake : function( request, response ){
        let { bakerName, image} = request.body;

        if( bakerName && image ){
            let newCake = {
                bakerName,
                image
            };
            console.log(newCake);
            CakeModel
                .createCake( newCake)
                .then( cake => {
                    response.status( 201 ).json( cake );
                });
        }
        else{
            response.statusMessage = "You are missing a field to create a new user";
            response.status( 406 ).end();
        }      
    },
    
/*
    addComment: function (request, response) {
        let comment = request.body;
        let stars = request.body;
        let id = request.params.id;
        console.log("Element id: ", id);
        
        if (comment && stars) {

            let newComment = {
                comment,
                stars
            };
            console.log("New comment: ", newComment);
            CommentModel
                .addOneComment( newComment )
                .then(data => {
                    CakeModel
                    .updateCakeComment( id, newComment )
                    .then(result => {
                    if (result === null) {
                        throw new Error("Something went wrong!");
                    }
                    else {
                        response.status(201).json(data);
                    }
                });
                    response.status(201).json(data);
                });
            
        }
    else {
        response.statusMessage = "You are missing a field!";
        response.status(406).end();
        }
    },*/

    
    addComment : function( request, response ){
        let { comment, stars } = request.body;
        let id = request.params.id;

        console.log("Element id: ", id);

        CakeModel
        .getCakeById( id )
            .then(data => {
                if( data === null ){
                    throw new Error( "That cake doesn't exist" );
                }
                else{
                    CakeModel
                    .getCakeById( id )
                    .then( cakeResult => {
                        let newComment = {
                            comment,
                            stars
                        };
                        console.log("New comment: ", newComment);
                        CakeModel
                        .updateCakeComment( cakeResult._id, newComment )
                        .then( result => {
                            response.status(201).json(data);
                        });
                    });
                }
            })
            .catch( error => {
                response.statusMessage = error.message;
                response.status( 404 ).end();
            })
    },


}

module.exports = {CakesController};