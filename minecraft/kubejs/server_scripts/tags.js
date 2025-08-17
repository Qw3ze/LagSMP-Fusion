ServerEvents.tags('item', event => {
    event.add('kubejs:andesite_alloy_material', 'minecraft:iron_nugget');
    event.add('kubejs:andesite_alloy_material', 'gtceu:zinc_nugget');
    event.add('kubejs:andesite_alloy_material', 'gtceu:tin_nugget');
    event.add('kubejs:andesite_alloy_material', 'gtceu:silver_nugget');
    
    event.add('gtceu:circuits/ulv', 'create:electron_tube');

    event.add('kubejs:reusable_discs', '#minecraft:music_discs');
    event.remove('kubejs:reusable_discs', 'lagsmp_discs:cassette_tape');
    event.remove('kubejs:reusable_discs', 'lagsmp_discs:azure_cassette_tape');
    event.remove('kubejs:reusable_discs', 'lagsmp_discs:monochrome_cassette_tape');
    event.remove('kubejs:reusable_discs', 'lagsmp_discs:corrupted_cassette_tape');
    event.remove('kubejs:reusable_discs', 'lagsmp_discs:golden_cassette_tape');
    event.remove('kubejs:reusable_discs', 'lagsmp_discs:incandescent_music_disc');
    event.remove('kubejs:reusable_discs', 'lagsmp_discs:music_tire');
    event.remove('kubejs:reusable_discs', 'lagsmp_discs:golden_music_tire');
    event.remove('kubejs:reusable_discs', 'supplementaries:pancake');
    
    event.remove('forge:raw_materials/uranium', 'alexscaves:uranium');
    
    event.remove('forge:storage_blocks/neodymium', 'alexscaves:block_of_scarlet_neodymium');
    event.remove('forge:storage_blocks/neodymium', 'alexscaves:block_of_azure_neodymium');
});