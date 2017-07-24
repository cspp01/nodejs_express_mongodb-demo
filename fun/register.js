module.exports = {
    get : ( req, res ) => {
        if( req.session.userInfo ) {
            res.render( 'jump', {
                msg : '您已经登录'
            } )
        } else {
            // 跳转到注册页
            res.render( 'register', {
                title : '注册',
                userInfo : req.session.userInfo || null
            } )
        }
    },
    post : ( req, res ) => {
        // 注册
        let adminsM = global.mod.getModel( 'users' ),
            reqs = {
                name : req.body.username,
                pass : req.body.password,
                age : req.body.age,
                sex : req.body.sex
            };
        adminsM.find( { name : reqs.name }, ( err, docs ) => {
            if( docs.length !== 0  ) {
                res.send( { msg : '用户名已经注册，请更换用户名重新注册', cod : 400 } )
            } else {
                adminsM.create( {
                    name : reqs.name,
                    pass : reqs.pass,
                    age : reqs.age,
                    sex : reqs.sex
                }, ( err, docs ) => {
                    res.send( { msg : '注册成功', cod : 201 } );
                } )
            }
        } );
    }
};
