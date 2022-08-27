/*
You can use this file with your scripts.
It will not be overwritten when you upgrade solution.
*/


/* функции для работы с торговиками в виде селектов */
function addHtml(lastPropCode, arSKU, mode, type) {
    if (mode == "list") {   	
    	
    	 var selectedSkuId = BX(lastPropCode).value;

         
         
    	 //параметры по умочанию
    	 $('div[data-tovar='+arSKU[0]["ITEM_ID"]+'] .to-cart').show();
		 $('div[data-tovar='+arSKU[0]["ITEM_ID"]+'] .counter_block').show();
		 $('div[data-tovar='+arSKU[0]["ITEM_ID"]+'] .in-cart').hide();
		 $('div[data-tovar='+arSKU[0]["ITEM_ID"]+'] .button_block').removeClass('wide');
		 
		 
		 $('div[data-tovar='+arSKU[0]["ITEM_ID"]+'] .to-cart').attr('data-item', arSKU[0]["ITEM_ID"]);           
         $('div[data-tovar='+arSKU[0]["ITEM_ID"]+'] .to-cart').attr('data-offers', 'Y');
         $('div[data-tovar='+arSKU[0]["ITEM_ID"]+'] .to-cart').attr('data-bakset_div', 'bx_basket_div_'+arSKU[0]["ITEM_ID"]);
         $('div[data-tovar='+arSKU[0]["ITEM_ID"]+'] .counter_block').attr('data-item', arSKU[0]["ITEM_ID"]);
         $('div[data-tovar='+arSKU[0]["ITEM_ID"]+'] .in-cart').attr('data-item', arSKU[0]["ITEM_ID"]);
         
         $('div[data-tovar='+arSKU[0]["ITEM_ID"]+'] .wish_item_button span').attr('data-item', arSKU[0]["ITEM_ID"]); 
         $('div[data-tovar='+arSKU[0]["ITEM_ID"]+'] .compare_item_button span').attr('data-item', arSKU[0]["ITEM_ID"]); 
     	 $('div[data-tovar='+arSKU[0]["ITEM_ID"]+'] .wish_item.to').show();
		 $('div[data-tovar='+arSKU[0]["ITEM_ID"]+'] .wish_item.in').hide();
		 $('div[data-tovar='+arSKU[0]["ITEM_ID"]+'] .wish_item.to').removeClass('added');
		 $('div[data-tovar='+arSKU[0]["ITEM_ID"]+'] .compare_item.to').show();
		 $('div[data-tovar='+arSKU[0]["ITEM_ID"]+'] .compare_item.in').hide();
		 $('div[data-tovar='+arSKU[0]["ITEM_ID"]+'] .compare_item.to').removeClass('added');

         //
         for (var i = 0; i < arSKU.length; i++) {
        	 if (arSKU[i]["ID"] == selectedSkuId) {        		 
        	       		 
                 $('div[data-tovar='+arSKU[i]["ITEM_ID"]+'] .to-cart').attr('data-item', selectedSkuId);           
                 $('div[data-tovar='+arSKU[i]["ITEM_ID"]+'] .to-cart').attr('data-offers', 'Y');
                 $('div[data-tovar='+arSKU[i]["ITEM_ID"]+'] .to-cart').attr('data-bakset_div', 'bx_basket_div_'+selectedSkuId);
                 $('div[data-tovar='+arSKU[i]["ITEM_ID"]+'] .counter_block').attr('data-item', selectedSkuId);
                 $('div[data-tovar='+arSKU[i]["ITEM_ID"]+'] .in-cart').attr('data-item', selectedSkuId);
                 $('div[data-tovar='+arSKU[i]["ITEM_ID"]+'] span.hidden').attr('data-js-item-name', arSKU[i]["NAME"]); 
                 //лайки сравнение
                 $('div[data-tovar='+arSKU[i]["ITEM_ID"]+'] .wish_item_button span').attr('data-item', selectedSkuId); 
                 $('div[data-tovar='+arSKU[i]["ITEM_ID"]+'] .compare_item_button span').attr('data-item', selectedSkuId);
                 
                 
                 
                 
        		 
        	 }
        	
         
         }
    	
    	
    	
    	
       /* if (type == "clear_cart" || type == "clear_compare") {
            BX("listItemPrice").innerHTML = item_price;
            if (type == "clear_cart")
                BX("element_buy_button").innerHTML = '<a href="javascript:void(0)" rel="nofollow" class="bt3 incart" >' + BX.message('addToCart') + '</a>';
            else if (type == "clear_compare")
                BX("element_buy_button").innerHTML = '<a href="javascript:void(0)" rel="nofollow" class="bt3 incart">' + BX.message('addCompare') + '</a>';
            return;
        }
        var selectedSkuId = BX(lastPropCode).value;


        for (var i = 0; i < arSKU.length; i++) {
            if (arSKU[i]["ID"] == selectedSkuId) {
                var price_block = "";
                for (var price_code in arSKU[i]["PRICES"]) {
                    if (arSKU[i]["PRICES"][price_code]["TITLE"] != "")
                        price_block = price_block + "<p class='price_title'>" + arSKU[i]["PRICES"][price_code]["TITLE"] + "</p>";
                    if (arSKU[i]["PRICES"][price_code]["DISCOUNT_PRICE"] != "") {
                        price_block = price_block + "<div class='discount-price item_price'>" + arSKU[i]["PRICES"][price_code]["DISCOUNT_PRICE"] + "</div>" + "<div class='old-price item_old_price'>" + arSKU[i]["PRICES"][price_code]["PRICE"] + "</div>";
                    }
                    else {
                        price_block = price_block + "<div class='price'>" + arSKU[i]["PRICES"][price_code]["PRICE"] + "</div>";
                    }
                }
                BX("listItemPrice").innerHTML = price_block;

                if (type == "cart") {
                    if (arSKU[i]["CAN_BUY"]) {
                        if (arSKU[i]["CART"] == "")
                            BX("element_buy_button").innerHTML = '<a href="' + arSKU[i]["ADD_URL"] + '" rel="nofollow" class="bt3 addtoCart" onclick=" return addOfferToCart(this, \'list\', \'' + BX.message('inCart') + '\');" id="catalog_add2cart_link_' + arSKU[i]["ID"] + '"><span></span>' + BX.message('addToCart') + '</a>';
                        else
                            BX("element_buy_button").innerHTML = '<a rel="nofollow" class="bt3 addtoCart" onclick=" return addOfferToCart(this, \'list\', \'' + BX.message('inCart') + '\');" id="catalog_add2cart_link_' + arSKU[i]["ID"] + '"><span></span>' + BX.message('addToCart') + '</a>';
                        /*  else if (arSKU[i]["CART"] == "inCart")
                         BX("element_buy_button").innerHTML = '<a href="javascript:void(0)" rel="nofollow" class="bt3 incart"  id="catalog_add2cart_link_'+arSKU[i]["ID"]+'">'+BX.message('inCart')+'</a>';//.setAttribute("href",arSKU[i]["ADD_URL"]).innerHTML = '<span class="cartbuy"></span> ';
                         else if (arSKU[i]["CART"] == "delay")
                         BX("element_buy_button").innerHTML = '<a href="javascript:void(0)" rel="nofollow" class="bt3 incart"  id="catalog_add2cart_link_'+arSKU[i]["ID"]+'">'+BX.message('delayCart')+'</a>';*/
                   /* }
                    else {
                        if (arSKU[i]["CART"] == "inSubscribe")
                            BX("element_buy_button").innerHTML = '<a href="javascript:void(0)" rel="nofollow" class="bt3 incart">' + BX.message('inSubscribe') + '</a>';
                        else if (BX.message["USER_ID"] > 0 && arSKU[i]["SUBSCRIBE_URL"] != "")
                            BX("element_buy_button").innerHTML = '<a href="' + arSKU[i]["SUBSCRIBE_URL"] + '" rel="nofollow" class="bt3" onclick="return addOfferToSubscribe(this, \'' + BX.message('inSubscribe') + '\', \'list\');" id="catalog_add2cart_link_"' + arSKU[i]["ID"] + '">' + BX.message('subscribe') + '</a>';
                        else
                            BX("element_buy_button").innerHTML = '<a href="javascript:void(0)" rel="nofollow" class="bt3" onclick="showAuthForSubscribe(this, \'' + arSKU[i]["ID"] + '\', \'' + arSKU[i]["SUBSCRIBE_URL"] + '\')">' + BX.message('subscribe') + '</a>';
                    }
                }
                else if (type == "compare" && BX("element_buy_button")) {
                    if (arSKU[i]["COMPARE"] == "inCompare")
                        BX("element_buy_button").innerHTML = '<a href="javascript:void(0)" rel="nofollow" class="bt3">' + BX.message('inCompare') + '</a>';
                    else
                        BX("element_buy_button").innerHTML = '<a href="' + arSKU[i]["COMPARE_URL"] + '" rel="nofollow" class="bt3 addtoCompare" onclick="return addOfferToCompare(this, \'list\', \'' + BX.message('inCompare') + '\');" id="catalog_add2compare_link_' + arSKU[i]["ID"] + '">' + BX.message('addCompare') + '</a>';

                }
                break;
            }
        }*/
    }
    else if (mode == "detail") {
    	
    	
    	$(document).on('click', '.compare_item', function(e){
    	//	e.preventDefault();
    		var item = $(this).attr('data-item');
    		for (var i = 0; i < arSKU.length; i++) {
    			if (arSKU[i]["ID"] == item) {
    				if($(this).hasClass('added')){    					
    					arSKU[i]["COMPARE"] = 'inCompare';
    					
    				}
    				else{    					
    					arSKU[i]["COMPARE"] = '';
    				}
    				
    			}    			
    			
    		}
    	})   	  
    	
    	$(document).on('click', '.wish_item', function(e){
    		//e.preventDefault();
    		var item = $(this).attr('data-item')
        	for (var i = 0; i < arSKU.length; i++) {
        		if (arSKU[i]["ID"] == item) {
        			arSKU[i]["CART"] = 'delay';
        		}
        	}
    	})   	
    	
    	
    	/*$(document).on( 'click', '.to-cart_custom:not(.read_more)', function(e){
    	//e.preventDefault();
    	var item = $(this).attr('data-item')
    	for (var i = 0; i < arSKU.length; i++) {
    		if (arSKU[i]["ID"] == item) {
    			arSKU[i]["CART"] = 'inCart';
    		}
    	}    	
    	})*/
    	  	
    
        var selectedSkuId = BX(lastPropCode).value;  
        var id_item = $('.catalog_detail .buy_block').attr('data-tovar');
        
        $('.catalog_detail .to-cart').show();
		$('.catalog_detail .counter_block_inner').show();
		$('.catalog_detail .in-cart').hide();
		$('.catalog_detail .button_block').removeClass('wide');
		//сравнения и лайки
		$('.catalog_detail .like_icons .wish_item .value').show();
		$('.catalog_detail .like_icons .wish_item .value.added').hide();
		$('.catalog_detail .like_icons .wish_item').removeClass('added');
		$('.catalog_detail .like_icons .compare_item .value').show();
		$('.catalog_detail .like_icons .compare_item .value.added').hide();
		$('.catalog_detail .like_icons .compare_item').removeClass('added');
     

        if(selectedSkuId!='null'){
           //console.log(selectedSkuId);
            for (var i = 0; i < arSKU.length; i++) {

                if (arSKU[i]["ID"] == selectedSkuId) {
                    //console.log(arSKU[i]);
                    var name = $('.catalog_detail span.hidden').attr('data-js-item-name');
                 
                    if(typeof name != 'undefined') 
                        $('.catalog_detail span.hidden').attr('data-js-item-name', arSKU[i]["NAME"]+'<br />'+name);
                    else
                        $('.catalog_detail span.hidden').attr('data-js-item-name', arSKU[i]["NAME"]);    
                        
                        
                }
            }
            $('.catalog_detail .to-cart').attr('data-item', selectedSkuId);           
            $('.catalog_detail .to-cart').attr('data-offers', 'Y');
            $('.catalog_detail .to-cart').attr('data-bakset_div', 'bx_basket_div_'+selectedSkuId);
            $('.catalog_detail .counter_block').attr('data-item', selectedSkuId);
            $('.catalog_detail .in-cart').attr('data-item', selectedSkuId); 
            
            //сравнение и лайки
            $('.catalog_detail .like_icons .wish_item').attr('data-item', selectedSkuId); 
            $('.catalog_detail .like_icons .compare_item').attr('data-item', selectedSkuId);            


        }
        else{         
            $('.catalog_detail .to-cart').attr('data-item', id_item);           
            $('.catalog_detail .to-cart').attr('data-offers', 'Y');
            $('.catalog_detail .to-cart').attr('data-bakset_div', 'bx_basket_div_'+id_item);
            $('.catalog_detail .counter_block').attr('data-item', id_item);
            $('.catalog_detail .in-cart').attr('data-item', id_item);
            $('.catalog_detail .like_icons .wish_item').attr('data-item', id_item); 
            $('.catalog_detail .like_icons .compare_item').attr('data-item', id_item); 

        }       
        
        for (var i = 0; i < arSKU.length; i++) {
            if (arSKU[i]["ID"] == selectedSkuId) {                        	
            	 if (arSKU[i]["CAN_BUY"]) {            		 
            		 if (arSKU[i]["CART"] == "") {
            			 	$('.catalog_detail .to-cart').show();
            				$('.catalog_detail .counter_block_inner').show();
            				$('.catalog_detail .in-cart').hide();
            				$('.catalog_detail .button_block').removeClass('wide');
            			 
            		 }            		 
            		/* else if (arSKU[i]["CART"] == "inCart"){
        				$('.catalog_detail .to-cart').hide();
         				$('.catalog_detail .counter_block_inner').hide();
         				$('.catalog_detail .in-cart').show();
         				$('.catalog_detail .button_block').addClass('wide');
         				
         				$('.catalog_detail .catalog_detail .like_icons .wish_item .value').show();
         				$('.catalog_detail .catalog_detail .like_icons .wish_item .value.added').hide();
         				$('.catalog_detail .catalog_detail .like_icons .wish_item').removeClass('added');
         			
            		 }
            		 else if (arSKU[i]["CART"] == "delay"){
            			$('.catalog_detail .to-cart').show();
         				$('.catalog_detail .counter_block_inner').show();
         				$('.catalog_detail .in-cart').hide();
         				$('.catalog_detail .button_block').removeClass('wide');
         				
         				$('.catalog_detail .like_icons .wish_item .value').hide();
         				$('.catalog_detail .like_icons .wish_item .value.added').show();
         				$('.catalog_detail .like_icons .wish_item').addClass('added');
         				
            		 }  */          		 
            	 }
            	 
            	 if (arSKU[i]["COMPARE"] == "inCompare"){
            		 
            		$('.catalog_detail .like_icons .compare_item .value').hide();
            		$('.catalog_detail .like_icons .compare_item .value.added').show();
            		$('.catalog_detail .like_icons .compare_item').addClass('added');
            		 
            	 }
            	 else{
            		$('.catalog_detail .like_icons .compare_item .value').show();
         			$('.catalog_detail .like_icons .compare_item .value.added').hide();
         			$('.catalog_detail .like_icons .compare_item').removeClass('added');
            		 
            	 }            	
            }
        }
      
    }
}

