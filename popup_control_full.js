//please contact me giaiphapthuonghieu.org@gmail.com
//website http://giaiphapthuonghieu.vn or http://faceseo.vn

(function($) {
    $.fn.linhnguyen = function(options) {        
        var defaults = {  
	    	animation: 'fadeAndPop', //fade, fadeAndPop, none
		    animationspeed: 300, //how fast animtions are
		    closeonbackgroundclick: true, //if you click background will modal close?
		    dismissmodalclass: 'close-linhnguyen-modal' //the class of a button or element that will close an open modal
    	}; 

        var options = $.extend({}, defaults, options); 
	
        return this.each(function() {
        	var modal = $(this),
        		topMeasure  = parseInt(modal.css('top')),
				topOffset = modal.height() + topMeasure,
          		locked = false,
				modalBG = $('.linhnguyen-modal-bg');

			if(modalBG.length == 0) {
				modalBG = $('<div class="linhnguyen-modal-bg" />').insertAfter(modal);
			}		    
			modal.bind('linhnguyen:open', function () {
			  modalBG.unbind('click.modalEvent');
				$('.' + options.dismissmodalclass).unbind('click.modalEvent');
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modal.css({'top': $(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"top": $(document).scrollTop()+topMeasure + 'px',
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					}
					if(options.animation == "fade") {
						modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': $(document).scrollTop()+topMeasure});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					} 
					if(options.animation == "none") {
						modal.css({'visibility' : 'visible', 'top':$(document).scrollTop()+topMeasure});
						modalBG.css({"display":"block"});	
						unlockModal()				
					}
				}
				modal.unbind('linhnguyen:open');
			}); 	

			modal.bind('linhnguyen:close', function () {
			  if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"top":  $(document).scrollTop()-topOffset + 'px',
							"opacity" : 0
						}, options.animationspeed/2, function() {
							modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
							unlockModal();
						});					
					}  	
					if(options.animation == "fade") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"opacity" : 0
						}, options.animationspeed, function() {
							modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
							unlockModal();
						});					
					}  	
					if(options.animation == "none") {
						modal.css({'visibility' : 'hidden', 'top' : topMeasure});
						modalBG.css({'display' : 'none'});	
					}		
				}
				modal.unbind('linhnguyen:close');
			});     
   	
    	modal.trigger('linhnguyen:open')
			
			//Close Modal Listeners
			var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
			  modal.trigger('linhnguyen:close')
			});
			
			if(options.closeonbackgroundclick) {
				modalBG.css({"cursor":"pointer"})
				modalBG.bind('click.modalEvent', function () {
				  modal.trigger('linhnguyen:close')
				});
			}
			$('body').keyup(function(e) {
        		if(e.which===27){ modal.trigger('linhnguyen:close'); } // 27 is the keycode for the Escape key
			});
			
			function unlockModal() { 
				locked = false;
			}
			function lockModal() {
				locked = true;
			}	
			
        });//each call
    }//orbit plugin call
})(jQuery);
        
$(window).load(function() {
		if(document.cookie.indexOf("adf") == -1)
		{
			document.cookie = "adfpopunder1=adf";
			var divpopup = document.createElement("div");
			$(divpopup).attr('id', 'myModal');
			$(divpopup).attr('class', 'linhnguyen-modal');
			$( "body" ).append(divpopup);
			$("#myModal").html("<a href='https://chukyso.online/' target='_blank'><img src='https://lh3.googleusercontent.com/O6EraCS8coigkDFdoyiTwMfyeDIQWS6FIWMVTtHeTTUCV4SIC2HoybVgBDissmNYSlHBVtkOTNkygDly25lx4Zt2Zv6gi54DKnTX4Y2prDiBCZwL8hFWXv5JEO18ct2vRuYRRGkIVoeKIRE8amDdZ5PwDEF3c8qsnKyZJbj5dJwTxd5dpeKL9Z8KGXLW_oTrP20qCcuODvKkBgX1Lnm9Zyzsp385U7ofh3rN59mgAMviw-iHGQlY-g1UsbgMEE-4SaNMMHDaLwGK5VrEtvXuNn2XBu0S5ntMaMQu7cXDSWPhfxLmLnrpeeEp5BCHrq4DqIfo8S4mqgwky8emd9hPcJeo37178ZXg8ZVAHmtKRBDEUnutKx1kS8qvykxDvwRx09qnVbbcyOhm3-h5xaycXhY--Nv4uVa-bYOQyA7k8lNOcGwHpENowBmjBc99lT6sVSrFSrKH01035kTihBl-5cF-QRygFUP2AQnjHevD-PwQAp087TOalFX2v-8DpPxcPxVn3OuYFdRYYGiJBoJZAq_Qbk496YLFdWy_izo1cQ3cBbvs3qlab4zHYve4tT6BmTB3JE_205RTVEfNzltqZkN-edKjlA=w1210-h400-no' width='500px'/>ĐĂNG KÝ CHỮ KÝ SỐ VIETTEL</a>. CHỮ KÝ SỐ VIETTEL GIÁ RẺ <h2><a class='close-linhnguyen-modal'>X</a></h2>");
			$('#myModal').linhnguyen($('#myModal').data());
		}
});
