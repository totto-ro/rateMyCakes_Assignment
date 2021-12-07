const mongoose = require( 'mongoose' );
const {CommentSchema, CommentModel} = require( './commentModel' );

const CakeSchema = new mongoose.Schema({
    bakerName : {
        type : String,
        required : true,
        minlength : 2, 
        maxlength : 20
    },
    image: {
        type: String,
        unique: true,
        required: true
    },

    comments : [  CommentSchema ]

    
}, { timestamps: true });

const Cake = mongoose.model( 'cakes', CakeSchema );

const CakeModel = {
    createCake : function( newCake ){
        return Cake.create( newCake );
    },

    getAllCakes : function( ){
        return Cake.find().sort( { created_at: -1 } );
    },

    getCakeByBakerName : function( bakerName ){
        return Cake.findOne( {bakerName : bakerName} );
    },

    getCakeById : function( id ){
        return Cake.findOne( { _id : id } );
    },

    updateCake: function( id, cakeToUpdate ){
        return Cake.findOneAndUpdate( { _id : id },{ $set:cakeToUpdate }, { new:true } )
    },

    destroyCake : function( id ){
        return Cake.deleteOne({ _id : id });
    },

    updateCakeComment : function( id, newComment ){
        return CommentModel.addOneComment( newComment )
            .then( result => {
                return Cake.findByIdAndUpdate( { _id: id }, {$push: {comments: result}} );
            });
    },

    destroyCakeComment : function( id, currentComment ){
        return CommentModel.removeComment( currentComment )
            .then( result => {
                return Cake.findByIdAndUpdate({_id: id}, {$pull: {comments: result}});
            });
    },

};

module.exports = {CakeModel};