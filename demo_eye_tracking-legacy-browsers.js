/************************** 
 * Demo_Eye_Tracking *
 **************************/


// store info about the experiment session:
let expName = 'demo_eye_tracking';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1), (- 1), (- 1)]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(initializeEyetrackingRoutineBegin());
flowScheduler.add(initializeEyetrackingRoutineEachFrame());
flowScheduler.add(initializeEyetrackingRoutineEnd());
flowScheduler.add(inst1RoutineBegin());
flowScheduler.add(inst1RoutineEachFrame());
flowScheduler.add(inst1RoutineEnd());
flowScheduler.add(calibrationIntroRoutineBegin());
flowScheduler.add(calibrationIntroRoutineEachFrame());
flowScheduler.add(calibrationIntroRoutineEnd());
flowScheduler.add(calibrationIntro_2RoutineBegin());
flowScheduler.add(calibrationIntro_2RoutineEachFrame());
flowScheduler.add(calibrationIntro_2RoutineEnd());
const calibration_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(calibration_trialsLoopBegin(calibration_trialsLoopScheduler));
flowScheduler.add(calibration_trialsLoopScheduler);
flowScheduler.add(calibration_trialsLoopEnd);


flowScheduler.add(trackingTrialRoutineBegin());
flowScheduler.add(trackingTrialRoutineEachFrame());
flowScheduler.add(trackingTrialRoutineEnd());
flowScheduler.add(task_introRoutineBegin());
flowScheduler.add(task_introRoutineEachFrame());
flowScheduler.add(task_introRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'calibration_trials.xlsx', 'path': 'calibration_trials.xlsx'},
    {'name': 'images/image_pairs.csv', 'path': 'images/image_pairs.csv'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'images/140_y_f_a_a.jpg', 'path': 'images/140_y_f_a_a.jpg'},
    {'name': 'images/140_y_f_a_b.jpg', 'path': 'images/140_y_f_a_b.jpg'},
    {'name': 'images/140_y_f_d_a.jpg', 'path': 'images/140_y_f_d_a.jpg'},
    {'name': 'images/140_y_f_d_b.jpg', 'path': 'images/140_y_f_d_b.jpg'},
    {'name': 'images/140_y_f_f_a.jpg', 'path': 'images/140_y_f_f_a.jpg'},
    {'name': 'images/140_y_f_f_b.jpg', 'path': 'images/140_y_f_f_b.jpg'},
    {'name': 'images/140_y_f_h_a.jpg', 'path': 'images/140_y_f_h_a.jpg'},
    {'name': 'images/140_y_f_h_b.jpg', 'path': 'images/140_y_f_h_b.jpg'},
    {'name': 'images/140_y_f_n_a.jpg', 'path': 'images/140_y_f_n_a.jpg'},
    {'name': 'images/140_y_f_n_b.jpg', 'path': 'images/140_y_f_n_b.jpg'},
    {'name': 'images/140_y_f_s_a.jpg', 'path': 'images/140_y_f_s_a.jpg'},
    {'name': 'images/140_y_f_s_b.jpg', 'path': 'images/140_y_f_s_b.jpg'},
    {'name': 'webgazer-2.0.1.tp.js', 'path': 'webgazer-2.0.1.tp.js'},
    {'name': 'demo_eye_tracking.js', 'path': 'demo_eye_tracking.js'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var initializeEyetrackingClock;
var webcamWarning;
var inst1Clock;
var instruction1Txt;
var inst1_resp;
var calibrationIntroClock;
var calibrationTxt;
var calib1_resp;
var calibrationIntro_2Clock;
var calibrationTxt_2;
var calib1_resp_2;
var calibrationClock;
var calibration_square;
var calibrationClick;
var trackingTrialClock;
var tracking_square;
var trackingTxt;
var tracking_resp;
var task_introClock;
var instruction1Txt_2;
var start_resp;
var show_facesClock;
var image_left;
var image_right;
var tracker;
var left_duration_indicator;
var right_duration_indicator;
var feedbackClock;
var feedback_textbox;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "initializeEyetracking"
  initializeEyetrackingClock = new util.Clock();
  //initialize params of the webgazer package (used for eye tracking)
  
  // Initialize x and y arrays; we use these to calculate running averages of 
  // current gaze position; the longer the window, the slower, but more fluent
  // the updates
  let averagingWindow = 10;
  window.xGazes = new Array(averagingWindow ).fill(0);
  window.yGazes = new Array(averagingWindow ).fill(0);
  
  webcamWarning = new visual.TextStim({
    win: psychoJS.window,
    name: 'webcamWarning',
    text: 'This experiment uses eye tracking. \n\nPlease wait whilst your webcam initialises...\n\nIf your web-browser request access to your webcam. You might need to click on this text to make that happen. Please permit access, and wait a little while. Your webcam video should appear in the top-left of the screen.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "inst1"
  inst1Clock = new util.Clock();
  instruction1Txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction1Txt',
    text: 'Webcam initialized. \nPress space to start',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  inst1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "calibrationIntro"
  calibrationIntroClock = new util.Clock();
  calibrationTxt = new visual.TextStim({
    win: psychoJS.window,
    name: 'calibrationTxt',
    text: "Thanks for being here! In this demo we're studying how people look at faces. Your webcam will record your eye movements.  Please keep your head still, but blink normally.\n\nYou'll see pairs of faces with different expressions. Just look naturally at the faces—no need to focus on anything specific. Each pair will appear briefly. We're interested in your spontaneous reactions.\n\nFirst, we'll do a quick calibration where you'll look at points on the screen. \n\nPress space to begin!",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  calib1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "calibrationIntro_2"
  calibrationIntro_2Clock = new util.Clock();
  calibrationTxt_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'calibrationTxt_2',
    text: 'In a moment you will see a white square appear at different places on the screen. \n\nWhen each square appears look at it and click it. \n\nPress space to begin!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  calib1_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "calibration"
  calibrationClock = new util.Clock();
  calibration_square = new visual.Rect ({
    win: psychoJS.window, name: 'calibration_square', 
    width: [0.02, 0.02][0], height: [0.02, 0.02][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  calibrationClick = new core.Mouse({
    win: psychoJS.window,
  });
  calibrationClick.mouseClock = new util.Clock();
  // Initialize components for Routine "trackingTrial"
  trackingTrialClock = new util.Clock();
  tracking_square = new visual.Polygon({
    win: psychoJS.window, name: 'tracking_square', 
    edges: 100, size:[0.02, 0.02],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('red'), 
    fillColor: new util.Color('red'), 
    colorSpace: 'rgb', 
    opacity: 0.5, 
    depth: 0, 
    interpolate: true, 
  });
  
  trackingTxt = new visual.TextStim({
    win: psychoJS.window,
    name: 'trackingTxt',
    text: 'Great! we are now tracking your eye movements! look around the screen to see how it works! \n\nPlease remember is important for you to keep your head still during the experiment. \n\nPress space to start the experiment',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  tracking_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "task_intro"
  task_introClock = new util.Clock();
  instruction1Txt_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction1Txt_2',
    text: "Great! \n\nIn a moment you'll see pairs of faces with different expressions. Just look naturally at the faces—no need to focus on anything specific. Each pair will appear briefly. We're interested in your spontaneous reactions.\n\nIn total this will take about 2 minutes.\n\n\nPress space to start",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  start_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "show_faces"
  show_facesClock = new util.Clock();
  image_left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_left', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.3), 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_right', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.3, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  tracker = new visual.Polygon({
    win: psychoJS.window, name: 'tracker', 
    edges: 100, size:[0.02, 0.02],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('red'), 
    fillColor: new util.Color('red'), 
    colorSpace: 'rgb', 
    opacity: 0.5, 
    depth: -2, 
    interpolate: true, 
  });
  
  left_duration_indicator = new visual.Progress({
      win: psychoJS.window, name: 'left_duration_indicator',
      progress: 0.0,
      pos: [(- 0.55), (- 0.4)], size: [0.5, 0.1], anchor: 'center-left', units: 'height',
      barColor: 'white', backColor: null, borderColor: 'white', colorSpace: 'rgb',
      lineWidth: 4.0, opacity: 1.0, ori: 0.0,
      depth: -5
  })
  right_duration_indicator = new visual.Progress({
      win: psychoJS.window, name: 'right_duration_indicator',
      progress: 0.0,
      pos: [0.05, (- 0.4)], size: [0.5, 0.1], anchor: 'center-left', units: 'height',
      barColor: 'white', backColor: null, borderColor: 'white', colorSpace: 'rgb',
      lineWidth: 4.0, opacity: 1.0, ori: 0.0,
      depth: -6
  })
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  feedback_textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'feedback_textbox',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var initializeEyetrackingMaxDurationReached;
var initializeEyetrackingMaxDuration;
var initializeEyetrackingComponents;
function initializeEyetrackingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'initializeEyetracking' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    initializeEyetrackingClock.reset();
    routineTimer.reset();
    initializeEyetrackingMaxDurationReached = false;
    // update component parameters for each repeat
    // Show webcam thumbnail and face feedback box, but not face overlay and gaze dot
    window.webgazer.params.showVideoPreview = true;
    window.webgazer.params.showFaceFeedbackBox = true;
    window.webgazer.params.showFaceOverlay = false;
    window.webgazer.params.showGazeDot = false
    // Start eye tracking
    window.webgazer
        // Called on each eye tracking update
        .setGazeListener(function(data, clock) {
          if (data !== null) {
            // Remove first element from gazes array, add current gaze at the end
            window.xGazes.shift();
            window.xGazes.push(data.x);
            window.yGazes.shift();
            window.yGazes.push(data.y);
           }
        })
        .begin();
        //.showPredictionPoints(true); 
    
    
    psychoJS.experiment.addData('initializeEyetracking.started', globalClock.getTime());
    initializeEyetrackingMaxDuration = null
    // keep track of which components have finished
    initializeEyetrackingComponents = [];
    initializeEyetrackingComponents.push(webcamWarning);
    
    initializeEyetrackingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function initializeEyetrackingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'initializeEyetracking' ---
    // get current time
    t = initializeEyetrackingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Finish routine once everything is ready
    continueRoutine = 
      !window.webgazer.isReady() || 
      document.getElementById('webgazerFaceFeedbackBox') === null ||
      document.getElementById('webgazerVideoFeed') === null;
    
    // *webcamWarning* updates
    if (t >= 0.0 && webcamWarning.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      webcamWarning.tStart = t;  // (not accounting for frame time here)
      webcamWarning.frameNStart = frameN;  // exact frame index
      
      webcamWarning.setAutoDraw(true);
    }
    
    
    // if webcamWarning is active this frame...
    if (webcamWarning.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    initializeEyetrackingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function initializeEyetrackingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'initializeEyetracking' ---
    initializeEyetrackingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('initializeEyetracking.stopped', globalClock.getTime());
    // the Routine "initializeEyetracking" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var inst1MaxDurationReached;
var _inst1_resp_allKeys;
var inst1MaxDuration;
var inst1Components;
function inst1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inst1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    inst1Clock.reset();
    routineTimer.reset();
    inst1MaxDurationReached = false;
    // update component parameters for each repeat
    document.getElementById('webgazerFaceFeedbackBox').style.display = 'none';
    document.getElementById('webgazerVideoFeed').style.display = 'none';
    inst1_resp.keys = undefined;
    inst1_resp.rt = undefined;
    _inst1_resp_allKeys = [];
    psychoJS.experiment.addData('inst1.started', globalClock.getTime());
    inst1MaxDuration = null
    // keep track of which components have finished
    inst1Components = [];
    inst1Components.push(instruction1Txt);
    inst1Components.push(inst1_resp);
    
    inst1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function inst1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inst1' ---
    // get current time
    t = inst1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction1Txt* updates
    if (t >= 0.0 && instruction1Txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction1Txt.tStart = t;  // (not accounting for frame time here)
      instruction1Txt.frameNStart = frameN;  // exact frame index
      
      instruction1Txt.setAutoDraw(true);
    }
    
    
    // if instruction1Txt is active this frame...
    if (instruction1Txt.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *inst1_resp* updates
    if (t >= 0.0 && inst1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst1_resp.tStart = t;  // (not accounting for frame time here)
      inst1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { inst1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { inst1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { inst1_resp.clearEvents(); });
    }
    
    // if inst1_resp is active this frame...
    if (inst1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = inst1_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _inst1_resp_allKeys = _inst1_resp_allKeys.concat(theseKeys);
      if (_inst1_resp_allKeys.length > 0) {
        inst1_resp.keys = _inst1_resp_allKeys[_inst1_resp_allKeys.length - 1].name;  // just the last key pressed
        inst1_resp.rt = _inst1_resp_allKeys[_inst1_resp_allKeys.length - 1].rt;
        inst1_resp.duration = _inst1_resp_allKeys[_inst1_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    inst1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inst1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inst1' ---
    inst1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('inst1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(inst1_resp.corr, level);
    }
    psychoJS.experiment.addData('inst1_resp.keys', inst1_resp.keys);
    if (typeof inst1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('inst1_resp.rt', inst1_resp.rt);
        psychoJS.experiment.addData('inst1_resp.duration', inst1_resp.duration);
        routineTimer.reset();
        }
    
    inst1_resp.stop();
    // the Routine "inst1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var calibrationIntroMaxDurationReached;
var _calib1_resp_allKeys;
var calibrationIntroMaxDuration;
var calibrationIntroComponents;
function calibrationIntroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'calibrationIntro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    calibrationIntroClock.reset();
    routineTimer.reset();
    calibrationIntroMaxDurationReached = false;
    // update component parameters for each repeat
    calib1_resp.keys = undefined;
    calib1_resp.rt = undefined;
    _calib1_resp_allKeys = [];
    psychoJS.experiment.addData('calibrationIntro.started', globalClock.getTime());
    calibrationIntroMaxDuration = null
    // keep track of which components have finished
    calibrationIntroComponents = [];
    calibrationIntroComponents.push(calibrationTxt);
    calibrationIntroComponents.push(calib1_resp);
    
    calibrationIntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function calibrationIntroRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'calibrationIntro' ---
    // get current time
    t = calibrationIntroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *calibrationTxt* updates
    if (t >= 0.0 && calibrationTxt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      calibrationTxt.tStart = t;  // (not accounting for frame time here)
      calibrationTxt.frameNStart = frameN;  // exact frame index
      
      calibrationTxt.setAutoDraw(true);
    }
    
    
    // if calibrationTxt is active this frame...
    if (calibrationTxt.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *calib1_resp* updates
    if (t >= 0.0 && calib1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      calib1_resp.tStart = t;  // (not accounting for frame time here)
      calib1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { calib1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { calib1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { calib1_resp.clearEvents(); });
    }
    
    // if calib1_resp is active this frame...
    if (calib1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = calib1_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _calib1_resp_allKeys = _calib1_resp_allKeys.concat(theseKeys);
      if (_calib1_resp_allKeys.length > 0) {
        calib1_resp.keys = _calib1_resp_allKeys[_calib1_resp_allKeys.length - 1].name;  // just the last key pressed
        calib1_resp.rt = _calib1_resp_allKeys[_calib1_resp_allKeys.length - 1].rt;
        calib1_resp.duration = _calib1_resp_allKeys[_calib1_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    calibrationIntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function calibrationIntroRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'calibrationIntro' ---
    calibrationIntroComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('calibrationIntro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(calib1_resp.corr, level);
    }
    psychoJS.experiment.addData('calib1_resp.keys', calib1_resp.keys);
    if (typeof calib1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('calib1_resp.rt', calib1_resp.rt);
        psychoJS.experiment.addData('calib1_resp.duration', calib1_resp.duration);
        routineTimer.reset();
        }
    
    calib1_resp.stop();
    // the Routine "calibrationIntro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var calibrationIntro_2MaxDurationReached;
var _calib1_resp_2_allKeys;
var calibrationIntro_2MaxDuration;
var calibrationIntro_2Components;
function calibrationIntro_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'calibrationIntro_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    calibrationIntro_2Clock.reset();
    routineTimer.reset();
    calibrationIntro_2MaxDurationReached = false;
    // update component parameters for each repeat
    calib1_resp_2.keys = undefined;
    calib1_resp_2.rt = undefined;
    _calib1_resp_2_allKeys = [];
    psychoJS.experiment.addData('calibrationIntro_2.started', globalClock.getTime());
    calibrationIntro_2MaxDuration = null
    // keep track of which components have finished
    calibrationIntro_2Components = [];
    calibrationIntro_2Components.push(calibrationTxt_2);
    calibrationIntro_2Components.push(calib1_resp_2);
    
    calibrationIntro_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function calibrationIntro_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'calibrationIntro_2' ---
    // get current time
    t = calibrationIntro_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *calibrationTxt_2* updates
    if (t >= 0.0 && calibrationTxt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      calibrationTxt_2.tStart = t;  // (not accounting for frame time here)
      calibrationTxt_2.frameNStart = frameN;  // exact frame index
      
      calibrationTxt_2.setAutoDraw(true);
    }
    
    
    // if calibrationTxt_2 is active this frame...
    if (calibrationTxt_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *calib1_resp_2* updates
    if (t >= 0.0 && calib1_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      calib1_resp_2.tStart = t;  // (not accounting for frame time here)
      calib1_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { calib1_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { calib1_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { calib1_resp_2.clearEvents(); });
    }
    
    // if calib1_resp_2 is active this frame...
    if (calib1_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = calib1_resp_2.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _calib1_resp_2_allKeys = _calib1_resp_2_allKeys.concat(theseKeys);
      if (_calib1_resp_2_allKeys.length > 0) {
        calib1_resp_2.keys = _calib1_resp_2_allKeys[_calib1_resp_2_allKeys.length - 1].name;  // just the last key pressed
        calib1_resp_2.rt = _calib1_resp_2_allKeys[_calib1_resp_2_allKeys.length - 1].rt;
        calib1_resp_2.duration = _calib1_resp_2_allKeys[_calib1_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    calibrationIntro_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function calibrationIntro_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'calibrationIntro_2' ---
    calibrationIntro_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('calibrationIntro_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(calib1_resp_2.corr, level);
    }
    psychoJS.experiment.addData('calib1_resp_2.keys', calib1_resp_2.keys);
    if (typeof calib1_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('calib1_resp_2.rt', calib1_resp_2.rt);
        psychoJS.experiment.addData('calib1_resp_2.duration', calib1_resp_2.duration);
        routineTimer.reset();
        }
    
    calib1_resp_2.stop();
    // the Routine "calibrationIntro_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var calibration_trials;
function calibration_trialsLoopBegin(calibration_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    calibration_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'calibration_trials.xlsx',
      seed: undefined, name: 'calibration_trials'
    });
    psychoJS.experiment.addLoop(calibration_trials); // add the loop to the experiment
    currentLoop = calibration_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    calibration_trials.forEach(function() {
      snapshot = calibration_trials.getSnapshot();
    
      calibration_trialsLoopScheduler.add(importConditions(snapshot));
      calibration_trialsLoopScheduler.add(calibrationRoutineBegin(snapshot));
      calibration_trialsLoopScheduler.add(calibrationRoutineEachFrame());
      calibration_trialsLoopScheduler.add(calibrationRoutineEnd(snapshot));
      calibration_trialsLoopScheduler.add(calibration_trialsLoopEndIteration(calibration_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function calibration_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(calibration_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function calibration_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'images/image_pairs.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(show_facesRoutineBegin(snapshot));
      trialsLoopScheduler.add(show_facesRoutineEachFrame());
      trialsLoopScheduler.add(show_facesRoutineEnd(snapshot));
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var calibrationMaxDurationReached;
var callib_color;
var gotValidClick;
var calibrationMaxDuration;
var calibrationComponents;
function calibrationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'calibration' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    calibrationClock.reset();
    routineTimer.reset();
    calibrationMaxDurationReached = false;
    // update component parameters for each repeat
    // Position calibration_square using width and height of window
    var canvas = psychoJS.window.size;
    var scaling = [
      canvas[0] <= canvas[1]? 1: canvas[0] / canvas[1],
      canvas[1] <= canvas[0]? 1: canvas[1] / canvas[0]
    ];
    var newPos = [
        calibration_x * scaling[0],
        calibration_y * scaling[1]
    ];
    console.log(newPos);
    //calibration_square.setPos(newPos);
    callib_color = 'white';
    calibration_square.setPos([calibration_x, calibration_y]);
    // setup some python lists for storing info about the calibrationClick
    calibrationClick.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('calibration.started', globalClock.getTime());
    calibrationMaxDuration = null
    // keep track of which components have finished
    calibrationComponents = [];
    calibrationComponents.push(calibration_square);
    calibrationComponents.push(calibrationClick);
    
    calibrationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function calibrationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'calibration' ---
    // get current time
    t = calibrationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // returns type error - checking fix 
    
    // Hide webcam thumbnail if eyes are in validation box
    if (webgazer.checkEyesInValidationBox() === true) {
      // If last time that eyes were outside of validation box was longer than 
      // window.eyesReturnedDelay ago, hide thumbnail
      if (
        document.getElementById('webgazerFaceFeedbackBox').style.display != 'none' &&
        (new Date).getTime() > window.eyesExitedTimestamp + window.eyesReturnedDelay
      ) {   
        document.getElementById('webgazerFaceFeedbackBox').style.display = 'none';
        document.getElementById('webgazerVideoFeed').style.display = 'none';
      }
    } else {
        // Eyes outside of validation box; show thumbnail
        window.eyesExitedTimestamp = (new Date).getTime();
        document.getElementById('webgazerFaceFeedbackBox').style.display = 'block';
        document.getElementById('webgazerVideoFeed').style.display = 'block';
    }
    
    
    if (
      document.getElementById('webgazerFaceFeedbackBox').style.display != 'none' &&
      (new Date).getTime() > window.eyesExitedTimestamp + window.eyesReturnedDelay
    ) {   
      document.getElementById('webgazerFaceFeedbackBox').style.display = 'none';
      document.getElementById('webgazerVideoFeed').style.display = 'none';
    }
    
    
    // *calibration_square* updates
    if (t >= 0.5 && calibration_square.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      calibration_square.setFillColor(new util.Color(callib_color), false);
      // keep track of start time/frame for later
      calibration_square.tStart = t;  // (not accounting for frame time here)
      calibration_square.frameNStart = frameN;  // exact frame index
      
      calibration_square.setAutoDraw(true);
    }
    
    
    // if calibration_square is active this frame...
    if (calibration_square.status === PsychoJS.Status.STARTED) {
      // update params
      calibration_square.setFillColor(new util.Color(callib_color), false);
    }
    
    // *calibrationClick* updates
    if (t >= 0.5 && calibrationClick.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      calibrationClick.tStart = t;  // (not accounting for frame time here)
      calibrationClick.frameNStart = frameN;  // exact frame index
      
      calibrationClick.status = PsychoJS.Status.STARTED;
      calibrationClick.mouseClock.reset();
      prevButtonState = calibrationClick.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if calibrationClick is active this frame...
    if (calibrationClick.status === PsychoJS.Status.STARTED) {
      _mouseButtons = calibrationClick.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          calibrationClick.clickableObjects = eval(calibration_square)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(calibrationClick.clickableObjects)) {
              calibrationClick.clickableObjects = [calibrationClick.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of calibrationClick.clickableObjects) {
              if (obj.contains(calibrationClick)) {
                  gotValidClick = true;
                  calibrationClick.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              calibrationClick.clicked_name.push(null);
          }
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    calibrationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function calibrationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'calibration' ---
    calibrationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('calibration.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = calibrationClick.getPos();
    _mouseButtons = calibrationClick.getPressed();
    psychoJS.experiment.addData('calibrationClick.x', _mouseXYs[0]);
    psychoJS.experiment.addData('calibrationClick.y', _mouseXYs[1]);
    psychoJS.experiment.addData('calibrationClick.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('calibrationClick.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('calibrationClick.rightButton', _mouseButtons[2]);
    if (calibrationClick.clicked_name.length > 0) {
      psychoJS.experiment.addData('calibrationClick.clicked_name', calibrationClick.clicked_name[0]);}
    // the Routine "calibration" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trackingTrialMaxDurationReached;
var _tracking_resp_allKeys;
var trackingTrialMaxDuration;
var trackingTrialComponents;
function trackingTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trackingTrial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trackingTrialClock.reset();
    routineTimer.reset();
    trackingTrialMaxDurationReached = false;
    // update component parameters for each repeat
    tracking_resp.keys = undefined;
    tracking_resp.rt = undefined;
    _tracking_resp_allKeys = [];
    // Remove the click tracker used for calibration
    window.webgazer.removeMouseEventListeners();
    
    //hide the video thumbnail 
    document.getElementById('webgazerFaceFeedbackBox').style.display = 'none';
    document.getElementById('webgazerVideoFeed').style.display = 'none';
    psychoJS.experiment.addData('trackingTrial.started', globalClock.getTime());
    trackingTrialMaxDuration = null
    // keep track of which components have finished
    trackingTrialComponents = [];
    trackingTrialComponents.push(tracking_square);
    trackingTrialComponents.push(trackingTxt);
    trackingTrialComponents.push(tracking_resp);
    
    trackingTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trackingTrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trackingTrial' ---
    // get current time
    t = trackingTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *tracking_square* updates
    if (t >= 0.0 && tracking_square.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tracking_square.tStart = t;  // (not accounting for frame time here)
      tracking_square.frameNStart = frameN;  // exact frame index
      
      tracking_square.setAutoDraw(true);
    }
    
    
    // if tracking_square is active this frame...
    if (tracking_square.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *trackingTxt* updates
    if (t >= 0.0 && trackingTxt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trackingTxt.tStart = t;  // (not accounting for frame time here)
      trackingTxt.frameNStart = frameN;  // exact frame index
      
      trackingTxt.setAutoDraw(true);
    }
    
    
    // if trackingTxt is active this frame...
    if (trackingTxt.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *tracking_resp* updates
    if (t >= 0.0 && tracking_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tracking_resp.tStart = t;  // (not accounting for frame time here)
      tracking_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { tracking_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { tracking_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { tracking_resp.clearEvents(); });
    }
    
    // if tracking_resp is active this frame...
    if (tracking_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = tracking_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _tracking_resp_allKeys = _tracking_resp_allKeys.concat(theseKeys);
      if (_tracking_resp_allKeys.length > 0) {
        tracking_resp.keys = _tracking_resp_allKeys[_tracking_resp_allKeys.length - 1].name;  // just the last key pressed
        tracking_resp.rt = _tracking_resp_allKeys[_tracking_resp_allKeys.length - 1].rt;
        tracking_resp.duration = _tracking_resp_allKeys[_tracking_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // Hide webcam thumbnail if eyes are in validation box
    if (webgazer.checkEyesInValidationBox() === true) {
      // If last time that eyes were outside of validation box was longer than 
      // window.eyesReturnedDelay ago, hide thumbnail
      if (
        document.getElementById('webgazerFaceFeedbackBox').style.display != 'none' &&
        (new Date).getTime() > window.eyesExitedTimestamp + window.eyesReturnedDelay
      ) {   
        document.getElementById('webgazerFaceFeedbackBox').style.display = 'none';
        document.getElementById('webgazerVideoFeed').style.display = 'none';
      }
    } else {
        // Eyes outside of validation box; show thumbnail
        window.eyesExitedTimestamp = (new Date).getTime();
        document.getElementById('webgazerFaceFeedbackBox').style.display = 'block';
        document.getElementById('webgazerVideoFeed').style.display = 'block';
    }
    // Update tracking square to the average of last n gazes
    let x = util.sum(window.xGazes) / window.xGazes.length;
    let y = util.sum(window.yGazes) / window.yGazes.length;
    // Set tracking square to x and y, transformed to height units
    tracking_square.setPos(
      util.to_height(
        [
          x - psychoJS.window.size[0] / 2,
          -1 * (y - psychoJS.window.size[1] / 2)
        ], 
        'pix', 
        psychoJS.window
      )
    );
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trackingTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trackingTrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trackingTrial' ---
    trackingTrialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trackingTrial.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(tracking_resp.corr, level);
    }
    psychoJS.experiment.addData('tracking_resp.keys', tracking_resp.keys);
    if (typeof tracking_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('tracking_resp.rt', tracking_resp.rt);
        psychoJS.experiment.addData('tracking_resp.duration', tracking_resp.duration);
        routineTimer.reset();
        }
    
    tracking_resp.stop();
    // the Routine "trackingTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var task_introMaxDurationReached;
var _start_resp_allKeys;
var task_introMaxDuration;
var task_introComponents;
function task_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'task_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    task_introClock.reset();
    routineTimer.reset();
    task_introMaxDurationReached = false;
    // update component parameters for each repeat
    start_resp.keys = undefined;
    start_resp.rt = undefined;
    _start_resp_allKeys = [];
    psychoJS.experiment.addData('task_intro.started', globalClock.getTime());
    task_introMaxDuration = null
    // keep track of which components have finished
    task_introComponents = [];
    task_introComponents.push(instruction1Txt_2);
    task_introComponents.push(start_resp);
    
    task_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function task_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'task_intro' ---
    // get current time
    t = task_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction1Txt_2* updates
    if (t >= 0.0 && instruction1Txt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction1Txt_2.tStart = t;  // (not accounting for frame time here)
      instruction1Txt_2.frameNStart = frameN;  // exact frame index
      
      instruction1Txt_2.setAutoDraw(true);
    }
    
    
    // if instruction1Txt_2 is active this frame...
    if (instruction1Txt_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *start_resp* updates
    if (t >= 0.0 && start_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_resp.tStart = t;  // (not accounting for frame time here)
      start_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_resp.clearEvents(); });
    }
    
    // if start_resp is active this frame...
    if (start_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _start_resp_allKeys = _start_resp_allKeys.concat(theseKeys);
      if (_start_resp_allKeys.length > 0) {
        start_resp.keys = _start_resp_allKeys[_start_resp_allKeys.length - 1].name;  // just the last key pressed
        start_resp.rt = _start_resp_allKeys[_start_resp_allKeys.length - 1].rt;
        start_resp.duration = _start_resp_allKeys[_start_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    task_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function task_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'task_intro' ---
    task_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('task_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(start_resp.corr, level);
    }
    psychoJS.experiment.addData('start_resp.keys', start_resp.keys);
    if (typeof start_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('start_resp.rt', start_resp.rt);
        psychoJS.experiment.addData('start_resp.duration', start_resp.duration);
        routineTimer.reset();
        }
    
    start_resp.stop();
    // the Routine "task_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var show_facesMaxDurationReached;
var looking_left;
var left_start_times;
var left_end_times;
var start_time_left;
var end_time_left;
var total_duration_left;
var current_duration_left;
var looking_right;
var right_start_times;
var right_end_times;
var start_time_right;
var end_time_right;
var total_duration_right;
var current_duration_right;
var show_facesMaxDuration;
var show_facesComponents;
function show_facesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'show_faces' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    show_facesClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    show_facesMaxDurationReached = false;
    // update component parameters for each repeat
    image_left.setImage(("images/" + imageleft));
    image_right.setImage(("images/" + imageright));
    // Remove the click tracker used for calibration
    window.webgazer.removeMouseEventListeners();
    
    //hide the video thumbnail 
    document.getElementById('webgazerFaceFeedbackBox').style.display = 'none';
    document.getElementById('webgazerVideoFeed').style.display = 'none';
    // Run 'Begin Routine' code from track_look_times
    looking_left = false;
    left_start_times = [];
    left_end_times = [];
    start_time_left = 0;
    end_time_left = 0;
    total_duration_left = 0;
    current_duration_left = 0;
    looking_right = false;
    right_start_times = [];
    right_end_times = [];
    start_time_right = 0;
    end_time_right = 0;
    total_duration_right = 0;
    current_duration_right = 0;
    
    psychoJS.experiment.addData('show_faces.started', globalClock.getTime());
    show_facesMaxDuration = null
    // keep track of which components have finished
    show_facesComponents = [];
    show_facesComponents.push(image_left);
    show_facesComponents.push(image_right);
    show_facesComponents.push(tracker);
    show_facesComponents.push(left_duration_indicator);
    show_facesComponents.push(right_duration_indicator);
    
    show_facesComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function show_facesRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'show_faces' ---
    // get current time
    t = show_facesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_left* updates
    if (t >= 0.0 && image_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_left.tStart = t;  // (not accounting for frame time here)
      image_left.frameNStart = frameN;  // exact frame index
      
      image_left.setAutoDraw(true);
    }
    
    
    // if image_left is active this frame...
    if (image_left.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_left.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_left.tStop = t;  // not accounting for scr refresh
      image_left.frameNStop = frameN;  // exact frame index
      // update status
      image_left.status = PsychoJS.Status.FINISHED;
      image_left.setAutoDraw(false);
    }
    
    
    // *image_right* updates
    if (t >= 0.0 && image_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_right.tStart = t;  // (not accounting for frame time here)
      image_right.frameNStart = frameN;  // exact frame index
      
      image_right.setAutoDraw(true);
    }
    
    
    // if image_right is active this frame...
    if (image_right.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_right.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_right.tStop = t;  // not accounting for scr refresh
      image_right.frameNStop = frameN;  // exact frame index
      // update status
      image_right.status = PsychoJS.Status.FINISHED;
      image_right.setAutoDraw(false);
    }
    
    
    // *tracker* updates
    if (t >= 0.0 && tracker.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tracker.tStart = t;  // (not accounting for frame time here)
      tracker.frameNStart = frameN;  // exact frame index
      
      tracker.setAutoDraw(true);
    }
    
    
    // if tracker is active this frame...
    if (tracker.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (tracker.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      tracker.tStop = t;  // not accounting for scr refresh
      tracker.frameNStop = frameN;  // exact frame index
      // update status
      tracker.status = PsychoJS.Status.FINISHED;
      tracker.setAutoDraw(false);
    }
    
    // Hide webcam thumbnail if eyes are in validation box
    if (webgazer.checkEyesInValidationBox() === true) {
      // If last time that eyes were outside of validation box was longer than 
      // window.eyesReturnedDelay ago, hide thumbnail
      if (
        document.getElementById('webgazerFaceFeedbackBox').style.display != 'none' &&
        (new Date).getTime() > window.eyesExitedTimestamp + window.eyesReturnedDelay
      ) {   
        document.getElementById('webgazerFaceFeedbackBox').style.display = 'none';
        document.getElementById('webgazerVideoFeed').style.display = 'none';
      }
    } else {
        // Eyes outside of validation box; show thumbnail
        window.eyesExitedTimestamp = (new Date).getTime();
        document.getElementById('webgazerFaceFeedbackBox').style.display = 'block';
        document.getElementById('webgazerVideoFeed').style.display = 'block';
    }
    // Update tracking square to the average of last n gazes
    let x = util.sum(window.xGazes) / window.xGazes.length;
    let y = util.sum(window.yGazes) / window.yGazes.length;
    // Set tracking square to x and y, transformed to height units
    tracker.setPos(
      util.to_height(
        [
          x - psychoJS.window.size[0] / 2,
          -1 * (y - psychoJS.window.size[1] / 2)
        ], 
        'pix', 
        psychoJS.window
      )
    );
    // Run 'Each Frame' code from track_look_times
    if (image_left.contains(tracker)) {
        if ((! looking_left)) {
            start_time_left = t;
            left_start_times.push(start_time_left);
            looking_left = true;
        } else {
            current_duration_left = (t - start_time_left);
        }
    } else {
        if (looking_left) {
            end_time_left = t;
            left_end_times.push(end_time_left);
            total_duration_left += (end_time_left - start_time_left);
            looking_left = false;
        }
        current_duration_left = 0;
    }
    if (image_right.contains(tracker)) {
        if ((! looking_right)) {
            start_time_right = t;
            right_start_times.push(start_time_right);
            looking_right = true;
        } else {
            current_duration_right = (t - start_time_right);
        }
    } else {
        if (looking_right) {
            end_time_right = t;
            right_end_times.push(end_time_right);
            total_duration_right += (end_time_right - start_time_right);
            looking_right = false;
        }
        current_duration_right = 0;
    }
    
    
    // *left_duration_indicator* updates
    if (t >= 0 && left_duration_indicator.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      left_duration_indicator.setProgress(((current_duration_left + total_duration_left) / 5), false);
      // keep track of start time/frame for later
      left_duration_indicator.tStart = t;  // (not accounting for frame time here)
      left_duration_indicator.frameNStart = frameN;  // exact frame index
      
      left_duration_indicator.setAutoDraw(true);
    }
    
    
    // if left_duration_indicator is active this frame...
    if (left_duration_indicator.status === PsychoJS.Status.STARTED) {
      // update params
      left_duration_indicator.setProgress(((current_duration_left + total_duration_left) / 5), false);
    }
    
    frameRemains = 0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (left_duration_indicator.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      left_duration_indicator.tStop = t;  // not accounting for scr refresh
      left_duration_indicator.frameNStop = frameN;  // exact frame index
      // update status
      left_duration_indicator.status = PsychoJS.Status.FINISHED;
      left_duration_indicator.setAutoDraw(false);
    }
    
    
    // *right_duration_indicator* updates
    if (t >= 0 && right_duration_indicator.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      right_duration_indicator.setProgress(((current_duration_right + total_duration_right) / 5), false);
      // keep track of start time/frame for later
      right_duration_indicator.tStart = t;  // (not accounting for frame time here)
      right_duration_indicator.frameNStart = frameN;  // exact frame index
      
      right_duration_indicator.setAutoDraw(true);
    }
    
    
    // if right_duration_indicator is active this frame...
    if (right_duration_indicator.status === PsychoJS.Status.STARTED) {
      // update params
      right_duration_indicator.setProgress(((current_duration_right + total_duration_right) / 5), false);
    }
    
    frameRemains = 0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (right_duration_indicator.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      right_duration_indicator.tStop = t;  // not accounting for scr refresh
      right_duration_indicator.frameNStop = frameN;  // exact frame index
      // update status
      right_duration_indicator.status = PsychoJS.Status.FINISHED;
      right_duration_indicator.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    show_facesComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var feedback_text;
function show_facesRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'show_faces' ---
    show_facesComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('show_faces.stopped', globalClock.getTime());
    // Run 'End Routine' code from track_look_times
    if (looking_left) {
        end_time_left = t;
        left_end_times.push(end_time_left);
        total_duration_left += (end_time_left - start_time_left);
        looking_left = false;
    }
    if (looking_right) {
        end_time_right = t;
        right_end_times.push(end_time_right);
        total_duration_right += (end_time_right - start_time_right);
        looking_right = false;
    }
    psychoJS.experiment.addData("total_duration_left", total_duration_left);
    psychoJS.experiment.addData("left_look_onsets", left_start_times);
    psychoJS.experiment.addData("left_look_offsets", left_end_times);
    psychoJS.experiment.addData("n_left_looks", left_start_times.length);
    psychoJS.experiment.addData("total_duration_right", total_duration_right);
    psychoJS.experiment.addData("right_look_onsets", right_start_times);
    psychoJS.experiment.addData("right_look_offsets", right_end_times);
    psychoJS.experiment.addData("n_right_looks", right_start_times.length);
    if ((total_duration_left > total_duration_right)) {
        feedback_text = "You spent more time looking at the LEFT image";
    } else {
        if ((total_duration_left < total_duration_right)) {
            feedback_text = "You spent more time looking at the RIGHT image";
        } else {
            feedback_text = "You spent the same amount of time inspecting both images";
        }
    }
    
    if (routineForceEnded) {
        routineTimer.reset();} else if (show_facesMaxDurationReached) {
        show_facesClock.add(show_facesMaxDuration);
    } else {
        show_facesClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    feedback_textbox.setText(feedback_text);
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedback_textbox);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_textbox* updates
    if (t >= 0.0 && feedback_textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_textbox.tStart = t;  // (not accounting for frame time here)
      feedback_textbox.frameNStart = frameN;  // exact frame index
      
      feedback_textbox.setAutoDraw(true);
    }
    
    
    // if feedback_textbox is active this frame...
    if (feedback_textbox.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (feedback_textbox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      feedback_textbox.tStop = t;  // not accounting for scr refresh
      feedback_textbox.frameNStop = frameN;  // exact frame index
      // update status
      feedback_textbox.status = PsychoJS.Status.FINISHED;
      feedback_textbox.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (feedbackMaxDurationReached) {
        feedbackClock.add(feedbackMaxDuration);
    } else {
        feedbackClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
