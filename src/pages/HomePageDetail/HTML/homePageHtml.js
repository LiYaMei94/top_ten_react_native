/*
 * @Descripttion: 文章详情h5页面
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-06 16:21:34
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-20 14:21:20
 */

export const HTML1 = `
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
            width: 100%
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

        .container {
            padding-left: 0.3rem;
            padding-right: 0.25rem;
            box-sizing: border-box;
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

        .articleDesc {
            margin-top: 0.4rem;
            font-size: 0.4rem;
        }
        h3{
            font-size: 0.4rem;
            margin-top: 0.1rem;
            margin-bottom: 0.1rem
        }
        .articleContent {
            width: 100%;
        }

        .contentLine {
            width: 100%;
        }

        .contentImg {
            display: block;
            width: 100%;
            height: auto;
        }

        .lineText {
            padding-bottom: 0.2rem;
            font-size: 0.35rem;
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
        <div class="list_author_container">
            <div class="list_author_left">
                <img class='list_author_header'  src="http://img3.imgtn.bdimg.com/it/u=2188301108,2208747323&fm=26&gp=0.jpg" alt="">
            </div>
            <div class="list_author_right">
                <div class="list_author">榜单发起者</div>
                <div class="list_date">2019年11月20日</div>
            </div>
        </div>
        <div class='articleDesc'>
            天下之大，无奇不有，有我们不知道的，也有我们没有探索过的。不要大惊小怪，或许世界上某个地方有着几乎我们以前闻所未闻见所未见的怪异动物，不仅极其罕见世间少有，你连名字都叫不出来，且其狰狞的面目无不让人看得目瞪口呆，不知你有没有兴趣和胆量一睹它们的芳颜呢？
        </div>
        <div class='articleContent'>
            <div class='contentLine'>
                <h3>1、东方雪人</h3>
                <div class='lineText'>
                    这头在四川古老的原始丛林中发现的怪兽被人称为东方雪人它的出现让科学家也感到困惑。据英国《每日电讯报》4月5日报道?近日?中国四川省的猎人们在当地原始森林中捕获到一只奇怪的动物，当时他们还以为这是一头熊。
                </div>
                <!--<img class='contentImg' src='https://imgsa.baidu.com/exp/w=500/sign=cd79409424f5e0feee1889016c6134e5/6609c93d70cf3bc7a25b8261d800baa1cc112ae7.jpg'></img>-->
            </div>
            <div class='contentLine'>
                <h3>2、chupacabra</h3>
                <div class='lineText'>
                    这个神秘的怪兽的西班牙语名字是chupacabra它看上去一半像爬行动物，一半像袋鼠。1995年?一位西班牙的农户称该怪兽袭击了超过150头家畜，并且吸干了每一个家畜的血。</div>
                <!--<img class='contentImg' src='https://imgsa.baidu.com/exp/w=500/sign=c8c4764938adcbef01347e069cae2e0e/e1fe9925bc315c602cce246284b1cb13485477e7.jpg'></img>-->
            </div>
            <div class='contentLine'>
                <h3>3、吸血鬼鱼</h3>
                <div class='lineText'>
                    这种半透明的小鱼只有17毫米长，属于鲤科。这一科的鱼大多都是淡水鱼，如鲤鱼。这条吸血鬼鱼会被正式宣布为一个新的物种。伦敦自然科学博物馆的动物学家拉尔夫·布里茨博士为这一发现感到高兴，他说：这条鱼是近10多年来发现的最令人惊奇的脊椎动物。
                </div>
                <!--<img class='contentImg' src='https://imgsa.baidu.com/exp/w=500/sign=36997af271f0f736d8fe4c013a57b382/b999a9014c086e06806873c60b087bf40bd1cb7f.jpg'></img>-->
            </div>
        </div>
    </div>
</body>

</html>
`

export const HTML2 = `
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
                width: 100%
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

            .container {
                padding-left: 0.3rem;
                padding-right: 0.25rem;
                box-sizing: border-box;
            }

            .list_author_container{
                display: flex;
                height: 1rem;
                align-items: center;
                background-color: #fff;
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

            .articleDesc {
                margin-top: 0.4rem;
                font-size: 0.4rem;
            }
            h3{
                font-size: 0.4rem;
                margin-top: 0.1rem;
                margin-bottom: 0.1rem
            }
            .articleContent {
                width: 100%;
            }

            .contentLine {
                width: 100%;
            }

            .contentImg {
                display: block;
                width: 100%;
                height: auto;
            }

            .lineText {
                padding-bottom: 0.2rem;
                font-size: 0.35rem;
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
            <div class="list_author_container">
                <div class="list_author_left">
                    <img class='list_author_header'  src="http://img3.imgtn.bdimg.com/it/u=2188301108,2208747323&fm=26&gp=0.jpg" alt="">
                </div>
                <div class="list_author_right">
                    <div class="list_author">榜单发起者</div>
                    <div class="list_date">2019年11月20日 | 网络</div>
                </div>
            </div>
            <div class='articleDesc'>天下之大，无奇不有，有我们不知道的，也有我们没有探索过的。不要大惊小怪，或许世界上某个地方有着几乎我们以前闻所未闻见所未见的怪异动物，不仅极其罕见世间少有，你连名字都叫不出来，且其狰狞的面目无不让人看得目瞪口呆，不知你有没有兴趣和胆量一睹它们的芳颜呢？</div>
            <div class='articleContent'>
                <div class='contentLine'>
                    <h3>1、东方雪人</h3>
                    <div class='lineText'>这头在四川古老的原始丛林中发现的怪兽被人称为东方雪人它的出现让科学家也感到困惑。据英国《每日电讯报》4月5日报道?近日?中国四川省的猎人们在当地原始森林中捕获到一只奇怪的动物，当时他们还以为这是一头熊。</div>
                    <img class='contentImg' src='https://imgsa.baidu.com/exp/w=500/sign=cd79409424f5e0feee1889016c6134e5/6609c93d70cf3bc7a25b8261d800baa1cc112ae7.jpg'></img>
                </div>
                <div class='contentLine'>
                    <h3>2、chupacabra</h3>
                    <div class='lineText'>这个神秘的怪兽的西班牙语名字是chupacabra它看上去一半像爬行动物，一半像袋鼠。1995年?一位西班牙的农户称该怪兽袭击了超过150头家畜，并且吸干了每一个家畜的血。</div>
                    <img class='contentImg' src='https://imgsa.baidu.com/exp/w=500/sign=c8c4764938adcbef01347e069cae2e0e/e1fe9925bc315c602cce246284b1cb13485477e7.jpg'></img>
                </div>
                <div class='contentLine'>
                    <h3>3、吸血鬼鱼</h3>
                    <div class='lineText'>这种半透明的小鱼只有17毫米长，属于鲤科。这一科的鱼大多都是淡水鱼，如鲤鱼。这条吸血鬼鱼会被正式宣布为一个新的物种。伦敦自然科学博物馆的动物学家拉尔夫·布里茨博士为这一发现感到高兴，他说：这条鱼是近10多年来发现的最令人惊奇的脊椎动物。</div>
                    <img class='contentImg' src='https://imgsa.baidu.com/exp/w=500/sign=36997af271f0f736d8fe4c013a57b382/b999a9014c086e06806873c60b087bf40bd1cb7f.jpg'></img>
                </div>
            </div>
        </div>
    </body>
</html>
`