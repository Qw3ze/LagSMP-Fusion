ServerEvents.recipes((event) => {
    const greg = event.recipes.gtceu;

    //andesite alloy
    event.remove({ id: 'create:crafting/materials/andesite_alloy' });
    event.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc' });
    event.remove({ id: 'create:mixing/andesite_alloy' });
    event.remove({ id: 'create:mixing/andesite_alloy_from_zinc' });
    event.shaped('create:andesite_alloy', [
            'AB', 
            'BA' 
        ], {
            A: '#kubejs:andesite_alloy_material', 
            B: 'minecraft:andesite'
    });
    event.recipes.create.mixing('create:andesite_alloy', ['minecraft:andesite', '#kubejs:andesite_alloy_material']);

    //circuit stuff
    event.remove({ id: 'create:crafting/materials/electron_tube' });
    event.shaped('create:electron_tube', [
            'A', 
            'B',
            'C'  
        ], {
            A: 'create:polished_rose_quartz', 
            B: 'gtceu:iron_plate',
            C: 'gtceu:iron_bolt'   
    });
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