var bpm = 120;
var testInstance = new AudioSynth;
var inst = []; 
inst.push(testInstance.createInstrument('piano'))
inst.push(testInstance.createInstrument('piano'))
inst.push(testInstance.createInstrument('perc'))
var measures = [];
var bars = [];
var ticker = 1;
var interval = 0.5;

async function run() {
    var i = 0;
    const measureCount = 8;
    measures = createMeasures(measureCount);
    while(i<measureCount) {
        console.log("Measure: " + (i+1))
        await pMeasure(measures[i])
        this.ticker=1;
        i++;
        if(i==(measureCount))
        {
            console.log("Restarting song!");
            i=0;
        }
    }
};

function setBPM(tempo) {
    this.bpm=tempo;
}

async function rest(count) {
    await sleep((60/this.bpm)*count*1000);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function pChord(instr, note, count, octave) {
    octave = octave || 4;
    chord(inst[instr], note, octave, count)
    rest(1);
}

function pNote(instr, note, count, octave) {
    octave = octave || 4;
    inst[instr].play(note, octave, count);
    rest(1);
}

async function pMeasure(measure) {
    while(this.ticker <= measure.timeSig+this.interval)
    {
        console.log(this.ticker);
        measure.playSound(this.ticker)
        await rest(interval)
        this.ticker=this.ticker+this.interval;
    }
}
