const __Mobile_Style_NW__=($('.percent100').length>=1);																				//【手機版專用】判斷是否有手機版 .percent100 存在
const __Product_Page_NW__=($('.p_tiem').length>=1);																				//【商品頁專用】判斷是否有商品頁才有的 .p_tiem 區塊存在

//【商品頁專用】for【電腦版】or【手機版】/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(__Product_Page_NW__){																		//如果是商品頁
//>>>>>	//【通用】of【商品頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	//讀取商品詳細資料
	$('#netwaterShowProductDetail').ready(function(){
		$('#netwaterShowProductDetail').html("<center><img src=http://61.63.55.134/29956/self/j20170706105340.jpg style='width:44px;opacity:0.2'></center>");	//第一件事先把商品頁才有的商品詳細資料區塊顯示載入中動畫
		function DetailTable(PClass,PId){
			$.get("https://script.google.com/macros/s/AKfycbzmN9cabcfTzBAgHmHZClkV3B65tZnQydF7qFKwu7_COfsduY6H/exec",
				{
					'productClass':PClass,
					'productId':PId
				},
				function(data){
					data+="<br><br>";
					data+="<center>";
					data+="<span style='color:#0171d1; font-size:19px;'>全系列濾材皆經國際認證及濾芯外殼經ＳＧＳ台灣檢驗ＦＤＡ無毒認證</span><br>";
					data+="<img width=0 class=san_pin_ren_zhen_1 src=http://61.63.55.134/29956/self/j20170526111811.jpg><br>";
					data+="<img width=0 class=san_pin_ren_zhen_2 src=http://61.63.55.134/29956/self/j20170526114226.jpg><br>";
					if(PClass=='主機'){
						data+="<img width=0 class=san_pin_bau_ku_fu_wu src=http://61.63.55.134/29956/self/j20170526154533.jpg>";
					}
					data+="</center>";
					$('#netwaterShowProductDetail').fadeOut(200,function(){
						$("#netwaterShowProductDetail").html(data).fadeIn();
					});
				}
			);
		}
		DetailTable($('#netwaterShowProductDetail').attr('alt'),location.pathname.replace('/product/',''));
	});

	//商品頁最上塊分類位置文字顏色
	$('.p_tiem>span').ready(function(){
		$('.p_tiem>span').css('color','#2977d2');
	});

	//商品頁購買數量選單
	$('#buyct').ready(function(){																	//選單樣式
		$('#buyct').parent().css('font-size','20px');
		$('#buyct').css({'font-size':'22px','background-color':'#e8f5ff','width':'76px'});
	});
	$('#ct_div').ready(function(){																	//自行輸入購買數量框樣式
		$('#keyin_val').focus(function(){															//手機版的無法偵測到選擇選項時觸發選單整體被按到的事件，所以改為偵測欄位出現後成為焦點時
			$('#ct_div').css({'border-radius':'44px','box-shadow':'0 0 8px 0 rgba(255,255,255,0.9)','border':'solid 1px #82a6d2','background':'url(http://61.63.55.131/pattern/737/1.gif)'});
			$('#ct_div>div>img').css('display','none');													//去掉右上角叉叉按鈕
		});
	});

	//商品頁訂購按鈕樣式(大概是載入比較慢所以 CSS 設定不到)
	$('.buy').ready(function(){
		$('.buy').css({'background-color':'#e8f5ff','font-size':'20px','border':'solid 1px #87b7dc','margin':'0 0 0 0','border-radius':'4px','font-family':'新細明體','width':'60px','height':'30px','line-height':'30px'});
	});

	//商品頁商品認證與服務顯示動畫
	$(window).scroll(function(){
		$('.san_pin_ren_zhen_1').ready(function(){
			if($('.san_pin_ren_zhen_1').css('width')=='0px' && $(window).scrollTop() >= $('.san_pin_ren_zhen_1').offset().top-$(window).height()*0.9){
				$('.san_pin_ren_zhen_1').animate({width:'700px'},400,function(){
					$('.san_pin_ren_zhen_2').animate({width:'700px'},400,function(){
						$('.san_pin_bau_ku_fu_wu').animate({width:'700px'},400);
					})
				});
			}
		});
	});

