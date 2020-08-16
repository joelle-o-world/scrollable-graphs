<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [scrollable-graphs](#scrollable-graphs)
- [scrollable-graphs](#scrollable-graphs-1)
- [Classes](#classes)
  - [Class: CoordinateGraph](#class-coordinategraph)
    - [Hierarchy](#hierarchy)
    - [Index](#index)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Methods](#methods)
  - [Class: InteractiveTrackView](#class-interactivetrackview)
    - [Hierarchy](#hierarchy-1)
    - [Index](#index-1)
    - [Constructors](#constructors-1)
    - [Properties](#properties-1)
    - [Accessors](#accessors)
    - [Methods](#methods-1)
  - [Class: MarkerGraph](#class-markergraph)
    - [Hierarchy](#hierarchy-2)
    - [Index](#index-2)
    - [Constructors](#constructors-2)
    - [Properties](#properties-2)
    - [Methods](#methods-2)
  - [Class: PolygonGraph](#class-polygongraph)
    - [Hierarchy](#hierarchy-3)
    - [Index](#index-3)
    - [Constructors](#constructors-3)
    - [Properties](#properties-3)
    - [Accessors](#accessors-1)
    - [Methods](#methods-3)
  - [Class: SignalGraph](#class-signalgraph)
    - [Hierarchy](#hierarchy-4)
    - [Index](#index-4)
    - [Constructors](#constructors-4)
    - [Properties](#properties-4)
    - [Accessors](#accessors-2)
    - [Methods](#methods-4)
  - [Class: TrackView](#class-trackview)
    - [Hierarchy](#hierarchy-5)
    - [Index](#index-5)
    - [Constructors](#constructors-5)
    - [Properties](#properties-5)
    - [Accessors](#accessors-3)
    - [Methods](#methods-5)
- [scrollable-graphs](#scrollable-graphs-2)
  - [Index](#index-6)
    - [Classes](#classes-1)
    - [Interfaces](#interfaces)
    - [Type aliases](#type-aliases)
    - [Functions](#functions)
  - [Type aliases](#type-aliases-1)
    - [Coordinate](#coordinate)
    - [Graph](#graph)
  - [Functions](#functions-1)
    - [`Const` defaultColorTransform](#const-defaultcolortransform)
    - [hslToRgb](#hsltorgb)
    - [rgbToHsl](#rgbtohsl)
    - [`Const` sq](#const-sq)
- [Interfaces](#interfaces-1)
  - [Interface: Polygon](#interface-polygon)
    - [Hierarchy](#hierarchy-6)
    - [Index](#index-7)
    - [Properties](#properties-6)
- [Classes](#classes-2)
  - [Class: CoordinateGraph](#class-coordinategraph-1)
    - [Hierarchy](#hierarchy-7)
    - [Index](#index-8)
    - [Constructors](#constructors-6)
    - [Properties](#properties-7)
    - [Methods](#methods-6)
  - [Class: InteractiveTrackView](#class-interactivetrackview-1)
    - [Hierarchy](#hierarchy-8)
    - [Index](#index-9)
    - [Constructors](#constructors-7)
    - [Properties](#properties-8)
    - [Accessors](#accessors-4)
    - [Methods](#methods-7)
  - [Class: MarkerGraph](#class-markergraph-1)
    - [Hierarchy](#hierarchy-9)
    - [Index](#index-10)
    - [Constructors](#constructors-8)
    - [Properties](#properties-9)
    - [Methods](#methods-8)
  - [Class: PolygonGraph](#class-polygongraph-1)
    - [Hierarchy](#hierarchy-10)
    - [Index](#index-11)
    - [Constructors](#constructors-9)
    - [Properties](#properties-10)
    - [Accessors](#accessors-5)
    - [Methods](#methods-9)
  - [Class: SignalGraph](#class-signalgraph-1)
    - [Hierarchy](#hierarchy-11)
    - [Index](#index-12)
    - [Constructors](#constructors-10)
    - [Properties](#properties-11)
    - [Accessors](#accessors-6)
    - [Methods](#methods-10)
  - [Class: TrackView](#class-trackview-1)
    - [Hierarchy](#hierarchy-12)
    - [Index](#index-13)
    - [Constructors](#constructors-11)
    - [Properties](#properties-12)
    - [Accessors](#accessors-7)
    - [Methods](#methods-11)
- [scrollable-graphs](#scrollable-graphs-3)
  - [Index](#index-14)
    - [Classes](#classes-3)
    - [Interfaces](#interfaces-2)
    - [Type aliases](#type-aliases-2)
    - [Functions](#functions-2)
  - [Type aliases](#type-aliases-3)
    - [Coordinate](#coordinate-1)
    - [Graph](#graph-1)
  - [Functions](#functions-3)
    - [`Const` defaultColorTransform](#const-defaultcolortransform-1)
    - [hslToRgb](#hsltorgb-1)
    - [rgbToHsl](#rgbtohsl-1)
    - [`Const` sq](#const-sq-1)
- [Interfaces](#interfaces-3)
  - [Interface: Polygon](#interface-polygon-1)
    - [Hierarchy](#hierarchy-13)
    - [Index](#index-15)
    - [Properties](#properties-13)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

[scrollable-graphs](#readmemd) › [Globals](#globalsmd)

# scrollable-graphs

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [scrollable-graphs](#scrollable-graphs)
- [Classes](#classes)
  - [Class: CoordinateGraph](#class-coordinategraph)
    - [Hierarchy](#hierarchy)
    - [Index](#index)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Methods](#methods)
  - [Class: InteractiveTrackView](#class-interactivetrackview)
    - [Hierarchy](#hierarchy-1)
    - [Index](#index-1)
    - [Constructors](#constructors-1)
    - [Properties](#properties-1)
    - [Accessors](#accessors)
    - [Methods](#methods-1)
  - [Class: MarkerGraph](#class-markergraph)
    - [Hierarchy](#hierarchy-2)
    - [Index](#index-2)
    - [Constructors](#constructors-2)
    - [Properties](#properties-2)
    - [Methods](#methods-2)
  - [Class: PolygonGraph](#class-polygongraph)
    - [Hierarchy](#hierarchy-3)
    - [Index](#index-3)
    - [Constructors](#constructors-3)
    - [Properties](#properties-3)
    - [Accessors](#accessors-1)
    - [Methods](#methods-3)
  - [Class: SignalGraph](#class-signalgraph)
    - [Hierarchy](#hierarchy-4)
    - [Index](#index-4)
    - [Constructors](#constructors-4)
    - [Properties](#properties-4)
    - [Accessors](#accessors-2)
    - [Methods](#methods-4)
  - [Class: TrackView](#class-trackview)
    - [Hierarchy](#hierarchy-5)
    - [Index](#index-5)
    - [Constructors](#constructors-5)
    - [Properties](#properties-5)
    - [Accessors](#accessors-3)
    - [Methods](#methods-5)
- [scrollable-graphs](#scrollable-graphs-1)
  - [Index](#index-6)
    - [Classes](#classes-1)
    - [Interfaces](#interfaces)
    - [Type aliases](#type-aliases)
    - [Functions](#functions)
  - [Type aliases](#type-aliases-1)
    - [Coordinate](#coordinate)
    - [Graph](#graph)
  - [Functions](#functions-1)
    - [`Const` defaultColorTransform](#const-defaultcolortransform)
    - [hslToRgb](#hsltorgb)
    - [rgbToHsl](#rgbtohsl)
    - [`Const` sq](#const-sq)
- [Interfaces](#interfaces-1)
  - [Interface: Polygon](#interface-polygon)
    - [Hierarchy](#hierarchy-6)
    - [Index](#index-7)
    - [Properties](#properties-6)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<a name="readmemd"></a>

[scrollable-graphs](#globalsmd)

# scrollable-graphs

# Classes

<a name="classescoordinategraphmd"></a>

[scrollable-graphs](#globalsmd) › [CoordinateGraph](#classescoordinategraphmd)

## Class: CoordinateGraph

Graph for representing a series of <time, y-value> pairs.

### Hierarchy

* **CoordinateGraph**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [barWidth](#barwidth)
* [color](#color)
* [mode](#mode)
* [points](#points)
* [scale](#scale)

#### Methods

* [draw](#draw)
* [normaliseScale](#normalisescale)
* [sortPoints](#sortpoints)

### Constructors

####  constructor

\+ **new CoordinateGraph**(`points`: [Coordinate](#coordinate)[]): *[CoordinateGraph](#classescoordinategraphmd)*

*Defined in [CoordinateGraph.ts:11](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`points` | [Coordinate](#coordinate)[] |

**Returns:** *[CoordinateGraph](#classescoordinategraphmd)*

### Properties

####  barWidth

• **barWidth**: *number*

*Defined in [CoordinateGraph.ts:9](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L9)*

___

####  color

• **color**: *string*

*Defined in [CoordinateGraph.ts:10](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L10)*

___

####  mode

• **mode**: *"bar"*

*Defined in [CoordinateGraph.ts:8](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L8)*

___

####  points

• **points**: *[Coordinate](#coordinate)[]*

*Defined in [CoordinateGraph.ts:7](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L7)*

___

####  scale

• **scale**: *function*

*Defined in [CoordinateGraph.ts:11](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L11)*

##### Type declaration:

▸ (`y`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |

### Methods

####  draw

▸ **draw**(`display`: [TrackView](#classestrackviewmd)): *void*

*Defined in [CoordinateGraph.ts:26](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`display` | [TrackView](#classestrackviewmd) |

**Returns:** *void*

___

####  normaliseScale

▸ **normaliseScale**(`MIN`: number, `MAX`: number): *function*

*Defined in [CoordinateGraph.ts:61](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L61)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`MIN` | number | 0 |
`MAX` | number | 1 |

**Returns:** *function*

▸ (`y`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |

___

####  sortPoints

▸ **sortPoints**(): *this*

*Defined in [CoordinateGraph.ts:21](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L21)*

**Returns:** *this*

<a name="classesinteractivetrackviewmd"></a>

[scrollable-graphs](#globalsmd) › [InteractiveTrackView](#classesinteractivetrackviewmd)

## Class: InteractiveTrackView

### Hierarchy

* [TrackView](#classestrackviewmd)

  ↳ **InteractiveTrackView**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [audiobuffer](#audiobuffer)
* [audioctx](#audioctx)
* [canvas](#canvas)
* [ctx](#ctx)
* [cursorInterval](#cursorinterval)
* [cursorVisible](#cursorvisible)
* [graphs](#graphs)
* [lockedToPlayhead](#lockedtoplayhead)
* [playheadOffset](#playheadoffset)
* [playingSource](#playingsource)
* [t0](#t0)
* [t1](#t1)
* [tMax](#tmax)
* [tMin](#tmin)
* [tSpanMin](#tspanmin)

#### Accessors

* [pixelsPerSecond](#pixelspersecond)
* [tPlayhead](#tplayhead)
* [tSpan](#tspan)

#### Methods

* [addGraph](#addgraph)
* [draw](#draw)
* [enforceLimits](#enforcelimits)
* [play](#play)
* [scroll](#scroll)
* [stop](#stop)
* [tAtX](#tatx)
* [xAtT](#xatt)
* [zoom](#zoom)

### Constructors

####  constructor

\+ **new InteractiveTrackView**(`canvas`: HTMLCanvasElement): *[InteractiveTrackView](#classesinteractivetrackviewmd)*

*Overrides [TrackView](#classestrackviewmd).[constructor](#constructor)*

*Defined in [InteractiveTrackView.ts:4](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/InteractiveTrackView.ts#L4)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`canvas` | HTMLCanvasElement | document.createElement('canvas') |

**Returns:** *[InteractiveTrackView](#classesinteractivetrackviewmd)*

### Properties

####  audiobuffer

• **audiobuffer**: *AudioBuffer*

*Inherited from [TrackView](#classestrackviewmd).[audiobuffer](#audiobuffer)*

*Defined in [TrackView.ts:49](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L49)*

The audio sample under analysis

___

####  audioctx

• **audioctx**: *AudioContext*

*Inherited from [TrackView](#classestrackviewmd).[audioctx](#audioctx)*

*Defined in [TrackView.ts:46](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L46)*

Web audio context for audio playback.

___

####  canvas

• **canvas**: *HTMLCanvasElement*

*Overrides [TrackView](#classestrackviewmd).[canvas](#canvas)*

*Defined in [InteractiveTrackView.ts:4](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/InteractiveTrackView.ts#L4)*

___

####  ctx

• **ctx**: *CanvasRenderingContext2D | null*

*Inherited from [TrackView](#classestrackviewmd).[ctx](#ctx)*

*Defined in [TrackView.ts:16](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L16)*

Canvas rendering context

___

####  cursorInterval

• **cursorInterval**: *number*

*Inherited from [TrackView](#classestrackviewmd).[cursorInterval](#cursorinterval)*

*Defined in [TrackView.ts:52](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L52)*

Timer reference for updating playhead position.

___

####  cursorVisible

• **cursorVisible**: *boolean*

*Inherited from [TrackView](#classestrackviewmd).[cursorVisible](#cursorvisible)*

*Defined in [TrackView.ts:43](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L43)*

Should the playhead be visible?

___

####  graphs

• **graphs**: *[Graph](#graph)[]*

*Inherited from [TrackView](#classestrackviewmd).[graphs](#graphs)*

*Defined in [TrackView.ts:40](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L40)*

The graphs objects that belong to the track view

___

####  lockedToPlayhead

• **lockedToPlayhead**: *boolean*

*Inherited from [TrackView](#classestrackviewmd).[lockedToPlayhead](#lockedtoplayhead)*

*Defined in [TrackView.ts:19](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L19)*

If true, the graph will automatically scroll with the playhead when audio is playing.

___

####  playheadOffset

• **playheadOffset**: *number | null*

*Inherited from [TrackView](#classestrackviewmd).[playheadOffset](#playheadoffset)*

*Defined in [TrackView.ts:22](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L22)*

___

####  playingSource

• **playingSource**: *AudioBufferSourceNode*

*Inherited from [TrackView](#classestrackviewmd).[playingSource](#playingsource)*

*Defined in [TrackView.ts:55](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L55)*

The currently playing buffer source node (if audio is playing)

___

####  t0

• **t0**: *number*

*Inherited from [TrackView](#classestrackviewmd).[t0](#t0)*

*Defined in [TrackView.ts:25](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L25)*

Time at left edge of the graph

___

####  t1

• **t1**: *number*

*Inherited from [TrackView](#classestrackviewmd).[t1](#t1)*

*Defined in [TrackView.ts:28](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L28)*

Time at right edge of the graph

___

####  tMax

• **tMax**: *number | null*

*Inherited from [TrackView](#classestrackviewmd).[tMax](#tmax)*

*Defined in [TrackView.ts:34](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L34)*

The maximum time that can be shown on the graph. I.e. when audio ends.

___

####  tMin

• **tMin**: *number | null*

*Inherited from [TrackView](#classestrackviewmd).[tMin](#tmin)*

*Defined in [TrackView.ts:31](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L31)*

The minimum time that can be shown on the graph.

___

####  tSpanMin

• **tSpanMin**: *number*

*Inherited from [TrackView](#classestrackviewmd).[tSpanMin](#tspanmin)*

*Defined in [TrackView.ts:37](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L37)*

Minimum duration that can be displayed at any time. This effectively sets a hard limit on zoom

### Accessors

####  pixelsPerSecond

• **get pixelsPerSecond**(): *number*

*Inherited from [TrackView](#classestrackviewmd).[pixelsPerSecond](#pixelspersecond)*

*Defined in [TrackView.ts:125](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L125)*

**Returns:** *number*

___

####  tPlayhead

• **get tPlayhead**(): *null | number*

*Inherited from [TrackView](#classestrackviewmd).[tPlayhead](#tplayhead)*

*Defined in [TrackView.ts:133](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L133)*

**Returns:** *null | number*

___

####  tSpan

• **get tSpan**(): *number*

*Inherited from [TrackView](#classestrackviewmd).[tSpan](#tspan)*

*Defined in [TrackView.ts:129](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L129)*

**Returns:** *number*

### Methods

####  addGraph

▸ **addGraph**(...`graphs`: [Graph](#graph)[]): *void*

*Inherited from [TrackView](#classestrackviewmd).[addGraph](#addgraph)*

*Defined in [TrackView.ts:74](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`...graphs` | [Graph](#graph)[] |

**Returns:** *void*

___

####  draw

▸ **draw**(): *void*

*Inherited from [TrackView](#classestrackviewmd).[draw](#draw)*

*Defined in [TrackView.ts:79](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L79)*

**Returns:** *void*

___

####  enforceLimits

▸ **enforceLimits**(): *void*

*Inherited from [TrackView](#classestrackviewmd).[enforceLimits](#enforcelimits)*

*Defined in [TrackView.ts:204](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L204)*

**Returns:** *void*

___

####  play

▸ **play**(`offset`: number): *undefined | null*

*Inherited from [TrackView](#classestrackviewmd).[play](#play)*

*Defined in [TrackView.ts:140](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L140)*

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *undefined | null*

___

####  scroll

▸ **scroll**(`amount`: number): *void*

*Inherited from [TrackView](#classestrackviewmd).[scroll](#scroll)*

*Defined in [TrackView.ts:181](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L181)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |

**Returns:** *void*

___

####  stop

▸ **stop**(): *void*

*Inherited from [TrackView](#classestrackviewmd).[stop](#stop)*

*Defined in [TrackView.ts:173](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L173)*

**Returns:** *void*

___

####  tAtX

▸ **tAtX**(`x`: number): *number*

*Inherited from [TrackView](#classestrackviewmd).[tAtX](#tatx)*

*Defined in [TrackView.ts:117](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *number*

___

####  xAtT

▸ **xAtT**(`t`: number): *number*

*Inherited from [TrackView](#classestrackviewmd).[xAtT](#xatt)*

*Defined in [TrackView.ts:121](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *number*

___

####  zoom

▸ **zoom**(`sf`: number, `o`: number): *void*

*Inherited from [TrackView](#classestrackviewmd).[zoom](#zoom)*

*Defined in [TrackView.ts:191](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L191)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`sf` | number | 1.5 |
`o` | number | (this.t0+this.t1)/2 |

**Returns:** *void*

<a name="classesmarkergraphmd"></a>

[scrollable-graphs](#globalsmd) › [MarkerGraph](#classesmarkergraphmd)

## Class: MarkerGraph

Graph for representing a series of instantanteous time points.

### Hierarchy

* **MarkerGraph**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [color](#color)
* [height](#height)
* [points](#points)
* [y](#y)

#### Methods

* [draw](#draw)

### Constructors

####  constructor

\+ **new MarkerGraph**(`points`: number[]): *[MarkerGraph](#classesmarkergraphmd)*

*Defined in [MarkerGraph.ts:10](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/MarkerGraph.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`points` | number[] |

**Returns:** *[MarkerGraph](#classesmarkergraphmd)*

### Properties

####  color

• **color**: *string*

*Defined in [MarkerGraph.ts:10](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/MarkerGraph.ts#L10)*

___

####  height

• **height**: *number*

*Defined in [MarkerGraph.ts:9](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/MarkerGraph.ts#L9)*

___

####  points

• **points**: *number[]*

*Defined in [MarkerGraph.ts:7](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/MarkerGraph.ts#L7)*

___

####  y

• **y**: *number*

*Defined in [MarkerGraph.ts:8](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/MarkerGraph.ts#L8)*

### Methods

####  draw

▸ **draw**(`display`: [TrackView](#classestrackviewmd)): *this*

*Defined in [MarkerGraph.ts:18](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/MarkerGraph.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`display` | [TrackView](#classestrackviewmd) |

**Returns:** *this*

<a name="classespolygongraphmd"></a>

[scrollable-graphs](#globalsmd) › [PolygonGraph](#classespolygongraphmd)

## Class: PolygonGraph

### Hierarchy

* **PolygonGraph**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [_height](#_height)
* [heightConstant](#heightconstant)
* [largerScaleGraph](#largerscalegraph)
* [polygons](#polygons)
* [scale](#scale)
* [useNormalisedColors](#usenormalisedcolors)
* [y](#y)

#### Accessors

* [density](#density)
* [height](#height)
* [t0](#t0)
* [t1](#t1)

#### Methods

* [addPolygon](#addpolygon)
* [draw](#draw)
* [normaliseColors](#normalisecolors)
* [normaliseScale](#normalisescale)

### Constructors

####  constructor

\+ **new PolygonGraph**(`polygons`: [Polygon](#interfacespolygonmd)[]): *[PolygonGraph](#classespolygongraphmd)*

*Defined in [PolygonGraph.ts:31](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L31)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`polygons` | [Polygon](#interfacespolygonmd)[] | [] |

**Returns:** *[PolygonGraph](#classespolygongraphmd)*

### Properties

####  _height

• **_height**: *number*

*Defined in [PolygonGraph.ts:29](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L29)*

___

####  heightConstant

• **heightConstant**: *number*

*Defined in [PolygonGraph.ts:30](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L30)*

___

####  largerScaleGraph

• **largerScaleGraph**: *[PolygonGraph](#classespolygongraphmd) | null*

*Defined in [PolygonGraph.ts:28](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L28)*

___

####  polygons

• **polygons**: *[Polygon](#interfacespolygonmd)[]*

*Defined in [PolygonGraph.ts:25](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L25)*

___

####  scale

• **scale**: *function*

*Defined in [PolygonGraph.ts:26](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L26)*

##### Type declaration:

▸ (`y`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |

___

####  useNormalisedColors

• **useNormalisedColors**: *true | false | undefined*

*Defined in [PolygonGraph.ts:31](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L31)*

___

####  y

• **y**: *number*

*Defined in [PolygonGraph.ts:27](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L27)*

### Accessors

####  density

• **get density**(): *number*

*Defined in [PolygonGraph.ts:165](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L165)*

Average polygons per second of audio

**Returns:** *number*

___

####  height

• **get height**(): *number*

*Defined in [PolygonGraph.ts:150](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L150)*

**Returns:** *number*

• **set height**(`h`: number): *void*

*Defined in [PolygonGraph.ts:146](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L146)*

**Parameters:**

Name | Type |
------ | ------ |
`h` | number |

**Returns:** *void*

___

####  t0

• **get t0**(): *number*

*Defined in [PolygonGraph.ts:155](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L155)*

Start time of first polygon

**Returns:** *number*

___

####  t1

• **get t1**(): *number*

*Defined in [PolygonGraph.ts:160](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L160)*

End time of last polygon

**Returns:** *number*

### Methods

####  addPolygon

▸ **addPolygon**(`polygon`: [Polygon](#interfacespolygonmd)): *void*

*Defined in [PolygonGraph.ts:88](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`polygon` | [Polygon](#interfacespolygonmd) |

**Returns:** *void*

___

####  draw

▸ **draw**(`display`: [TrackView](#classestrackviewmd)): *[PolygonGraph](#classespolygongraphmd)*

*Defined in [PolygonGraph.ts:43](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L43)*

Draw the graph on the canvas of the given track view.

**Parameters:**

Name | Type |
------ | ------ |
`display` | [TrackView](#classestrackviewmd) |

**Returns:** *[PolygonGraph](#classespolygongraphmd)*

___

####  normaliseColors

▸ **normaliseColors**(`transform`: function): *void*

*Defined in [PolygonGraph.ts:117](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L117)*

**Parameters:**

▪`Default value`  **transform**: *function*= defaultColorTransform

▸ (`color`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`color` | string |

**Returns:** *void*

___

####  normaliseScale

▸ **normaliseScale**(`MIN`: number, `MAX`: number): *function*

*Defined in [PolygonGraph.ts:93](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L93)*

Normalise the polygon dimensions using a linear scale. Replaces the `scale` property on the graph.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`MIN` | number | 0 |
`MAX` | number | 1 |

**Returns:** *function*

▸ (`y`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |

<a name="classessignalgraphmd"></a>

[scrollable-graphs](#globalsmd) › [SignalGraph](#classessignalgraphmd)

## Class: SignalGraph

A graph representing a time series at a fixed interval.
Automatically produces larger scale graphs using RMS.

### Hierarchy

* **SignalGraph**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [_rmsGraph](#_rmsgraph)
* [color](#color)
* [data](#data)
* [interval](#interval)
* [parentGraph](#parentgraph)
* [scale](#scale)
* [style](#style)

#### Accessors

* [rmsGraph](#rmsgraph)

#### Methods

* [draw](#draw)
* [normaliseScale](#normalisescale)

### Constructors

####  constructor

\+ **new SignalGraph**(`data`: number[] | Float32Array, `interval`: number): *[SignalGraph](#classessignalgraphmd)*

*Defined in [SignalGraph.ts:14](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L14)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | number[] &#124; Float32Array | - |
`interval` | number | 1 |

**Returns:** *[SignalGraph](#classessignalgraphmd)*

### Properties

####  _rmsGraph

• **_rmsGraph**: *[SignalGraph](#classessignalgraphmd) | null*

*Defined in [SignalGraph.ts:13](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L13)*

___

####  color

• **color**: *string*

*Defined in [SignalGraph.ts:11](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L11)*

___

####  data

• **data**: *number[] | Float32Array*

*Defined in [SignalGraph.ts:8](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L8)*

___

####  interval

• **interval**: *number*

*Defined in [SignalGraph.ts:9](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L9)*

___

####  parentGraph

• **parentGraph**: *this*

*Defined in [SignalGraph.ts:14](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L14)*

___

####  scale

• **scale**: *function*

*Defined in [SignalGraph.ts:10](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L10)*

##### Type declaration:

▸ (`y`: number): *any*

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |

___

####  style

• **style**: *"line" | "reflectAndFill"*

*Defined in [SignalGraph.ts:12](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L12)*

### Accessors

####  rmsGraph

• **get rmsGraph**(): *[SignalGraph](#classessignalgraphmd)‹›*

*Defined in [SignalGraph.ts:70](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L70)*

**Returns:** *[SignalGraph](#classessignalgraphmd)‹›*

### Methods

####  draw

▸ **draw**(`display`: [TrackView](#classestrackviewmd)): *this | [SignalGraph](#classessignalgraphmd)*

*Defined in [SignalGraph.ts:24](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`display` | [TrackView](#classestrackviewmd) |

**Returns:** *this | [SignalGraph](#classessignalgraphmd)*

___

####  normaliseScale

▸ **normaliseScale**(`MIN`: number, `MAX`: number): *function*

*Defined in [SignalGraph.ts:97](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L97)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`MIN` | number | 0 |
`MAX` | number | 1 |

**Returns:** *function*

▸ (`y`: number): *any*

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |

<a name="classestrackviewmd"></a>

[scrollable-graphs](#globalsmd) › [TrackView](#classestrackviewmd)

## Class: TrackView

Class for rendering multiple graphs on a canvas element.
Allowing the user to zoom and pan with the mouse wheel.

### Hierarchy

* **TrackView**

  ↳ [InteractiveTrackView](#classesinteractivetrackviewmd)

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [audiobuffer](#audiobuffer)
* [audioctx](#audioctx)
* [canvas](#canvas)
* [ctx](#ctx)
* [cursorInterval](#cursorinterval)
* [cursorVisible](#cursorvisible)
* [graphs](#graphs)
* [lockedToPlayhead](#lockedtoplayhead)
* [playheadOffset](#playheadoffset)
* [playingSource](#playingsource)
* [t0](#t0)
* [t1](#t1)
* [tMax](#tmax)
* [tMin](#tmin)
* [tSpanMin](#tspanmin)

#### Accessors

* [pixelsPerSecond](#pixelspersecond)
* [tPlayhead](#tplayhead)
* [tSpan](#tspan)

#### Methods

* [addGraph](#addgraph)
* [draw](#draw)
* [enforceLimits](#enforcelimits)
* [play](#play)
* [scroll](#scroll)
* [stop](#stop)
* [tAtX](#tatx)
* [xAtT](#xatt)
* [zoom](#zoom)

### Constructors

####  constructor

\+ **new TrackView**(`canvas`: HTMLCanvasElement): *[TrackView](#classestrackviewmd)*

*Defined in [TrackView.ts:55](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L55)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`canvas` | HTMLCanvasElement | document.createElement('canvas') |

**Returns:** *[TrackView](#classestrackviewmd)*

### Properties

####  audiobuffer

• **audiobuffer**: *AudioBuffer*

*Defined in [TrackView.ts:49](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L49)*

The audio sample under analysis

___

####  audioctx

• **audioctx**: *AudioContext*

*Defined in [TrackView.ts:46](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L46)*

Web audio context for audio playback.

___

####  canvas

• **canvas**: *HTMLCanvasElement*

*Defined in [TrackView.ts:13](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L13)*

Reference to the DOM canvas element where the graphs will be drawn.

___

####  ctx

• **ctx**: *CanvasRenderingContext2D | null*

*Defined in [TrackView.ts:16](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L16)*

Canvas rendering context

___

####  cursorInterval

• **cursorInterval**: *number*

*Defined in [TrackView.ts:52](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L52)*

Timer reference for updating playhead position.

___

####  cursorVisible

• **cursorVisible**: *boolean*

*Defined in [TrackView.ts:43](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L43)*

Should the playhead be visible?

___

####  graphs

• **graphs**: *[Graph](#graph)[]*

*Defined in [TrackView.ts:40](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L40)*

The graphs objects that belong to the track view

___

####  lockedToPlayhead

• **lockedToPlayhead**: *boolean*

*Defined in [TrackView.ts:19](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L19)*

If true, the graph will automatically scroll with the playhead when audio is playing.

___

####  playheadOffset

• **playheadOffset**: *number | null*

*Defined in [TrackView.ts:22](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L22)*

___

####  playingSource

• **playingSource**: *AudioBufferSourceNode*

*Defined in [TrackView.ts:55](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L55)*

The currently playing buffer source node (if audio is playing)

___

####  t0

• **t0**: *number*

*Defined in [TrackView.ts:25](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L25)*

Time at left edge of the graph

___

####  t1

• **t1**: *number*

*Defined in [TrackView.ts:28](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L28)*

Time at right edge of the graph

___

####  tMax

• **tMax**: *number | null*

*Defined in [TrackView.ts:34](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L34)*

The maximum time that can be shown on the graph. I.e. when audio ends.

___

####  tMin

• **tMin**: *number | null*

*Defined in [TrackView.ts:31](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L31)*

The minimum time that can be shown on the graph.

___

####  tSpanMin

• **tSpanMin**: *number*

*Defined in [TrackView.ts:37](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L37)*

Minimum duration that can be displayed at any time. This effectively sets a hard limit on zoom

### Accessors

####  pixelsPerSecond

• **get pixelsPerSecond**(): *number*

*Defined in [TrackView.ts:125](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L125)*

**Returns:** *number*

___

####  tPlayhead

• **get tPlayhead**(): *null | number*

*Defined in [TrackView.ts:133](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L133)*

**Returns:** *null | number*

___

####  tSpan

• **get tSpan**(): *number*

*Defined in [TrackView.ts:129](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L129)*

**Returns:** *number*

### Methods

####  addGraph

▸ **addGraph**(...`graphs`: [Graph](#graph)[]): *void*

*Defined in [TrackView.ts:74](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`...graphs` | [Graph](#graph)[] |

**Returns:** *void*

___

####  draw

▸ **draw**(): *void*

*Defined in [TrackView.ts:79](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L79)*

**Returns:** *void*

___

####  enforceLimits

▸ **enforceLimits**(): *void*

*Defined in [TrackView.ts:204](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L204)*

**Returns:** *void*

___

####  play

▸ **play**(`offset`: number): *undefined | null*

*Defined in [TrackView.ts:140](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L140)*

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *undefined | null*

___

####  scroll

▸ **scroll**(`amount`: number): *void*

*Defined in [TrackView.ts:181](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L181)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |

**Returns:** *void*

___

####  stop

▸ **stop**(): *void*

*Defined in [TrackView.ts:173](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L173)*

**Returns:** *void*

___

####  tAtX

▸ **tAtX**(`x`: number): *number*

*Defined in [TrackView.ts:117](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *number*

___

####  xAtT

▸ **xAtT**(`t`: number): *number*

*Defined in [TrackView.ts:121](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *number*

___

####  zoom

▸ **zoom**(`sf`: number, `o`: number): *void*

*Defined in [TrackView.ts:191](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L191)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`sf` | number | 1.5 |
`o` | number | (this.t0+this.t1)/2 |

**Returns:** *void*

<a name="globalsmd"></a>

[scrollable-graphs](#globalsmd)

# scrollable-graphs

## Index

### Classes

* [CoordinateGraph](#classescoordinategraphmd)
* [InteractiveTrackView](#classesinteractivetrackviewmd)
* [MarkerGraph](#classesmarkergraphmd)
* [PolygonGraph](#classespolygongraphmd)
* [SignalGraph](#classessignalgraphmd)
* [TrackView](#classestrackviewmd)

### Interfaces

* [Polygon](#interfacespolygonmd)

### Type aliases

* [Coordinate](#coordinate)
* [Graph](#graph)

### Functions

* [defaultColorTransform](#const-defaultcolortransform)
* [hslToRgb](#hsltorgb)
* [rgbToHsl](#rgbtohsl)
* [sq](#const-sq)

## Type aliases

###  Coordinate

Ƭ **Coordinate**: *object*

*Defined in [CoordinateGraph.ts:3](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L3)*

#### Type declaration:

* **x**: *number*

* **y**: *number*

___

###  Graph

Ƭ **Graph**: *[Graph](#graph)*

*Defined in [TrackView.ts:6](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L6)*

## Functions

### `Const` defaultColorTransform

▸ **defaultColorTransform**(`color`: string): *string*

*Defined in [PolygonGraph.ts:170](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`color` | string |

**Returns:** *string*

___

###  hslToRgb

▸ **hslToRgb**(`h`: number, `s`: number, `l`: number): *number[]*

*Defined in [colorTransform.ts:12](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/colorTransform.ts#L12)*

Converts an HSL color value to RGB. Conversion formula
adapted from http://en.wikipedia.org/wiki/HSL_color_space.
Assumes h, s, and l are contained in the set [0, 1] and
returns r, g, and b in the set [0, 255].

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`h` | number | The hue |
`s` | number | The saturation |
`l` | number | The lightness |

**Returns:** *number[]*

The RGB representation

___

###  rgbToHsl

▸ **rgbToHsl**(`r`: number, `g`: number, `b`: number): *number[]*

*Defined in [colorTransform.ts:48](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/colorTransform.ts#L48)*

Converts an RGB color value to HSL. Conversion formula
adapted from http://en.wikipedia.org/wiki/HSL_color_space.
Assumes r, g, and b are contained in the set [0, 255] and
returns h, s, and l in the set [0, 1].

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`r` | number | The red color value |
`g` | number | The green color value |
`b` | number | The blue color value |

**Returns:** *number[]*

The HSL representation

___

### `Const` sq

▸ **sq**(`x`: number): *number*

*Defined in [SignalGraph.ts:3](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *number*

# Interfaces

<a name="interfacespolygonmd"></a>

[scrollable-graphs](#globalsmd) › [Polygon](#interfacespolygonmd)

## Interface: Polygon

### Hierarchy

* **Polygon**

### Index

#### Properties

* [color](#color)
* [h0](#h0)
* [h1](#h1)
* [normalisedColor](#optional-normalisedcolor)
* [t0](#t0)
* [t1](#t1)

### Properties

####  color

• **color**: *string*

*Defined in [PolygonGraph.ts:20](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L20)*

Colour of the polygon.

___

####  h0

• **h0**: *number*

*Defined in [PolygonGraph.ts:14](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L14)*

Height at the start of the polygon

___

####  h1

• **h1**: *number*

*Defined in [PolygonGraph.ts:17](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L17)*

Height at the end of the polygon.

___

#### `Optional` normalisedColor

• **normalisedColor**? : *undefined | string*

*Defined in [PolygonGraph.ts:21](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L21)*

___

####  t0

• **t0**: *number*

*Defined in [PolygonGraph.ts:8](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L8)*

Start time in seconds

___

####  t1

• **t1**: *number*

*Defined in [PolygonGraph.ts:11](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L11)*

End time in seconds

# Classes


<a name="classescoordinategraphmd"></a>

[scrollable-graphs](#readmemd) › [Globals](#globalsmd) › [CoordinateGraph](#classescoordinategraphmd)

## Class: CoordinateGraph

Graph for representing a series of <time, y-value> pairs.

### Hierarchy

* **CoordinateGraph**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [barWidth](#barwidth)
* [color](#color)
* [mode](#mode)
* [points](#points)
* [scale](#scale)

#### Methods

* [draw](#draw)
* [normaliseScale](#normalisescale)
* [sortPoints](#sortpoints)

### Constructors

####  constructor

\+ **new CoordinateGraph**(`points`: [Coordinate](#coordinate)[]): *[CoordinateGraph](#classescoordinategraphmd)*

*Defined in [CoordinateGraph.ts:11](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`points` | [Coordinate](#coordinate)[] |

**Returns:** *[CoordinateGraph](#classescoordinategraphmd)*

### Properties

####  barWidth

• **barWidth**: *number*

*Defined in [CoordinateGraph.ts:9](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L9)*

___

####  color

• **color**: *string*

*Defined in [CoordinateGraph.ts:10](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L10)*

___

####  mode

• **mode**: *"bar"*

*Defined in [CoordinateGraph.ts:8](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L8)*

___

####  points

• **points**: *[Coordinate](#coordinate)[]*

*Defined in [CoordinateGraph.ts:7](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L7)*

___

####  scale

• **scale**: *function*

*Defined in [CoordinateGraph.ts:11](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L11)*

##### Type declaration:

▸ (`y`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |

### Methods

####  draw

▸ **draw**(`display`: [TrackView](#classestrackviewmd)): *void*

*Defined in [CoordinateGraph.ts:26](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`display` | [TrackView](#classestrackviewmd) |

**Returns:** *void*

___

####  normaliseScale

▸ **normaliseScale**(`MIN`: number, `MAX`: number): *function*

*Defined in [CoordinateGraph.ts:61](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L61)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`MIN` | number | 0 |
`MAX` | number | 1 |

**Returns:** *function*

▸ (`y`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |

___

####  sortPoints

▸ **sortPoints**(): *this*

*Defined in [CoordinateGraph.ts:21](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L21)*

**Returns:** *this*


<a name="classesinteractivetrackviewmd"></a>

[scrollable-graphs](#readmemd) › [Globals](#globalsmd) › [InteractiveTrackView](#classesinteractivetrackviewmd)

## Class: InteractiveTrackView

### Hierarchy

* [TrackView](#classestrackviewmd)

  ↳ **InteractiveTrackView**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [audiobuffer](#audiobuffer)
* [audioctx](#audioctx)
* [canvas](#canvas)
* [ctx](#ctx)
* [cursorInterval](#cursorinterval)
* [cursorVisible](#cursorvisible)
* [graphs](#graphs)
* [lockedToPlayhead](#lockedtoplayhead)
* [playheadOffset](#playheadoffset)
* [playingSource](#playingsource)
* [t0](#t0)
* [t1](#t1)
* [tMax](#tmax)
* [tMin](#tmin)
* [tSpanMin](#tspanmin)

#### Accessors

* [pixelsPerSecond](#pixelspersecond)
* [tPlayhead](#tplayhead)
* [tSpan](#tspan)

#### Methods

* [addGraph](#addgraph)
* [draw](#draw)
* [enforceLimits](#enforcelimits)
* [play](#play)
* [scroll](#scroll)
* [stop](#stop)
* [tAtX](#tatx)
* [xAtT](#xatt)
* [zoom](#zoom)

### Constructors

####  constructor

\+ **new InteractiveTrackView**(`canvas`: HTMLCanvasElement): *[InteractiveTrackView](#classesinteractivetrackviewmd)*

*Overrides [TrackView](#classestrackviewmd).[constructor](#constructor)*

*Defined in [InteractiveTrackView.ts:4](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/InteractiveTrackView.ts#L4)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`canvas` | HTMLCanvasElement | document.createElement('canvas') |

**Returns:** *[InteractiveTrackView](#classesinteractivetrackviewmd)*

### Properties

####  audiobuffer

• **audiobuffer**: *AudioBuffer*

*Inherited from [TrackView](#classestrackviewmd).[audiobuffer](#audiobuffer)*

*Defined in [TrackView.ts:49](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L49)*

The audio sample under analysis

___

####  audioctx

• **audioctx**: *AudioContext*

*Inherited from [TrackView](#classestrackviewmd).[audioctx](#audioctx)*

*Defined in [TrackView.ts:46](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L46)*

Web audio context for audio playback.

___

####  canvas

• **canvas**: *HTMLCanvasElement*

*Overrides [TrackView](#classestrackviewmd).[canvas](#canvas)*

*Defined in [InteractiveTrackView.ts:4](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/InteractiveTrackView.ts#L4)*

___

####  ctx

• **ctx**: *CanvasRenderingContext2D | null*

*Inherited from [TrackView](#classestrackviewmd).[ctx](#ctx)*

*Defined in [TrackView.ts:16](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L16)*

Canvas rendering context

___

####  cursorInterval

• **cursorInterval**: *number*

*Inherited from [TrackView](#classestrackviewmd).[cursorInterval](#cursorinterval)*

*Defined in [TrackView.ts:52](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L52)*

Timer reference for updating playhead position.

___

####  cursorVisible

• **cursorVisible**: *boolean*

*Inherited from [TrackView](#classestrackviewmd).[cursorVisible](#cursorvisible)*

*Defined in [TrackView.ts:43](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L43)*

Should the playhead be visible?

___

####  graphs

• **graphs**: *[Graph](#graph)[]*

*Inherited from [TrackView](#classestrackviewmd).[graphs](#graphs)*

*Defined in [TrackView.ts:40](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L40)*

The graphs objects that belong to the track view

___

####  lockedToPlayhead

• **lockedToPlayhead**: *boolean*

*Inherited from [TrackView](#classestrackviewmd).[lockedToPlayhead](#lockedtoplayhead)*

*Defined in [TrackView.ts:19](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L19)*

If true, the graph will automatically scroll with the playhead when audio is playing.

___

####  playheadOffset

• **playheadOffset**: *number | null*

*Inherited from [TrackView](#classestrackviewmd).[playheadOffset](#playheadoffset)*

*Defined in [TrackView.ts:22](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L22)*

___

####  playingSource

• **playingSource**: *AudioBufferSourceNode*

*Inherited from [TrackView](#classestrackviewmd).[playingSource](#playingsource)*

*Defined in [TrackView.ts:55](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L55)*

The currently playing buffer source node (if audio is playing)

___

####  t0

• **t0**: *number*

*Inherited from [TrackView](#classestrackviewmd).[t0](#t0)*

*Defined in [TrackView.ts:25](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L25)*

Time at left edge of the graph

___

####  t1

• **t1**: *number*

*Inherited from [TrackView](#classestrackviewmd).[t1](#t1)*

*Defined in [TrackView.ts:28](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L28)*

Time at right edge of the graph

___

####  tMax

• **tMax**: *number | null*

*Inherited from [TrackView](#classestrackviewmd).[tMax](#tmax)*

*Defined in [TrackView.ts:34](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L34)*

The maximum time that can be shown on the graph. I.e. when audio ends.

___

####  tMin

• **tMin**: *number | null*

*Inherited from [TrackView](#classestrackviewmd).[tMin](#tmin)*

*Defined in [TrackView.ts:31](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L31)*

The minimum time that can be shown on the graph.

___

####  tSpanMin

• **tSpanMin**: *number*

*Inherited from [TrackView](#classestrackviewmd).[tSpanMin](#tspanmin)*

*Defined in [TrackView.ts:37](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L37)*

Minimum duration that can be displayed at any time. This effectively sets a hard limit on zoom

### Accessors

####  pixelsPerSecond

• **get pixelsPerSecond**(): *number*

*Inherited from [TrackView](#classestrackviewmd).[pixelsPerSecond](#pixelspersecond)*

*Defined in [TrackView.ts:125](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L125)*

**Returns:** *number*

___

####  tPlayhead

• **get tPlayhead**(): *null | number*

*Inherited from [TrackView](#classestrackviewmd).[tPlayhead](#tplayhead)*

*Defined in [TrackView.ts:133](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L133)*

**Returns:** *null | number*

___

####  tSpan

• **get tSpan**(): *number*

*Inherited from [TrackView](#classestrackviewmd).[tSpan](#tspan)*

*Defined in [TrackView.ts:129](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L129)*

**Returns:** *number*

### Methods

####  addGraph

▸ **addGraph**(...`graphs`: [Graph](#graph)[]): *void*

*Inherited from [TrackView](#classestrackviewmd).[addGraph](#addgraph)*

*Defined in [TrackView.ts:74](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`...graphs` | [Graph](#graph)[] |

**Returns:** *void*

___

####  draw

▸ **draw**(): *void*

*Inherited from [TrackView](#classestrackviewmd).[draw](#draw)*

*Defined in [TrackView.ts:79](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L79)*

**Returns:** *void*

___

####  enforceLimits

▸ **enforceLimits**(): *void*

*Inherited from [TrackView](#classestrackviewmd).[enforceLimits](#enforcelimits)*

*Defined in [TrackView.ts:204](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L204)*

**Returns:** *void*

___

####  play

▸ **play**(`offset`: number): *undefined | null*

*Inherited from [TrackView](#classestrackviewmd).[play](#play)*

*Defined in [TrackView.ts:140](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L140)*

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *undefined | null*

___

####  scroll

▸ **scroll**(`amount`: number): *void*

*Inherited from [TrackView](#classestrackviewmd).[scroll](#scroll)*

*Defined in [TrackView.ts:181](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L181)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |

**Returns:** *void*

___

####  stop

▸ **stop**(): *void*

*Inherited from [TrackView](#classestrackviewmd).[stop](#stop)*

*Defined in [TrackView.ts:173](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L173)*

**Returns:** *void*

___

####  tAtX

▸ **tAtX**(`x`: number): *number*

*Inherited from [TrackView](#classestrackviewmd).[tAtX](#tatx)*

*Defined in [TrackView.ts:117](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *number*

___

####  xAtT

▸ **xAtT**(`t`: number): *number*

*Inherited from [TrackView](#classestrackviewmd).[xAtT](#xatt)*

*Defined in [TrackView.ts:121](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *number*

___

####  zoom

▸ **zoom**(`sf`: number, `o`: number): *void*

*Inherited from [TrackView](#classestrackviewmd).[zoom](#zoom)*

*Defined in [TrackView.ts:191](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L191)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`sf` | number | 1.5 |
`o` | number | (this.t0+this.t1)/2 |

**Returns:** *void*


<a name="classesmarkergraphmd"></a>

[scrollable-graphs](#readmemd) › [Globals](#globalsmd) › [MarkerGraph](#classesmarkergraphmd)

## Class: MarkerGraph

Graph for representing a series of instantanteous time points.

### Hierarchy

* **MarkerGraph**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [color](#color)
* [height](#height)
* [points](#points)
* [y](#y)

#### Methods

* [draw](#draw)

### Constructors

####  constructor

\+ **new MarkerGraph**(`points`: number[]): *[MarkerGraph](#classesmarkergraphmd)*

*Defined in [MarkerGraph.ts:10](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/MarkerGraph.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`points` | number[] |

**Returns:** *[MarkerGraph](#classesmarkergraphmd)*

### Properties

####  color

• **color**: *string*

*Defined in [MarkerGraph.ts:10](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/MarkerGraph.ts#L10)*

___

####  height

• **height**: *number*

*Defined in [MarkerGraph.ts:9](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/MarkerGraph.ts#L9)*

___

####  points

• **points**: *number[]*

*Defined in [MarkerGraph.ts:7](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/MarkerGraph.ts#L7)*

___

####  y

• **y**: *number*

*Defined in [MarkerGraph.ts:8](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/MarkerGraph.ts#L8)*

### Methods

####  draw

▸ **draw**(`display`: [TrackView](#classestrackviewmd)): *this*

*Defined in [MarkerGraph.ts:18](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/MarkerGraph.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`display` | [TrackView](#classestrackviewmd) |

**Returns:** *this*


<a name="classespolygongraphmd"></a>

[scrollable-graphs](#readmemd) › [Globals](#globalsmd) › [PolygonGraph](#classespolygongraphmd)

## Class: PolygonGraph

### Hierarchy

* **PolygonGraph**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [_height](#_height)
* [heightConstant](#heightconstant)
* [largerScaleGraph](#largerscalegraph)
* [polygons](#polygons)
* [scale](#scale)
* [useNormalisedColors](#usenormalisedcolors)
* [y](#y)

#### Accessors

* [density](#density)
* [height](#height)
* [t0](#t0)
* [t1](#t1)

#### Methods

* [addPolygon](#addpolygon)
* [draw](#draw)
* [normaliseColors](#normalisecolors)
* [normaliseScale](#normalisescale)

### Constructors

####  constructor

\+ **new PolygonGraph**(`polygons`: [Polygon](#interfacespolygonmd)[]): *[PolygonGraph](#classespolygongraphmd)*

*Defined in [PolygonGraph.ts:31](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L31)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`polygons` | [Polygon](#interfacespolygonmd)[] | [] |

**Returns:** *[PolygonGraph](#classespolygongraphmd)*

### Properties

####  _height

• **_height**: *number*

*Defined in [PolygonGraph.ts:29](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L29)*

___

####  heightConstant

• **heightConstant**: *number*

*Defined in [PolygonGraph.ts:30](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L30)*

___

####  largerScaleGraph

• **largerScaleGraph**: *[PolygonGraph](#classespolygongraphmd) | null*

*Defined in [PolygonGraph.ts:28](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L28)*

___

####  polygons

• **polygons**: *[Polygon](#interfacespolygonmd)[]*

*Defined in [PolygonGraph.ts:25](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L25)*

___

####  scale

• **scale**: *function*

*Defined in [PolygonGraph.ts:26](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L26)*

##### Type declaration:

▸ (`y`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |

___

####  useNormalisedColors

• **useNormalisedColors**: *true | false | undefined*

*Defined in [PolygonGraph.ts:31](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L31)*

___

####  y

• **y**: *number*

*Defined in [PolygonGraph.ts:27](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L27)*

### Accessors

####  density

• **get density**(): *number*

*Defined in [PolygonGraph.ts:165](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L165)*

Average polygons per second of audio

**Returns:** *number*

___

####  height

• **get height**(): *number*

*Defined in [PolygonGraph.ts:150](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L150)*

**Returns:** *number*

• **set height**(`h`: number): *void*

*Defined in [PolygonGraph.ts:146](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L146)*

**Parameters:**

Name | Type |
------ | ------ |
`h` | number |

**Returns:** *void*

___

####  t0

• **get t0**(): *number*

*Defined in [PolygonGraph.ts:155](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L155)*

Start time of first polygon

**Returns:** *number*

___

####  t1

• **get t1**(): *number*

*Defined in [PolygonGraph.ts:160](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L160)*

End time of last polygon

**Returns:** *number*

### Methods

####  addPolygon

▸ **addPolygon**(`polygon`: [Polygon](#interfacespolygonmd)): *void*

*Defined in [PolygonGraph.ts:88](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`polygon` | [Polygon](#interfacespolygonmd) |

**Returns:** *void*

___

####  draw

▸ **draw**(`display`: [TrackView](#classestrackviewmd)): *[PolygonGraph](#classespolygongraphmd)*

*Defined in [PolygonGraph.ts:43](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L43)*

Draw the graph on the canvas of the given track view.

**Parameters:**

Name | Type |
------ | ------ |
`display` | [TrackView](#classestrackviewmd) |

**Returns:** *[PolygonGraph](#classespolygongraphmd)*

___

####  normaliseColors

▸ **normaliseColors**(`transform`: function): *void*

*Defined in [PolygonGraph.ts:117](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L117)*

**Parameters:**

▪`Default value`  **transform**: *function*= defaultColorTransform

▸ (`color`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`color` | string |

**Returns:** *void*

___

####  normaliseScale

▸ **normaliseScale**(`MIN`: number, `MAX`: number): *function*

*Defined in [PolygonGraph.ts:93](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L93)*

Normalise the polygon dimensions using a linear scale. Replaces the `scale` property on the graph.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`MIN` | number | 0 |
`MAX` | number | 1 |

**Returns:** *function*

▸ (`y`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |


<a name="classessignalgraphmd"></a>

[scrollable-graphs](#readmemd) › [Globals](#globalsmd) › [SignalGraph](#classessignalgraphmd)

## Class: SignalGraph

A graph representing a time series at a fixed interval.
Automatically produces larger scale graphs using RMS.

### Hierarchy

* **SignalGraph**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [_rmsGraph](#_rmsgraph)
* [color](#color)
* [data](#data)
* [interval](#interval)
* [parentGraph](#parentgraph)
* [scale](#scale)
* [style](#style)

#### Accessors

* [rmsGraph](#rmsgraph)

#### Methods

* [draw](#draw)
* [normaliseScale](#normalisescale)

### Constructors

####  constructor

\+ **new SignalGraph**(`data`: number[] | Float32Array, `interval`: number): *[SignalGraph](#classessignalgraphmd)*

*Defined in [SignalGraph.ts:14](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L14)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | number[] &#124; Float32Array | - |
`interval` | number | 1 |

**Returns:** *[SignalGraph](#classessignalgraphmd)*

### Properties

####  _rmsGraph

• **_rmsGraph**: *[SignalGraph](#classessignalgraphmd) | null*

*Defined in [SignalGraph.ts:13](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L13)*

___

####  color

• **color**: *string*

*Defined in [SignalGraph.ts:11](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L11)*

___

####  data

• **data**: *number[] | Float32Array*

*Defined in [SignalGraph.ts:8](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L8)*

___

####  interval

• **interval**: *number*

*Defined in [SignalGraph.ts:9](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L9)*

___

####  parentGraph

• **parentGraph**: *this*

*Defined in [SignalGraph.ts:14](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L14)*

___

####  scale

• **scale**: *function*

*Defined in [SignalGraph.ts:10](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L10)*

##### Type declaration:

▸ (`y`: number): *any*

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |

___

####  style

• **style**: *"line" | "reflectAndFill"*

*Defined in [SignalGraph.ts:12](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L12)*

### Accessors

####  rmsGraph

• **get rmsGraph**(): *[SignalGraph](#classessignalgraphmd)‹›*

*Defined in [SignalGraph.ts:70](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L70)*

**Returns:** *[SignalGraph](#classessignalgraphmd)‹›*

### Methods

####  draw

▸ **draw**(`display`: [TrackView](#classestrackviewmd)): *this | [SignalGraph](#classessignalgraphmd)*

*Defined in [SignalGraph.ts:24](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`display` | [TrackView](#classestrackviewmd) |

**Returns:** *this | [SignalGraph](#classessignalgraphmd)*

___

####  normaliseScale

▸ **normaliseScale**(`MIN`: number, `MAX`: number): *function*

*Defined in [SignalGraph.ts:97](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L97)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`MIN` | number | 0 |
`MAX` | number | 1 |

**Returns:** *function*

▸ (`y`: number): *any*

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |


<a name="classestrackviewmd"></a>

[scrollable-graphs](#readmemd) › [Globals](#globalsmd) › [TrackView](#classestrackviewmd)

## Class: TrackView

Class for rendering multiple graphs on a canvas element.
Allowing the user to zoom and pan with the mouse wheel.

### Hierarchy

* **TrackView**

  ↳ [InteractiveTrackView](#classesinteractivetrackviewmd)

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [audiobuffer](#audiobuffer)
* [audioctx](#audioctx)
* [canvas](#canvas)
* [ctx](#ctx)
* [cursorInterval](#cursorinterval)
* [cursorVisible](#cursorvisible)
* [graphs](#graphs)
* [lockedToPlayhead](#lockedtoplayhead)
* [playheadOffset](#playheadoffset)
* [playingSource](#playingsource)
* [t0](#t0)
* [t1](#t1)
* [tMax](#tmax)
* [tMin](#tmin)
* [tSpanMin](#tspanmin)

#### Accessors

* [pixelsPerSecond](#pixelspersecond)
* [tPlayhead](#tplayhead)
* [tSpan](#tspan)

#### Methods

* [addGraph](#addgraph)
* [draw](#draw)
* [enforceLimits](#enforcelimits)
* [play](#play)
* [scroll](#scroll)
* [stop](#stop)
* [tAtX](#tatx)
* [xAtT](#xatt)
* [zoom](#zoom)

### Constructors

####  constructor

\+ **new TrackView**(`canvas`: HTMLCanvasElement): *[TrackView](#classestrackviewmd)*

*Defined in [TrackView.ts:55](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L55)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`canvas` | HTMLCanvasElement | document.createElement('canvas') |

**Returns:** *[TrackView](#classestrackviewmd)*

### Properties

####  audiobuffer

• **audiobuffer**: *AudioBuffer*

*Defined in [TrackView.ts:49](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L49)*

The audio sample under analysis

___

####  audioctx

• **audioctx**: *AudioContext*

*Defined in [TrackView.ts:46](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L46)*

Web audio context for audio playback.

___

####  canvas

• **canvas**: *HTMLCanvasElement*

*Defined in [TrackView.ts:13](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L13)*

Reference to the DOM canvas element where the graphs will be drawn.

___

####  ctx

• **ctx**: *CanvasRenderingContext2D | null*

*Defined in [TrackView.ts:16](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L16)*

Canvas rendering context

___

####  cursorInterval

• **cursorInterval**: *number*

*Defined in [TrackView.ts:52](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L52)*

Timer reference for updating playhead position.

___

####  cursorVisible

• **cursorVisible**: *boolean*

*Defined in [TrackView.ts:43](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L43)*

Should the playhead be visible?

___

####  graphs

• **graphs**: *[Graph](#graph)[]*

*Defined in [TrackView.ts:40](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L40)*

The graphs objects that belong to the track view

___

####  lockedToPlayhead

• **lockedToPlayhead**: *boolean*

*Defined in [TrackView.ts:19](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L19)*

If true, the graph will automatically scroll with the playhead when audio is playing.

___

####  playheadOffset

• **playheadOffset**: *number | null*

*Defined in [TrackView.ts:22](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L22)*

___

####  playingSource

• **playingSource**: *AudioBufferSourceNode*

*Defined in [TrackView.ts:55](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L55)*

The currently playing buffer source node (if audio is playing)

___

####  t0

• **t0**: *number*

*Defined in [TrackView.ts:25](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L25)*

Time at left edge of the graph

___

####  t1

• **t1**: *number*

*Defined in [TrackView.ts:28](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L28)*

Time at right edge of the graph

___

####  tMax

• **tMax**: *number | null*

*Defined in [TrackView.ts:34](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L34)*

The maximum time that can be shown on the graph. I.e. when audio ends.

___

####  tMin

• **tMin**: *number | null*

*Defined in [TrackView.ts:31](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L31)*

The minimum time that can be shown on the graph.

___

####  tSpanMin

• **tSpanMin**: *number*

*Defined in [TrackView.ts:37](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L37)*

Minimum duration that can be displayed at any time. This effectively sets a hard limit on zoom

### Accessors

####  pixelsPerSecond

• **get pixelsPerSecond**(): *number*

*Defined in [TrackView.ts:125](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L125)*

**Returns:** *number*

___

####  tPlayhead

• **get tPlayhead**(): *null | number*

*Defined in [TrackView.ts:133](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L133)*

**Returns:** *null | number*

___

####  tSpan

• **get tSpan**(): *number*

*Defined in [TrackView.ts:129](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L129)*

**Returns:** *number*

### Methods

####  addGraph

▸ **addGraph**(...`graphs`: [Graph](#graph)[]): *void*

*Defined in [TrackView.ts:74](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`...graphs` | [Graph](#graph)[] |

**Returns:** *void*

___

####  draw

▸ **draw**(): *void*

*Defined in [TrackView.ts:79](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L79)*

**Returns:** *void*

___

####  enforceLimits

▸ **enforceLimits**(): *void*

*Defined in [TrackView.ts:204](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L204)*

**Returns:** *void*

___

####  play

▸ **play**(`offset`: number): *undefined | null*

*Defined in [TrackView.ts:140](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L140)*

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *undefined | null*

___

####  scroll

▸ **scroll**(`amount`: number): *void*

*Defined in [TrackView.ts:181](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L181)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |

**Returns:** *void*

___

####  stop

▸ **stop**(): *void*

*Defined in [TrackView.ts:173](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L173)*

**Returns:** *void*

___

####  tAtX

▸ **tAtX**(`x`: number): *number*

*Defined in [TrackView.ts:117](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *number*

___

####  xAtT

▸ **xAtT**(`t`: number): *number*

*Defined in [TrackView.ts:121](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *number*

___

####  zoom

▸ **zoom**(`sf`: number, `o`: number): *void*

*Defined in [TrackView.ts:191](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L191)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`sf` | number | 1.5 |
`o` | number | (this.t0+this.t1)/2 |

**Returns:** *void*


<a name="globalsmd"></a>

[scrollable-graphs](#readmemd) › [Globals](#globalsmd)

# scrollable-graphs

## Index

### Classes

* [CoordinateGraph](#classescoordinategraphmd)
* [InteractiveTrackView](#classesinteractivetrackviewmd)
* [MarkerGraph](#classesmarkergraphmd)
* [PolygonGraph](#classespolygongraphmd)
* [SignalGraph](#classessignalgraphmd)
* [TrackView](#classestrackviewmd)

### Interfaces

* [Polygon](#interfacespolygonmd)

### Type aliases

* [Coordinate](#coordinate)
* [Graph](#graph)

### Functions

* [defaultColorTransform](#const-defaultcolortransform)
* [hslToRgb](#hsltorgb)
* [rgbToHsl](#rgbtohsl)
* [sq](#const-sq)

## Type aliases

###  Coordinate

Ƭ **Coordinate**: *object*

*Defined in [CoordinateGraph.ts:3](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/CoordinateGraph.ts#L3)*

#### Type declaration:

* **x**: *number*

* **y**: *number*

___

###  Graph

Ƭ **Graph**: *[Graph](#graph)*

*Defined in [TrackView.ts:6](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/TrackView.ts#L6)*

## Functions

### `Const` defaultColorTransform

▸ **defaultColorTransform**(`color`: string): *string*

*Defined in [PolygonGraph.ts:170](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`color` | string |

**Returns:** *string*

___

###  hslToRgb

▸ **hslToRgb**(`h`: number, `s`: number, `l`: number): *number[]*

*Defined in [colorTransform.ts:12](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/colorTransform.ts#L12)*

Converts an HSL color value to RGB. Conversion formula
adapted from http://en.wikipedia.org/wiki/HSL_color_space.
Assumes h, s, and l are contained in the set [0, 1] and
returns r, g, and b in the set [0, 255].

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`h` | number | The hue |
`s` | number | The saturation |
`l` | number | The lightness |

**Returns:** *number[]*

The RGB representation

___

###  rgbToHsl

▸ **rgbToHsl**(`r`: number, `g`: number, `b`: number): *number[]*

*Defined in [colorTransform.ts:48](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/colorTransform.ts#L48)*

Converts an RGB color value to HSL. Conversion formula
adapted from http://en.wikipedia.org/wiki/HSL_color_space.
Assumes r, g, and b are contained in the set [0, 255] and
returns h, s, and l in the set [0, 1].

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`r` | number | The red color value |
`g` | number | The green color value |
`b` | number | The blue color value |

**Returns:** *number[]*

The HSL representation

___

### `Const` sq

▸ **sq**(`x`: number): *number*

*Defined in [SignalGraph.ts:3](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/SignalGraph.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *number*

# Interfaces


<a name="interfacespolygonmd"></a>

[scrollable-graphs](#readmemd) › [Globals](#globalsmd) › [Polygon](#interfacespolygonmd)

## Interface: Polygon

### Hierarchy

* **Polygon**

### Index

#### Properties

* [color](#color)
* [h0](#h0)
* [h1](#h1)
* [normalisedColor](#optional-normalisedcolor)
* [t0](#t0)
* [t1](#t1)

### Properties

####  color

• **color**: *string*

*Defined in [PolygonGraph.ts:20](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L20)*

Colour of the polygon.

___

####  h0

• **h0**: *number*

*Defined in [PolygonGraph.ts:14](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L14)*

Height at the start of the polygon

___

####  h1

• **h1**: *number*

*Defined in [PolygonGraph.ts:17](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L17)*

Height at the end of the polygon.

___

#### `Optional` normalisedColor

• **normalisedColor**? : *undefined | string*

*Defined in [PolygonGraph.ts:21](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L21)*

___

####  t0

• **t0**: *number*

*Defined in [PolygonGraph.ts:8](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L8)*

Start time in seconds

___

####  t1

• **t1**: *number*

*Defined in [PolygonGraph.ts:11](https://github.com/joelyjoel/scrollable-graphs/blob/75a0c7f/src/PolygonGraph.ts#L11)*

End time in seconds
