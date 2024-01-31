
const dscrURL = "https://2023.igem.wiki/nthu-taiwan/hometext"

const gameState = {
	debug: false,
	score: 0,
	speed: 300,
	speedUp: 1.5,
	jump: 500,
	numScene: 0,
	level: 'Finish',
	soundsOn: true,
	timerRec: 0
}

class Loading extends Phaser.Scene {
	constructor() {
		super('Loading')
	}

	preload() {
		this.load.spritesheet('panda-walk', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/walking.png', { frameWidth: 142, frameHeight: 213 });
		this.load.spritesheet('panda-roll', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/rolling.png', { frameWidth: 195, frameHeight: 213 })
		this.load.image('button', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/button.png')
		this.load.spritesheet('exit', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/cave-exit.png', { frameWidth: 60, frameHeight: 70 });
		this.load.image('up-arrow', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/up-arrow-key.png')
		this.load.image('down-arrow', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/down-arrow-key.png')
		this.load.image('right-arrow', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/right-arrow-key.png')
		this.load.image('left-arrow', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/left-arrow-key.png')
		this.load.image('space', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/space-key.png')
		this.load.image('shift', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/shift-key.png')
		this.load.image('pause', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/pause.png')

		// Desctiption
		this.load.image('background_description', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/map.jpg')

		// Welcome
		this.load.image('welcome_page', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/introduction.jpg')
		
		// Ending
		this.load.image('ending_page', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/final-page.png')

		// Level 1
		this.load.image('background1', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/background1.png');
		this.load.image('background', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/background.png')
		this.load.image('platform1_1', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/platform1-1.png');
		this.load.image('platform1_2', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/platform1-2.png');
		this.load.image('platform1_3', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/platform1-3.png');
		this.load.image('platform1_4', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/platform1-4.png');
		this.load.image('A', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/a.png');
		this.load.image('U', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/u.png');
		this.load.image('C', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/c.png');
		this.load.image('G', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/g.png');
		// this.load.audio('music1', 'assets/Sounds/level1-background-music.mp3');

		// Level 2
		this.load.image('background2', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/background2.png');
		for (let i = 1; i <= 9; i++) {
			this.load.image(`platform2_${i}`, `https://static.igem.wiki/teams/4636/wiki/wiki-game/platform2-${i}.png`);
		}

		this.load.image('flask', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/flask.png');
		this.load.image('circRNA', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/circrna.png');
		this.load.image('poster', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/poster.png');
		this.load.image('magnifier', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/magnifier.png');
		// this.load.audio('music2', 'assets/Sounds/sinnesloschen-beam-117362.mp3');

		// Level 3
		this.load.image('background3', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/background3.png');
		for (let i = 1; i <= 15; i++) {
			this.load.image(`platform3_${i}`, `https://static.igem.wiki/teams/4636/wiki/wiki-game/platform3-${i}.png`);
		}
		// this.load.spritesheet('lava', 'assets/Level3/lava.png', { frameWidth: 1970, frameHeight: 146 });
		this.load.spritesheet('lava1', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/lava1.png', { frameWidth: 1960, frameHeight: 60 });
		this.load.spritesheet('lava2', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/lava2.png', { frameWidth: 306, frameHeight: 50 });
		this.load.image('grass', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/grass.png');
		this.load.image('door3', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/door3.png');
		this.load.image('dna', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/dna.png');
		this.load.image('gold', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/gold.png');
		this.load.image('rna', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/rna.png');

		this.load.image('AuNPs', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/aunps.png');
		this.load.image('eppendorf', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/eppendorf.png');
		this.load.image('RCA', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/rca.png');
		this.load.image('idk', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/idk.png');
		this.load.image('PCRD', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/pcrd.png');
		this.load.image('stick', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/stick.png')
		// this.load.audio('music3', 'assets/Sounds/level3-background-music.mp3');


		// Level 4
		this.load.image('background4', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/background4.png');
		this.load.image('platform4_1', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/platform4-1.png');
		this.load.image('platform4_2', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/platform4-2.png');
		this.load.image('platform4_3', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/platform4-3.png');
		this.load.image('platform4_4', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/platform4-4.png');
		this.load.image('platform4_5', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/platform4-5.png');
		this.load.image('platform4_6', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/platform4-6.png');
		this.load.image('platform4_7', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/platform4-7.png');
		this.load.image('platform4_8', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/platform4-8.png');
		this.load.image('platform4_9', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/platform4-9.png');
		this.load.image('warning1', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/warning1.png')
		this.load.image('warning2', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/warning2.png')

		this.load.image('convenience', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/convenience.png');
		this.load.image('money', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/money.png');
		this.load.image('noninvasive', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/noninvasive.png');
		this.load.image('time', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/time.png');
		// this.load.audio('music4', 'assets/Sounds/level4-background-music.mp3');

		// this.load.audio('NTHUSong', 'assets/Sounds/NTHUIGEM.m4a');
		// this.load.audio('startmusic', 'assets/Sounds/start-background-music.mp3');
		// this.load.audio('getitem', 'assets/Sounds/message-incoming.mp3');
		// this.load.audio('nextlevel', 'assets/Sounds/new-level.mp3');
		// this.load.audio('lost', 'assets/Sounds/negative_beeps.mp3');
		// this.load.audio('endmusic', 'assets/Sounds/our-special-place-154505.mp3');

		this.load.image('demo1', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/demo3.jpg')
		this.load.image('demo2', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/demo4.png')
		this.load.image('demo3', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/demo3.jpg')
		this.load.image('demo4', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/demo4.png')
		this.load.image('heart', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/heart.png')

		this.load.image('sidebar', 'https://static.igem.wiki/teams/4636/wiki/wiki-game/sidebar.png')

		// this.load.audio('footstepsound', 'assets/Sounds/footstep.mp3')
		// this.load.audio('jumpsound', 'assets/Sounds/jump.mp3')
	}
  
	create() {
		this.add.text(110, 150, 'Loading~', LARGE_TXT)
		this.scene.stop('Loading')
		this.scene.start('StartUp')
	}
}

BUTTON_TXT = {fill: '#000000', fontSize: '24px', align: 'center', fontFamily: 'Comic Sans MS, "Comic Sans", cursive'}
MEDIUM_TXT = {fill: '#000000', fontSize: '36px', align: 'center', fontFamily: 'Comic Sans MS, "Comic Sans", cursive'}
LARGE_TXT = {fill: '#000000', fontSize: '50px', align: 'center', fontFamily: 'Comic Sans MS, "Comic Sans", cursive'}
SMALL_TXT = {fill: '#000000', fontSize: '24px', fontFamily: 'Comic Sans MS, "Comic Sans", cursive'}

const infoTxt = [
	"In Taiwan, there was once a panda named NTHU Panda who had a wonderful\n"
	+ "family. Sharing different flavors of bamboo with his dad was always\n"
	+ "his favorite thing to do, and laughter filled their home, creating\n"
	+ "immense happiness. However, tragedy struck when his dad started\n"
	+ "experiencing frequent stomach pains and rapidly lost a significant\n"
	+ "amount of weight in a short span of time. After a diagnosis, it was\n"
	+ "revealed that his dad, due to poor lifestyle habits, was in the\n"
	+ "advanced stages of colorectal cancer. Within a few months, his dad\n"
	+ "disappeared from his life due to this illness. Since the day his dad\n"
	+ "left, NTHU Panda gradually lost hope in life, and sorrow overwhelmed\n"
	+ "him to the point of breathlessness.",
	"On a night when he cried himself to sleep from sheer exhaustion, he\n"
	+ "unexpectedly fell into a dream world called \"iGEM world.\"\n\n"
	+ "In this world, there was a village similarly plagued by colon cancer.\n"
	+ "Due to the lack of early detection methods for this disease, more\n"
	+ "and more people succumbed to its severity, losing their lives to the\n"
	+ "illness.",
	"However, in this world, a legend had it that a mysterious individual\n"
	+ "had successfully created an perfect tool for early detection of colon\n"
	+ "cancer, known as NanoCircDx. Yet, for reasons unknown, it vanished\n"
	+ "later on. Some said it was traded across different spacetimes, while\n"
	+ "others believed it was hidden in a specific location within the vast\n"
	+ "ocean. What was certain, though, was that to find it, one needed to\n"
	+ "found three specific individuals and obtain the required objects from\n"
	+ "them, in order to uncover its whereabouts.",
	"Witnessing numerous people grieving over the loss of loved ones because\n"
	+ "of colorectal cancer, the panda didn't want more people to go through\n"
	+ "the same pain he experienced. He made the decision to step forward,\n"
	+ "determined to find NanoCircDx and open a new chapter for this world."
]

const endingTxt = [
	"When NTHU Panda discovered the mysterious figure was indeed his father,\n"
	+ "emotions surged like a rushing river, indescribable. Tears welled up,\n"
	+ "streaming down his cheeks as he tightly embraced his healthy father,\n"
	+ "feeling warmth and affection.\n\n"
	+ "\"Dad, is it really you?\" NTHU Panda asked, his voice filled with\n"
	+ "astonishment and nostalgia.\n\n"
	+ "His father nodded, handing NanoCircDx to him. With a gentle touch on\n"
	+ "his son's head.",
	"He said, \"My son, I've been silently watching over you. Watching you\n"
	+ "grow into a brave person makes me so proud of you. Though I can't always\n"
	+ "be by your side, I'll be watching over you from the heavens, protecting\n"
	+ "you. So, don't cry anymore. Let me see that smile of yours!\"\n\n"
	+ "NTHU Panda wiped away his tears, smiling in response, \"Thank you, Dad.\n"
	+ "Now I know wherever I am, you'll always be with me. I'll work hard to\n"
	+ "save more people.\"\n\n"
	+ "In the glow of the setting sun, their embrace was heartwarming and\n"
	+ "moving, a moment etched in their hearts.\n\n",
	"NTHU Panda and his father returned to the village, carrying NanoCircDx's\n"
	+ "miraculous power. From then on, colon cancer posed no threat, and the\n"
	+ "shadow it once cast disappeared. The village regained its prosperity,\n"
	+ "brimming with hope.\n\n"
	+ "In the morning, as the alarm clock woke NTHU Panda, he looked around\n"
	+ "the room filled with bamboo memories of his father. No more sorrow or\n"
	+ "despair in his eyes, for he knew his father's love and spirit would\n"
	+ "always be by his side, giving him strength to face life's challenges."
]

const welcomeTxt = [
	"Welcome to NTHU iGEM world.\n"
	+ "In this world, you have to collect\n"
	+ "objects in order and protect yourself\n"
	+ "from any attack. Follow the rules below:\n\n"
	+ "1.	Use keyboard buttons to move and collect materials.\n\n"
	+ "	a.	Press        or         to move backward or forward.\n\n"
	+ "	b.	Press        +              or        +              to speed up.\n\n"
	+ "	c.	Press        or                 to jump upward.\n\n"
	+ "	d.	Press        to jump downward.\n\n",
	"2.	Different level has different types of\n"
	+ "obstacle. Be careful about it!\n\n"
	+ "3.	If you fall off the bottom, you have\n"
	+ "to start over this level again.\n\n"
	+ "4.	When you start the game, a timer will\n"
	+ "be started as well.\n\n"
	+ "5.	After collecting all the objects, you\n"
	+ "need to enter the door to get to the next level.\n\n",
	"6.	At the end of each level, you will be given\n"
	+ "two multiple-choice questions. If you answer the\n"
	+ "question correctly, the total time will be minus\n"
	+ "by 5 seconds per question as the reward.\n\n"
	+ "7.	The final score is calculated based on then\n"
	+ "time you spend to reach the end. The less time\n"
	+ "you take to play, the higher your score will get.\n"
	+ "TRY TO MAKE YOUR OWN RECORD RIGHT NOW!\n"
]

const levelTxt = {
	'Level1': "大腸癌介紹",
	'Level2': "CircRNA",
	'Level3': "我們怎麼進行檢測？",
	'Level4': "我們方法的優勢"
}

const question = {
	'Level1': [
		{
			question: "Question 1: According to the information provided, what is the global ranking of colorectal cancer in terms of\ncancer-related deaths in 2022?",
			answer: "C",
			'A': "A) First",
			'B': "B) Second",
			'C': "C) Third",
			'D': "D) Fourth",
		},
		{
			question: "Question 2: What is one of the significant drawbacks associated with the current screening method of colonoscopy\nfor colorectal cancer, as mentioned in the text?",
			answer: "C",
			'A': "A) Low cost of the procedure",
			'B': "B) Limited availability of trained healthcare professionals",
			'C': "C) Cumbersome and time-consuming preparation",
			'D': "D) Low sensitivity in detecting blood in stool samples",
		}
	],
	'Level2': [
		{
			question: "Question 1: What makes circRNA unique compared to linear RNA?",
			answer: "C",
			'A': "A) Its association with diseases like cancer",
			'B': "B) Its single-stranded structure",
			'C': "C) Its resistance to exonuclease degradation",
			'D': "D) Its diverse regulatory roles",
		},
		{
			question: "Question 2: Why have hsa_circ_0101802 and hsa_circ_0004771 been chosen as potential biomarkers for colorectal\ncancer?",
			answer: "C",
			'A': "A) Because they are the most abundant circRNAs in the blood",
			'B': "B) Because they are easy to detect in laboratory settings",
			'C': "C) Because they have shown strong specificity and sensitivity in clinical studies",
			'D': "D) Because they have a linear RNA structure",
		}
	],
	'Level3': [
		{
			question: "Question 1: What is the key advantage of Recombinase Polymerase Amplification (RPA) over Polymerase Chain\nReaction (PCR) in circRNA amplification?",
			answer: "C",
			'A': "A) RPA generates repeated sequences.",
			'B': "B) RPA requires fluctuating temperature cycles.",
			'C': "C) RPA works at a consistent temperature.",
			'D': "D) RPA is more sensitive to color changes.",
		},
		{
			question: "Question 2: How is the presence of high circRNA levels, indicating colorectal cancer risk, detected in the gold\nnanoparticle-based assay?",
			answer: "D",
			'A': "A) The solution turns blue.",
			'B': "B) Gold nanoparticles aggregate.",
			'C': "C) The cDNA binds with the circRNA.",
			'D': "D) After conducting gold nanoparticle-based assay the solution retains red.",
		}
	],
	'Level4': [
		{
			question: "Question 1: What advantages does NanoCircDx offer over existing methods for colorectal cancer detection?",
			answer: "B",
			'A': "A) Limited accuracy and speed",
			'B': "B) Early identification of the disease",
			'C': "C) Invasive procedure",
			'D': "D) Lab-based screening",
		},
		{
			question: "Question 2: What is the future prospect mentioned in the text regarding circRNA biomarker screening?",
			answer: "A",
			'A': "A) Expanding to diverse diseases",
			'B': "B) Reducing user acceptance",
			'C': "C) Limiting circRNA detection to lab settings",
			'D': "D) Slowing down the screening process",
		}
	],
}

const MAX_TIME = 1000000

class StartUp extends Phaser.Scene {
	constructor() {
		super({ key: 'StartUp' })
	}
  
	create() {
		this.add.image(0, 0, 'background_description').setOrigin(0, 0);
		this.add.text(980, 200, "Panda's Adventure", LARGE_TXT).setOrigin(.5, 0)
		var txtNo = 0
		var txt = this.add.text(980, 300, infoTxt[txtNo], MEDIUM_TXT).setOrigin(.5, 0)

		var butTxt = this.add.text(1300, 900, 'Next', BUTTON_TXT).setOrigin(.5, .5)
		createButton(this, 1300, 850, () => {
			if (txtNo < infoTxt.length - 1) {
				txt.setText(infoTxt[++txtNo])
				if (txtNo == infoTxt.length - 1) butTxt.setText('Start')
			} else {
				this.scene.stop('StartUp')
				// this.music.stop()
				if (gameState.debug) {
					this.scene.start(gameState.level);
				} else {
					this.scene.start('Welcome')
				}
			}			
		})

		this.add.text(1200, 900, 'Back', BUTTON_TXT).setOrigin(.5, .5)
		createButton(this, 1200, 850, () => {
			if (txtNo > 0){ 
				txt.setText(infoTxt[--txtNo])
			}
			if (txtNo < infoTxt.length) {
				butTxt.setText('Next')
			} 
		})
		
		this.add.text(1400, 900, 'Skip', BUTTON_TXT).setOrigin(.5, .5)
		createButton(this, 1400, 850, () => {
			this.scene.stop('StartUp')
			// this.music.stop()
			window.location = dscrURL;
		})

		// this.music = this.sound.add('startmusic', { loop: true, volume: 0.1 })
		// this.music.play();
	}
}

function createButton(parent, x, y, func) {
	var btn = parent.add.image(x, y, 'button').setScale(.03);
	btn.setInteractive();
	btn.on('pointerdown', () => {
		func()
	});
	btn.on('pointerover', () => {
		btn.setTint(0x0f0000, .5)
	});
	btn.on('pointerout', () => {
		btn.clearTint()
	});
	return btn
}

class Welcome extends Phaser.Scene {
	constructor() {
		super({ key: 'Welcome' })
	}
  
	create() {
		this.add.image(0, 0, 'welcome_page').setOrigin(0, 0);

		var img1 = this.add.sprite(820, 640, 'right-arrow').setScale(.1)
		var img2 = this.add.sprite(695, 640, 'left-arrow').setScale(.1)		
		var img3 = this.add.sprite(970, 735, 'right-arrow').setScale(.1)
		var img4 = this.add.sprite(680, 735, 'left-arrow').setScale(.1)
		var img5 = this.add.sprite(815, 735, 'shift').setScale(.1)
		var img6 = this.add.sprite(1105, 735, 'shift').setScale(.1)
		var img7 = this.add.sprite(940, 830, 'space').setScale(.1)
		var img8 = this.add.sprite(765, 830, 'up-arrow').setScale(.1)
		var img9 = this.add.sprite(855, 925, 'down-arrow').setScale(.1)

		var txtNo = 0
		var txt = this.add.text(940, 300, welcomeTxt[txtNo], MEDIUM_TXT).setOrigin(.5, 0)
		var butTxt = this.add.text(1200, 1030, 'Next', BUTTON_TXT).setOrigin(.5, .5)
		createButton(this, 1200, 980, () => {
			if (txtNo == 0) {
				img1.destroy()
				img2.destroy()
				img3.destroy()
				img4.destroy()
				img5.destroy()
				img6.destroy()
				img7.destroy()
				img8.destroy()
				img9.destroy()
			}

			if (txtNo < welcomeTxt.length - 1) {
				txt.setText(welcomeTxt[++txtNo])
				if (txtNo == welcomeTxt.length - 1) butTxt.setText('Start')
			} else {
				this.scene.stop('Welcome')
				// this.music.stop()
				this.scene.start('Level1')
			}
		})

		this.add.text(1100, 1030, 'Back', BUTTON_TXT).setOrigin(.5, .5)
		createButton(this, 1100, 980, () => {
			if (txtNo > 0){ 
				txt.setText(welcomeTxt[--txtNo])
			}
			if (txtNo < welcomeTxt.length) {
				// txt.setText(infoTxt[++txtNo])
				butTxt.setText('Next')
			}
			if (txtNo == 0) {
				img1 = this.add.sprite(820, 640, 'right-arrow').setScale(.1)
				img2 = this.add.sprite(695, 640, 'left-arrow').setScale(.1)		
				img3 = this.add.sprite(970, 735, 'right-arrow').setScale(.1)
				img4 = this.add.sprite(680, 735, 'left-arrow').setScale(.1)
				img5 = this.add.sprite(815, 735, 'shift').setScale(.1)
				img6 = this.add.sprite(1105, 735, 'shift').setScale(.1)
				img7 = this.add.sprite(940, 830, 'space').setScale(.1)
				img8 = this.add.sprite(765, 830, 'up-arrow').setScale(.1)
				img9 = this.add.sprite(855, 925, 'down-arrow').setScale(.1)
			}
		})
		

		this.add.text(1300, 1030, 'Return', BUTTON_TXT).setOrigin(.5, .5)
		createButton(this, 1300, 980, () => {
			this.scene.stop('Welcome')
			// this.music.stop()
			this.scene.start('StartUp')
		})

		// this.music = this.sound.add('startmusic', { loop: true, volume: 0.1 })
		// this.music.play();
	}
}

class Level extends Phaser.Scene {
	itemSet = [];
	platformSet = [
		{ x: 100, y: 880 }, { x: 300, y: 880 }, { x: 500, y: 880 }, { x: 700, y: 880 }, { x: 900, y: 880 }, { x: 1100, y: 880 }, { x: 1300, y: 880 }, { x: 1500, y: 880 }, { x: 1700, y: 880 }, { x: 1900, y: 880 },
	];
	exit = {
		name: 'exit',
		posX: 1800,
		posY: 780,
		scale: 1.5
	};
	entrance = {
		name: 'exit',
		posX: 100,
		posY: 30,
		scale: 1.5
	};
	player = {
		name: 'panda-walk',
		posX: 100,
		posY: 50,
		scale: .5
	};

	// music = null;
	sideBarId = null;
	sideBar = null;

	itemNo = 0
	constructor(key) {
		super(key);
		this.levelKey = key;
		this.level = key[5];
		this.nextLevel = {
			'Level1': 'Level2',
			'Level2': 'Level3',
			'Level3': 'Level4',
			'Level4': 'Ending'
		}
	}

	setPlatforms(platforms) {
		// this.platformSet.forEach(plat => {
		// 	platforms.create(plat.x, plat.y, 'platform');
		// });
		var i = 1;
		this.platformSet.forEach(plat => {
			platforms.create(plat.x, plat.y, `platform${this.level}_${i++}`);
		});
	}

	setAudio() {
		// this.music = this.sound.add(`music${this.level}`, { loop: true, volume: 0.1 })
		// this.music.play();
	}

	setItems() {
		this.itemNo = 0
		this.itemSet.forEach(item => {
			item.sprite = this.physics.add.sprite(item.posX, item.posY, item.name).setScale(item.scale).setAlpha(0);
			item.sprite.body.setAllowGravity(false);

			// Overlap
			this.physics.add.overlap(gameState.player, item.sprite, () => {
				if (item.id == this.itemNo) {
					this.sideBar.openSideBar()
					item.sprite.destroy();
					item.bar.clearTint();
					
					this.createWindow(gameState.numScene++, item.description);
					this.scene.pause(this.levelKey);
					item.done = true;

					// this.sound.play('getitem', { volume: .5 })

					if (this.itemNo == this.itemSet.length - 1){
						gameState.levelClear = true
					} else {
						this.itemSet[++this.itemNo].sprite.setAlpha(1)
					}
				}
			});

			// Tweens
			item.sprite.move = this.tweens.add({
				targets: item.sprite,
				y: item.sprite.y+10,
				ease: 'Linear',
				duration: 1000,
				repeat: -1,
				yoyo: true,
			})
		});

		this.itemSet[0].sprite.setAlpha(1)
	}

	setTimer() {
		if (gameState.resetTimer) {
			gameState.timerRec = 0
			gameState.resetTimer = false
		}

		gameState.timer = this.time.addEvent({ 
			delay: MAX_TIME,
			callback: () => {
				// this.sound.play('lost', { volume: .5 })
				this.restartLevel()
		},
		callbackScope: this})
	}

	setBackgrounds() {
		this.add.image(0, 0, `background${this.level}`).setOrigin(0, 0);
		if (gameState.debug) this.setDemo()
	}

	restartLevel() {
		gameState.timerRec += gameState.timer.getProgress()
		this.scene.restart(this.levelKey)
		this.scene.stop(this.sideBarId)
		// this.music.stop()
	}

	stopLevel() {
		this.scene.stop(this.sideBarId)
		this.scene.stop(this.levelKey)
		// this.music.stop()
	}

	setDemo() {
		this.add.image(0, 0, `demo${this.level}`).setOrigin(0, 0).setScale(1.15);
	}

	create() {
		gameState.active = true;
		gameState.resetTimer = false;
	
		// Set cursors
		gameState.cursors = this.input.keyboard.createCursorKeys();

		this.setBackgrounds();

		this.createSideBar();

		// Create objects
		gameState.exit = this.physics.add.sprite(this.exit.posX, this.exit.posY, this.exit.name).setScale(this.exit.scale);
		gameState.entrance = this.physics.add.sprite(this.entrance.posX, this.entrance.posY, this.entrance.name).setScale(this.entrance.scale);
		
		if (gameState.debug) {
			gameState.player = this.physics.add.sprite(this.exit.posX-100, this.exit.posY-300, this.player.name).setScale(this.player.scale);
		} else {
			gameState.player = this.physics.add.sprite(this.player.posX, this.player.posY, this.player.name).setScale(this.player.scale);
		}

		const platforms = this.physics.add.staticGroup();
		this.setPlatforms(platforms);
		this.setItems();

		// Set timer
		var timerTxt
		var rec = gameState.timerRec*1000
		if (Math.floor(rec%60) < 10) {
			timerTxt = `Time: ${Math.floor(rec/60)}:0${Math.floor(rec%60)}`
		} else {
			timerTxt = `Time: ${Math.floor(rec/60)}:${Math.floor(rec%60)}`
		}
		gameState.timeTxt = this.add.text(50, 60, timerTxt, {fill: '#FFFFFF', fontSize: '40px'})
		gameState.scoreTxt = this.add.text(50, 100, `Score: ${gameState.score}`, {fill: '#FFFFFF', fontSize: '40px'})

		this.setTimer()

		// Collider settings
		this.physics.add.collider(gameState.player, platforms);
		this.physics.add.collider(gameState.exit, platforms);
		this.physics.add.collider(gameState.entrance, platforms);

		// Set world bound
		gameState.player.setCollideWorldBounds(true);

		// Overlaps
		this.physics.add.overlap(gameState.player, gameState.exit, () => {
			if (gameState.levelClear) {
				gameState.levelClear = false;
				gameState.timerRec = 0;
				gameState.resetTimer = true;
				// this.sound.play('nextlevel', { volume: .5 })

				this.calculateScore()
				this.scene.stop(this.sideBarId)
				this.createScoreBoard(gameState.numScene++)
				this.scene.pause(this.levelKey);
				// this.add.text(150, 50, 'You reached the exit!\n  Click to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
				this.cameras.main.fade(800, 0, 0, 0, false, function(camera, progress) {
					if (progress > .9) {
						this.stopLevel()
						this.scene.start(this.nextLevel[this.levelKey]);
					}
				});
				
			} else {

			}
		})

		// Animation
		this.anims.create({
			key: 'idle',
			frames: this.anims.generateFrameNumbers('panda-walk', { start: 6, end: 6 }),
			frameRate: 5,
			repeat: -1
		});

		this.anims.create({
			key: 'jump',
			frames: this.anims.generateFrameNumbers('panda-walk', { start: 4, end: 4 }),
			frameRate: 5,
			repeat: -1
		})
		
		this.anims.create({
			key: 'walk',
			frames: this.anims.generateFrameNumbers('panda-walk', { start: 0, end: 11 }),
			frameRate: 5,
			repeat: -1
		})

		this.anims.create({
			key: 'roll',
			frames: this.anims.generateFrameNumbers('panda-roll', { start: 0, end: 13 }),
			frameRate: 10,
			repeat: -1
		})

		this.anims.create({
			key: 'glow',
			frames: this.anims.generateFrameNumbers('exit', { start: 0, end: 5 }),
			frameRate: 4,
			repeat: -1
		});
		gameState.exit.anims.play('glow', true);
		gameState.entrance.anims.play('glow', true)

		this.add.image(0, 900, 'bar').setOrigin(0, 0).setScale(50).setAlpha(0);

		this.setAudio();
  	}

	calculateScore() {
		gameState.score += .05*MAX_TIME - Math.floor((gameState.timerRec + gameState.timer.getProgress())*1000*50)
	}

	update() {
		if (gameState.active) {
			// Move player
			if (gameState.cursors.left.isDown && gameState.cursors.shift.isDown) {
				gameState.player.setVelocityX(-gameState.speed*gameState.speedUp);
				if (gameState.player.body.touching.down) gameState.player.anims.play('roll', true);
				gameState.player.flipX = true;
				// this.sound.play('footstepsound', { volume: .5 })
			} else if (gameState.cursors.right.isDown && gameState.cursors.shift.isDown) {
				gameState.player.setVelocityX(gameState.speed*gameState.speedUp);
				if (gameState.player.body.touching.down) gameState.player.anims.play('roll', true);
				gameState.player.flipX = false;
				// this.sound.play('footstepsound', { volume: .5 })
			} else if (gameState.cursors.left.isDown) {
				gameState.player.setVelocityX(-gameState.speed);
				if (gameState.player.body.touching.down) gameState.player.anims.play('walk', true);
				gameState.player.flipX = true;
				// this.sound.play('footstepsound', { volume: .5 })
			} else if (gameState.cursors.right.isDown) {
				gameState.player.setVelocityX(gameState.speed);
				if (gameState.player.body.touching.down) gameState.player.anims.play('walk', true);
				gameState.player.flipX = false;
				// this.sound.play('footstepsound', { volume: .5 })
			} else {
				if (gameState.player.body.touching.down) {
					gameState.player.setVelocityX(0);
					gameState.player.anims.play('idle', true);
				}
				
			}
			
			if ((gameState.cursors.space.isDown || gameState.cursors.up.isDown) && gameState.player.body.touching.down) {
				gameState.player.anims.play('jump', true);
				gameState.player.setVelocityY(-gameState.jump);
				// this.sound.play('jumpsound', { volume: .5 })
			} else if (gameState.cursors.down.isDown) {
				gameState.player.anims.play('jump', true)
				gameState.player.setVelocityY(gameState.jump)
			}
		}

		if (gameState.player.y > 1040) {
			// this.sound.play('lost', { volume: .5 })
			this.restartLevel()
		}

		var count = (gameState.timerRec + gameState.timer.getProgress())*1000
		if (Math.floor(count%60) < 10) {
			gameState.timeTxt.setText(`Time: ${Math.floor(count/60)}:0${Math.floor(count%60)}`)
		} else {
			gameState.timeTxt.setText(`Time: ${Math.floor(count/60)}:${Math.floor(count%60)}`)
		}
	}

	createSideBar() {
		this.sideBarId = `SideBar${gameState.numScene++}`;
		var win = this.add.zone(1760,0, 200, 1100).setOrigin(0, 0).setInteractive()
		this.sideBar = new SideBar(this.sideBarId, this, this.itemSet);
		this.scene.add('SideBar', this.sideBar, true);
	}

	createWindow(key, text) {
		var win = this.add.zone(100, 100, 300, 400).setOrigin(0, 0).setInteractive()
		var demo = new Window(key, this.scene, this.sceneKey, text);
		this.scene.add('Window', demo, true);
	}

	createScoreBoard(key) {
		var win = this.add.zone(100, 100, 300, 400).setOrigin(0, 0).setInteractive()
		var demo = new ScoreBoard(key, this.scene, this.sceneKey, this.levelKey);
		this.scene.add('ScoreBoard', demo, true);
	}
}

class SideBar extends Phaser.Scene {
	constructor(key, parent, itemSet) {
		super(key);
		this.parent = parent
		this.itemSet = itemSet
	}

	notified = false
	pos = { openX: 1820, openY: 550, closeX: 1942, closeY: 550,
			itemOffsetX: 80, itemOffsetY: 560, itemIncY: 110,
			buttonOffsetX: 80, buttonOffsetY: 110, buttonIncY: 100 }

	// posConst = 500
	// posInc = 100

	isOpened = false
	rectangle

	openSideBar() {
		// this.physics.moveToObject(gameState.sidebar, this.open, 100)
		gameState.sidebar.body.reset(this.pos.openX, this.pos.openY);
				
		var pos = this.pos.itemOffsetY
		this.itemSet.forEach(item => {
			// this.physics.moveToObject(item.bar, new Phaser.Math.Vector2(1850, pos), 100)
			item.bar.body.reset(this.pos.openX + this.pos.itemOffsetX, pos)
			pos += this.pos.itemIncY
		});

		pos = this.pos.buttonOffsetY
		this.buttons.forEach(button => {
			button.btn.body.reset(this.pos.openX + this.pos.buttonOffsetX, pos)
			button.txt.body.reset(this.pos.openX + this.pos.buttonOffsetX, pos + 50)
			pos += this.pos.buttonIncY
		})
		this.notified = true;
		this.isOpened = true
	}

	closeSideBar() {
		// this.physics.moveToObject(gameState.sidebar, this.close, 100)
		gameState.sidebar.body.reset(this.pos.closeX, this.pos.closeY);
				
		var pos = this.pos.itemOffsetY
		this.itemSet.forEach(item => {
			item.bar.body.reset(this.pos.closeX + this.pos.itemOffsetX, pos);
			pos += this.pos.itemIncY
		});

		pos = this.pos.buttonOffsetY
		this.buttons.forEach(button => {
			button.btn.body.reset(this.pos.closeX + this.pos.buttonOffsetX, pos)
			button.txt.body.reset(this.pos.closeX + this.pos.buttonOffsetX, pos + 50)
			pos += this.pos.buttonIncY
		})
	}

	puaseImg
	buttons = [
		{
			name: 'skip',
			function: () => {
				this.parent.stopLevel()
				window.location = dscrURL;
			}
		},
		{
			name: 'pause',
			function: () => {
				if (gameState.active) {
					gameState.active = false
					this.parent.scene.pause()
					this.buttons[1].txt.setText('resume')
					this.puaseImg = this.parent.add.image(0, 0, 'pause').setOrigin(0, 0);
				} else {
					gameState.active = true
					this.parent.scene.resume()
					this.buttons[1].txt.setText('pause')
					this.puaseImg.destroy()
				}
			}
		},
		{
			name: 'restart',
			function: () => {
				gameState.resetTimer = true
				this.parent.restartLevel()
			}
		},
		// {
		// 	name: 'sound off',
		// 	function: () => {
		// 		// if (gameState.soundsOn) {
		// 		// 	this.parent.music.pause()
		// 		// 	gameState.soundsOn = false
		// 		// 	this.buttons[3].txt.setText('sound on')
		// 		// } else {
		// 		// 	this.parent.music.resume()
		// 		// 	gameState.soundsOn = true
		// 		// 	this.buttons[3].txt.setText('sound off')
		// 		// }
		// 	}
		// },
	]

	create() {
		// this.rectangle = this.add.rectangle(this.pos.openX, this.pos.openY, 303, 1024, '0x000000', 0).setOrigin(0, .5).setInteractive()
		// this.physics.add.existing(this.rectangle)
		// this.rectangle.body.setAllowGravity(false)
		// this.rectangle.on('pointerover', () => {
		// 	if (this.isOpened) {

		// 	}
		// })

		gameState.sidebar = this.physics.add.sprite(this.pos.closeX, this.pos.closeY, 'sidebar').setScale(.5).setOrigin(0, .5).setInteractive()
		// this.physics.add.existing(gameState.sidebar)
		gameState.sidebar.body.setAllowGravity(false)
		
		var pos = this.pos.itemOffsetY
		// var bar = this.add.group()
		this.itemSet.forEach(item => {
			item.bar = this.add.sprite(this.pos.closeX + this.pos.itemOffsetX, pos, item.name).setScale(item.scale*.8).setTint(0x000000);
			// bar.add(item.bar)
			pos += this.pos.itemIncY;
			this.physics.add.existing(item.bar)
			item.bar.body.setAllowGravity(false)
		});
		
		gameState.sidebar.on('pointerover', () => {
			if (!this.notified) {
				// this.physics.moveToObject(this.bck, new Phaser.Math.Vector2(1810, 550), 100)
				this.physics.moveToObject(gameState.sidebar, new Phaser.Math.Vector2(this.pos.openX, this.pos.openY), 100)
				// gameState.sidebar.body.reset(this.open.x, this.open.y);
				
				var pos = this.pos.itemOffsetY
				this.itemSet.forEach(item => {
					this.physics.moveToObject(item.bar, new Phaser.Math.Vector2(this.pos.openX + this.pos.itemOffsetX, pos), 100)
					pos += this.pos.itemIncY
				});

				pos = this.pos.buttonOffsetY
				this.buttons.forEach(button => {
					this.physics.moveToObject(button.txt, new Phaser.Math.Vector2(this.pos.openX + this.pos.buttonOffsetX, pos + 50), 100)
					this.physics.moveToObject(button.btn, new Phaser.Math.Vector2(this.pos.openX + this.pos.buttonOffsetX, pos), 100)
					pos += this.pos.buttonIncY
				})
			}
		});
		gameState.sidebar.on('pointerout', () => {
			if (!this.notified && !this.isMouseHovering()) { 
				this.closeSideBar()
			}
		});

		gameState.sidebar.on('pointerdown', () => {
			// if (this.isOpend) {
				this.notified = false
			// } else {
			// 	this.openSideBar()
			// }
		});

		var pos = this.pos.buttonOffsetY
		this.buttons.forEach((button) => {
			button.txt = this.add.text(this.pos.closeX + this.pos.buttonOffsetX, pos + 50, button.name, BUTTON_TXT).setOrigin(.5, .5)
			button.btn = createButton(this, this.pos.closeX + this.pos.buttonOffsetX, pos, button.function)

			this.physics.add.existing(button.txt)
			this.physics.add.existing(button.btn)
			button.btn.body.setAllowGravity(false)
			button.txt.body.setAllowGravity(false)
			pos += this.pos.buttonIncY
		})
	}

	isMouseHovering() {
		if (this.input.mousePointer.x > this.pos.openX) return true
		return false
	}

	update() {
		const tolerance = 4;
		const distance = gameState.sidebar.x - this.pos.openX

		if (gameState.sidebar.body.speed > 0) {
			if (distance < tolerance) {
				this.openSideBar()
				this.notified = false
			}
		}	
	}
}

class Window extends Phaser.Scene {
	constructor(key, parent, sceneKey, text) {
		super(`Window${key}`);
		this.key = key;
		this.parent = parent;
		this.sceneKey = sceneKey;
		this.text = text;
	}

	create() {
		this.add.rectangle(960, 550, 1500, 600, 0xFFFFFF)
		this.add.text(280, 550, this.text, SMALL_TXT).setOrigin(0, .5)
		this.add.text(1550, 800, "Done", BUTTON_TXT).setOrigin(.5, .5)
		this.next_btn = createButton(this, 1550, 750, () => {

			this.scene.stop(`Window${this.key}`)
			this.parent.resume(this.sceneKey)

			// reset cursors
			for (const cursor in gameState.cursors) {
				gameState.cursors[cursor].reset();
			  }
		})
	}
}

class ScoreBoard extends Phaser.Scene {
	constructor(key, parent, sceneKey, levelKey) {
		super(`ScoreBoard${key}`);
		this.key = key;
		this.parent = parent;
		this.sceneKey = sceneKey;
		this.levelKey = levelKey;
	}

	finish = false
	isLocked = false
	questionNo = 0
	text
	answerA
	answerB
	answerC
	answerD
	btnA
	btnB
	btnC
	btnD
	bonus = 1000
	hint

	create() {
		this.add.rectangle(960, 550, 1500, 800, 0xFFFFFF)
		this.text = this.add.text(280, 230, 'You reached the exit!\nAnwer the following questions!\n', SMALL_TXT)
		this.answerA = this.add.text(380, 380, "", SMALL_TXT)
		this.answerB = this.add.text(380, 480, "", SMALL_TXT)
		this.answerC = this.add.text(380, 580, "", SMALL_TXT)
		this.answerD = this.add.text(380, 680, "", SMALL_TXT)
		this.hint = this.add.text(380, 800, "", SMALL_TXT)

		this.add.text(1500, 850, "Next", BUTTON_TXT).setOrigin(.5, .5)
		createButton(this, 1500, 800, () => {
			if (this.finish) {
				this.scene.stop(`ScoreBoard${this.key}`)
				this.parent.resume(this.sceneKey)

				// reset cursors
				for (const cursor in gameState.cursors) {
					gameState.cursors[cursor].reset();
				}
			}

			if (this.questionNo == 0) {
				this.text.setText(question[this.levelKey][this.questionNo].question)
				this.answerA.setText(question[this.levelKey][this.questionNo]['A'])
				this.btnA = createButton(this, 330, 380, () => {
					if (!this.isLocked) {
						if (question[this.levelKey][this.questionNo].answer == 'A') {
							gameState.score += this.bonus
							// this.sound.play('nextlevel', { volume: .5 })
							this.hint.setText('Correct answer! Get 1000 points!')
						} else {
							// this.sound.play('lost', { volume: .5 })
							this.hint.setText(`Wrong answer!\nCorrect answer is ${question[this.levelKey][this.questionNo][question[this.levelKey][this.questionNo].answer]}`)
						}
						this.questionNo++
						this.isLocked = true
					}			
				})
				this.answerB.setText(question[this.levelKey][this.questionNo]['B'])
				this.btnB = createButton(this, 330, 480, () => {
					if (!this.isLocked) {
						if (question[this.levelKey][this.questionNo].answer == 'B') {
							gameState.score += this.bonus
							// this.sound.play('nextlevel', { volume: .5 })
							this.hint.setText('Correct answer! Get 1000 points!')
						} else {
							// this.sound.play('lost', { volume: .5 })
							this.hint.setText(`Wrong answer!\n Correct answer is ${question[this.levelKey][this.questionNo][question[this.levelKey][this.questionNo].answer]}`)
						}
						this.questionNo++
						this.isLocked = true
					}	
				})
				this.answerC.setText(question[this.levelKey][this.questionNo]['C'])
				this.btnC = createButton(this, 330, 580, () => {
					if (!this.isLocked) {
						if (question[this.levelKey][this.questionNo].answer == 'C') {
							gameState.score += this.bonus
							// this.sound.play('nextlevel', { volume: .5 })
							this.hint.setText('Correct answer! Get 1000 points!')
						} else {
							// this.sound.play('lost', { volume: .5 })
							this.hint.setText(`Wrong answer!\n Correct answer is ${question[this.levelKey][this.questionNo][question[this.levelKey][this.questionNo].answer]}`)
						}
						this.questionNo++
						this.isLocked = true
					}	
				})
				this.answerD.setText(question[this.levelKey][this.questionNo]['D'])
				this.btnD = createButton(this, 330, 680, () => {
					if (!this.isLocked) {
						if (question[this.levelKey][this.questionNo].answer == 'D') {
							gameState.score += this.bonus
							// this.sound.play('nextlevel', { volume: .5 })
							this.hint.setText('Correct answer! Get 1000 points!')
						} else {
							// this.sound.play('lost', { volume: .5 })
							this.hint.setText(`Wrong answer!\n Correct answer is ${question[this.levelKey][this.questionNo][question[this.levelKey][this.questionNo].answer]}`)
						}
						this.questionNo++
						this.isLocked = true
					}	
				})
			} else if (this.questionNo < question[this.levelKey].length) {
				this.text.setText(question[this.levelKey][this.questionNo].question)
				this.answerA.setText(question[this.levelKey][this.questionNo]['A'])
				this.answerB.setText(question[this.levelKey][this.questionNo]['B'])
				this.answerC.setText(question[this.levelKey][this.questionNo]['C'])
				this.answerD.setText(question[this.levelKey][this.questionNo]['D'])
				this.hint.setText("")
				this.isLocked = false
			} else {
				this.finish = true
				this.text.setText(`You finished ${this.levelKey}!\nScore: ${gameState.score}\n`)
				this.answerA.destroy()
				this.answerB.destroy()
				this.answerC.destroy()
				this.answerD.destroy()
				this.btnA.destroy()
				this.btnB.destroy()
				this.btnC.destroy()
				this.btnD.destroy()
				this.hint.destroy()
			}
		})
	}
}

class Level1 extends Level {
	itemSet = [
		{
			id: 0,
			name: 'A',
			posX: 600,
			posY: 700,
			scale: .05,
			description: "(1) Taiwan\n"
							+ "Colorectal cancer is the most common cancer in Taiwan. Every year, about 15,000 people are diagnosed with colorectal\n"
							+ "cancer, and about 6,000 people die from it.\n"
		},
		{
			id: 1,
			name: 'U',
			posX: 800,
			posY: 700,
			scale: .05,
			description: "(2) Global\n"
							+ "According to the World Health Organization (WHO) report, in 2022, colorectal cancer is the third most common cancer\n"
							+ "globally and the second leading cause of cancer-related deaths, resulting in nearly one million deaths annually.\n"
		},
		{
			id: 2,
			name: 'C',
			posX: 1000,
			posY: 700,
			scale: .05,
			description: "Research has demonstrated that early detection can make colorectal cancer highly treatable and highly curable, which\n"
							+ "significantly reduce mortality rates of colorectal cancer."
		},
		{	
			id: 3,
			name: 'G',
			posX: 1200,
			posY: 700,
			scale: .05,
			description: "Current screening methods for colorectal cancer primarily involve the fecal immunochemical test (FIT). If blood is\n"
							+ "detected in the stool sample, further examination is typically conducted by doctors using colonoscopy to observe the\n"
							+ "presence of polyps in the colon. However, this screening method has several drawbacks, such as inconvenience and\n"
							+ "high invasiveness.\n\n"
							+ "(1) The fecal immunochemical test (FIT) has shown a misdiagnosis rate of up to 30%, underscoring the urgent need to\n"
							+ "develop an alternative detection method with higher accuracy.\n"
							+ "(2) The preparation of colonoscopy is cumbersome and time-consuming： Prior to the colonoscopy, individuals are required\n"
							+ "to consume a large amount of bowel preparation solution the day before the procedure and can only drink water.\n"
							+ "(3) Invasion: The invasion of colonoscopy generally lowers the public's willingness to undergo such a medical procedure.\n"
			
		},
	];

	platformSet = [
		{ x: 1000, y: 800 }, { x: 1300, y: 800 }, { x: 700, y: 550 }, { x: 850, y: 1100 },
	];

	exit = {
		name: 'exit',
		posX: 1200,
		posY: 780,
		scale: 1.5
	}
	
	constructor() {
		super('Level1');
	}

	setBackgrounds() {
		this.add.rectangle(0, 0, 1960, 1100, 0xf7aeaf, 1).setOrigin(0, 0);
		this.add.image(0, 0, `background1`).setOrigin(0, 0);
		this.add.image(0, 0, `background`).setOrigin(0, 0);
	}
}

class Level2 extends Level {
	itemSet = [
		{	
			id: 0,
			name: 'poster',
			posX: 480,
			posY: 400,
			scale: .4,
			description: "Circular RNA (circRNA) is a unique single-stranded RNA that creates a closed loop structure, setting it apart from\n"
							+ "linear RNA. Its resistance to degradation by exonucleases grants it enhanced stability compared to most linear RNA\n"
							+ "in cells. Notably, circRNA has been associated with some diseases like cancer. Ongoing research is uncovering its\n"
							+ "diverse regulatory roles within cells."
		},
		{	
			id: 1,
			name: 'circRNA',
			posX: 700,
			posY: 400,
			scale: .4,
			description: "Circular RNA features a unique loop-like structure that resists exonuclease degradation, enhancing its stability. We've\n"
							+ "selected two circRNAs showing remarkable expression hikes in colorectal cancer patients' blood as the biomarkers. These\n"
							+ "will be the focus for further detection and analysis due to their stability and disease-related roles."
		},
		{	
			id: 2,
			name: 'flask',
			posX: 300,
			posY: 750,
			scale: .4,
			description: "We will focus on two types of circRNA, hsa_circ_0101802 and hsa_circ_0004771, as potential biomarkers. These\n"
							+ "circRNAs have been observed to be upregulated in colorectal cancer patient's serum and have high specificity and\n"
							+ "sensitivity in clinical studies. This makes them highly suitable candidates for detecting the presence of colorectal cancer\n"
							+ "in patients.",
			picture: 'AUC'
		},
		{	
			id: 3,
			name: 'magnifier',
			posX: 900,
			posY: 750,
			scale: .4,
			description: "Currently, there are very few methods available for circRNA detection, and all of them are conducted within laboratory\n"
							+ "settings."
		},
	];

	platformSet = [
		{ x: 310, y: 260 }, { x: 920, y: 410 }, { x: 600, y: 630 },
		{ x: 1570, y: 415 }, { x: 1800, y: 137 },
		{ x: 450, y: 1000 },
		{ x: 1250, y: 1040 }, { x: 1525, y: 1040 }, { x: 1800, y: 1040 }
	];
	
	constructor() {
		super('Level2');
	}

	setPlatforms(platforms) {
		var i = 1;
		this.platformSet.forEach(plat => {
			platforms.create(plat.x, plat.y, `platform${this.level}_${i++}`);
		});
	}
}

class Level3 extends Level {
	exit = {
		name: 'exit',
		posX: 1750,
		posY: 780,
		scale: 1.5
	};
	
	itemSet = [
		{	
			id: 0,
			name: 'eppendorf',
			posX: 480,
			posY: 180,
			scale: .3,
			description: "We have decided to develop a diagnostic technology platform for cancer screening using liquid biopsy. With just a tube\n"
							+ "of blood sample provided by the patient, we can determine the potential presence of colorectal cancer through circular\n"
							+ "RNA (circRNA) analysis in the serum.\n\n"
							+ "We use two detection methods for our experiments:\n"
							+ "(1) Amplifying circRNA using rolling circle amplification (RCA) and testing with probe-conjugated gold nanoparticles.\n"
							+ "(2) Employing reverse transcription recombinase polymerase amplification (RT-RPA) for circRNA amplification, tested\n"
							+ "with a lateral flow cassette and PCRD.",
			picture: 'workflow'
		},
		{	
			id: 1,
			name: 'RCA',
			posX: 1750,
			posY: 240,
			scale: .3,
			description: "RCA (Rolling Circle Amplification) is an isothermal amplification method performed at around 60-65°C. This process\n"
							+ "generates long-repeated complementary DNA (cDNA)."
		},
		{	
			id: 2,
			name: 'idk',
			posX: 1350,
			posY: 550,
			scale: .3,
			description: "RPA (Recombinase Polymerase Amplification) is a DNA amplification method that works at a consistent temperature\n"
							+ "between 37–42°C. It offers an isothermal alternative to PCR, a widely used DNA amplification technique requiring\n"
							+ "fluctuating temperature cycles.",
			picture: 'RPA'
		},
		{	
			id: 3,
			name: 'AuNPs',
			posX: 90,
			posY: 660,
			scale: .3,
			description: "After RCA process, the resulting cDNA are mixed with probe-conjugated gold (AuNPs) nanoparticles solution. The probes on\n"
							+ "the surface of AuNPs then recognize and bind to those cDNA products. When treating the mixed solution with salts, the\n"
							+ "presence of cDNA in the probe-conjugated gold nanoparticle solution (indicating a high circRNA level) prevents the aggregation\n"
							+ "of AuNPs, resulting in a red color. Conversely, the absence of cDNA (indicating a low circRNA level) leads to a blue-purple color.",
			picture: 'RCA'
		},
		{	
			id: 4,
			name: 'PCRD',
			posX: 950,
			posY: 850,
			scale: .3,
			description: "After the RT-RPA, the amplicons are applied to the lateral flow cassette (PCRD). The presence of amplicons (depicted in white)\n"
							+ "with different tags (blue, yellow, and green) initially binds to carbon particles. Subsequently, they are recognized by their respective\n"
							+ "antibodies on the test lines, resulting in a black coloration. Three lines (one control line and two test lines) indicates a high risk of\n"
							+ "developing colorectal cancer. Conversely, one line observed represents a negative outcome.",
			picture: 'CT-line'
		},
	];

	platformSet = [
		{ x: 295, y: 265}, { x: 1000, y: 272 }, { x: 1198, y: 300 }, { x: 1326, y: 328 }, { x: 1527, y: 345 },
		{ x: 1809, y: 327 }, { x: 710, y: 636 }, { x: 1105, y: 656 }, { x: 1595, y: 636 }, { x: 90, y: 877},
		{ x: 224, y: 906 }, { x: 440, y: 960 }, { x: 1475, y: 1004 }, { x: 1797, y: 970 },
	];

	stickSet = [
		{x: 550, y: 670}, {x: 850, y: 670}, {x: 1150, y: 670}, 
		{x: 1380, y: 354}, 	{x: 280, y: 295}, {x: -20, y: 295}, 
	]

	setPlatforms(platforms) {
		this.stickSet.forEach(stick => {
			stick.sprite = this.physics.add.sprite(stick.x, stick.y, 'stick').setOrigin(0, 0).setScale(.6)
			stick.sprite.body.setAllowGravity(false)
			this.physics.add.overlap(gameState.player, stick.sprite, () => {
				gameState.levelClear = false;
				// this.sound.play('lost', { volume: .5 })
				this.cameras.main.fade(800, 0, 0, 0, false, function(camera, progress) {
					if (progress > .9) {
						this.restartLevel();
					}
				});
			})
		})
		
		var lava2 = this.physics.add.sprite(930, 612, 'lava2').setOrigin(0,0);
		lava2.body.setAllowGravity(false);
		this.anims.create({
			key: 'flow2',
			frames: this.anims.generateFrameNumbers('lava2', { start: 0, end: 3 }),
			frameRate: 4,
			repeat: -1
		});
		lava2.anims.play('flow2', true);
		this.physics.add.overlap(gameState.player, lava2, () => {
			gameState.levelClear = false;
			// this.sound.play('lost', { volume: .5 })
			this.cameras.main.fade(800, 0, 0, 0, false, function(camera, progress) {
				if (progress > .9) {
					this.restartLevel();
				}
			});
		})

		var lava3 = this.physics.add.sprite(1380, 304, 'lava2').setOrigin(0,0);
		lava3.body.setAllowGravity(false);
		lava3.anims.play('flow2', true);
		this.physics.add.overlap(gameState.player, lava3, () => {
			gameState.levelClear = false;
			// this.sound.play('lost', { volume: .5 })
			this.cameras.main.fade(800, 0, 0, 0, false, function(camera, progress) {
				if (progress > .9) {
					this.restartLevel();
				}
			});
		})

		var i = 1;
		this.platformSet.forEach(plat => {
			platforms.create(plat.x, plat.y, `platform${this.level}_${i++}`);
		});

		var plt = this.physics.add.sprite(700, 930, 'platform3_15').setOrigin(0,0);
		plt.move = this.tweens.add({
			targets: plt,
			x: plt.x+300,
			ease: 'Linear',
			duration: 5000,
			repeat: -1,
			yoyo: true,
		})
		plt.body.setAllowGravity(false)
		this.physics.add.collider(gameState.player, plt);
		plt.setCollideWorldBounds(true);

		var lava1 = this.physics.add.sprite(0, 1041, 'lava1').setOrigin(0,0);
		lava1.body.setAllowGravity(false);
		this.anims.create({
			key: 'flow1',
			frames: this.anims.generateFrameNumbers('lava1', { start: 0, end: 3 }),
			frameRate: 4,
			repeat: -1
		});
		lava1.anims.play('flow1', true);
		this.physics.add.overlap(gameState.player, lava1, () => {
			gameState.levelClear = false;
			// this.sound.play('lost', { volume: .5 })
			this.cameras.main.fade(800, 0, 0, 0, false, function(camera, progress) {
				if (progress > .9) {
					this.restartLevel();
				}
			});
		})

		this.add.image(0, 0, 'grass').setOrigin(0, 0);
	}

	constructor() {
		super('Level3');
	}
}

class Level4 extends Level {
	itemSet = [
		{
			id: 0,
			name: 'money',
			posX: 1050,
			posY: 400,
			scale: 1,
			description: "NanoCircDx presents clear benefits compared to existing methods for colorectal cancer detection. Our approach needs just\n"
							+ "one blood sample to evaluate the potential of colorectal cancer, offering:\n\n"
							+ "(1) Early identification of the disease.\n"
							+ "(2) Enhanced accuracy and speed in screening.\n"
							+ "(3) Greater user acceptance."
		},
		{	
			id: 1,
			name: 'noninvasive',
			posX: 300,
			posY: 220,
			scale: 1,
			description: "NanoCircDx also features its minimally invasive process conpared to traditional colorectal detection methods."
		},
		{	
			id: 2,
			name: 'money',
			posX: 1300,
			posY: 720,
			scale: 1,
			description: "We aim to lower the cost of our detection kit in the future, and further introduce our product to rural areas."
		},
		{	
			id: 3,
			name: 'time',
			posX: 1420,
			posY: 160,
			scale: 1,
			description: "Current circRNA detection methods are limited to lab settings, lacking rapid screening. This study aims to establish swift\n"
							+ "circRNA biomarker screening for colorectal cancer. Furthermore, we intend to expand this concept for diagnosing diverse\n"
							+ "diseases and their related circRNAs in the future."
		},
	];

	platformSet = [
		{ x: 100, y: 300 }, { x: 300, y: 300 }, { x: 300, y: 750 }, { x: 200, y: 1000 },
		{ x: 900, y: 500 }, { x: 1900, y: 500 }, { x: 1500, y: 800 }, { x: 1500, y: 250 },
	];

	exit = {
		name: 'exit',
		posX: 100,
		posY: 700,
		scale: 1.5
	}
	slowDown = false

	setPlatforms(platforms) {
		var i = 1;
		this.platformSet.forEach(plat => {
			platforms.create(plat.x, plat.y, `platform${this.level}_${i++}`);
		});

		for (let i = 0; i < 3; i++) {
			platforms.create(1000 - 200*i, 800 + 100*i, 'platform4_9')
		}
		var warning1 = this.physics.add.sprite(780, 250, 'warning1')
		this.physics.add.collider(warning1, platforms);
		var warning2 = this.physics.add.sprite(1620, 600, 'warning2')
		this.physics.add.collider(warning2, platforms);
	}

	isStuck () {
		if (gameState.player.x > 790 & gameState.player.x < 990 & gameState.player.y > 420 & gameState.player.y < 520) this.slowDown = true
		else if (gameState.player.x > 1400 & gameState.player.x < 1600 & gameState.player.y > 720 & gameState.player.y < 820) this.slowDown = true
		else this.slowDown = false
	}

	update() {
		if (gameState.active) {
			this.isStuck()

			// Move player
			if (gameState.cursors.left.isDown && gameState.cursors.shift.isDown) {
				gameState.player.setVelocityX(-gameState.speed*(this.slowDown? 0.5:gameState.speedUp));
				gameState.player.anims.play('run', true);
				gameState.player.flipX = true;
			} else if (gameState.cursors.right.isDown && gameState.cursors.shift.isDown) {
				gameState.player.setVelocityX(gameState.speed*(this.slowDown? 0.5:gameState.speedUp));
				gameState.player.anims.play('run', true);
				gameState.player.flipX = false;
			} else if (gameState.cursors.left.isDown) {
				gameState.player.setVelocityX(-gameState.speed*(this.slowDown? 0.5:1));
				gameState.player.anims.play('walk', true);
				gameState.player.flipX = true;
			} else if (gameState.cursors.right.isDown) {
				gameState.player.setVelocityX(gameState.speed*(this.slowDown? 0.5:1));
				gameState.player.anims.play('walk', true);
				gameState.player.flipX = false;
			} else {
				gameState.player.setVelocityX(0);
				gameState.player.anims.play('idle', true);
			}
			
			if (!this.slowDown) {
				if ((gameState.cursors.space.isDown || gameState.cursors.up.isDown) && gameState.player.body.touching.down) {
					gameState.player.anims.play('jump', true);
					gameState.player.setVelocityY(-gameState.jump);
				} else if (gameState.cursors.down.isDown) {
					gameState.player.anims.play('jump', true)
					gameState.player.setVelocityY(gameState.jump)
				}
			}
		}

		if (gameState.player.y > 1040) {
			// this.sound.play('lost', { volume: .5 })
			this.restartLevel()
		}

		var count = gameState.timer.getProgress()*1000
		if (Math.floor(count%60) < 10) {
			gameState.timeTxt.setText(`Time: ${Math.floor(count/60)}:0${Math.floor(count%60)}`)
		} else {
			gameState.timeTxt.setText(`Time: ${Math.floor(count/60)}:${Math.floor(count%60)}`)
		}
	}
	
	constructor() {
		super('Level4');
	}
}

class Finish extends Phaser.Scene {
	constructor() {
		super('Finish');
	}

	create() {
		this.add.image(0, 0, 'ending_page').setOrigin(0, 0);
		this.add.text(1700, 1000, 'restart', {fill: '#FFFFFF', fontSize: '24px', align: 'center', fontFamily: 'Comic Sans MS, "Comic Sans", cursive'}).setOrigin(.5, .5)
		createButton(this, 1700, 950, () => {
			this.scene.stop('Finish')
			// this.music.stop()
			this.scene.start('StartUp')
		})
		this.add.text(1800, 1000, 'homepage', {fill: '#FFFFFF', fontSize: '24px', align: 'center', fontFamily: 'Comic Sans MS, "Comic Sans", cursive'}).setOrigin(.5, .5)
		createButton(this, 1800, 950, () => {
			this.scene.stop('StartUp')
			// this.music.stop()
			window.location = dscrURL;
		})

		this.add.text(100, 170, 'You finished all the levels. See our description for more information!', {fill: '#FFFFFF', fontSize: '50px', align: 'center', fontFamily: 'Comic Sans MS, "Comic Sans", cursive'});

		this.add.text(100, 270, `Score: ${gameState.score}`, {fill: '#FFFFFF', fontSize: '50px', align: 'center', fontFamily: 'Comic Sans MS, "Comic Sans", cursive'})
		
		// this.music = this.sound.add('NTHUSong', { loop: true, volume: 0.1 })
		// this.music.play();

		var heart1 = this.add.sprite(150, 400, 'heart').setScale(.05).setTint(0x000000)
		var heart2 = this.add.sprite(250, 400, 'heart').setScale(.05).setTint(0x000000)
		var heart3 = this.add.sprite(350, 400, 'heart').setScale(.05).setTint(0x000000)
		if (gameState.score > .07*MAX_TIME) heart1.clearTint()
		if (gameState.score > .12*MAX_TIME) heart2.clearTint()
		if (gameState.score > .17*MAX_TIME) heart3.clearTint()
	}
}

class Ending extends Phaser.Scene {
	constructor() {
		super('Ending');
	}

	create() {
		this.add.image(0, 0, 'background_description').setOrigin(0, 0);
		this.add.text(980, 200, "Panda's Adventure", LARGE_TXT).setOrigin(.5, 0)
		var txtNo = 0
		var txt = this.add.text(980, 300, endingTxt[txtNo], MEDIUM_TXT).setOrigin(.5, 0)

		var butTxt = this.add.text(1300, 900, 'Next', BUTTON_TXT).setOrigin(.5, .5)
		createButton(this, 1300, 850, () => {
			if (txtNo < endingTxt.length - 1) {
				txt.setText(endingTxt[++txtNo])
				if (txtNo == endingTxt.length - 1) butTxt.setText('Finish')
			} else {
				this.scene.stop('StartUp')
				// this.music.stop()
				this.scene.start('Finish')
			}			
		})

		this.add.text(1200, 900, 'Back', BUTTON_TXT).setOrigin(.5, .5)
		createButton(this, 1200, 850, () => {
			if (txtNo > 0){ 
				txt.setText(endingTxt[--txtNo])
			}
			if (txtNo < endingTxt.length) {
				butTxt.setText('Next')
			}
		})
		
		this.add.text(1400, 900, 'Skip', BUTTON_TXT).setOrigin(.5, .5)
		createButton(this, 1400, 850, () => {
			this.scene.stop('Ending')
			// this.music.stop()
			window.location = dscrURL;
		})

		// this.music = this.sound.add('endmusic', { loop: true, volume: 0.1 })
		// this.music.play();
	}
}

const config = {
	type: Phaser.AUTO,
	width: 1960,
	height: 1100,
	backgroundColor: "b9eaff",
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
			// enableBody: true,
			debug: gameState.debug,
		}
	},
	scale: {
		mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
	},
  	scene: [
		Loading,
		StartUp,
		Welcome,
		Level1,
		Level2,
		Level3,
		Level4,
		Ending,
		Finish
	]
}

const game = new Phaser.Game(config)