//>>>>>	//【手機版專用】of【商品頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	if(__Mobile_Style_NW__){																	//如果是手機版
		//手機版商品頁橫幅、網站名稱(跟首頁的樣式並不完全一樣)
		$('#main_div>div:nth-of-type(1)>table>tbody>tr>td:nth-of-type(2)').ready(function(){
			$('#main_div>div:nth-of-type(1)>table>tbody>tr>td:nth-of-type(1)>img').attr('src','http://61.63.55.134/29956/self/j20170704113027.jpg');
			$('#main_div>div:nth-of-type(1)>table>tbody>tr>td:nth-of-type(1)>img').css('padding-top','4px');
			$('#main_div>div:nth-of-type(1)>table>tbody>tr>td:nth-of-type(2)').css({'background':'#e8f5ff','border-bottom':'1px solid #fff'});
			$('#main_div>div:nth-of-type(1)>table>tbody>tr>td:nth-of-type(2)>div').css({'color':'#000','text-shadow':'rgb(255, 255, 255) 2px 2px 0px','width':'','padding-top':'9px'});
			$('#main_div>div:nth-of-type(1)>table>tbody>tr>td:nth-of-type(2)>div').html('<marquee loop=0 behavior=slide>晉歡淨水 Jin Huan Water</marquee>');
		});

		//手機版商品頁商品名稱
		$('#main_div>div:nth-of-type(2)').ready(function(){													//縮排
			$('#main_div>div:nth-of-type(2)').css({'padding-left':'35px','text-indent':'-25px'});
		});
		$('#main_div>div:nth-of-type(2)').ready(function(){													//名稱上的次方字體大小修正
			$('#main_div>div:nth-of-type(2)').html(	$('#main_div>div:nth-of-type(2)').html().replace(/\^2$/g,'<sup>2</sup>')	);
		});

		//手機版商品頁放大縮回圖片按鈕顏色
		$('#main_div>div:nth-of-type(5)>span').ready(function(){												//點此放大圖片按鈕
			$('#main_div>div:nth-of-type(5)>span').css('color','#2977d2');
		});
		$('#zoom_area_end>span').ready(function(){														//放大圖片後縮回按鈕
			$('#zoom_area_end>span').css('color','#2977d2');
		});

		//手機版商品頁加入到收藏匣按鈕
		$('div#main_div>div:nth-of-type(11)>div:nth-of-type(1)').ready(function(){
			$('div#main_div>div:nth-of-type(11)>div:nth-of-type(1)').css({'background-color':'#e8f5ff','font-size':'13px','border':'solid 1px #87b7dc','font-family':'新細明體'});
		});

		//手機版商品頁購買數量選單不要太擠
		$('#buyct').ready(function(){
			$('#buyct').parent().css('font-size','18px');
			$('#buyct').css({'font-size':'28px','margin-bottom':'18px','margin-top':'18px'});
		});

		//手機版商品頁留言板
		$('#main_div>div:nth-of-type(13)').ready(function(){													//表格改邊框
			$('#main_div>div:nth-of-type(13)').css({'box-shadow':'0 0 17px -4px rgba(20%,20%,40%,0.5)','margin-top':'48px'});
		});
		$('.table_msg>tbody>tr:nth-of-type(5)>td>input:nth-of-type(2)').ready(function(){									//送出按鈕(大多樣式已設定在 CSS)
			$('.table_msg>tbody>tr:nth-of-type(5)>td>input:nth-of-type(2)').attr('value','確定送出留言');
		});

		//手機版商品頁底部改選電腦版的按鈕改顏色
		$('#main_div>div:nth-last-of-type(3)>span:nth-child(1)').ready(function(){
			$('#main_div>div:nth-last-of-type(3)>span:nth-child(1)').css('color','#2977d2');
		});
	}
//>>>>>	//【電腦版專用】of【商品頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	else{																				//如果是電腦版
		//電腦版商品頁第一區塊改背景與邊框
		$('body>div:nth-of-type(2)').ready(function(){
			$('body>div:nth-of-type(2)').css({'background':'url(http://61.63.55.134/29956/self/j20170526153349.jpg) center bottom no-repeat','box-shadow':'0 3px 17px -4px rgba(20%,20%,40%,0.5)','border-radius':'0'});
		});

		//電腦版商品頁商品名稱
		$('#product_name').parent().ready(function(){														//縮排
			$('#product_name').parent().css({'padding-left':'35px','text-indent':'-25px'});
		});
		$('#product_name').ready(function(){															//名稱上的次方字體大小修正
			$('#product_name').html(	$('#product_name').html().replace(/\^2$/g,'<sup>2</sup>')	);
		});

		//電腦版商品頁第一區塊加入到收藏匣按鈕
		$('body>div:nth-of-type(2)>table:nth-of-type(1)>tbody>tr>td:nth-of-type(1)>div').ready(function(){
			$('body>div:nth-of-type(2)>table:nth-of-type(1)>tbody>tr>td:nth-of-type(1)>div').css({'background-color':'#e8f5ff','font-size':'13px','border':'solid 1px #87b7dc','font-family':'新細明體'});
		});

		//電腦版商品頁按下訂購按鈕後的已加入購物車框樣式
		$('.buy').click(function(){
			setTimeout(function(){
				$('#buy_finish_div').css({'border-radius':'44px','box-shadow':'0 0 8px 0 rgba(255,255,255,0.9)','border':'solid 1px #82a6d2','background':'url(http://61.63.55.131/pattern/737/1.gif)'});
				$('#buy_finish_div input').css({'font-size':'20px','width':'auto'});										//按鈕樣式，其他樣式已在 CSS 設定
				$('#buy_finish_div>div>img').css('display','none');												//去掉右上角叉叉按鈕
			},10);
		});
		$('#pcar').ready(function(){
			$('#pcar').css('top','50px');															//已放入購物車方框下移不要重疊到回商品列表按鈕
		});

		//電腦版商品頁第一區塊右下角網址移除
		$('body>div:nth-of-type(2)>table:nth-of-type(2) div').ready(function(){
			$('body>div:nth-of-type(2)>table:nth-of-type(2) div').css('display','none');
		});

		//電腦版商品頁第二區塊去邊框
		$('body>div:nth-of-type(3)').ready(function(){
			$('body>div:nth-of-type(3)').css('box-shadow','');
		});

		//電腦版商品頁留言板
		$('body>div:nth-of-type(5)').ready(function(){														//表格改邊框
			$('body>div:nth-of-type(5)').css({'box-shadow':'0 0 17px -4px rgba(20%,20%,40%,0.5)','border-radius':'0'});
		});
		$('body>div:nth-of-type(5)>div:nth-of-type(2)>form>input:nth-of-type(5)').ready(function(){								//送出按鈕(大多樣式已設定在 CSS)
			$('body>div:nth-of-type(5)>div:nth-of-type(2)>form>input:nth-of-type(5)').addClass('san_pin_yie_lio_yien_suon_tsu_btn');
			$('body>div:nth-of-type(5)>div:nth-of-type(2)>form>input:nth-of-type(5)').attr('value','確定送出留言');
		});

		//電腦版商品頁底部改選手機版的按鈕改顏色
		$('body>div:nth-last-of-type(2)>span:nth-child(2)').ready(function(){
			$('body>div:nth-last-of-type(2)>span:nth-child(2)').css('color','#2977d2');
		});
	}
}

