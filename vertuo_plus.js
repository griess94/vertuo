(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"vertuo plus_atlas_1", frames: [[0,1004,375,321],[0,1327,375,321],[0,1650,375,321],[377,1004,375,321],[377,1327,375,321],[377,1650,375,321],[566,0,375,321],[566,323,375,321],[566,646,375,321],[943,0,375,321],[1320,0,375,321],[943,323,375,321],[1320,323,375,321],[943,646,375,321],[1320,646,375,321],[754,969,375,321],[754,1292,375,321],[754,1615,375,321],[1131,969,375,321],[1508,969,375,321],[1131,1292,375,321],[1131,1615,375,321],[1508,1292,375,321],[1508,1615,375,321],[0,0,564,1002]]},
		{name:"vertuo plus_atlas_2", frames: [[0,0,383,239],[0,241,383,239],[0,482,383,239],[0,723,383,239],[0,964,383,239],[0,1205,383,239],[0,1446,383,239],[0,1687,383,239],[385,0,383,239],[385,241,383,239],[385,482,383,239],[385,723,383,239],[385,964,383,239],[385,1205,383,239],[385,1446,383,239],[385,1687,383,239],[770,0,383,239],[770,241,383,239],[770,482,383,239],[770,723,383,239],[770,964,383,239],[770,1205,383,239],[770,1446,383,239],[770,1687,270,186]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._02022018110711590_1 = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._02022018110713796_1 = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._08072016100811130 = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._09032017104417590_1 = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._09032017104432690_1 = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._1212201423121568 = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._12122014231342893 = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._12122014231949914 = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._12122014232013776 = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._12122014235042227 = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._13122014000341958 = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._13122014000613848 = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._13122014033322459 = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._14032016093727355_1 = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._14032016093938695_1 = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._26092017155319984_4 = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib._26092017155320912_1 = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib._27052015175249031 = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._29012015123004986 = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib._30072015160714667 = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib._42591a375x321copy2 = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._42591a375x321copy = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._42591a375x321 = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._43169bpic375x3211 = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._43169bpic375x3212 = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._74352 = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._74392 = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._76222 = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._76452 = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._76462 = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._76542 = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._76912 = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._77042 = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._77112 = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._77122 = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib._77142 = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib._77152 = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.capriccio = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Capsule_OL_Ispirazione_Napoli_Front_View_Shadow = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Capsule_OL_Ispirazione_Venezia_Front_View_Shadow = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Capsule_VL_MilkyWorld_BiancoForte_Front_shadow = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Capsule_VL_MilkyWorld_BiancoLeggero = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.FortissioLungo = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Kazar = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.livanto = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.shish = function() {
	this.initialize(ss["vertuo plus_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.ארונדיו = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.פורטדו = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.פולקפה = function() {
	this.initialize(ss["vertuo plus_atlas_2"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.venzia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.Capsule_OL_Ispirazione_Venezia_Front_View_Shadow();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AsGAAIYNAA");
	this.shape.setTransform(77.45,135.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.shape},{t:this.instance,p:{y:-2}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-2,156.9,138.3);


(lib.roma = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._74392();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AplAAITLAA");
	this.shape.setTransform(79.675,140.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.shape},{t:this.instance,p:{y:-1}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,154.9,143);


(lib.rist = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._77042();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ApHAAISPAA");
	this.shape.setTransform(77.175,127.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.shape},{t:this.instance,p:{y:-2}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.napoli = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.Capsule_OL_Ispirazione_Napoli_Front_View_Shadow();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ApJAAISTAA");
	this.shape.setTransform(76.175,122.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.shape},{t:this.instance,p:{y:-2}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.livanto_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.livanto();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AqKAAIUVAA");
	this.shape.setTransform(74.225,135.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.shape},{t:this.instance,p:{y:-2}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,138.3);


(lib.kazr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.Kazar();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ApCAAISFAA");
	this.shape.setTransform(77.725,126.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.shape},{t:this.instance,p:{y:-2}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.arpjo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._76912();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AphAAITDAA");
	this.shape.setTransform(75.925,122.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.shape},{t:this.instance,p:{y:-2}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.line = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ap4AAITxAA");
	this.shape.setTransform(63.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,128.6,2);


(lib.pul = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.פולקפה();
	this.instance.setTransform(0,54.8,0.203,0.2512,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pul, new cjs.Rectangle(0,0,46.7,54.8), null);


(lib.altu2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._09032017104432690_1();
	this.instance.setTransform(0,0,0.5232,0.5126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.altu2, new cjs.Rectangle(0,0,200.4,122.5), null);


(lib.alto1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._09032017104417590_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.alto1, new cjs.Rectangle(0,0,383,239), null);


(lib.voltesoBlcak = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._12122014231949914();
	this.instance.setTransform(0,0,0.494,0.4613);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.voltesoBlcak, new cjs.Rectangle(0,0,189.2,110.3), null);


(lib.hzlinoblack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._42591a375x321copy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hzlinoblack, new cjs.Rectangle(0,0,375,321), null);


(lib.decafe80black = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._12122014232013776();
	this.instance.setTransform(0,0,0.494,0.4613);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.decafe80black, new cjs.Rectangle(0,0,189.2,110.3), null);


(lib.black26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._43169bpic375x3212();
	this.instance.setTransform(0,0,0.3439,0.3206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black26, new cjs.Rectangle(0,0,129,102.9), null);


(lib.black25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._43169bpic375x3211();
	this.instance.setTransform(0,0,0.3439,0.3206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black25, new cjs.Rectangle(0,0,129,102.9), null);


(lib.black24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._02022018110713796_1();
	this.instance.setTransform(0,0,0.3439,0.3206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black24, new cjs.Rectangle(0,0,131.7,76.6), null);


(lib.black23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._02022018110711590_1();
	this.instance.setTransform(0,0,0.3439,0.3206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black23, new cjs.Rectangle(0,0,131.7,76.6), null);


(lib.black22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ארונדיו();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black22, new cjs.Rectangle(0,0,383,239), null);


(lib.black21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._26092017155319984_4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black21, new cjs.Rectangle(0,0,383,239), null);


(lib.black20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._26092017155320912_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black20, new cjs.Rectangle(0,0,383,239), null);


(lib.black19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.פורטדו();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black19, new cjs.Rectangle(0,0,383,239), null);


(lib.black18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._08072016100811130();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black18, new cjs.Rectangle(0,0,383,239), null);


(lib.black17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._14032016093727355_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black17, new cjs.Rectangle(0,0,383,239), null);


(lib.black16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._14032016093938695_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black16, new cjs.Rectangle(0,0,383,239), null);


(lib.black15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._29012015123004986();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black15, new cjs.Rectangle(0,0,383,239), null);


(lib.black14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._1212201423121568();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black14, new cjs.Rectangle(0,0,383,239), null);


(lib.black13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._13122014000613848();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black13, new cjs.Rectangle(0,0,383,239), null);


(lib.black11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._13122014033322459();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black11, new cjs.Rectangle(0,0,383,239), null);


(lib.black10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._30072015160714667();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black10, new cjs.Rectangle(0,0,383,239), null);


(lib.black9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._42591a375x321copy2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black9, new cjs.Rectangle(0,0,375,321), null);


(lib.black8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Capsule_VL_MilkyWorld_BiancoLeggero();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black8, new cjs.Rectangle(0,0,383,239), null);


(lib.black7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Capsule_VL_MilkyWorld_BiancoForte_Front_shadow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black7, new cjs.Rectangle(0,0,383,239), null);


(lib.black5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._42591a375x321();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black5, new cjs.Rectangle(0,0,375,321), null);


(lib.black4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._12122014235042227();
	this.instance.setTransform(0,0,0.494,0.4613);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black4, new cjs.Rectangle(0,0,189.2,110.3), null);


(lib.black3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._12122014231342893();
	this.instance.setTransform(0,0,0.494,0.4613);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black3, new cjs.Rectangle(0,0,189.2,110.3), null);


(lib.balck12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._13122014000341958();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.balck12, new cjs.Rectangle(0,0,383,239), null);


(lib.voloto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._76452();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(76.35,121.4,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-3}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,154.9,138.2);


(lib.vivalto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._76462();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(77.45,123.1,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.Onik = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._74352();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(78.5,125.45,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.Oety = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._77142();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(76.4,126.8,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.Ocolo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._77152();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(78.5,128.3,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.linizo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._76222();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(74.3,115.45,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.indo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._77112();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(77.45,130.5,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.india = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._77122();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(78,134.55,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-1}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,154.9,136.6);


(lib.forti = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.capriccio();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(76.1,118.15,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.envivo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._76542();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(75.35,114.15,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.cosi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._27052015175249031();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(75.35,117.6,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.cap = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.FortissioLungo();
	this.instance.setTransform(0,0,0.4131,0.4212);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.setTransform(76.4,115.2,1,1,0,0,0,63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:-2}},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,154.9,137.2);


(lib.con9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.pul();
	this.instance.setTransform(187.05,27.4,1,1,0,0,0,23.4,27.4);

	this.text = new cjs.Text("ניקארגוואה", "normal 400 33px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 160;
	this.text.parent = this;
	this.text.setTransform(81.8,9);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.047)").s().p("AwbDvIAAndMAg3AAAIAAHdg");
	this.shape.setTransform(105.175,30.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AsxAAIZjAA");
	this.shape_1.setTransform(81.8125,54.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.047)").s().p("AJJDvI5kAAIAAndMAg3AAAIAAHdg");
	this.shape_2.setTransform(105.175,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{lineHeight:44.25}},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text,p:{lineHeight:45.25}},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,211.4,55.8);


(lib.con8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.pul();
	this.instance.setTransform(167.45,27.4,1,1,0,0,0,23.4,27.4);

	this.text = new cjs.Text("גוטאמלה", "normal 400 33px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 140;
	this.text.parent = this;
	this.text.setTransform(72,9.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.047)").s().p("Au5DrIAAnVIdzAAIAAHVg");
	this.shape.setTransform(95.375,31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ArPAAIWGAAIAZAA");
	this.shape_1.setTransform(72.025,54.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.047)").s().p("AHNDsI2GgBIAAnWIdzAAIAAHWInTABg");
	this.shape_2.setTransform(95.375,31.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{lineHeight:44.25}},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text,p:{lineHeight:45.25}},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,191.8,55.8);


(lib.con7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.pul();
	this.instance.setTransform(155.15,27.4,1,1,0,0,0,23.4,27.4);

	this.text = new cjs.Text("אתיופיה", "normal 400 33px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 128;
	this.text.parent = this;
	this.text.setTransform(65.85,9.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.047)").s().p("At7DqIAAnTIb3AAIAAHTg");
	this.shape.setTransform(89.225,30.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AqSAAIUlAA");
	this.shape_1.setTransform(65.875,54.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{lineHeight:44.25}},{t:this.instance}]}).to({state:[{t:this.shape},{t:this.shape_1},{t:this.text,p:{lineHeight:45.25}},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,179.5,55.8);


(lib.con6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.pul();
	this.instance.setTransform(89.7,27.4,1,1,0,0,0,23.4,27.4);

	this.text = new cjs.Text("הודו", "normal 400 33px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 62;
	this.text.parent = this;
	this.text.setTransform(33.15,9.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.047)").s().p("Ao0DsIAAnXIRpAAIAAHXg");
	this.shape.setTransform(56.5,31.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AlLAAIKXAA");
	this.shape_1.setTransform(33.15,54.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.047)").s().p("ABiDsIqWAAIAAnXIRpAAIAAHXg");
	this.shape_2.setTransform(56.5,31.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{lineHeight:44.25}},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text,p:{lineHeight:45.25}},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,114,55.8);


(lib.con5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.pul();
	this.instance.setTransform(127.4,27.4,1,1,0,0,0,23.4,27.4);

	this.kenya = new cjs.Text("קניה", "normal 400 33px 'Assistant'");
	this.kenya.name = "kenya";
	this.kenya.textAlign = "center";
	this.kenya.lineHeight = 44;
	this.kenya.lineWidth = 66;
	this.kenya.parent = this;
	this.kenya.setTransform(68.95,9.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.kenya);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.047)").s().p("ArVDtIAAnZIWrAAIAAHZg");
	this.shape.setTransform(72.575,31.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AFfAAIq9AA");
	this.shape_1.setTransform(68.95,54.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.047)").s().p("AE6DtIq8AAIK8AAIq8AAIlTAAIAAnZIWrAAIAAHZg");
	this.shape_2.setTransform(72.575,31.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.kenya,p:{lineHeight:44.25}},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.kenya,p:{lineHeight:45.25}},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150.7,55.9);


(lib.con4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.pul();
	this.instance.setTransform(127.4,27.4,1,1,0,0,0,23.4,27.4);

	this.text = new cjs.Text("ברזיל", "normal 400 33px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,9.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.047)").s().p("ArxDsIAAnXIXiAAIAAHXg");
	this.shape.setTransform(75.35,31.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AoAAAIQBAA");
	this.shape_1.setTransform(51.2625,54.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.047)").s().p("AEQDsIwBAAIAAnXIXiAAIAAHXg");
	this.shape_2.setTransform(75.35,31.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{lineHeight:44.25}},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text,p:{lineHeight:45.25}},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,151.7,55.8);


(lib.con3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.text = new cjs.Text("קולומביה", "normal 400 33px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 131;
	this.text.parent = this;
	this.text.setTransform(67.7,9.6);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.instance = new lib.pul();
	this.instance.setTransform(158.85,27.4,1,1,0,0,0,23.4,27.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.047)").s().p("AuOEIIAAoPIcdAAIAAIPg");
	this.shape.setTransform(91.075,28.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AqkAAIVJAA");
	this.shape_1.setTransform(67.7125,54.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.047)").s().p("AG7EII1JAAIAAoPIcdAAIAAIPg");
	this.shape_2.setTransform(91.075,28.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.text,p:{lineHeight:44.25}}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.text,p:{lineHeight:45.25}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,183.2,55.9);


(lib.con2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.pul();
	this.instance.setTransform(207.95,27.4,1,1,0,0,0,23.4,27.4);

	this.text = new cjs.Text("קוסטה ריקה", "normal 400 33px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 180;
	this.text.parent = this;
	this.text.setTransform(91.8,7.6);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.047)").s().p("AyDEIIAAoPMAkHAAAIAAIPg");
	this.shape.setTransform(115.625,26.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AuaAAIc1AA");
	this.shape_1.setTransform(92.2625,52.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.047)").s().p("AKxEII80AAIAAoPMAkHAAAIAAIPg");
	this.shape_2.setTransform(115.625,26.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{lineHeight:44.25}},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text,p:{lineHeight:45.25}},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,232.3,54.8);


(lib.con1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.text = new cjs.Text("מקסיקו", "normal 400 33px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 111;
	this.text.parent = this;
	this.text.setTransform(57.35,5.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.instance = new lib.pul();
	this.instance.setTransform(138.1,27.4,1,1,0,0,0,23.4,27.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.047)").s().p("AsmEAIAAn/IZNAAIAAH/g");
	this.shape.setTransform(80.7,29.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Ao9AAIR7AA");
	this.shape_1.setTransform(57.375,50.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,153,153,0.047)").s().p("AsmEAIAAgoIAAnXIZNAAIAAH/gAFVDYIx7AAg");
	this.shape_2.setTransform(80.7,29.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.text,p:{lineHeight:44.25}}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.text,p:{lineHeight:45.25}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,162.4,54.8);


(lib.volteso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._12122014231949914();
	this.instance.setTransform(2,0,0.494,0.4613);

	this.black1 = new lib.voltesoBlcak();
	this.black1.name = "black1";
	this.black1.setTransform(95.6,55.1,1,1,0,0,0,94.6,55.1);
	this.black1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.black1.cache(-2,-2,193,114);

	this.text = new cjs.Text("ולטוסו", "normal 400 33px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 106;
	this.text.parent = this;
	this.text.setTransform(97.95,98.1);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:2}}]}).to({state:[{t:this.black1}]},1).to({state:[{t:this.instance,p:{x:1}},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,0,193,143.4);


(lib.vanik = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._42591a375x321();

	this.black5 = new lib.black5();
	this.black5.name = "black5";
	this.black5.setTransform(187.5,160.5,1,1,0,0,0,187.5,160.5);
	this.black5.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.black5.cache(-2,-2,379,325);

	this.text = new cjs.Text("פאי וניל", "normal 400 60px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 212;
	this.text.parent = this;
	this.text.setTransform(196.05,287.15);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black5}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,379,374.4);


(lib.stormio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._13122014000341958();

	this.black12 = new lib.balck12();
	this.black12.name = "black12";
	this.black12.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black12.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(50, 0, -100, 0))];
	this.black12.cache(-2,-2,387,243);

	this.text = new cjs.Text("סטורמיו", "normal 400 60px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 223;
	this.text.parent = this;
	this.text.setTransform(197.6,193.25);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black12}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,273.9);


(lib.sollu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._14032016093938695_1();

	this.black16 = new lib.black16();
	this.black16.name = "black16";
	this.black16.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black16.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20, 0, -100, 0))];
	this.black16.cache(-2,-2,387,243);

	this.text = new cjs.Text("סולליו", "normal 400 60px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 172;
	this.text.parent = this;
	this.text.setTransform(191.5,199.7);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black16}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,280.4);


(lib.scoro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._26092017155320912_1();

	this.black20 = new lib.black20();
	this.black20.name = "black20";
	this.black20.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black20.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(96, 0, -100, 0))];
	this.black20.cache(-2,-2,387,243);

	this.text = new cjs.Text("דאבל אספרסו סקורו", "normal 400 49px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 66;
	this.text.lineWidth = 382;
	this.text.parent = this;
	this.text.setTransform(193.2,200.75);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black20}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,362.1);


(lib.nets = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._42591a375x321copy();

	this.black6 = new lib.hzlinoblack();
	this.black6.name = "black6";
	this.black6.setTransform(187.5,160.5,1,1,0,0,0,187.5,160.5);
	this.black6.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(49, 0, -100, 0))];
	this.black6.cache(-2,-2,379,325);

	this.text = new cjs.Text("מאפין אגוזי לוז ", "normal 400 60px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 379;
	this.text.parent = this;
	this.text.setTransform(166.2,248.2);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black6}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,0,404.2,343.5);


(lib.natol40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._12122014232013776();
	this.instance.setTransform(0,0,0.494,0.4613);

	this.black2 = new lib.decafe80black();
	this.black2.name = "black2";
	this.black2.setTransform(94.6,55.1,1,1,0,0,0,94.6,55.1);
	this.black2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(50, 0, -100, 0))];
	this.black2.cache(-2,-2,193,114);

	this.text = new cjs.Text("אינטנסו נטול ", "normal 400 33px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 180;
	this.text.parent = this;
	this.text.setTransform(91.75,88.65);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black2}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193,133.9);


(lib.mexico = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._02022018110713796_1();
	this.instance.setTransform(0,0,0.3439,0.3206);

	this.black24 = new lib.black24();
	this.black24.name = "black24";
	this.black24.setTransform(65.8,38.3,1,1,0,0,0,65.8,38.3);
	this.black24.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(49, 0, -100, 0))];
	this.black24.cache(-2,-2,136,81);

	this.text = new cjs.Text("ארץ מקור \nמקסיקו", "normal 400 15px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(68.45,65.4);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black24}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135,108.7);


(lib.melozio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._29012015123004986();

	this.black15 = new lib.black15();
	this.black15.name = "black15";
	this.black15.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black15.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.black15.cache(-2,-2,387,243);

	this.text = new cjs.Text("מלוזיו", "normal 400 60px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 194;
	this.text.parent = this;
	this.text.setTransform(191.5,199.7);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black15}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,280.4);


(lib.leggero = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.Capsule_VL_MilkyWorld_BiancoLeggero();

	this.black8 = new lib.black8();
	this.black8.name = "black8";
	this.black8.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black8.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(1, 0, -100, 0))];
	this.black8.cache(-2,-2,387,243);

	this.text = new cjs.Text("ביאנקו לגרו", "normal 400 60px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 299;
	this.text.parent = this;
	this.text.setTransform(191.5,199.7);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black8}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,280.4);


(lib.jorjono = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._14032016093727355_1();

	this.black17 = new lib.black17();
	this.black17.name = "black17";
	this.black17.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black17.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.black17.cache(-2,-2,387,243);

	this.text = new cjs.Text("ג'יורינו", "normal 400 60px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 165;
	this.text.parent = this;
	this.text.setTransform(191.5,206.35);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black17}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,292.6);


(lib.intenso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._30072015160714667();

	this.balck10 = new lib.black10();
	this.balck10.name = "balck10";
	this.balck10.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.balck10.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(84, 0, -100, 0))];
	this.balck10.cache(-2,-2,387,243);

	this.text = new cjs.Text("אינטנסו", "normal 400 60px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 248;
	this.text.parent = this;
	this.text.setTransform(191.5,199.7);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.balck10}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,280.4);


(lib.forte = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.Capsule_VL_MilkyWorld_BiancoForte_Front_shadow();

	this.black7 = new lib.black7();
	this.black7.name = "black7";
	this.black7.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black7.compositeOperation = "darken";
	this.black7.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(41, 0, -100, 0))];
	this.black7.cache(-2,-2,387,243);

	this.text = new cjs.Text("ביאנקו פורטה", "normal 400 60px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 382;
	this.text.parent = this;
	this.text.setTransform(184.6,205.95);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black7}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,0,395.5,286.6);


(lib.fortado = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.פורטדו();

	this.black19 = new lib.black19();
	this.black19.name = "black19";
	this.black19.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black19.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(47, 0, -100, 0))];
	this.black19.cache(-2,-2,387,243);

	this.text = new cjs.Text("פורטאדו", "normal 400 60px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 224;
	this.text.parent = this;
	this.text.setTransform(196.45,205.65);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black19}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,286.3);


(lib.etyopiya = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._43169bpic375x3212();
	this.instance.setTransform(0,0,0.3439,0.3206);

	this.black28 = new lib.black26();
	this.black28.name = "black28";
	this.black28.setTransform(64.5,51.5,1,1,0,0,0,64.5,51.5);
	this.black28.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(48, 0, -100, 0))];
	this.black28.cache(-2,-2,133,107);

	this.text = new cjs.Text("ארץ מקור \nאתיופיה", "normal 400 15px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(63.5,87.7);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black28}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,131);


(lib.elvizo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._1212201423121568();

	this.black14 = new lib.black14();
	this.black14.name = "black14";
	this.black14.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black14.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.black14.cache(-2,-2,387,243);

	this.text = new cjs.Text("אלווציו", "normal 400 60px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.parent = this;
	this.text.setTransform(191.5,198.35);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black14}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,281.7);


(lib.diavolito = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._12122014235042227();
	this.instance.setTransform(0,0,0.494,0.4613);

	this.black4 = new lib.black4();
	this.black4.name = "black4";
	this.black4.setTransform(94.6,55.1,1,1,0,0,0,94.6,55.1);
	this.black4.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(100, 0, -100, 0))];
	this.black4.cache(-2,-2,193,114);

	this.text = new cjs.Text("דיאווליטו", "normal 400 33px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 127;
	this.text.parent = this;
	this.text.setTransform(96.5,94.2);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black4}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193,139.5);


(lib.decaff230 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._13122014000613848();

	this.black13 = new lib.black13();
	this.black13.name = "black13";
	this.black13.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black13.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(50, 0, -100, 0))];
	this.black13.cache(-2,-2,387,243);

	this.text = new cjs.Text("נטול קפאין", "normal 400 60px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 354;
	this.text.parent = this;
	this.text.setTransform(195.05,199.7);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black13}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,280.4);


(lib.decaff150 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._08072016100811130();

	this.black18 = new lib.black18();
	this.black18.name = "black18";
	this.black18.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black18.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(50, 0, -100, 0))];
	this.black18.cache(-2,-2,387,243);

	this.text = new cjs.Text("נטול קפאין", "normal 400 60px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 355;
	this.text.parent = this;
	this.text.setTransform(193.9,214.85);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black18}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,295.5);


(lib.costa = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._43169bpic375x3211();
	this.instance.setTransform(0,0,0.3439,0.3206);

	this.black25 = new lib.black25();
	this.black25.name = "black25";
	this.black25.setTransform(64.5,51.5,1,1,0,0,0,64.5,51.5);
	this.black25.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(51, 0, -100, 0))];
	this.black25.cache(-2,-2,133,107);

	this.text = new cjs.Text("ארץ מקור \nקוסטה ריקה", "normal 400 15px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(63.6,83.55);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black25}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,126.9);


(lib.colombia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._02022018110711590_1();
	this.instance.setTransform(0,0,0.3439,0.3206);

	this.black23 = new lib.black23();
	this.black23.name = "black23";
	this.black23.setTransform(65.8,38.3,1,1,0,0,0,65.8,38.3);
	this.black23.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(49, 0, -100, 0))];
	this.black23.cache(-2,-2,136,81);

	this.text = new cjs.Text("ארץ מקור\nקולומביה", "normal 400 15px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 107;
	this.text.parent = this;
	this.text.setTransform(64.2,63.1);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black23}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135,119.5);


(lib.chiaro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._26092017155319984_4();

	this.black21 = new lib.black21();
	this.black21.name = "black21";
	this.black21.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black21.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(80, 0, -100, 0))];
	this.black21.cache(-2,-2,387,243);

	this.text = new cjs.Text("דאבל אספרסו קיארו", "normal 400 49px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 66;
	this.text.lineWidth = 344;
	this.text.parent = this;
	this.text.setTransform(184.15,190.9);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black21}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,355.1);


(lib.carael = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._42591a375x321copy2();

	this.black9 = new lib.black9();
	this.black9.name = "black9";
	this.black9.setTransform(187.5,160.5,1,1,0,0,0,187.5,160.5);
	this.black9.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.black9.cache(-2,-2,379,325);

	this.text = new cjs.Text("עוגיות כרמל", "normal 400 60px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 312;
	this.text.parent = this;
	this.text.setTransform(186.15,253.8);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black9}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,379,340.7);


(lib.arondio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.ארונדיו();

	this.black22 = new lib.black22();
	this.black22.name = "black22";
	this.black22.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black22.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(31, 0, -100, 0))];
	this.black22.cache(-2,-2,387,243);

	this.text = new cjs.Text("ארונדיו", "normal 400 60px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 222;
	this.text.parent = this;
	this.text.setTransform(185.05,216.4);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black22}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,297.1);


(lib.aodiso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._13122014033322459();

	this.black11 = new lib.black11();
	this.black11.name = "black11";
	this.black11.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.black11.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(50, 0, -100, 0))];
	this.black11.cache(-2,-2,387,243);

	this.text = new cjs.Text("אודסיו", "normal 400 60px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(191.5,199.7);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black11}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,280.4);


(lib.alto_dolche = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._09032017104432690_1();
	this.instance.setTransform(0,0,0.5232,0.5126);

	this.altu2 = new lib.altu2();
	this.altu2.name = "altu2";
	this.altu2.setTransform(100.2,61.3,1,1,0,0,0,100.2,61.3);
	this.altu2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(36, 0, -100, 0))];
	this.altu2.cache(-2,-2,204,127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.altu2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,204,126);


(lib.alto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib._09032017104417590_1();

	this.instance_1 = new lib.alto1();
	this.instance_1.setTransform(191.5,119.5,1,1,0,0,0,191.5,119.5);
	this.instance_1.compositeOperation = "multiply";
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(27, 0, -100, 0))];
	this.instance_1.cache(-2,-2,387,243);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,243);


(lib.altiso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib._12122014231342893();
	this.instance.setTransform(0,0,0.494,0.4613);

	this.black3 = new lib.black3();
	this.black3.name = "black3";
	this.black3.setTransform(94.6,55.1,1,1,0,0,0,94.6,55.1);
	this.black3.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(88, 0, -100, 0))];
	this.black3.cache(-2,-2,193,114);

	this.text = new cjs.Text("אלטיסיו", "normal 400 33px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 122;
	this.text.parent = this;
	this.text.setTransform(94.6,88.65);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.black3}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193,133.9);


