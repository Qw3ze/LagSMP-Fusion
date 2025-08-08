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
    event.recipes.create.sandpaper_polishing('etched:blank_music_disc', '#minecraft:music_discs');
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
    .assembler("name_tag_gameing")
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
            C: 'projectred_transmission:red_alloy_wire',
            D: '#forge:chests/wooden'
    });
    //stainless steel disc
    greg
    .cutter("stainless_steel_music_disc")
    .itemInputs('gtceu:stainless_steel_block')
    .itemOutputs("lagsmp_discs:stainless_steel_music_disc")
    .circuit(32)
    .duration(20000)
    .EUt(512);
});