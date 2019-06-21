const router = require('koa-router')();
const userLogin_controller = require('../controller/users/userLogin_controller');

router.prefix('/users');

// 用户登录
router.get('/', userLogin_controller);

module.exports = router;
