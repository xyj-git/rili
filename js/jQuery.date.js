;(function($){
	$.Date=function(opt){
		var setting={
		    control:'button',
			title:'#title',
			box:'#box',
			content:'#content',
            bg:'on',
		}
		var set=$.extend({},setting,opt)
	    var control=$(set.control),
	        title=$(set.title),
	        box=$(set.box),
	        content=$(set.content);

	   //当前时间
	    var now=new Date(),
	        year=now.getFullYear(),
	        month =now.getMonth(),
	        day=now.getDate();
	       var nowmonth=month;
	       var nowyear=year;

	    //标题
	    title.text(year+"年"+(month+1)+'月');
	   auto(year,month)
	   function auto(y,m){
	   //	console.log(y,m)
	   	   content.html('')
		   //本月一共多少天  1号星期几
		    var dayLong=new Date(y,m+1,0).getDate(),//31天 下个月第0天
		        week=new Date(y,m,1).getDay();//星期二         本月第一天  是一个固定的值

		    for(var i=1;i<=42;i++){
		    	//console.log(year,month)
		    	var dat=new Date(y,m,i-week).getDate()//每个格子对应的日期几号
		    	if(i-week>0&&i-week<dayLong){//是本月的  <0上个月 >0下个月
		    		if(i-week===day&&y==nowyear&&m==nowmonth){//今天添加特殊标志
		    			span=$('<span style="background:pink">'+dat+'</span>').appendTo(content);
		    		}/*else if(i-week==1){//每个月第一天是特殊的
		    			span=$('<span style="background:pink">'+dat+'</span>').appendTo(content);
		    		}*/else{
		    			span=$('<span class="benMonth">'+dat+'</span>').appendTo(content);
		    		}
		    	}else{//不是本月
	                  span=$('<span style="background:seashell;color:#ccc">'+dat+'</span>').appendTo(content);
		    	}
		    }
	    }

	    function flashFn(y,m){
	    	var y=new Date(y,m).getFullYear(),
	    	    m=new Date(y,m).getMonth(),
	    	    r=new Date(y,m).getDate();
	    	title.text(y+"年"+(m+1)+'月');
	    	auto(y,m);//计算新的本月具体时间 渲染

	    }

	     control.click(function(){
	     	switch($(this).text()){
	     		case '上一年':
	     		    year--;flashFn(year,month);
	     		    break;
	     		case '上一月':
	     		    month--;flashFn(year,month);
	     		    break;
	     		case '下一月':
	     		   month++;flashFn(year,month);
	     		    break;
	     		case '下一年':
	     		    year++;flashFn(year,month);
	     		    break;
 		}
	})











	  /* //上一年按钮 月不变
	    control.eq(0).click(function(){
	    	year--;
	    	flashFn(year,month);
	    })
	    //上一月按钮  年不变
	     control.eq(1).click(function(){
	    	month--;
	    	flashFn(year,month);
	    })
	    //下一月按钮  年不变
	      control.eq(2).click(function(){
	    	month++;
	    	flashFn(year,month);
	    })
	     //下一年按钮 月不变
	       control.eq(3).click(function(){
	    	year++;
	    	flashFn(year,month);
	    })*/







	}
})(jQuery)
