if (typeof EMHU === 'undefined') var EMHU = {};
EMHU.name = 'Even More Heavenly Upgrades (Version Update)';
EMHU.id = 'EMHUFixed';
EMHU.version = '2.9';
EMHU.GameVersion = '2.053';

EMHU.launch = function() {

	EMHU.init = function() {
		if (Game.Upgrades['Divine savings']) {
			EMHU.inert = 1;
			Game.Notify(EMHU.name, 'Another copy is already loaded; this one stayed inactive. Enable only one.', [11, 5], 8);
			return;
		}

		EMHU.isLoaded = 1;
		Game.Notify(EMHU.name + ' loaded!', 'Version ' + EMHU.version, [11, 5], 6);

//Divine Upgrades
		CCSE.NewHeavenlyUpgrade('Divine savings', "Add to your bank all your unspent heavenly chips<q>They won't be spent<br>don't worry</q>", 7777777777, [20, 7], -725, 400, ['Decisive fate']);
		CCSE.NewHeavenlyUpgrade('Divine gains', "Each unspent heavenly chip will give you a <b>+1% to your CpS</b><q>That's a boost</q>", 7777777777777, [28, 12], -625, 604, ['Divine savings', 'Divine bakeries']);
		CCSE.NewHeavenlyUpgrade('Divine buildings', "Get <b>+1% to your CpS</b> for each building owned<q>the more the merrier</q>", 88888888888888, [33, 12], -736, 718, ['Divine gains']);
		CCSE.NewHeavenlyUpgrade('Divine unascended gains', "Get <b>+1% to your CpS</b> for each prestige level in the legacy meter<q>It just speeds up</q>", 999999999999999, [25, 7], -729, 865, ['Divine buildings']);
		CCSE.NewHeavenlyUpgrade('Divine lumps', "Gain an additional <b>+1% to your CpS</b> for each Sugarlump you have.<q>Yes. It does stack with the default upgrade.</q>", 9999999999999999, [21, 17], -793, 983, ['Divine unascended gains']);

//Starter Kits
		var cursorBasePrice = 15;
		var everythingBasePrice = cursorBasePrice;

		var grandmaBasePrice = 100;
		everythingBasePrice += grandmaBasePrice;
		CCSE.NewHeavenlyUpgrade('Starter kitchen 2: Electric boogaloo', 'You start with <b>5 more grandmas</b> <q>Just round it to 10</q>', grandmaBasePrice * 10, [1, 0], -475, -475, ['Starter kitchen']);

		var farmsBasePrice = 1100;
		everythingBasePrice += farmsBasePrice;
		CCSE.NewHeavenlyUpgrade('Starter gardening kit', 'You start with <b>10 Farms</b><q>A little help from my ferns</q>', farmsBasePrice * 10, [2, 0], -575, -450, ['Starter kitchen 2: Electric boogaloo']);
		Game.last.showIf = function() { return (Game.Achievements["Reap what you sow"].won == 1); };

		var minesBasePrice = 12000;
		everythingBasePrice += minesBasePrice;
		CCSE.NewHeavenlyUpgrade('Starter picks and shovels', 'You start with <b>10 Mines</b><q>You now start a bit deeper</q>', minesBasePrice * 10, [3, 0], -675, -450, ['Starter gardening kit']);
		Game.last.showIf = function() { return (Game.Achievements["Excavation site"].won == 1); };

		var factoryBasePrice = 128700;
		everythingBasePrice += factoryBasePrice;
		CCSE.NewHeavenlyUpgrade('Starter toolbox', 'You start with <b>10 Factories</b><q>You now start <br><br>The engies</q>', factoryBasePrice * 10, [4, 0], -775, -450, ['Starter picks and shovels']);
		Game.last.showIf = function() { return (Game.Achievements["Industrial revolution"].won == 1); };

		var bankBasePrice = 1400000;
		everythingBasePrice += bankBasePrice;
		CCSE.NewHeavenlyUpgrade('Starter stonks', 'You start with <b>10 Banks</b><q>A head start in the market</q>', bankBasePrice * 10, [15, 0], -875, -425, ['Starter toolbox']);
		Game.last.showIf = function() { return (Game.Achievements["Fit the bill"].won == 1); };

		var templeBasePrice = 20000000;
		everythingBasePrice += templeBasePrice;
		CCSE.NewHeavenlyUpgrade('Starter prayers', 'You start with <b>10 Temples</b><q>godtouched</q>', templeBasePrice * 10, [16, 0], -975, -415, ['Starter stonks']);
		Game.last.showIf = function() { return (Game.Achievements["Shady sect"].won == 1); };

		var wizardBasePrice = 330000000;
		everythingBasePrice += wizardBasePrice;
		CCSE.NewHeavenlyUpgrade('Starter pointy hat', 'You start with <b>10 Wizard Towers</b><q>A little bit of magic</q>', wizardBasePrice * 10, [17, 0], -1075, -375, ['Starter prayers']);
		Game.last.showIf = function() { return (Game.Achievements["The sorcerer's apprentice"].won == 1); };

		var shipmentBasePrice = 5100000000;
		everythingBasePrice += shipmentBasePrice;
		CCSE.NewHeavenlyUpgrade('Starter hyperdrive', 'You start with <b>10 Shipments</b><q>To the stars!</q>', shipmentBasePrice * 10, [5, 0], -1175, -350, ['Starter pointy hat']);
		Game.last.showIf = function() { return (Game.Achievements["Galactic highway"].won == 1); };

		var alchemyBasePrice = 75000000000;
		everythingBasePrice += alchemyBasePrice;
		CCSE.NewHeavenlyUpgrade('Starter philosopher\'s stone', 'You start with <b>10 Alchemy Labs</b><q>Get your lab coats boys!</q>', alchemyBasePrice * 10, [6, 0], -1275, -325, ['Starter hyperdrive']);
		Game.last.showIf = function() { return (Game.Achievements["Transmogrification"].won == 1); };

		var portalBasePrice = 1000000000000;
		everythingBasePrice += portalBasePrice;
		CCSE.NewHeavenlyUpgrade('Starter cookieverse map', 'You start with <b>10 Portals</b><q>See you on the other side cookie cowboy</q>', portalBasePrice * 10, [7, 0], -1375, -300, ['Starter philosopher\'s stone']);
		Game.last.showIf = function() { return (Game.Achievements["Now you're thinking"].won == 1); };

		var timeMachineBasePrice = 14000000000000;
		everythingBasePrice += timeMachineBasePrice;
		CCSE.NewHeavenlyUpgrade('Starter flux capacitor', 'You start with <b>10 Time machines</b><q>Just wait untill this baby hits 140kmh</q>', timeMachineBasePrice * 10, [8, 0], -1475, -300, ['Starter cookieverse map']);
		Game.last.showIf = function() { return (Game.Achievements["Alternate timeline"].won == 1); };

		var antimatteBasePrice = 170000000000000;
		everythingBasePrice += antimatteBasePrice;
		CCSE.NewHeavenlyUpgrade('Starter molecules', 'You start with <b>10 Antimatter condensers</b><q>This is what matters the most</q>', antimatteBasePrice * 10, [13, 0], -1575, -300, ['Starter flux capacitor']);
		Game.last.showIf = function() { return (Game.Achievements["Quirky quarks"].won == 1); };

		var prismBasePrice = 2100000000000000;
		everythingBasePrice += prismBasePrice;
		CCSE.NewHeavenlyUpgrade('Starter photons', 'You start with <b>10 Prisms</b><q>Let\'s light this place up</q>', prismBasePrice * 10, [14, 0], -1675, -325, ['Starter molecules']);
		Game.last.showIf = function() { return (Game.Achievements["Dazzling glimmer"].won == 1); };

		var chancemakerBasePrice = 26000000000000000;
		everythingBasePrice += chancemakerBasePrice;
		CCSE.NewHeavenlyUpgrade('Starter dice set', 'You start with <b>10 Chancemakers</b><q>You just got real lucky</q>', chancemakerBasePrice * 10, [19, 0], -1775, -350, ['Starter photons']);
		Game.last.showIf = function() { return (Game.Achievements["What are the odds"].won == 1); };

		var fractalBasePrice = 310000000000000000;
		everythingBasePrice += fractalBasePrice;
		CCSE.NewHeavenlyUpgrade('Starter kit for starter kits', 'You start with <b>10 Fractal engines</b><q>There are just infinite kits inside this one</q>', fractalBasePrice * 10, [20, 0], -1875, -375, ['Starter dice set']);
		Game.last.showIf = function() { return (Game.Achievements["Threw you for a loop"].won == 1); };

		var consoleBasePrice = 7100000000000000000;
		everythingBasePrice += consoleBasePrice;
		CCSE.NewHeavenlyUpgrade('Starter {hello world}', 'You start with <b>10 Javascript consoles</b><q>hack the planet</q>', consoleBasePrice * 10, [32, 0], -1975, -400, ['Starter kit for starter kits']);
		Game.last.showIf = function() { return (Game.Achievements["Variable success"].won == 1); };

		var idlevereBasePrice = 12000000000000000000;
		everythingBasePrice += idlevereBasePrice;
		CCSE.NewHeavenlyUpgrade('Starter multiverse', 'You start with <b>10 Idleverses</b><q>Your little pocket of the multiverse to play around in</q>', idlevereBasePrice * 10, [33, 0], -2075, -405, ['Starter {hello world}']);
		Game.last.showIf = function() { return (Game.Achievements["Well-versed"].won == 1); };

		CCSE.NewHeavenlyUpgrade('Starter 100 pack', 'You start with <b>100 of Everything</b><q>You\'ve gotten here once before</q>', everythingBasePrice * 50, [6, 6], -2175, -410, ['Starter multiverse']);
		Game.last.showIf = function() { return (Game.Achievements["Centennial"].won == 1); };

		var heavenlyPacksNumbers = 100;
		var heavenlyPacksStarting_X = -2175;
		var heavenlyPacksAchievs = ['Centennial and a half', 'Bicentennial', 'Bicentennial and a half', 'Tricentennial', 'Tricentennial and a half', 'Quadricentennial', 'Quadricentennial and a half', 'Quincentennial', 'Quincentennial and a half', 'Sexcentennial', 'Sexcentennial and a half', 'Septcentennial'];
		var heavenlyPacks_Last = 'Starter 100 pack';

		for (var i = 0; i < heavenlyPacksAchievs.length; i++) {
			heavenlyPacksNumbers += 50;
			heavenlyPacksStarting_X -= 100;
			var achievName = heavenlyPacksAchievs[i];
			var icon = Game.Achievements[achievName].icon;
			var name = 'Starter ' + heavenlyPacksNumbers + ' pack';
			var desc = 'You start with <b>' + heavenlyPacksNumbers + ' of Everything</b><q>You are only buying 50 of each now</q>';
			var price = (everythingBasePrice * 50) * (i + 1);

			CCSE.NewHeavenlyUpgrade(name, desc, price, icon, heavenlyPacksStarting_X, -410, [heavenlyPacks_Last]);
			Game.last.showIf = (function(a) { return function() { return (Game.Achievements[a].won == 1); }; })(achievName);

			heavenlyPacks_Last = name;
		}

		CCSE.NewHeavenlyUpgrade('Endgame 1K pack', 'You start with <b>1,000 of Everything</b><q>Why even try at this point?</q>', 150000000000000000000000, [18, 33], -3475, -410, ['Starter 700 pack']);

//Season Upgrades
		CCSE.NewHeavenlyUpgrade('Santa\'s Heavenly Legacy', "Final Claus will accompany you on ascension<q>You have earned my trust</q>", 142328760634, [19, 10], -517, -330, ['Starsnow']);
		CCSE.NewHeavenlyUpgrade('Rudolph\'s Recipe', "You start with all 7 Reindeer Cookies.<q>Wait... Reindeer can bake???</q>", 142328760634, [15, 9], -429, -259, ['Starsnow']);
		CCSE.NewHeavenlyUpgrade('Silly Wabbit', "You start with all 20 eggs. <q>Guess he's here year round.</q>", 142328760634, [13, 12], -877, 34, ['Starspawn']);
		CCSE.NewHeavenlyUpgrade('Horror Story', "You start with all 7 Halloween Cookies. <q>Spooky!</q>", 142328760634, [15, 8], -762, -347, ['Starterror']);
		CCSE.NewHeavenlyUpgrade('Lover\'s Delight', "You start with all 7 Valentines Cookies. <q>Just can't control your love for cookies?</q>", 142328760634, [30, 8], -637, -366, ['Starlove']);

//Ancient dragon
		CCSE.NewHeavenlyUpgrade('Cookie Dragon Egg', "You start with your own dragon egg!<q>So you don't need to buy it everytime</q>", 7600000, [21, 12], -812, 538, ['Divine savings']);
		Game.last.showIf = function() { return (Game.Achievements["Here be dragon"].won == 1); };

		CCSE.NewHeavenlyUpgrade('Cookie Hatchling', "Krumblor will be hatched on ascension<q>It costs a bit more than buying it in the living world, but it's worth</q>", 76700000, [31, 15], -945, 530, ['Cookie Dragon Egg']);
		CCSE.NewHeavenlyUpgrade('Dragon in Training', "Krumblor starts halfway into it's training<q>This tooth fell off when they grew up</q>", 767000000000, [30, 15], -1022, 646, ['Cookie Hatchling']);
		CCSE.NewHeavenlyUpgrade('Dragon in Baking', "Krumblor starts fully trained <b>(1 slot)</b><q>Almost there!</q>", 767000000000000, [30, 14], -874, 721, ['Dragon in Training']);
		CCSE.NewHeavenlyUpgrade('Krumblor, The one and only', "Krumblor starts trained to it's full potential<q>You got here many times already, no need to repeat it</q>", 76700000000000000, [31, 14], -985, 829, ['Dragon in Baking']);

//Lumps
		CCSE.NewHeavenlyUpgrade('Magical Lumps I', "You gain <b>1 Sugarlump</b> on ascension", 5000000000000, [23, 14], -885, 331, ['Divine savings']);
		CCSE.NewHeavenlyUpgrade('Magical Lumps II', "You gain <b>2 Sugarlumps</b> on ascension", 500000000000000, [24, 14], -1002, 314, ['Magical Lumps I']);
		CCSE.NewHeavenlyUpgrade('Magical Lumps III', "You gain <b>3 Sugarlumps</b> on ascension", 50000000000000000, [25, 14], -1116, 343, ['Magical Lumps II']);
		CCSE.NewHeavenlyUpgrade('Magical Lumps IV', "You gain <b>4 Sugarlumps</b> on ascension", 500000000000000000, [27, 16], -1178, 453, ['Magical Lumps III']);
		CCSE.NewHeavenlyUpgrade('Magical Lumps V', "You gain <b>5 Sugarlumps</b> on ascension", 10000000000000000000, [28, 16], -1185, 580, ['Magical Lumps IV']);

//Kittens
		CCSE.NewHeavenlyUpgrade('A secret gift from the cat', "Yes, I know it's expensive, but they swear it's worth it<q>Unlocks... Something!</q>", 9000000000000, [0, 7], 600, -900, ['Kitten wages']);
		Game.last.showIf = function() { return (Game.Achievements["Jellicles"].won == 1); };

		CCSE.NewHeavenlyUpgrade('Permanent Kitten marketeers', "They stick with you<q>Forever!</q>", 577777777777, [18, 28], 725, -700, ['A secret gift from the cat']);
		CCSE.NewHeavenlyUpgrade('Permanent Kitten analysts', "They stick with you<q>Forever!</q>", 57777777777777, [18, 30], 750, -800, ['A secret gift from the cat']);
		CCSE.NewHeavenlyUpgrade('Permanent Kitten executives', "They stick with you<q>Forever!</q>", 577777777777777, [18, 31], 775, -900, ['A secret gift from the cat']);
		CCSE.NewHeavenlyUpgrade('Permanent Kitten admins', "They stick with you<q>Forever!</q>", 777777777777777, [18, 34], 750, -1000, ['A secret gift from the cat']);
		CCSE.NewHeavenlyUpgrade('Permanent Kitten strategists', "They stick with you<q>Forever!</q>", 977777777777777, [18, 36], 735, -1100, ['A secret gift from the cat']);
	};

//Function
	EMHU.earnUpgrade = function(name) {
		var up = Game.Upgrades[name];
		if (up && !up.bought) up.earn();
	};

	EMHU.unlockUpgrade = function(name) {
		var up = Game.Upgrades[name];
		if (up && !up.unlocked) up.unlock();
	};

	EMHU.unlockAll = function(names) {
		for (var i = 0; i < names.length; i++) EMHU.unlockUpgrade(names[i]);
	};

	EMHU.grant = function(obj, amount) {
		obj.getFree(amount);
		obj.free -= amount;
	};

	EMHU.topUpTo = function(obj, target) {
		var missing = target - obj.amount;
		if (missing > 0) EMHU.grant(obj, missing);
	};

	EMHU.packTarget = function() {
		if (Game.Has('Endgame 1K pack')) return 1000;
		for (var n = 700; n >= 150; n -= 50) {
			if (Game.Has('Starter ' + n + ' pack')) return n;
		}
		if (Game.Has('Starter 100 pack')) return 100;
		return 0;
	};

	EMHU.pendingPrestige = function() {
		var got = Math.floor(Game.HowMuchPrestige(Game.cookiesReset + Game.cookiesEarned));
		var had = Math.floor(Game.HowMuchPrestige(Game.cookiesReset));
		var n = got - had;
		return (isFinite(n) && n > 0) ? n : 0;
	};

	EMHU.baseKittens = ['Kitten helpers', 'Kitten workers', 'Kitten engineers', 'Kitten overseers',
		'Kitten managers', 'Kitten accountants', 'Kitten specialists', 'Kitten experts',
		'Kitten consultants', 'Kitten assistants to the regional manager'];

	EMHU.permanentKittens = {
		'Permanent Kitten marketeers': 'Kitten marketeers',
		'Permanent Kitten analysts': 'Kitten analysts',
		'Permanent Kitten executives': 'Kitten executives',
		'Permanent Kitten admins': 'Kitten admins',
		'Permanent Kitten strategists': 'Kitten strategists'
	};

	EMHU.starterBuildings = [
		['Starter gardening kit', 'Farm'],
		['Starter picks and shovels', 'Mine'],
		['Starter toolbox', 'Factory'],
		['Starter stonks', 'Bank'],
		['Starter prayers', 'Temple'],
		['Starter pointy hat', 'Wizard tower'],
		['Starter hyperdrive', 'Shipment'],
		['Starter philosopher\'s stone', 'Alchemy lab'],
		['Starter cookieverse map', 'Portal'],
		['Starter flux capacitor', 'Time machine'],
		['Starter molecules', 'Antimatter condenser'],
		['Starter photons', 'Prism'],
		['Starter dice set', 'Chancemaker'],
		['Starter kit for starter kits', 'Fractal engine'],
		['Starter {hello world}', 'Javascript console'],
		['Starter multiverse', 'Idleverse']
	];

	Game.registerHook('reincarnate', function() {
		if (EMHU.inert) return;
		if (Game.ascensionMode == 1) return;

		if (Game.Has('Divine savings')) Game.Earn(Game.heavenlyChips);

		var targets = {};
		var setTarget = function(building, n) {
			if (!targets[building] || targets[building] < n) targets[building] = n;
		};

		if (Game.Has('Starter kitchen 2: Electric boogaloo')) setTarget('Grandma', 10);

		for (var i = 0; i < EMHU.starterBuildings.length; i++) {
			var pair = EMHU.starterBuildings[i];
			if (Game.Has(pair[0])) setTarget(pair[1], 10);
		}

		var pack = EMHU.packTarget();
		if (pack > 0) {
			for (var o = 0; o < Game.ObjectsById.length; o++) {
				setTarget(Game.ObjectsById[o].name, pack);
			}
		}

		for (var building in targets) {
			if (Game.Objects[building]) EMHU.topUpTo(Game.Objects[building], targets[building]);
		}

		if (Game.Has('Santa\'s Heavenly Legacy')) {
			EMHU.earnUpgrade('A festive hat');
			Game.santaLevel = Math.max(Game.santaLevel, Game.santaLevels.length - 1);
			EMHU.unlockAll(Game.santaDrops);
			EMHU.unlockUpgrade('Santa\'s dominion');
		}
		if (Game.Has('Silly Wabbit')) EMHU.unlockAll(Game.easterEggs);
		if (Game.Has('Lover\'s Delight')) EMHU.unlockAll(Game.heartDrops);
		if (Game.Has('Horror Story')) EMHU.unlockAll(Game.halloweenDrops);
		if (Game.Has('Rudolph\'s Recipe')) EMHU.unlockAll(Game.reindeerDrops);

		if (Game.Has('Cookie Dragon Egg')) {
			EMHU.earnUpgrade('A crumbly egg');
			EMHU.unlockUpgrade('Dragon cookie');

			var lvl = 0;
			if (Game.Has('Cookie Hatchling')) lvl = 5;
			if (Game.Has('Dragon in Training')) lvl = 15;
			if (Game.Has('Dragon in Baking')) lvl = 25;
			if (Game.Has('Krumblor, The one and only')) lvl = Game.dragonLevels.length - 1;
			Game.dragonLevel = Math.max(Game.dragonLevel, lvl);
		}

		var lumpTiers = ['Magical Lumps I', 'Magical Lumps II', 'Magical Lumps III', 'Magical Lumps IV', 'Magical Lumps V'];
		var lumpsToGain = 0;
		for (var t = 0; t < lumpTiers.length; t++) { if (Game.Has(lumpTiers[t])) lumpsToGain++; }
		if (lumpsToGain > 0) Game.gainLumps(lumpsToGain);

		if (Game.Has('A secret gift from the cat')) {
			for (var k = 0; k < EMHU.baseKittens.length; k++) EMHU.earnUpgrade(EMHU.baseKittens[k]);
			for (var perm in EMHU.permanentKittens) {
				if (Game.Has(perm)) EMHU.earnUpgrade(EMHU.permanentKittens[perm]);
			}
		}
	});

	Game.registerHook('cps', function(cps) {
		if (EMHU.inert) return cps;
		if (Game.ascensionMode == 1) return cps;

		var mult = 1;
		if (Game.Has('Divine gains')) mult += 0.01 * Math.max(0, Game.heavenlyChips);
		if (Game.Has('Divine buildings')) mult += 0.01 * Math.max(0, Game.BuildingsOwned);
		if (Game.Has('Divine unascended gains')) mult += 0.01 * EMHU.pendingPrestige();
		if (Game.Has('Divine lumps')) mult += 0.01 * Math.max(0, Game.lumps);

		var out = cps * mult;
		return isFinite(out) ? out : cps;
	});

//CCSE Check
	if (CCSE.ConfirmGameVersion(EMHU.name, EMHU.version, EMHU.GameVersion)) {
		Game.registerMod(EMHU.id, EMHU);
	}
};

if (!EMHU.isLoaded) {
	if (typeof CCSE !== 'undefined' && CCSE.isLoaded) {
		EMHU.launch();
	} else {
		if (typeof CCSE === 'undefined') var CCSE = {};
		if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(EMHU.launch);
	}
}