//【非商品頁專用】for【電腦版】or【手機版】/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(!__Product_Page_NW__){													//如果不是商品頁
//>>>>>	//【通用】of【非商品頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	//左邊商品分類選單最上方搜尋欄位
	$('#kw').ready(function(){
		$('#kw').css('border','1px solid rgb(135,183,220)');
	});

	//商品分類名稱上數量文字替換
	$('.p_ct').ready(function(){												//左邊列表
		$('.p_ct').each(function(){
			$(this).html(	$(this).html().replace(/\.\.\./g,' &nbsp; x ')	);
		});
	});
	$('#p_tol').ready(function(){												//左邊商品總覽
		$('#p_tol').each(function(){
			$(this).html(	$(this).html().replace(/\.\.\./g,' &nbsp; × ')	);
		});
	});
	$('.pc2b_cl').ready(function(){												//商品分類頁上面列表反白
		$('.pc2b_cl').each(function(){
			$(this).html(	$(this).html().replace(/\.\.\./g,' &nbsp; × ')	);
		});
	});
	$('.pc2b_nr').ready(function(){												//商品分類頁上面列表原始
		$('.pc2b_nr').each(function(){
			$(this).html(	$(this).html().replace(/\.\.\./g,' &nbsp; × ')	);
		});
	});

	//商品分類頁排序選單
	$('select[name="vorder_p"]').ready(function(){
		$('select[name="vorder_p"]').css({'font-size':'16px','background-color':'#e8f5ff'});
	});

	//商品列表預覽圖的樣式
	$('.imgr8').ready(function(){
		$('.imgr8').css('max-height','240px');
		$('.imgr8').css('width','auto');
		$('.p_tb').attr('align','center');
	});

	//商品搜尋結果
	$('#kw_page_top a').ready(function(){
		$('#kw_page_top a').css({'background-color':'#e8f5ff','border':'solid 1px rgb(135, 183, 220)','font-family':'新細明體'});
	});
	$('#kw_page_bottom a').ready(function(){
		$('#kw_page_bottom a').css({'background-color':'#e8f5ff','border':'solid 1px rgb(135, 183, 220)','font-family':'新細明體'});
	});

