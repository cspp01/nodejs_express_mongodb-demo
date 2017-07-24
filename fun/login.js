module.exports = {
    get : ( req, res ) => {
        if( req.session.userInfo ) {
            res.render( 'jump', {
                msg : '您已经登录'
            } )
        } else {
            // 跳转到登录页
            res.render( 'login', {
                title : '登录',
                userInfo : req.session.userInfo || null
            } )
        }
    },
    post : ( req, res ) => {
        // 登录
        // 获取
        let adminsM = global.mod.getModel( 'users' ),
            // 提交数据
            reqs = {
                name : req.body.username,
                pass : req.body.password
            };
        // 查找数据
        adminsM.find( { name : reqs.name, pass : reqs.pass }, ( err, docs ) => {
            if( err ) {
                // 查找错误时
                // 返回信息和自定义编码 500表示服务器错误
                res.send( { msg : '发生错误', cod : 500 } );
            } else {
                // docs为数组，
                // 当为空时，说明没找到数据，用户名或密码错误
                // 否则找到数据，登陆成功
                // 400 查找错误
                // 201 成功
                if( docs.length === 0 ) {
                    res.send( { msg : '用户名或密码错误', cod : 400 } );
                } else {
                    let userInfo = {
                        name : reqs.name,
                        age : docs[ 0 ].age,
                        sex : docs[ 0 ].sex,
                        pass : docs[ 0 ].pass
                    };
                    // 把登录数据加入session
                    req.session.userInfo = userInfo;
                    res.send( { msg : '登陆成功', cod : 201 } );
                }
            }
        } )
    }
};
