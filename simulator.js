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

Battle.prototype.allCharas = function () {
  return this.allies.concat(this.enemies)
}

Battle.prototype.simulate = function () {
  let tempCount = 0
  while (tempCount <= 10) {
    tempCount += 1
    // 判断下次是谁行动
    let curChara = this.allCharas().reduce((prev, curr) => (prev.distance / prev.stats.SPD <= curr.distance / curr.stats.SPD) ? prev : curr)
    // 计算推进的时间
    let timeStep = curChara.distance / curChara.stats.SPD
    this.time += timeStep
    // 每个角色向前推进
    this.allCharas().forEach((chara) => {
      chara.distance -= timeStep * chara.stats.SPD
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

let battle = new Battle([Tingyun, Kafka], [], 3)
battle.simulate()

