function createMeasures(measureCount) {
    var measures = [measureCount];
    measures[0] = new Measure(4, 3);
    measures[0].addChord(0, 1, 'Fm', 1);
    measures[0].addChord(0, 2, 'Fm', 1);
    measures[0].addChord(0, 3, 'Fm', 1);
    measures[0].addChord(0, 4, 'Fm', 1);
    measures[0].addNote(1, 1, 'F', 1, 2);
    measures[0].addNote(1, 2, 'F', 1, 2);
    measures[0].addNote(1, 3, 'F', 1, 2);
    measures[0].addNote(1, 4, 'F', 1, 2);
    measures[0].addNote(2, 1, 'F', 2, 2);
    measures[0].addNote(2, 3.5, 'A#', 0.5, 2);
    measures[0].addNote(2, 4, 'C', 0.5, 2);
    measures[0].addNote(2, 4.5, 'D#', 0.5, 3);
    measures[1] = new Measure(4, 3);
    measures[1].addChord(0, 1, 'Bb/F', 1);
    measures[1].addChord(0, 2, 'Bb/F', 1);
    measures[1].addChord(0, 3, 'Bb/F', 1);
    measures[1].addChord(0, 4, 'Bb/F', 1);
    measures[1].addNote(1, 1, 'A#', 1, 2);
    measures[1].addNote(1, 2, 'A#', 1, 2);
    measures[1].addNote(1, 3, 'A#', 1, 2);
    measures[1].addNote(1, 4, 'A#', 1, 2);
    measures[1].addNote(2, 1, 'G', 1, 3);
    measures[1].addNote(2, 3, 'D', 1, 3);
    measures[2] = new Measure(4, 3);
    measures[2].addChord(0, 1, 'Fm', 1);
    measures[2].addChord(0, 2, 'Fm', 1);
    measures[2].addChord(0, 3, 'Fm', 1);
    measures[2].addChord(0, 4, 'Fm', 1);
    measures[2].addNote(1, 1, 'F', 1, 2);
    measures[2].addNote(1, 2, 'F', 1, 2);
    measures[2].addNote(1, 3, 'F', 1, 2);
    measures[2].addNote(1, 4, 'F', 1, 2);
    measures[2].addNote(2, 1, 'F', 2, 2);
    measures[2].addNote(2, 3.5, 'G#', 0.5, 2);
    measures[2].addNote(2, 4, 'C', 0.5, 2);
    measures[2].addNote(2, 4.5, 'D#', 0.5, 3);
    measures[3] = new Measure(4, 3);
    measures[3].addChord(0, 1, 'Bb/F', 1);
    measures[3].addChord(0, 2, 'Bb/F', 1);
    measures[3].addChord(0, 3, 'Bb/F', 1);
    measures[3].addChord(0, 4, 'Bb/F', 1);
    measures[3].addNote(1, 1, 'A#', 1, 2);
    measures[3].addNote(1, 2, 'A#', 1, 2);
    measures[3].addNote(1, 3, 'A#', 1, 2);
    measures[3].addNote(1, 4, 'A#', 1, 2);
    measures[3].addNote(2, 1, 'G', 0.5, 3);
    measures[3].addNote(2, 1.5, 'G', 0.5, 3);
    measures[3].addNote(2, 2, 'G#', 0.5, 3);
    measures[3].addNote(2, 2.5, 'G', 0.5, 3);
    measures[3].addNote(2, 3, 'D#', 1, 3);
    measures[4] = new Measure(4, 3);
    measures[4].addChord(0, 1, 'Fm', 1);
    measures[4].addChord(0, 2, 'Fm', 1);
    measures[4].addChord(0, 3, 'Fm', 1);
    measures[4].addChord(0, 4, 'Fm', 1);
    measures[4].addNote(1, 1, 'F', 1, 2);
    measures[4].addNote(1, 2, 'F', 1, 2);
    measures[4].addNote(1, 3, 'F', 1, 2);
    measures[4].addNote(1, 4, 'F', 1, 2);
    measures[4].addNote(2, 1, 'F', 2, 2);
    measures[4].addNote(2, 3.5, 'A#', 0.5, 2);
    measures[4].addNote(2, 4, 'C', 0.5, 2);
    measures[4].addNote(2, 4.5, 'D#', 0.5, 3);
    measures[5] = new Measure(4, 3);
    measures[5].addChord(0, 1, 'Bb/F', 1);
    measures[5].addChord(0, 2, 'Bb/F', 1);
    measures[5].addChord(0, 3, 'Bb/F', 1);
    measures[5].addChord(0, 4, 'Bb/F', 1);
    measures[5].addNote(1, 1, 'A#', 1, 2);
    measures[5].addNote(1, 2, 'A#', 1, 2);
    measures[5].addNote(1, 3, 'A#', 1, 2);
    measures[5].addNote(1, 4, 'A#', 1, 2);
    measures[5].addNote(2, 1, 'G', 1, 3);
    measures[5].addNote(2, 3, 'D', 1, 3);
    measures[6] = new Measure(4, 2);
    measures[6].addChord(0, 1, 'Gm', 1);
    measures[6].addChord(0, 2, 'Gm', 1);
    measures[6].addChord(0, 3, 'Gm', 1);
    measures[6].addChord(0, 4, 'Gm', 1);
    measures[6].addNote(1, 1, 'G', 1, 2);
    measures[6].addNote(1, 2, 'G', 1, 2);
    measures[6].addNote(1, 3, 'G', 1, 2);
    measures[6].addNote(1, 4, 'G', 1, 2);
    measures[7] = new Measure(4, 2);
    measures[7].addChord(0, 1, 'G#', 1);
    measures[7].addChord(0, 2, 'G#', 1);
    measures[7].addChord(0, 3, 'A#', 1);
    measures[7].addChord(0, 4, 'Cm', 1);
    measures[7].addNote(1, 1, 'G#', 1, 1);
    measures[7].addNote(1, 2, 'G#', 1, 1);
    measures[7].addNote(1, 3, 'A#', 1, 2);
    measures[7].addNote(1, 4, 'G#', 1, 2);
    return measures;
}