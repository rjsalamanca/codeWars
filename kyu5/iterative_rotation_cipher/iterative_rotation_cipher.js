const IterativeRotationCipher = {};

IterativeRotationCipher.encode = function (n, str) {
    //your code goes here. you can do it!
};

IterativeRotationCipher.decode = function (str) {
    //your code goes here. you can do it!
};

const encodeExamples = [
    [10, `If you wish to make an apple pie from scratch, you must first invent the universe.`],
    [14, `True evil is a mundane bureaucracy.`],
    [22, `There is nothing more atrociously cruel than an adored child.`],
    [36, `As I was going up the stair
I met a man who wasn't there!
He wasn't there again today,
Oh how I wish he'd go away!`],
    [29, `I avoid that bleak first hour of the working day during which my still sluggish senses and body make every chore a penance.
I find that in arriving later, the work which I do perform is of a much higher quality.`]];
const decodeExamples = [
    `10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet`,
    `14 daue ilev is a munbune Traurecracy.`,
    `22 tareu oo iucnaTr dled oldthser.hg hiarm nhcn se rliyet oincoa`,
    `36 ws h weA dgIaa ug owh n!asrit git 
 msm phw teaI'e tanantwhe reos
s ther! aHeae 'gwadin
t haw n htoo ,I'i sy aohOy`,
    `29 a r.lht niou gwryd aoshg gIsi mk lei adwhfci isd seensn rdohy mo kleie oltbyhes a
aneu p.n rndr tehh irnne yifav t eo,raclhtc frpw IIti im gwkaidhv aicufh ima doea eruhi y io qshhcoa kr ef l btah gtrrse otnvugrt`];

encodeExamples.forEach((e, i) => Test.assertEquals(IterativeRotationCipher.encode(...e), decodeExamples[i]));
decodeExamples.forEach((e, i) => Test.assertEquals(IterativeRotationCipher.decode(e), encodeExamples[i][1]));