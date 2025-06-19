const awakenings = [
  {
    'id': 'AdrenalineRush',
    'image': '/i/awakening/AdrenalineRush.png',
    'name': {
      en: 'Adrenaline Rush'
    },
    'description': {
      en: "{skill:Ability} {aqua:cooldowns} {green:reduced} by {yellow:1s}.\n \n{red:Knocking out} an enemy player {green:increases} {pink:speed} by {green:+40%} for {yellow:8s} and {green:reduces} current {aqua:cooldowns} by {yellow:10s}."
    }
  },
  {
    'id': 'Aerials',
    'image': '/i/awakening/Aerials.png',
    'name': {
      en: 'Aerials'
    },
    'description': {
      en: '{orange:DASH} range, {orange:BLINK} range, and {orange:HASTE} effects {green:increased +80%}.\n \n{orange:PROJECTILES} gain {green:+30%} travel or cast range.'
    }
  },
  {
    'id': 'BigFish',
    'image': '/i/awakening/BigFish.png',
    'name': {
      en: 'Big Fish'
    },
    'description': {
      en: 'Gain {green:+30% Size} and {green:+200 max health}.'
    }
  },
  {
    'id': 'BuiltDifferent',
    'image': '/i/awakening/BuiltDifferent.png',
    'name': {
      en: 'Built Different'
    },
    'description': {
      en: 'Gain {green:+30%} Size.\n \nYour {orange:IMPACT} abilities hit {green:+5%} harder. {gray:(}{green:+1%} {gray:on} {Core:Core}{gray:).}'
    }
  },
  {
    'id': 'BulkUp',
    'image': '/i/awakening/BulkUp.png',
    'name': {
      en: 'Bulk Up'
    },
    'description': {
      en: 'Gain {green:+350} {green:max health}.\n \nGain an additional {green:+1.75} Power for every {yellow:100} {green:max health} you have.'
    }
  },
  {
    'id': 'CastToLast',
    'image': '/i/awakening/CastToLast.png',
    'name': {
      en: 'Cast To Last'
    },
    'description': {
      en: '{orange:Ability} {pink:BUFFS} and {pink:DEBUFFS} you cast last {green:+50%} longer.\n \n{orange:CREATIONS} last {green:+40%} longer.'
    }
  },
  {
    'id': 'Chronoboost',
    'image': '/i/awakening/Chronoboost.png',
    'name': {
      en: 'Chronoboost'
    },
    'description': {
      en: '{orange:DASH} range, {orange:BLINK} range, and {orange:HASTE} effects {green:increased +75%}.\n \nAbility {pink:BUFFS} and {pink:DEBUFFS} last {green:+22.5%} longer.'
    }
  },
  {
    'id': 'DeadEye',
    'image': '/i/awakening/DeadEye.png',
    'name': {
      en: 'Deadeye'
    },
    'description': {
      en: '{orange:Attack} {green:+32.5%} harder {gray:(}{green:+6.5%} {gray:to} {Core:Core}{gray:)} against targets at {yellow:550+} range.'
    }
  },
  {
    'id': 'ExtraSpecial',
    'image': '/i/awakening/ExtraSpecial.png',
    'name': {
      en: 'Extra Special'
    },
    'description': {
      en: '{skill:SPECIAL} {aqua:cooldown} reduced by {green:-30%}.\n \nEach round, its {aqua:cooldown} is {green:reset}.'
    }
  },
  {
    'id': 'GlassCannon',
    'image': '/i/awakening/GlassCannon.png',
    'name': {
      en: 'Glass Cannon'
    },
    'description': {
      en: 'Gain {green:+5} Power and {green:+3%} {pink:Speed} every {yellow:2.5s}.\n{gray:(up to} {green:+30} {gray:Power and }{green:+18%} {gray:Speed).}\n \nGetting hit {red:resets} the {yellow:timer}.'
    }
  },
  {
    'id': 'HotShot',
    'image': '/i/awakening/HotShot.png',
    'name': {
      en: 'Hotshot'
    },
    'description': {
      en: '{orange:Abilities} hit the {Core:Core} {green:+13% harder} and refund {green:30%} of the ability\'s {aqua:cooldown} on hit.\n \nApplies once per {orange:cast}, refunding a max of {yellow:3s}.'
    }
  },
  {
    'id': 'ImpactSpecialist',
    'image': '/i/awakening/ImpactSpecialist.png',
    'name': {
      en: 'Specialized Training'
    },
    'description': {
      en: '{skill:SPECIAL} hits {green:+40%} harder {gray:(}{green:+8%} {gray:to} {Core:Core}{gray:)} and healing is {green:+40%} more effective.'
    }
  },
  {
    'id': 'MightOfColossus',
    'image': '/i/awakening/MightOfTheColossus.png',
    'name': {
      en: 'Might of The Colossus'
    },
    'description': {
      en: "Gain {green:+15%} Size.\n \nAdditionally, gain {green:+0.65} Power for each {aqua:1% bonus Size} you have.\n{gray:(Grants} {green:+11.25} {gray:Power for just having this Awakening.)}"
    }
  },
  {
    'id': 'MissilePropulsion',
    'image': '/i/awakening/MissilePropulsion.png',
    'name': {
      en: 'Missile Propulsion'
    },
    'description': {
      en: '{orange:PROJECTILES} gain {green:+70%} travel or cast range and hit {green:+20%} harder {gray:(}{green:+4%} {gray:to} {Core:Core}{gray:)}.'
    }
  },
  {
    'id': 'MomentumBoots',
    'image': '/i/awakening/MomentumBoots.png',
    'name': {
      en: 'Momentum Boots'
    },
    'description': {
      en: ''
    }
  },
  {
    'id': 'Monumentalist',
    'image': '/i/awakening/Monumentalist.png',
    'name': {
      en: 'Monumentalist'
    },
    'description': {
      en: '{orange:CREATIONS} gain {green:+85%} size and hit {green:+20%} harder. {gray:(}{green:+4%} {gray:to} {Core:Core}{gray:)}'
    }
  },
  {
    'id': 'OneTwoPunch',
    'image': '/i/awakening/OneTwoPunch.png',
    'name': {
      en: 'One-Two Punch'
    },
    'description': {
      en: '{orange:Attack} {green:+28% harder} {gray:(}{green:+14%} {gray:to} {Core:CORE}{gray:)} against targets you\'ve hit within {time:2.5s}.'
    }
  },
  {
    'id': 'OrbDancer',
    'image': '/i/awakening/OrbDancer.png',
    'name': {
      en: 'Orb Dancer'
    },
    'description': {
      en: "Collecting a {aqua:Power Orb} {green:increases} {pink:Speed} by {green:+30%} for {yellow:4.5s}.\n\nAfter collecting {yellow:5} orbs without being {red:KO'd}, this effect is {green:increased} to {green:+55%}"
    }
  },
  {
    'id': 'OrbPonderer',
    'image': '/i/awakening/OrbPonderer.png',
    'name': {
      en: 'Orb Ponderer'
    },
    'description': {
      en: "Collecting a {aqua:Power Orb} {green:reduces} {pink:Active Cooldowns} by {green:-17.5%}.\n\nAfter collecting {yellow:5} orbs without being {red:KO'd}, this effect is {green:increased} to {green:-30%}"
    }
  },
  {
    'id': 'OrbSharer',
    'image': '/i/awakening/OrbSharer.png',
    'name': {
      en: 'Orb Replicator'
    },
    'description': {
      en: '{green:75% of benefits from Power Orbs} you collect is also {pink:granted to allies}.'
    }
  },
  {
    'id': 'PeakPerformance',
    'image': '/i/awakening/PeakPerformance.png',
    'name': {
      en: 'Peak Performance'
    },
    'description': {
      en: 'Gain {green:+350} {green:max health}.\n \nGain an additional {green:+0.55%} {pink:Speed} for every {yellow:100} {green:max health} you have.'
    }
  },
  {
    'id': 'PerfectForm',
    'image': '/i/awakening/PerfectForm.png',
    'name': {
      en: 'Perfect Form'
    },
    'description': {
      en: 'Hits {pink:reduce other ability cooldowns} by {green:-12%}, up to {time:1.5s} per hit ({green:-4%/0.5s for LIGHT hits}).'
    }
  },
  {
    'id': 'PrimeTime',
    'image': '/i/awakening/PrimeTime.png',
    'name': {
      en: 'Primetime'
    },
    'description': {
      en: '{skill:PRIMARY} gains {green:+1 charge} and hits {red:5% weaker}.\n{gray:(}{red:-1%} {gray:to the} {Core:Core}{gray:)}'
    }
  },
  {
    'id': 'PrizeFighter',
    'image': '/i/awakening/PrizeFighter.png',
    'name': {
      en: 'Prize Fighter'
    },
    'description': {
      en: 'Begin each set with {green:1} {pink:Prize Fighter} stack, granting {green:+23} Power.\n \nTakedowns grant {green:+1} {pink:Prize Fighter} stack {gray:(max 3 stacks)}. {red:Getting K.O.\'d removes a stack.}\n \nStacks {red:reset} between sets.'
    }
  },
  {
    'id': 'QuickStrike',
    'image': '/i/awakening/QuickStrike.png',
    'name': {
      en: 'Quick Strike'
    },
    'description': {
      en: '{skill:STRIKE} {aqua:cooldown} {green:reduced} by {green:-15%}.\n{skill:STRIKE} hits grant {green:+2} additional {green:energy}.'
    }
  },
  {
    'id': 'Rampage',
    'image': '/i/awakening/Rampage.png',
    'name': {
      en: 'Rampage'
    },
    'description': {
      en: "Gain {green:+7.5%} Size. Whenever you {red:destroy} or {yellow:assist} in {red:destroying} an enemy barrier, gain {green:+7.5%} more Size.\n \n{gray:Additional size is} {red:lost} {gray:when} {red:KO'd}{gray:, and between sets.}"
    }
  },
  {
    'id': 'RapidFire',
    'image': '/i/awakening/RapidFire.png',
    'name': {
      en: 'Rapid Fire'
    },
    'description': {
      en: '{skill:PRIMARY} {aqua:cooldown} {green:reduced} by {green:-33%}.'
    }
  },
  {
    'id': 'ShockAndAwe',
    'image': '/i/awakening/ShockAndAwe.png',
    'name': {
      en: 'Heavy Impact'
    },
    'description': {
      en: '{orange:IMPACTS} hit {green:+20%} harder {gray:(}{green:+4%} {gray:on} {Core:Core}{gray:).}\n \nWhenever you {orange:attack} {green:2} or more targets with a single {orange:ability}, its {aqua:cooldown} is {green:reduced} by {green:-30%} {gray:(up to} {yellow:3s}{gray:)}.'
    }
  },
  {
    'id': 'SparkofAgility',
    'image': '/i/awakening/SparkofAgility.png',
    'name': {
      en: 'Spark of Agility'
    },
    'description': {
      en: 'Grants {green:+1} {spark:SPARK}.\n \nGain {green:+1%} {pink:Speed}, plus {green:+5%} per {spark:SPARK} you have.'
    }
  },
  {
    'id': 'SparkofFocus',
    'image': '/i/awakening/SparkofFocus.png',
    'name': {
      en: 'Spark of Focus'
    },
    'description': {
      en: 'Grants {green:+1} {spark:SPARK}.\n \nGain {green:+4} {aqua:Cooldown Rate}, additionally {green:+12} per {spark:SPARK} you have.'
    }
  },
  {
    'id': 'SparkofResilience',
    'image': '/i/awakening/SparkofResilience.png',
    'name': {
      en: 'Spark of Resilience'
    },
    'description': {
      en: 'Grants {green:+1} {spark:SPARK}.\n \nGain {green:+100} max {green:health}, additionally {green:+350} per {spark:SPARK} you have.'
    }
  },
  {
    'id': 'SparkofStrength',
    'image': '/i/awakening/SparkofStrength.png',
    'name': {
      en: 'Spark of Strength'
    },
    'description': {
      en: 'Grants {green:+1} {spark:SPARK}.\n \nGain {green:+4} Power, additionally {green:+20} per {spark:SPARK} you have.'
    }
  },
  {
    'id': 'StacksOnStacks',
    'image': '/i/awakening/StacksOnStacks.png',
    'name': {
      en: 'Stacks on Stacks'
    },
    'description': {
      en: "Hits grant {green:+5} {pink:Speed Stacks}.\n \nEach {pink:Stack} grants {green:+0.075%} Speed.\n{gray:(+22.5% speed at max)}\n \nAt {yellow:150} {pink:Stacks}, the {pink:speed} per {pink:Stack} {green:doubles}.\n \n{pink:Stacks} {red:reset} when {red:KO'd} and between sets."
    }
  },
  {
    'id': 'StaggerSwagger',
    'image': '/i/awakening/StaggerSwagger.png',
    'name': {
      en: 'Stagger Swagger'
    },
    'description': {
      en: 'Gain {green:+10%} Speed.\n \nWhile below {red:50% health}, this effect {green:increases} to {green:+20%} and you {green:heal +150 HP/s}, including while in the {red:Staggered} state.'
    }
  },
  {
    'id': 'Stinger',
    'image': '/i/awakening/Stinger.png',
    'name': {
      en: 'Stinger'
    },
    'description': {
      en: "{orange:NORMAL hits} deal {green:bonus damage} equal to {green:9%} of enemies' {green:max health} over {yellow:4s}.\n \n{orange:LIGHT hits} deal {green:bonus damage} equal to {green:3%} of enemies' {green:max health} over {yellow:2.5s}.\n \n{gray:(No longer stacks if multiple players apply it to the same target.)}"
    }
  },
  {
    'id': 'SuperSurge',
    'image': '/i/awakening/SuperSurge.png',
    'name': {
      en: 'Super Surge'
    },
    'description': {
      en: '{orange:DASH} {pink:range}, {orange:BLINK} {pink:range}, and {pink:HASTE} {green:effects increased 75%}. These abilities {damage:hit} {green:30%} harder ({green:6%} to {core:Core}).'
    }
  },
  {
    'id': 'TempoSwings',
    'image': '/i/awakening/TempoSwings.png',
    'name': {
      en: 'Tempo Swing'
    },
    'description': {
      en: 'Hitting anything {heal:heals} you {green:for 6%} of your {heal:max Stagger} ({green:2%} for LIGHT hits) and deals that amount as {damage:damage} to the target hit.'
    }
  },
  {
    'id': 'TimelessCreator',
    'image': '/i/awakening/TimelessCreator.png',
    'name': {
      en: 'Timeless Creator'
    },
    'description': {
      en: '{orange:CREATIONS} gain {green:+75%} duration and {green: +40%} size.'
    }
  },
  {
    'id': 'TwinDrive',
    'image': '/i/awakening/TwinDrive.png',
    'name': {
      en: 'Twin Drive'
    },
    'description': {
      en: '{skill:SECONDARY} gains {green:+1 charge} and has a {red:+2.5%} {red:increased cooldown}.'
    }
  }
  ,
  {
    'id': 'Unstoppable',
    'image': '/i/awakening/Unstoppable.png',
    'name': {
      en: 'Unstoppable'
    },
    'description': {
      en: 'Gain a {heal:shield} that protects you from {green:100%} of the damage and {green:100%} knockback from the {aqua:first hit} you take.\n \nThe {heal:shield} recharges at the start of each round and after {yellow:6.5s} of not getting hit.'
    }
  }
  ,
  {
    'id': 'Egoist',
    'image': '/i/awakening/Egoist.png',
    'name': {
      en: 'Egoist'
    },
    'description': {
      en: '{skill:Evades} refund {energy:12 Energy} ({green:25 from Energy Bursts}). Reaching max Energy grants {pink:80% Speed} for {time:8s}, reducing to {pink:12% speed} when you remain at max Energy. '
    }
  },
  {
    'id': 'FireUp',
    'image': '/i/awakening/FireUp.png',
    'name': {
      en: 'Fire Up'
    },
    'description': {
      en: 'Gain {energy:10 Energy} on round start. Casting {skill:Energy Burst} restores {energy:25% of max Energy} to other allies and {pink:Speeds up your whole team} by {green:40%} for {time:5s}. '
    }
  },
  {
    'id': 'Catalyst',
    'image': '/i/awakening/Catalyst.png',
    'name': {
      en: 'Catalyst'
    },
    'description': {
      en: 'Gain {green:+15%} more {orange:Energy} from dealing {red:damage}.\n\nTaking {red:damage} generates {green:+4.5} {orange:Energy}.\n{gray:(}{green:+1.5} {gray:for} {orange:LIGHT} {gray:hits).}'
    }
  },
  {
    'id': 'Reverberation',
    'image': '/i/awakening/Reverberation.png',
    'name': {
      en: 'Reverberation'
    },
    'description': {
      en: 'Gain {green:+350} {green:max health}.\n \nGain an additional {green:+1.25} {aqua:Cooldown Rate} for every {yellow:100} {green:max health} you have.'
    }
  }, ////////////////////////////
  {
    'id': 'AmongTitans',
    'image': '/i/awakening/AmongTitans.png',
    'name': {
      en: 'Among Titans'
    },
    'description': {
      en: '{red:Lose 30%} Size and gain {green:+12%} Speed.\n \nAdditionally, your teammates gain {green:+15%} Size.'
    }
  },
  {
    'id': 'Demolitionist',
    'image': '/i/awakening/Demolitionist.png',
    'name': {
      en: 'Demolitionist'
    },
    'description': {
      en: 'Gain {green:+25%} Size.\n \nWhenever you {red:destroy} or {yellow:assist} in {red:destroying} an enemy barrier, all your {aqua:cooldowns} are {green:reduced} by {green:3s}.'
    }
  },
  {
    'id': 'ExplosiveEntrance',
    'image': '/i/awakening/ExplosiveEntrance.png',
    'name': {
      en: 'Explosive Entrance'
    },
    'description': {
      en: '{orange:DASH} range, {orange:BLINK} range, and {orange:HASTE} effects/range {green:increased +70%}.\n \nYour {orange:IMPACT} abilities hit {green:+12.5%} harder.\n{gray:(}{green:+2.5%} {gray:on} {Core:Core}{gray:)}'
    }
  },
  {
    'id': 'FightOrFlight',
    'image': '/i/awakening/FightOrFlight.png',
    'name': {
      en: 'Fight Or Flight'
    },
    'description': {
      en: 'Gain {green:+17.5%} {pink:Speed} for {yellow:1.75s} whenever you hit something or get hit.\n \nRefresh your {skill:SECONDARY} whenever you {red:stagger} an {red:enemy} or become {red:staggered}.'
    }
  },
  {
    'id': 'KnifesEdge',
    'image': '/i/awakening/KnifesEdge.png',
    'name': {
      en: "Knife's Edge"
    },
    'description': {
      en: "Gain {green:+30} Power and {green:+30%} {pink:Speed} whenever you're within {yellow:400 range} of the {purple:Arena's Edge}.\n{gray:(The hole in Ai.Mi\'s App counts)}"
    }
  },
  {
    'id': 'ReptileRemedy',
    'image': '/i/awakening/ClarionCorpRegenerator.png',
    'name': {
      en: 'Reptile Remedy'
    },
    'description': {
      en: "Gain {green:+400} health.\n \nEach time you {skill:STRIKE} the {Core:Core}, {green:heal} for {green:+5% HP/s} for {yellow:4s}."
    }
  },
  {
    'id': 'PocketPolly',
    'image': '/i/awakening/PocketPolly.png',
    'name': {
      en: 'Recovery Drone'
    },
    'description': {
      en: "Gain {green:+25%} size.\n \nThe first time {aqua:each set} that you\'re {red:KO\'d}, {green:prevent it}."
    }
  },
  {
    'id': 'SiegeMachine',
    'image': '/i/awakening/SiegeMachine.png',
    'name': {
      en: 'Siege Machine'
    },
    'description': {
      en: '{orange:PROJECTILES} gain {green:+30%} travel or cast range.\n \n{orange:CREATIONS} gain {green:+30%} duration and hit {green:+15%} harder. {gray:(}{green:+3%} {gray:to} {Core:Core}{gray:)}'
    }
  },
  {
    'id': 'SparkofLeadership',
    'image': '/i/awakening/SparkofLeadership.png',
    'name': {
      en: 'Spark of Leadership'
    },
    'description': {
      en: 'Grants {green:+1} {spark:SPARK}.\n \nYour {pink:teammates} gain {green:30%} of your {spark:SPARK} effects.\n \nAdditionally, you gain {green:+4} {aqua:Cooldown Rate}, {green:+150 health}, {green:+6} {aqua:Power}, and {green:+1%} {pink:speed}.'
    }
  },
  {
    'id': 'TeamPlayer',
    'image': '/i/awakening/TeamPlayer.png',
    'name': {
      en: 'Team Player'
    },
    'description': {
      en: '{skill:STRIKE} hits the core {green:+22.5% harder} when aiming towards a {pink:teammate}.\n \nIf that {pink:teammate} {skill:STRIKES} the {Core:core} within {yellow:1.5s}, they will hit the {Core:core} {green:+20% harder}.\n \nIf they too {skill:STRIKE} towards another {pink:teammate}, they can transfer this {pink:buff}.'
    }
  }
]

export default awakenings