module.exports = {
    get : ( req, res ) => {
        res.render( 'waycoku', {
            title : '为什么选择可酷',
            userInfo : req.session.userInfo || null
        } )
    },
    post : {

    }
};