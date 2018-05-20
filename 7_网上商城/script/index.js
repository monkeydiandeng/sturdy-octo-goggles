/**
 * Created by apple on 18/5/13.
 */
// var count = 0;
// var timer ;
// $('.btn-box a').on('mouseover',function(){
//     change($(this).index());
//     count = $(this).index();
// });
// run();
//
// $('#jnImageroll').on('mouseover',function(){
//     clearInterval(timer);
// }).on('mouseout',function(){
//    run();
// });
// function run(){
//     timer = setInterval(function(){
//         count++;
//         if(count == $('#JS_imgWrap img').length){
//             count = 0;
//         }
//         change(count);
//
//     },2000);
// }
// function change(idx){
//     $('.btn-box a').eq(idx).addClass('chos').siblings().removeClass('chos');
//     $('#JS_imgWrap img').eq(idx).stop().fadeIn(600).siblings().stop().fadeOut(600);
// }
// ------------我写的----------------
//     -------------轮播图--------------
var count=0;
$(".btn-box a").on("mouseover",function(){

     change($(this).index());
     count=$(this).index();
    // $(this).addClass("chos").siblings().removeClass('chos');
    // $('#JS_imgWrap img').eq($(this).index()).fadeIn(200).siblings().fadeOut(600);
});
run();
// var timer=setInterval(function(){
//     count++;
//     if (count==$('#JS_imgWrap img').length){count=0}
//     change(count)
// },2000);
function change (idx) {
    $(".btn-box a").eq(idx).addClass("chos").siblings().removeClass('chos');
    $('#JS_imgWrap img').eq(idx).fadeIn(400).siblings().fadeOut(600);
}
$("#jnImageroll").on('mouseover',function(){
    clearInterval(timer)})
     .on('mouseout',function(){run()});
function run(){timer=setInterval(function(){
    // count=$(".btn-box a").index();
    count++;
    if (count==$('#JS_imgWrap img').length){count=0}
    change(count)
},2000);}
// -------品牌活动----------
$("#jnBrandTab li").on('click',function(){
    $(this).addClass('chos').siblings().removeClass('chos');
    $("#jnBrandList").animate({left:-780*$(this).index()},1000)
})
// ---------最新动态-----------

var tittle;
$('#jnNoticeInfo a').on('mouseover',function(e){
   tittle=$(this).attr('title') ;
   $('<div class="tippy">'+tittle+'</div>').appendTo('body').offset({
       left:e.pageX+20,
       top:e.pageY+20
   })
    $(this).attr('title','')
})
$('#jnNoticeInfo a').on('mouseout',function(e){
    $('.tippy').remove();
    $(this).attr('title',tittle)

})
// -------换肤-------------
$('#skin_0').on('click',function () {
    $('#skin_0').addClass('selected').siblings().removeClass('selected');
    $('.mainNav').css('background-color','#4A4A4A');
    $('#jnCatalog h2').eq(0).css('background-color','#6E6E6E');
});
$('#skin_1').on('click',function () {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.mainNav').css('background-color','#BE46D8');
    $('#jnCatalog h2').eq(0).css('background-color','#D49AE1');
});
$('#skin_2').on('click',function () {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.mainNav').css('background-color','#E44072');
    $('#jnCatalog h2').eq(0).css('background-color','#F296B2');
});
$('#skin_3').on('click',function () {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.mainNav').css('background-color','#37C7D4');
    $('#jnCatalog h2').eq(0).css('background-color','#98E0E6');
});
$('#skin_4').on('click',function () {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.mainNav').css('background-color','#F9AF2A');
    $('#jnCatalog h2').eq(0).css('background-color','#FFCF78');
});
$('#skin_5').on('click',function () {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.mainNav').css('background-color','#B1D410');
    $('#jnCatalog h2').eq(0).css('background-color','#CDE074');
});
// -----------搜索框----------


// $('#inputSearch').on('focus',function () {
//     $(this).val('');
// }).on('blur',function () {
//     $(this).val('请输入商品名称');
// });

$('#inputSearch').on('focus',function (){
    $(this).val('');
}).on ('blur',function() {
    $(this).val("请输入商品名称");
})
