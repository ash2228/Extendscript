// Function to create UI (dockable panel or floating window)
function createUI(thisObj) {
    var mainWindow;

    // Check if the script is being run from the Script Editor or as a dockable panel
    if (thisObj instanceof Panel) {
        mainWindow = thisObj;
    } else {
        mainWindow = new Window("palette", "WorkFlow", undefined, {resizeable: true});
        mainWindow.orientation = "column";  // Set orientation to column for main window
    }

    // Create the first row (single column)
    var row1 = mainWindow.add("group");
    row1.orientation = "row";  // Set orientation to row

    // Add buttons to the first row
    var solidButton = row1.add("button", undefined, "Solid");
    solidButton.size = [50, 25]; // Adjust button size as needed
    solidButton.onClick = function() {
        var project = app.project;
        // Check if there is an active project
        if (project === null) {
            alert("No project open. Please open a project and try again.");
            return;
        }
    

        // Get the active composition
        var comp = project.activeItem;

        // Check if the active item is a composition
        if (comp === null || !(comp instanceof CompItem)) {
            alert("No active composition. Please select an active composition and try again.");
            return;
        }

        // Check if there are selected layers
        if (comp.selectedLayers.length === 0) {
            alert("No layers selected. Please select a layer and try again.");
            return;
        }

        // Get the first selected layer
        var selectedLayer = comp.selectedLayers[0];

        // Get the start time and duration of the selected layer
        var startTime = selectedLayer.inPoint;
        var duration = selectedLayer.outPoint - selectedLayer.inPoint;
         var brush = mainWindow.graphics.newBrush(mainWindow.graphics.BrushType.SOLID_COLOR, [9/255, 24/255, 28/255]);
        // Add a solid layer to the composition
        var solidLayer = comp.layers.addSolid([1, 0, 0], "Red Solid", comp.width, comp.height, comp.pixelAspect, comp.duration);
        solidLayer.startTime = startTime;
        solidLayer.inPoint = startTime;
        solidLayer.outPoint = startTime + duration;
        solidLayer.moveBefore(selectedLayer);
    };

    var adjustmentButton = row1.add("button", undefined, "Adj");
    adjustmentButton.size = [50, 25]; // Adjust button size as needed
    var brush = mainWindow.graphics.newBrush(mainWindow.graphics.BrushType.SOLID_COLOR, [9/255, 24/255, 28/255]);
    mainWindow.graphics.backgroundColor = brush;
    adjustmentButton.onClick = function() {
        var project = app.project;
        // Check if there is an active project
        if (project === null) {
            alert("No project open. Please open a project and try again.");
            return;
        }

        // Get the active composition
        var comp = project.activeItem;

        // Check if the active item is a composition
        if (comp === null || !(comp instanceof CompItem)) {
            alert("No active composition. Please select an active composition and try again.");
            return;
        }

        // Check if there are selected layers
        if (comp.selectedLayers.length === 0) {
            alert("No layers selected. Please select a layer and try again.");
            return;
        }

        // Get the first selected layer
        var selectedLayer = comp.selectedLayers[0];

        // Get the start time and duration of the selected layer
        var startTime = selectedLayer.inPoint;
        var duration = selectedLayer.outPoint - selectedLayer.inPoint;

        // Add an adjustment layer to the composition
        var adjustmentLayer = comp.layers.addSolid([1, 1, 1], "Adjustment Layer", comp.width, comp.height, comp.pixelAspect, comp.duration);
        adjustmentLayer.adjustmentLayer = true;
        adjustmentLayer.name = "Adjustment Layer";
        adjustmentLayer.startTime = startTime;
        adjustmentLayer.inPoint = startTime;
        adjustmentLayer.outPoint = startTime + duration;
        adjustmentLayer.moveBefore(selectedLayer);
    };

    var nullButton = row1.add("button", undefined, "Null");
    nullButton.size = [50, 25]; // Adjust button size as needed
    nullButton.onClick = function() {
        var project = app.project;
        // Check if there is an active project
        if (project === null) {
            alert("No project open. Please open a project and try again.");
            return;
        }

        // Get the active composition
        var comp = project.activeItem;

        // Check if the active item is a composition
        if (comp === null || !(comp instanceof CompItem)) {
            alert("No active composition. Please select an active composition and try again.");
            return;
        }

        // Check if there are selected layers
        if (comp.selectedLayers.length === 0) {
            alert("No layers selected. Please select a layer and try again.");
            return;
        }

        // Get the first selected layer
        var selectedLayer = comp.selectedLayers[0];

        // Get the start time and duration of the selected layer
        var startTime = selectedLayer.inPoint;
        var duration = selectedLayer.outPoint - selectedLayer.inPoint;

        // Add a null layer to the composition
        var nullLayer = comp.layers.addNull();
        nullLayer.name = "Null Layer";
        nullLayer.startTime = startTime;
        nullLayer.inPoint = startTime;
        nullLayer.outPoint = startTime + duration;
        nullLayer.moveBefore(selectedLayer);
    };

    // Create the second row (single column)
    var row2 = mainWindow.add("group");
    row2.orientation = "row";  // Set orientation to row

    // Add buttons to the second row
    var shapeButton = row2.add("button", undefined, "Shape");
    shapeButton.size = [50, 25]; // Adjust button size as needed
    shapeButton.onClick = function() {
        var project = app.project;
        // Check if there is an active project
        if (project === null) {
            alert("No project open. Please open a project and try again.");
            return;
        }

        // Get the active composition
        var comp = project.activeItem;

        // Check if the active item is a composition
        if (comp === null || !(comp instanceof CompItem)) {
            alert("No active composition. Please select an active composition and try again.");
            return;
        }

        // Check if there are selected layers
        if (comp.selectedLayers.length === 0) {
            alert("No layers selected. Please select a layer and try again.");
            return;
        }

        // Get the first selected layer
        var selectedLayer = comp.selectedLayers[0];

        // Get the start time and duration of the selected layer
        var startTime = selectedLayer.inPoint;
        var duration = selectedLayer.outPoint - selectedLayer.inPoint;

        // Add a shape layer to the composition
        var shapeLayer = comp.layers.addShape();
        shapeLayer.name = "Shape Layer";
        shapeLayer.startTime = startTime;
        shapeLayer.inPoint = startTime;
        shapeLayer.outPoint = startTime + duration;
        shapeLayer.moveBefore(selectedLayer);
    };

    var cameraButton = row2.add("button", undefined, "Cam");
    cameraButton.size = [50, 25]; // Adjust button size as needed
    cameraButton.onClick = function() {
        var project = app.project;
        // Check if there is an active project
        if (project === null) {
            alert("No project open. Please open a project and try again.");
            return;
        }

        // Get the active composition
        var comp = project.activeItem;

        // Check if the active item is a composition
        if (comp === null || !(comp instanceof CompItem)) {
            alert("No active composition. Please select an active composition and try again.");
            return;
        }

        // Check if there are selected layers
        if (comp.selectedLayers.length === 0) {
            alert("No layers selected. Please select a layer and try again.");
            return;
        }

        // Get the first selected layer
        var selectedLayer = comp.selectedLayers[0];

        // Get the start time and duration of the selected layer
        var startTime = selectedLayer.inPoint;
        var duration = selectedLayer.outPoint - selectedLayer.inPoint;

        // Add a camera layer to the composition
         var cameraLayer = comp.layers.addCamera("Camera", [comp.width *.5, comp.
     height*.5]);
        cameraLayer.name = "Camera";
        cameraLayer.startTime = startTime;
        cameraLayer.inPoint = startTime;
        cameraLayer.outPoint = startTime + duration;
        cameraLayer.moveBefore(selectedLayer);
    };

    var lightButton = row2.add("button", undefined, "Light");
    lightButton.size = [50, 25]; // Adjust button size as needed
    lightButton.onClick = function() {
        var project = app.project;
        // Check if there is an active project
        if (project === null) {
            alert("No project open. Please open a project and try again.");
            return;
        }

        // Get the active composition
        var comp = project.activeItem;

        // Check if the active item is a composition
        if (comp === null || !(comp instanceof CompItem)) {
            alert("No active composition. Please select an active composition and try again.");
            return;
        }

        // Check if there are selected layers
        if (comp.selectedLayers.length === 0) {
            alert("No layers selected. Please select a layer and try again.");
            return;
        }

        // Get the first selected layer
        var selectedLayer = comp.selectedLayers[0];

        // Get the start time and duration of the selected layer
        var startTime = selectedLayer.inPoint;
        var duration = selectedLayer.outPoint - selectedLayer.inPoint;

        // Add a light layer to the composition
        comp.layers.addLight("My Light", [comp.width*.5, comp.height*
.5]);
        lightLayer.name = "Light";
        lightLayer.startTime = startTime;
        lightLayer.inPoint = startTime;
        lightLayer.outPoint = startTime + duration;
        lightLayer.moveBefore(selectedLayer);
    };

    var textButton = row2.add("button", undefined, "Text");
    textButton.size = [50, 25]; // Adjust button size as needed
    textButton.onClick = function() {
        var project = app.project;
        // Check if there is an active project
        if (project === null) {
            alert("No project open. Please open a project and try again.");
            return;
        }

        // Get the active composition
        var comp = project.activeItem;

        // Check if the active item is a composition
        if (comp === null || !(comp instanceof CompItem)) {
            alert("No active composition. Please select an active composition and try again.");
            return;
        }

        // Check if there are selected layers
        if (comp.selectedLayers.length === 0) {
            alert("No layers selected. Please select a layer and try again.");
            return;
        }

        // Get the first selected layer
        var selectedLayer = comp.selectedLayers[0];

        // Get the start time and duration of the selected layer
        var startTime = selectedLayer.inPoint;
        var duration = selectedLayer.outPoint - selectedLayer.inPoint;

        // Add a text layer to the composition
        var textLayer = comp.layers.addText("Text");
        textLayer.name = "Text";
        textLayer.startTime = startTime;
        textLayer.inPoint = startTime;
        textLayer.outPoint = startTime + duration;
        textLayer.moveBefore(selectedLayer);
    };

    // Set spacing between rows
    mainWindow.spacing = 5;

    // Set background color
    var brush = mainWindow.graphics.newBrush(mainWindow.graphics.BrushType.SOLID_COLOR, [9/255, 24/255, 28/255]);
    mainWindow.graphics.backgroundColor = brush;

    // Center and show the main window
    if (mainWindow instanceof Window) {
        mainWindow.center();
        mainWindow.show();
    } else {
        mainWindow.layout.layout(true);
    }

    return mainWindow;
}

// Run the script as a dockable panel or a floating window
var myScriptPal = createUI(this);