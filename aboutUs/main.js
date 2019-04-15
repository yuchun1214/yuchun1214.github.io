$(document).ready(()=>{
    $("#img1").hover(
        ()=>{            
            // $("#person1").show();
            $("#img1 img").fadeOut(700,() => {
                $("#img1 img").attr("src","炳丞2.png").fadeIn(700);
            });
            // $("#intro").hide();      
            textFly('Bing Cheng Zhu','Industrial Institute',`Hello, everyone. I am Bing Cheng Zhu. I am now master degree in the Industrial Design. My habbit is playing basketball and watching movies. I am a beginner of UI design field. Nice to meet you!`)
        },
        ()=>{        
            // $("#intro").show();
            $("#img1 img").fadeOut(100,() => {
                $("#img1 img").attr("src","炳丞.png").fadeIn(100);
            }); 
            // $("#person1").hide();        
            introReset();
        }
    );
    $("#img2").hover(
        ()=>{            
            // $("#person2").show();
            $("#img2 img").fadeOut(700,() => {
                $("#img2 img").attr("src","睿紘2.png").fadeIn(700);
            });
            // $("#intro").hide();
            textFly('Nan Bo Cao','Industrial Design',`Hello, everyone. I am Bing Cheng Zhu. I am now master degree in the Industrial Design. My habbit is playing basketball and watching movies. I am a beginner of UI design field. Nice to meet you!`);

        },
        ()=>{        
            // $("#intro").show();
            $("#img2 img").fadeOut(100,() => {
                $("#img2 img").attr("src","睿紘.png").fadeIn(100);
            });
            // $("#person2").hide();     
            introReset();       
        }
    );
    $("#img3").hover(
        ()=>{            
            // $("#person3").show();
            $("#img3 img").fadeOut(700,() => {
                $("#img3 img").attr("src","伯瑋2.png").fadeIn(700);
            });
            // $("#intro").hide();     
            textFly('Po Wei Chen','Biotech & Bioindustry','Hello, everyone. I am Po Wei Chen. I am now major in the Biotech & Bioindustry. My habbit is playing baseball and watching movies. I am a beginner of UI design field. Nice to meet you!')      
        },
        ()=>{        
            // $("#intro").show();
            $("#img3 img").fadeOut(100,() => {
                $("#img3 img").attr("src","伯瑋.png").fadeIn(100);
            });
            // $("#person3").hide(); 
            introReset();           
        }
    );
    $("#img4").hover(
        ()=>{            
            // $("#person4").show();
            $("#img4 img").fadeOut(700,() => {
                $("#img4 img").attr("src","立壕2.png").fadeIn(700);
            });
            // $("#intro").hide();    
            textFly('Li Hao Hoon','Systems & Naval Mechatronic Engineering','Systems & Naval Mechatronic Engineering');

        },
        ()=>{        
            // $("#intro").show();
            $("#img4 img").fadeOut(100,() => {
                $("#img4 img").attr("src","立壕.png").fadeIn(100);
            });
            // $("#person4").hide();     
            introReset();       
        }
    );
    $("#img5").hover(
        ()=>{            
            // $("#person5").show();
            $("#img5 img").fadeOut(700,() => {
                $("#img5 img").attr("src","友鈞2.png").fadeIn(700);
            });
            // $("#intro").hide();   
            textFly('Yu Chun Lin','Computer Science & Information Engineering',`Hello, my name is Eugene a student study in NCKU-CSIE. In the team, I am a software engineer developing the website. In the past project, which also develops the website, my role focuses on back-end which is developed by Python. Actually, I am not only programming in Python but also in C++. I love to use code and computer to create something, that's the reason why I study in CSIE and be an engineer.`)        
        },
        ()=>{        
            // $("#intro").show();
            $("#img5 img").fadeOut(100,() => {
                $("#img5 img").attr("src","友鈞.png").fadeIn(100);
            });
            // $("#person5").hide();       
            introReset();     
        }
    );
});

var textFly = function (title,subTitle, text) {

    var introTitle = document.getElementById('introTitle');
    var intro = document.getElementById('intro');
    $(intro).stop();
    var introText = document.getElementById('introText');
    var subTitleHtml = document.getElementById('introSubTitle');
    intro.style = ''
    $('#intro').css('display','none');
    
    introText.innerText = text;
    introTitle.innerText = title;
    subTitleHtml.innerHTML = subTitle;
    $('#intro').toggle('slide','left',600);
}

var introReset = function(){
    var introTitle = document.getElementById('introTitle');
    var introText = document.getElementById('introText');
    var subTitleHtml = document.getElementById('introSubTitle');
    introTitle.innerText = 'UIDD Team I';
    subTitleHtml.innerText = '';
    introText.innerHTML = `Hello, everyone. We are team I in the UIDD class. Our project is to revise SinoPac e-loan system. If you feel intersted in it, please kindly contact us. Best regards.`;
}