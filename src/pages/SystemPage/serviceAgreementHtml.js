/*
 * @Descripttion: 服务协议html
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-14 19:27:30
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-15 13:43:50
 */

export const serviceAgreementHtml = `
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
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
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .container{
            padding: 0.2rem 0.3rem;
        }
        .lineItem{
            margin-bottom: 0.4rem;
            font-size: 0.28rem;
            line-height: 0.4rem;
        }
        .lineTitle{
            font-size: 0.32rem;
            margin-bottom: 0.1rem;
            color: black;
        }
        .shallowColor{
            color: #666;
            margin-top:0.1rem;
        }
        .terms_content{
            color: #666;
            margin-top:0.1rem;
        }
        .terms_contentItem{
            margin-bottom: 0.15rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="lineItem shallowColor" style="text-indent: 0.6rem;">
            欢迎阅读十佳服务条款协议(下称“本协议”) ，十佳为东润智点（北京）科技有限公司（以下称“本公司”）开发运营的产品。本协议阐述之条款和条件适用于您使用十佳所提供的各种工具和服务(下称“服务”)。
        </div>
        <div class="lineItem">
            <div class="lineTitle">1. 接受条款</div>
            <div class="shallowColor">以任何方式进入十佳并勾选同意签署《十佳服务条款》即表示您同意自己与十佳签订本协议，且您将受本协议的条款和条件(“条款”) 约束。十佳可随时自行全权决定更改“条款”。您应在第一次登录后仔细阅读修订后的“条款”，并有权选择停止继续使用“服务”；一旦您继续使用“服务”，则表示您已接受经修订的“条款”，当您与十佳发生争议时，应以最新的服务协议为准。除另行明确声明外，任何使“服务”范围扩大或功能增强的新内容均受本协议约束。</div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">2. 谁可使用十佳</div>
            <div class="shallowColor">“服务”仅供能够根据相关法律订立具有法律约束力的合约的个人或公司使用。因此，您的年龄必须在十八周岁或以上，才可使用本公司服务。如不符合本项条件，请勿使用“服务”。十佳可随时自行全权决定拒绝向任何人士提供“服务”。“服务”不会提供给被暂时或永久中止资格的十佳会员。</div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">3. 收费</div>
            <div class="shallowColor">本公司保留在根据第1条通知您后，收取“服务”费用的权利。您因进行交易、向本公司获取有偿服务或接触本公司服务器而发生的所有应纳税赋，以及相关硬件、软件、通讯、网络服务及其他方面的费用均由您自行承担。本公司保留在无须发出书面通知，仅在十佳公示的情况下，暂时或永久地更改或停止部分或全部“服务”的权利。</div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">4. 您的资料和供买卖的物品</div>
            <div class="shallowColor">“您的资料”包括您在注册、交易或在任何公开信息场合或通过任何电子邮件形式，向本公司或其他用户提供的任何资料，包括数据、文本、软件、音乐、声响、照片、图画、影像、词句或其他材料，具体信息材料可参考本协议相关隐私政策。您应对“您的资料”负全部责任，而本公司仅作为您在网上发布和刊登“您的资料”的被动渠道。但是，倘若本公司认为“您的资料”可能使本公司承担任何法律或道义上的责任，或可能使本公司 (全部或部分地) 失去本公司的互联网服务供应商或其他供应商的服务，或您未在十佳规定的期限内登录或再次登录网站或应用，则本公司可自行全权决定对“您的资料”采取本公司认为必要或适当的任何行动，包括但不限于删除该类资料。您特此保证，您对提交给十佳的“您的资料”拥有全部权利，包括全部版权。您确认，十佳没有责任去认定或决定您提交给本公司的资料哪些是应当受到保护的，对享有“服务”的其他用户使用“您的资料”，本公司也不必负责。</div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">4.1 注册及实名认证义务</div>
            <div class="shallowColor">作为互联网平台运营者，为使您更好地使用十佳平台的各项服务，保障您的账户安全，您应当按照平台要求及我国法律规定完成实名认证。如您在十佳注册，您同意：</div>
            <div class="terms_content">
                <p class="terms_contentItem">（a）根据会员注册页面所刊载的会员资料表格的要求，提供关于您或贵公司的真实、准确、完整和反映当前情况的资料，包括但不限于姓名、手机号码、身份证号码、身份证件、营业执照等资料；</p>
                <p class="terms_contentItem">（b） 维持并及时更新会员资料，使其保持真实、准确、完整和反映当前情况。倘若您提供任何不真实、不准确、不完整或不能反映当前情况的资料，或十佳有合理理由怀疑该等资料不真实、不准确、不完整或不能反映当前情况，十佳有权暂停或终止您的注册身份及资料，并拒绝您在目前或将来对“服务”(或其任何部份) 以任何形式使用。如您代表一家公司或其他法律主体在本公司登记，则您声明和保证，您有义务使该公司或其他法律主体受本协议“条款”约束。</p>
            </div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">4.2 会员注册名、密码和保密</div>
            <div class="shallowColor">在登记过程中，您应保存您的会员注册名和密码。您须自行负责对您的会员注册名和密码保密，且须对您在会员注册名和密码下发生的所有活动承担责任。您同意：</div>
            <div class="terms_content">
                <p class="terms_contentItem">（a）如发现任何人未经授权使用您的会员注册名或密码，或发生违反保密规定的任何其他情况，您会立即通知十佳；</p>
                <p class="terms_contentItem">（b）确保您在每个上网时段结束时，以正确步骤离开网站或退出应用。十佳不能也不会对因您未能遵守本款规定而发生的任何损失或损毁负责。</p>
            </div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">4.3 用户的守法义务及承诺</div>
            <div class="shallowColor">您承诺绝不为任何非法目的或以任何非法方式使用十佳服务，也不将十佳服务用于法律法规禁止或限制的交易，并承诺遵守中华人民共和国相关法律、法规及一切使用互联网服务的惯例。您若是中华人民共和国以外的用户，您还需同时遵守您所属国家或地域的法律。您同意并保证不得利用十佳服务从事下列任何行为，否则，您应自行承担所有法律责任：</div>
            <div class="terms_content">
                <p class="terms_contentItem">（a）反对宪法所确定的基本原则，危害国家安全、泄漏国家秘密、颠覆国家政权、破坏国家统一的；</p>
                <p class="terms_contentItem">（b）侵害他人名誉权、隐私权、商业秘密、商标权、著作权、专利权、其他知识产权及其他合法权益；</p>
                <p class="terms_contentItem">（c）违反依法律或本协议所应负的保密义务；</p>
                <p class="terms_contentItem">（d）冒用他人名义使用十佳服务或电话号码与身份证号无法一一对应的；</p>
                <p class="terms_contentItem">（e）从事任何不法交易行为；</p>
                <p class="terms_contentItem">（f）提供赌博资讯或以任何方式引诱他人参与赌博；</p>
                <p class="terms_contentItem">（g）涉嫌洗钱、恐怖融资、套现或进行传销活动的；</p>
                <p class="terms_contentItem">（h）使用无效信用卡号码或他人信用卡号码、无效银行账户或他人银行账户进行交易；</p>
                <p class="terms_contentItem">（i）进行与您或交易对方宣称的内容不符的交易或不真实的交易；</p>
                <p class="terms_contentItem">（j）从事任何可能侵害十佳服务系統的行为；</p>
                <p class="terms_contentItem">（k）其他违法行为或十佳公司有正当理由认为不适当的行为。</p>
            </div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">5. 您授予本公司的许可使用权</div>
            <div class="shallowColor">您授予本公司独家的、全球通用的、永久的、免费的许可使用权利 (并有权在多个层面对该权利进行再授权)，使本公司有权(全部或部份地) 使用、复制、修订、改写、发布、翻译、分发、执行和展示"您的资料"或制作其派生作品，和/或以现在已知或日后开发的任何形式、媒体或技术，将"您的资料"纳入其他作品内。
                您同意，为使您能更好的的接受本公司为您提供的各类服务，您同意十佳可以使用“您的资料”与您联络并根据您在隐私政策根据您的授权范围向您提供信息服务，信息服务内容包括但不限于：有针对性的广告，行政管理、司法诉讼方面的通知，催告服务类的通知，本公司提供的服务内容变动类的通知，您个人接受的个性化服务所涉及的必要的通知等。您接受本协议则视为您同意收取这类资料或通知通知。</div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">6. 隐私</div>
            <div class="terms_content">
                <p class="terms_contentItem">（1）会员有义务在注册时提供自己的真实资料，并保证诸如电子邮件地址、联系电话、联系地址、邮政编码等内容的有效性、真实性，若上述资料变更的，会员应及时登录在十佳的账号并进行更新，若会员在上述资料变更后未及时更新而导致十佳无法与会员取得联系致使会员在使用本服务过程中遭受的任何损失或增加任何费用等不利后果的，均由会员本人承担责任。</p>
                <p class="terms_contentItem">（2）为确保会员在十佳进行交易的安全性，会员同意本网站从其他第三方获取会员的额外资料，十佳仅收集本公司认为就此目的及达成该目的所必须的关于会员的个人资料。</p>
                <p class="terms_contentItem">（3） 会员同意本公司可以自行或通过合作的第三方机构对会员提交或十佳搜集的用户信息（包括但不限于用户的个人身份证信息等）进行核实，并对获得的核实结果根据本协议及有关文件进行查看、使用和留存等操作。本公司可能会从合作第三方处获得用户信息以补充十佳自行收集的信息，以便于向用户提供服务，用户对此表示理解和同意。</p>
                <p class="terms_contentItem">（4） 会员同意十佳依靠自主研发的大数据风控系统进行风险监测，记录会员注册、登录、找回密码、实名认证、绑定银行卡、充值、提现等整个业务环节中的各类数据，通过对大量数据和用户行为分析，识别风险，保障用户账号、资金安全；对于存在安全隐患的账号和交易，十佳会通过人工审核流程，包括但不限于会员提供网银充值流水、身份证及银行卡图文资料、会员手持身份证和银行卡照片，必要时十佳还会采取与用户通过视频进行安全认证。</p>
                <p class="terms_contentItem">（5） 十佳在某些网页上使用诸如“Cookies”的资料收集装置。“Cookies”是设置在用户的硬盘上的小档案，以协助十佳为会员提供度身订造的服务。十佳亦提供某些只能通过使用“Cookies”才可得到的功能。十佳还利用“Cookies”使会员能够在某段期间内减少输入密码的次数。“Cookies”还可以协助本网站提供专门针对会员的兴趣而提供的资料。</p>
                <p class="terms_contentItem">（6） 如果会员将个人通讯信息（例如：手机短信、电邮或信件）交付十佳，或如果其他会员或第三方向本网站发出关于会员在十佳上的活动或登录事项的通讯信息，本网站可以将这些资料收集在会员的专门档案中。</p>
                <p class="terms_contentItem">（7） 会员同意十佳可使用关于会员的个人资料（包括但不限于十佳持有的有关会员的档案中的资料，及十佳从会员目前及以前在十佳上的活动所获取的其他资料）以解决争议、对纠纷进行调停、确保在十佳进行安全交易，并执行十佳的相关规则。为限制在十佳的欺诈、非法或其他刑事犯罪活动，使十佳免受其害，会员同意十佳可通过人工或自动程序对会员的个人资料进行评价。</p>
                <p class="terms_contentItem">（8） 会员同意十佳可以使用会员的个人资料以改进十佳的推广和促销工作、分析十佳的使用率、改善十佳的内容，并使十佳的网站内容、设计和服务更能贴近会员的需求。这些使用能改善十佳的网页，以调整十佳的网页使其更能贴近会员的需求，从而使会员在使用十佳服务时得到更为顺利、有效、安全及度身订造的交易体验。</p>
                <p class="terms_contentItem">（9） 会员同意本网站利用会员的资料与会员联络并（在某些情况下）向会员传递针对会员的兴趣而提供的信息，例如：有针对性的广告条、行政管理方面的通知、以及有关会员使用十佳的通讯。会员接受本协议即视为会员同意收取这些资料。</p>
                <p class="terms_contentItem">（10） 十佳对于会员提供的、自行收集到的、经认证的个人信息将按照本协议及有关规则予以保护、使用或者披露。十佳将采用行业标准惯例以保护会员的个人资料，但鉴于技术限制，十佳不能确保会员的全部私人通讯及其他个人资料不会通过本协议中未列明的途径泄露出去。</p>
                <p class="terms_contentItem">（11） 十佳有义务根据有关法律要求向司法机关和政府部门提供会员的个人资料。在会员未能按照与十佳签订的服务协议或者与十佳其他会员签订的协议等其他法律文本的约定履行自己应尽的义务时，十佳有权根据自己的判断，或者与该笔交易有关的其他会员的请求披露会员的个人信息和资料，并做出评论。会员严重违反十佳的相关规则的，十佳有权对会员提供的及十佳自行收集的会员的个人信息和资料编辑入网站黑名单，并将该黑名单对第三方披露，且十佳有权将会员提交或十佳自行收集的会员的个人资料和信息与任何第三方进行数据共享，由此可能造成会员的任何损失，十佳不承担法律责任。</p>
                <P class="terms_contentItem">（12） 十佳提供的交易活动中，会员无权要求十佳提供其他会员的个人资料。如会员通过签署有关协议等方式获得其他会员的个人信息，会员同意对于上述信息予以保密，除非该等信息根据适用的法律规定、被有管辖权的法院或政府部门要求披露。</P>
            </div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">7. 终止或访问限制</div>
            <div class="shallowColor">您同意，在十佳未向您收费的情况下，十佳可自行全权决定以任何理由 (包括但不限于十佳认为您已违反本协议的字面意义和精神，或您以不符合本协议的字面意义和精神的方式行事，或您在超过90天的时间内未以您的账号及密码登录网站) 终止您的“服务”密码、账户 (或其任何部份) 或您对“服务”的使用，并删除和丢弃您在使用“服务”中提交的 “您的资料”。您同意，在十佳向您收费的情况下，十佳应基于合理的怀疑且经电子邮件通知的情况下实施上述终止服务的行为。十佳同时可自行全权决定，在发出通知或不发出通知的情况下，随时停止提供“服务”或其任何部份。您同意，根据本协议的任何规定终止您使用“服务”之措施可在不发出事先通知的情况下实施，并承认和同意，十佳可立即使您的账户无效，或撤销您的账户以及在您的账户内的所有相关资料和档案，和/或禁止您进一步接入该等档案或“服务”。账号终止后，十佳没有义务为您保留原账号中或与之相关的任何信息，或转发任何未曾阅读或发送的信息给您或第三方。此外，您同意，十佳不会就终止您接入“服务”而对您或任何第三者承担任何责任。第9、10、11和19各条应在本协议终止后继续有效。</div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">8. 违反规则会有什么后果</div>
            <div class="shallowColor">在不限制其他补救措施的前提下，发生下述任一情况，本公司可立即发出警告，暂时中止、永久中止或终止您的会员资格，删除您的任何现有数据信息，以及您在网站上展示的任何其他资料：本公司无法核实或鉴定您向本公司提供的任何资料：</div>
            <div class="terms_content">
                <p class="terms_contentItem">（a）您违反本协议；</p>
                <p class="terms_contentItem">（b）本公司无法核实或鉴定您向本公司提供的任何资料；</p>
                <p class="terms_contentItem">（c）本公司相信您的行为可能会使您、本公司用户或通过本公司或本公司网站提供服务的第三者服务供应商发生任何法律责任。在不限制任何其他补救措施的前提下，倘若发现您从事涉及本公司网站的诈骗活动，十佳可暂停或终止您的账户。</p>
            </div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">9. 服务“按现状”提供</div>
            <div class="shallowColor">本公司会尽一切努力使您在使用十佳的过程中得到乐趣。遗憾的是，本公司不能随时预见到任何技术上的问题或其他困难。该等困难可能会导致数据损失或其他服务中断。为此，您明确理解和同意，您使用“服务”的风险由您自行承担。“服务”以“按现状”和“按可得到”的基础提供。十佳明确声明不作出任何种类的所有明示或暗示的保证，包括但不限于关于适销性、适用于某一特定用途和无侵权行为等方面的保证。十佳对下述内容不作保证：</div>
            <div class="terms_content">
                <p class="terms_contentItem">（a）“服务”会符合您的要求；</p>
                <p class="terms_contentItem">（b）“服务”不会中断，且适时、安全和不带任何错误；</p>
                <p class="terms_contentItem">（c）通过使用“服务”而可能获取的结果将是准确或可信赖的；</p>
                <p class="terms_contentItem">（d）您通过“服务”而购买或获取的任何产品、服务、资料或其他材料的质量将符合您的预期。通过使用“服务”而下载或以其他形式获取任何材料是由您自行全权决定进行的，且与此有关的风险由您自行承担，对于因您下载任何该等材料而发生的您的电脑系统的任何损毁或任何数据损失，您将自行承担责任。您从十佳或通过或从“服务”获取的任何口头或书面意见或资料，均不产生未在本协议内明确载明的任何保证。</p>
            </div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">10. 责任范围</div>
            <div class="shallowColor">您明确理解和同意，十佳仅对本协议中所列明的义务承担责任，不对因下述任一情况而发生的任何损害赔偿承担责任，包括但不限于利润、商誉、使用、数据等方面的损失或其他无形损失的损害赔偿 (无论十佳是否已被告知该等损害赔偿的可能性)：</div>
            <div class="terms_content">
                <p class="terms_contentItem">（a）使用或未能使用“服务”；</p>
                <p class="terms_contentItem">（b）因通过或从“服务”购买或获取任何货物、样品、数据、资料或服务，或通过或从“服务”接收任何信息或缔结任何交易所产生的获取替代货物和服务的费用；</p>
                <p class="terms_contentItem">（c）未经批准接入或更改您的传输资料或数据；</p>
                <p class="terms_contentItem">（d）任何第三者对“服务”的声明或关于“服务”的行为、您与任何第三方交易所产生的交易风险应由您自行承担；</p>
                <p class="terms_contentItem">（e）因任何原因而引起的与“服务”有关的任何其他事宜，包括疏忽。</p>
            </div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">11. 赔偿</div>
            <div class="shallowColor">您同意，因您违反本协议或经在此提及而纳入本协议的其他文件，或因您违反了法律或侵害了第三方的权利，而使第三方对十佳及其子公司、分公司、董事、职员、代理人提出索赔要求（包括司法费用和其他专业人士的费用），您必须赔偿给十佳及其分公司、董事、职员、代理人，使其等免遭损失。</div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">12. 遵守法律</div>
            <div class="shallowColor">您应遵守与您使用“服务”的所有相关的法律、法规、条例和规章。</div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">13. 随享会员自动续费续期服务</div>
            <div class="shallowColor">本服务是在您已开通十佳随享会员服务的前提下，为您提供的自动续费续期服务。如您开通本服务，则视为您授权十佳在您的十佳随享会员服务即将到期时，为您自动延续一个计费周期的随享会员有效期，并从您的 iTunes 账户（以下统称「账户」）余额中自动扣除对应的服务费。该服务实现的前提是您已将十佳随享会员账号与上述账户绑定，且可成功从账户中扣款，因上述账户中可扣款余额不足导致的自动续费续期（即连续订阅）失败，由您自行承担。使用连续订阅服务的账号，会在每次十佳随享会员有效期到期前 24 小时内，自动在 iTunes 账户扣费并延长 1 个计费周期的十佳随享会员有效期。如需取消连续订阅，请手动打开苹果手机「设置」， 进入「iTunes Store 与 App Store」点击 「Apple ID」，选择「查看Apple ID」，进入「账户设置」页面，点击「订阅」，选择「十佳随享会员」取消订阅即可。取消订阅应当在十佳随享会员服务到期前，提前至少 24 小时完成，否则此订阅将继续有效。</div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">14. 链接</div>
            <div class="shallowColor">“服务”或第三者均可提供与其他互联网网站或资源的链接。由于十佳并不控制该等网站和资源，您承认并同意，十佳并不对该等外在网站或资源的可用性负责，且不认可该等网站或资源上或可从该等网站或资源获取的任何内容、宣传、产品、服务或其他材料，也不对其等负责或承担任何责任。您进一步承认和同意，对于任何因使用或信赖从此类网站或资源上获取的此类内容、宣传、产品、服务或其他材料而造成（或声称造成）的任何直接或间接损失，十佳均不承担责任。</div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">15. 通知</div>
            <div class="shallowColor">除非另有明确规定，任何通知应以电子邮件形式发送，或 (就您而言) 发送到您在登记过程中向十佳提供的电子邮件地址，或有关方指明的该等其他地址。在电子邮件发出二十四 (24) 小时后，通知应被视为已送达，除非发送人被告知相关电子邮件地址已作废。或者，本公司可通过邮资预付挂号邮件并要求回执的方式，将通知发到您在登记过程中向十佳提供的地址。在该情况下，在付邮当日三 (3) 天后通知被视为已送达。</div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">16. 不可抗力</div>
            <div class="shallowColor">对于因本公司合理控制范围以外的原因，包括但不限于自然灾害、罢工或骚乱、物质短缺或定量配给、暴动、战争行为、政府行为、通讯或其他设施故障或严重伤亡事故等，致使本公司延迟或未能履约的，十佳不对您承担任何责任。</div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">17. 转让</div>
            <div class="shallowColor">十佳转让本协议无需经您同意。</div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">18. 其他规定</div>
            <div class="shallowColor">本协议取代您和十佳先前就相同事项订立的任何书面或口头协议。本协议各方面应受中华人民共和国大陆地区法律的管辖。倘若本协议任何规定被裁定为无效或不可强制执行，该项规定应被撤销，而其余规定应予执行。条款标题仅为方便参阅而设，并不以任何方式界定、限制、解释或描述该条款的范围或限度。本公司未就您或其他人士的某项违约行为采取行动，并不表明本公司撤回就任何继后或类似的违约事件采取行动的权利。</div>
        </div>
        <div class="lineItem">
            <div class="lineTitle">19. 诉讼</div>
            <div class="shallowColor">因本协议或本公司服务所引起或与其有关的任何争议应以f中华人民共和国法律为管辖法律。</div>
        </div>
    </div>
</body>
</html>
 `
