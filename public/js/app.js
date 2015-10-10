!function(){"use strict";angular.module("app",["ui.sortable"])}(),function(){"use strict";function e(e,t,n,o,a,u){function r(e,t){$.authToken=t,c(t),l()}function i(e,t){var n=angular.extend({},$.resume.sections[t]);$.resume.sections.splice(t,0,n),f(n,t)}function s(e,t){$.resume.sections.splice(t,1),p(t)}function c(e){a.getResumeData(e).then(function(e){$.resume=e})}function l(){var t=angular.element("div.margins");o.getTemplate().then(function(o){t.html(o),e(t.contents())(n)})}function f(e,t){if($.authToken&&"default"!==$.authToken){var n={authToken:$.authToken,newSection:e,sectionIndex:t};u.emit("add-section",n)}}function p(e){if($.authToken&&"default"!==$.authToken){var t={authToken:$.authToken,sectionIndex:e};u.emit("remove-section",t)}}function d(){if($.authToken&&"default"!==$.authToken){var e={authToken:$.authToken,sections:$.resume.sections};u.emit("sortable-event",e)}}function m(e){for(var t=$.resume,n=e.path.split("."),o=n.pop(),a=e.val,u=0,r=n.length;r>u;u++)t=t[n[u]];t[o]=a}function h(){var e=angular.element("#authToken").attr("value");t.$broadcast("auth-token",e)}function g(e){if($.authToken&&"default"!==$.authToken){var t={authToken:$.authToken,path:e.target.getAttribute("data"),val:e.target.innerHTML};m(t),u.emit("value-change",t)}}var v=t,$=this;$.authToken="",$.resume,$.init=h,$.emit=g,$.sortableSections={axis:"y",tolerance:"intersect",handle:".section-handle",cancel:".section-title",stop:function(e,t){d()}},v.$on("auth-token",r),v.$on("section added",i),v.$on("section removed",s)}angular.module("app").controller("appCtrl",e),e.$inject=["$compile","$rootScope","$scope","layoutService","resumeService","socket"]}(),function(){"use strict";function e(e,t,n,o){function a(t){angular.element("#authToken").attr("value",t),e.$broadcast("auth-token",t)}function u(e){angular.element(e).modal("hide"),r(),i()}function r(){angular.element("#suPassword").tooltip("hide"),d.suUsername="",d.suPassword="",d.suError=""}function i(){d.liUsername="",d.liPassword="",d.liError=""}function s(){n.signup(d.suUsername,d.suPassword).then(function(e){e.message?d.suError=e.message:(a(e.id),u("#suModal"))})}function c(){n.login(d.liUsername,d.liPassword).then(function(e){e.message?d.liError=e.message:(a(e.id),u("#liModal"))})}function l(){n.logout().then(function(){angular.element("#authToken").attr("value","default"),e.$broadcast("auth-token","default")})}function f(e){e.target.value.length<6?angular.element(e.target).tooltip("show"):angular.element(e.target).tooltip("hide")}function p(){var e={username:d.suUsername};o.emit("username",e)}var d=this,m=angular.element("#suUsername");d.suUsername,d.suPassword,d.suUsernameError="",d.suError="",d.liUsername,d.liPassword,d.liError="",d.signup=s,d.login=c,d.logout=l,d.suTooltip=f,d.validateUser=p,o.on("username available",function(){m.removeClass("unavailable")}),o.on("username unavailable",function(e){m.addClass("unavailable")})}angular.module("app").controller("authCtrl",e),e.$inject=["$rootScope","$scope","authService","socket"]}(),function(){"use strict";function e(e){return function(t){return e.trustAsHtml(t)}}angular.module("app").filter("unescaped",e),e.$inject=["$sce"]}(),function(){"use strict";function e(e,t){function n(n,o){var a={username:n,password:o};return e.post("/signup",a).then(function(e){return e.data},function(e){return t.error("XHR Failed for authService.signup"),e.data})}function o(n,o){var a={username:n,password:o};return e.post("/login",a).then(function(e){return e.data},function(e){return t.error("XHR Failed for authService.login"),e.data})}function a(){return e.post("/logout")["catch"](function(){t.error("XHR Failed for authService.logout")})}return{signup:n,login:o,logout:a}}angular.module("app").factory("authService",e),e.$inject=["$http","$log"]}(),function(){"use strict";function e(e,t){function n(n){var n=n||"default";return e.get("/template?templateID="+n).then(function(e){return e.data})["catch"](function(){t.error("XHR Failed for getTemplate")})}return{getTemplate:n}}angular.module("app").factory("layoutService",e),e.$inject=["$http","$log"]}(),function(){"use strict";function e(e,t){function n(n){var o={authToken:n};return e.post("/resume",o).then(function(e){return e.data})["catch"](function(){t.error("XHR Failed for getResumeData")})}return{getResumeData:n}}angular.module("app").factory("resumeService",e),e.$inject=["$http","$log"]}(),function(){"use strict";function e(e){function t(t,n){o.on(t,function(){var t=arguments;e.$apply(function(){n.apply(o,t)})})}function n(t,n,a){o.emit(t,n,function(){var t=arguments;e.$apply(function(){a&&a.apply(o,t)})})}var o=io.connect();return{on:t,emit:n}}angular.module("app").factory("socket",e),e.$inject=["$rootScope"]}(),function(){"use strict";function e(e){function t(t,n,o){t.add=function(t,n){e.$broadcast("section added",n)},n.parent().bind("mouseenter",function(){n.show()}),n.parent().bind("mouseleave",function(){n.hide()})}return{restrict:"E",template:'<button type="button" class="close"><span>+</span></button>',link:t}}angular.module("app").directive("prAdd",e),e.$inject=["$rootScope"]}(),function(){"use strict";function e(e){function t(t,n,o){t.remove=function(t,n){e.$broadcast("section removed",n)},n.parent().bind("mouseenter",function(){n.show()}),n.parent().bind("mouseleave",function(){n.hide()})}return{restrict:"E",template:'<button type="button" class="close"><span>×</span></button>',link:t}}angular.module("app").directive("prRemove",e),e.$inject=["$rootScope"]}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL21vZHVsZXMvYXBwLm1vZHVsZS5qcyIsImpzL2NvbnRyb2xsZXJzL2FwcC5jb250cm9sbGVyLmpzIiwianMvY29udHJvbGxlcnMvYXV0aC5jb250cm9sbGVyLmpzIiwianMvZmlsdGVycy91bmVzY2FwZWQuZmlsdGVyLmpzIiwianMvc2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIiwianMvc2VydmljZXMvbGF5b3V0LnNlcnZpY2UuanMiLCJqcy9zZXJ2aWNlcy9yZXN1bWUuc2VydmljZS5qcyIsImpzL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlLmpzIiwianMvZGlyZWN0aXZlcy9hZGQuZGlyZWN0aXZlLmpzIiwianMvZGlyZWN0aXZlcy9yZW1vdmUuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJhcHBDdHJsIiwiJGNvbXBpbGUiLCIkcm9vdFNjb3BlIiwiJHNjb3BlIiwibGF5b3V0U2VydmljZSIsInJlc3VtZVNlcnZpY2UiLCJzb2NrZXQiLCJvbkF1dGhUb2tlbkNoYW5nZSIsImV2ZW50IiwiYXV0aFRva2VuIiwidm0iLCJ1cGRhdGVSZXN1bWVEYXRhIiwicmVuZGVyTGF5b3V0Iiwib25TZWN0aW9uQWRkZWQiLCJzZWN0aW9uSW5kZXgiLCJuZXdTZWN0aW9uIiwiZXh0ZW5kIiwicmVzdW1lIiwic2VjdGlvbnMiLCJzcGxpY2UiLCJlbWl0QWRkU2VjdGlvbiIsIm9uU2VjdGlvblJlbW92ZWQiLCJlbWl0UmVtb3ZlU2VjdGlvbiIsImdldFJlc3VtZURhdGEiLCJ0aGVuIiwiZGF0YSIsImNvbnRhaW5lciIsImVsZW1lbnQiLCJnZXRUZW1wbGF0ZSIsImh0bWwiLCJjb250ZW50cyIsImVtaXQiLCJlbWl0U29ydGFibGVVcGRhdGUiLCJ1cGRhdGVWbSIsImJhc2UiLCJwYXRoIiwic3BsaXQiLCJhdHRyIiwicG9wIiwidmFsIiwiaSIsImxlbiIsImxlbmd0aCIsImluaXQiLCIkYnJvYWRjYXN0IiwiJGV2ZW50IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwic2NvcGUiLCJ0aGlzIiwic29ydGFibGVTZWN0aW9ucyIsImF4aXMiLCJ0b2xlcmFuY2UiLCJoYW5kbGUiLCJjYW5jZWwiLCJzdG9wIiwidWkiLCIkb24iLCJjb250cm9sbGVyIiwiJGluamVjdCIsImF1dGhDdHJsIiwiYXV0aFNlcnZpY2UiLCJ1cGRhdGVBdXRoVG9rZW4iLCJjbGVhbnVwTW9kYWwiLCJlbGVtZW50SUQiLCJtb2RhbCIsInN1Q2xlYXIiLCJsaUNsZWFyIiwidG9vbHRpcCIsInN1VXNlcm5hbWUiLCJzdVBhc3N3b3JkIiwic3VFcnJvciIsImxpVXNlcm5hbWUiLCJsaVBhc3N3b3JkIiwibGlFcnJvciIsInNpZ251cCIsIm1lc3NhZ2UiLCJpZCIsImxvZ2luIiwibG9nb3V0Iiwic3VUb29sdGlwIiwidmFsdWUiLCJ2YWxpZGF0ZVVzZXIiLCJ1c2VybmFtZSIsInN1VXNlcm5hbWVFcnJvciIsIm9uIiwicmVtb3ZlQ2xhc3MiLCJ1c2VyIiwiYWRkQ2xhc3MiLCJ1bmVzY2FwZWQiLCIkc2NlIiwidHJ1c3RBc0h0bWwiLCJmaWx0ZXIiLCIkaHR0cCIsIiRsb2ciLCJwYXNzd29yZCIsInBvc3QiLCJyZXNwb25zZSIsImVycm9yIiwiZmFjdG9yeSIsImdldCIsImV2ZW50TmFtZSIsImNhbGxiYWNrIiwiYXJncyIsImFyZ3VtZW50cyIsIiRhcHBseSIsImFwcGx5IiwiaW8iLCJjb25uZWN0IiwicHJBZGQiLCJsaW5rIiwiYXR0cnMiLCJhZGQiLCJwYXJlbnQiLCJiaW5kIiwic2hvdyIsImhpZGUiLCJyZXN0cmljdCIsInRlbXBsYXRlIiwiZGlyZWN0aXZlIiwicHJSZW1vdmUiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiJDQUFBLFdBQ0EsWUFFQUEsU0FDQUMsT0FBQSxPQUFBLG1CQ0pBLFdBQ0EsWUFRQSxTQUFBQyxHQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxHQTJDQSxRQUFBQyxHQUFBQyxFQUFBQyxHQUNBQyxFQUFBRCxVQUFBQSxFQUNBRSxFQUFBRixHQUNBRyxJQUdBLFFBQUFDLEdBQUFMLEVBQUFNLEdBQ0EsR0FBQUMsR0FBQWpCLFFBQUFrQixVQUFBTixFQUFBTyxPQUFBQyxTQUFBSixHQUVBSixHQUFBTyxPQUFBQyxTQUFBQyxPQUFBTCxFQUFBLEVBQUFDLEdBQ0FLLEVBQUFMLEVBQUFELEdBR0EsUUFBQU8sR0FBQWIsRUFBQU0sR0FDQUosRUFBQU8sT0FBQUMsU0FBQUMsT0FBQUwsRUFBQSxHQUNBUSxFQUFBUixHQUlBLFFBQUFILEdBQUFGLEdBQ0FKLEVBQUFrQixjQUFBZCxHQUNBZSxLQUFBLFNBQUFDLEdBQ0FmLEVBQUFPLE9BQUFRLElBSUEsUUFBQWIsS0FDQSxHQUFBYyxHQUFBNUIsUUFBQTZCLFFBQUEsY0FFQXZCLEdBQUF3QixjQUNBSixLQUFBLFNBQUFDLEdBQ0FDLEVBQUFHLEtBQUFKLEdBQ0F4QixFQUFBeUIsRUFBQUksWUFBQTNCLEtBSUEsUUFBQWlCLEdBQUFMLEVBQUFELEdBQ0EsR0FBQUosRUFBQUQsV0FBQSxZQUFBQyxFQUFBRCxVQUFBLENBQ0EsR0FBQWdCLElBQ0FoQixVQUFBQyxFQUFBRCxVQUNBTSxXQUFBQSxFQUNBRCxhQUFBQSxFQUdBUixHQUFBeUIsS0FBQSxjQUFBTixJQUlBLFFBQUFILEdBQUFSLEdBQ0EsR0FBQUosRUFBQUQsV0FBQSxZQUFBQyxFQUFBRCxVQUFBLENBQ0EsR0FBQWdCLElBQ0FoQixVQUFBQyxFQUFBRCxVQUNBSyxhQUFBQSxFQUdBUixHQUFBeUIsS0FBQSxpQkFBQU4sSUFJQSxRQUFBTyxLQUNBLEdBQUF0QixFQUFBRCxXQUFBLFlBQUFDLEVBQUFELFVBQUEsQ0FDQSxHQUFBZ0IsSUFDQWhCLFVBQUFDLEVBQUFELFVBQ0FTLFNBQUFSLEVBQUFPLE9BQUFDLFNBR0FaLEdBQUF5QixLQUFBLGlCQUFBTixJQUlBLFFBQUFRLEdBQUFSLEdBTUEsSUFBQSxHQUxBUyxHQUFBeEIsRUFBQU8sT0FDQWtCLEVBQUFWLEVBQUFVLEtBQUFDLE1BQUEsS0FDQUMsRUFBQUYsRUFBQUcsTUFDQUMsRUFBQWQsRUFBQWMsSUFFQUMsRUFBQSxFQUFBQyxFQUFBTixFQUFBTyxPQUFBRCxFQUFBRCxFQUFBQSxJQUNBTixFQUFBQSxFQUFBQyxFQUFBSyxHQUdBTixHQUFBRyxHQUFBRSxFQUlBLFFBQUFJLEtBQ0EsR0FBQWxDLEdBQUFYLFFBQUE2QixRQUFBLGNBQUFVLEtBQUEsUUFDQW5DLEdBQUEwQyxXQUFBLGFBQUFuQyxHQUdBLFFBQUFzQixHQUFBYyxHQUNBLEdBQUFuQyxFQUFBRCxXQUFBLFlBQUFDLEVBQUFELFVBQUEsQ0FDQSxHQUFBZ0IsSUFDQWhCLFVBQUFDLEVBQUFELFVBQ0EwQixLQUFBVSxFQUFBQyxPQUFBQyxhQUFBLFFBQ0FSLElBQUFNLEVBQUFDLE9BQUFFLFVBR0FmLEdBQUFSLEdBQ0FuQixFQUFBeUIsS0FBQSxlQUFBTixJQTVJQSxHQUFBd0IsR0FBQS9DLEVBQ0FRLEVBQUF3QyxJQUdBeEMsR0FBQUQsVUFBQSxHQUNBQyxFQUFBTyxPQUVBUCxFQUFBaUMsS0FBQUEsRUFDQWpDLEVBQUFxQixLQUFBQSxFQUdBckIsRUFBQXlDLGtCQUNBQyxLQUFBLElBQ0FDLFVBQUEsWUFDQUMsT0FBQSxrQkFDQUMsT0FBQSxpQkFDQUMsS0FBQSxTQUFBaEQsRUFBQWlELEdBQ0F6QixNQXFCQWlCLEVBQUFTLElBQUEsYUFBQW5ELEdBQ0EwQyxFQUFBUyxJQUFBLGdCQUFBN0MsR0FDQW9DLEVBQUFTLElBQUEsa0JBQUFyQyxHQS9DQXZCLFFBQ0FDLE9BQUEsT0FDQTRELFdBQUEsVUFBQTNELEdBRUFBLEVBQUE0RCxTQUFBLFdBQUEsYUFBQSxTQUFBLGdCQUFBLGdCQUFBLGFDUEEsV0FDQSxZQVFBLFNBQUFDLEdBQUEzRCxFQUFBQyxFQUFBMkQsRUFBQXhELEdBK0JBLFFBQUF5RCxHQUFBdEQsR0FDQVgsUUFBQTZCLFFBQUEsY0FBQVUsS0FBQSxRQUFBNUIsR0FDQVAsRUFBQTBDLFdBQUEsYUFBQW5DLEdBR0EsUUFBQXVELEdBQUFDLEdBQ0FuRSxRQUFBNkIsUUFBQXNDLEdBQUFDLE1BQUEsUUFDQUMsSUFDQUMsSUFHQSxRQUFBRCxLQUNBckUsUUFBQTZCLFFBQUEsZUFBQTBDLFFBQUEsUUFDQTNELEVBQUE0RCxXQUFBLEdBQ0E1RCxFQUFBNkQsV0FBQSxHQUNBN0QsRUFBQThELFFBQUEsR0FHQSxRQUFBSixLQUNBMUQsRUFBQStELFdBQUEsR0FDQS9ELEVBQUFnRSxXQUFBLEdBQ0FoRSxFQUFBaUUsUUFBQSxHQUlBLFFBQUFDLEtBQ0FkLEVBQUFjLE9BQUFsRSxFQUFBNEQsV0FBQTVELEVBQUE2RCxZQUNBL0MsS0FBQSxTQUFBQyxHQUNBQSxFQUFBb0QsUUFDQW5FLEVBQUE4RCxRQUFBL0MsRUFBQW9ELFNBRUFkLEVBQUF0QyxFQUFBcUQsSUFDQWQsRUFBQSxlQUtBLFFBQUFlLEtBQ0FqQixFQUFBaUIsTUFBQXJFLEVBQUErRCxXQUFBL0QsRUFBQWdFLFlBQ0FsRCxLQUFBLFNBQUFDLEdBQ0FBLEVBQUFvRCxRQUNBbkUsRUFBQWlFLFFBQUFsRCxFQUFBb0QsU0FFQWQsRUFBQXRDLEVBQUFxRCxJQUNBZCxFQUFBLGVBS0EsUUFBQWdCLEtBQ0FsQixFQUFBa0IsU0FDQXhELEtBQUEsV0FDQTFCLFFBQUE2QixRQUFBLGNBQUFVLEtBQUEsUUFBQSxXQUNBbkMsRUFBQTBDLFdBQUEsYUFBQSxhQUlBLFFBQUFxQyxHQUFBcEMsR0FFQUEsRUFBQUMsT0FBQW9DLE1BQUF4QyxPQUFBLEVBQ0E1QyxRQUFBNkIsUUFBQWtCLEVBQUFDLFFBQUF1QixRQUFBLFFBRUF2RSxRQUFBNkIsUUFBQWtCLEVBQUFDLFFBQUF1QixRQUFBLFFBSUEsUUFBQWMsS0FDQSxHQUFBMUQsSUFBQTJELFNBQUExRSxFQUFBNEQsV0FFQWhFLEdBQUF5QixLQUFBLFdBQUFOLEdBbkdBLEdBQUFmLEdBQUF3QyxLQUNBb0IsRUFBQXhFLFFBQUE2QixRQUFBLGNBR0FqQixHQUFBNEQsV0FDQTVELEVBQUE2RCxXQUNBN0QsRUFBQTJFLGdCQUFBLEdBQ0EzRSxFQUFBOEQsUUFBQSxHQUVBOUQsRUFBQStELFdBQ0EvRCxFQUFBZ0UsV0FDQWhFLEVBQUFpRSxRQUFBLEdBRUFqRSxFQUFBa0UsT0FBQUEsRUFDQWxFLEVBQUFxRSxNQUFBQSxFQUNBckUsRUFBQXNFLE9BQUFBLEVBQ0F0RSxFQUFBdUUsVUFBQUEsRUFDQXZFLEVBQUF5RSxhQUFBQSxFQUdBN0UsRUFBQWdGLEdBQUEscUJBQUEsV0FDQWhCLEVBQUFpQixZQUFBLGlCQUdBakYsRUFBQWdGLEdBQUEsdUJBQUEsU0FBQUUsR0FDQWxCLEVBQUFtQixTQUFBLGlCQWhDQTNGLFFBQ0FDLE9BQUEsT0FDQTRELFdBQUEsV0FBQUUsR0FFQUEsRUFBQUQsU0FBQSxhQUFBLFNBQUEsY0FBQSxhQ1BBLFdBQ0EsWUFRQSxTQUFBOEIsR0FBQUMsR0FDQSxNQUFBLFVBQUFwRCxHQUNBLE1BQUFvRCxHQUFBQyxZQUFBckQsSUFSQXpDLFFBQ0FDLE9BQUEsT0FDQThGLE9BQUEsWUFBQUgsR0FFQUEsRUFBQTlCLFNBQUEsV0NQQSxXQUNBLFlBUUEsU0FBQUUsR0FBQWdDLEVBQUFDLEdBU0EsUUFBQW5CLEdBQUFRLEVBQUFZLEdBQ0EsR0FBQXZFLElBQ0EyRCxTQUFBQSxFQUNBWSxTQUFBQSxFQUdBLE9BQUFGLEdBQUFHLEtBQUEsVUFBQXhFLEdBQ0FELEtBQUEsU0FBQTBFLEdBQ0EsTUFBQUEsR0FBQXpFLE1BQ0EsU0FBQXlFLEdBRUEsTUFEQUgsR0FBQUksTUFBQSxxQ0FDQUQsRUFBQXpFLE9BSUEsUUFBQXNELEdBQUFLLEVBQUFZLEdBQ0EsR0FBQXZFLElBQ0EyRCxTQUFBQSxFQUNBWSxTQUFBQSxFQUdBLE9BQUFGLEdBQUFHLEtBQUEsU0FBQXhFLEdBQ0FELEtBQUEsU0FBQTBFLEdBQ0EsTUFBQUEsR0FBQXpFLE1BQ0EsU0FBQXlFLEdBRUEsTUFEQUgsR0FBQUksTUFBQSxvQ0FDQUQsRUFBQXpFLE9BSUEsUUFBQXVELEtBQ0EsTUFBQWMsR0FBQUcsS0FBQSxXQUFBSCxTQUNBLFdBQ0FDLEVBQUFJLE1BQUEsdUNBekNBLE9BQ0F2QixPQUFBQSxFQUNBRyxNQUFBQSxFQUNBQyxPQUFBQSxHQVZBbEYsUUFDQUMsT0FBQSxPQUNBcUcsUUFBQSxjQUFBdEMsR0FFQUEsRUFBQUYsU0FBQSxRQUFBLFdDUEEsV0FDQSxZQVFBLFNBQUF4RCxHQUFBMEYsRUFBQUMsR0FPQSxRQUFBbkUsR0FBQWtELEdBQ0EsR0FBQUEsR0FBQUEsR0FBQSxTQUVBLE9BQUFnQixHQUFBTyxJQUFBLHdCQUFBdkIsR0FDQXRELEtBQUEsU0FBQTBFLEdBQ0EsTUFBQUEsR0FBQXpFLE9BRkFxRSxTQUlBLFdBQ0FDLEVBQUFJLE1BQUEsZ0NBZEEsT0FDQXZFLFlBQUFBLEdBUkE5QixRQUNBQyxPQUFBLE9BQ0FxRyxRQUFBLGdCQUFBaEcsR0FFQUEsRUFBQXdELFNBQUEsUUFBQSxXQ1BBLFdBQ0EsWUFRQSxTQUFBdkQsR0FBQXlGLEVBQUFDLEdBT0EsUUFBQXhFLEdBQUFkLEdBQ0EsR0FBQWdCLElBQUFoQixVQUFBQSxFQUVBLE9BQUFxRixHQUFBRyxLQUFBLFVBQUF4RSxHQUNBRCxLQUFBLFNBQUEwRSxHQUNBLE1BQUFBLEdBQUF6RSxPQUZBcUUsU0FJQSxXQUNBQyxFQUFBSSxNQUFBLGtDQWRBLE9BQ0E1RSxjQUFBQSxHQVJBekIsUUFDQUMsT0FBQSxPQUNBcUcsUUFBQSxnQkFBQS9GLEdBRUFBLEVBQUF1RCxTQUFBLFFBQUEsV0NQQSxXQUNBLFlBUUEsU0FBQXRELEdBQUFKLEdBVUEsUUFBQW9GLEdBQUFnQixFQUFBQyxHQUNBakcsRUFBQWdGLEdBQUFnQixFQUFBLFdBQ0EsR0FBQUUsR0FBQUMsU0FDQXZHLEdBQUF3RyxPQUFBLFdBQ0FILEVBQUFJLE1BQUFyRyxFQUFBa0csT0FLQSxRQUFBekUsR0FBQXVFLEVBQUE3RSxFQUFBOEUsR0FDQWpHLEVBQUF5QixLQUFBdUUsRUFBQTdFLEVBQUEsV0FDQSxHQUFBK0UsR0FBQUMsU0FDQXZHLEdBQUF3RyxPQUFBLFdBQ0FILEdBQ0FBLEVBQUFJLE1BQUFyRyxFQUFBa0csT0F2QkEsR0FBQWxHLEdBQUFzRyxHQUFBQyxTQUVBLFFBQ0F2QixHQUFBQSxFQUNBdkQsS0FBQUEsR0FYQWpDLFFBQ0FDLE9BQUEsT0FDQXFHLFFBQUEsU0FBQTlGLEdBRUFBLEVBQUFzRCxTQUFBLGlCQ1BBLFdBQ0EsWUFRQSxTQUFBa0QsR0FBQTVHLEdBT0EsUUFBQTZHLEdBQUE5RCxFQUFBdEIsRUFBQXFGLEdBQ0EvRCxFQUFBZ0UsSUFBQSxTQUFBekcsRUFBQU0sR0FDQVosRUFBQTBDLFdBQUEsZ0JBQUE5QixJQUdBYSxFQUFBdUYsU0FBQUMsS0FBQSxhQUFBLFdBQ0F4RixFQUFBeUYsU0FHQXpGLEVBQUF1RixTQUFBQyxLQUFBLGFBQUEsV0FDQXhGLEVBQUEwRixTQWhCQSxPQUNBQyxTQUFBLElBQ0FDLFNBQUEsOERBQ0FSLEtBQUFBLEdBVkFqSCxRQUNBQyxPQUFBLE9BQ0F5SCxVQUFBLFFBQUFWLEdBRUFBLEVBQUFsRCxTQUFBLGlCQ1BBLFdBQ0EsWUFRQSxTQUFBNkQsR0FBQXZILEdBT0EsUUFBQTZHLEdBQUE5RCxFQUFBdEIsRUFBQXFGLEdBQ0EvRCxFQUFBeUUsT0FBQSxTQUFBbEgsRUFBQU0sR0FDQVosRUFBQTBDLFdBQUEsa0JBQUE5QixJQUdBYSxFQUFBdUYsU0FBQUMsS0FBQSxhQUFBLFdBQ0F4RixFQUFBeUYsU0FHQXpGLEVBQUF1RixTQUFBQyxLQUFBLGFBQUEsV0FDQXhGLEVBQUEwRixTQWhCQSxPQUNBQyxTQUFBLElBQ0FDLFNBQUEsOERBQ0FSLEtBQUFBLEdBVkFqSCxRQUNBQyxPQUFBLE9BQ0F5SCxVQUFBLFdBQUFDLEdBRUFBLEVBQUE3RCxTQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdhcHAnLCBbJ3VpLnNvcnRhYmxlJ10pO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FwcCcpXG4gICAgLmNvbnRyb2xsZXIoJ2FwcEN0cmwnLCBhcHBDdHJsKTtcblxuICBhcHBDdHJsLiRpbmplY3QgPSBbJyRjb21waWxlJywgJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJ2xheW91dFNlcnZpY2UnLCAncmVzdW1lU2VydmljZScsICdzb2NrZXQnXTtcblxuICBmdW5jdGlvbiBhcHBDdHJsKCRjb21waWxlLCAkcm9vdFNjb3BlLCAkc2NvcGUsIGxheW91dFNlcnZpY2UsIHJlc3VtZVNlcnZpY2UsIHNvY2tldCkge1xuICAgIHZhciBzY29wZSA9ICRyb290U2NvcGU7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8qIFZJRVdNT0RFTCBCSU5ESU5HUyAqL1xuICAgIHZtLmF1dGhUb2tlbiA9ICcnO1xuICAgIHZtLnJlc3VtZTtcblxuICAgIHZtLmluaXQgPSBpbml0O1xuICAgIHZtLmVtaXQgPSBlbWl0O1xuXG4gICAgLyogVUkuU09SVEFCTEUgT1BUSU9OUyAqL1xuICAgIHZtLnNvcnRhYmxlU2VjdGlvbnMgPSB7XG4gICAgICBheGlzOiAneScsXG4gICAgICB0b2xlcmFuY2U6ICdpbnRlcnNlY3QnLFxuICAgICAgaGFuZGxlOiAnLnNlY3Rpb24taGFuZGxlJyxcbiAgICAgIGNhbmNlbDogJy5zZWN0aW9uLXRpdGxlJyxcbiAgICAgIHN0b3A6IGZ1bmN0aW9uKGV2ZW50LCB1aSkgeyAvLyB1c2Ugc3RvcCBiZWNhdXNlIGl0IGlzIGFscmVhZHkgd3JhcHBlZCB3aXRoICRhcHBseVxuICAgICAgICBlbWl0U29ydGFibGVVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gVE9ETzogY29udmVydCB0byBhbmd1bGFyLXVpIHNvcnRhYmxlIHdoZW4gc2VjdGlvbnMgaW1wbGVtZW50YXRpb24gaXMgZmluaXNoZWRcbiAgICAvLyAkKCcuc29ydGFibGVFbnRyaWVzJykuc29ydGFibGUoe1xuICAgIC8vICAgYXhpczogJ3knLFxuICAgIC8vICAgdG9sZXJhbmNlOiAnaW50ZXJzZWN0JyxcbiAgICAvLyAgIGhhbmRsZTogJy5lbnRyeScsXG4gICAgLy8gICB1cGRhdGU6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgIC8vXG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyAkKCcuc2VjdGlvbi1oYW5kbGUnKS5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAvLyAgICQodGhpcykucGFyZW50KCkuY3NzKCdib3JkZXItY29sb3InLCAnIzAwMCcpO1xuICAgIC8vIH0sIGZ1bmN0aW9uKCkge1xuICAgIC8vICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ2JvcmRlci1jb2xvcicsICd0cmFuc3BhcmVudCcpO1xuICAgIC8vIH0pO1xuXG4gICAgLyogRVZFTlQgTElTVEVORVJTIChBTkdVTEFSKSAqL1xuICAgIHNjb3BlLiRvbignYXV0aC10b2tlbicsIG9uQXV0aFRva2VuQ2hhbmdlKTtcbiAgICBzY29wZS4kb24oJ3NlY3Rpb24gYWRkZWQnLCBvblNlY3Rpb25BZGRlZCk7XG4gICAgc2NvcGUuJG9uKCdzZWN0aW9uIHJlbW92ZWQnLCBvblNlY3Rpb25SZW1vdmVkKTtcblxuICAgIGZ1bmN0aW9uIG9uQXV0aFRva2VuQ2hhbmdlKGV2ZW50LCBhdXRoVG9rZW4pIHtcbiAgICAgIHZtLmF1dGhUb2tlbiA9IGF1dGhUb2tlbjtcbiAgICAgIHVwZGF0ZVJlc3VtZURhdGEoYXV0aFRva2VuKTtcbiAgICAgIHJlbmRlckxheW91dCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU2VjdGlvbkFkZGVkKGV2ZW50LCBzZWN0aW9uSW5kZXgpIHtcbiAgICAgIHZhciBuZXdTZWN0aW9uID0gYW5ndWxhci5leHRlbmQoe30sIHZtLnJlc3VtZS5zZWN0aW9uc1tzZWN0aW9uSW5kZXhdKTtcblxuICAgICAgdm0ucmVzdW1lLnNlY3Rpb25zLnNwbGljZShzZWN0aW9uSW5kZXgsIDAsIG5ld1NlY3Rpb24pO1xuICAgICAgZW1pdEFkZFNlY3Rpb24obmV3U2VjdGlvbiwgc2VjdGlvbkluZGV4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblNlY3Rpb25SZW1vdmVkKGV2ZW50LCBzZWN0aW9uSW5kZXgpIHtcbiAgICAgIHZtLnJlc3VtZS5zZWN0aW9ucy5zcGxpY2Uoc2VjdGlvbkluZGV4LCAxKTtcbiAgICAgIGVtaXRSZW1vdmVTZWN0aW9uKHNlY3Rpb25JbmRleCk7XG4gICAgfVxuXG4gICAgLyogUFJJVkFURSBGVU5DVElPTlMgKi9cbiAgICBmdW5jdGlvbiB1cGRhdGVSZXN1bWVEYXRhKGF1dGhUb2tlbikge1xuICAgICAgcmVzdW1lU2VydmljZS5nZXRSZXN1bWVEYXRhKGF1dGhUb2tlbilcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICB2bS5yZXN1bWUgPSBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJMYXlvdXQoKSB7XG4gICAgICB2YXIgY29udGFpbmVyID0gYW5ndWxhci5lbGVtZW50KCdkaXYubWFyZ2lucycpO1xuXG4gICAgICBsYXlvdXRTZXJ2aWNlLmdldFRlbXBsYXRlKClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBjb250YWluZXIuaHRtbChkYXRhKTtcbiAgICAgICAgICAkY29tcGlsZShjb250YWluZXIuY29udGVudHMoKSkoJHNjb3BlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW1pdEFkZFNlY3Rpb24obmV3U2VjdGlvbiwgc2VjdGlvbkluZGV4KSB7XG4gICAgICBpZiAodm0uYXV0aFRva2VuICYmIHZtLmF1dGhUb2tlbiAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgIGF1dGhUb2tlbjogdm0uYXV0aFRva2VuLFxuICAgICAgICAgIG5ld1NlY3Rpb246IG5ld1NlY3Rpb24sXG4gICAgICAgICAgc2VjdGlvbkluZGV4OiBzZWN0aW9uSW5kZXhcbiAgICAgICAgfTtcblxuICAgICAgICBzb2NrZXQuZW1pdCgnYWRkLXNlY3Rpb24nLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbWl0UmVtb3ZlU2VjdGlvbihzZWN0aW9uSW5kZXgpIHtcbiAgICAgIGlmICh2bS5hdXRoVG9rZW4gJiYgdm0uYXV0aFRva2VuICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgYXV0aFRva2VuOiB2bS5hdXRoVG9rZW4sXG4gICAgICAgICAgc2VjdGlvbkluZGV4OiBzZWN0aW9uSW5kZXhcbiAgICAgICAgfTtcblxuICAgICAgICBzb2NrZXQuZW1pdCgncmVtb3ZlLXNlY3Rpb24nLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbWl0U29ydGFibGVVcGRhdGUoKSB7XG4gICAgICBpZiAodm0uYXV0aFRva2VuICYmIHZtLmF1dGhUb2tlbiAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgIGF1dGhUb2tlbjogdm0uYXV0aFRva2VuLFxuICAgICAgICAgIHNlY3Rpb25zOiB2bS5yZXN1bWUuc2VjdGlvbnNcbiAgICAgICAgfTtcblxuICAgICAgICBzb2NrZXQuZW1pdCgnc29ydGFibGUtZXZlbnQnLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVWbShkYXRhKSB7XG4gICAgICB2YXIgYmFzZSA9IHZtLnJlc3VtZTtcbiAgICAgIHZhciBwYXRoID0gZGF0YS5wYXRoLnNwbGl0KCcuJyk7XG4gICAgICB2YXIgYXR0ciA9IHBhdGgucG9wKCk7XG4gICAgICB2YXIgdmFsID0gZGF0YS52YWw7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXRoLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGJhc2UgPSBiYXNlW3BhdGhbaV1dO1xuICAgICAgfVxuXG4gICAgICBiYXNlW2F0dHJdID0gdmFsO1xuICAgIH1cblxuICAgIC8qIFBVQkxJQyBGVU5DVElPTiBJTVBMRU1FTlRBVElPTlMgKi9cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdmFyIGF1dGhUb2tlbiA9IGFuZ3VsYXIuZWxlbWVudCgnI2F1dGhUb2tlbicpLmF0dHIoJ3ZhbHVlJyk7XG4gICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2F1dGgtdG9rZW4nLCBhdXRoVG9rZW4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVtaXQoJGV2ZW50KSB7XG4gICAgICBpZiAodm0uYXV0aFRva2VuICYmIHZtLmF1dGhUb2tlbiAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgIGF1dGhUb2tlbjogdm0uYXV0aFRva2VuLFxuICAgICAgICAgIHBhdGg6ICRldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhJyksXG4gICAgICAgICAgdmFsOiAkZXZlbnQudGFyZ2V0LmlubmVySFRNTFxuICAgICAgICB9O1xuXG4gICAgICAgIHVwZGF0ZVZtKGRhdGEpO1xuICAgICAgICBzb2NrZXQuZW1pdCgndmFsdWUtY2hhbmdlJywgZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FwcCcpXG4gICAgLmNvbnRyb2xsZXIoJ2F1dGhDdHJsJywgYXV0aEN0cmwpO1xuXG4gIGF1dGhDdHJsLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJ2F1dGhTZXJ2aWNlJywgJ3NvY2tldCddO1xuXG4gIGZ1bmN0aW9uIGF1dGhDdHJsKCRyb290U2NvcGUsICRzY29wZSwgYXV0aFNlcnZpY2UsIHNvY2tldCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdmFyIHN1VXNlcm5hbWUgPSBhbmd1bGFyLmVsZW1lbnQoJyNzdVVzZXJuYW1lJyk7XG5cbiAgICAvKiBWSUVXTU9ERUwgQklORElOR1MgKi9cbiAgICB2bS5zdVVzZXJuYW1lO1xuICAgIHZtLnN1UGFzc3dvcmQ7XG4gICAgdm0uc3VVc2VybmFtZUVycm9yID0gJyc7XG4gICAgdm0uc3VFcnJvciA9ICcnO1xuXG4gICAgdm0ubGlVc2VybmFtZTtcbiAgICB2bS5saVBhc3N3b3JkO1xuICAgIHZtLmxpRXJyb3IgPSAnJztcblxuICAgIHZtLnNpZ251cCA9IHNpZ251cDtcbiAgICB2bS5sb2dpbiA9IGxvZ2luO1xuICAgIHZtLmxvZ291dCA9IGxvZ291dDtcbiAgICB2bS5zdVRvb2x0aXAgPSBzdVRvb2x0aXA7XG4gICAgdm0udmFsaWRhdGVVc2VyID0gdmFsaWRhdGVVc2VyO1xuXG4gICAgLyogRVZFTlQgTElTVEVORVJTIChTT0NLRVQuSU8pICovXG4gICAgc29ja2V0Lm9uKCd1c2VybmFtZSBhdmFpbGFibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzdVVzZXJuYW1lLnJlbW92ZUNsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKCd1c2VybmFtZSB1bmF2YWlsYWJsZScsIGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICBzdVVzZXJuYW1lLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgLy8gdm0uc3VTb2NrZXRNc2cgPSB1c2VyLnVzZXJuYW1lICsgJyBpcyBhbHJlYWR5IHRha2VuLic7XG4gICAgfSk7XG5cbiAgICAvKiBQUklWQVRFIEZVTkNUSU9OUyAqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUF1dGhUb2tlbihhdXRoVG9rZW4pIHtcbiAgICAgIGFuZ3VsYXIuZWxlbWVudCgnI2F1dGhUb2tlbicpLmF0dHIoJ3ZhbHVlJywgYXV0aFRva2VuKTtcbiAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnYXV0aC10b2tlbicsIGF1dGhUb2tlbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cE1vZGFsKGVsZW1lbnRJRCkge1xuICAgICAgYW5ndWxhci5lbGVtZW50KGVsZW1lbnRJRCkubW9kYWwoJ2hpZGUnKTtcbiAgICAgIHN1Q2xlYXIoKTtcbiAgICAgIGxpQ2xlYXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdUNsZWFyKCkge1xuICAgICAgYW5ndWxhci5lbGVtZW50KCcjc3VQYXNzd29yZCcpLnRvb2x0aXAoJ2hpZGUnKTtcbiAgICAgIHZtLnN1VXNlcm5hbWUgPSAnJztcbiAgICAgIHZtLnN1UGFzc3dvcmQgPSAnJztcbiAgICAgIHZtLnN1RXJyb3IgPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaUNsZWFyKCkge1xuICAgICAgdm0ubGlVc2VybmFtZSA9ICcnO1xuICAgICAgdm0ubGlQYXNzd29yZCA9ICcnO1xuICAgICAgdm0ubGlFcnJvciA9ICcnO1xuICAgIH1cblxuICAgIC8qIFBVQkxJQyBGVU5DVElPTiBJTVBMRU1FTlRBVElPTlMgKi9cbiAgICBmdW5jdGlvbiBzaWdudXAoKSB7XG4gICAgICBhdXRoU2VydmljZS5zaWdudXAodm0uc3VVc2VybmFtZSwgdm0uc3VQYXNzd29yZClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBpZiAoZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgICAgICB2bS5zdUVycm9yID0gZGF0YS5tZXNzYWdlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cGRhdGVBdXRoVG9rZW4oZGF0YS5pZCk7XG4gICAgICAgICAgICBjbGVhbnVwTW9kYWwoJyNzdU1vZGFsJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2dpbigpIHtcbiAgICAgIGF1dGhTZXJ2aWNlLmxvZ2luKHZtLmxpVXNlcm5hbWUsIHZtLmxpUGFzc3dvcmQpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgdm0ubGlFcnJvciA9IGRhdGEubWVzc2FnZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cGRhdGVBdXRoVG9rZW4oZGF0YS5pZCk7XG4gICAgICAgICAgICBjbGVhbnVwTW9kYWwoJyNsaU1vZGFsJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgICBhdXRoU2VydmljZS5sb2dvdXQoKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYW5ndWxhci5lbGVtZW50KCcjYXV0aFRva2VuJykuYXR0cigndmFsdWUnLCAnZGVmYXVsdCcpO1xuICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnYXV0aC10b2tlbicsICdkZWZhdWx0Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1VG9vbHRpcCgkZXZlbnQpIHtcbiAgICAgIC8vIFRPRE86IHVzZSByZWZlcmVuY2UgdG8gbmctbWlubGVuZ3RoIGluc3RlYWQgb2YgaGFyZGNvZGluZyAnNidcbiAgICAgIGlmICgkZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgYW5ndWxhci5lbGVtZW50KCRldmVudC50YXJnZXQpLnRvb2x0aXAoJ3Nob3cnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuZ3VsYXIuZWxlbWVudCgkZXZlbnQudGFyZ2V0KS50b29sdGlwKCdoaWRlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVVc2VyKCkge1xuICAgICAgdmFyIGRhdGEgPSB7dXNlcm5hbWU6IHZtLnN1VXNlcm5hbWV9O1xuICAgICAgLy8gdm0uc3VTb2NrZXRNc2cgPSAnJztcbiAgICAgIHNvY2tldC5lbWl0KCd1c2VybmFtZScsIGRhdGEpO1xuICAgIH1cbiAgfVxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdhcHAnKVxuICAgIC5maWx0ZXIoJ3VuZXNjYXBlZCcsIHVuZXNjYXBlZCk7XG5cbiAgdW5lc2NhcGVkLiRpbmplY3QgPSBbJyRzY2UnXTtcblxuICBmdW5jdGlvbiB1bmVzY2FwZWQoJHNjZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICByZXR1cm4gJHNjZS50cnVzdEFzSHRtbCh2YWwpO1xuICAgIH07XG4gIH1cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnYXBwJylcbiAgICAuZmFjdG9yeSgnYXV0aFNlcnZpY2UnLCBhdXRoU2VydmljZSk7XG5cbiAgYXV0aFNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJGxvZyddO1xuXG4gIGZ1bmN0aW9uIGF1dGhTZXJ2aWNlKCRodHRwLCAkbG9nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNpZ251cDogc2lnbnVwLFxuICAgICAgbG9naW46IGxvZ2luLFxuICAgICAgbG9nb3V0OiBsb2dvdXRcbiAgICB9O1xuXG4gICAgLy8vLy8vLy8vLy8vXG5cbiAgICBmdW5jdGlvbiBzaWdudXAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvc2lnbnVwJywgZGF0YSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICAkbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBhdXRoU2VydmljZS5zaWdudXAnKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvbG9naW4nLCBkYXRhKVxuICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGF1dGhTZXJ2aWNlLmxvZ2luJyk7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvbG9nb3V0JylcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBhdXRoU2VydmljZS5sb2dvdXQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FwcCcpXG4gICAgLmZhY3RvcnkoJ2xheW91dFNlcnZpY2UnLCBsYXlvdXRTZXJ2aWNlKTtcblxuICBsYXlvdXRTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnXTtcblxuICBmdW5jdGlvbiBsYXlvdXRTZXJ2aWNlKCRodHRwLCAkbG9nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldFRlbXBsYXRlOiBnZXRUZW1wbGF0ZVxuICAgIH07XG5cbiAgICAvLy8vLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIGdldFRlbXBsYXRlKGlkKSB7XG4gICAgICB2YXIgaWQgPSBpZCB8fCAnZGVmYXVsdCc7XG5cbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy90ZW1wbGF0ZT90ZW1wbGF0ZUlEPScgKyBpZClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0VGVtcGxhdGUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FwcCcpXG4gICAgLmZhY3RvcnkoJ3Jlc3VtZVNlcnZpY2UnLCByZXN1bWVTZXJ2aWNlKTtcblxuICByZXN1bWVTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRsb2cnXTtcblxuICBmdW5jdGlvbiByZXN1bWVTZXJ2aWNlKCRodHRwLCAkbG9nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldFJlc3VtZURhdGE6IGdldFJlc3VtZURhdGFcbiAgICB9O1xuXG4gICAgLy8vLy8vLy8vLy8vXG5cbiAgICBmdW5jdGlvbiBnZXRSZXN1bWVEYXRhKGF1dGhUb2tlbikge1xuICAgICAgdmFyIGRhdGEgPSB7YXV0aFRva2VuOiBhdXRoVG9rZW59O1xuXG4gICAgICByZXR1cm4gJGh0dHAucG9zdCgnL3Jlc3VtZScsIGRhdGEpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldFJlc3VtZURhdGEnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FwcCcpXG4gICAgLmZhY3RvcnkoJ3NvY2tldCcsIHNvY2tldCk7XG5cbiAgc29ja2V0LiRpbmplY3QgPSBbJyRyb290U2NvcGUnXTtcblxuICBmdW5jdGlvbiBzb2NrZXQoJHJvb3RTY29wZSkge1xuICAgIHZhciBzb2NrZXQgPSBpby5jb25uZWN0KCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgb246IG9uLFxuICAgICAgZW1pdDogZW1pdFxuICAgIH07XG5cbiAgICAvLy8vLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIG9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgIHNvY2tldC5vbihldmVudE5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICRyb290U2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYWxsYmFjay5hcHBseShzb2NrZXQsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVtaXQoZXZlbnROYW1lLCBkYXRhLCBjYWxsYmFjaykge1xuICAgICAgc29ja2V0LmVtaXQoZXZlbnROYW1lLCBkYXRhLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAkcm9vdFNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseShzb2NrZXQsIGFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdhcHAnKVxuICAgIC5kaXJlY3RpdmUoJ3ByQWRkJywgcHJBZGQpO1xuXG4gIHByQWRkLiRpbmplY3QgPSBbJyRyb290U2NvcGUnXTtcblxuICBmdW5jdGlvbiBwckFkZCgkcm9vdFNjb3BlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICB0ZW1wbGF0ZTogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIj48c3Bhbj4rPC9zcGFuPjwvYnV0dG9uPicsXG4gICAgICBsaW5rOiBsaW5rXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICBzY29wZS5hZGQgPSBmdW5jdGlvbiAoZXZlbnQsIHNlY3Rpb25JbmRleCkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NlY3Rpb24gYWRkZWQnLCBzZWN0aW9uSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnBhcmVudCgpLmJpbmQoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVsZW1lbnQuc2hvdygpO1xuICAgICAgfSk7XG5cbiAgICAgIGVsZW1lbnQucGFyZW50KCkuYmluZCgnbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWxlbWVudC5oaWRlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnYXBwJylcbiAgICAuZGlyZWN0aXZlKCdwclJlbW92ZScsIHByUmVtb3ZlKTtcblxuICBwclJlbW92ZS4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJ107XG5cbiAgZnVuY3Rpb24gcHJSZW1vdmUoJHJvb3RTY29wZSkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgdGVtcGxhdGU6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCI+PHNwYW4+w5c8L3NwYW4+PC9idXR0b24+JyxcbiAgICAgIGxpbms6IGxpbmtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIHNjb3BlLnJlbW92ZSA9IGZ1bmN0aW9uIChldmVudCwgc2VjdGlvbkluZGV4KSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2VjdGlvbiByZW1vdmVkJywgc2VjdGlvbkluZGV4KTtcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5wYXJlbnQoKS5iaW5kKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBlbGVtZW50LnNob3coKTtcbiAgICAgIH0pO1xuXG4gICAgICBlbGVtZW50LnBhcmVudCgpLmJpbmQoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVsZW1lbnQuaGlkZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
