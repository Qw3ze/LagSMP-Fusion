WorldgenEvents.remove(event => {
    event.removeFeatureById('underground_ores', [
        'create:zinc_ore',
        'crowns:overworld_uranium_ore',
        'draconicevolution:overworld_draconium_ore',
        'draconicevolution:nether_draconium_ore',
        'draconicevolution:end_draconium_ore'
        
    ]);
    event.removeFeatureById('fluid_springs', [
        'gtceu:raw_oil_sprout'
    ]);
});