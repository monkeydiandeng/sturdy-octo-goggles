/**
 * Created by Administrator on 2018/5/26.
 */
define([''],function(){
    function Carousel(){
        this.container=$('<div id="container"></div>>');
        this.prev=$('<span id="prev">&lt;</span>');
        this.next=$('<span id="next">&gt;</span>');
        this.tab= $('<ul id="tab"></ul>');
    }
    Carousel.prototype.init= function(){
        var option={
            selector:'#box',
            imgData:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg']
        };
        for(var i=0;i<option.imgData.length ;i++){
            $(this.tab).append('<li class="${i==0?"selected";""}">${i+1}</li>')
            $(this.container).append('')
        }
    }
});