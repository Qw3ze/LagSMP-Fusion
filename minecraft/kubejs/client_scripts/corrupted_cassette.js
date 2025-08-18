// heheheha
/*
JEIEvents.information(event => {
    let $MysteriousItemConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
    let $ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe')
    let RemoveConversion = (to) => 
        $MysteriousItemConversionCategory.RECIPES.removeIf(recipe => recipe.getRollableResultsAsItemStacks()[0].idLocation.toString() == to)
    let AddConversion = (from, to) => {
        RemoveConversion(to)
        $MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create(from, to))
    }
    
    AddConversion('lagsmp_discs:cassette_tape', 'lagsmp_discs:corrupted_cassette_tape')
    AddConversion('lagsmp_discs:azure_cassette_tape', 'lagsmp_discs:corrupted_cassette_tape')
    AddConversion('lagsmp_discs:monochrome_cassette_tape', 'lagsmp_discs:corrupted_cassette_tape')
});
*/
let $MysteriousItemConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
let $ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe')

$MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create('lagsmp_discs:cassette_tape', 'lagsmp_discs:corrupted_cassette_tape'))
$MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create('lagsmp_discs:azure_cassette_tape', 'lagsmp_discs:corrupted_cassette_tape'))
$MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create('lagsmp_discs:monochrome_cassette_tape', 'lagsmp_discs:corrupted_cassette_tape'))