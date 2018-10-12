var  bgBox = box().append().size(1000).color('White').border(3)
var  hios = box().appendTo(bgBox).size(100,100).image('https://steamuserimages-a.akamaihd.net/ugc/99476522504015364/2CE1724349401A73DD94EF8F9723D428E3F6AF2D/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C268%3A268&composite-to=*,*%7C268%3A268&background-color=black').click(hos)
var titleBox = box().appendTo(bgBox).size(890,100).color('blue').image('https://www.ilbe.com/files/attach/images/14357299/056/368/203/d53503faa127de11d6ead6da4af7f140.jpg').text('당신은 낚였습니다').textColor('red').click(trapcard);
var clearbx = box().appendTo(titleBox).size(20,20).border(0).click(oxox);
var fkloginBox = box().appendTo(titleBox).size(200,99).color('red').text('로그아웃').click(clicklogin);
var mapBox = box().appendTo(titleBox).size(200,99).color('#40FF00').text('황천길 건너자').click(oxquiz);

var pplogin = box().append().size(300,250).color('white').borderRadius(10).positionFixed().center().hide();
var textlog = box().appendTo(pplogin).size(300,50).color('white').textColor('black').text('로그아웃..?').border(0);
var textloginbox = box().appendTo(textlog).size(20,20).color('white').border(0).textColor('black').text('X').float('right').click(fuck);
var loginBox = box().appendTo(pplogin).size(300,50).color('yellow').borderRadius(10).editable()
var fuckimage = box().append().image('http://cfile10.uf.tistory.com/image/231A41425342A02408330A').hide().size(302,270).positionFixed().center();
var loginBox2 = box().appendTo(pplogin).size(300,50).color('white').borderRadius(10).editable()
var logok = box().appendTo(pplogin).size(300,50).color('red').borderRadius(10).text('로그으으으으으인').click(login)
var memberBox =  box().appendTo(pplogin).size(300,50).color('blue').borderRadius(10).text('회원가입 하지마').click(joo)
var clearlogin = box().appendTo(textlog).size(50,25).color('white').border(0).click(clearlogin2).float('left');

var menuBox = box().appendTo(bgBox).size(250,100).color('yellow').click(clicks)
var menuBox2 = box().appendTo(bgBox).size(250,100).color('White').click(clicks)
var menuBox3 = box().appendTo(bgBox).size(250,100).color('red').click(clicks)
var menuBox4 = box().appendTo(bgBox).size(240,100).color('blue').click(clicks)

var mainBox = box().appendTo(bgBox).size(1000,900).color('yellow').show()
var mainBox2 = box().appendTo(bgBox).size(1000,900).color('White').hide()
var mainBox3 = box().appendTo(bgBox).size(1000,900).color('red').show()
var mainBox4 = box().appendTo(bgBox).size(1000,900).color('blue').hide()

var commentBox = box().append().size('100%',200)
var inputBox = box().appendTo(commentBox).editable().size(300, 60);
var sendButton = box().appendTo(commentBox).button().size(70, 60).text('send');
var truesend = box().appendTo(commentBox).size(70,60).float('right').click(sendComment).border(0);

var commentListBox = box().append().size(200,500);

var oxbox = box().append().border(10).borderRadius(15).text('설문조사 당신은 이 사이트를 사용하면서 짜증났습니까?').textSize(30).size(300,300).textColor('green').color('yellow').positionFixed().center().hide();
var obox = box().appendTo(oxbox).border(10).borderColor('red').color('blue').text('O').size(80,80).textSize(30).click(oclick);
var xbox = box().appendTo(oxbox).border(10).borderColor('blue').color('red').text('X').size(80,80).textSize(30).click(xclick);

var arr =[];
function sendComment(){
    if(!id){
        alert('로그인해라')
    return;
        
    }
    
      arr.push(inputBox.text());
    datastore().put('comments',arr);
    getComments();
}
function getComments(){
    commentListBox.clear();
    arr= datastore().get('comments');
    if (arr){
        for(var i = arr.length-1; i>=0; i--){
            box().appendTo(commentListBox).size(200,50).text(arr[i]);
        }
    }
}
getComments();
function clicklogin(bx) {
    if (bx == fkloginBox)
    pplogin.show()
}

function clicks(bx) {

if (bx == menuBox){
    mainBox.show()
    mainBox2.hide()
    mainBox3.hide()
    mainBox4.hide()
 
    
}

else if (bx == menuBox2){
    mainBox.hide()
    mainBox2.show()
   mainBox3.hide()
    mainBox4.hide()
}  
else if (bx == menuBox3){
    mainBox.hide()
    mainBox2.hide()
   mainBox3.show()
    mainBox4.hide()
}
    else if (bx == menuBox4){
    mainBox.hide()
    mainBox2.hide()
   mainBox3.hide()
    mainBox4.show()
    }
 
}

function clearlogin2(bx){
    pplogin.hide()
}

function hos(bx){
    location='https://kr.battle.net/heroes/ko/'
}

function fuck(bx){
    fuckimage.show()
    alert('엿먹어라')
}

function oxquiz(bx){
    oxbox.show();
}

function oclick(bx){
   var redbox = box().append().color('red').size(20,20).moveTo('random');
    
}

function trapcard(bx){
    alert('you just ACTIVATED my trap card.')
    location='http://www.realcoding.co/vvv/OGBUn5CqH8yeVhMuM1tyvKDvwhj2cbjNbWd9qmHh_tFkDbq538dFTDcas1dDJ5TC'
}

function xclick(bx){
var bluebox = box().append().color('blue').size(20,20).moveTo('random');
}

function oxox(bx){
    oxbox.hide()
}

var id ;

function login(){
    var gets = datastore().get('ids')
    var isUser = false;
    var ispassword = false;
    for(var i=0; i< gets.length; i++){
        console.log(gets[i]);
        console.log(loginBox.text());
        if(gets[i]==loginBox.text()){
            isUser = true;
            if(datastore().get('id:'+ loginBox.text())==loginBox2.text()){
                ispassword = true;
                break;
            }
        }
    }
    
    if(isUser&&ispassword){
    alert('호구가 되었다')
    id = loginBox.text()
        
    }
    else if(isUser && !ispassword){
    alert('비밀번호 틀림 하하')
    }
    else if(!isUser && ispassword){
    alert('아이디 틀림 깔깔')
    }
    else if(!isUser && !ispassword){
    alert('신의 은총을 받아라 얍')
    }
    
    
    
    
}

function joo(){
    var ids =[];
    if(datastore().get('ids')){
        ids = datastore().get('ids');
        var users = false;
        for(var i =0; i< ids.length; i++){
            if(ids[i]==loginBox.text()){
            users = true;
            break;
           }
        }
        if(users){
            alert('넌 이미 가입되어있다')
            return;
        }
        
        
    }
ids.push(loginBox.text());

datastore().put('ids', ids);
datastore().put('id:'+ loginBox.text(),loginBox2.text());


loginBox.text('');
loginBox2.text('');
alert('당신은 함정에 빠졌습니다');
}
//200번째 라인이다 야호!