//>>>>>	//【手機版專用】of【非商品頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	if(__Mobile_Style_NW__){												//如果是手機版
		//手機版橫幅、網站名稱設定
		$('#main_div').ready(function(){
			//橫幅－選擇手機版全區id下一層的img中第二個(橫幅)，切換成手機板寬度較窄圖
			$('#main_div>img:nth-of-type(2)').attr('src','http://61.63.55.134/29956/self/j20170614104004.jpg');

			//網站名稱跑馬燈
			$('#main_div>table:nth-of-type(1)>tbody>tr>td:nth-of-type(2)').css({'background':'#e8f5ff','border-bottom':'1px solid #fff'});
			$('#main_div>table:nth-of-type(1)>tbody>tr>td:nth-of-type(2)>div').css({'color':'#000','text-shadow':'rgb(255, 255, 255) 2px 2px 0px','padding-top':'9px'});
			$('#main_div>table:nth-of-type(1)>tbody>tr>td:nth-of-type(2)>div').html('<marquee loop=0 behavior=slide>&nbsp;&nbsp;晉歡淨水 Jin Huan Water</marquee>');
		});

		//手機版左邊商品分類選單樣式
		$('#bg5').ready(function(){											//黑背景高度拉高才不會捲軸下拉時破圖
			$('#bg5').css('height','200%');
		});
		$('.pc1_cl').ready(function(){											//已選的主分類
			$('.pc1_cl').css({'background-color':'#e2f1ff', 'border-radius':'0px', 'border-bottom':'0px', 'padding-left':'27px', 'background-image':'url(http://61.63.55.134/29956/self/j20170628151255.jpg)'});
		});
		$('.pc1_nr').ready(function(){											//主分類
			$('.pc1_nr').css({'background-color':'#e2f1ff', 'border-radius':'0px', 'border-bottom':'0px', 'padding-left':'27px', 'background-image':'url(http://61.63.55.134/29956/self/j20170628145838.jpg)'});
		});
		$('.pc2_cl').ready(function(){											//已選的次分類
			$('.pc2_cl').css({'background-color':'#e2f1ff', 'border-radius':'0px', 'border-bottom':'0px', 'color':'#000'});
		});
		$('.pc2_nr').ready(function(){											//次分類
			$('.pc2_nr').css({'background-color':'#e2f1ff', 'border-radius':'0px', 'border-bottom':'0px', 'color':'#000'});
		});
		$('#product_cls_cont').ready(function(){									//選單整體
			$('#product_cls_cont').css({'background-color':'#e2f1ff','border-radius':'0 0 23px 23px','border':'solid 1px #fff','border-top':'0','margin-left':'3px','height':$(window).height()-4+'px'});
			$('#product_cls_cont div:last-child span:nth-child(1)').css('color','#2977d2');				//改選電腦版的按鈕改顏色
			$('#product_cls_cont div:last-child').css('color','#000');						//改選手機版的按鈕改顏色
		});

		//手機版商品分類頁商品列表上方的虛線去掉
		$('#kw_page_top').ready(function(){
			$('#kw_page_top').parent().find('>div:nth-of-type(2)').css('background','url()');
		});

		//手機版商品分類頁、熱門商品樣式
		$('.tbrow').ready(function(){
			//剛剛瀏覽的商品背景色會顯示粉紅色改成淡藍色
			$('.tbrow').each(function(){
				if($(this).css('background-color')=='rgb(255, 221, 221)'){
					$(this).css('background-color','#ddefff')
				}
			});

			//商品列表樣式
			$('.tbrow').css({'border':'0px','border-radius':'0px','box-shadow':'0 0 4px 1px rgba(68,159,214,0.53)','width':'98%'});

			//看所有熱門商品超連結樣式
			$('.tbrow').parent().parent().find('td>div>a').css('color','#2977d2');
		});

		//手機版商品列表名稱上的次方字體大小修正
		$('.p_ul').ready(function(){
			$('.p_ul').each(function(){
				$(this).html(	$(this).html().replace(/\^2$/g,'<sup>2</sup>')	);
			});
		});

		//手機版下方工具列樣式
		$('.percent100').ready(function(){
			$('.percent100 td:nth-child(1n+2)').css({'background-color':'#C9EBFF','color':'#000'});			//不要加粗比較好看(,'font-weight':'bold')
			$('.percent100 td:nth-child(1n+2) img').css('filter','invert(100%)');
		});
		$('.percent100').click(function(){
			//黑背景高度拉高才不會捲軸下拉時破圖、改色
			$('#bg_hs').ready(function(){
				$('#bg_hs').css('height','200%');								//原本有改背景色但不好看刪了({,'background-color':'#bcd'})
			});

			//以下是房子工具列
			$('#unit_box').css({'border-radius':'55px','box-shadow':'0 0 8px 0 rgba(255,255,255,0.9)','border':'solid 1px #82a6d2','background':'url(http://61.63.55.131/pattern/737/1.gif)'});
			$('#unit_box img').css({'border-radius':'7px','box-shadow':'0 2px 8px 0 rgba(202,202,202,0.9)','margin':'4px'});
			$('#unit_box>div>img').css('display','none');								//去掉右上角叉叉按鈕
			$('#unit_box span:nth-child(1)').css('color','#2977d2');						//改選電腦版的按鈕改顏色

			//以下是齒輪工具列
			$('#tool_box').css({'border-radius':'44px','box-shadow':'0 0 8px 0 rgba(255,255,255,0.9)','border':'solid 1px #82a6d2','background':'url(http://61.63.55.131/pattern/737/1.gif)'});
			$('#state_div').css({'background-color':'#e8f5ff','border':'solid 1px #87b7dc','border-radius':'4px','font-size':'13pt','padding':'7px','text-shadow':'1px 1px #fff','font-family':'新細明體','width':'104px','color':'#000'});
			$('#tool_box>div>img').css('display','none');								//去掉右上角叉叉按鈕
			$('#tool_box span:nth-child(1)').css('color','#2977d2');						//改選電腦版的按鈕改顏色

			//以下是會員工具列
			$('#mem_box').css({'border-radius':'44px','box-shadow':'0 0 8px 0 rgba(255,255,255,0.9)','border':'solid 1px #82a6d2','background':'url(http://61.63.55.131/pattern/737/1.gif)','color':'#82a6d2','padding':'20px'});	//頂端空白考慮(,'padding-top':'20px')
			$('#mem_box form').css('background','#fff');								//表單背景樣式
			$('#mem_box input').css({'font-size':'20px','height':'auto','border-color':'#87b7dc'});			//按鈕樣式，其他樣式已在 CSS 設定
			$('#mem_box div').css('font-size','18px');								//文字大小
			$('#mem_email_hint').css({'top':'8px','left':'18px'});							//會員登入欄位帳號提示
			$('#mem_pw_hint').css({'top':'8px','left':'12px'});							//會員登入欄位密碼提示
			$('#mem_box>div>img').css('display','none');								//去掉右上角叉叉按鈕
		});
		$('#tool_box input').click(function(){
			//以下是齒輪工具列之查訂單
			$('#chk_order_div').css({'border-radius':'44px','box-shadow':'0 0 8px 0 rgba(255,255,255,0.9)','border':'solid 1px #82a6d2','background':'url(http://61.63.55.131/pattern/737/1.gif)'});
			$('#chk_order_div>div>div').css('color','#82a6d2');							//方法標題文字顏色
			$('#chk_order_div input').attr('size','6');								//輸入框小一點
			$('#chk_order_div input').css({'font-size':'20px','width':'auto'});					//按鈕樣式，其他樣式已在 CSS 設定
			$('#chk_order_div>div>img').css('display','none');							//去掉右上角叉叉按鈕

			//以下是齒輪工具列之暫存的購物
			$('#iframe_div').css({'border-radius':'44px','box-shadow':'0 0 8px 0 rgba(255,255,255,0.9)','border':'solid 1px #82a6d2','background':'url(http://61.63.55.131/pattern/737/1.gif)','padding':'21px'});
			$('#iframe_div>div>img').css('display','none');								//去掉右上角叉叉按鈕
		});
		$('#mem_box span').click(function(){
			//以下是會員工具列之忘記密碼 (同：齒輪工具列之暫存的購物)
			$('#iframe_div').css({'border-radius':'44px','box-shadow':'0 0 8px 0 rgba(255,255,255,0.9)','border':'solid 1px #82a6d2','background':'url(http://61.63.55.131/pattern/737/1.gif)','padding':'21px'});
			$('#iframe_div>div>img').css('display','none');								//去掉右上角叉叉按鈕
		});

		//手機版網頁最底部資訊
		$('#homebt').ready(function(){
			$('#homebt span:nth-child(1)').css('color','#2977d2');							//改選電腦版的按鈕改顏色
		});
	}
//>>>>>	//【電腦版專用】of【非商品頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	else{															//如果是電腦版
		//電腦版左邊商品分類選單樣式
		$('#shbt').ready(function(){											//最上方隱藏的搜尋按鈕
			$('#shbt').css({'height':'40px','border':'solid 1px #87b7dc','margin-bottom':'5px'});
			$('#shbt').parent().css('background-image','url(http://61.63.55.134/29956/self/j20170628091120.jpg)');
		});
		$('.pc2_box').ready(function(){											//商品子分類背景
			$('.pc2_box').css('background-image','url(http://61.63.55.134/29956/self/j20170628091120.jpg)');
		});

		//電腦版焦點商品跑馬燈
		$('#marqueeP').ready(function(){
			$('#marqueeP').height(248);										//文字顯示區域高度增加才不會名稱太長被遮掉
			$('#marqueeP').width(1006);										//讓最後一樣(一排只有四樣)商品名稱的前標文字「豪美、」不會斷行
		});

		//電腦版商品列表名稱上的次方字體大小修正
		$('.p_ul li a').ready(function(){
			$('.p_ul li a').each(function(){
				$(this).html(	$(this).html().replace(/\^2$/g,'<sup>2</sup>')	);
			});
		});

		//電腦版快速看商品圖樣式
		$('#img_box').ready(function(){											//整體
			$('#img_box').css({'border':'1px solid rgb(130, 166, 210)','background':'url(http://61.63.55.131/pattern/737/1.gif)','padding':'37px','padding-top':'33px'});
		});
		$('#img_box>div>div').ready(function(){										//快速看圖標題
			$('#img_box>div>div').css({'font-size':'24px','color':'#5984ca','font-style':'italic'});
		});
		$('#M_img').ready(function(){											//大圖
			$('#M_img').css({'border-radius':'','margin-right':'10px','box-shadow':'0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'});
		});
		$('.imgr8').click(function(){											//小圖總數和換頁文字
			$('#no_c').parent().css({'font-size':'17px','color':'#5984ca'});
			$('#previous_p').css({'font-size':'17px','color':'#5984ca'});
			$('#next_p').css({'font-size':'17px','color':'#5984ca'});

			//縮圖過長自動調整比例
			setTimeout(function(){
				$('img.imgs_r').each(function(){
					if($(this).css('height').substring(0,3)>240){
						$(this).css({'height':'240px','width':'auto'});
					}
				});
			},100);
		});

		//電腦版網頁最底部資訊
		$('#homebt').ready(function(){
			$('#homebt span:nth-child(2)').css('color','#2977d2');							//改選手機版的按鈕改顏色
		});
	}
}

