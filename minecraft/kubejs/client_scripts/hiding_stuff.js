const VINTAGE_IMPROVEMENTS_DISABLED_ITEMS = [

	'vintage:sulfur_chunk',
	'vintage:sulfur',
	'vintage:sulfur_block',
	'vintage:sulfuric_acid_bucket',
	'vintage:copper_sulfate',
	'vintage:incomplete_redstone_module',
	'vintage:incomplete_recipe_card',
	
	'vintage:andesite_sheet',
    'vintage:aluminum_rod',
	'vintage:amethyst_bronze_sheet',
	'vintage:bronze_sheet',
	'vintage:cast_iron_sheet',
	'vintage:cobalt_sheet',
	'vintage:constantan_sheet',
	'vintage:enderium_sheet',
	'vintage:hepatizon_sheet',
	'vintage:invar_sheet',
	'vintage:lead_sheet',
	'vintage:zinc_sheet',
	'vintage:lumium_sheet',
	'vintage:manyullyn_sheet',
	'vintage:nickel_sheet',
	'vintage:osmium_sheet',
	'vintage:palladium_sheet',
	'vintage:pig_iron_sheet',
	'vintage:platinum_sheet',
	'vintage:pure_gold_sheet',
	'vintage:refined_glowstone_sheet',
	'vintage:refined_obsidian_sheet',
	'vintage:rhodium_sheet',
	'vintage:rose_gold_sheet',
	'vintage:signalum_sheet',
	'vintage:silver_sheet',
	'vintage:steel_sheet',
	'vintage:tin_sheet',
	'vintage:uranium_sheet',
	'vintage:refined_radiance_sheet',
	'vintage:ironwood_sheet',
	'vintage:knightmetal_sheet',
	'vintage:queens_slime_sheet',
	'vintage:slimesteel_sheet',
	'vintage:vanadium_sheet',
	'vintage:netherite_sheet',
	'vintage:nethersteel_sheet',
	'vintage:andesite_sheet',
	'vintage:shadow_steel_sheet',
	'vintage:desh_sheet',

	'vintage:andesite_rod',
    'vintage:aluminum_rod',
	'vintage:amethyst_bronze_rod',
	'vintage:bronze_rod',
	'vintage:cast_iron_rod',
	'vintage:cobalt_rod',
	'vintage:constantan_rod',
	'vintage:enderium_rod',
	'vintage:hepatizon_rod',
	'vintage:invar_rod',
	'vintage:lead_rod',
	'vintage:zinc_rod',
	'vintage:lumium_rod',
	'vintage:manyullyn_rod',
	'vintage:nickel_rod',
	'vintage:osmium_rod',
	'vintage:palladium_rod',
	'vintage:pig_iron_rod',
	'vintage:platinum_rod',
	'vintage:pure_gold_rod',
	'vintage:refined_glowstone_rod',
	'vintage:refined_obsidian_rod',
	'vintage:rhodium_rod',
	'vintage:rose_gold_rod',
	'vintage:signalum_rod',
	'vintage:silver_rod',
	'vintage:steel_rod',
	'vintage:tin_rod',
	'vintage:uranium_rod',
	'vintage:refined_radiance_rod',
	'vintage:ironwood_rod',
	'vintage:knightmetal_rod',
	'vintage:queens_slime_rod',
	'vintage:slimesteel_rod',
	'vintage:vanadium_rod',
	'vintage:netherite_rod',
	'vintage:nethersteel_rod',
	'vintage:andesite_rod',
	'vintage:shadow_steel_rod',
	'vintage:desh_rod',
    'vintage:vanadium_nugget',
    'vintage:vanadium_ingot',
	'vintage:sulfuric_acid_bucket'
]

const VINTAGE_IMPROVEMENTS_DISABLED_BLOCKS = [

	'vintage:sulfur_block',
    'vintage:vanadium_block'

]

const VINTAGE_IMPROVEMENTS_DISABLED_FLUIDS = [

	'vintage:sulfuric_acid',
	'vintage:sulfur_dioxide',
	'vintage:sulfur_trioxide'
]

JEIEvents.hideItems(event => {

    VINTAGE_IMPROVEMENTS_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
    VINTAGE_IMPROVEMENTS_DISABLED_BLOCKS.forEach(item => {
        event.hide(item)
    })
});
JEIEvents.hideFluids(event => {
    VINTAGE_IMPROVEMENTS_DISABLED_FLUIDS.forEach(item => {
        event.hide(item)
    })
});