sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/test/actions/EnterText",
	"sap/ui/test/matchers/AggregationLengthEquals",
	"sap/ui/test/matchers/AggregationFilled",
	"sap/ui/test/matchers/PropertyStrictEquals",
	"../Common"
], function(Opa5, Press, EnterText, AggregationLengthEquals, AggregationFilled, PropertyStrictEquals, Common) {
	"use strict";

	var sViewName = "app_announcements.AddAppAnnouncement";

	Opa5.createPageObjects({
		onTheAddAppAnnouncementPage : {
			baseClass : Common,
			pageName : sViewName,
			actions : {
				getPageName : function() {
					return sViewName;
				}
			},

			assertions : {

				iShouldSeeTheAddScreen : function () {
					return this.waitFor({
						id: "idFormAdd",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok("The add screen is visible");
						},
						errorMessage: "Did not find the add form"
					});
				},

				iShouldSeeThePageTitle: function () {
						return this.waitFor({
							viewName : sViewName,
							id : "idTitle",
							matchers : new PropertyStrictEquals({name : "text", value : "New Announcement Page"}),
							success : function () {
								Opa5.assert.ok(true, "The page title is correct");
							},
							errorMessage : "The page title is not correct"
						});
				}

			}

		}

	});

});
