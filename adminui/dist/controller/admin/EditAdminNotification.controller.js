sap.ui.define(["../BaseController"],function(i){var t;var n;return i.extend("asc.admin.controller.admin.EditAdminNotification",{onInit:function(){this.oRouter=this.getOwnerComponent().getRouter();this.oRouter.getRoute("editadminnotification").attachPatternMatched(this._onNotificationMatched,this)},_onNotificationMatched:function(i){this.notificationId=i.getParameter("arguments").notification_id||this.notification_id||"0";this.getView().bindElement({path:"/"+this.notificationId,model:"notifications"});this.notification=this.getView().getModel("notifications").oData[this.notificationId]},onCancelPress:function(){this.oRouter.navTo("admin")},onSavePress:function(i){this.api.putNotification(this.notification.notification_id,this.notification).done(this.onSaveNotificationDone.bind(this)).fail(this.onHTTPFail.bind(this))},onSaveNotificationDone:function(i){this.onToast("Success!");this.oRouter.navTo("admin")}})},true);