function checkSKU(form_name, SKU, prop_num, arProperties, cont_name) {
    for (var i = 0; i < prop_num; i++) {

        if (SKU[i] != document.forms[form_name][cont_name+'_'+arProperties[i].CODE].value)

            return false;
    }
    return true;
}


function checkSKUPopup(form_name, SKU, prop_num, arProperties, cont_name) {    
    for (var i = 0; i < prop_num - 1; i++) {
        if (document.forms[form_name][arProperties[i].CODE]) {
            if (SKU[i] != document.forms[form_name][arProperties[i].CODE].value)
                return false;
        }
    }
    return true;
}


function buildSelect(form_name, cont_name, prop_num, arSKU, arProperties, mode, type) {
	

	

    var properties_num = arProperties.length;
    var lastPropCode = cont_name+'_'+arProperties[properties_num - 1].CODE;
    var addclass = "";
    if(mode=="detail"){
        addclass="col-md-6 col-sm-6 col-xs-6";
    }
  

    for (var i = prop_num; i < properties_num; i++) {

        //var q = BX('prop_' + i);
        var q = $('#'+cont_name+' #prop_' + i)[0];
      
        if (q)
           {
                q.parentNode.removeChild(q);
           }
          

    }
    var cn = '';  
    if(arProperties[prop_num]){
        var select = BX.create('SELECT', {
            props: {
                name: cont_name+'_'+arProperties[prop_num].CODE,
                id: cont_name+'_'+arProperties[prop_num].CODE
            },
        }); 
    

    $(select).bind('change', (prop_num < properties_num - 1)
            ? function () {    	 
 
            buildSelect(form_name, cont_name, prop_num + 1, arSKU, arProperties, mode, type);
            if (this.value != "null") {
            	//console.log(prop_num + 1);
                BX(cont_name+'_'+arProperties[prop_num + 1].CODE).disabled = false;

                var r = BX(cont_name+'_'+arProperties[prop_num + 1].CODE);
               
                var l = $(r).find('option').length;
                if (l == 2) {
                    $(r).find('option').each(function () {                 

                     if ($(this).val() != 'null') {
                        $(this).attr('selected', true);    
                        $(this).parent().val($(this).val());
                        $(this).parent().trigger('change');
                        if (properties_num > 2) {
                            buildSelect(form_name, cont_name, prop_num + 1, arSKU, arProperties, mode, type);                          
                            BX(cont_name+'_'+arProperties[prop_num + 1].CODE).disabled = false;
                        }
                                                
                    }

                        
                    })
                }
            }
            var selectedSkuId = BX(lastPropCode).value;
            addHtml(lastPropCode, arSKU, mode, "clear_" + type);
            addHtml(lastPropCode, arSKU, mode, type);
         
            $('#'+cont_name+ ' input[type=hidden]').val(selectedSkuId);
            /*$('#sku_selector select').selectric({
                maxHeight: 200,
                disableOnMobile: false
            });*/           
         
          initSelects(document);
  

        }
            : function () {
            var selectedSkuId = BX(lastPropCode).value;

            $.ajax({
              type: "POST",
              url: arAsproOptions["SITE_DIR"] + "ajax/getDateDel.php",
              data: {'id':selectedSkuId},
              dataType: "html",
              success: function (data) {
                $("#date-del").text(data);
              }
            });

            if (this.value != "null") {
                addHtml(lastPropCode, arSKU, mode, type);
                cn = this.value;
            }
            else {
                addHtml(lastPropCode, arSKU, mode, "clear_" + type);
            }

           
            $('#'+cont_name+ ' input[type=hidden]').val(selectedSkuId);
            //addLabelSelect(cont_name);


        }
    );
    if (prop_num != 0) select.disabled = true;

    var ar = [];


    for (var i = 0; i < arSKU.length; i++) {

        if (checkSKU(form_name, arSKU[i], prop_num, arProperties, cont_name) && !BX.util.in_array(arSKU[i][prop_num], ar) && arSKU[i][prop_num]!='Не задано') {


            select.add(new Option(
                arSKU[i][prop_num],     //text
                prop_num < properties_num - 1 ? arSKU[i][prop_num] : arSKU[i]["ID"]// value

            ));
            ar.push(arSKU[i][prop_num]);
        }
    }



    var cont = BX.create('div', {
        props: {id: 'prop_' + prop_num, title: arProperties[prop_num].NAME, className: 'item-option '+addclass+''},
        children: [
            BX.create('span', {html: arProperties[prop_num].NAME + ': '}), select
            /* BX.create('li', { children:[
             select
             ]}),*/
        ]
    });


    var tmp = BX.findChild(BX(cont_name), {tagName: 'div'}, false, false);
    tmp.appendChild(cont);


    if (prop_num < properties_num - 1) {

        buildSelect(form_name, cont_name, prop_num + 1, arSKU, arProperties, mode, type);
    }
    if ($('#'+cont_name+' #prop_' + prop_num + ' select').lenght == 1) {

        buildSelect(form_name, cont_name, prop_num + 1, arSKU, arProperties, mode, type);
    }

    
    upd4(prop_num, cn, cont_name);
    
    }
}