//【手機版專用】for【商品頁】and【非商品頁】/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(__Mobile_Style_NW__){									//如果是手機版
//>>>>>	//【通用】of【手機版專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	//移到最頂層按鈕
	$('#gotop').ready(function(){
		$('#gotop').attr('src','http://61.63.55.134/29956/self/j20170703123947.jpg');
	});
}

//【通用】for【電腦版】and【手機版】and【商品頁】and【非商品頁】/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//商品價格
$('.price1').ready(function(){
	$('.price1').css('color','red');
});

//【加入會員頁專用】/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(document.location.href=='http://netwater.shop2000.com.tw/member' || document.location.href=='http://www.shop2000.com.tw/%E6%B7%A8%E6%B0%B4%E5%AF%A6%E6%A5%ADnetwater/member'){
//>>>>>	//【通用】of【加入會員頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	$('.p_c3b>table>tbody>tr:nth-of-type(2)>td').css('height','0px');													//第一區塊的標題跟內容中間的隱藏區高度砍掉
	$('.table_mem th').css({'background-color':'#e8f5ff','border':'solid 4px #fff','font-size':'16px'});									//表格標題樣式
	$('.table_mem td,.table_mem').css({'border':'0px','font-size':'16px'});													//表格內容樣式
	$('.table_mem input,.table_mem select,.table_mem textarea').css({'background-color':'rgb(232,245,255)','border':'solid 1px rgb(169, 169, 169)','font-size':'16px'});	//選單與輸入欄位樣式
	$('#act1').css('font-family','');																	//加入會員按鈕
//>>>>>	//【電腦版專用】of【加入會員頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	if(!__Mobile_Style_NW__ && !__Product_Page_NW__){															//如果是電腦版
		$('.right_td .p_c1b,.right_td .p_c2b,.right_td .p_c4b,.right_td .p_c5b,.right_td .p_c6b').css('display','none');						//邊框隱藏
		$('.right_td .p_c3b').css('background','url()');														//邊框隱藏
		$('.right_td .p_tb').css({'background':'#fff','box-shadow':'rgba(51,51,102,0.498039) 0 3px 17px -4px'});							//區塊
		$('.right_td .p_c3b>table tr:nth-of-type(1) div').css({'font-size':'24px','color':'rgb(89,132,202)'});								//第一區塊標題
		$('.right_td .p_c3b>div').css({'font-size':'24px','color':'rgb(89,132,202)'});											//第二區塊標題
		$('.right_td .p_c3b>table>tbody>tr:nth-of-type(1)>td>div').css({'border-bottom':'0px','padding-top':'27px'});							//第一區塊標題下方去虛線、上方加高
		$('.right_td .p_c3b>div').css({'border-bottom':'0px','padding-top':'27px'});											//第二區塊標題下方去虛線、上方加高
	}
//>>>>>	//【手機版專用】of【加入會員頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	else if(__Mobile_Style_NW__ && !__Product_Page_NW__){															//如果是手機版
		$('#main_div').css('background','url(http://61.63.55.131/pattern/737/1.gif)');											//加背景
		$('#main_div .p_c1b,#main_div .p_c2b,#main_div .p_c4b,#main_div .p_c5b,#main_div .p_c6b').css('display','none');						//邊框隱藏
		$('#main_div .p_c3b').css('background','url()');														//邊框隱藏
		$('#main_div .p_tb').css({'background':'#fff','box-shadow':'rgba(51,51,102,0.498039) 0 3px 17px -4px'});							//區塊
		$('#main_div .p_c3b>table tr:nth-of-type(1) div').css({'font-size':'24px','color':'rgb(89,132,202)'});								//第一區塊標題
		$('#main_div .p_c3b>div').css({'font-size':'24px','color':'rgb(89,132,202)'});											//第二區塊標題
		$('#main_div .p_c3b>table>tbody>tr:nth-of-type(1)>td>div').css({'border-bottom':'0px','padding-top':'27px'});							//第一區塊標題下方去虛線、上方加高
		$('#main_div .p_c3b>div').css({'border-bottom':'0px','padding-top':'27px'});											//第二區塊標題下方去虛線、上方加高
		$('.fix_width').css('padding-bottom','30px');															//第一區塊內容底部拉高
		$('#main_div #email_mem').css('width','171px');															//防止手機看第二區塊寬度被拉長要限制 Email 欄位寬度
		$('#main_div .table_mem input[name="tel"]').css('width','135px');												//防止手機看第二區塊寬度被拉長要限制電話欄位寬度
	}
}

