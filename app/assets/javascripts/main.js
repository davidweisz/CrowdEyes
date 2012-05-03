/**
 * This script is intended to show a fixed header at the top of the page
 * and have a scrolling effect to the different parts of the page.
 *
 * Copyright: Juitt Inc.
 * Year: 2012
 *
 */

$(function(){
	$("a").mouseover(function(){
		$(this).stop();
		$(this).animate({top: "-2px", "padding-bottom": "2px"},100);
	});

	$("a").mouseout(function(){
		$(this).stop();
		$(this).animate({top: "0px", "padding-bottom": "0px"},100);
	});
	
	
	// This will make the part of the contact at the bottom larger to cover the screen.
	$("a.smoothSlideLink[href='#contact']").click(function(){
		$(".footer_style").height($(window).height() - $(".fixed_header").height());
	});

	$("a.smoothSlideLink").click(function(evt){
		evt.preventDefault();
		var tgtid = this.href.replace(/^.*\#/,"");
		var offset = window.omada_anchors[tgtid];
		$('html,body').animate({scrollTop: offset}, 1000, "swing");
	});

	$(window).scroll(function(){
		var currentOffset = $(window).scrollTop();
		var closest = $(".headerslide")[0].id;
		var dist = Math.abs($("#" + closest).offset().top - currentOffset);
		for (var i = 0; i < window.omada_anchor_list.length; ++i)
		{
			
			var newDist = Math.abs($("#" + window.omada_anchor_list[i]).offset().top - currentOffset);
			if (newDist < dist)
			{
				dist = newDist;
				closest = window.omada_anchor_list[i];
			}
		}
		if (closest != window.omada_anchor_last)
		{
			$("a.smoothSlideLink[href='#" + closest + "']").addClass("selected");
			$("a.smoothSlideLink[href='#" + window.omada_anchor_last + "']").removeClass("selected");
			window.omada_anchor_last = closest;
		}
	});

	// Scrolling effects functions
	window.omada_anchors = {};
	window.omada_anchor_list = [];
	window.omada_anchor_last = $(".headerslide")[0].id;
	$("a.smoothSlideLink[href='#" + window.omada_anchor_last + "']").addClass("selected");

	$("a.smoothSlideLink").each(function(){
		var tgtid = this.href.replace(/^.*\#/,"");
		var offset = $("#"+tgtid).offset().top - $(".floating_header").height();
		window.omada_anchors[tgtid] = offset;
		window.omada_anchor_list.push(tgtid);
	});
});