function buildSelectPopup(form_name, cont_name, prop_num, arSKU, arProperties, mode, type) {
    var properties_num = arProperties.length;
    var lastPropCode = cont_name+'_'+arProperties[properties_num - 1].CODE;
  

    for (var i = prop_num; i < properties_num; i++) {

        //var q = BX('prop_' + i);
        var q = $('#'+cont_name+' #proprezerv_' + i)[0];
      
        if (q)
           {
                q.parentNode.removeChild(q);
           }
          

    }
    var cn = '';

    var select = BX.create('SELECT', {
        props: {
            name: 'form_text_' + rose[prop_num].IDD,
            id: cont_name+'_'+arProperties[prop_num].CODE
        },
    });
    $(select).bind('change', (prop_num < properties_num - 1)
            ? function () {
            //setTimeout(function() {  $('select').trigger('refresh'); }, 1)
              buildSelectPopup(form_name, cont_name, prop_num + 1, arSKU, arProperties, mode, type);
            if (this.value != "null") {
                BX(cont_name+'_'+arProperties[prop_num + 1].CODE).disabled = false;

                var r = BX(cont_name+'_'+arProperties[prop_num + 1].CODE);
                var l = $(r).find('option').length;
                if (l == 2) {
                    $(r).find('option').each(function () {                    
                    if ($(this).val() != 'null') {
                        $(this).attr('selected', true);
                        if (properties_num > 2) {
                            buildSelectPopup(form_name, cont_name, prop_num + 2, arSKU, arProperties, mode, type);
                            BX(cont_name+'_'+arProperties[prop_num + 2].CODE).disabled = false;
                        }
                    }
                    })
                }
            }
            var selectedSkuId = BX(lastPropCode).value;
            //addHtml(lastPropCode, arSKU, mode, "clear_" + type);
            //addHtml(lastPropCode, arSKU, mode, type);
         
            $('#'+cont_name+ ' input[type=hidden]').val(selectedSkuId);           

            $('#skudiv_modul select').selectric({
                maxHeight: 200,
                disableOnMobile: false
            });
            
        }
            : function () {
            var selectedSkuId = BX(lastPropCode).value;
            if (this.value != "null") {
                //addHtml(lastPropCode, arSKU, mode, type);
                cn = this.value;
            }
            else {
                //addHtml(lastPropCode, arSKU, mode, "clear_" + type);
            }


        }
    );
    if (prop_num != 0) select.disabled = true;

    var ar = [];


    for (var i = 0; i < arSKU.length; i++) {

        if (checkSKUPopup('REZERV', arSKU[i], prop_num, arProperties, cont_name) && !BX.util.in_array(arSKU[i][prop_num], ar) && arSKU[i][prop_num]!='Не задано') {


            select.add(new Option(
                arSKU[i][prop_num],     //text
                arProperties[prop_num].NAME + ': ' + arSKU[i][prop_num]// value

            ));
            ar.push(arSKU[i][prop_num]);
        }
    }


    var cont = BX.create('div', {
        props: {id: 'proprezerv_' + prop_num, title: arProperties[prop_num].NAME, className: 'item-option'},
        children: [
            BX.create('span', {html: arProperties[prop_num].NAME + ': '}), select
            /* BX.create('li', { children:[
             select
             ]}),*/
        ]
    });


    var tmp = BX.findChild(BX(cont_name), {tagName: 'div'}, false, false);
    tmp.appendChild(cont);


    if (prop_num < properties_num - 1) {

        buildSelectPopup(form_name, cont_name, prop_num + 1, arSKU, arProperties, mode, type);
    }
    

    updPopup(prop_num, cn, cont_name);
    

}

