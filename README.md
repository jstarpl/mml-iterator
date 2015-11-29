# mml-iterator
[![Build Status](http://img.shields.io/travis/mohayonao/mml-iterator.svg?style=flat-square)](https://travis-ci.org/mohayonao/mml-iterator)
[![NPM Version](http://img.shields.io/npm/v/mml-iterator.svg?style=flat-square)](https://www.npmjs.org/package/mml-iterator)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> MML(Music Macro Language) Iterator

## Installation

```
$ npm install mml-iterator
```

## API
### MMLIterator
- `constructor(source: string)`

#### Instance methods
- `next(): { done: boolean, value: object }`
- `[Symbol.iterator]: self`

## Example

```js
import MMLIterator from "mml-iterator";

let iter = new MMLIterator("t120 ceg<c");

for (let noteEvent of iter) {
  console.log(noteEvent);
}
```

```js
{ time: 0.0, duration: 0.5, noteNumbers: [ 72 ], velocity: 100, quantize: 75 }
{ time: 0.5, duration: 0.5, noteNumbers: [ 76 ], velocity: 100, quantize: 75 }
{ time: 1.0, duration: 0.5, noteNumbers: [ 79 ], velocity: 100, quantize: 75 }
{ time: 1.5, duration: 0.5, noteNumbers: [ 84 ], velocity: 100, quantize: 75 }
```

## MML Syntax
### NoteEvent
- [__cdefgab__][__-+__]?(\\d+)?\\.*
  - note on (default: l)
  - e.g. `c e-8. g16`
- __[__ ([__cdefgab__][__-+__]?|[__<>__])+ __]__(\\d+)?\\.*
  - chord (default: l)
  - e.g. `[ >g<ce ]2 [ >gb<d ]2 [ >g<ce ]1`
- __r__(\\d+)?\\.*
  - rest (default: l)
  - e.g. `l16 crcc crcc crccr crcc`

### NoteLength
- __l__(\\d+)?\\.*
  - length (default: 4)
  - e.g. `l8 cc l4 e l2 g`
- __^__(\\d+)?\\.*
  - tie (default: l)
  - e.g `l16 c^^ e^^ g^`
- __q__(\\d+)?
  - quantize (default: 75)
  - e.g. `l16 q50 crcc crcc crcc crcc`

### NotePitch
- __o__(\\d+)?
  - octave (default: 4)
  - e.g. `o4 ceg o5 c`
- __>__(\\d+)?
  - octave up (default: 1)
  - e.g. `ceg < c`
- __<__(\\d+)?
  - octave down (default: 1)
  - e.g. `c > gec`

### Control
- __t__(\\d+)?
  - tempo (default: 120)
  - e.g. `t140 cdefgab<c`
- __v__(\\d+)?
  - velocity (default: 100)
  - e.g. `v75 c v50 e v25 g`
- __$__
  - infinite loop
  - e.g. `l2 $ [fa<ce] [gb<d] [egb<d] [ea<c]`
- __/:__ ... __|__ ... __:/__(\\d+)?
  - loop (default: 2)
  - commands after __|__ are skipped in the last loop
  - e.g. `l2 /: [fa<ce] [gb<d] [egb<d] | [ea<c] :/4 [eg<c]`

## License

MIT
