ServerEvents.recipes((event) => {
    const greg = event.recipes.gtceu;
    //easier deployer
    event.shaped('kubejs:rubber_hand', [
            ' A ', 
            'ABA',
            ' C '
        ], {
            A: 'gtceu:rubber_plate', 
            B: 'gtceu:rubber_ingot',
            C: 'create:andesite_alloy'   
    });
    event.replaceInput(
    { input: 'create:brass_hand' },
        'create:brass_hand',
        '#kubejs:deployer_hands'
    );
    //circuit stuff
    event.remove({ output: 'create:electron_tube' });
    event.shaped('create:electron_tube', [
            'A', 
            'B',
            'C'
        ], {
            A: 'create:polished_rose_quartz', 
            B: 'gtceu:iron_plate',
            C: 'gtceu:iron_bolt'   
    });
    greg
    .assembler("electron_tube")
    .itemInputs(
        'create:polished_rose_quartz',
        'gtceu:iron_plate',
        'gtceu:iron_bolt')
    .itemOutputs("create:electron_tube")
    .duration(20)
    .EUt(8);
    event.replaceInput(
        { input: 'create:electron_tube' },
        'create:electron_tube',
        '#gtceu:circuits/ulv'
    );
    event.replaceInput(
        { output: 'gtceu:basic_electronic_circuit' },
        'gtceu:vacuum_tube',
        '#gtceu:circuits/ulv'
    );
    //yummy uranium thing
    event.remove({ input:'crowns:uranium_ingot' });
    event.remove({ input:'crowns:fuel_assembly' });
    event.shaped('crowns:fuel_assembly', [
            'AAA', 
            'ABA',
            'AAA'  
        ], {
            A: 'gtceu:uranium_ingot', 
            B: 'gtceu:stainless_steel_ingot'
    });
});