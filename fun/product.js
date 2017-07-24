module.exports = {
    get : ( req, res ) => {
        res.render( 'product', {
            title : '产品',
            userInfo : req.session.userInfo || null
        } )
    },
    post : ( req, res ) => {

    }
};
