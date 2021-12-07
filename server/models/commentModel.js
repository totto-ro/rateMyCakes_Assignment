const mongoose = require( 'mongoose' );

const CommentSchema = new mongoose.Schema({

    comment : {
        type : String,
        required : true
    },

    stars: {
        type: Number,
        required: true,
    }
    
}, { timestamps: true });

const Comment = mongoose.model( 'comments', CommentSchema );

const CommentModel = {
    addOneComment : function( newComment ){
        return Comment.create( newComment );
    },

    removeComment: function( id ){
        return Comment.deleteOne({ _id : id });
    },
}

module.exports = {
    CommentSchema,
    CommentModel
};