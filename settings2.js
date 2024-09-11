let autoSettingsCopy = new Map();
autoSettingsCopy.set("fieldLength", 16.4846); //Full Field: 16.4846
autoSettingsCopy.set("starting", {
    "type": "start",
    "shouldDrawLine": true,
    "isMoving": true,
    "points" : [
        {
            "label": "Top",
            "x": 1.3,
            "y": 7,
            "next": "score",
            "position": "absolute"
        },
        {
            "label": "Middle",
            "x": 1.3,
            "y": 5.55,
            "next": "score",
            "position": "absolute"
        },
        {
            "label": "Bottom",
            "x": 1.3,
            "y": 4.1,
            "next": "score",
            "position": "absolute"
        },
        {
            "label": "Extreme Bottom",
            "x": 1.3,
            "y": 1.5,
            "next": "score",
            "position": "absolute"
        }
    ]
});
autoSettingsCopy.set("score", {
    "type": "normal",
    "shouldDrawLine": true,
    "isMoving": false,
    "points": [
        {
            "label": "Speaker Score",
            "x": 0,
            "y": 6.1,
            "next": "pickup",
            "position": "absolute",
            "coord": [{x: 0, y: 5.55}]
        },
        {
            "label": "Speaker Miss",
            "x": 0,
            "y": 5,
            "next": "pickup",
            "position": "absolute",
            "coord": [{x: 0, y: 5.55}]
        },
        {
            "label": "Amp Score",
            "x": 3.4,
            "y": 8.15,
            "next": "pickup",
            "position": "absolute"
        },
        {
            "label": "Amp Miss",
            "x": 0.5,
            "y": 8.15,
            "next": "pickup",
            "position": "absolute"
        },
        {
            "label": "Hoard",
            "x": -0.1,
            "y": 0,
            "next": "pickup",
            "position": "movingRelative",
            "function": ()=> {
                autoSettingsCopy.get("pickup").points.push({
                    "display": "H-Note",
                    "label": "H-Note" + UUIDCount,
                    "x": 0,
                    "y": 0,
                    "next": "intakeHoard",
                    "position": "quasiRelative",
                    "markForRemoval": true,
                });
                UUIDCount++;
            },
            "inverseFunction": ()=> {
                console.log(autoSettingsCopy.get("pickup").points.pop());
                UUIDCount--;
            }
        }
    ]
});
autoSettingsCopy.set("scoreHoard", {
    "type": "normal",
    "shouldDrawLine": true,
    "isMoving": false,
    "points": [
        {
            "label": "Speaker Score",
            "x": 0,
            "y": 6.1,
            "next": "pickup",
            "position": "absolute",
            "coord": [{x: 0, y: 5.55}]
        },
        {
            "label": "Speaker Miss",
            "x": 0,
            "y": 5,
            "next": "pickup",
            "position": "absolute",
            "coord": [{x: 0, y: 5.55}]
        },
        {
            "label": "Amp Score",
            "x": 3.4,
            "y": 8.15,
            "next": "pickup",
            "position": "absolute"
        },
        {
            "label": "Amp Miss",
            "x": 0.5,
            "y": 8.15,
            "next": "pickup",
            "position": "absolute"
        }
    ]
});
autoSettingsCopy.set("pickup", {
    "type": "remove",
    "shouldDrawLine": true,
    "isMoving": true,
    "points": [
        {
            "label": "note1.1",
            "x": 2.9,
            "y": 7,
            "next": "intake",
            "position": "absolute"
        },
        {
            "label": "note1.2",
            "x": 2.9,
            "y": 5.55,
            "next": "intake",
            "position": "absolute"
        },
        {
            "label": "note1.3",
            "x": 2.9,
            "y": 4.1,
            "next": "intake",
            "position": "absolute"
        },
        {
            "label": "note2.1",
            "x": 8.2423,
            "y": 7.45,
            "next": "intakeMiddle",
            "position": "absolute",
            "coord": [{x: 8.2423, y: 7.45}, {x: 5.57115, y: 6.725}]
        },
        {
            "label": "note2.2",
            "x": 8.2423,
            "y": 5.8,
            "next": "intakeMiddle",
            "position": "absolute",
            "coord": [{x: 8.2423, y: 5.8}, {x: 5.57115, y: 6.525}]
        },
        {
            "label": "note2.3",
            "x": 8.2423,
            "y": 4.1,
            "next": "intakeMiddle",
            "position": "absolute",
            "coord": [{x: 8.2423, y: 4.1}, {x: 5.57115, y: 4.1}, {x: 4, y: 5.5}]
        },
        {
            "label": "note2.4",
            "x": 8.2423,
            "y": 2.45,
            "next": "intakeMiddle",
            "position": "absolute",
            "coord": [{x: 8.2423, y: 2.45}, {x: 5.57115, y: 1.7}]
        },
        {
            "label": "note2.5",
            "x": 8.2423,
            "y": 0.75,
            "next": "intakeMiddle",
            "position": "absolute",
            "coord": [{x: 8.2423, y: 0.75}, {x: 5.57115, y: 1.5}]
        }
    ]
});
autoSettingsCopy.set("intake", {
    "type": "normal",
    "shouldDrawLine": false,
    "isMoving": false,
    "points": [
        {
            "label": "Intake",
            "x": 0,
            "y": 0.5,
            "next": "score",
            "position": "relative"
        },
        {
            "label": "Missed",
            "x": 0,
            "y": -0.5,
            "next": "pickup",
            "position": "relative"
        }
    ]
});
autoSettingsCopy.set("intakeMiddle", {
    "type": "normal",
    "shouldDrawLine": false,
    "isMoving": false,
    "points": [
        {
            "label": "Intake",
            "x": 0,
            "y": 0.5,
            "next": "score",
            "position": "relative"
        },
        {
            "label": "Beat",
            "x": 0,
            "y": 0,
            "next": "pickup",
            "position": "relative"
        },
        {
            "label": "Missed",
            "x": 0,
            "y": -0.5,
            "next": "pickup",
            "position": "relative"
        }
    ]
});
autoSettingsCopy.set("intakeHoard", {
    "type": "normal",
    "shouldDrawLine": false,
    "isMoving": false,
    "points": [
        {
            "label": "Intake",
            "x": 0,
            "y": 0.5,
            "next": "scoreHoard",
            "position": "relative"
        },
        {
            "label": "Missed",
            "x": 0,
            "y": -0.5,
            "next": "pickup",
            "position": "relative"
        }
    ]
});
    

var UUIDCount = 0;