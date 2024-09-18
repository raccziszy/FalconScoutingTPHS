let settings = {
    "imported": {
        "transitionMode": "auto"
    },
    "auto": [
        //cube cone buttons
        {
            "label": "Auto amp",
            "trigger": "e",
            "columnStart": 1,
            "columnEnd": 3,
            "rowStart": 1,
            "rowEnd": 3,
            "writeLoc": 1,
            "writeType": "int"
        },
        {
            "label": "Oof Time",
            "trigger": "k",
            "columnStart": 4,
            "columnEnd": 5,
            "rowStart": 3,
            "rowEnd": 5,
            "writeLoc": 16,
            "writeType": "inc"
        },
        {
            "label": "Auto Miss S",
            "trigger": "s",
            "columnStart": 1,
            "columnEnd": 2,
            "rowStart": 3,
            "rowEnd": 5,
            "writeLoc": 4,
            "writeType": "int"
        },
        {
            "label": "Auto Miss A",
            "trigger": "d",
            "columnStart": 2,
            "columnEnd": 3,
            "rowStart": 3,
            "rowEnd": 5,
            "writeLoc": 2,
            "writeType": "int"
        },
        {
            "label": "Auto Speaker",
            "trigger": "r",
            "columnStart": 3,
            "columnEnd": 5,
            "rowStart": 1,
            "rowEnd": 3,
            "writeLoc": 3,
            "writeType": "int"
        },
        //cube cone buttons end

        {
            "label": "Leave",
            "trigger": "j",
            "columnStart": 3,
            "columnEnd": 4,
            "rowStart": 3,
            "rowEnd": 5,
            "writeLoc": 0,
            "writeType": "bool"
        }

        // ,
        // {
        //   "label": "Defense",
        //   "trigger": "a", 
        //   "columnStart": 1,
        //   "columnEnd": 3,
        //   "rowStart": 4,
        //   "rowEnd": 5,
        //   "writeLoc": 18,
        //   "writeType": "inc"
        // }
    ],





    "tele": [
        //cube cone buttons
        {
            "label": "Tele Amp",
            "trigger": "e",
            "columnStart": 1,
            "columnEnd": 2,
            "rowStart": 1,
            "rowEnd": 3,
            "writeLoc": 6,
            "writeType": "int"
        },
        {
            "label": "Tele Speaker",
            "trigger": "r",
            "columnStart": 2,
            "columnEnd": 3,
            "rowStart": 1,
            "rowEnd": 3,
            "writeLoc": 8,
            "writeType": "int"
        },
        {
            "label": "Tele Miss A",
            "trigger": "d",
            "columnStart": 1,
            "columnEnd": 2,
            "rowStart": 3,
            "rowEnd": 4,
            "writeLoc": 7,
            "writeType": "int"
        },
        {
            "label": "Tele Miss S",
            "trigger": "f",
            "columnStart": 2,
            "columnEnd": 3,
            "rowStart": 3,
            "rowEnd": 4,
            "writeLoc": 5,
            "writeType": "int"
        },
        {
            "label": "Trap Note",
            "trigger": "u",
            "columnStart": 3,
            "columnEnd": 4,
            "rowStart": 1,
            "rowEnd": 2,
            "writeLoc": 10,
            "writeType": "int"
        },
        //scoring buttons end
        {
            "label": "Penalty",
            "trigger": "o",
            "columnStart": 3,
            "columnEnd": 5,
            "rowStart": 2,
            "rowEnd": 3,
            "writeLoc": 18,
            "writeType": "int"
        },
        {
            "label": "Forced Misses",
            "trigger": "v",
            "columnStart": 1,
            "columnEnd": 3,
            "rowStart": 4,
            "rowEnd": 5,
            "writeLoc": 9,
            "writeType": "int"
        },
        {
            "label": "Spotlight",
            "trigger": "k",
            "columnStart": 3,
            "columnEnd": 4,
            "rowStart": 4,
            "rowEnd": 5,
            "writeLoc": 12,
            "writeType": "bool"
        },
        {
            "label": "Climb Level",
            "trigger": "j",
            "columnStart": 3,
            "columnEnd": 4,
            "rowStart": 3,
            "rowEnd": 4,
            "writeLoc": 11,
            "writeType": "cycG",
            "cycGOptions": [0, 1, 3],
            "writeCycGOptions": 3
        },
        {
            "label": "Oof Time",
            "trigger": "l",
            "columnStart": 4,
            "columnEnd": 5,
            "rowStart": 3,
            "rowEnd": 5,
            "writeLoc": 16,
            "writeType": "inc"
        },
        {
            "label": "Defense",
            "trigger": "i",
            "columnStart": 4,
            "columnEnd": 5,
            "rowStart": 1,
            "rowEnd": 2,
            "writeLoc": 13,
            "writeType": "inc"
        }
    ],

    "after": [
        // {
        //   "label":"Climbed?",
        //   "writeLoc": 16,
        //   "writeType": "cyc",
        //   "cycOptions": [0, 6, 10],
        //   "writeCycOptions": 3
        // },

        {
            "label": "Climbing Capabilities?",
            "writeLoc": 14,
            "writeType": "str",
            "placeholder": "e.g. harmonized? speed? good trap+climb?"
        },
        {
            "label": "Defense Description",
            "writeLoc": 15,
            "writeType": "str",
            "placeholder": "how did they play defense? push power? speed?"
        },
        {
            "label": "QATA",
            "writeLoc": 17,
            "writeType": "str",
            "placeholder": "e.g. how are they scoring? speed? skill?"
        }
    ],
    "start": [
        {
            "label": "Scout ID",
            "writeLoc": 20,
            "writeType": "strBegin",
            "placeholder": "your team # + your name"
        },
        {
            "label": "Team Number",
            "writeLoc": 21,
            "writeType": "strBegin",
            "placeholder": "# of the team you are scouting"
        },
        {
            "label": "Match Number",
            "writeLoc": 19,
            "writeType": "strBegin",
            "placeholder": "current match #"
        },
        {
            "label": "Team Position",
            "writeLoc": 22,
            "writeType": "strBegin",
            "placeholder": "1, 2, or 3"
        }
    ]

}