function upd4(pr,cn, cont_name) {
    $('#'+cont_name+' #prop_'+pr+' select').each( function(){

        var option_count = $(this).find('option').length;
        $(this).find('option').each(function(){
            $(this).text($(this).text().replace(',','.'));
        });

        $(this).html($(this).find('option').sort(function(a, b) {
            return parseFloat(a.text) == parseFloat(b.text) ? 0 : parseFloat(a.text) > parseFloat(b.text) ? -1 : 1
        }) );
        var p =0;var m=0;var n=0;

        
        $(this).find('option').each(function(){
            if(parseFloat($(this).val().replace(',','.'))>0){n=1;} else {n=0;}
            if(parseFloat($(this).val().replace(',','.'))==0 && option_count>1){

                $(this).parent().find(':selected').removeAttr('selected');
                $(this).after('<option selected="selected" value="null">Выбрать</option>'); p=1;
                if(parseFloat($(this).val().replace(',','.'))<0){m=1;} else {m=0;}
            }
            if(p==0 &&(m==n) && option_count>1) {
                $(this).parent().find(':selected').removeAttr('selected');
                $(this).before('<option selected value="null">Выбрать</option>');p=1;
            }
        });
        if( p==0){
            $(this).append('<option selected value="null">Выбрать</option>');
        }

        var low,med,high,ch;
        if($(this).attr('id')=='add') {
            $(this).find('option').each(function(){
            if($(this).text() == 'Выбрать') {
                    ch = $(this).attr('selected',true);
                }
                if($(this).text() == 'LOW') {
                    low = $(this);
                }
                if($(this).text() == 'MED') {
                    med = $(this);
                }
                if($(this).text() == 'HIGH') {
                    high = $(this);
                }
                
            });
    
        $(this).empty().append(ch,low,med,high).find('option:first').attr('selected',true);
        }
        if($(this).attr('id')=='color') {
            $(this).find('option').each(function(){
            if($(this).text() == 'Выбрать') {
                    $(this).attr('selected',true);
                } else {
                    $(this).attr('selected',false);
                }
                
                
            });
        
        }
    })
    
    
}


