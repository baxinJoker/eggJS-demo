console.log($('#item-add')[0])
console.log(123)
$('#item-add').click(function () {
    let username = $('#item-value').val()
    axios({
        method: 'post',
        url: `news/addItem`,
        headers: {
            'x-csrf-token': 'username=smileBaxin; ', // 前后端不分离的情况加每次打开客户端，egg会直接在客户端的 Cookie 中写入密钥 ，密钥的 Key 就是 'scrfToken' 这个字段，所以直接获取就好了
        },
        data: {
            name: username
        }
    })
})