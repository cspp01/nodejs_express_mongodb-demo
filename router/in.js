let express = require( 'express' ),
    router = express.Router(),
    session = require( 'express-session' ),
    indexGP = require( '../fun/index' ),
    loginGP = require( '../fun/login' ),
    registerGP = require( '../fun/register' ),
    userinfoGP = require( '../fun/user/userinfo' ),
    productGP = require( '../fun/product' ),
    waycokuGP = require( '../fun/waycoku' ),
    contactGP = require( '../fun/contact' );

// 首页路由
router.get( '/', indexGP.get );
// 产品页路由
router.route( '/product' ).get( productGP.get );
// 产品页路由
router.route( '/waycoku' ).get( waycokuGP.get );
// 产品页路由
router.route( '/contact' ).get( contactGP.get );
// 登录路由
router.route( '/login' ).get( loginGP.get ).post( loginGP.post );
// 注册路由
router.route( '/register' ).get( registerGP.get ).post( registerGP.post );
// 个人信息路由
router.route( '/userinfo' ).get( userinfoGP.get );

module.exports = router;
