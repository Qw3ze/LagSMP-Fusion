ServerEvents.tags('item', event => {
    /*
    event.add('kubejs:andesite_alloy_material', 'minecraft:iron_nugget');
    event.add('kubejs:andesite_alloy_material', 'gtceu:zinc_nugget');
    event.add('kubejs:andesite_alloy_material', 'gtceu:tin_nugget');
    event.add('kubejs:andesite_alloy_material', 'gtceu:silver_nugget');
    */
    event.add('gtceu:circuits/ulv', 'create:electron_tube');
    
    event.remove('forge:raw_materials/uranium', 'alexscaves:uranium');
    
    event.remove('forge:storage_blocks/neodymium', 'alexscaves:block_of_scarlet_neodymium');
    event.remove('forge:storage_blocks/neodymium', 'alexscaves:block_of_azure_neodymium');
});