//【電子報頁專用】/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(document.location.href=='http://netwater.shop2000.com.tw/edm' || document.location.href=='http://www.shop2000.com.tw/%E6%B7%A8%E6%B0%B4%E5%AF%A6%E6%A5%ADnetwater/edm'){
//>>>>>	//【通用】of【電子報頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	$('.p_c3b>table>tbody>tr:nth-of-type(1)>td').css({'color':'rgb(89, 132, 202)','font-size':'24px','background-color':'','padding':'10px'});	//第一區塊的標題樣式
	$('.p_c3b>table>tbody>tr:nth-of-type(1n+2) td,.p_c3b>table>tbody>tr:nth-of-type(1n+2) input').css('font-size','16px');				//字體大小
	$('.p_c3b input').css({'background-color':'rgb(232,245,255)','border':'solid 1px rgb(169, 169, 169)'});						//輸入欄位樣式
	$('.p_c3b>table>tbody>tr:nth-of-type(5) input').attr('id','act1');										//訂閱按鈕透過掛上加入會員頁才有的按鈕 #act1 來套用樣式
	$('.p_c3b>table>tbody>tr:nth-of-type(5) input').css({'font-size':'16px','margin-bottom':'10px'});						//訂閱按鈕樣式補充
	$('.p_c3b>table>tbody>tr:nth-of-type(5) span').css({'color':'rgb(41, 119, 210)','font-size':'16px','text-decoration':'none'});			//說明連結樣式
//>>>>>	//【電腦版專用】of【電子報頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	if(!__Mobile_Style_NW__ && !__Product_Page_NW__){												//如果是電腦版
		$('.right_td .p_c1b,.right_td .p_c2b,.right_td .p_c4b,.right_td .p_c5b,.right_td .p_c6b').css('display','none');			//(同加入會員)邊框隱藏
		$('.right_td .p_c3b').css('background','url()');											//(同加入會員)邊框隱藏
		$('.right_td .p_tb').css({'background':'#fff','box-shadow':'rgba(51,51,102,0.498039) 0 3px 17px -4px'});				//(同加入會員)區塊
	}
//>>>>>	//【手機版專用】of【電子報頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	else if(__Mobile_Style_NW__ && !__Product_Page_NW__){												//如果是手機版
		$('#main_div').css('background','url(http://61.63.55.131/pattern/737/1.gif)');								//(同加入會員)加背景
		$('#main_div .p_c1b,#main_div .p_c2b,#main_div .p_c4b,#main_div .p_c5b,#main_div .p_c6b').css('display','none');			//(同加入會員)邊框隱藏
		$('#main_div .p_c3b').css('background','url()');											//(同加入會員)邊框隱藏
		$('#main_div .p_tb').css({'background':'#fff','box-shadow':'rgba(51,51,102,0.498039) 0 3px 17px -4px'});				//(同加入會員)區塊
	}
}

//【相關連結頁專用】/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(document.location.href=='http://netwater.shop2000.com.tw/weblink' || document.location.href=='http://www.shop2000.com.tw/%E6%B7%A8%E6%B0%B4%E5%AF%A6%E6%A5%ADnetwater/weblink'){
//>>>>>	//【通用】of【相關連結頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	$('.wl_box').css('background','url()');																	//分隔線去掉
	$('.wl_box>ul>li>a').css('text-decoration','none');															//連結標題去底線
	//$('.wl_box>ul>div>a').css({'font-style':'italic','display':'none'});													//網址斜體 (還是隱藏好了。改分別放到下面去了)
	$('.p_c3>a>img').css({'box-shadow':'0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)','margin-top':'15px','padding':'10px','background':'#fff'});		//網站圖樣式
//>>>>>	//【電腦版專用】of【相關連結頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	if(!__Mobile_Style_NW__ && !__Product_Page_NW__){															//如果是電腦版
		$('.right_td .p_c1b,.right_td .p_c2b,.right_td .p_c4b,.right_td .p_c5b,.right_td .p_c6b').css('display','none');						//(同加入會員)邊框隱藏
		$('.right_td .p_c3b').css('background','url()');														//(同加入會員)內容區塊去背景
		$('.right_td .p_c1,.right_td .p_c2,.right_td .p_c4,.right_td .p_c5,.right_td .p_c6').css('display','none');							//網站圖邊框隱藏
		$('.right_td .p_c3').css('background','url()');															//網站圖邊框隱藏
		$('.p_c3>a>img').css('margin-right','20px');															//網站圖再左移
		$('.wl_box>ul>div>a').css('font-style','italic');														//網址斜體
		$('.wl_box>ul>li>a').hover(function(){																//滑鼠指到標題會變粗體
			$(this).css('font-weight','bold');
		},function(){
			$(this).css('font-weight','normal');
		});
		$('.wl_box').css('margin-bottom','30px');															//各連結高度分開一點
	}
//>>>>>	//【手機版專用】of【相關連結頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	else if(__Mobile_Style_NW__ && !__Product_Page_NW__){															//如果是手機版
		$('#main_div').css('background','url(http://61.63.55.131/pattern/737/1.gif)');											//(同加入會員)加背景
		$('#main_div .p_c1b,#main_div .p_c2b,#main_div .p_c4b,#main_div .p_c5b,#main_div .p_c6b').css('display','none');						//(同加入會員)邊框隱藏
		$('#main_div .p_c3b').css('background','url()');														//(同加入會員)內容區塊去背景
		$('.wl_box').css({'background':'url()','width':'','padding':''});												//各筆樣式
		$('.wl_box>ul>li').css({'list-style':'none','text-align':'center','text-indent':'-35px'});									//各筆連結去掉地球小圖示並置中
		$('.p_tb').css({'float':'','margin':''});															//網站圖放上面置中
		$('.wl_box>ul>div>a').css('display','none');															//網址隱藏
	}
}

