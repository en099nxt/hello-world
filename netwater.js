
//焦點商品跑馬燈文字區高度增加
$('#marqueeP').ready(function(){
	$('#marqueeP').height(248);
});

//【手機版專用】橫幅設定、網站名稱設定
if($('#product_cls_menu').length==1){						//判斷是否有手機版商品選單存在
	$('#main_div>img:nth-of-type(2)').attr('src','http://61.63.55.134/29956/self/j20170614104004.jpg');
	//選擇手機版全區id下一層的img中第二個(橫幅)，切換成手機板寬度較窄圖

	$('#main_div>table:nth-of-type(1)>tbody>tr>td:nth-of-type(2)').css({'background':'#e8f5ff','border-bottom':'1px solid #fff'});
	$('#main_div>table:nth-of-type(1)>tbody>tr>td:nth-of-type(2)>div').css({'color':'#000','text-shadow':'rgb(255, 255, 255) 2px 2px 0px'});
	$('#main_div>table:nth-of-type(1)>tbody>tr>td:nth-of-type(2)>div').html('<marquee loop=0 behavior=slide>&nbsp;&nbsp;晉歡淨水 Jin Huan Water</marquee>');
}

//商品列表預覽圖的樣式
$('.imgr8').ready(function(){
	$('.imgr8').css('max-height','240px');
	$('.imgr8').css('width','auto');
	$('.p_tb').attr('align','center');
});

//【電腦版專用】左邊選單商品子分類背景
$('.pc2_box').ready(function(){
	$('.pc2_box').css('background-image','url(http://61.63.55.134/29956/self/j20170628091120.jpg)');
});

//【手機版專用】左邊選單樣式
if($('#product_cls_menu').length==1){						//判斷是否有手機版商品選單存在
	$('#product_cls_cont').ready(function(){				//選單整體
		$('#product_cls_cont').css('background-color','#e2f1ff')
	});
	$('.pc1_cl').ready(function(){						//已選的主分類
		$('.pc1_cl').css({'background-color':'#e2f1ff', 'border-radius':'0px', 'border-bottom':'0px', 'padding-left':'27px', 'background-image':'url(http://61.63.55.134/29956/self/j20170628151255.jpg)'});
	});
	$('.pc1_nr').ready(function(){						//主分類
		$('.pc1_nr').css({'background-color':'#e2f1ff', 'border-radius':'0px', 'border-bottom':'0px', 'padding-left':'27px', 'background-image':'url(http://61.63.55.134/29956/self/j20170628145838.jpg)'});
	});
	$('.pc2_cl').ready(function(){						//已選的次分類
		$('.pc2_cl').css({'background-color':'#e2f1ff', 'border-radius':'0px', 'border-bottom':'0px', 'color':'#000'});
	});
	$('.pc2_nr').ready(function(){						//次分類
		$('.pc2_nr').css({'background-color':'#e2f1ff', 'border-radius':'0px', 'border-bottom':'0px', 'color':'#000'});
	});
}

//商品分類名稱上數量文字替換
$('.p_ct').ready(function(){							//左邊列表
	$('.p_ct').each(function(){
		$(this).html(	$(this).html().replace(/\.\.\./g,' &nbsp; x ')	);
	});
});
$('#p_tol').ready(function(){							//左邊商品總覽
	$('#p_tol').each(function(){
		$(this).html(	$(this).html().replace(/\.\.\./g,' &nbsp; × ')	);
	});
});
//var Space_x_Number=$('#product_cls_menu').length==1?'&nbsp; × ':' &nbsp; × ';	//商品數的 ... 要替換的文字(最後決定不要分了，手機板電腦板空格數都一樣就好)
$('.pc2b_cl').ready(function(){							//商品分類頁上面列表反白
	$('.pc2b_cl').each(function(){
		$(this).html(	$(this).html().replace(/\.\.\./g,' &nbsp; × ')	);
	});
});
$('.pc2b_nr').ready(function(){							//商品分類頁上面列表原始
	$('.pc2b_nr').each(function(){
		$(this).html(	$(this).html().replace(/\.\.\./g,' &nbsp; × ')	);
	});
});

//【手機版商品分類頁專用】剛剛瀏覽的商品背景色會顯示粉紅色改成淡藍色
$('.tbrow').ready(function(){
	$('.tbrow').each(function(){
		if($(this).css('background-color')=='rgb(255, 221, 221)'){
			$(this).css('background-color','#ddefff')
		}
	});
	$('.tbrow').css({'border':'0px','border-radius':'0px','box-shadow':'0 3px 8px 0 rgba(135,183,220,0.2)'});
});

