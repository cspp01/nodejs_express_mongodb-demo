module.exports = {
    get : ( req, res ) => {
        if( req.session.userInfo ) {
            res.render( 'user/userinfo', {
                title : '个人信息',
                userInfo : req.session.userInfo || null
            } )
        } else {
            res.render( 'jump', {
                msg : '您还没有登录'
            } )
        }
    },
    post : {

    }
};
