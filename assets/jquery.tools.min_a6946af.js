!function(t){function e(e,n,i){var a,o=this,c=e.add(this),f=e.find(i.tabs),s=n.jquery?n:e.children(n);f.length||(f=e.children()),s.length||(s=e.parent().find(n)),s.length||(s=t(n)),t.extend(this,{click:function(n,s){var l=f.eq(n),u=!e.data("tabs");if("string"==typeof n&&n.replace("#","")&&(l=f.filter('[href*="'+n.replace("#","")+'"]'),n=Math.max(f.index(l),0)),i.rotate){var h=f.length-1;if(0>n)return o.click(h,s);if(n>h)return o.click(0,s)}if(!l.length){if(a>=0)return o;n=i.initialIndex,l=f.eq(n)}if(n===a)return o;if(s=s||t.Event(),s.type="onBeforeClick",c.trigger(s,[n]),!s.isDefaultPrevented()){var d=u?i.initialEffect&&i.effect||"default":i.effect;return r[d].call(o,n,function(){a=n,s.type="onClick",c.trigger(s,[n])}),f.removeClass(i.current),l.addClass(i.current),o}},getConf:function(){return i},getTabs:function(){return f},getPanes:function(){return s},getCurrentPane:function(){return s.eq(a)},getCurrentTab:function(){return f.eq(a)},getIndex:function(){return a},next:function(){return o.click(a+1)},prev:function(){return o.click(a-1)},destroy:function(){return f.off(i.event).removeClass(i.current),s.find('a[href^="#"]').off("click.T"),o}}),t.each("onBeforeClick,onClick".split(","),function(e,n){t.isFunction(i[n])&&t(o).on(n,i[n]),o[n]=function(e){return e&&t(o).on(n,e),o}}),i.history&&t.fn.history&&(t.tools.history.init(f),i.event="history"),f.each(function(e){t(this).on(i.event,function(t){return o.click(e,t),t.preventDefault()})}),s.find('a[href^="#"]').on("click.T",function(e){o.click(t(this).attr("href"),e)}),location.hash&&"a"==i.tabs&&e.find('[href="'+location.hash+'"]').length?o.click(location.hash):(0===i.initialIndex||i.initialIndex>0)&&o.click(i.initialIndex)}t.tools=t.tools||{version:"v1.2.7"},t.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialEffect:!1,initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(t,e){r[t]=e}};var n,i,r={"default":function(t,e){this.getPanes().hide().eq(t).show(),e.call()},fade:function(t,e){var n=this.getConf(),i=n.fadeOutSpeed,r=this.getPanes();i?r.fadeOut(i):r.hide(),r.eq(t).fadeIn(n.fadeInSpeed,e)},slide:function(t,e){var n=this.getConf();this.getPanes().slideUp(n.slideUpSpeed),this.getPanes().eq(t).slideDown(n.slideDownSpeed,e)},ajax:function(t,e){this.getPanes().eq(0).load(this.getTabs().eq(t).attr("href"),e)}};t.tools.tabs.addEffect("horizontal",function(e,r){if(!n){var a=this.getPanes().eq(e),o=this.getCurrentPane();i||(i=this.getPanes().eq(0).width()),n=!0,a.show(),o.animate({width:0},{step:function(t){a.css("width",i-t)},complete:function(){t(this).hide(),r.call(),n=!1}}),o.length||(r.call(),n=!1)}}),t.fn.tabs=function(n,i){var r=this.data("tabs");return r&&(r.destroy(),this.removeData("tabs")),t.isFunction(i)&&(i={onBeforeClick:i}),i=t.extend({},t.tools.tabs.conf,i),this.each(function(){r=new e(t(this),n,i),t(this).data("tabs",r)}),i.api?r:this}}(jQuery);