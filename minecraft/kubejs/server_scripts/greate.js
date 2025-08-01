ServerEvents.recipes((event) => {
    const greg = event.recipes.gtceu;
    //greate replacements
    event.replaceInput(
        { input: 'create:shaft' },
        'create:shaft',
        'greate:andesite_alloy_shaft'
    );
    event.replaceInput(
        { input: 'create:cogwheel' },
        'create:cogwheel',
        'greate:andesite_alloy_cogwheel'
    );
    event.replaceInput(
        { input: 'create:large_cogwheel' },
        'create:large_cogwheel',
        'greate:andesite_alloy_large_cogwheel'
    );
    event.replaceInput(
        { input: 'create:gearbox' },
        'create:gearbox',
        'greate:andesite_alloy_gearbox'
    );
    event.replaceInput(
        { input: 'create:whisk' },
        'create:whisk',
        'greate:andesite_alloy_whisk'
    );
    event.replaceInput(
        { input: 'create:belt_connector' },
        'create:belt_connector',
        'greate:rubber_belt_connector'
    );
    //andesite alloy
    /*
    event.remove({ id: 'create:crafting/materials/andesite_alloy' });
    event.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc' });
    event.remove({ id: 'create:mixing/andesite_alloy' });
    event.remove({ id: 'create:mixing/andesite_alloy_from_zinc' });
    */
    event.remove({ id: 'gtceu:shaped/wrought_iron_alloy' });
    event.shaped('create:andesite_alloy', [
            'ABB', 
        ], {
            A: 'gtceu:wrought_iron_ingot', 
            B: 'minecraft:andesite'
    });
    event.remove({ id: 'gtceu:shaped/steel_alloy' });
    event.shaped('gtceu:steel_alloy', [
            'ABB', 
        ], {
            A: 'gtceu:steel_ingot', 
            B: 'minecraft:andesite'
    });
    event.remove({ id: 'gtceu:shaped/aluminium_alloy' });
    event.shaped('gtceu:aluminium_alloy', [
            'ABB', 
        ], {
            A: 'gtceu:aluminium_ingot', 
            B: 'minecraft:andesite'
    });
    event.remove({ id: 'gtceu:shaped/stainless_steel_alloy' });
    event.shaped('gtceu:stainless_steel_alloy', [
            'ABB', 
        ], {
            A: 'gtceu:stainless_steel_ingot', 
            B: 'minecraft:andesite'
    });
    event.remove({ id: 'gtceu:shaped/titanium_alloy' });
    event.shaped('gtceu:titanium_alloy', [
            'ABB', 
        ], {
            A: 'gtceu:titanium_ingot', 
            B: 'minecraft:andesite'
    });
    event.remove({ id: 'gtceu:shaped/tungsten_steel_alloy' });
    event.shaped('gtceu:tungsten_steel_alloy', [
            'ABB', 
        ], {
            A: 'gtceu:tungsten_steel_ingot', 
            B: 'minecraft:andesite'
    });
    event.remove({ id: 'gtceu:shaped/rhodium_plated_palladium_alloy' });
    event.shaped('gtceu:rhodium_plated_palladium_alloy', [
            'ABB', 
        ], {
            A: 'gtceu:rhodium_plated_palladium_ingot', 
            B: 'minecraft:andesite'
    });
    event.remove({ id: 'gtceu:shaped/naquadah_alloy_alloy' });
    event.shaped('gtceu:naquadah_alloy_alloy', [
            'ABB', 
        ], {
            A: 'gtceu:naquadah_alloy_ingot', 
            B: 'minecraft:andesite'
    });
    event.remove({ id: 'gtceu:shaped/neutronium_alloy' });
    event.shaped('gtceu:neutronium_alloy', [
            'ABB', 
        ], {
            A: 'gtceu:neutronium_ingot', 
            B: 'minecraft:andesite'
    });
    //create machines
    event.remove({ id: 'greate:shaped/andesite_alloy_mechanical_press' });
    event.shaped('greate:andesite_alloy_mechanical_press', [
            'A',
            'B',
            'C'
        ], {
            A: 'greate:andesite_alloy_shaft', 
            B: 'create:andesite_casing'
    });
});