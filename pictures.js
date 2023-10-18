(function(){
    var P=[
	{src:"./images/1.jpg",desc:"硫黄岳山頂付近",date:"2020/2/2"},
	{src:"./images/2.jpg",desc:"赤岳鉱泉付近",date:"2020/1/18"},
	{src:"./images/3.jpg",desc:"鳴虫山ハイク/帰路",date:"2020/11/15"},
	{src:"./images/4.jpg",desc:"三国山",date:"2020/11/7"},
	{src:"./images/5.JPG",desc:"筑波山/下山後",date:"2020/1/4"},
	{src:"./images/6.jpg",desc:"石垣島",date:"2023/3/9"},
	{src:"./images/7.jpg",desc:"日光白根山",date:"2020/12/14"},
	{src:"./images/8.jpg",desc:"牛奥ノ雁ヶ腹摺山",date:"2020/11/16"},
	{src:"./images/9.jpg",desc:"牛奥ノ雁ヶ腹摺山",date:"2020/11/16"},
	{src:"./images/10.jpg",desc:"ヤグラ沢",date:"2020/10/30"},
	{src:"./images/11.jpg",desc:"ヤグラ沢",date:"2020/10/30"},
	{src:"./images/12.jpg",desc:"西沢渓谷",date:"2020/10/30"},
	{src:"./images/13.jpg",desc:"木曽駒ヶ岳",date:"2020/9/3"},
	{src:"./images/14.jpg",desc:"檜尾岳",date:"2020/9/5"},
	{src:"./images/15.jpg",desc:"冷池山荘",date:"2020/8/7"},
	{src:"./images/16.jpg",desc:"鹿島槍ヶ岳山頂付近",date:"2020/8/8"},
	{src:"./images/17.jpg",desc:"鹿島槍ヶ岳山頂付近",date:"2020/8/8"},
	{src:"./images/18.jpg",desc:"鹿島槍ヶ岳山頂",date:"2020/8/8"},
    ];

    //shuffle
    function shufflePictures(){
	for (var i=0;i<P.length;++i) {
	    var j=Math.floor(Math.random()*(P.length-i))+i;
	    var tmp=P[i];
	    P[i]=P[j];
    P[j]=tmp;
  }
}
shufflePictures();

var images = [];
for (var i=0;i<P.length;++i){
  images[i]=new Image;
  images[i].src=P[i].src;
}
function updatePicture(pictureIndex) {
  var pic = document.getElementById("picture");
  var picDesc = document.getElementById("picture-description");
  pic.src=P[pictureIndex].src;
  picDesc.innerHTML=P[pictureIndex].desc+"/"+P[pictureIndex].date;
}
window.addEventListener("load",function(){
  var pic = document.getElementById("picture");
  var pictureIndex = 0;
  //window.setInterval(function(){
  //  i=(i+1)%P.length;
  //  pic.src=P[i].src;
  //},15000);
  updatePicture(0);
  document.getElementById("picture-next")
          .addEventListener("click",function(){
    pictureIndex=(pictureIndex+1)%P.length;
    updatePicture(pictureIndex);
  },false);
  document.getElementById("picture-prev")
          .addEventListener("click",function(){
    pictureIndex=(pictureIndex-1+P.length)%P.length;
    updatePicture(pictureIndex);
  },false);
},false);
}());

