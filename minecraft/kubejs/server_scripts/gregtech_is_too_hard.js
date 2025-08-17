ServerEvents.recipes((event) => {
    const greg = event.recipes.gtceu;
    //rubber easier
    event.shaped('gtceu:rubber_plate', [
        'B',
        'A',
        'A'
    ], {
        A: 'gtceu:sticky_resin',
        B: '#forge:tools/hammers'
        
    });
    greg
    .compressor('gtceu:rubber_plate')
    .itemInputs('gtceu:sticky_resin')
    .itemOutputs('gtceu:rubber_plate')
    .duration(60)
    .EUt(8);
});