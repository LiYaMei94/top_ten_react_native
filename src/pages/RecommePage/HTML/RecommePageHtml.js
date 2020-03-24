export const HTML =`
<!--
 * @Descripttion: 个人榜单详情
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-19 14:49:51
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-20 14:49:30
 -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0
        }

        html,
        body {
            width: '100%'
        }

        .container {
            width: '100%';
            background-color: #F3F3F3;
        }

        .list_name {
            font-size: 0.5rem;
            color: #333;
            padding: 0.35rem 0.3rem 0;
            box-sizing: border-box;
            background-color: #fff;
            border-top: 0.01rem solid #F3F3F3;
            border-bottom: 0.01rem solid #F3F3F3;
        }


        .list_desc {
            font-size: 0.35rem;
            color: #333;
            padding: 0.3rem 0.3rem 0rem;
            background-color: #fff;
        }
        .ranking_list:first-child{
            padding-top: 0;
        }
        .ranking_list {
            background-color: #fff;
            margin-bottom: 0.2rem;
            padding: 0.3rem;
            box-sizing: border-box;

        }

        .ranking_list_title {
            font-size: 0.4rem;
            font-weight: bolder;
        }

        .ranking_list_desc {
            font-size: 0.35rem;
        }
        .list_author_container{
            display: flex;
            height: 1rem;
            align-items: center;
            background-color: #fff;
            margin-bottom: 0.2rem;
        }
        .list_author_left{
            width: 1rem;
            height: 1rem;
            background-color: #F3F3F3;
            border-radius: 50%;
        }
        .list_author_header{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
        .list_author_right{
            flex: 1;
            margin-left: 0.25rem;
            box-sizing: border-box;
            vertical-align: middle;
        }
        .list_author{
            color: #333;
            font-size: 0.35rem;
        }
        .list_date{
            color: #999;
            font-size: 0.25rem;
        }
        .ranking_list_img {
            display: flex;
            width: 100%;
        }

        .img_item {
            flex: 1;
            margin-top: 0.2rem;
        }

        .img_item>img{
            width: 100%;
            height: auto;
            border-radius: 0.2rem;
        }
        .img_item:last-child{
            margin-left: 0.1rem;
        }
    </style>
    <script>
        //使用时设计稿中的尺寸除以100，就是rem的尺寸
        (function (doc, win) {
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    if (!clientWidth) return;
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';//750式设计稿的尺寸，可以改为自己的设计稿尺寸
                };
            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);
    </script>
    <script>
        (function () {
            var height = null;
            function changeHeight() {
                if (document.body.scrollHeight != height) {
                    height = document.body.scrollHeight;
                    console.log(height)
                    if (window.ReactNativeWebView.postMessage) {
                        window.ReactNativeWebView.postMessage(JSON.stringify({
                            type: 'setHeight',
                            data: height,
                        }))
                    }
                }
            }
            setInterval(changeHeight, 100);
        }());
    </script>
</head>

<body>
    <div class="container">
    <!-- <div class="list_name">其他榜友推荐</div> -->
        <div class="rank_list_container">
            <div class="ranking_list">
                <span class="ranking_list_title">第一名：东方雪人</span>
                <div class="list_author_container">
                    <div class="list_author_left">
                        <img class='list_author_header'  src="http://img3.imgtn.bdimg.com/it/u=2188301108,2208747323&fm=26&gp=0.jpg" alt="">
                    </div>
                    <div class="list_author_right">
                        <div class="list_author">推荐人1</div>
                        <div class="list_date">2019年11月19日</div>
                    </div>
                </div>
                <div class="ranking_list_desc">
                    这头在四川古老的原始丛林中发现的怪兽被人称为东方雪人它的出现让科学家也感到困惑。据英国《每日电讯报》4月5日报道?近日?中国四川省的猎人们在当地原始森林中捕获到一只奇怪的动物，当时他们还以为这是一头熊。
                </div>
                <div class="ranking_list_img">
                    <div class='img_item'>
                        <img
                            src='https://imgsa.baidu.com/exp/w=500/sign=cd79409424f5e0feee1889016c6134e5/6609c93d70cf3bc7a25b8261d800baa1cc112ae7.jpg'></img>
                    </div>
                    <div class='img_item'>
                        <img
                            src='https://imgsa.baidu.com/exp/w=500/sign=cd79409424f5e0feee1889016c6134e5/6609c93d70cf3bc7a25b8261d800baa1cc112ae7.jpg'></img>
                    </div>

                </div>
            </div>
            <div class="ranking_list">
                    <span class="ranking_list_title">第一名：东方雪人</span>
                    <div class="list_author_container">
                        <div class="list_author_left">
                            <img class='list_author_header'  src="http://img3.imgtn.bdimg.com/it/u=2188301108,2208747323&fm=26&gp=0.jpg" alt="">
                        </div>
                        <div class="list_author_right">
                            <div class="list_author">推荐人2</div>
                            <div class="list_date">2019年11月20日</div>
                        </div>
                    </div>
                    <div class="ranking_list_desc">
                        这头在四川古老的原始丛林中发现的怪兽被人称为东方雪人它的出现让科学家也感到困惑。据英国《每日电讯报》4月5日报道?近日?中国四川省的猎人们在当地原始森林中捕获到一只奇怪的动物，当时他们还以为这是一头熊。
                    </div>
                    <div class="ranking_list_img">
                        <div class='img_item'>
                            <img
                                src='https://imgsa.baidu.com/exp/w=500/sign=cd79409424f5e0feee1889016c6134e5/6609c93d70cf3bc7a25b8261d800baa1cc112ae7.jpg'></img>
                        </div>
                        <div class='img_item'>
                            <img
                                src='https://imgsa.baidu.com/exp/w=500/sign=cd79409424f5e0feee1889016c6134e5/6609c93d70cf3bc7a25b8261d800baa1cc112ae7.jpg'></img>
                        </div>
    
                    </div>
                </div>
        </div>
    </div>
    <script>

    </script>
</body>

</html>
`;