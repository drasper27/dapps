/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
2. Init Menu
3. Init Parallax


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var ctrl = new ScrollMagic.Controller();
	var header = $('.header');
	var menuActive = false;
	var menu2Active = false;
	var hamb = $('.hamburger_container');
	var menu = $('.fs_menu_container');
	var hamb2 = $('.logo');
	var menu2 = $('.fs_menu_containern');
	var hambIcon = $('.hamburger_icon');

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initParallax();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if(window.innerWidth < 992)
		{
			if($(window).scrollTop() > 100)
			{
				header.css({'height':"80"});
			}
			else
			{
				header.css({'height':"110"});
			}
		}
		else
		{
			if($(window).scrollTop() > 100)
			{
				header.css({'height':"80"});
			}
			else
			{
				header.css({'height':"110"});
			}
		}
		if(window.innerWidth > 991 && menuActive)
		{
			closeMenu();
		}
		if(window.innerWidth > 991 && menu2Active)
		{
			closeMenu2();
		}
	}

	/* 

	2. Init Menu

	*/

	function initMenu()
	{
		if($('.hamburger_container').length)
		{
			hamb.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		setTimeout(function()
		{
			hambIcon.addClass('active');
		},500);
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		setTimeout(function()
		{
			hambIcon.removeClass('active');
		},500);
		menuActive = false;
	}










	function initMenu2()
	{
		if($('.logo').length)
		{
			hamb2.on('click', function()
			{
				if(!menu2Active)
				{
					openMenu2();
				}
				else
				{
					closeMenu2();
				}
			});
		}
	}

	function openMenu2()
	{
		menu2.addClass('active');
		setTimeout(function()
		{
			hambIcon.addClass('active');
		},500);
		menu2Active = true;
	}

	function closeMenu2()
	{
		menu2.removeClass('active');
		setTimeout(function()
		{
			hambIcon.removeClass('active');
		},500);
		menu2Active = false;
	}

	/* 

	3. Init Parallax

	*/

	function initParallax()
	{
		if($('.prlx_parent').length && $('.prlx').length)
		{
			var elements = $('.prlx_parent');

			elements.each(function()
			{
				var ele = this;
				var bcg = $(ele).find('.prlx');

				var slideParallaxScene = new ScrollMagic.Scene({
			        triggerElement: ele,
			        triggerHook: 1,
			        duration: "200%"
			    })
			    .setTween(TweenMax.from(bcg, 1, {y: '-30%', ease:Power0.easeNone}))
			    .addTo(ctrl);
			});
		}
	}
});