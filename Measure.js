const Measure = class {
    constructor(beatCount, instCount, copy) {
        if(copy===undefined) {
            this.timeSig = beatCount || 4;
            this.instCount = instCount || 1;
            this.comp = new Array();
            for(var i=0; i<this.instCount; i++)
            {
                this.comp.push({})
            }
        } else {
            this.timeSig = copy.timeSig;
            this.instCount = copy.instCount
            this.comp = copy.comp
        }
    }

    addChord(instr, beat, note, count) {
        count = count || 1;
        var s = "c:" + note + ":" + count;
        this.comp[instr][beat] = s;
    }

    addNote(instr, beat, note, count, octave) {
        count = count || 1;
        octave = octave || 4;
        var s = "n:" + note + ":" + count + ":" + octave;
        this.comp[instr][beat] = s;
    }

    playSound(beat) {
        var instNo=0;
        this.comp.forEach(element => {
            if(element[beat])
            {
                var str = element[beat].split(':');
                switch(str[0]) {
                    case 'c':
                        pChord(instNo, str[1], str[2]);
                        break;
                    case 'n':
                        pNote(instNo, str[1], str[2], str[3]);
                        break;
                }
            }
            instNo++;
        });
    }
}