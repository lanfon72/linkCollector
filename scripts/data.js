$(document).ready(function() {
    $(".news").colorbox({rel:'group1'});    
    //getData();

    $(function(){
        $('#abContent ul.accordionPart li div.ab_title').hover(function(){
            $(this).addClass('ab_title_on');
        }, function(){
            $(this).removeClass('ab_title_on');
        }).click(function(){
            $(this).next('div.ab_content').slideToggle();
        }).siblings('div.ab_content').hide();
    });
});

/*
function getData(){
        $.getJSON('collect.json', function(data) {
             
            colls_data = data.collects;
             
            var length = colls_data.length;
 
            for( var i = length; i >0; i-- ){
                if(colls_data[i-1]["type"] == "pic"){
                $('.collect-pool').append('<a href="'+colls_data[i-1]["link"]+'" target="_blank"><div class="wish-pic">'+colls_data[i-1]["what"]+'</div></a>');
                $('.collect-pool').eq( length - i ).delay( (length - i)*50 ).fadeIn(100);
                }
                if(colls_data[i-1]["type"] == "video"){
                $('.collect-pool').append('<a href="'+colls_data[i-1]["link"]+'" target="_blank"><div class="wish-video">'+colls_data[i-1]["what"]+'</div></a>');
                $('.collect-pool').eq( length - i ).delay( (length - i)*50 ).fadeIn(100);
                }
                if(colls_data[i-1]["type"] == "word"){
                $('.collect-pool').append('<a href="'+colls_data[i-1]["link"]+'" target="_blank"><div class="wish-word">'+colls_data[i-1]["what"]+'</div></a>');
                $('.collect-pool').eq( length - i ).delay( (length - i)*50 ).fadeIn(100);
                }
                if(colls_data[i-1]["type"] == "news"){
                $('.collect-pool').append('<a href="'+colls_data[i-1]["link"]+'" target="_blank"><div class="wish-news">'+colls_data[i-1]["what"]+'</div></a>');
                $('.collect-pool').eq( length - i ).delay( (length - i)*50 ).fadeIn(100);
                }
                if(colls_data[i-1]["type"] == "web"){
                $('.collect-pool').append('<a href="'+colls_data[i-1]["link"]+'" target="_blank"><div class="wish-web">'+colls_data[i-1]["what"]+'</div></a>');
                $('.collect-pool').eq( length - i ).delay( (length - i)*50 ).fadeIn(100);
                }
            }
        });
    };

            $('#btn').click(function(){
                confirm("YMMMMM!這個連結好吃!");
                saveData();
            });
            
            $('#btn-pic').click(function(){
                $('.collect-pool div').parent().remove();
                showpic();
            });
            $('#btn-video').click(function(){
                $('.collect-pool div').parent().remove();
                showvideo();
            });
            $('#btn-word').click(function(){
                $('.collect-pool div').parent().remove();
                showword();
            });
            $('#btn-news').click(function(){
                $('.collect-pool div').parent().remove();
                shownews();
            });
            $('#btn-web').click(function(){
                $('.collect-pool div').parent().remove();
                showweb();
            });
            $('#btn-all').click(function(){
                $('.collect-pool div').parent().remove();
                getData();
            });

        }); 

function saveData(){
        var type = $('input[name="type"]:checked').attr("id");
        if ( $('#what').val() == '') {
            alert('這個東西是什麼?');
        } 
        if ( $('#link').val() == '') {
            alert('你沒有餵我吃連結!!!');
        } 
        if ( type == null) {
            alert('五穀雜糧蔬菜水果，你是餵哪一種?');
        }
        else{
        
        $('#btn').html('Eated');
        var what = $('#what').val();
        var link = $('#link').val();
        
                    $.ajax({  
                        url: "addData.php",  
                        type: "POST",
                        data: { what: what , link : link ,type : type  },
                        success: function(data){
                        if ( data == '1'){
                            alert('Oops!你餵的連結我已經吃過了!');
                        }
                        else {
                        if(type == "pic"){
                        $('.collect-pool div').eq(0).before('<a href="'+link+'" target="_blank"><div class="wish-pic">'+what+'</div></a>');
                            $('.collect-pool div').eq(0).fadeIn(1200);
                        }
                        if(type== "video"){
                        $('.collect-pool div').eq(0).before('<a href="'+link+'" target="_blank"><div class="wish-video">'+what+'</div></a>');
                            $('.collect-pool div').eq(0).fadeIn(1200);
                        }
                        if(type == "word"){
                        $('.collect-pool div').eq(0).before('<a href="'+link+'" target="_blank"><div class="wish-word">'+what+'</div></a>');
                            $('.collect-pool div').eq(0).fadeIn(1200);
                        }
                        if(type == "news"){
                        $('.collect-pool div').eq(0).before('<a href="'+link+'" target="_blank"><div class="wish-news">'+what+'</div></a>');
                            $('.collect-pool div').eq(0).fadeIn(1200);
                        }
                        if(type == "web"){
                        $('.collect-pool div').eq(0).before('<a href="'+link+'" target="_blank"><div class="wish-web">'+what+'</div></a>');
                            $('.collect-pool div').eq(0).fadeIn(1200);
                        }
                        }

                $('#what').val('');
                $('#link').val('');
                $('#type').val('');
                
                setTimeout( function(){
                    $('#btn').html('Feed');
                }, 1000 );
                
            },
            error: function(){  

            }  
        });      
    }
};

    function showpic(){
        $.getJSON('collect.json', function(data) {
             
            colls_data = data.collects;
             
            var length = colls_data.length;
 
            for( var i = length; i >0; i-- ){
                if(colls_data[i-1]["type"] == "pic"){
                $('.collect-pool').append('<a href="'+colls_data[i-1]["link"]+'" target="_blank"><div class="wish-pic">'+colls_data[i-1]["what"]+'</div></a>');
                $('.collect-pool').eq( length - i ).delay( (length - i)*50 ).fadeIn(100);
                }
            }
        });
    };
    
    function showvideo(){
        $.getJSON('collect.json', function(data) {
             
            colls_data = data.collects;
             
            var length = colls_data.length;
 
            for( var i = length; i >0; i-- ){
                if(colls_data[i-1]["type"] == "video"){
                $('.collect-pool').append('<a href="'+colls_data[i-1]["link"]+'" target="_blank"><div class="wish-video">'+colls_data[i-1]["what"]+'</div></a>');
                $('.collect-pool').eq( length - i ).delay( (length - i)*50 ).fadeIn(100);
                }
            }
        });
    };

    function showword(){
        $.getJSON('collect.json', function(data) {
             
            colls_data = data.collects;
             
            var length = colls_data.length;
 
            for( var i = length; i >0; i-- ){
                if(colls_data[i-1]["type"] == "word"){
                $('.collect-pool').append('<a href="'+colls_data[i-1]["link"]+'" target="_blank"><div class="wish-word">'+colls_data[i-1]["what"]+'</div></a>');
                $('.collect-pool').eq( length - i ).delay( (length - i)*50 ).fadeIn(100);
                }
            }
        });
    };

    function shownews(){
        $.getJSON('collect.json', function(data) {
             
            colls_data = data.collects;
             
            var length = colls_data.length;
 
            for( var i = length; i >0; i-- ){
                if(colls_data[i-1]["type"] == "news"){
                $('.collect-pool').append('<a href="'+colls_data[i-1]["link"]+'" target="_blank"><div class="wish-news">'+colls_data[i-1]["what"]+'</div></a>');
                $('.collect-pool').eq( length - i ).delay( (length - i)*50 ).fadeIn(100);
                }
            }
        });
    };

    function showweb(){
        $.getJSON('collect.json', function(data) {
             
            colls_data = data.collects;
             
            var length = colls_data.length;
 
            for( var i = length; i >0; i-- ){
                if(colls_data[i-1]["type"] == "web"){
                $('.collect-pool').append('<a href="'+colls_data[i-1]["link"]+'" target="_blank"><div class="wish-web">'+colls_data[i-1]["what"]+'</div></a>');
                $('.collect-pool').eq( length - i ).delay( (length - i)*50 ).fadeIn(100);
                }
            }
        });
    };
*/