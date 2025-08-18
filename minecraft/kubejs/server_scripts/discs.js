ServerEvents.recipes((event) => {
    const greg = event.recipes.gtceu;
    event.remove({ mod: "lagsmp_discs" });

    //etched
    event.remove({ id: "etched:blank_music_disc" });
    event.shaped('etched:blank_music_disc', [
            'BAB',
            'ACA',
            'BAB'
        ], {
            A: 'gtceu:polyethylene_ingot', 
            B: 'gtceu:polyethylene_plate',
            C: 'minecraft:paper'
    });
    event.recipes.create.sandpaper_polishing('etched:blank_music_disc', '#kubejs:reuseable_discs');
    event.remove({ id: "etched:music_label" });
    event.shaped('etched:music_label', [
            ' A ',
            'ABA',
            ' A '
        ], {
            A: 'minecraft:paper', 
            B: 'minecraft:name_tag'
    });
    event.remove({ id: "gtceu:assembler/name_tag" });
    greg
    .assembler("name_tag_gaming")
    .itemInputs('minecraft:string', 'create:cardboard')
    .itemOutputs("minecraft:name_tag")
    .duration(100)
    .EUt(8);

    event.remove({ id: "etched:radio" });
    event.shaped('etched:radio', [
            ' D ',
            'CBC',
            'AAA'
        ], {
            A: '#minecraft:planks', 
            B: 'minecraft:jukebox',
            C: '#gtceu:circuits/ulv',
            D: 'minecraft:lightning_rod'
    });
    event.remove({ id: "etched:boombox" });
    event.shaped('etched:boombox', [
            'ADA',
            'CBC',
            'AAA'
        ], {
            A: 'gtceu:wrought_iron_plate', 
            B: 'etched:album_jukebox',
            C: '#gtceu:circuits/ulv',
            D: 'gtceu:wrought_iron_rod'
    });
    event.remove({ id: "etched:album_jukebox" });
    event.shaped('etched:album_jukebox', [
            'AAA',
            'CBC',
            'ADA'
        ], {
            A: '#minecraft:planks', 
            B: 'minecraft:jukebox',
            C: 'minecraft:redstone',
            D: '#forge:chests/wooden'
    });
    //la la la lava!!! chi chi chi chicken!!!
    greg
    .mixer("chicken_jockey")
    .itemInputs(
        'etched:blank_music_disc',
        '16x minecraft:chicken')
    .inputFluids(Fluid.of('tconstruct:blazing_blood', 1000))
    .itemOutputs("lagsmp_discs:lava_chicken_music_disc")
    .duration(500)
    .EUt(8);
    greg
    .mixer("ghast_gaming")
    .itemInputs(
        'etched:blank_music_disc',
        '4x minecraft:ghast_tear')
    .inputFluids(Fluid.of('minecraft:water', 1000))
    .itemOutputs("lagsmp_discs:tears_music_disc")
    .duration(500)
    .EUt(8);
    //steel series (not the brand)
    greg
    .cutter("steel_music_disc")
    .itemInputs('gtceu:steel_block')
    .itemOutputs("lagsmp_discs:steel_music_disc")
    .circuit(32)
    .duration(1000)
    .EUt(32);
    greg
    .cutter("stainless_steel_music_disc")
    .itemInputs('gtceu:stainless_steel_block')
    .itemOutputs("lagsmp_discs:stainless_steel_music_disc")
    .circuit(32)
    .duration(2000)
    .EUt(512);
    greg
    .cutter("tungsten_steel_music_disc")
    .itemInputs('gtceu:tungsten_steel_block')
    .itemOutputs("lagsmp_discs:tungsten_steel_music_disc")
    .circuit(32)
    .duration(4000)
    .EUt(8192);
    //driving in my car!!!
    event.recipes.create.sequenced_assembly("lagsmp_discs:golden_music_tire", "lagsmp_discs:music_tire", [event.recipes.create.deploying('kubejs:incomplete_golden_music_tire', ['kubejs:incomplete_golden_music_tire', 'gtceu:rubber_block']), event.recipes.create.deploying('kubejs:incomplete_golden_music_tire', ['kubejs:incomplete_golden_music_tire', 'minecraft:gold_block']), event.recipes.create.deploying('kubejs:incomplete_golden_music_tire', ['kubejs:incomplete_golden_music_tire', 'minecraft:gold_block'])]).transitionalItem('kubejs:incomplete_golden_music_tire').loops(10);
    //5:3 polyrhythm gaming
    event.recipes.create.sequenced_assembly("lagsmp_discs:golden_music_tire", "lagsmp_discs:music_tire", [event.recipes.create.deploying('kubejs:incomplete_golden_cassette_tape', ['kubejs:incomplete_golden_cassette_tape', 'gtceu:data_stick']), event.recipes.create.deploying('kubejs:incomplete_golden_cassette_tape', ['kubejs:incomplete_golden_cassette_tape', 'minecraft:gold_block']), event.recipes.create.deploying('kubejs:incomplete_golden_cassette_tape', ['kubejs:incomplete_golden_cassette_tape', 'minecraft:gold_block'])]).transitionalItem('kubejs:incomplete_golden_cassette_tape').loops(10);
});