function updPopup(pr,cn, cont_name) {

    $('#'+cont_name+' #proprezerv_'+pr+' select').each( function(){
    $(this).find('option').each(function(){
    $(this).text($(this).text().replace(',','.'));
    });
    $(this).html($(this).find('option').sort(function(a, b) {
    return parseFloat(a.text) == parseFloat(b.text) ? 0 : parseFloat(a.text) > parseFloat(b.text) ? -1 : 1
    }) );
    var p =0;var m=0;var n=0;
    $(this).find('option').each(function(){
    if(parseFloat($(this).text().replace(',','.'))>0){n=1;} else {n=0;}
    if(parseFloat($(this).text().replace(',','.'))==0){
    $(this).parent().find(':selected').removeAttr('selected');
    $(this).after('<option selected="selected" value="null">Выбрать</option>');  p=1;
    if(parseFloat($(this).text().replace(',','.'))<0){m=1;} else {m=0;}
    }
    if(p==0 &&(m==n)) {
    $(this).parent().find(':selected').removeAttr('selected');
    $(this).before('<option selected value="null">Выбрать</option>');p=1;
    }
    });
    if(p==0){
    $(this).append('<option selected value="null">Выбрать</option>');
    }
    var low,med,high,ch;
    if($(this).attr('id')=='add') {
        $(this).find('option').each(function(){
        if($(this).text() == 'Выбрать') {
                ch = $(this).attr('selected',true);
            }
            if($(this).text() == 'LOW') {
                 low = $(this);
            }
            if($(this).text() == 'MED') {
                 med = $(this);
            }
            if($(this).text() == 'HIGH') {
                 high = $(this);
            }
            
        });
    $(this).empty().append(ch,low,med,high).find('option:first').attr('selected',true);
    }
    if($(this).attr('id')=='color') {
        $(this).find('option').each(function(){
        if($(this).text() == 'Выбрать') {
                 $(this).attr('selected',true);
            } else {
                $(this).attr('selected',false);
            }
             
            
        });
     
    }
    })
}
/* */

