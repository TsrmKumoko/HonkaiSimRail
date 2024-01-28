console.log('This is a simulator for Honkai: Star Rail.')
console.log('Author: Tsurumi Kumoko')

/**
 * 属性类
 * @param {number} HP 生命值
 * @param {number} ATK 攻击力
 * @param {number} DEF 防御力
 * @param {number} SPD 速度
 * @param {number} CRITRate 暴击率
 * @param {number} CRITDMG 暴击伤害
 * @param {number} BreakEffect 击破特攻
 * @param {number} OutgoingHealingBoost 治疗量加成
 * @param {number} MaxEnergy 能量上限
 * @param {number} EnergyRegenerationRate 能量恢复效率
 * @param {number} EffectHitRate 效果命中
 * @param {number} EffectRES 效果抵抗
 * @param {Array.<number>} DMGBoost 属性伤害提高
 * @param {Array.<number>} RESBoost 属性抗性提高
 */
function Stats(HP, ATK, DEF, SPD, CRITRate, CRITDMG, BreakEffect, OutgoingHealingBoost, MaxEnergy, EnergyRegenerationRate, EffectHitRate, EffectRES, DMGBoost, RESBoost) {
  this.HP = HP
  this.ATK = ATK
  this.DEF = DEF
  this.SPD = SPD
  this.CRITRate = CRITRate
  this.CRITDMG = CRITDMG
  this.BreakEffect = BreakEffect
  this.OutgoingHealingBoost = OutgoingHealingBoost
  this.MaxEnergy = MaxEnergy
  this.EnergyRegenerationRate = EnergyRegenerationRate
  this.EffectHitRate = EffectHitRate
  this.EffectRES = EffectRES
  this.DMGBoost = DMGBoost
  this.RESBoost = RESBoost
}

const Type = {
  Physical: '物理',
  Fire: '火',
  Ice: '冰',
  Lightning: '雷',
  Wind: '风',
  Quantum: '量子',
  Imaginary: '虚数',
}

const Path = {
  Destruction: '毁灭',
  TheHunt: '巡猎',
  Erudition: '智识',
  Harmony: '同谐',
  Nihility: '虚无',
  Preservation: '存护',
  Abundance: '丰饶',
}

/**
 * 技能类
 * @param {Function} Talent 天赋
 * @param {Function} BasicATK 普攻
 * @param {Function} Skill 战技
 * @param {Function} Ultimate 终结技
 * @param {Function} Technique 秘技
 */
function Ability(Talent, BasicATK, Skill, Ultimate, Technique) {
  this.Talent = Talent
  this.BasicATK = BasicATK
  this.Skill = Skill
  this.Ultimate = Ultimate
  this.Technique = Technique
}

/**
 * 角色类（包括可操作角色和敌方）
 * @param {string} name 名称
 * @param {string} type 伤害属性
 * @param {string} path 角色命途
 * @param {number} lv 角色等级
 * @param {Stats} stats 角色属性
 * @param {Ability} ability 技能
 * @param {number} distance 角色距离下个回合的距离
 */
function Chara(name, type, path, lv, stats, ability, distance = 10000) {
  this.name = name
  this.type = type
  this.path = path
  this.lv = lv
  this.stats = stats
  this.ability = ability
  this.distance = distance
}

let Tingyun = new Chara(
  '停云', Type.Lightning, Path.Harmony, 50, 
  new Stats(787, 429, 329, 112, 0.05, 0.5, 0, 0, 130, 1, 0, 0, [], []),
  new Ability(),
)

let Kafka = new Chara(
  '卡芙卡', Type.Lightning, Path.Nihility, 50,
  new Stats(1238, 705, 498, 100, 0.096, 0.59, 0.258, 0, 120, 1, 0.097, 0.062, [], []),
  new Ability(),
)

