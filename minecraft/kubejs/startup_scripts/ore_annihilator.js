WorldgenEvents.remove(event => {
    event.removeFeatureById('underground_ores', [
        'create:zinc_ore',
        'crowns:overworld_uranium_ore',
        'draconicevolution:overworld_draconium_ore',
        'draconicevolution:nether_draconium_ore',
        'draconicevolution:end_draconium_ore',
        //'nuclearcraft:boron_placed',
        //'nuclearcraft:cobalt_placed',
        //'nuclearcraft:lead_placed',
        //'nuclearcraft:lithium_placed',
        //'nuclearcraft:magnesium_placed',
        //'nuclearcraft:platinum_placed',
        //'nuclearcraft:silver_placed',
        //'nuclearcraft:thorium_placed',
        //'nuclearcraft:tin_placed',
        //'nuclearcraft:uranium_placed',
        //'nuclearcraft:zinc_placed'
        
    ]);
    event.removeFeatureById('fluid_springs', [
        'gtceu:raw_oil_sprout'
    ]);
});