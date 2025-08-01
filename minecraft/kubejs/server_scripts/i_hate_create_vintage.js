//stuff used from TFG cuz i am NOT dealing with this STUPID mod

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

function registerVintageImprovementsItemTags(event) {
	VINTAGE_IMPROVEMENTS_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('forge:hidden_from_recipe_viewers', item)
	})

	//event.add('c:hidden_from_recipe_viewers', '#vintageimprovements:springs')
	//event.add('c:hidden_from_recipe_viewers', '#vintageimprovements:small_springs')
	//event.add('c:hidden_from_recipe_viewers', '#forge:wires')
	
	//event.add('vintageimprovements:custom_hammering_blocks', '#tfc:anvils')

	// Add more if needed, this is for all the LV recipes
    /*
	event.add('vintageimprovements:curving_heads', 'tfg:sword_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:mining_hammer_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:pickaxe_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:shovel_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:axe_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:hoe_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:scythe_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:file_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:hammer_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:saw_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:knife_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:butchery_knife_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:spade_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:propick_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:javelin_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:chisel_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:mace_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:mattock_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:screwdriver_tip_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:wrench_tip_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:wire_cutter_head_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:small_casing_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:shell_casing_extruder_mold')
	event.add('vintageimprovements:curving_heads', 'tfg:large_casing_extruder_mold')
    */
	event.add('vintage:curving_heads', 'gtceu:cell_extruder_mold')
	event.add('vintage:curving_heads', 'gtceu:ingot_extruder_mold')
	event.add('vintage:curving_heads', 'gtceu:bottle_extruder_mold')
	event.add('vintage:curving_heads', 'gtceu:foil_extruder_mold')
	event.add('vintage:curving_heads', 'gtceu:cylinder_casting_mold')
}
function registerVintageImprovementsBlockTags(event) {
	VINTAGE_IMPROVEMENTS_DISABLED_BLOCKS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})
}
function registerVintageImprovementsFluidTags(event) {
	VINTAGE_IMPROVEMENTS_DISABLED_FLUIDS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})
}

ServerEvents.tags('item', event => {
    registerVintageImprovementsItemTags(event);
});
ServerEvents.tags('block', event => {
    registerVintageImprovementsBlockTags(event);
});
ServerEvents.tags('fluid', event => {
    registerVintageImprovementsFluidTags(event);
});

ServerEvents.recipes((event) => {
    VINTAGE_IMPROVEMENTS_DISABLED_ITEMS.forEach(item => {
		event.remove({ output: item })
	})
    VINTAGE_IMPROVEMENTS_DISABLED_BLOCKS.forEach(item => {
		event.remove({ output: item })
	})
    VINTAGE_IMPROVEMENTS_DISABLED_FLUIDS.forEach(item => {
		event.remove({ output: item })
	})

	//this MIGHT work
	event.remove({ output: /^vintage:.*_sheet/ });
	event.remove({ output: /^vintage:.*_rod/ });
	event.remove({ output: /^vintage:.*_wire/ });
	event.remove({ output: /^vintage:.*_spring/ });
});