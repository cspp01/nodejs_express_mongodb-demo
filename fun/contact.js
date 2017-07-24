module.exports = {
    get : ( req, res ) => {
        res.render( 'contact', {
            title : '联系方式',
            userInfo : req.session.userInfo || null
        } )
    },
    post : {

    }
};