let dataArray = [
    ["leave", false],
    ["Auto amp", 0],
    ["Auto Miss A", 0],
    ["Auto Speaker", 0],
    ["Auto Miss S", 0],
    ["Tele Miss S", 0],
    ["Tele Amp", 0],
    ["Tele Miss A", 0],
    ["Tele Speaker", 0],
    ["Forced Misses", 0],
    ["Trap Note", 0],
    ["Climb Level", 0],
    ["Spotlight", false],
    ["Defense", 0],
    ["Oof Time", 0],
    ["Penalty", 0],
];

let dataSettings = new Map(dataArray);


let themes = {
    "mainStyleSheet": ["#000", "#999999", "#fff", "#f3f3f3", "#E54C38", "invert(0%) sepia(100%) saturate(7430%) hue-rotate(46deg) brightness(81%) contrast(114% opacity(50%))"],
    // main, second, bg, highlight, 
    "styleCarbon": ["#eee", "#444", "#111", "#191919", "#da3333", "invert(100%) sepia(0%) saturate(6935%) hue-rotate(270deg) brightness(111%) contrast(87%) opacity(50%)"],
    "styleMilkshake": ["#000", "#999999", "#fff", "#f3f3f3", "#ffd1dc", "invert(0%) sepia(100%) saturate(7430%) hue-rotate(46deg) brightness(81%) contrast(114% opacity(50%))"],
    "styleIceberg": ["#212b43", "#62cfe6", "#f3fdff", "#ddeff3", "#e58c9d", "invert(16%) sepia(9%) saturate(2627%) hue-rotate(185deg) brightness(95%) contrast(96%) opacity(50%)"],
    "styleLavender": ["#54338e", "#9375c7", "#c4b2e3", "#e3daf2", "#e3daf2", "invert(11%) sepia(32%) saturate(6816%) hue-rotate(238deg) brightness(97%) contrast(99%) opacity(50%)"],
    "styleHightide": ["#094a58", "#00b6ae", "#fff", "#c1c1c1", "#3b3b3b", "invert(22%) sepia(51%) saturate(742%) hue-rotate(143deg) brightness(94%) contrast(96%) opacity(50%)"],
    "styleEvergreen": ["#edf5e1", "#05386b", "#5cdb95", "#8ee4af", "#379683", "invert(96%) sepia(9%) saturate(491%) hue-rotate(43deg) brightness(106%) contrast(92%) opacity(50%)"],
    "styleOlivia": ["#f2efed", "#deaf9d", "#1c1b1d", "#4e3e3e", "#bf616a", "invert(97%) sepia(47%) saturate(304%) hue-rotate(292deg) brightness(104%) contrast(90%) opacity(50%)"],
    "style2077": ["#e8e8e8", "#feff04", "#212121", "rgba(92,74,156,0.5)", "#da3333", "invert(100%) sepia(2%) saturate(421%) hue-rotate(168deg) brightness(115%) contrast(82%) opacity(50%)"],
    "styleAlpine": ["#d8dee9", "#617b94", "#242933", "#1b1f27", "#bf616a", "invert(92%) sepia(7%) saturate(277%) hue-rotate(180deg) brightness(97%) contrast(92%) opacity(50%)"],
    "styleShadow": ["#383e42", "#5e676e", "#010203", "#121212", "#e25303", "invert(22%) sepia(16%) saturate(303%) hue-rotate(161deg) brightness(95%) contrast(91%) opacity(50%)"]
}