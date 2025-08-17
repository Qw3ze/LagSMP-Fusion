StartupEvents.registry('item', event => {
    event.create('kubejs:incomplete_golden_cassette_tape', 'create:sequenced_assembly').texture('kubejs:item/shattered');
    event.create('kubejs:incomplete_golden_music_tire', 'create:sequenced_assembly').texture('kubejs:item/truck');
    
    event.create('certus_quartz_seed').texture('kubejs:item/certus_quartz_seed');

    event.create('kubejs:ammo_shell').texture('kubejs:item/ammo_shell');
    event.create('kubejs:incomplete_modern_kinetic_gun', 'create:sequenced_assembly').texture('kubejs:item/gun');
    event.create('kubejs:incomplete_ammo', 'create:sequenced_assembly').texture('kubejs:item/incomplete_ammo');
});