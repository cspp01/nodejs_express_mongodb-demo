module.exports = {
    get : ( req, res ) => {
        req.query.t && delete req.session.userInfo;
        res.render( 'index', {
            title : '首页',
            userInfo : req.session.userInfo || null
        } )
    }
};