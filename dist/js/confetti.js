"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):self.ConfettiGenerator=e()}(function(){return function(e){var s={target:"confetti-holder",max:80,size:1,animate:!0,respawn:!0,props:["circle","square","triangle","line"],colors:[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],clock:25,interval:null,rotate:!1,start_from_edge:!1,width:window.innerWidth,height:window.innerHeight};if(e&&(e.target&&(s.target=e.target),e.max&&(s.max=e.max),e.size&&(s.size=e.size),null!=e.animate&&(s.animate=e.animate),null!=e.respawn&&(s.respawn=e.respawn),e.props&&(s.props=e.props),e.colors&&(s.colors=e.colors),e.clock&&(s.clock=e.clock),null!=e.start_from_edge&&(s.start_from_edge=e.start_from_edge),e.width&&(s.width=e.width),e.height&&(s.height=e.height),null!=e.rotate)&&(s.rotate=e.rotate),"object"!=_typeof(s.target)&&"string"!=typeof s.target)throw new TypeError("The target parameter should be a node or string");if("object"==_typeof(s.target)&&(null===s.target||!s.target instanceof HTMLCanvasElement)||"string"==typeof s.target&&(null===document.getElementById(s.target)||!document.getElementById(s.target)instanceof HTMLCanvasElement))throw new ReferenceError("The target element does not exist or is not a canvas element");var r="object"==_typeof(s.target)?s.target:document.getElementById(s.target),l=r.getContext("2d"),c=[];function d(e,t){e=e||1;e=Math.random()*e;return t?Math.floor(e):e}var o=s.props.reduce(function(e,t){return e+(t.weight||1)},0);function f(){s.animate=!1,clearInterval(s.interval),requestAnimationFrame(function(){l.clearRect(0,0,r.width,r.height);var e=r.width;r.width=1,r.width=e})}return{render:function(){r.width=s.width,r.height=s.height,c=[];for(var e,t=0;t<s.max;t++)c.push((e=void 0,{prop:(e=s.props[function(){for(var e=Math.random()*o,t=0;t<s.props.length;++t){var r=s.props[t].weight||1;if(e<r)return t;e-=r}}()]).type||e,x:d(s.width),y:s.start_from_edge?s.clock<0?parseFloat(s.height)+10:-10:d(s.height),src:e.src,radius:d(4)+1,size:e.size,rotate:s.rotate,line:Math.floor(d(65)-30),angles:[d(10,!0)+2,d(10,!0)+2,d(10,!0)+2,d(10,!0)+2],color:s.colors[d(s.colors.length,!0)],rotation:d(360,!0)*Math.PI/180,speed:d(s.clock/7)+s.clock/30}));return requestAnimationFrame(function e(){for(var t in l.clearRect(0,0,s.width,s.height),c){r=void 0;o=void 0;a=void 0;var r=c[t];if(r)switch(l.fillStyle=l.strokeStyle="rgba("+r.color+", "+(3<r.radius?.8:.4)+")",l.beginPath(),r.prop){case"circle":l.moveTo(r.x,r.y),l.arc(r.x,r.y,r.radius*s.size,0,2*Math.PI,!0),l.fill();break;case"triangle":l.moveTo(r.x,r.y),l.lineTo(r.x+r.angles[0]*s.size,r.y+r.angles[1]*s.size),l.lineTo(r.x+r.angles[2]*s.size,r.y+r.angles[3]*s.size),l.closePath(),l.fill();break;case"line":l.moveTo(r.x,r.y),l.lineTo(r.x+r.line*s.size,r.y+5*r.radius),l.lineWidth=2*s.size,l.stroke();break;case"square":l.save(),l.translate(r.x+15,r.y+5),l.rotate(r.rotation),l.fillRect(-15*s.size,-5*s.size,15*s.size,5*s.size),l.restore();break;case"svg":l.save();var o=new window.Image,a=(o.src=r.src,r.size||15);l.translate(r.x+a/2,r.y+a/2),r.rotate&&l.rotate(r.rotation),l.drawImage(o,-a/2*s.size,-a/2*s.size,a*s.size,a*s.size),l.restore()}}for(var n=0;n<s.max;n++){var i=c[n];i&&(s.animate&&(i.y+=i.speed),i.rotate&&(i.rotation+=i.speed/35),0<=i.speed&&s.height<i.y||i.speed<0&&i.y<0)&&(s.respawn?(c[n]=i,c[n].x=d(s.width,!0),c[n].y=i.speed<0?parseFloat(s.height):-10):c[n]=void 0)}c.every(function(e){return void 0===e})&&f(),s.animate&&requestAnimationFrame(e)})},clear:f}}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZldHRpLmpzIl0sIm5hbWVzIjpbInQiLCJleHBvcnRzIiwiX3R5cGVvZiIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsInNlbGYiLCJDb25mZXR0aUdlbmVyYXRvciIsImUiLCJhIiwidGFyZ2V0IiwibWF4Iiwic2l6ZSIsImFuaW1hdGUiLCJyZXNwYXduIiwicHJvcHMiLCJjb2xvcnMiLCJjbG9jayIsImludGVydmFsIiwicm90YXRlIiwic3RhcnRfZnJvbV9lZGdlIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJUeXBlRXJyb3IiLCJIVE1MQ2FudmFzRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWZlcmVuY2VFcnJvciIsIm8iLCJnZXRDb250ZXh0IiwiciIsIm4iLCJNYXRoIiwicmFuZG9tIiwiZmxvb3IiLCJpIiwicmVkdWNlIiwid2VpZ2h0IiwiYyIsImNsZWFySW50ZXJ2YWwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJyZW5kZXIiLCJwdXNoIiwicHJvcCIsImxlbmd0aCIsInR5cGUiLCJ4IiwieSIsInBhcnNlRmxvYXQiLCJzcmMiLCJyYWRpdXMiLCJsaW5lIiwiYW5nbGVzIiwiY29sb3IiLCJyb3RhdGlvbiIsIlBJIiwic3BlZWQiLCJsIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJhcmMiLCJmaWxsIiwibGluZVRvIiwiY2xvc2VQYXRoIiwibGluZVdpZHRoIiwic3Ryb2tlIiwic2F2ZSIsInRyYW5zbGF0ZSIsImZpbGxSZWN0IiwicmVzdG9yZSIsIkltYWdlIiwiZHJhd0ltYWdlIiwiZXZlcnkiLCJjbGVhciJdLCJtYXBwaW5ncyI6IjhQQUFBLENBQUMsU0FBV0EsR0FBRyxXQUF3QixhQUFoQixPQUFTQyxRQUFPLFlBQUFDLFFBQVBELE9BQU8sSUFBRSxhQUFhLE9BQU9FLE9BQU9BLE9BQU9G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UyxFQUFFSSxVQUFVYixFQUFFbUQsR0FBR25ELEVBQUU0RCxPQUFPNUQsRUFBRW1CLFNBQVNuQixFQUFFMEQsVUFBVTFELEVBQUU0RCxNQUFNLElBQUssR0FBRzVELEVBQUU0RCxPQUFPbkQsRUFBRWUsT0FBT3hCLEVBQUVtRCxHQUFHbkQsRUFBRTRELE1BQU0sR0FBRzVELEVBQUVtRCxFQUFFLEtBQUsxQyxFQUFFSyxTQUFTbUIsRUFBRXpCLEdBQUdSLEVBQUVpQyxFQUFFekIsR0FBRzBDLEVBQUVoQixFQUFFekIsRUFBRVksTUFBTSxDQUFBLENBQUUsRUFBRVksRUFBRXpCLEdBQUcyQyxFQUFFbkQsRUFBRTRELE1BQU0sRUFBRVIsV0FBVzNDLEVBQUVlLE1BQU0sRUFBRSxDQUFDLElBQUlTLEVBQUV6QixHQUFHLEtBQUEsRUFBUSxDQUFDeUIsRUFBRTZDLE1BQU0sU0FBU3RFLEdBQUcsT0FBTyxLQUFBLElBQVNBLENBQUMsQ0FBQyxHQUFHaUMsRUFBQyxFQUFNaEMsRUFBRUksU0FBUzhCLHNCQUFzQm5DLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRXVFLE1BQU10QyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImNvbmZldHRpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9ZXx8c2VsZikuQ29uZmV0dGlHZW5lcmF0b3I9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciBhPXt0YXJnZXQ6XCJjb25mZXR0aS1ob2xkZXJcIixtYXg6ODAsc2l6ZToxLGFuaW1hdGU6ITAscmVzcGF3bjohMCxwcm9wczpbXCJjaXJjbGVcIixcInNxdWFyZVwiLFwidHJpYW5nbGVcIixcImxpbmVcIl0sY29sb3JzOltbMTY1LDEwNCwyNDZdLFsyMzAsNjEsMTM1XSxbMCwxOTksMjI4XSxbMjUzLDIxNCwxMjZdXSxjbG9jazoyNSxpbnRlcnZhbDpudWxsLHJvdGF0ZTohMSxzdGFydF9mcm9tX2VkZ2U6ITEsd2lkdGg6d2luZG93LmlubmVyV2lkdGgsaGVpZ2h0OndpbmRvdy5pbm5lckhlaWdodH07aWYoZSYmKGUudGFyZ2V0JiYoYS50YXJnZXQ9ZS50YXJnZXQpLGUubWF4JiYoYS5tYXg9ZS5tYXgpLGUuc2l6ZSYmKGEuc2l6ZT1lLnNpemUpLG51bGwhPWUuYW5pbWF0ZSYmKGEuYW5pbWF0ZT1lLmFuaW1hdGUpLG51bGwhPWUucmVzcGF3biYmKGEucmVzcGF3bj1lLnJlc3Bhd24pLGUucHJvcHMmJihhLnByb3BzPWUucHJvcHMpLGUuY29sb3JzJiYoYS5jb2xvcnM9ZS5jb2xvcnMpLGUuY2xvY2smJihhLmNsb2NrPWUuY2xvY2spLG51bGwhPWUuc3RhcnRfZnJvbV9lZGdlJiYoYS5zdGFydF9mcm9tX2VkZ2U9ZS5zdGFydF9mcm9tX2VkZ2UpLGUud2lkdGgmJihhLndpZHRoPWUud2lkdGgpLGUuaGVpZ2h0JiYoYS5oZWlnaHQ9ZS5oZWlnaHQpLG51bGwhPWUucm90YXRlJiYoYS5yb3RhdGU9ZS5yb3RhdGUpKSxcIm9iamVjdFwiIT10eXBlb2YgYS50YXJnZXQmJlwic3RyaW5nXCIhPXR5cGVvZiBhLnRhcmdldCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIHRhcmdldCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgbm9kZSBvciBzdHJpbmdcIik7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEudGFyZ2V0JiYobnVsbD09PWEudGFyZ2V0fHwhYS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCl8fFwic3RyaW5nXCI9PXR5cGVvZiBhLnRhcmdldCYmKG51bGw9PT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChhLnRhcmdldCl8fCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhLnRhcmdldClpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJUaGUgdGFyZ2V0IGVsZW1lbnQgZG9lcyBub3QgZXhpc3Qgb3IgaXMgbm90IGEgY2FudmFzIGVsZW1lbnRcIik7dmFyIHQ9XCJvYmplY3RcIj09dHlwZW9mIGEudGFyZ2V0P2EudGFyZ2V0OmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGEudGFyZ2V0KSxvPXQuZ2V0Q29udGV4dChcIjJkXCIpLHI9W107ZnVuY3Rpb24gbihlLHQpe2U9ZXx8MTt2YXIgcj1NYXRoLnJhbmRvbSgpKmU7cmV0dXJuIHQ/TWF0aC5mbG9vcihyKTpyfXZhciBpPWEucHJvcHMucmVkdWNlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUrKHQud2VpZ2h0fHwxKX0sMCk7ZnVuY3Rpb24gcygpe3ZhciBlPWEucHJvcHNbZnVuY3Rpb24oKXtmb3IodmFyIGU9TWF0aC5yYW5kb20oKSppLHQ9MDt0PGEucHJvcHMubGVuZ3RoOysrdCl7dmFyIHI9YS5wcm9wc1t0XS53ZWlnaHR8fDE7aWYoZTxyKXJldHVybiB0O2UtPXJ9fSgpXTtyZXR1cm57cHJvcDplLnR5cGU/ZS50eXBlOmUseDpuKGEud2lkdGgpLHk6YS5zdGFydF9mcm9tX2VkZ2U/YS5jbG9jazwwP3BhcnNlRmxvYXQoYS5oZWlnaHQpKzEwOi0xMDpuKGEuaGVpZ2h0KSxzcmM6ZS5zcmMscmFkaXVzOm4oNCkrMSxzaXplOmUuc2l6ZSxyb3RhdGU6YS5yb3RhdGUsbGluZTpNYXRoLmZsb29yKG4oNjUpLTMwKSxhbmdsZXM6W24oMTAsITApKzIsbigxMCwhMCkrMixuKDEwLCEwKSsyLG4oMTAsITApKzJdLGNvbG9yOmEuY29sb3JzW24oYS5jb2xvcnMubGVuZ3RoLCEwKV0scm90YXRpb246bigzNjAsITApKk1hdGguUEkvMTgwLHNwZWVkOm4oYS5jbG9jay83KSthLmNsb2NrLzMwfX1mdW5jdGlvbiBsKGUpe2lmKGUpc3dpdGNoKG8uZmlsbFN0eWxlPW8uc3Ryb2tlU3R5bGU9XCJyZ2JhKFwiK2UuY29sb3IrXCIsIFwiKygzPGUucmFkaXVzPy44Oi40KStcIilcIixvLmJlZ2luUGF0aCgpLGUucHJvcCl7Y2FzZVwiY2lyY2xlXCI6by5tb3ZlVG8oZS54LGUueSksby5hcmMoZS54LGUueSxlLnJhZGl1cyphLnNpemUsMCwyKk1hdGguUEksITApLG8uZmlsbCgpO2JyZWFrO2Nhc2VcInRyaWFuZ2xlXCI6by5tb3ZlVG8oZS54LGUueSksby5saW5lVG8oZS54K2UuYW5nbGVzWzBdKmEuc2l6ZSxlLnkrZS5hbmdsZXNbMV0qYS5zaXplKSxvLmxpbmVUbyhlLngrZS5hbmdsZXNbMl0qYS5zaXplLGUueStlLmFuZ2xlc1szXSphLnNpemUpLG8uY2xvc2VQYXRoKCksby5maWxsKCk7YnJlYWs7Y2FzZVwibGluZVwiOm8ubW92ZVRvKGUueCxlLnkpLG8ubGluZVRvKGUueCtlLmxpbmUqYS5zaXplLGUueSs1KmUucmFkaXVzKSxvLmxpbmVXaWR0aD0yKmEuc2l6ZSxvLnN0cm9rZSgpO2JyZWFrO2Nhc2VcInNxdWFyZVwiOm8uc2F2ZSgpLG8udHJhbnNsYXRlKGUueCsxNSxlLnkrNSksby5yb3RhdGUoZS5yb3RhdGlvbiksby5maWxsUmVjdCgtMTUqYS5zaXplLC01KmEuc2l6ZSwxNSphLnNpemUsNSphLnNpemUpLG8ucmVzdG9yZSgpO2JyZWFrO2Nhc2VcInN2Z1wiOm8uc2F2ZSgpO3ZhciB0PW5ldyB3aW5kb3cuSW1hZ2U7dC5zcmM9ZS5zcmM7dmFyIHI9ZS5zaXplfHwxNTtvLnRyYW5zbGF0ZShlLngrci8yLGUueStyLzIpLGUucm90YXRlJiZvLnJvdGF0ZShlLnJvdGF0aW9uKSxvLmRyYXdJbWFnZSh0LC1yLzIqYS5zaXplLC1yLzIqYS5zaXplLHIqYS5zaXplLHIqYS5zaXplKSxvLnJlc3RvcmUoKX19ZnVuY3Rpb24gYygpe2EuYW5pbWF0ZT0hMSxjbGVhckludGVydmFsKGEuaW50ZXJ2YWwpLHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe28uY2xlYXJSZWN0KDAsMCx0LndpZHRoLHQuaGVpZ2h0KTt2YXIgZT10LndpZHRoO3Qud2lkdGg9MSx0LndpZHRoPWV9KX1yZXR1cm57cmVuZGVyOmZ1bmN0aW9uKCl7dC53aWR0aD1hLndpZHRoLHQuaGVpZ2h0PWEuaGVpZ2h0LHI9W107Zm9yKHZhciBlPTA7ZTxhLm1heDtlKyspci5wdXNoKHMoKSk7cmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBlKCl7Zm9yKHZhciB0IGluIG8uY2xlYXJSZWN0KDAsMCxhLndpZHRoLGEuaGVpZ2h0KSxyKWwoclt0XSk7IWZ1bmN0aW9uKCl7Zm9yKHZhciBlPTA7ZTxhLm1heDtlKyspe3ZhciB0PXJbZV07dCYmKGEuYW5pbWF0ZSYmKHQueSs9dC5zcGVlZCksdC5yb3RhdGUmJih0LnJvdGF0aW9uKz10LnNwZWVkLzM1KSwoMDw9dC5zcGVlZCYmYS5oZWlnaHQ8dC55fHx0LnNwZWVkPDAmJnQueTwwKSYmKGEucmVzcGF3bj8ocltlXT10LHJbZV0ueD1uKGEud2lkdGgsITApLHJbZV0ueT10LnNwZWVkPDA/cGFyc2VGbG9hdChhLmhlaWdodCk6LTEwKTpyW2VdPXZvaWQgMCkpfXIuZXZlcnkoZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWV9KSYmYygpfSgpLGEuYW5pbWF0ZSYmcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGUpfSl9LGNsZWFyOmN9fX0pO1xuIl19