// stage content:
(lib.vertuoplus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		
		stage.enableMouseOver(24); //אישור מעברי עכבר
		
		
		
		//////////////////////////////////////////
		////-------/////פונקציות גלובליות/-------//
		
		for (var i = 1; i <= 19; i++) {
		
			self["or" + i].addEventListener("mouseover", mouselement)
			self["or" + i].addEventListener("mouseout", mouselementOut)
		
		}
		for (var i = 1; i <= 9; i++) {
		
			self["con" + i].addEventListener("mouseover", mouselement)
			self["con" + i].addEventListener("mouseout", mouselementOut)
		
		}
		function mouselement() {
			stage.cursor = "pointer";
		}
		function mouselementOut() {
			stage.cursor = "auto";
		}
		
		
		
		
		
		function changeToblack() {
			for (var i = 1; i <= 8; i++) {
				self["MUG" + i].gotoAndStop(1);
			}
		for (var i = 1; i <= 4; i++) {
				self["MO" + i].gotoAndStop(1);
			}
				
		for (var j = 1; j <= 4; j++) {
				self["ES" + j].gotoAndStop(1);
			}
		for (var j = 1; j <= 5; j++) {
				self["BR" + j].gotoAndStop(1);
			}
			for (var j = 1; j <= 3; j++) {
				self["longo" + j].gotoAndStop(1);
			}
		
			self.duobel1.gotoAndStop(1);
			self.duobel2.gotoAndStop(1);
		
		
			self.ALTO1.gotoAndStop(1);
			self.ALTO2.gotoAndStop(1);
		
		}
		function chabgTocolor() {
		for (var j = 1; j <= 8; j++) {
				self["MUG" + j].gotoAndStop(0);
			}
			
		for (var j = 1; j <= 4; j++) {
				self["MO" + j].gotoAndStop(0);
			}
		for (var j = 1; j <= 4; j++) {
				self["ES" + j].gotoAndStop(0);
			}
		for (var j = 1; j <= 5; j++) {
				self["BR" + j].gotoAndStop(0);
			}
			for (var j = 1; j <= 3; j++) {
				self["longo" + j].gotoAndStop(0);
			}
		
		
			self.duobel1.gotoAndStop(0);
			self.duobel2.gotoAndStop(0);
		
		
			self.ALTO1.gotoAndStop(0);
			self.ALTO2.gotoAndStop(0);
		
		}
		
		function Nounderline() {
			for (var i = 1; i <= 19; i++) {
				self["or" + i].gotoAndStop(0);
			}
			for (var i = 1; i <= 9; i++) {
				self["con" + i].gotoAndStop(0);
			}
		
			napoli = false;
			kazar = false;
			ris = false;
			arp = false;
			rome = false;
			ven = false;
			liv = false;
			india = false;
			indonzia = false;
			ORcolo = false;
			ORnik = false;
			ORetyo = false;
			vivlto = false;
			envivo = false;
			forti = false;
			voloto = false;
			cosi = false;
			cap = false;
			linizyu = false;
		
			mexico = false;
			kosta = false;
			colombia = false;
			brazil = false;
			knia = false;
			Cindia = false;
			etyupia = false;
			Gua = false;
			nik = false;
		
		
		}
		
		
		
		////////////////////////////////////
		///------אירועי עכבר מקסיקו-----////
		////////////////////////////////////
		
		
		self.con1.addEventListener("click", clickMexico)
		var mexico = false;
		
		function clickMexico() {
			if (mexico == false) {
				console.log("נכון");
				changeToblack();
				self.MUG1.gotoAndStop(2);
				self.MO2.gotoAndStop(2);
		
		
				Nounderline()
				self.con1.gotoAndStop(1);
				mexico = true;
			} else if (mexico == true) {
				console.log("לא נכון");
				chabgTocolor();
				self.con1.gotoAndStop(0);
				mexico = false;
			}
		
		}
		
		/////////////////////////////////////////
		///------אירועי עכבר קוסטה ריקה-----////
		////////////////////////////////////////
		
		
		self.con2.addEventListener("click", clickKosta)
		var kosta = false;
		
		function clickKosta() {
			if (kosta == false) {
				console.log("לא נכון");
				changeToblack();
				self.duobel1.gotoAndStop(2);
				self.MO3.gotoAndStop(2);
				Nounderline()
				self.con2.gotoAndStop(1);
		
				kosta = true;
			} else if (kosta == true) {
				console.log("נכון");
				chabgTocolor();
				self.con2.gotoAndStop(0);
				kosta = false;
		
			}
		
		}
		
		
		/////////////////////////////////////////
		///------איורעי עכבר קולומביה-----////
		////////////////////////////////////////
		
		
		self.con3.addEventListener("click", clicColo)
		var colombia = false;
		
		function clicColo() {
			if (colombia == false) {
				console.log("לא נכון");
				changeToblack();
				self.longo1.gotoAndStop(2);
				self.longo3.gotoAndStop(2);
				self.MO1.gotoAndStop(2);
				self.MUG5.gotoAndStop(2);
				self.MUG7.gotoAndStop(2);
				self.ES1.gotoAndStop(2);
				Nounderline()
				self.con3.gotoAndStop(1);
				colombia = true;
			} else if (colombia == true) {
				console.log("נכון");
				chabgTocolor();
				self.con3.gotoAndStop(0);
				colombia = false;
			}
		
		}
		
		/////////////////////////////////////////
		///------איורעי עכבר ברזיל-----////
		////////////////////////////////////////
		
		
		self.con4.addEventListener("click", clickBzil)
		var brazil = false;
		
		function clickBzil() {
			if (brazil == false) {
				console.log("לא נכון");
				changeToblack();
				self.longo1.gotoAndStop(2);
				self.longo3.gotoAndStop(2);
				self.MO1.gotoAndStop(2);
				self.MUG5.gotoAndStop(2);
				self.MUG7.gotoAndStop(2);
				self.ES1.gotoAndStop(2);
		
				Nounderline()
				self.con4.gotoAndStop(1);
				brazil = true;
			} else if (brazil == true) {
				console.log("נכון");
				chabgTocolor();
				self.con4.gotoAndStop(0);
				brazil = false;
			}
		
		}
		/////////////////////////////////////////
		///------איורעי עכבר קניה-----////
		////////////////////////////////////////
		
		
		self.con5.addEventListener("click", clickKnia)
		var knia = false;
		
		function clickKnia() {
			if (knia == false) {
				console.log("לא נכון");
				changeToblack();
		
		
				self.MUG2.gotoAndStop(2);
				self.MUG8.gotoAndStop(2);
				Nounderline()
		
				self.con5.gotoAndStop(1);
				knia = true;
			} else if (knia == true) {
				console.log("נכון");
				chabgTocolor();
				self.con5.gotoAndStop(0);
				knia = false;
			}
		
		}
		/////////////////////////////////////////
		///------איורעי עכבר הודו-----////
		////////////////////////////////////////
		
		
		self.con6.addEventListener("click", clickCIndia)
		var Cindia = false;
		
		function clickCIndia() {
			if (Cindia == false) {
				console.log("אחרי לחיצה");
				changeToblack();
		
				self.longo2.gotoAndStop(2);
		
				Nounderline()
				self.con6.gotoAndStop(1);
				Cindia = true;
			} 
			else if (Cindia == true) {
				console.log("לא עובד");
				chabgTocolor();
				self.con6.gotoAndStop(0);
				Cindia = false;
			}
		
		}
		/////////////////////////////////////////
		///------איורעי עכבר אתיופיה-----////
		////////////////////////////////////////
		
		
		self.con7.addEventListener("click", clickEtyupia)
		var etyupia = false;
		
		function clickEtyupia() {
			if (etyupia == false) {
				console.log("לא נכון");
				changeToblack();
		
				self.MUG2.gotoAndStop(2);
				self.MO2.gotoAndStop(2);
		
				Nounderline()
				self.con7.gotoAndStop(1);
				etyupia = true;
			} else if (etyupia == true) {
				console.log("נכון");
				chabgTocolor();
				self.con7.gotoAndStop(0);
				etyupia = false;
		
			}
		
		
		}
		/////////////////////////////////////////
		///------איורעי עכבר גווטמלה-----////
		////////////////////////////////////////
		
		
		self.con8.addEventListener("click", clickGua)
		var Gua = false;
		
		function clickGua() {
			if (Gua == false) {
				console.log("לא נכון");
				changeToblack();
		
				self.MUG1.gotoAndStop(2);
				self.MUG3.gotoAndStop(2)
				self.ES2.gotoAndStop(2)
				self.duobel1.gotoAndStop(2);
				Nounderline()
				self.con8.gotoAndStop(1);
				Gua = true;
			} else if (Gua == true) {
				console.log("נכון");
				chabgTocolor();
				self.con8.gotoAndStop(0);
				Gua = false;
		
			}
		
		
		}
		/////////////////////////////////////////
		///------איורעי עכבר ניקארגווה-----////
		////////////////////////////////////////
		
		
		self.con9.addEventListener("click", clickNik)
		var nik = false;
		
		function clickNik() {
			if (nik == false) {
				console.log("לא נכון");
				changeToblack();
		
		
				self.MUG2.gotoAndStop(2);
				self.MUG3.gotoAndStop(2);
		
				Nounderline()
				self.con9.gotoAndStop(1);
				nik = true;
			} else if (nik == true) {
				console.log("נכון");
				chabgTocolor();
				self.con9.gotoAndStop(0);
				nik = false;
		
			}
		
		}
		
		
		////////////////////////////////////////
		////////////////////////////////////////
		//----אירועי עכבר קפסולות אוריגו------//
		////////////////////////////////////////
		///////////////////////////////////////
		//////////////////////////////////////////
		//-------איועי עכבר נפולי---------//
		
		self.or1.addEventListener("click", clickNapoli)
		
		var napoli = false;
		
		function clickNapoli() {
		
			if (napoli == false) {
		
				changeToblack();
				
				self.MUG1.gotoAndStop(2);
				self.MUG2.gotoAndStop(2);
				self.MUG3.gotoAndStop(2);
				self.longo2.gotoAndStop(2);
				self.BR4.gotoAndStop(2);
				self.ES2.gotoAndStop(2);
		
		
				Nounderline()
				napoli = true;
				self.or1.gotoAndStop(1);
		
			} else if (napoli == true) {
				self.or1.gotoAndStop(0);
				chabgTocolor()
				napoli = false;
			}
		
		}
		//-------איועי עכבר קזאר---------//
		
		self.or2.addEventListener("click", clickKzar)
		
		var kazar = false;
		
		function clickKzar() {
		
			if (kazar == false) {
		
				changeToblack();
				self.MUG1.gotoAndStop(2);
				self.MUG2.gotoAndStop(2);
				self.MUG3.gotoAndStop(2);
				self.ES2.gotoAndStop(2);
				self.longo2.gotoAndStop(2);
				self.BR4.gotoAndStop(2);
				self.ES2.gotoAndStop(2);
		
				Nounderline()
				kazar = true;
				self.or2.gotoAndStop(1);
		
			} else if (kazar == true) {
				self.or2.gotoAndStop(0);
				chabgTocolor()
				kazar = false;
			}
		
		}
		//-------איועי עכבר ריסטרטו---------//
		
		self.or3.addEventListener("click", clickRis)
		
		var ris = false;
		
		function clickRis() {
		
			if (ris == false) {
		
				changeToblack();
				self.MUG1.gotoAndStop(2);
				self.MUG2.gotoAndStop(2);
				self.MUG3.gotoAndStop(2);
		
				self.duobel1.gotoAndStop(2);
		
				self.MO3.gotoAndStop(2);
				self.ES3.gotoAndStop(2);
		
				Nounderline();
				ris = true;
				self.or3.gotoAndStop(1);
			} else if (ris == true) {
				self.or3.gotoAndStop(0);
		
				chabgTocolor()
				ris = false;
			}
		
		}
		//-------איועי עכבר ארפגיו---------//
		
		self.or4.addEventListener("click", clickArp)
		
		var arp = false;
		
		function clickArp() {
		
			if (arp == false) {
		
				changeToblack();
				self.MUG1.gotoAndStop(2);
				self.MUG2.gotoAndStop(2);
				self.MUG3.gotoAndStop(2);
		
				self.duobel1.gotoAndStop(2);
		
				self.ES3.gotoAndStop(2);
				self.MO3.gotoAndStop(2);
				self.BR3.gotoAndStop(2);
				
				Nounderline()
				arp = true;
				self.or4.gotoAndStop(1);
		
			} else if (arp == true) {
				self.or4.gotoAndStop(0);
				chabgTocolor()
				arp = false;
			}
		
		}
		//-------איועי עכבר רומא---------//
		
		self.or5.addEventListener("click", clickRome)
		
		var rome = false;
		
		function clickRome() {
		
			if (rome == false) {
		
				changeToblack();
				self.MUG1.gotoAndStop(2);
				self.MUG2.gotoAndStop(2);
				self.MUG3.gotoAndStop(2);
				self.longo2.gotoAndStop(2);
				self.duobel1.gotoAndStop(2);
				self.duobel2.gotoAndStop(2);
		
				self.MO2.gotoAndStop(2);
				self.MO1.gotoAndStop(2);
				self.ES1.gotoAndStop(2);
		
				Nounderline()
				rome = true;
				self.or5.gotoAndStop(1);
			} else if (rome == true) {
				self.or5.gotoAndStop(0);
				chabgTocolor()
				rome = false;
			}
		
		}
		//-------איועי עכבר ונציה---------//
		
		self.or6.addEventListener("click", clickVen)
		
		var ven = false;
		
		function clickVen() {
		
			if (ven == false) {
		
				changeToblack();
				self.MUG1.gotoAndStop(2);
				self.MUG2.gotoAndStop(2);
				self.MUG3.gotoAndStop(2);
				self.longo2.gotoAndStop(2);
				self.duobel1.gotoAndStop(2);
				self.duobel2.gotoAndStop(2);
		
		
		
				Nounderline()
				ven = true;
				self.or6.gotoAndStop(1);
			} else if (ven == true) {
				console.log("לא עובד");
				self.or6.gotoAndStop(0);
				chabgTocolor()
				ven = false;
			}
		
		}
		
		//-------איועי עכבר ליונטו---------//
		self.or7.addEventListener("click", clickLiv)
		
		var liv = false;
		
		function clickLiv() {
		
			if (liv == false) {
		
				changeToblack();
		
				self.MUG6.gotoAndStop(2);
				self.MUG4.gotoAndStop(2);
				self.MUG8.gotoAndStop(2);
		
				self.longo1.gotoAndStop(2);
				self.longo3.gotoAndStop(2);
		
		
				self.ES1.gotoAndStop(2);
				self.MO1.gotoAndStop(2);
				self.MO4.gotoAndStop(2);
				self.BR3.gotoAndStop(2);		
				
				Nounderline()
				liv = true;
				self.or7.gotoAndStop(1);
		
			} else if (liv == true) {
				self.or7.gotoAndStop(0);
				chabgTocolor()
				liv = false;
			}
		
		}
		//-------איועי עכבר הודו---------//
		self.or8.addEventListener("click", clickIndia)
		
		var india = false;
		
		function clickIndia() {
		
			if (india == false) {
		
				changeToblack();
		
				self.MUG3.gotoAndStop(2);
				self.MUG1.gotoAndStop(2);
		
				self.ES2.gotoAndStop(2);		
				
				self.duobel1.gotoAndStop(2);
		
				self.longo2.gotoAndStop(2);
				self.BR4.gotoAndStop(2);
		
				self.MO2.gotoAndStop(2);
		
				Nounderline()
				india = true;
				self.or8.gotoAndStop(1);
			} else if (india == true) {
				self.or8.gotoAndStop(0);
				chabgTocolor()
				india = false;
			}
		
		}
		//-------איועי עכבר אינדונזיה---------//
		self.or9.addEventListener("click", clickIndonezia)
		
		var indonzia = false;
		
		function clickIndonezia() {
		
			if (indonzia == false) {
				console.log("gucs");
				changeToblack();
		
					self.MUG1.gotoAndStop(2);
				self.MUG2.gotoAndStop(2);
				self.MUG3.gotoAndStop(2);
				self.longo2.gotoAndStop(2);
				self.duobel1.gotoAndStop(2);
				self.duobel2.gotoAndStop(2);
		
				self.MO2.gotoAndStop(2);
				self.MO1.gotoAndStop(2);
				self.ES1.gotoAndStop(2);
		
		
				Nounderline()
				indonzia = true;
				self.or9.gotoAndStop(1);
		
			} else if (indonzia == true) {
				console.log("לא עובד");
				self.or9.gotoAndStop(0);
				chabgTocolor()
				indonzia = false;
			}
		
		}
		
		//-------איועי עכבר קולומביה---------//
		self.or10.addEventListener("click", clickORcolo)
		
		var ORcolo = false;
		
		function clickORcolo() {
		
			if (ORcolo == false) {
				console.log("כאן עובד ");
				changeToblack();
		
				self.longo1.gotoAndStop(2);
				self.longo3.gotoAndStop(2);
				self.MO1.gotoAndStop(2);
				
				self.MUG5.gotoAndStop(2);
				self.MUG7.gotoAndStop(2);
				self.MUG8.gotoAndStop(2);
				self.ES1.gotoAndStop(2);
		
				self.BR3.gotoAndStop(2);
		
				Nounderline()
				ORcolo = true;
				self.or10.gotoAndStop(1);
			} else if (ORcolo == true) {
				self.or10.gotoAndStop(0);
				chabgTocolor()
				ORcolo = false;
		
			}
		
		}
		//-------איועי עכבר ניקארגווה---------//
		self.or11.addEventListener("click", clickORnik)
		
		var ORnik = false;
		
		function clickORnik() {
		
			if (ORnik == false) {
		
				changeToblack();
		
					self.MUG6.gotoAndStop(2);
				self.MUG4.gotoAndStop(2);
				self.MUG8.gotoAndStop(2);
		
				self.longo1.gotoAndStop(2);
				self.longo3.gotoAndStop(2);
		
		
				self.ES1.gotoAndStop(2);
				self.MO1.gotoAndStop(2);
				self.MO4.gotoAndStop(2);
				self.BR3.gotoAndStop(2);
		
		
		
		
				Nounderline()
				ORnik = true;
				self.or11.gotoAndStop(1);
			} else if (ORnik == true) {
				self.or11.gotoAndStop(0);
				chabgTocolor()
				ORnik = false;
			}
		
		}
		//-------איועי עכבר אתיופיה---------//
		self.or12.addEventListener("click", clickORetyo)
		
		var ORetyo = false;
		
		function clickORetyo() {
		
			if (ORetyo == false) {
		
		
				changeToblack();
				self.longo1.gotoAndStop(2);
				self.MO4.gotoAndStop(2);
				
				self.ES1.gotoAndStop(2);
				self.ES4.gotoAndStop(2);
				self.MUG5.gotoAndStop(2);
				self.MUG7.gotoAndStop(2);
				self.MUG8.gotoAndStop(2);
				self.ALTO2.gotoAndStop(2);
				
		
				Nounderline()
				ORetyo = true;
				self.or12.gotoAndStop(1);
			} else if (ORetyo == true) {
				self.or12.gotoAndStop(0);
				chabgTocolor()
				ORetyo = false;
			}
		
		}
		//-------איועי עכבר ווילטו---------//
		self.or13.addEventListener("click", clickVivlto)
		self.or13.addEventListener("mouseover", overor13);
		function overor13() {
			mouselement()
		}
		var vivlto = false;
		
		function clickVivlto() {
		
			if (vivlto == false) {
		
				changeToblack();
				self.MUG6.gotoAndStop(2);
				self.MUG8.gotoAndStop(2);
				self.MUG7.gotoAndStop(2);
		
				self.or13.gotoAndStop(1);
		
		self.MO4.gotoAndStop(2);
				self.ES1.gotoAndStop(2);
				self.longo1.gotoAndStop(2);
					self.BR3.gotoAndStop(2);
				Nounderline()
				vivlto = true;
				self.or13.gotoAndStop(1);
		
			} else if (vivlto == true) {
				self.or13.gotoAndStop(0);
				chabgTocolor()
				vivlto = false;
			}
		
		}
		//-------איועי עכבר אנביבו---------//
		self.or14.addEventListener("click", clickEnvivo)
		
		var envivo = false;
		
		function clickEnvivo() {
		
			if (envivo == false) {
		
				changeToblack();
		
				self.longo2.gotoAndStop(2);
		self.MO2.gotoAndStop(2);
		self.ES3.gotoAndStop(2);
		self.MUG3.gotoAndStop(2);
				self.NUG1.gotoAndStop(2);
				self.duobel1.gotoAndStop(2);
					self.BR4.gotoAndStop(2);
				Nounderline()
				envivo = true;
				self.or14.gotoAndStop(1);
		
			} else if (envivo == true) {
				self.or14.gotoAndStop(0);
				chabgTocolor()
				envivo = false;
			}
		
		}
		//-------איועי עכבר פורטיסיו---------//
		self.or15.addEventListener("click", clickForti)
		
		var forti = false;
		
		function clickForti() {
		
			if (forti == false) {
		
				changeToblack();
		
				self.MUG1.gotoAndStop(2);
				self.MUG2.gotoAndStop(2);
				self.MUG3.gotoAndStop(2);
		
				self.duobel1.gotoAndStop(2);
				self.longo2.gotoAndStop(2);
				
					self.MO3.gotoAndStop(2);
			self.ALTO2.gotoAndStop(2);
				Nounderline()
				forti = true;
				self.or15.gotoAndStop(1);
		
			} else if (forti == true) {
				self.or15.gotoAndStop(0);
				chabgTocolor()
				forti = false;
			}
		
		}
		//-------איועי עכבר לינציו---------//
		self.or16.addEventListener("click", clickLinizyu)
		
		var linizyu = false;
		
		function clickLinizyu() {
		
			if (linizyu == false) {
		
				changeToblack();
		
		
				self.MUG7.gotoAndStop(2);
		
		
				self.longo1.gotoAndStop(2);
		
		
		
				Nounderline()
				linizyu = true;
				self.or16.gotoAndStop(1);
		
			} else if (linizyu == true) {
				self.or16.gotoAndStop(0);
				chabgTocolor()
				linizyu = false;
			}
		
		}
		//-------איועי עכבר קפריסו---------//
		self.or17.addEventListener("click", clickCap)
		
		var cap = false;
		
		function clickCap() {
		
			if (cap == false) {
		
				changeToblack();
		
		
				self.MUG6.gotoAndStop(2);
				self.MUG4.gotoAndStop(2);
		
				self.longo3.gotoAndStop(2);
		
		
		
				Nounderline()
				cap = true;
				self.or17.gotoAndStop(1);
		
			} else if (cap == true) {
				self.or17.gotoAndStop(0);
				chabgTocolor()
				cap = false;
			}
		
		}
		//-------איועי עכבר voloto---------//
		self.or18.addEventListener("click", clicVoloto)
		
		var voloto = false;
		
		function clicVoloto() {
		
			if (voloto == false) {
		
				changeToblack();
		
		
				self.MUG6.gotoAndStop(2);
				self.MUG7.gotoAndStop(2);
				self.MUG8.gotoAndStop(2);
				self.MUG4.gotoAndStop(2);
		
				Nounderline()
				voloto = true;
				self.or18.gotoAndStop(1);
		
			} else if (voloto == true) {
				self.or18.gotoAndStop(0);
				chabgTocolor()
				voloto = false;
		
			}
		
		}
		//-------איועי עכבר cosi---------//
		self.or19.addEventListener("click", clicCosi)
		
		var cosi = false;
		
		function clicCosi() {
		
			if (cosi == false) {
		
				changeToblack();
		
				self.MUG7.gotoAndStop(2);
				self.MUG8.gotoAndStop(2);
		
				Nounderline()
				cosi = true;
				self.or19.gotoAndStop(1);
		
			} else if (cosi == true) {
				self.or19.gotoAndStop(0);
				chabgTocolor()
				cosi = false;
			}
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// origen
	this.or13 = new lib.vivalto();
	this.or13.name = "or13";
	this.or13.setTransform(1369.75,482.2,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or19 = new lib.cosi();
	this.or19.name = "or19";
	this.or19.setTransform(1369.75,659.45,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or17 = new lib.forti();
	this.or17.name = "or17";
	this.or17.setTransform(1590.35,657.35,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or9 = new lib.indo();
	this.or9.name = "or9";
	this.or9.setTransform(1474.7,372.75,0.7709,0.7709,0,0,0,77.5,67.6);

	this.or14 = new lib.envivo();
	this.or14.name = "or14";
	this.or14.setTransform(1590.35,576.5,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or11 = new lib.Onik();
	this.or11.name = "or11";
	this.or11.setTransform(1587.35,482.2,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or8 = new lib.india();
	this.or8.name = "or8";
	this.or8.setTransform(1590.35,374.7,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or12 = new lib.Oety();
	this.or12.name = "or12";
	this.or12.setTransform(1481.8,482.2,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or10 = new lib.Ocolo();
	this.or10.name = "or10";
	this.or10.setTransform(1369.75,374.95,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or18 = new lib.voloto();
	this.or18.name = "or18";
	this.or18.setTransform(1474.7,657.35,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or7 = new lib.livanto_1();
	this.or7.name = "or7";
	this.or7.setTransform(1594.1,268.5,0.7709,0.7709,0,0,0,77.5,67.6);

	this.or15 = new lib.cap();
	this.or15.name = "or15";
	this.or15.setTransform(1474.7,578.55,0.7709,0.7709,0,0,0,77.5,67.6);

	this.or16 = new lib.linizo();
	this.or16.name = "or16";
	this.or16.setTransform(1369.75,578.55,0.7709,0.7709,0,0,0,77.5,67.6);

	this.or5 = new lib.roma();
	this.or5.name = "or5";
	this.or5.setTransform(1474.7,159.5,0.7709,0.7709,0,0,0,77.5,67.6);

	this.or2 = new lib.kazr();
	this.or2.name = "or2";
	this.or2.setTransform(1474.7,55.35,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or4 = new lib.arpjo();
	this.or4.name = "or4";
	this.or4.setTransform(1590.35,159.5,0.7709,0.7709,0,0,0,77.5,67.6);

	this.or3 = new lib.rist();
	this.or3.name = "or3";
	this.or3.setTransform(1369.75,55.35,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or1 = new lib.napoli();
	this.or1.name = "or1";
	this.or1.setTransform(1590.35,55.35,0.7709,0.7709,0,0,0,77.5,67.7);

	this.or6 = new lib.venzia();
	this.or6.name = "or6";
	this.or6.setTransform(1369.75,159.5,0.7709,0.7709,0,0,0,77.5,67.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.or6},{t:this.or1},{t:this.or3},{t:this.or4},{t:this.or2},{t:this.or5},{t:this.or16},{t:this.or15},{t:this.or7},{t:this.or18},{t:this.or10},{t:this.or12},{t:this.or8},{t:this.or11},{t:this.or14},{t:this.or9},{t:this.or17},{t:this.or19},{t:this.or13}]}).wait(1));

	// cuntry
	this.con9 = new lib.con9();
	this.con9.name = "con9";
	this.con9.setTransform(1203.3,423.55,1,1,0,0,0,105.2,27.4);

	this.con4 = new lib.con4();
	this.con4.name = "con4";
	this.con4.setTransform(1233.15,189,1,1,0,0,0,75.4,27.4);

	this.con8 = new lib.con8();
	this.con8.name = "con8";
	this.con8.setTransform(1213.1,658.95,1,1,0,0,0,95.4,27.4);

	this.con7 = new lib.con7();
	this.con7.name = "con7";
	this.con7.setTransform(1219.2,580.85,1,1,0,0,0,89.2,27.4);

	this.con6 = new lib.con6();
	this.con6.name = "con6";
	this.con6.setTransform(1251.95,113.7,1,1,0,0,0,56.5,27.4);

	this.con5 = new lib.con5();
	this.con5.name = "con5";
	this.con5.setTransform(1233.15,44.55,1,1,0,0,0,75.4,27.4);

	this.con3 = new lib.con3();
	this.con3.name = "con3";
	this.con3.setTransform(1217.3,506.8,1,1,0,0,0,91,27.4);

	this.con2 = new lib.con2();
	this.con2.name = "con2";
	this.con2.setTransform(1192.8,340.6,1,1,0,0,0,115.6,27.4);

	this.con1 = new lib.con1();
	this.con1.name = "con1";
	this.con1.setTransform(1227.75,264.6,1,1,0,0,0,80.7,27.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAAAg4bMAAABw3");
	this.shape.setTransform(1310,364.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,204,204,0.047)").s().p("AL0OcIAAgVIDGAAIAAAVgAu5kYIAAgBIdzAAIAAABgAs+uWIAAgFIb4AAIAAAFg");
	this.shape_1.setTransform(803.375,374.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.con1},{t:this.con2},{t:this.con3},{t:this.con5},{t:this.con6},{t:this.con7},{t:this.con8},{t:this.con4},{t:this.con9}]}).wait(1));

	// cupsuol
	this.ALTO1 = new lib.alto_dolche();
	this.ALTO1.name = "ALTO1";
	this.ALTO1.setTransform(243.7,369,0.6457,0.6457,0,0,0,100.1,61.3);

	this.ALTO2 = new lib.alto();
	this.ALTO2.name = "ALTO2";
	this.ALTO2.setTransform(131.2,367.8,0.3209,0.3209,0,0,0,191.3,119.7);

	this.longo3 = new lib.arondio();
	this.longo3.name = "longo3";
	this.longo3.setTransform(764.45,129.85,0.3036,0.252,0,0,0,192,119.9);

	this.longo2 = new lib.fortado();
	this.longo2.name = "longo2";
	this.longo2.setTransform(989.9,129.85,0.3036,0.252,0,0,0,191.8,119.9);

	this.longo1 = new lib.decaff150();
	this.longo1.name = "longo1";
	this.longo1.setTransform(877.05,78.25,0.3036,0.252,0,0,0,191.7,119.9);

	this.duobel2 = new lib.chiaro();
	this.duobel2.name = "duobel2";
	this.duobel2.setTransform(812.55,207.2,0.3036,0.252,0,0,0,191.8,119.9);

	this.duobel1 = new lib.scoro();
	this.duobel1.name = "duobel1";
	this.duobel1.setTransform(952.4,207.2,0.3036,0.252,0,0,0,191.8,119.9);

	this.BR4 = new lib.forte();
	this.BR4.name = "BR4";
	this.BR4.setTransform(793.2,662.8,0.3669,0.3497,0,0,0,191.8,120.1);

	this.BR1 = new lib.vanik();
	this.BR1.name = "BR1";
	this.BR1.setTransform(860.45,497.45,0.3669,0.3497,0,0,0,187.9,160.8);

	this.BR5 = new lib.nets();
	this.BR5.name = "BR5";
	this.BR5.setTransform(729.05,569.9,0.3669,0.3497,0,0,0,187.8,161);

	this.BR2 = new lib.carael();
	this.BR2.name = "BR2";
	this.BR2.setTransform(979.35,569.9,0.3669,0.3497,0,0,0,188.1,161);

	this.BR3 = new lib.leggero();
	this.BR3.name = "BR3";
	this.BR3.setTransform(950.7,659.55,0.3669,0.3497,0,0,0,191.8,120);

	this.MUG1 = new lib.intenso();
	this.MUG1.name = "MUG1";
	this.MUG1.setTransform(573.25,233.05,0.2676,0.2599,0,0,0,192.1,119.7);

	this.MUG5 = new lib.elvizo();
	this.MUG5.name = "MUG5";
	this.MUG5.setTransform(573.25,446.45,0.2676,0.2599,0,0,0,192.1,119.9);

	this.MUG3 = new lib.stormio();
	this.MUG3.name = "MUG3";
	this.MUG3.setTransform(716.05,341.95,0.2676,0.2599,0,0,0,191.9,119.9);

	this.MUG4 = new lib.decaff230();
	this.MUG4.name = "MUG4";
	this.MUG4.setTransform(665,408.25,0.2676,0.2599,0,0,0,191.6,120);

	this.MUG2 = new lib.aodiso();
	this.MUG2.name = "MUG2";
	this.MUG2.setTransform(654.95,279.8,0.2676,0.2599,0,0,0,191.8,119.7);

	this.MUG8 = new lib.jorjono();
	this.MUG8.name = "MUG8";
	this.MUG8.setTransform(485.15,285.65,0.2676,0.2599,0,0,0,191.9,119.7);

	this.MUG7 = new lib.sollu();
	this.MUG7.name = "MUG7";
	this.MUG7.setTransform(432.75,346.15,0.2676,0.2599,0,0,0,191.9,120);

	this.MUG6 = new lib.melozio();
	this.MUG6.name = "MUG6";
	this.MUG6.setTransform(489.4,404.1,0.2676,0.2599,0,0,0,191.9,119.9);

	this.ES4 = new lib.natol40();
	this.ES4.name = "ES4";
	this.ES4.setTransform(81.75,125.3,0.7659,0.7625,0,0,0,94.9,55.4);

	this.ES1 = new lib.volteso();
	this.ES1.name = "ES1";
	this.ES1.setTransform(210.2,50.5,0.7659,0.7625,0,0,0,94.9,55.4);
	this.ES1.shadow = new cjs.Shadow("rgba(204,204,204,1)",0,0,4);
	this.ES1.compositeOperation = "darken";

	this.ES3 = new lib.altiso();
	this.ES3.name = "ES3";
	this.ES3.setTransform(219.9,190.75,0.7659,0.7625,0,0,0,94.9,55.4);

	this.ES2 = new lib.diavolito();
	this.ES2.name = "ES2";
	this.ES2.setTransform(329.85,122.2,0.7659,0.7625,0,0,0,94.8,55.3);

	this.MO1 = new lib.colombia();
	this.MO1.name = "MO1";
	this.MO1.setTransform(211.75,518.1,1.0596,1.0596,0,0,0,65.9,38.4);

	this.MO3 = new lib.costa();
	this.MO3.name = "MO3";
	this.MO3.setTransform(219.8,642.45,1.0596,1.0596,0,0,0,64.5,51.6);

	this.MO2 = new lib.mexico();
	this.MO2.name = "MO2";
	this.MO2.setTransform(332.55,591,1.0596,1.0596,0,0,0,65.9,38.3);

	this.MO4 = new lib.etyopiya();
	this.MO4.name = "MO4";
	this.MO4.setTransform(83.15,584.55,1.0596,1.0596,0,0,0,64.5,51.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MO4},{t:this.MO2},{t:this.MO3},{t:this.MO1},{t:this.ES2},{t:this.ES3},{t:this.ES1},{t:this.ES4},{t:this.MUG6},{t:this.MUG7},{t:this.MUG8},{t:this.MUG2},{t:this.MUG4},{t:this.MUG3},{t:this.MUG5},{t:this.MUG1},{t:this.BR3},{t:this.BR2},{t:this.BR5},{t:this.BR1},{t:this.BR4},{t:this.duobel1},{t:this.duobel2},{t:this.longo1},{t:this.longo2},{t:this.longo3},{t:this.ALTO2},{t:this.ALTO1}]}).wait(1));

	// Layer_1
	this.instance = new lib.shish();
	this.instance.setTransform(2,724.6,1.2954,1.6479,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// stageBackground
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EiCdg5zMEE7AAAMAAABznMkE7AAAg");
	this.shape_2.setTransform(825,360);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EiCdA50MAAAhznMEE7AAAMAAABzng");
	this.shape_3.setTransform(825,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(814,349,847,382);
// library properties:
lib.properties = {
	id: '1CAB44903FE81B43864D24471338971B',
	width: 1650,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/vertuo plus_atlas_1.png?1610366983606", id:"vertuo plus_atlas_1"},
		{src:"images/vertuo plus_atlas_2.png?1610366983607", id:"vertuo plus_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1CAB44903FE81B43864D24471338971B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;