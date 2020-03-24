/*
 * @Descripttion: 文章详情h5页面
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-06 16:21:34
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-21 15:00:21
 */
export const HTML =`
<!--
 * @Descripttion: 
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-19 14:49:51
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-20 14:15:02
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
        .list_name{
            font-size: 0.5rem;
            color: #333;
            padding: 0.35rem 0.3rem;
            box-sizing: border-box;
            background-color: #fff;
        }
        .list_author_container{
            display: flex;
            height: 1rem;
            align-items: center;
            background-color: #fff;
            padding: 0 0.3rem;
            box-sizing: border-box;
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
        .list_desc{
            font-size: 0.35rem;
            color: #333;
            padding: 0.3rem 0.3rem 0rem;
            background-color: #fff;
        }
        .ranking_list{
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
        .contentImg {
            display: block;
            width: 100%;
            height: auto;
            margin-top: 0.2rem;
        }
        .read_num {
            float: left;
            color: #999;
            font-size: 0.3rem;
            height:0.7rem;
            line-height: 0.7rem;
        }

        .ranking_list_recommend {
            float: right;
            color: #66AF9E;
            cursor: pointer;
            font-size: 0.3rem;
            width:1.7rem;
            height:0.7rem;
            text-align: center;
            line-height: 0.7rem;
            border-radius: 0.3rem;
        }
    </style>
    <script>
        //使用时设计稿中的尺寸除以100，就是rem的尺寸
        (function(doc, win) {
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function() {
                    var clientWidth = docEl.clientWidth;
                    if(!clientWidth) return;
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';//750式设计稿的尺寸，可以改为自己的设计稿尺寸
                };
            if(!doc.addEventListener) return;
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
        <div class="list_name">10大最珍稀动物</div>
        <div class="list_author_container">
            <div class="list_author_left">
                <img class='list_author_header'  src="http://img3.imgtn.bdimg.com/it/u=2188301108,2208747323&fm=26&gp=0.jpg" alt="">
            </div>
            <div class="list_author_right">
                <div class="list_author">榜单发起者</div>
                <div class="list_date">2019年11月20日</div>
            </div>
        </div>
        <div class="list_desc">天下之大，无奇不有，有我们不知道的，也有我们没有探索过的。不要大惊小怪，或许世界上某个地方有着几乎我们以前闻所未闻见所未见的怪异动物，不仅极其罕见世间少有，你连名字都叫不出来，且其狰狞的面目无不让人看得目瞪口呆，不知你有没有兴趣和胆量一睹它们的芳颜呢？</div>
        <div class="rank_list_container">
            <div class="ranking_list">
                <span class="ranking_list_title">第一名：东方雪人</span>
                <div class="ranking_list_desc">
                    这头在四川古老的原始丛林中发现的怪兽被人称为东方雪人它的出现让科学家也感到困惑。据英国《每日电讯报》4月5日报道?近日?中国四川省的猎人们在当地原始森林中捕获到一只奇怪的动物，当时他们还以为这是一头熊。
                </div>
                <img class='contentImg' src='https://imgsa.baidu.com/exp/w=500/sign=cd79409424f5e0feee1889016c6134e5/6609c93d70cf3bc7a25b8261d800baa1cc112ae7.jpg'></img>
                <div style="overflow: hidden;margin-top: 0.2rem;">
                    <span class="read_num">123 热度</span>
                    <span class="ranking_list_recommend" onclick="setSecommend(1)">榜友推荐 》</span>
                </div>
            </div>
            <div class="ranking_list">
                <span class="ranking_list_title">第二名：东方雪人</span>
                <div class="ranking_list_desc">
                    这头在四川古老的原始丛林中发现的怪兽被人称为东方雪人它的出现让科学家也感到困惑。据英国《每日电讯报》4月5日报道?近日?中国四川省的猎人们在当地原始森林中捕获到一只奇怪的动物，当时他们还以为这是一头熊。
                </div>
                <img class='contentImg' src='https://imgsa.baidu.com/exp/w=500/sign=cd79409424f5e0feee1889016c6134e5/6609c93d70cf3bc7a25b8261d800baa1cc112ae7.jpg'></img>
                <div style="overflow: hidden;margin-top: 0.2rem;">
                    <span class="read_num">123 热度</span>
                    <span class="ranking_list_recommend" onclick="setSecommend(1)">榜友推荐 》</span>
                </div>
            </div>
            <div class="ranking_list">
                <span class="ranking_list_title">第三名：东方雪人</span>
                <div class="ranking_list_desc">
                    这头在四川古老的原始丛林中发现的怪兽被人称为东方雪人它的出现让科学家也感到困惑。据英国《每日电讯报》4月5日报道?近日?中国四川省的猎人们在当地原始森林中捕获到一只奇怪的动物，当时他们还以为这是一头熊。
                </div>
                <img class='contentImg' src='https://imgsa.baidu.com/exp/w=500/sign=cd79409424f5e0feee1889016c6134e5/6609c93d70cf3bc7a25b8261d800baa1cc112ae7.jpg'></img>
                <div style="overflow: hidden;margin-top: 0.2rem;">
                    <span class="read_num">123 热度</span>
                    <span class="ranking_list_recommend" onclick="setSecommend(3)">榜友推荐 》</span>
                </div>
            </div>
        </div>
    </div>
    <script>
        function setSecommend(index) {
            if (window.ReactNativeWebView.postMessage) {
                window.ReactNativeWebView.postMessage(JSON.stringify({
                    type: 'setRecommend',
                    data: index,
                }))
            }
        }
    </script>
</body>

</html>`;
/*export const HTML = `
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
            padding-left: 0.3rem;
            padding-right: 0.25rem;
            box-sizing: border-box;
        }

        h2 {
            width: 100%;
            margin:0.2rem 0;
            font-size: 0.6rem;
        }

        .articleLabel {
            color: #666;
            margin-bottom: 0.2rem;
            float: left;
            font-size: 0.3rem;
        }

        .articleDesc {
            margin-top: 0.2rem;
            font-size: 0.4rem;
        }

        .ranking_list_title {
            font-size: 0.4rem;
            font-weight: bolder;
        }

        .ranking_list_desc {
            font-size: 0.35rem;
        }
        .contentImg {
            display: block;
            width: 100%;
            height: auto;
            margin-top: 0.2rem;
        }
        .read_num {
            float: left;
            color: '#999';
            font-size: 0.3rem;
            height:0.7rem;
            line-height: 0.7rem;
        }

        .ranking_list_recommend {
            float: right;
            color: #66AF9E;
            cursor: pointer;
            font-size: 0.3rem;
            width:1.7rem;
            height:0.7rem;
            text-align: center;
            line-height: 0.7rem;
            border-radius: 0.3rem;
        }

    </style>
    <script>
        //使用时设计稿中的尺寸除以100，就是rem的尺寸
        (function(doc, win) {
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function() {
                    var clientWidth = docEl.clientWidth;
                    if(!clientWidth) return;
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';//750式设计稿的尺寸，可以改为自己的设计稿尺寸
                };
            if(!doc.addEventListener) return;
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
        <h2>10大最稀有最罕见的奇葩动物</h2>
        <div style="overflow: hidden;">
            <div class='articleLabel'>
                <span>来源：</span>
                <span>网络、</span>
            </div>
            <div class='articleLabel'>
                <span>标签：</span>
                <span>动物、</span>
            </div>
            <div class='articleLabel'>
                <span>时间：</span>
                <span>2019年11月6日</span>
                <!-- <span style='float:right'>喜欢：123</span> -->
            </div>
        </div>
        <div class='articleDesc'>
            天下之大，无奇不有，有我们不知道的，也有我们没有探索过的。不要大惊小怪，或许世界上某个地方有着几乎我们以前闻所未闻见所未见的怪异动物，不仅极其罕见世间少有，你连名字都叫不出来，且其狰狞的面目无不让人看得目瞪口呆，不知你有没有兴趣和胆量一睹它们的芳颜呢？
        </div>
        <div class="ranking_container">
            <div class="ranking_list">
                <span class="ranking_list_title">第一名：东方雪人</span>
                <div class="ranking_list_desc">
                    这头在四川古老的原始丛林中发现的怪兽被人称为东方雪人它的出现让科学家也感到困惑。据英国《每日电讯报》4月5日报道?近日?中国四川省的猎人们在当地原始森林中捕获到一只奇怪的动物，当时他们还以为这是一头熊。
                </div>
                <img class='contentImg' src='https://imgsa.baidu.com/exp/w=500/sign=cd79409424f5e0feee1889016c6134e5/6609c93d70cf3bc7a25b8261d800baa1cc112ae7.jpg'></img>
                <div style="overflow: hidden;margin-top: 0.2rem;">
                    <span class="read_num">热度值：123</span>
                    <span class="ranking_list_recommend" onclick="setSecommend(0)">榜友推荐</span>
                </div>
            </div>
            <div class="ranking_list">
                <span class="ranking_list_title">第二名：东方雪人</span>
                <div class="ranking_list_desc">
                    这头在四川古老的原始丛林中发现的怪兽被人称为东方雪人它的出现让科学家也感到困惑。据英国《每日电讯报》4月5日报道?近日?中国四川省的猎人们在当地原始森林中捕获到一只奇怪的动物，当时他们还以为这是一头熊。
                </div>
                <img class='contentImg' src='https://imgsa.baidu.com/exp/w=500/sign=cd79409424f5e0feee1889016c6134e5/6609c93d70cf3bc7a25b8261d800baa1cc112ae7.jpg'></img>
                <div style="overflow: hidden;margin-top: 0.2rem;">
                    <span class="read_num">123热度</span>
                    <span class="ranking_list_recommend" onclick="setSecommend(1)">榜友推荐</span>
                </div>
            </div>
        </div>
    </div>
    <script>
        function setSecommend(index) {
            if (window.ReactNativeWebView.postMessage) {
                window.ReactNativeWebView.postMessage(JSON.stringify({
                    type: 'setRecommend',
                    data: index,
                }))
            }
        }
    </script>
</body>

</html>
`*/

