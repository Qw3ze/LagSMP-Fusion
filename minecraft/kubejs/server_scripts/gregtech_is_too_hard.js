ServerEvents.recipes((event) => {
    const greg = event.recipes.gtceu;
    //rubber easier
    event.shaped('gtceu:rubber_sheet', [
        'B',
        'A',
        'A'
    ], {
        A: 'gtceu:sticky_resin',
        B: '#forge:tools/hammer'
        
    });
    greg
    .compressor('gtceu:rubber_sheet')
    .itemInputs('gtceu:sticky_resin')
    .itemOutputs('gtceu:rubber_sheet')
    .duration(60)
    .EUt(8);
});