//【留言板頁專用】/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(document.location.href=='http://netwater.shop2000.com.tw/message' || document.location.href=='http://www.shop2000.com.tw/%E6%B7%A8%E6%B0%B4%E5%AF%A6%E6%A5%ADnetwater/message'){
//>>>>>	//【通用】of【留言板頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	$('.msg_box').css({'background':'#fff','box-shadow':'0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)','margin':'7px','margin-bottom':'14px','border-radius':'0px','width':'auto','padding':'13px'});	//各筆樣式
	$('.pt9>input,.pt9>select').attr('id','act1');																					//選單與輸入欄位與按鈕透過掛上加入會員頁才有的 #act1 來套用樣式
	$('.pt9>input,.pt9>select').css({'background-color':'rgb(232,245,255)','border':'solid 1px rgb(169, 169, 169)','font-size':'16px'});										//選單與輸入欄位樣式補充
	$('.pt11').css({'font-size':'23px','color':'rgb(89,132,202)','font-style':'italic','font-family':'微軟正黑體'});												//留言者名樣式
	$('.msg_ans,.msg_ans2,.msg_p_ask').css('font-size','16px');																			//留言板小字放大
	$('.msg_p_ask').css('color','#1cabda');																						//詢問商品字色
	$('.msg_ans').css('color','#fcc63d');																						//網站回覆字色
//>>>>>	//【電腦版專用】of【留言板頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	if(!__Mobile_Style_NW__ && !__Product_Page_NW__){																				//如果是電腦版
		$('.right_td .p_c1b,.right_td .p_c2b,.right_td .p_c4b,.right_td .p_c5b,.right_td .p_c6b').css('display','none');											//(同加入會員)邊框隱藏
		$('.right_td .p_c3b').css('background','url()');																			//(同加入會員)內容區塊去背景
		$('.pt9>select').css('padding-bottom','10px');																				//選單拉高比較整齊(跟手機版只差1px)
		$('.left2>a').css('word-break','break-all');																				//登入管理員看的時候留言者網址太長自動換行
	}
//>>>>>	//【手機版專用】of【留言板頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	else if(__Mobile_Style_NW__ && !__Product_Page_NW__){																				//如果是手機版
		$('input[name="kw"]').css('width','120px');																				//輸入關鍵字搜尋欄位改短一點比較好看
		$('#main_div').css('background','url(http://61.63.55.131/pattern/737/1.gif)');																//(同加入會員)加背景
		$('#main_div .p_c1b,#main_div .p_c2b,#main_div .p_c4b,#main_div .p_c5b,#main_div .p_c6b').css('display','none');											//(同加入會員)邊框隱藏
		$('#main_div .p_c3b').css('background','url()');																			//(同加入會員)內容區塊去背景
		$('.pt9>select').css({'padding-bottom':'7px','margin-bottom':'10px'});																				//選單拉高比較整齊(跟電腦版只差1px)
	}
}
//【留言板留言頁專用】/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
else if(document.location.href=='http://netwater.shop2000.com.tw/message/addmsg' || document.location.href=='http://www.shop2000.com.tw/%E6%B7%A8%E6%B0%B4%E5%AF%A6%E6%A5%ADnetwater/message/addmsg'){
//>>>>>	//【通用】of【留言板留言頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	//手機版沒有底部區塊什麼也沒辦法做
//>>>>>	//【電腦版專用】of【留言板留言頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	if(!__Mobile_Style_NW__ && !__Product_Page_NW__){																				//如果是電腦版
		$('.right_td>div').css({'border-radius':'','border':'0px','box-shadow':'0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)','background-color':'#fff'});						//留言區塊整體樣式
		$('.right_td>div>form>div').css({'font-size':'24px','color':'rgb(89, 132, 202)','padding-top':'27px'});													//留言區標題樣式
		$('.right_td>div input,.right_td>div textarea').css({'background-color':'rgb(232,245,255)','border':'solid 1px rgb(169, 169, 169)','font-size':'16px'});						//輸入欄位樣式
		$('.right_td>div>form>input').attr('id','act1');																			//按鈕透過掛上加入會員頁才有的 #act1 來套用樣式
	}
//>>>>>	//【手機版專用】of【留言板留言頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	else if(__Mobile_Style_NW__ && !__Product_Page_NW__){																				//如果是手機版
		//沒有底部區塊什麼也沒辦法做 $('#main_div>div:nth-of-type(2)').css({'border-radius':'','border':''});
	}
}

//【FAQ頁專用】/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(document.location.href=='http://netwater.shop2000.com.tw/faq' || document.location.href=='http://www.shop2000.com.tw/%E6%B7%A8%E6%B0%B4%E5%AF%A6%E6%A5%ADnetwater/faq'){
//>>>>>	//【通用】of【FAQ頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	$('.faq_box,.faq_title').css({'box-shadow':'0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)','background':'#fff','padding':'20px'});	//各題區塊樣式
	$('.faq_title li').css('list-style-image','url(http://61.63.55.131/pattern/39236/1.gif)');							//各題標題圖示(最上層區塊)
	$('.faq_box li').css('list-style-image','url(http://61.63.55.131/pattern/39254/1.gif)');							//各題標題圖示(各筆區塊)
	$('.faq_title>ul>li>a,.faq_box>ul>li').css({'color':'#2977d2','text-decoration':'none'});							//各題標題樣式
	$('.faq_box>ul').css('margin-top','7px');													//各題提高度縮小
	$('.to_top>a').css('text-decoration','none');													//各題右下角回到最上頁文字樣式
	$('.to_top').css('margin-top','20px');														//各題右下角回到最上頁文字下移
//>>>>>	//【電腦版專用】of【FAQ頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	if(!__Mobile_Style_NW__ && !__Product_Page_NW__){												//如果是電腦版
		$('.right_td .p_c1b,.right_td .p_c2b,.right_td .p_c4b,.right_td .p_c5b,.right_td .p_c6b').css('display','none');			//(同加入會員)邊框隱藏
		$('.right_td .p_c3b').css('background','url()');											//(同加入會員)內容區塊去背景
		$('.faq_title>ul>li>a').hover(function(){												//滑鼠指到標題會變粗體
			$(this).css('text-decoration','underline');
		},function(){
			$(this).css('text-decoration','none');
		});
	}
