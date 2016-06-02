window.onload = function(){
 tab("tab_t","li","tab_c","div","onmouseover")
 function tab(tab_t,tab_t_tag,tab_c,tag_c_tag,evt){
  var tab_t = document.getElementById(tab_t);
  var tab_t_li = tab_t.getElementsByTagName(tab_t_tag);//取得abc下面的所有标签为li的元素，返回的是一个元素集合，有数组的一些属性
  var tab_c = document.getElementById(tab_c);
  var tab_c_li = tab_c.getElementsByTagName(tag_c_tag);
  var len = tab_t_li.length;
  var i=0;
  for(i=0; i<len; i++){
   tab_t_li[i].index = i;//循环给选项卡加一个额外的属性并赋值，以做选项卡和内容的对应
   tab_t_li[i][evt] = function(){
        for(i=0; i<len; i++){ // 先循环隐藏所有选项卡
         tab_t_li[i].className = '';
         tab_c_li[i].className = 'hide';
        }                     
    tab_t_li[this.index].className = 'act'; //让所点击的选项及对应内容显示
    tab_c_li[this.index].className = '';
   }
  }
 }
}