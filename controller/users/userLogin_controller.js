// 用户登录接口
const users_db = require('../../db/users');

module.exports = async(ctx, next) => {
  let temp = await users_db.query();
  ctx.body = temp;
  // ctx.body = 'this is a users login!'
}