//>>>>>	//【手機版專用】of【FAQ頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	else if(__Mobile_Style_NW__ && !__Product_Page_NW__){												//如果是手機版
		$('#main_div').css('background','url(http://61.63.55.131/pattern/737/1.gif)');								//(同加入會員)加背景
		$('#main_div .p_c1b,#main_div .p_c2b,#main_div .p_c4b,#main_div .p_c5b,#main_div .p_c6b').css('display','none');			//(同加入會員)邊框隱藏
		$('#main_div .p_c3b').css('background','url()');											//(同加入會員)內容區塊去背景
	}
}

//【消息頁專用】/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(document.location.href=='http://netwater.shop2000.com.tw/news' || document.location.href=='http://www.shop2000.com.tw/%E6%B7%A8%E6%B0%B4%E5%AF%A6%E6%A5%ADnetwater/news'){
//>>>>>	//【通用】of【消息頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	//$('.pt9').css({'color':'rgb(41, 119, 210)','font-size':'20px','font-family':'微軟正黑體'})									//輸入欄位前文字樣式 (還是隱藏好了)
	$('.pt9').html('<input type=text name=kw><input style="font-size:9pt;" type=submit name=act1 value=查詢>');							//輸入欄位前文字隱藏
	$('.pt9>input').attr('id','act1');																//輸入欄位與按鈕透過掛上加入會員頁才有的 #act1 來套用樣式
	$('.pt9>input').css({'background-color':'rgb(232,245,255)','border':'solid 1px rgb(169, 169, 169)','font-size':'16px'});					//輸入欄位樣式補充
	$('.pt9>input:nth-of-type(1)').css('margin-right','3px');													//輸入欄位與按鈕之間空格
	$('.imgr8').css({'border-radius':'0px','box-shadow':'0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'});						//圖片樣式
//>>>>>	//【電腦版專用】of【消息頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	if(!__Mobile_Style_NW__ && !__Product_Page_NW__){														//如果是電腦版
		$('.right_td .p_c1b,.right_td .p_c2b,.right_td .p_c4b,.right_td .p_c5b,.right_td .p_c6b').css('display','none');					//(同加入會員)邊框隱藏
		$('.right_td .p_c3b').css('background','url()');													//(同加入會員)內容區塊去背景
		$('.right_td .p_c1,.right_td .p_c2,.right_td .p_c4,.right_td .p_c5,.right_td .p_c6').css('display','none');						//消息圖邊框隱藏
		$('.right_td .p_c3').css('background','url()');														//消息圖邊框隱藏
		$('table.news_cont>tbody>tr>td:nth-of-type(1)').css('display','none');											//消息圖置中
		$('.n_title').css('padding','0');															//消息標題樣式
		$('td.n_title>a').css({'text-decoration':'none','color':'rgb(41,119,210)','font-family':'新細明體','text-shadow':'1px 1px #fff','font-size':'20px'});	//消息標題樣式
		$('td.n_title>a').hover(function(){															//滑鼠指到標題會加底線
			$(this).css('text-decoration','underline');
		},function(){
			$(this).css('text-decoration','none');
		});
		$('span.n_date').css('float','right');															//消息標題日期向右對齊
	}
//>>>>>	//【手機版專用】of【消息頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	else if(__Mobile_Style_NW__ && !__Product_Page_NW__){														//如果是手機版
		$('#main_div').css('background','url(http://61.63.55.131/pattern/737/1.gif)');										//(同加入會員)加背景
		$('#main_div .p_c1b,#main_div .p_c2b,#main_div .p_c4b,#main_div .p_c5b,#main_div .p_c6b').css('display','none');					//(同加入會員)邊框隱藏
		$('#main_div .p_c3b').css('background','url()');													//(同加入會員)內容區塊去背景
		$('.n_tb').css({'background-color':'#e8f6ff','margin-top':'18px'});											//消息標題樣式
		$('.n_title>a').css({'text-decoration':'none','color':'#000'});												//消息標題樣式
	}
}
//【消息頁消息各頁專用】/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(document.location.href.substring(0,37)=='http://netwater.shop2000.com.tw/news/' || document.location.href.substring(0,77)=='http://www.shop2000.com.tw/%E6%B7%A8%E6%B0%B4%E5%AF%A6%E6%A5%ADnetwater/news/'){
//>>>>>	//【通用】of【FAQ頁專用】---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	$('.n_title').ready(function(){
		$('#main_div').css('background','url(http://61.63.55.131/pattern/737/1.gif)');							//(同加入會員)加背景
		$('.p_c1b,.p_c2b,.p_c4b,.p_c5b,.p_c6b').css('display','none');									//邊框隱藏
		$('.p_c3b').css('background','url()');												//內容區塊去背
		$('.n_title>div').css({'color':'rgb(41,119,210)','font-family':'新細明體','text-shadow':'1px 1px #fff','font-size':'20px'});	//消息標題樣式
		$('.n_title').css('padding','0');												//消息標題樣式
		$('.p_c3b>img').css({'box-shadow':'0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)','max-width':'96%'});		//消息圖樣式

		//手機版商品頁橫幅、網站名稱(同手機版專用 of 商品頁專用)
		$('#main_div>div:nth-of-type(1)>table>tbody>tr>td:nth-of-type(2)').ready(function(){
			$('#main_div>div:nth-of-type(1)>table>tbody>tr>td:nth-of-type(1)>img').attr('src','http://61.63.55.134/29956/self/j20170704113027.jpg');
			$('#main_div>div:nth-of-type(1)>table>tbody>tr>td:nth-of-type(1)>img').css('padding-top','4px');
			$('#main_div>div:nth-of-type(1)>table>tbody>tr>td:nth-of-type(2)').css({'background':'#e8f5ff','border-bottom':'1px solid #fff'});
			$('#main_div>div:nth-of-type(1)>table>tbody>tr>td:nth-of-type(2)>div').css({'color':'#000','text-shadow':'rgb(255, 255, 255) 2px 2px 0px','width':'','padding-top':'9px'});
			$('#main_div>div:nth-of-type(1)>table>tbody>tr>td:nth-of-type(2)>div').html('<marquee loop=0 behavior=slide>晉歡淨水 Jin Huan Water</marquee>');
		});
	});
}
