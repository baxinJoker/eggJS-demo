const Controller = require('egg').Controller

class NewController extends Controller {
    async list() {
        const ctx = this.ctx;
        const page = ctx.query.page || 1;
        const newsList = await ctx.service.news.dbList();
        await ctx.render('news/list.tpl', { list: newsList });
    }
    async addItem() {
        //get请求 ctx.query | post请求 ctx.request.body | delete/put请求 ctx.params ,获取接口参数
        const { name } = this.ctx.request.body
        await this.ctx.service.news.insertUser(name)
    }
}
module.exports = NewController