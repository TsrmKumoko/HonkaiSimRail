console.log('This is a simulator for Honkai: Star Rail.')
console.log('Author: Tsurumi Kumoko')

/**
 * 角色类（包括可操作角色和敌方）
 * @param {string} name 名称
 * @param {number} speed 速度
 * @param {Function} passiveSkills 被动技能
 * @param {Array.<Function>} activeSkills 主动技能
 * @param {number} distance 角色距离下个回合的距离
 */
function Chara(name, speed, passiveSkills, activeSkills, distance = 10000) {
  this.name = name
  this.speed = speed
  this.passiveSkills = passiveSkills
  this.activeSkills = activeSkills
  this.distance = distance
}

/**
 * 战斗类，用于仿真一次战斗
 * @param {Array.<Chara>} allies 角色列表
 * @param {Array.<Chara>} enemies 敌人列表
 * @param {number} point 战技点数
 * @param {number} time 时间
 */
function Battle(allies, enemies, point = 3, time = 0) {
  this.allies = allies
  this.enemies = enemies
  this.point = point
  this.time = time
}

Battle.prototype.allCharas = function() {
  return this.allies.concat(this.enemies)
}

Battle.prototype.simulate = function () {
  let tempCount = 0
  while (tempCount <= 10) {
    tempCount += 1
    // 判断下次是谁行动
    let curChara = this.allCharas().reduce((prev, curr) => (prev.distance / prev.speed <= curr.distance / curr.speed) ? prev : curr)
    // 计算推进的时间
    let timeStep = curChara.distance / curChara.speed
    this.time += timeStep
    // 每个角色向前推进
    this.allCharas().forEach((chara) => {
      chara.distance -= timeStep * chara.speed
    })
    // 当前行动角色路程设置为10000
    curChara.distance = 10000
    // 当前角色开始行动
    console.log(curChara.name, this.time)
    // buff判定点A
    // 开始阶段，结算持续伤害
    // 准备阶段，可插入终结技
    // 行动阶段，计算伤害、治疗量等
    // buff判定点B
    // 额外阶段，追加或终结技
  }
}

let testChara1 = new Chara('1', 150)
let testChara2 = new Chara('2', 100)

let battle = new Battle([testChara1, testChara2], [], 3)
battle.simulate()

