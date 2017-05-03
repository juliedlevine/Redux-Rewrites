const INITIAL_STATE = {
    dragon_health: 20,
    hero_health: 10,
    message: '',
    game_over: false
}

function reducer(state = INITIAL_STATE, action) {

    // Damage Dragon
    if (action.type === 'damage_dragon') {
        let newDragonHealth = state.dragon_health - 5;
        if (newDragonHealth <= 0) {
            return Object.assign({}, state, {
                message: 'Dragon dies, hero wins.',
                game_over: true,
                dragon_health: newDragonHealth
            })
        } else {
            return Object.assign({}, state, {
                dragon_health: newDragonHealth
            })
        }

    // Damage Hero
    } else if (action.type === 'damage_hero') {
        let newHeroHealth = state.hero_health - 5;
        if (newHeroHealth <= 0) {
            return Object.assign({}, state, {
                message: 'Hero dies, Dragon wins.',
                game_over: true,
                hero_health: newHeroHealth
            })
        } else {
            return Object.assign({}, state, {
                hero_health: newHeroHealth
            })
        }

    // Flight button click
    } else if (action.type === 'flight') {
        return Object.assign({}, state, {
            hero_health: state.hero_health + 2
        })

    // Play Again button click
    } else if (action.type === 'play_again') {
        return INITIAL_STATE;

    // Catch all
    } else {
        return state;
    }
}

export default reducer;
