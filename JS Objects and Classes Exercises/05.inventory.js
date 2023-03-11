function inventory(data) {
    let heroesArr = [];

    for (const person of data) {
        let [name, level, items] = person.split(' / ');
        let hero = {
            name,
            level: Number(level),
            items
        };
        heroesArr.push(hero);
    }

    let sortedHeroes = heroesArr
        .sort((heroA, heroB) => {
            return heroA.level - heroB.level;
        });

    for (const hero of sortedHeroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

inventory(
    [
        'Batman / 2 / Banana, Gun',
        'Superman / 18 / Sword',
        'Poppy / 28 / Sentinel, Antara'
        ]
)