export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Romeos Friend Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        { 	
                        	"id": "nickname", 
                        	"type": "text", 
                        	"name": "Nickname", 
                        	"width": 2, 
                        	"required": true 
                        },
                        { 	"id": "group", 
                        	"type": "autocomplete", 
                        	"name": "Group", 
                        	"data": [ "Study", "Family", "School" ], 
                        	"form": "GroupForm", 
                        	"width": 2 
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "data": [ "Winterthur", "Zürich" ],
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id": "evtBirth",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
            
				{ 	"id": "GroupForm", 
					"title": "Group", 
					"formFieldList": [ 
						{ 
							"id": "name", 
							"type": "text", 
							"name": "GroupName", 
							"width": 2, 
							"required": true 
						}, 
						{ 
							"type": "deleteButton", 
							"name": "Delete" 
						}, 
						{ 
							"type": "cancelButton", 
							"name": "Cancel" 
						}, 
						{ 
							"type": "okButton", 
							"name": "Ok" 
						} 
							
						] 
					},
					{ 	"id": "ActivityForm", 
					"title": "Activities", 
					"formFieldList": [ 
						{ 
							"id": "name", 
							"type": "text", 
							"name": "Activity", 
							"width": 2, 
							"required": true 
						}, 
						{ 
							"type": "deleteButton", 
							"name": "Delete" 
						}, 
						{ 
							"type": "cancelButton", 
							"name": "Cancel" 
						}, 
						{ 
							"type": "okButton", 
							"name": "Ok" 
						} 
							
						] 
					}


            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "locationspage",
                        },
                        { 
                        	"type": "button", 
                        	"name": "Groups", 
                        	"icon": "fa-weixin", 
                        	"color": "wisteria", 
                        	"page": "groupspage", 
                        },
                        { 
                        	"type": "button", 
                        	"name": "Activities", 
                        	"icon": "fa-heartbeat", 
                        	"color": "yellow", 
                        	"page": "activitypage", 
                        },
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Anton Amacker" }, { name: "Britta Beavers"} ],
                            "page": "UserPage",
                            
                        },
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Adelboden" }, { name: "Winterthur" }, { name: "Zinal"}, { name: "Zürich"} ],
                            "page": "LocationActivityPage",
                            
                        },
                    ]
                },
            
				{ 	"id": "groupspage", 
					"elementList": [ 
						{
							 "type": "backbutton", 
						}, 
						{ 
							"type": "newButton", 
							"name": "NewGroup", 
							"icon": "fa-weixin", 
							"color": "green", 
							"form": { 
								"form": "GroupForm" 
							} 
						}, 

						{
							"type": "list",
							"icon": "fa-weixin",
							"color": "wisteria",
							"search": true,
							"data": [ { name: "Study" }, { name: "Family" }, { name: "School"} ],
							"form": {
								"form": "GroupForm"
									}
						},
					] 
				},
				{ 	"id": "activitypage", 
					"elementList": [ 
						{
							 "type": "backbutton", 
						}, 
						{ 
							"type": "newButton", 
							"name": "AddActivity", 
							"icon": "fa-heartbeat", 
							"color": "green", 
							"form": { 
								"form": "ActivityForm" 
							} 
						}, 

						{
							"type": "list",
							"icon": "fa-heartbeat",
							"color": "orange",
							"search": true,
							"data": [ { name: "Running" }, { name: "Mountainbiking" }, { name: "Skiing"} ],
							"page": "UserActivityPage",
									
						},
					] 
				},
				{ 	"id": "UserPage", 
					"elementList": [ 
						{
							 "type": "backbutton", 
						}, 
						{ 
							"type": "newButton", 
							"name": "AddActivity", 
							"icon": "fa-heartbeat", 
							"color": "green", 
							"form": { 
								"form": "ActivityForm" 
							} 
						}, 
						{ 
							"type": "button", 
							"name": "EditFriend", 
							"icon": "fa-user", 
							"color": "green", 
							"form": { 
								"form": "FriendForm" 
							} 
						},

						{
							"type": "list",
							"icon": "fa-heartbeat",
							"color": "orange",
							"search": true,
							"data": [ { name: "Running" }, { name: "Mountainbiking" }, { name: "Skiing"} ],
							"form": {
								"form": "ActivityForm"
									}
						},
					] 
				},
				{
                    "id": "UserActivityPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Anton Amacker" }, { name: "Britta Beavers"} ],
                            "page": "UserPage",
                            
                        },
                    ]
                },	
                { 	"id": "LocationActivityPage", 
					"elementList": [ 
						{
							 "type": "backbutton", 
						}, 
						{ 
							"type": "newButton", 
							"name": "AddActivity", 
							"icon": "fa-heartbeat", 
							"color": "green", 
							"form": { 
								"form": "ActivityForm" 
							} 
						}, 

						{
							"type": "list",
							"icon": "fa-heartbeat",
							"color": "orange",
							"search": true,
							"data": [ { name: "Mountainbiking" }, { name: "Skiing"} ],
							"page": "UserActivityPage",
									
						},
					] 
				},

            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
