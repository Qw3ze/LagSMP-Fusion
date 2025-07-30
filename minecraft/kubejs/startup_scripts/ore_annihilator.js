WorldgenEvents.remove(event => {
    event.removeFeatureById('underground_ores', [
        'create:zinc_ore',
        'crowns:overworld_uranium_ore'
    ]);
    event.removeFeatureById('fluid_springs', [
        'gtceu:raw_oil_sprout'
    ]);
});