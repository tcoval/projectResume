!function(){"use strict";angular.module("app",["ui.sortable"])}(),function(){"use strict";function e(e,t,n,o,a,u){function r(e,t){$.authToken=t,c(t),l()}function i(e,t){var n=angular.extend({},$.resume.sections[t]);$.resume.sections.splice(t,0,n),f(n,t)}function s(e,t){$.resume.sections.splice(t,1),p(t)}function c(e){a.getResumeData(e).then(function(e){$.resume=e})}function l(){var t=angular.element("div.margins");o.getTemplate().then(function(o){t.html(o),e(t.contents())(n)})}function f(e,t){if($.authToken&&"default"!==$.authToken){var n={authToken:$.authToken,newSection:e,sectionIndex:t};u.emit("add-section",n)}}function p(e){if($.authToken&&"default"!==$.authToken){var t={authToken:$.authToken,sectionIndex:e};u.emit("remove-section",t)}}function d(){if($.authToken&&"default"!==$.authToken){var e={authToken:$.authToken,sections:$.resume.sections};u.emit("sortable-event",e)}}function m(e){for(var t=$.resume,n=e.path.split("."),o=n.pop(),a=e.val,u=0,r=n.length;r>u;u++)t=t[n[u]];isNaN(o)?t[o]=a:t.set(parseInt(o,10),a)}function h(){var e=angular.element("#authToken").attr("value");t.$broadcast("auth-token",e)}function g(e){if($.authToken&&"default"!==$.authToken){var t={authToken:$.authToken,path:e.target.getAttribute("data"),val:e.target.innerHTML};m(t),u.emit("value-change",t)}}var v=t,$=this;$.authToken="",$.resume,$.init=h,$.emit=g,$.sortableSections={axis:"y",tolerance:"intersect",handle:".section-handle",cancel:".section-title",stop:function(e,t){d()}},v.$on("auth-token",r),v.$on("section added",i),v.$on("section removed",s)}angular.module("app").controller("appCtrl",e),e.$inject=["$compile","$rootScope","$scope","layoutService","resumeService","socket"]}(),function(){"use strict";function e(e,t,n,o){function a(t){angular.element("#authToken").attr("value",t),e.$broadcast("auth-token",t)}function u(e){angular.element(e).modal("hide"),r(),i()}function r(){angular.element("#suPassword").tooltip("hide"),d.suUsername="",d.suPassword="",d.suError=""}function i(){d.liUsername="",d.liPassword="",d.liError=""}function s(){n.signup(d.suUsername,d.suPassword).then(function(e){e.message?d.suError=e.message:(a(e.id),u("#suModal"))})}function c(){n.login(d.liUsername,d.liPassword).then(function(e){e.message?d.liError=e.message:(a(e.id),u("#liModal"))})}function l(){n.logout().then(function(){angular.element("#authToken").attr("value","default"),e.$broadcast("auth-token","default")})}function f(e){e.target.value.length<6?angular.element(e.target).tooltip("show"):angular.element(e.target).tooltip("hide")}function p(){var e={username:d.suUsername};o.emit("username",e)}var d=this,m=angular.element("#suUsername");d.suUsername,d.suPassword,d.suUsernameError="",d.suError="",d.liUsername,d.liPassword,d.liError="",d.signup=s,d.login=c,d.logout=l,d.suTooltip=f,d.validateUser=p,o.on("username available",function(){m.removeClass("unavailable")}),o.on("username unavailable",function(e){m.addClass("unavailable")})}angular.module("app").controller("authCtrl",e),e.$inject=["$rootScope","$scope","authService","socket"]}(),function(){"use strict";function e(e){function t(t,n,o){t.add=function(t,n){e.$broadcast("section added",n)},n.parent().bind("mouseenter",function(){n.show()}),n.parent().bind("mouseleave",function(){n.hide()})}return{restrict:"E",template:'<button type="button" class="close"><span>+</span></button>',link:t}}angular.module("app").directive("prAdd",e),e.$inject=["$rootScope"]}(),function(){"use strict";function e(e){function t(t,n,o){t.remove=function(t,n){e.$broadcast("section removed",n)},n.parent().bind("mouseenter",function(){n.show()}),n.parent().bind("mouseleave",function(){n.hide()})}return{restrict:"E",template:'<button type="button" class="close"><span>×</span></button>',link:t}}angular.module("app").directive("prRemove",e),e.$inject=["$rootScope"]}(),function(){"use strict";function e(e){return function(t){return e.trustAsHtml(t)}}angular.module("app").filter("unescaped",e),e.$inject=["$sce"]}(),function(){"use strict";function e(e,t){function n(n,o){var a={username:n,password:o};return e.post("/signup",a).then(function(e){return e.data},function(e){return t.error("XHR Failed for authService.signup"),e.data})}function o(n,o){var a={username:n,password:o};return e.post("/login",a).then(function(e){return e.data},function(e){return t.error("XHR Failed for authService.login"),e.data})}function a(){return e.post("/logout")["catch"](function(){t.error("XHR Failed for authService.logout")})}return{signup:n,login:o,logout:a}}angular.module("app").factory("authService",e),e.$inject=["$http","$log"]}(),function(){"use strict";function e(e,t){function n(n){var n=n||"default";return e.get("/template?templateID="+n).then(function(e){return e.data})["catch"](function(){t.error("XHR Failed for getTemplate")})}return{getTemplate:n}}angular.module("app").factory("layoutService",e),e.$inject=["$http","$log"]}(),function(){"use strict";function e(e,t){function n(n){var o={authToken:n};return e.post("/resume",o).then(function(e){return e.data})["catch"](function(){t.error("XHR Failed for getResumeData")})}return{getResumeData:n}}angular.module("app").factory("resumeService",e),e.$inject=["$http","$log"]}(),function(){"use strict";function e(e){function t(t,n){o.on(t,function(){var t=arguments;e.$apply(function(){n.apply(o,t)})})}function n(t,n,a){o.emit(t,n,function(){var t=arguments;e.$apply(function(){a&&a.apply(o,t)})})}var o=io.connect();return{on:t,emit:n}}angular.module("app").factory("socket",e),e.$inject=["$rootScope"]}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL21vZHVsZXMvYXBwLm1vZHVsZS5qcyIsImpzL2NvbnRyb2xsZXJzL2FwcC5jb250cm9sbGVyLmpzIiwianMvY29udHJvbGxlcnMvYXV0aC5jb250cm9sbGVyLmpzIiwianMvZGlyZWN0aXZlcy9hZGQuZGlyZWN0aXZlLmpzIiwianMvZGlyZWN0aXZlcy9yZW1vdmUuZGlyZWN0aXZlLmpzIiwianMvZmlsdGVycy91bmVzY2FwZWQuZmlsdGVyLmpzIiwianMvc2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIiwianMvc2VydmljZXMvbGF5b3V0LnNlcnZpY2UuanMiLCJqcy9zZXJ2aWNlcy9yZXN1bWUuc2VydmljZS5qcyIsImpzL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJhcHBDdHJsIiwiJGNvbXBpbGUiLCIkcm9vdFNjb3BlIiwiJHNjb3BlIiwibGF5b3V0U2VydmljZSIsInJlc3VtZVNlcnZpY2UiLCJzb2NrZXQiLCJvbkF1dGhUb2tlbkNoYW5nZSIsImV2ZW50IiwiYXV0aFRva2VuIiwidm0iLCJ1cGRhdGVSZXN1bWVEYXRhIiwicmVuZGVyTGF5b3V0Iiwib25TZWN0aW9uQWRkZWQiLCJzZWN0aW9uSW5kZXgiLCJuZXdTZWN0aW9uIiwiZXh0ZW5kIiwicmVzdW1lIiwic2VjdGlvbnMiLCJzcGxpY2UiLCJlbWl0QWRkU2VjdGlvbiIsIm9uU2VjdGlvblJlbW92ZWQiLCJlbWl0UmVtb3ZlU2VjdGlvbiIsImdldFJlc3VtZURhdGEiLCJ0aGVuIiwiZGF0YSIsImNvbnRhaW5lciIsImVsZW1lbnQiLCJnZXRUZW1wbGF0ZSIsImh0bWwiLCJjb250ZW50cyIsImVtaXQiLCJlbWl0U29ydGFibGVVcGRhdGUiLCJ1cGRhdGVWbSIsImJhc2UiLCJwYXRoIiwic3BsaXQiLCJhdHRyIiwicG9wIiwidmFsIiwiaSIsImxlbiIsImxlbmd0aCIsImlzTmFOIiwic2V0IiwicGFyc2VJbnQiLCJpbml0IiwiJGJyb2FkY2FzdCIsIiRldmVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInNjb3BlIiwidGhpcyIsInNvcnRhYmxlU2VjdGlvbnMiLCJheGlzIiwidG9sZXJhbmNlIiwiaGFuZGxlIiwiY2FuY2VsIiwic3RvcCIsInVpIiwiJG9uIiwiY29udHJvbGxlciIsIiRpbmplY3QiLCJhdXRoQ3RybCIsImF1dGhTZXJ2aWNlIiwidXBkYXRlQXV0aFRva2VuIiwiY2xlYW51cE1vZGFsIiwiZWxlbWVudElEIiwibW9kYWwiLCJzdUNsZWFyIiwibGlDbGVhciIsInRvb2x0aXAiLCJzdVVzZXJuYW1lIiwic3VQYXNzd29yZCIsInN1RXJyb3IiLCJsaVVzZXJuYW1lIiwibGlQYXNzd29yZCIsImxpRXJyb3IiLCJzaWdudXAiLCJtZXNzYWdlIiwiaWQiLCJsb2dpbiIsImxvZ291dCIsInN1VG9vbHRpcCIsInZhbHVlIiwidmFsaWRhdGVVc2VyIiwidXNlcm5hbWUiLCJzdVVzZXJuYW1lRXJyb3IiLCJvbiIsInJlbW92ZUNsYXNzIiwidXNlciIsImFkZENsYXNzIiwicHJBZGQiLCJsaW5rIiwiYXR0cnMiLCJhZGQiLCJwYXJlbnQiLCJiaW5kIiwic2hvdyIsImhpZGUiLCJyZXN0cmljdCIsInRlbXBsYXRlIiwiZGlyZWN0aXZlIiwicHJSZW1vdmUiLCJyZW1vdmUiLCJ1bmVzY2FwZWQiLCIkc2NlIiwidHJ1c3RBc0h0bWwiLCJmaWx0ZXIiLCIkaHR0cCIsIiRsb2ciLCJwYXNzd29yZCIsInBvc3QiLCJyZXNwb25zZSIsImVycm9yIiwiZmFjdG9yeSIsImdldCIsImV2ZW50TmFtZSIsImNhbGxiYWNrIiwiYXJncyIsImFyZ3VtZW50cyIsIiRhcHBseSIsImFwcGx5IiwiaW8iLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiQ0FBQSxXQUNBLFlBRUFBLFNBQ0FDLE9BQUEsT0FBQSxtQkNKQSxXQUNBLFlBUUEsU0FBQUMsR0FBQUMsRUFBQUMsRUFBQUMsRUFBQUMsRUFBQUMsRUFBQUMsR0EyQ0EsUUFBQUMs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QyxFQUFBSSxNQUFBLGdDQWRBLE9BQ0F2RixZQUFBQSxHQVJBOUIsUUFDQUMsT0FBQSxPQUNBcUgsUUFBQSxnQkFBQWhILEdBRUFBLEVBQUEyRCxTQUFBLFFBQUEsV0NQQSxXQUNBLFlBUUEsU0FBQTFELEdBQUF5RyxFQUFBQyxHQU9BLFFBQUF4RixHQUFBZCxHQUNBLEdBQUFnQixJQUFBaEIsVUFBQUEsRUFFQSxPQUFBcUcsR0FBQUcsS0FBQSxVQUFBeEYsR0FDQUQsS0FBQSxTQUFBMEYsR0FDQSxNQUFBQSxHQUFBekYsT0FGQXFGLFNBSUEsV0FDQUMsRUFBQUksTUFBQSxrQ0FkQSxPQUNBNUYsY0FBQUEsR0FSQXpCLFFBQ0FDLE9BQUEsT0FDQXFILFFBQUEsZ0JBQUEvRyxHQUVBQSxFQUFBMEQsU0FBQSxRQUFBLFdDUEEsV0FDQSxZQVFBLFNBQUF6RCxHQUFBSixHQVVBLFFBQUF1RixHQUFBNkIsRUFBQUMsR0FDQWpILEVBQUFtRixHQUFBNkIsRUFBQSxXQUNBLEdBQUFFLEdBQUFDLFNBQ0F2SCxHQUFBd0gsT0FBQSxXQUNBSCxFQUFBSSxNQUFBckgsRUFBQWtILE9BS0EsUUFBQXpGLEdBQUF1RixFQUFBN0YsRUFBQThGLEdBQ0FqSCxFQUFBeUIsS0FBQXVGLEVBQUE3RixFQUFBLFdBQ0EsR0FBQStGLEdBQUFDLFNBQ0F2SCxHQUFBd0gsT0FBQSxXQUNBSCxHQUNBQSxFQUFBSSxNQUFBckgsRUFBQWtILE9BdkJBLEdBQUFsSCxHQUFBc0gsR0FBQUMsU0FFQSxRQUNBcEMsR0FBQUEsRUFDQTFELEtBQUFBLEdBWEFqQyxRQUNBQyxPQUFBLE9BQ0FxSCxRQUFBLFNBQUE5RyxHQUVBQSxFQUFBeUQsU0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnYXBwJywgWyd1aS5zb3J0YWJsZSddKTtcblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdhcHAnKVxuICAgIC5jb250cm9sbGVyKCdhcHBDdHJsJywgYXBwQ3RybCk7XG5cbiAgYXBwQ3RybC4kaW5qZWN0ID0gWyckY29tcGlsZScsICckcm9vdFNjb3BlJywgJyRzY29wZScsICdsYXlvdXRTZXJ2aWNlJywgJ3Jlc3VtZVNlcnZpY2UnLCAnc29ja2V0J107XG5cbiAgZnVuY3Rpb24gYXBwQ3RybCgkY29tcGlsZSwgJHJvb3RTY29wZSwgJHNjb3BlLCBsYXlvdXRTZXJ2aWNlLCByZXN1bWVTZXJ2aWNlLCBzb2NrZXQpIHtcbiAgICB2YXIgc2NvcGUgPSAkcm9vdFNjb3BlO1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAvKiBWSUVXTU9ERUwgQklORElOR1MgKi9cbiAgICB2bS5hdXRoVG9rZW4gPSAnJztcbiAgICB2bS5yZXN1bWU7XG5cbiAgICB2bS5pbml0ID0gaW5pdDtcbiAgICB2bS5lbWl0ID0gZW1pdDtcblxuICAgIC8qIFVJLlNPUlRBQkxFIE9QVElPTlMgKi9cbiAgICB2bS5zb3J0YWJsZVNlY3Rpb25zID0ge1xuICAgICAgYXhpczogJ3knLFxuICAgICAgdG9sZXJhbmNlOiAnaW50ZXJzZWN0JyxcbiAgICAgIGhhbmRsZTogJy5zZWN0aW9uLWhhbmRsZScsXG4gICAgICBjYW5jZWw6ICcuc2VjdGlvbi10aXRsZScsXG4gICAgICBzdG9wOiBmdW5jdGlvbihldmVudCwgdWkpIHsgLy8gdXNlIHN0b3AgYmVjYXVzZSBpdCBpcyBhbHJlYWR5IHdyYXBwZWQgd2l0aCAkYXBwbHlcbiAgICAgICAgZW1pdFNvcnRhYmxlVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFRPRE86IGNvbnZlcnQgdG8gYW5ndWxhci11aSBzb3J0YWJsZSB3aGVuIHNlY3Rpb25zIGltcGxlbWVudGF0aW9uIGlzIGZpbmlzaGVkXG4gICAgLy8gJCgnLnNvcnRhYmxlRW50cmllcycpLnNvcnRhYmxlKHtcbiAgICAvLyAgIGF4aXM6ICd5JyxcbiAgICAvLyAgIHRvbGVyYW5jZTogJ2ludGVyc2VjdCcsXG4gICAgLy8gICBoYW5kbGU6ICcuZW50cnknLFxuICAgIC8vICAgdXBkYXRlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAvL1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuICAgIC8vXG4gICAgLy8gJCgnLnNlY3Rpb24taGFuZGxlJykuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgLy8gICAkKHRoaXMpLnBhcmVudCgpLmNzcygnYm9yZGVyLWNvbG9yJywgJyMwMDAnKTtcbiAgICAvLyB9LCBmdW5jdGlvbigpIHtcbiAgICAvLyAgICQodGhpcykucGFyZW50KCkuY3NzKCdib3JkZXItY29sb3InLCAndHJhbnNwYXJlbnQnKTtcbiAgICAvLyB9KTtcblxuICAgIC8qIEVWRU5UIExJU1RFTkVSUyAoQU5HVUxBUikgKi9cbiAgICBzY29wZS4kb24oJ2F1dGgtdG9rZW4nLCBvbkF1dGhUb2tlbkNoYW5nZSk7XG4gICAgc2NvcGUuJG9uKCdzZWN0aW9uIGFkZGVkJywgb25TZWN0aW9uQWRkZWQpO1xuICAgIHNjb3BlLiRvbignc2VjdGlvbiByZW1vdmVkJywgb25TZWN0aW9uUmVtb3ZlZCk7XG5cbiAgICBmdW5jdGlvbiBvbkF1dGhUb2tlbkNoYW5nZShldmVudCwgYXV0aFRva2VuKSB7XG4gICAgICB2bS5hdXRoVG9rZW4gPSBhdXRoVG9rZW47XG4gICAgICB1cGRhdGVSZXN1bWVEYXRhKGF1dGhUb2tlbik7XG4gICAgICByZW5kZXJMYXlvdXQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblNlY3Rpb25BZGRlZChldmVudCwgc2VjdGlvbkluZGV4KSB7XG4gICAgICB2YXIgbmV3U2VjdGlvbiA9IGFuZ3VsYXIuZXh0ZW5kKHt9LCB2bS5yZXN1bWUuc2VjdGlvbnNbc2VjdGlvbkluZGV4XSk7XG5cbiAgICAgIHZtLnJlc3VtZS5zZWN0aW9ucy5zcGxpY2Uoc2VjdGlvbkluZGV4LCAwLCBuZXdTZWN0aW9uKTtcbiAgICAgIGVtaXRBZGRTZWN0aW9uKG5ld1NlY3Rpb24sIHNlY3Rpb25JbmRleCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TZWN0aW9uUmVtb3ZlZChldmVudCwgc2VjdGlvbkluZGV4KSB7XG4gICAgICB2bS5yZXN1bWUuc2VjdGlvbnMuc3BsaWNlKHNlY3Rpb25JbmRleCwgMSk7XG4gICAgICBlbWl0UmVtb3ZlU2VjdGlvbihzZWN0aW9uSW5kZXgpO1xuICAgIH1cblxuICAgIC8qIFBSSVZBVEUgRlVOQ1RJT05TICovXG4gICAgZnVuY3Rpb24gdXBkYXRlUmVzdW1lRGF0YShhdXRoVG9rZW4pIHtcbiAgICAgIHJlc3VtZVNlcnZpY2UuZ2V0UmVzdW1lRGF0YShhdXRoVG9rZW4pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgdm0ucmVzdW1lID0gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyTGF5b3V0KCkge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IGFuZ3VsYXIuZWxlbWVudCgnZGl2Lm1hcmdpbnMnKTtcblxuICAgICAgbGF5b3V0U2VydmljZS5nZXRUZW1wbGF0ZSgpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgY29udGFpbmVyLmh0bWwoZGF0YSk7XG4gICAgICAgICAgJGNvbXBpbGUoY29udGFpbmVyLmNvbnRlbnRzKCkpKCRzY29wZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVtaXRBZGRTZWN0aW9uKG5ld1NlY3Rpb24sIHNlY3Rpb25JbmRleCkge1xuICAgICAgaWYgKHZtLmF1dGhUb2tlbiAmJiB2bS5hdXRoVG9rZW4gIT09ICdkZWZhdWx0Jykge1xuICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICBhdXRoVG9rZW46IHZtLmF1dGhUb2tlbixcbiAgICAgICAgICBuZXdTZWN0aW9uOiBuZXdTZWN0aW9uLFxuICAgICAgICAgIHNlY3Rpb25JbmRleDogc2VjdGlvbkluZGV4XG4gICAgICAgIH07XG5cbiAgICAgICAgc29ja2V0LmVtaXQoJ2FkZC1zZWN0aW9uJywgZGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW1pdFJlbW92ZVNlY3Rpb24oc2VjdGlvbkluZGV4KSB7XG4gICAgICBpZiAodm0uYXV0aFRva2VuICYmIHZtLmF1dGhUb2tlbiAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgIGF1dGhUb2tlbjogdm0uYXV0aFRva2VuLFxuICAgICAgICAgIHNlY3Rpb25JbmRleDogc2VjdGlvbkluZGV4XG4gICAgICAgIH07XG5cbiAgICAgICAgc29ja2V0LmVtaXQoJ3JlbW92ZS1zZWN0aW9uJywgZGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW1pdFNvcnRhYmxlVXBkYXRlKCkge1xuICAgICAgaWYgKHZtLmF1dGhUb2tlbiAmJiB2bS5hdXRoVG9rZW4gIT09ICdkZWZhdWx0Jykge1xuICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICBhdXRoVG9rZW46IHZtLmF1dGhUb2tlbixcbiAgICAgICAgICBzZWN0aW9uczogdm0ucmVzdW1lLnNlY3Rpb25zXG4gICAgICAgIH07XG5cbiAgICAgICAgc29ja2V0LmVtaXQoJ3NvcnRhYmxlLWV2ZW50JywgZGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVm0oZGF0YSkge1xuICAgICAgdmFyIGJhc2UgPSB2bS5yZXN1bWU7XG4gICAgICB2YXIgcGF0aCA9IGRhdGEucGF0aC5zcGxpdCgnLicpO1xuICAgICAgdmFyIGF0dHIgPSBwYXRoLnBvcCgpO1xuICAgICAgdmFyIHZhbCA9IGRhdGEudmFsO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGF0aC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBiYXNlID0gYmFzZVtwYXRoW2ldXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihhdHRyKSkge1xuICAgICAgICBiYXNlLnNldChwYXJzZUludChhdHRyLCAxMCksIHZhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYXNlW2F0dHJdID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIFBVQkxJQyBGVU5DVElPTiBJTVBMRU1FTlRBVElPTlMgKi9cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdmFyIGF1dGhUb2tlbiA9IGFuZ3VsYXIuZWxlbWVudCgnI2F1dGhUb2tlbicpLmF0dHIoJ3ZhbHVlJyk7XG4gICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2F1dGgtdG9rZW4nLCBhdXRoVG9rZW4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVtaXQoJGV2ZW50KSB7XG4gICAgICBpZiAodm0uYXV0aFRva2VuICYmIHZtLmF1dGhUb2tlbiAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgIGF1dGhUb2tlbjogdm0uYXV0aFRva2VuLFxuICAgICAgICAgIHBhdGg6ICRldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhJyksXG4gICAgICAgICAgdmFsOiAkZXZlbnQudGFyZ2V0LmlubmVySFRNTFxuICAgICAgICB9O1xuXG4gICAgICAgIHVwZGF0ZVZtKGRhdGEpO1xuICAgICAgICBzb2NrZXQuZW1pdCgndmFsdWUtY2hhbmdlJywgZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FwcCcpXG4gICAgLmNvbnRyb2xsZXIoJ2F1dGhDdHJsJywgYXV0aEN0cmwpO1xuXG4gIGF1dGhDdHJsLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJ2F1dGhTZXJ2aWNlJywgJ3NvY2tldCddO1xuXG4gIGZ1bmN0aW9uIGF1dGhDdHJsKCRyb290U2NvcGUsICRzY29wZSwgYXV0aFNlcnZpY2UsIHNvY2tldCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdmFyIHN1VXNlcm5hbWUgPSBhbmd1bGFyLmVsZW1lbnQoJyNzdVVzZXJuYW1lJyk7XG5cbiAgICAvKiBWSUVXTU9ERUwgQklORElOR1MgKi9cbiAgICB2bS5zdVVzZXJuYW1lO1xuICAgIHZtLnN1UGFzc3dvcmQ7XG4gICAgdm0uc3VVc2VybmFtZUVycm9yID0gJyc7XG4gICAgdm0uc3VFcnJvciA9ICcnO1xuXG4gICAgdm0ubGlVc2VybmFtZTtcbiAgICB2bS5saVBhc3N3b3JkO1xuICAgIHZtLmxpRXJyb3IgPSAnJztcblxuICAgIHZtLnNpZ251cCA9IHNpZ251cDtcbiAgICB2bS5sb2dpbiA9IGxvZ2luO1xuICAgIHZtLmxvZ291dCA9IGxvZ291dDtcbiAgICB2bS5zdVRvb2x0aXAgPSBzdVRvb2x0aXA7XG4gICAgdm0udmFsaWRhdGVVc2VyID0gdmFsaWRhdGVVc2VyO1xuXG4gICAgLyogRVZFTlQgTElTVEVORVJTIChTT0NLRVQuSU8pICovXG4gICAgc29ja2V0Lm9uKCd1c2VybmFtZSBhdmFpbGFibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzdVVzZXJuYW1lLnJlbW92ZUNsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKCd1c2VybmFtZSB1bmF2YWlsYWJsZScsIGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICBzdVVzZXJuYW1lLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgLy8gdm0uc3VTb2NrZXRNc2cgPSB1c2VyLnVzZXJuYW1lICsgJyBpcyBhbHJlYWR5IHRha2VuLic7XG4gICAgfSk7XG5cbiAgICAvKiBQUklWQVRFIEZVTkNUSU9OUyAqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUF1dGhUb2tlbihhdXRoVG9rZW4pIHtcbiAgICAgIGFuZ3VsYXIuZWxlbWVudCgnI2F1dGhUb2tlbicpLmF0dHIoJ3ZhbHVlJywgYXV0aFRva2VuKTtcbiAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnYXV0aC10b2tlbicsIGF1dGhUb2tlbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cE1vZGFsKGVsZW1lbnRJRCkge1xuICAgICAgYW5ndWxhci5lbGVtZW50KGVsZW1lbnRJRCkubW9kYWwoJ2hpZGUnKTtcbiAgICAgIHN1Q2xlYXIoKTtcbiAgICAgIGxpQ2xlYXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdUNsZWFyKCkge1xuICAgICAgYW5ndWxhci5lbGVtZW50KCcjc3VQYXNzd29yZCcpLnRvb2x0aXAoJ2hpZGUnKTtcbiAgICAgIHZtLnN1VXNlcm5hbWUgPSAnJztcbiAgICAgIHZtLnN1UGFzc3dvcmQgPSAnJztcbiAgICAgIHZtLnN1RXJyb3IgPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaUNsZWFyKCkge1xuICAgICAgdm0ubGlVc2VybmFtZSA9ICcnO1xuICAgICAgdm0ubGlQYXNzd29yZCA9ICcnO1xuICAgICAgdm0ubGlFcnJvciA9ICcnO1xuICAgIH1cblxuICAgIC8qIFBVQkxJQyBGVU5DVElPTiBJTVBMRU1FTlRBVElPTlMgKi9cbiAgICBmdW5jdGlvbiBzaWdudXAoKSB7XG4gICAgICBhdXRoU2VydmljZS5zaWdudXAodm0uc3VVc2VybmFtZSwgdm0uc3VQYXNzd29yZClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBpZiAoZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgICAgICB2bS5zdUVycm9yID0gZGF0YS5tZXNzYWdlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cGRhdGVBdXRoVG9rZW4oZGF0YS5pZCk7XG4gICAgICAgICAgICBjbGVhbnVwTW9kYWwoJyNzdU1vZGFsJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2dpbigpIHtcbiAgICAgIGF1dGhTZXJ2aWNlLmxvZ2luKHZtLmxpVXNlcm5hbWUsIHZtLmxpUGFzc3dvcmQpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgdm0ubGlFcnJvciA9IGRhdGEubWVzc2FnZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cGRhdGVBdXRoVG9rZW4oZGF0YS5pZCk7XG4gICAgICAgICAgICBjbGVhbnVwTW9kYWwoJyNsaU1vZGFsJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgICBhdXRoU2VydmljZS5sb2dvdXQoKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYW5ndWxhci5lbGVtZW50KCcjYXV0aFRva2VuJykuYXR0cigndmFsdWUnLCAnZGVmYXVsdCcpO1xuICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnYXV0aC10b2tlbicsICdkZWZhdWx0Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1VG9vbHRpcCgkZXZlbnQpIHtcbiAgICAgIC8vIFRPRE86IHVzZSByZWZlcmVuY2UgdG8gbmctbWlubGVuZ3RoIGluc3RlYWQgb2YgaGFyZGNvZGluZyAnNidcbiAgICAgIGlmICgkZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgYW5ndWxhci5lbGVtZW50KCRldmVudC50YXJnZXQpLnRvb2x0aXAoJ3Nob3cnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuZ3VsYXIuZWxlbWVudCgkZXZlbnQudGFyZ2V0KS50b29sdGlwKCdoaWRlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVVc2VyKCkge1xuICAgICAgdmFyIGRhdGEgPSB7dXNlcm5hbWU6IHZtLnN1VXNlcm5hbWV9O1xuICAgICAgLy8gdm0uc3VTb2NrZXRNc2cgPSAnJztcbiAgICAgIHNvY2tldC5lbWl0KCd1c2VybmFtZScsIGRhdGEpO1xuICAgIH1cbiAgfVxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdhcHAnKVxuICAgIC5kaXJlY3RpdmUoJ3ByQWRkJywgcHJBZGQpO1xuXG4gIHByQWRkLiRpbmplY3QgPSBbJyRyb290U2NvcGUnXTtcblxuICBmdW5jdGlvbiBwckFkZCgkcm9vdFNjb3BlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICB0ZW1wbGF0ZTogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIj48c3Bhbj4rPC9zcGFuPjwvYnV0dG9uPicsXG4gICAgICBsaW5rOiBsaW5rXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICBzY29wZS5hZGQgPSBmdW5jdGlvbiAoZXZlbnQsIHNlY3Rpb25JbmRleCkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NlY3Rpb24gYWRkZWQnLCBzZWN0aW9uSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnBhcmVudCgpLmJpbmQoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVsZW1lbnQuc2hvdygpO1xuICAgICAgfSk7XG5cbiAgICAgIGVsZW1lbnQucGFyZW50KCkuYmluZCgnbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWxlbWVudC5oaWRlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnYXBwJylcbiAgICAuZGlyZWN0aXZlKCdwclJlbW92ZScsIHByUmVtb3ZlKTtcblxuICBwclJlbW92ZS4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJ107XG5cbiAgZnVuY3Rpb24gcHJSZW1vdmUoJHJvb3RTY29wZSkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgdGVtcGxhdGU6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCI+PHNwYW4+w5c8L3NwYW4+PC9idXR0b24+JyxcbiAgICAgIGxpbms6IGxpbmtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIHNjb3BlLnJlbW92ZSA9IGZ1bmN0aW9uIChldmVudCwgc2VjdGlvbkluZGV4KSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2VjdGlvbiByZW1vdmVkJywgc2VjdGlvbkluZGV4KTtcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5wYXJlbnQoKS5iaW5kKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBlbGVtZW50LnNob3coKTtcbiAgICAgIH0pO1xuXG4gICAgICBlbGVtZW50LnBhcmVudCgpLmJpbmQoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVsZW1lbnQuaGlkZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FwcCcpXG4gICAgLmZpbHRlcigndW5lc2NhcGVkJywgdW5lc2NhcGVkKTtcblxuICB1bmVzY2FwZWQuJGluamVjdCA9IFsnJHNjZSddO1xuXG4gIGZ1bmN0aW9uIHVuZXNjYXBlZCgkc2NlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHJldHVybiAkc2NlLnRydXN0QXNIdG1sKHZhbCk7XG4gICAgfTtcbiAgfVxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdhcHAnKVxuICAgIC5mYWN0b3J5KCdhdXRoU2VydmljZScsIGF1dGhTZXJ2aWNlKTtcblxuICBhdXRoU2VydmljZS4kaW5qZWN0ID0gWyckaHR0cCcsICckbG9nJ107XG5cbiAgZnVuY3Rpb24gYXV0aFNlcnZpY2UoJGh0dHAsICRsb2cpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2lnbnVwOiBzaWdudXAsXG4gICAgICBsb2dpbjogbG9naW4sXG4gICAgICBsb2dvdXQ6IGxvZ291dFxuICAgIH07XG5cbiAgICAvLy8vLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIHNpZ251cCh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9zaWdudXAnLCBkYXRhKVxuICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGF1dGhTZXJ2aWNlLnNpZ251cCcpO1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9sb2dpbicsIGRhdGEpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgYXV0aFNlcnZpY2UubG9naW4nKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9sb2dvdXQnKVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGF1dGhTZXJ2aWNlLmxvZ291dCcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnYXBwJylcbiAgICAuZmFjdG9yeSgnbGF5b3V0U2VydmljZScsIGxheW91dFNlcnZpY2UpO1xuXG4gIGxheW91dFNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZyddO1xuXG4gIGZ1bmN0aW9uIGxheW91dFNlcnZpY2UoJGh0dHAsICRsb2cpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0VGVtcGxhdGU6IGdldFRlbXBsYXRlXG4gICAgfTtcblxuICAgIC8vLy8vLy8vLy8vL1xuXG4gICAgZnVuY3Rpb24gZ2V0VGVtcGxhdGUoaWQpIHtcbiAgICAgIHZhciBpZCA9IGlkIHx8ICdkZWZhdWx0JztcblxuICAgICAgcmV0dXJuICRodHRwLmdldCgnL3RlbXBsYXRlP3RlbXBsYXRlSUQ9JyArIGlkKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRUZW1wbGF0ZScpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnYXBwJylcbiAgICAuZmFjdG9yeSgncmVzdW1lU2VydmljZScsIHJlc3VtZVNlcnZpY2UpO1xuXG4gIHJlc3VtZVNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZyddO1xuXG4gIGZ1bmN0aW9uIHJlc3VtZVNlcnZpY2UoJGh0dHAsICRsb2cpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0UmVzdW1lRGF0YTogZ2V0UmVzdW1lRGF0YVxuICAgIH07XG5cbiAgICAvLy8vLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIGdldFJlc3VtZURhdGEoYXV0aFRva2VuKSB7XG4gICAgICB2YXIgZGF0YSA9IHthdXRoVG9rZW46IGF1dGhUb2tlbn07XG5cbiAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvcmVzdW1lJywgZGF0YSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0UmVzdW1lRGF0YScpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnYXBwJylcbiAgICAuZmFjdG9yeSgnc29ja2V0Jywgc29ja2V0KTtcblxuICBzb2NrZXQuJGluamVjdCA9IFsnJHJvb3RTY29wZSddO1xuXG4gIGZ1bmN0aW9uIHNvY2tldCgkcm9vdFNjb3BlKSB7XG4gICAgdmFyIHNvY2tldCA9IGlvLmNvbm5lY3QoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBvbjogb24sXG4gICAgICBlbWl0OiBlbWl0XG4gICAgfTtcblxuICAgIC8vLy8vLy8vLy8vL1xuXG4gICAgZnVuY3Rpb24gb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgc29ja2V0Lm9uKGV2ZW50TmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgJHJvb3RTY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHNvY2tldCwgYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW1pdChldmVudE5hbWUsIGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICBzb2NrZXQuZW1pdChldmVudE5hbWUsIGRhdGEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICRyb290U2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHNvY2tldCwgYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
