function chord(obj, note, octave, duration)
{
    switch(note)
    {
        case 'C':
            obj.play('C', octave, duration)
            obj.play('E', octave, duration)
            obj.play('G', octave, duration)
            break;
        case 'Cm':
            obj.play('C', octave, duration)
            obj.play('D#', octave, duration)
            obj.play('G', octave, duration)
        break;
        case 'D':
            obj.play('D', octave, duration)
            obj.play('F#', octave, duration)
            obj.play('A', octave, duration)
        break;
        case 'Dmaj7':
            obj.play('D', octave, duration)
            obj.play('F#', octave, duration)
            obj.play('A', octave, duration)
        break;
        case 'Dm':
            obj.play('D', octave, duration)
            obj.play('F', octave, duration)
            obj.play('A', octave, duration)
        break;
        case 'E':
            obj.play('E', octave, duration)
            obj.play('G#', octave, duration)
            obj.play('B#', octave, duration)
        break;
        case 'F':
            obj.play('F', octave, duration)
            obj.play('A', octave, duration)
            obj.play('C', octave, duration)
        break;
        case 'Fm':
            obj.play('F', octave, duration)
            obj.play('G#', octave, duration)
            obj.play('C', octave, duration)
        break;
        case 'G':
            obj.play('G', octave, duration)
            obj.play('A#', octave, duration)
            obj.play('D', octave, duration)
        break;
        case 'Gm':
            obj.play('G', octave, duration)
            obj.play('A', octave, duration)
            obj.play('D', octave, duration)
        break;
        case 'G#':
            obj.play('G#', octave, duration)
            obj.play('C', octave, duration)
            obj.play('D#', octave, duration)
        break;
        case 'A':
            obj.play('A', octave, duration)
            obj.play('C#', octave, duration)
            obj.play('E', octave, duration)
        break;
        case 'A#':
            obj.play('A#', octave, duration)
            obj.play('D', octave, duration)
            obj.play('F', octave, duration)
        break;
        case 'Am':
            obj.play('A', octave, duration)
            obj.play('C', octave, duration)
            obj.play('E', octave, duration)
        break;
        case 'B':
            obj.play('B', octave, duration)
            obj.play('D', octave, duration)
            obj.play('F#', octave, duration)
        break;
        case 'Bb/F':
            obj.play('D', octave, duration)
            obj.play('A#', octave, duration)
            obj.play('F', octave-1, duration)
        break;
        case 'Bm':
            obj.play('B', octave, duration)
            obj.play('C#', octave, duration)
            obj.play('F#', octave, duration)
        break;
    }
}