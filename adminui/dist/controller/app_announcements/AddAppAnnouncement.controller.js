sap.ui.define(["../BaseController"],function(t){var e;return t.extend("asc.admin.controller.app_announcements.AddAppAnnouncement",{onInit:function(){var t=this;this.oRouter=this.getOwnerComponent().getRouter();e=new sap.ui.model.json.JSONModel("model/app_announcement.json");this.getView().setModel(e,"app_announcement");this.oRouter.getRoute("addappannouncement").attachPatternMatched(this._onAnnouncementMatched,this);sap.ui.require(["sap/ui/richtexteditor/RichTextEditor","sap/ui/richtexteditor/EditorType"],function(e,n){var o=new e("idRichNewAnnouncementDescription",{editorType:n.TinyMCE4,width:"90%",height:"300px",customToolbar:true,showGroupFont:false,showGroupLink:true,showGroupInsert:false,value:"{app_announcement>/description}",ready:function(){this.addButtonGroup("styleselect").addButtonGroup("table");this.addStyleClass("formattedTextPadding")}});t.getView().byId("idVerticalLayout").addContent(o)})},_onAnnouncementMatched:function(t){this._app=t.getParameter("arguments").app||this._app||"0";this._appDetail=this.getView().getModel("apps").oData[this._app]},onCancelPress:function(){this.oRouter.navTo("editapp",{app:this._app})},onSavePress:function(t){this.api.postNewAppAnnouncement(this._appDetail.app_id,e.getData()).done(this.onSaveAnnouncementDone.bind(this)).fail(this.onHTTPFail.bind(this))},onSaveAnnouncementDone:function(t){this.onToast("Success!");var e=this.getView().oPropagatedProperties.oModels.app_announcements;e.getData().push(t.data);e.setData(e.getData());this.oRouter.navTo("editapp",{app:this._app})}})},true);