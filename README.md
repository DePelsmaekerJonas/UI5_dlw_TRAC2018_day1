# UI5_delaware_FlexColTemplate
Template for the Flexible Column Layout floorplan.
[More information here.](https://experience.sap.com/fiori-design-web/flexible-column-layout/)

### How does it work?

A root view takes care of the FlexibleColumnLayout-control (App.view.xml).
The appView JSONModel stores the current view type of the FlexibleColumnLayout-control in poperty "layout".
You can change the layout with
```sh
this.getModel("appView").setProperty("/layout", "<your_layout_here>");
```
A list of layouts can be found [here](https://help.sap.com/viewer/468a97775123488ab3345a0c48cadd8f/1709.001/en-US/3b9f760da5b64adf8db7f95247879086.html).

To define which view is placed on which column, refer to the routing targets in manifest.json.
Generally:
- The target for the master view gets "controlAggregation": "beginColumnPages"
- The target for the detail view gets "controlAggregation": "midColumnPages"
- The target for the detaildetail view gets "controlAggregation": "endColumnPages"


### Changing the namespace

To change the namespace from "com.delaware.FlexibleColumnTemplate", click on the magnigying glass icon in WebIDE.
Perform the following steps:
- Find and replace "com.delaware.FlexibleColumnTemplate" with your desired namespace with dots.
- Find and replace "com/delaware/FlexibleColumnTemplate" with your desired namespace with backslashes.