//【手機版專用】下方工具列樣式
$('.percent100').ready(function(){
	$('.percent100 td:nth-child(1n+2)').css({'background-color':'#C9EBFF','color':'#000'});		//不要加粗比較好看(,'font-weight':'bold')
	$('.percent100 td:nth-child(1n+2) img').css('filter','invert(100%)');
});
$('.percent100').click(function(){
	//黑背景高度拉高才不會捲軸下拉時破圖
	$('#bg_hs').ready(function(){
		$('#bg_hs').css('height','200%');
	});

	//以下是房子工具列
	$('#unit_box').css({'border-radius':'55px','box-shadow':'0 0 8px 0 rgba(255,255,255,0.9)','border':'solid 1px #82a6d2','background':'url(http://61.63.55.131/pattern/737/1.gif)'});
	$('#unit_box img').css({'border-radius':'7px','box-shadow':'0 2px 8px 0 rgba(202,202,202,0.9)','margin':'4px'});
	//$('#unit_box img').css('clip-path','inset(11px 2px 3px 0px)');				//按鈕剪裁跟圓角只能二選一
	$('#unit_box>div>img').css('display','none');							//去掉右上角叉叉按鈕
	$('#unit_box span:nth-child(1)').css('color','#2977d2');					//改選電腦版的按鈕改顏色

	//以下是齒輪工具列
	$('#tool_box').css({'border-radius':'44px','box-shadow':'0 0 8px 0 rgba(255,255,255,0.9)','border':'solid 1px #82a6d2','background':'url(http://61.63.55.131/pattern/737/1.gif)'});
	//$('#tool_box input').css({'background-color':'#e8f5ff','border':'solid 1px #87b7dc','border-radius':'4px','font-size':'20px','padding':'7px','text-shadow':'1px 1px #fff','font-family':'新細明體'});			//改用 CSS 設定，只差字體大小但手機看沒問題
	$('#state_div').css({'background-color':'#e8f5ff','border':'solid 1px #87b7dc','border-radius':'4px','font-size':'13pt','padding':'7px','text-shadow':'1px 1px #fff','font-family':'新細明體','width':'104px'});
	$('#tool_box>div>img').css('display','none');							//去掉右上角叉叉按鈕
	$('#tool_box span:nth-child(1)').css('color','#2977d2');					//改選電腦版的按鈕改顏色

	//以下是會員工具列
	$('#mem_box').css({'border-radius':'44px','box-shadow':'0 0 8px 0 rgba(255,255,255,0.9)','border':'solid 1px #82a6d2','background':'url(http://61.63.55.131/pattern/737/1.gif)','color':'#82a6d2','padding':'20px'});	//頂端空白考慮(,'padding-top':'20px')
	$('#mem_box form').css('background','#fff');							//表單背景樣式
	$('#mem_box input').css({'font-size':'20px','height':'auto','border-color':'#87b7dc'});		//按鈕樣式，其他樣式已在 CSS 設定
	$('#mem_box div').css('font-size','18px');							//文字大小
	//$('#mem_email').attr('size','10');								//會員登入欄位帳號變長 (沒作用，要從 CSS 改，但改了其他欄位會跑掉，放棄)
	$('#mem_email_hint').css({'top':'8px','left':'18px'});						//會員登入欄位帳號提示
	$('#mem_pw_hint').css({'top':'8px','left':'12px'});						//會員登入欄位密碼提示
	$('#mem_box>div>img').css('display','none');							//去掉右上角叉叉按鈕
});
$('#tool_box input').click(function(){
	//以下是齒輪工具列之查訂單
	$('#chk_order_div').css({'border-radius':'44px','box-shadow':'0 0 8px 0 rgba(255,255,255,0.9)','border':'solid 1px #82a6d2','background':'url(http://61.63.55.131/pattern/737/1.gif)'});
	$('#chk_order_div>div>div').css('color','#82a6d2');						//方法標題文字顏色
	$('#chk_order_div input').attr('size','6');							//輸入框小一點
	$('#chk_order_div input').css({'font-size':'20px','width':'auto'});				//按鈕樣式，其他樣式已在 CSS 設定
	$('#chk_order_div>div>img').css('display','none');						//去掉右上角叉叉按鈕

	//以下是齒輪工具列之暫存的購物
	$('#iframe_div').css({'border-radius':'44px','box-shadow':'0 0 8px 0 rgba(255,255,255,0.9)','border':'solid 1px #82a6d2','background':'url(http://61.63.55.131/pattern/737/1.gif)','padding':'21px'});
	//$('#iframe_div iframe').css('border-radius','14px');						//嵌入網頁圓角 (手機上沒作用放棄)
	$('#iframe_div>div>img').css('display','none');							//去掉右上角叉叉按鈕
});
$('#mem_box span').click(function(){
	//以下是會員工具列之忘記密碼 (同：齒輪工具列之暫存的購物)
	$('#iframe_div').css({'border-radius':'44px','box-shadow':'0 0 8px 0 rgba(255,255,255,0.9)','border':'solid 1px #82a6d2','background':'url(http://61.63.55.131/pattern/737/1.gif)','padding':'21px'});
	//$('#iframe_div iframe').css('border-radius','14px');						//嵌入網頁圓角 (手機上沒作用放棄)
	$('#iframe_div>div>img').css('display','none');							//去掉右上角叉叉按鈕
});

//【手機版專用】網頁最底部資訊
$('#homebt').ready(function(){
	$('#homebt span:nth-child(1)').css('color','#2977d2');						//改選電腦版的按鈕改顏色
});
