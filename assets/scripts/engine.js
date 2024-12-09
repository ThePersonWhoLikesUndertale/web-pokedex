class Pokemon {
    nationalNumber;
    pokeType;
    pokeSpecies;
    height;
    weight;
    abilities;
    ev;
    catchRate;
    baseFriendship;
    baseXP;
    growthRate;
    /*
    Order of stats:
    1. HP (hp)
    2. Defense (def)
    3. Special Attack (spAtk)
    4. Special Defense (spDef)
    5. Speed (speed)
    */
    stats;
    level;

    constructor(nationalNumber, pokeType, pokeSpecies, height, weight, abilities, ev, catchRate, friendship, xp, growthRate, stats, level) {
        this.nationalNumber = nationalNumber;
        this.pokeType = pokeType;
        this.pokeSpecies = pokeSpecies;
        this.height = height;
        this.weight = weight;
        this.abilities = abilities;
        this.ev = ev;
        this.catchRate = catchRate;
        this.baseFriendship = friendship;
        this.baseXP = xp;
        this.growthRate = growthRate;
        this.stats = stats;
        this.level = level;
    }
}

function initialize() {

}

initialize();