$(document).on("click", ".to-cart_custom:not(.read_more), .basket_item_add", function (e) {
    e.preventDefault();
    var th = $(this);
    if (!th.hasClass("clicked")) {
      th.addClass("clicked");
      var val = $(this).attr("data-quantity");
      var tmp_props = $(this).data("props"),
        props = "",
        part_props = "",
        add_props = "N",
        fill_prop = {},
        iblockid = $(this).data("iblockid"),
        offer = $(this).data("offers"),
        rid = "",
        bBannerAction = false,
        basket_props = "",
        item = $(this).attr("data-item");
      if (th.closest(".but-cell").length) {
        if ($('.counter_block[data-item="' + item + '"]').length)
          val = $('.counter_block[data-item="' + item + '"] input').val();
      }

      if (th.closest(".banner_buttons.with_actions").length) {
        //banner action
        var wrapper_btns = th.closest(".wraps_buttons");
        item = wrapper_btns.data("id");
        bBannerAction = true;
      }

      if (!val) val = 1;
      if (offer != "Y") {
        offer = "N";
      } else {
        basket_props = $(this).closest(".prices_tab").find(".bx_sku_props input").val();
      }
      if (tmp_props) {
        props = tmp_props.split(";");
      }
      if ($(this).data("part_props")) {
        part_props = $(this).data("part_props");
      }
      if ($(this).data("add_props")) {
        add_props = $(this).data("add_props");
      }
      if ($(".rid_item").length) {
        rid = $(".rid_item").data("rid");
      } else if ($(this).data("rid")) {
        rid = $(this).data("rid");
      }

     
      fill_prop = fillBasketPropsExt(th, "prop", th.data("bakset_div"));

      fill_prop.quantity = val;
     // fill_prop.add_item = "Y";
      fill_prop.rid = rid;
      fill_prop.offers = offer;
      fill_prop.iblockID = iblockid;
      fill_prop.part_props = part_props;
      fill_prop.add_props = add_props;
      fill_prop.props = JSON.stringify(props);
      fill_prop.item = item;
      fill_prop.basket_props = basket_props;

      fill_prop["items"] = {};
      $("form[name=sku] input[type=hidden]").each(function (index) {
        var _this = $(this);
        var itemId =_this.val();
        console.log(itemId);
       // var i = 1;
        if(itemId!=""){ 
            fill_prop["items"][index] = {};
            fill_prop["items"][index]["id"] = itemId;
            //basketParams["items"][itemId]["product_type"] = _this.data("product_type");
            fill_prop["items"][index]["quantity"] = 1;
            //i=i+1;
            //console.log(i);
        }
      });

      if(Object.keys(fill_prop["items"]).length===0){
        fill_prop.add_item = "Y";
      }
      else{
        fill_prop["type"] = "multiple";
        fill_prop["action"] = "buy";
      }



      console.log(fill_prop);

      

      var isDetail = th.closest(".product-action").length || th.closest("#headerfixed.with-product");
      var isSku2 = th.closest(".list-offers").length;
      var bIsService = th.closest(".buy_services_wrap").length;

      /*if (!bIsService && (isDetail || isSku2)) {
        var allServicesOn = [];
        if (isSku2) {
          allServicesOn = th
            .closest(".product-container")
            .find('.buy_services_wrap .services-item [name="buy_switch_services"]:checked');
        } else {
          allServicesOn = $(".product-container").find(
            '.buy_services_wrap[data-parent_product="' + item + '"] .services-item [name="buy_switch_services"]:checked'
          );
        }
        var servicesNeedAdd = [];
        allServicesOn.each(function () {
          var _this = $(this);
          var buttonCart = _this.closest(".services-item").find(".to-cart");
          servicesNeedAdd[buttonCart.data("item")] = {};
          servicesNeedAdd[buttonCart.data("item")]["id"] = buttonCart.data("item");
          servicesNeedAdd[buttonCart.data("item")]["quantity"] = buttonCart.attr("data-quantity");
          servicesNeedAdd[buttonCart.data("item")]["iblock_id"] = buttonCart.data("iblockid");
        });
        servicesNeedAdd = array_values_js(servicesNeedAdd);
        fill_prop.services = servicesNeedAdd;
      }*/

      /*var servicesWrap = $(this).closest(".buy_services_wrap");
      if (bIsService) {
        var parent_product = servicesWrap.attr("data-parent_product");
        fill_prop["prop[BUY_PRODUCT_PROP]"] = parent_product;
        fill_prop["prop[ASPRO_BUY_PRODUCT_ID]"] = parent_product;
      }*/

      /*if (bBannerAction) {
        if (th.hasClass("added")) {
          location.href = th.data("href");
          return false;
        } else {
          th.attr("title", th.data("title2"));
          th.toggleClass("added");
        }

        if (wrapper_btns.find(".wish_item_add").length) wrapper_btns.find(".wish_item_add").removeClass("added");
      }*/

      if (th.data("empty_props") == "N" /* && fill_prop.part_props != 'Y'*/) {
        var basket_popup_html = $("#" + th.data("bakset_div")).html();
        if (!basket_popup_html && th.closest(".item").find(".basket_props_block").length)
          basket_popup_html = th.closest(".item").find(".basket_props_block").html();

        showBasketError(basket_popup_html, BX.message("ERROR_BASKET_PROP_TITLE"), "Y", th);
        BX.addCustomEvent("onCompleteAction", function (e) {
          if (!e.ignoreSelf) {
            var eventdata = { action: "loadForm", ignoreSelf: true };
            BX.onCustomEvent("onCompleteAction", [eventdata, th[0]]);
          }
        });
      } else {
        $.ajax({
          type: "POST",
          url: arAsproOptions["SITE_DIR"] + "ajax/item.php",
          data: fill_prop,
          dataType: "json",
          success: function (data) {
            getActualBasket(fill_prop.iblockID);

            var eventdata = { action: "loadForm" };
            BX.onCustomEvent("onCompleteAction", [eventdata, th[0]]);
            arStatusBasketAspro = {};

            if (data !== null) {
              if ("STATUS" in data) {
                if (data.MESSAGE_EXT === null) data.MESSAGE_EXT = "";
                if (data.STATUS === "OK") {
                  // th.hide();
                  $(".to-cart[data-item=" + item + "]").hide();
                  $(".to-cart[data-item=" + item + "]")
                    .closest(".counter_wrapp")
                    .find(".counter_block_inner")
                    .hide();
                  $(".to-cart[data-item=" + item + "]")
                    .closest(".counter_wrapp")
                    .find(".counter_block")
                    .hide();
                  $(".to-cart[data-item=" + item + "]")
                    .parents("tr")
                    .find(".counter_block_wr .counter_block")
                    .hide();
                  $(".to-cart[data-item=" + item + "]")
                    .closest(".button_block")
                    .addClass("wide");
                  // th.parent().find('.in-cart').show();
                  $(".in-cart[data-item=" + item + "]").show();

                  addBasketCounter(item);
                  //$('.wish_item[data-item='+item+']').removeClass("added");
                  $(".wish_item[data-item=" + item + "]")
                    .find(".value")
                    .show();
                  $(".wish_item[data-item=" + item + "]")
                    .find(".value.added")
                    .hide();
                  $(".wish_item.to[data-item=" + item + "]").show();
                  $(".wish_item.in[data-item=" + item + "]").hide();

                  //js notice
                  $bDontOpenBasket = false;
                  if (typeof JNoticeSurface !== "undefined") {
                    JNoticeSurface.get().onAdd2cart([th[0]]);
                    $bDontOpenBasket = true;
                  }
                  //

                  if ($("#ajax_basket").length) reloadTopBasket("add", $("#ajax_basket"), 200, 5000, "Y");

                  if ($("#basket_line .basket_fly").length) {
                    if (th.closest(".services_in_basket").length && !window.matchMedia("(max-width: 767px)").matches) {
                      basketFly("open", "SHOW"); //need for buy services in basket_fly
                    } else if (
                      th.closest(".fast_view_frame").length ||
                      window.matchMedia("(max-width: 767px)").matches ||
                      $("#basket_line .basket_fly.loaded").length
                    )
                      basketFly("open", "N");
                    else {
                      if ($bDontOpenBasket) basketFly("open", "N");
                      else basketFly("open");
                    }
                  }

                  //need for services on basket_page
                  if (th.closest(".services_in_basket_page").length) {
                    BX.Sale.BasketComponent.sendRequest("refreshAjax", {
                      fullRecalculation: "Y",
                      otherParams: {
                        param: "N",
                      },
                    });
                  }

                  if ($(".top_basket").length) {
                    basketTop($bDontOpenBasket ? "" : "open", $(".top_basket").find(".basket_hover_block"));
                  }

                  if (
                    $("#headerfixed .wproducts .ajax_load .btn").length &&
                    th.closest(".product-action").length &&
                    th.next(".in-cart").length
                  ) {
                    var buttonHtml =
                      //'<span class="buy_block"><span class="btn btn-default btn-sm slide_offer more type_block">' +
                      '<span class="buy_block"><span class="btn btn-default btn-sm more type_block">' +
                      th.next(".in-cart").html() +
                      "</span></span>";
                    $("#headerfixed .wproducts .ajax_load .item-buttons .but-cell").html(buttonHtml);
                  }
                } else {
                  showBasketError(BX.message(data.MESSAGE) + " <br/>" + data.MESSAGE_EXT);
                }
              } else {
                showBasketError(BX.message("CATALOG_PARTIAL_BASKET_PROPERTIES_ERROR"));
              }
            } else {
              // th.hide();
              $(".to-cart[data-item=" + item + "]").hide();
              $(".to-cart[data-item=" + item + "]")
                .closest(".counter_wrapp")
                .find(".counter_block_inner")
                .hide();
              $(".to-cart[data-item=" + item + "]")
                .closest(".counter_wrapp")
                .find(".counter_block")
                .hide();
              $(".to-cart[data-item=" + item + "]")
                .parents("tr")
                .find(".counter_block_wr .counter_block")
                .hide();
              $(".to-cart[data-item=" + item + "]")
                .closest(".button_block")
                .addClass("wide");
              // th.parent().find('.in-cart').show();
              $(".in-cart[data-item=" + item + "]").show();

              addBasketCounter(item);
              //$('.wish_item[data-item='+item+']').removeClass("added");
              $(".wish_item[data-item=" + item + "]")
                .find(".value")
                .show();
              $(".wish_item[data-item=" + item + "]")
                .find(".value.added")
                .hide();

              if ($("#ajax_basket").length) reloadTopBasket("add", $("#ajax_basket"), 200, 5000, "Y");

              if ($("#basket_line .basket_fly").length) {
                if (
                  th.closest(".fast_view_frame").length ||
                  window.matchMedia("(max-width: 767px)").matches ||
                  $("#basket_line .basket_fly.loaded").length
                )
                  basketFly("open", "N");
                else basketFly("open");
              }
            }
          },
        });
      }
    }
  });