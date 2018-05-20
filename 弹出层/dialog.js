/**
 * Created by Administrator on 2018/5/20.
 */

var dialog={
    open:function(){
        var html= '<div class="dislog-mask">'
            +'<div class="dislog-box">'
            +'<div class="dialog-title">'
            +'<h2>友情提示</h2>'
            +'<span class="dialog-close">X</span>'
            +'</div>'
            +'<div class="dialog-content">哈哈</div>'
            +'</div>'
            +'</div>';
        $('body').append(html);
        $('.dialog-box').css({
        width:obj.width,
        height:obj.height
    });
$( '.dialog-title h2').html(obj,title);
}