LootJS.modifiers((event) => {
    //cassette tapes (why are there so many village loot tables >~<)
    //paint and azure cassette tapes spawn in villages (they give off "taking a stroll" vibes so its pretty fitting)
    event
    .addLootTableModifier('minecraft:chests/village/village_plains_house')
    .randomChance(.03)
    .addLoot('lagsmp_discs:cassette_tape');
    event
    .addLootTableModifier('minecraft:chests/village/village_taiga_house')
    .randomChance(.03)
    .addLoot('lagsmp_discs:cassette_tape');
    event
    .addLootTableModifier('minecraft:chests/village/village_savanna_house')
    .randomChance(.03)
    .addLoot('lagsmp_discs:cassette_tape');
    event
    .addLootTableModifier('minecraft:chests/village/village_snowy_house')
    .randomChance(.03)
    .addLoot('lagsmp_discs:cassette_tape');
    event
    .addLootTableModifier('minecraft:chests/village/village_desert_house')
    .randomChance(.03)
    .addLoot('lagsmp_discs:cassette_tape');
    event
    .addLootTableModifier('minecraft:ancient_city')
    .randomChance(.01)
    .addLoot('lagsmp_discs:cassette_tape');
    
    event
    .addLootTableModifier('minecraft:chests/village/village_plains_house')
    .randomChance(.03)
    .addLoot('lagsmp_discs:azure_cassette_tape');
    event
    .addLootTableModifier('minecraft:chests/village/village_taiga_house')
    .randomChance(.03)
    .addLoot('lagsmp_discs:azure_cassette_tape');
    event
    .addLootTableModifier('minecraft:chests/village/village_savanna_house')
    .randomChance(.03)
    .addLoot('lagsmp_discs:azure_cassette_tape');
    event
    .addLootTableModifier('minecraft:chests/village/village_snowy_house')
    .randomChance(.03)
    .addLoot('lagsmp_discs:azure_cassette_tape');
    event
    .addLootTableModifier('minecraft:chests/village/village_desert_house')
    .randomChance(.03)
    .addLoot('lagsmp_discs:azure_cassette_tape');
    event
    .addLootTableModifier('minecraft:ancient_city')
    .randomChance(.01)
    .addLoot('lagsmp_discs:azure_cassette_tape');

    //monochrome set 
    //you arent supposed to get these by looting but i thought it would make a lot of sense if the pillagers had these
    event
    .addLootTableModifier('minecraft:chests/pillager_outpost')
    .randomChance(.01)
    .addLoot('lagsmp_discs:monochrome_cassette_tape');
    event
    .addLootTableModifier('minecraft:chests/pillager_outpost')
    .randomChance(.01)
    .addLoot('lagsmp_discs:monochrome_music_disc');
    event
    .addLootTableModifier('minecraft:chests/woodland_mansion')
    .randomChance(.03)
    .addLoot('lagsmp_discs:monochrome_cassette_tape');
    event
    .addLootTableModifier('minecraft:chests/woodland_mansion')
    .randomChance(.03)
    .addLoot('lagsmp_discs:monochrome_music_disc');

    //corrupted cassette tape
    event
    .addLootTableModifier('minecraft:chests/end_city_treasure')
    .randomChance(.005)
    .addLoot('lagsmp_discs:corrupted_cassette_tape');

    //steel gaming
    event
    .addLootTableModifier('minecraft:chests/village/village_armorer')
    .randomChance(.01)
    .addLoot('lagsmp_discs:steel_music_disc');
    event
    .addLootTableModifier('minecraft:chests/village/village_toolsmith')
    .randomChance(.01)
    .addLoot('lagsmp_discs:steel_music_disc');
    event
    .addLootTableModifier('minecraft:chests/village/village_weaponsmith')
    .randomChance(.01)
    .addLoot('lagsmp_discs:steel_music_disc');

    event
    .addLootTableModifier('minecraft:chests/village/village_armorer')
    .randomChance(.005)
    .addLoot('lagsmp_discs:stainless_steel_music_disc');
    event
    .addLootTableModifier('minecraft:chests/village/village_toolsmith')
    .randomChance(.005)
    .addLoot('lagsmp_discs:stainless_steel_music_disc');
    event
    .addLootTableModifier('minecraft:chests/village/village_weaponsmith')
    .randomChance(.005)
    .addLoot('lagsmp_discs:stainless_steel_music_disc');

    event
    .addLootTableModifier('minecraft:chests/village/village_armorer')
    .randomChance(.0025)
    .addLoot('lagsmp_discs:tungsten_steel_music_disc');
    event
    .addLootTableModifier('minecraft:chests/village/village_toolsmith')
    .randomChance(.0025)
    .addLoot('lagsmp_discs:tungsten_steel_music_disc');
    event
    .addLootTableModifier('minecraft:chests/village/village_weaponsmith')
    .randomChance(.0025)
    .addLoot('lagsmp_discs:tungsten_steel_music_disc');
    //dungeon loot
    event
    .addLootTableModifier('minecraft:chests/simple_dungeon')
    .randomChance(.03)
    .addLoot('lagsmp_discs:white_music_disc');
    event
    .addLootTableModifier('minecraft:chests/simple_dungeon')
    .randomChance(.03)
    .addLoot('lagsmp_discs:green_music_disc');
    event
    .addLootTableModifier('minecraft:chests/simple_dungeon')
    .randomChance(.03)
    .addLoot('lagsmp_discs:psychic_music_disc');
    event
    .addLootTableModifier('minecraft:chests/simple_dungeon')
    .randomChance(.02)
    .addLoot('lagsmp_discs:cool_music_disc');

    //nether discs
    event
    .addLootTableModifier('minecraft:chests/nether_bridge')
    .randomChance(.05)
    .addLoot('lagsmp_discs:crimson_music_disc');
    event
    .addLootTableModifier('minecraft:chests/nether_bridge')
    .randomChance(.05)
    .addLoot('lagsmp_discs:scarlet_music_disc');

    //classified disc
    event
    .addLootTableModifier('minecraft:chests/underwater_ruin_small')
    .randomChance(.02)
    .addLoot('lagsmp_discs:classified_music_disc');
    event
    .addLootTableModifier('minecraft:chests/underwater_ruin_big')
    .randomChance(.05)
    .addLoot('lagsmp_discs:classified_music_disc');

    //garbage discs
    event
    .addLootTableModifier('minecraft:chests/abandoned_mineshaft')
    .randomChance(.03)
    .addLoot('lagsmp_discs:scrapped_music_disc');
    event
    .addLootTableModifier('minecraft:chests/abandoned_mineshaft')
    .randomChance(.03)
    .addLoot('lagsmp_discs:rusty_music_disc');
    event
    .addLootTableModifier('trials:gameplay/vault_special_loot')
    .randomChance(.05)
    .addLoot('lagsmp_discs:rusty_music_disc');
});