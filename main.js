var products = [
  {
    img: "http://img14.360buyimg.com/n7/jfs/t1993/68/2154001221/110943/bdf7b27b/56ab06d2N38a92f6d.jpg",
    name: '珂兰 黄金手 猴哥款',
    price: '￥405.00'
  },{
    img: "http://img12.360buyimg.com/n7/jfs/t1222/73/1163616574/204043/f5b75490/557f5f5bN57c37c56.jpg",
    name: '珂兰 黄金转运珠 猴哥款',
    price: '￥100.00'
  },{
    img: 'http://img10.360buyimg.com/n7/jfs/t5638/55/5191999037/128289/d34339b4/595bb504N4dd17458.jpg',
    name: '珂兰 黄金手链 3D猴哥款',
    price: '￥45.00'
  }
];
$('.jewels-detail').on('mouseenter','li',function(e){
  $(this).addClass('hover');
})
$('.jewels-detail').on('mouseleave','li',function(e){
   $(this).removeClass('hover');
})
function createProduct(product){
  var  htmlCode = `               <li class="product">
                    <div class="cover"><a class="btn">立即抢购</a></div>
                    <img src="${product.img}">
                    <div class="intro">${product.name}</div>
                    <div class="price">${product.price}</div>
                </li>`
  return htmlCode
}

$('.add').on('click',function(e){
  e.preventDefault()
  var html='';
  for(var i = 1;i<=products.length;i++){
        var $random = Math.floor(products.length*Math.random())
        console.log($random)
       html= html+createProduct(products[$random])
  }
  $('.jewels-detail').append($(html))
})

