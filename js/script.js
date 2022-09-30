$(function(){
	var n=0;
	var total=4;
	$(".keyvisual li").eq(n).addClass("current");
	$(".pagination li").eq(n).addClass("current");

	var id=setInterval(function(){
		if(n < (total-1)){ // 0, 1, 2, 3
			n=n+1;
		}
		else{
			n=0;
		}

		$(".keyvisual li").removeClass("current");
		$(".keyvisual li").eq(n).addClass("current");
		$(".pagination li").removeClass("current");
		$(".pagination li").eq(n).addClass("current");
	}, 6000);

	$(".left").click(function(e){
		e.preventDefault();

		if(n > 0){ // 0, 1, 2, 3
			n=n-1;
		}
		else{
			n=total-1;
		}

		$(".keyvisual li").removeClass("current");
		$(".keyvisual li").eq(n).addClass("current");
		$(".pagination li").removeClass("current");
		$(".pagination li").eq(n).addClass("current");
	});
	$(".right").click(function(e){
		e.preventDefault();

		if(n < (total-1)){ // 0, 1, 2, 3
			n=n+1;
		}
		else{
			n=0;
		}

		$(".keyvisual li").removeClass("current");
		$(".keyvisual li").eq(n).addClass("current");
		$(".pagination li").removeClass("current");
		$(".pagination li").eq(n).addClass("current");
	});
	$(".pagination li").click(function(e){
		e.preventDefault();
		n=$(this).index();
		$(".keyvisual li").removeClass("current");
		$(".keyvisual li").eq(n).addClass("current");
		$(".pagination li").removeClass("current");
		$(".pagination li").eq(n).addClass("current");
	});
});