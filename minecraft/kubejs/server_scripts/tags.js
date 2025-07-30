ServerEvents.tags('item', event => {
    event.add('gtceu:circuits/ulv', 'create:electron_tube');
    event.remove('forge:raw_materials/uranium', 'alexscaves:uranium');
});