//warning: this script is absolute chaos

//list i also stole from tfg (actual code is down below)
const GREATE_DISABLED_ITEMS = [
	
	'gtceu:steel_alloy',
	'gtceu:aluminium_alloy',
	'gtceu:stainless_steel_alloy',
	'gtceu:titanium_alloy',
	'gtceu:tungsten_steel_alloy',
	'gtceu:rhodium_plated_palladium_alloy',
	'gtceu:naquadah_alloy_alloy',
	'gtceu:darmstadtium_alloy',
	'gtceu:neutronium_alloy',

	'gtceu:tungsten_steel_whisk',
	'gtceu:rhodium_plated_palladium_whisk',
	'gtceu:naquadah_alloy_whisk',
	'gtceu:darmstadtium_whisk',
	'gtceu:neutronium_whisk',

	//'greate:polybenzimidazole_belt_connector',
	//'greate:polytetrafluoroethylene_belt_connector',
	
	//'greate:andesite_alloy_crushing_wheel',
	//'greate:andesite_alloy_encased_fan',
	//'greate:andesite_alloy_mechanical_mixer',
	//'greate:andesite_alloy_mechanical_pump',

	// Disabled because they don't respect the cleanroom requirement of some recipes
	//'greate:stainless_steel_mechanical_saw',
	//'greate:titanium_mechanical_saw',

	// You should be graduating to IV multiblocks in IV
	//'greate:tungsten_steel_shaft',
	//'greate:tungsten_steel_cogwheel',
	//'greate:large_tungsten_steel_cogwheel',
	'greate:tungsten_steel_crushing_wheel',
	'greate:tungsten_steel_encased_fan',
	//'greate:tungsten_steel_gearbox',
	'greate:tungsten_steel_mechanical_press',
	'greate:tungsten_steel_mechanical_mixer',
	'greate:tungsten_steel_millstone',
	'greate:tungsten_steel_mechanical_saw',
	//'greate:tungsten_steel_mechanical_pump',
	//'greate:tungsten_steel_vertical_gearbox',

	//'greate:rhodium_plated_palladium_shaft',
	//'greate:rhodium_plated_palladium_cogwheel',
	//'greate:large_rhodium_plated_palladium_cogwheel',
	'greate:rhodium_plated_palladium_crushing_wheel',
	'greate:rhodium_plated_palladium_encased_fan',
	//'greate:rhodium_plated_palladium_gearbox',
	'greate:rhodium_plated_palladium_mechanical_press',
	'greate:rhodium_plated_palladium_mechanical_mixer',
	'greate:rhodium_plated_palladium_millstone',
	'greate:rhodium_plated_palladium_mechanical_saw',
	//'greate:rhodium_plated_palladium_mechanical_pump',
	//'greate:rhodium_plated_palladium_vertical_gearbox',

	//'greate:naquadah_alloy_shaft',
	//'greate:naquadah_alloy_cogwheel',
	//'greate:large_naquadah_alloy_cogwheel',
	'greate:naquadah_alloy_crushing_wheel',
	'greate:naquadah_alloy_encased_fan',
	//'greate:naquadah_alloy_gearbox',
	'greate:naquadah_alloy_mechanical_press',
	'greate:naquadah_alloy_mechanical_mixer',
	'greate:naquadah_alloy_millstone',
	'greate:naquadah_alloy_mechanical_saw',
	//'greate:naquadah_alloy_mechanical_pump',
	//'greate:naquadah_alloy_vertical_gearbox',

	//'greate:darmstadtium_shaft',
	//'greate:darmstadtium_cogwheel',
	//'greate:large_darmstadtium_cogwheel',
	'greate:darmstadtium_crushing_wheel',
	'greate:darmstadtium_encased_fan',
	//'greate:darmstadtium_gearbox',
	'greate:darmstadtium_mechanical_press',
	'greate:darmstadtium_mechanical_mixer',
	'greate:darmstadtium_millstone',
	'greate:darmstadtium_mechanical_saw',
	//'greate:darmstadtium_mechanical_pump',
	//'greate:darmstadtium_vertical_gearbox',
	
	//'greate:neutronium_shaft',
	//'greate:neutronium_cogwheel',
	//'greate:large_neutronium_cogwheel',
	'greate:neutronium_crushing_wheel',
	'greate:neutronium_encased_fan',
	//'greate:neutronium_gearbox',
	'greate:neutronium_mechanical_press',
	'greate:neutronium_mechanical_mixer',
	'greate:neutronium_millstone',
	'greate:neutronium_mechanical_saw',
	//'greate:neutronium_mechanical_pump',
	//'greate:neutronium_vertical_gearbox',

	// Adding these here because they're greate's fault
    /*
	'gtceu:andesite_alloy_bucket',
	'gtceu:andesite_alloy_ring',
	'gtceu:tiny_andesite_alloy_dust',
	'gtceu:small_andesite_alloy_dust',
	'gtceu:andesite_alloy_dust',
	'gtceu:andesite_alloy_plate',
	'gtceu:double_andesite_alloy_plate',
	'gtceu:andesite_alloy_nugget',
	'gtceu:andesite_alloy_rotor',
	'gtceu:andesite_alloy_whisk',
	'gtceu:andesite_alloy_bolt',
	'gtceu:andesite_alloy_ingot',
	'gtceu:andesite_alloy_rod',
	'gtceu:andesite_alloy_screw',
	'gtceu:andesite_alloy_buzz_saw_blade',
	'gtceu:andesite_alloy_block',
	'gtceu:andesite_alloy_buzzsaw',
    */
	'gtceu:refined_radiance_bucket',
	'gtceu:tiny_refined_radiance_dust',
	'gtceu:small_refined_radiance_dust',
	'gtceu:refined_radiance_dust',
	'gtceu:refined_radiance_plate',
	'gtceu:double_refined_radiance_plate',
	'gtceu:refined_radiance_nugget',
	'gtceu:refined_radiance_bolt',
	'gtceu:refined_radiance_ingot',
	'gtceu:refined_radiance_rod',
	'gtceu:refined_radiance_screw',
	'gtceu:long_refined_radiance_rod',
	'gtceu:refined_radiance_block',

	'gtceu:chromatic_compound_bucket',
	'gtceu:tiny_chromatic_compound_dust',
	'gtceu:small_chromatic_compound_dust',
	'gtceu:chromatic_compound_dust',
	'gtceu:chromatic_compound_nugget',
	'gtceu:chromatic_compound_ingot',
	'gtceu:chromatic_compound_block',

	'gtceu:shadow_steel_bucket',
	'gtceu:tiny_shadow_steel_dust',
	'gtceu:small_shadow_steel_dust',
	'gtceu:shadow_steel_dust',
	'gtceu:shadow_steel_plate',
	'gtceu:double_shadow_steel_plate',
	'gtceu:shadow_steel_nugget',
	'gtceu:shadow_steel_bolt',
	'gtceu:shadow_steel_ingot',
	'gtceu:shadow_steel_rod',
	'gtceu:shadow_steel_screw',
	'gtceu:long_shadow_steel_rod',
	'gtceu:shadow_steel_block',
]
const GREATE_DISABLED_FLUIDS = [

	'gtceu:andesite_alloy',
	'gtceu:refined_radiance',
	'gtceu:chromatic_compound',
	'gtceu:shadow_steel'

]
const stupid = [

	"andesite_alloy_shaft",
	"steel_shaft",
	"aluminium_shaft",
	"stainless_steel_shaft",
	"titanium_shaft",
	"tungsten_steel_shaft",
	"rhodium_plated_palladium_shaft",
	"naquadah_alloy_shaft",
	"darmstadtium_shaft",
	"neutronium_shaft",

	"andesite_alloy_cogwheel",
	"steel_cogwheel",
	"aluminium_cogwheel",
	"stainless_steel_cogwheel",
	"titanium_cogwheel",
	"tungsten_steel_cogwheel",
	"rhodium_plated_palladium_cogwheel",
	"naquadah_alloy_cogwheel",
	"darmstadtium_cogwheel",
	"neutronium_cogwheel",

	"large_andesite_alloy_cogwheel",
	"large_steel_cogwheel",
	"large_aluminium_cogwheel",
	"large_stainless_steel_cogwheel",
	"large_titanium_cogwheel",
	"large_tungsten_steel_cogwheel",
	"large_rhodium_plated_palladium_cogwheel",
	"large_naquadah_alloy_cogwheel",
	"large_darmstadtium_cogwheel",
	"large_neutronium_cogwheel",

	"andesite_alloy_gearbox",
	"steel_gearbox",
	"aluminium_gearbox",
	"stainless_steel_gearbox",
	"titanium_gearbox",
	"tungsten_steel_gearbox",
	"rhodium_plated_palladium_gearbox",
	"naquadah_alloy_gearbox",
	"darmstadtium_gearbox",
	"neutronium_gearbox",

	"andesite_alloy_vertical_gearbox",
	"steel_vertical_gearbox",
	"aluminium_vertical_gearbox",
	"stainless_steel_vertical_gearbox",
	"titanium_vertical_gearbox",
	"tungsten_steel_vertical_gearbox",
	"rhodium_plated_palladium_vertical_gearbox",
	"naquadah_alloy_vertical_gearbox",
	"darmstadtium_vertical_gearbox",
	"neutronium_vertical_gearbox",

	"andesite_alloy_mechanical_pump",
	"steel_mechanical_pump",
	"aluminium_mechanical_pump",
	"stainless_steel_mechanical_pump",
	"titanium_mechanical_pump",
	"tungsten_steel_mechanical_pump",
	"rhodium_plated_palladium_mechanical_pump",
	"naquadah_alloy_mechanical_pump",
	"darmstadtium_mechanical_pump",
	"neutronium_mechanical_pump",

	"andesite_alloy_mechanical_press",
	"steel_mechanical_press",
	"aluminium_mechanical_press",
	"stainless_steel_mechanical_press",
	"titanium_mechanical_press",

	"andesite_alloy_mechanical_mixer",
	"steel_mechanical_mixer",
	"aluminium_mechanical_mixer",
	"stainless_steel_mechanical_mixer",
	"titanium_mechanical_mixer",

	"andesite_alloy_mechanical_saw",
	"steel_mechanical_saw",
	"aluminium_mechanical_saw",
	"stainless_steel_mechanical_saw",
	"titanium_mechanical_saw",

	"andesite_alloy_millstone",
	"steel_millstone",
	"aluminium_millstone",
	"stainless_steel_millstone",
	"titanium_millstone",

	"andesite_alloy_crushing_wheel",
	"steel_crushing_wheel",
	"aluminium_crushing_wheel",
	"stainless_steel_crushing_wheel",
	"titanium_crushing_wheel",

	"rubber_belt_connector",
	"silicone_rubber_belt_connector",
	"polyethylene_belt_connector",
	"polytetrafluoroethylene_belt_connector",
	"polybenzimidazole_belt_connector"

]
function removeGreateRecipes(event) {

	GREATE_DISABLED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})

	GREATE_DISABLED_FLUIDS.forEach(fluid => {
		event.remove({ input: fluid })
		event.remove({ output: fluid })
	})

	// Until we got a fix from Greate for recipes in a cleanroom
	//event.remove({ id: 'greate:shaped/stainless_steel_mechanical_saw' })
	//event.remove({ id: 'greate:shaped/titanium_mechanical_saw' })

	event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_chromatic_compound' })

    // tiny thing shouldnt be strong enough to pulverize titanium
	//event.remove({ id: /greate:milling\/integration\/.*/ })
    // man i wonder what the mechanical compressor is for
	//event.remove({ id: /greate:compacting\/integration\/.*/ })
	// how in the nether does a heavy droppy thing make foil
    //event.remove({ id: /greate:pressing\/integration\/.*/ })
}
function registerGreateItemTags(event) {
	GREATE_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
        //c?? like from fabric? no, "c" as in i dont want to c it ever again
		event.add('c:hidden_from_recipe_viewers', item)
	})
}
function registerGreateFluidTags(event) {
	GREATE_DISABLED_FLUIDS.forEach(fluid => {
		event.removeAllTagsFrom(fluid)
		event.add('c:hidden_from_recipe_viewers', fluid)
	})
}
ServerEvents.tags('item', event => {
    registerGreateItemTags(event);
});
ServerEvents.tags('fluid', event => {
    registerGreateFluidTags(event);
});

ServerEvents.recipes((event) => {
    const greg = event.recipes.gtceu;
    removeGreateRecipes(event);
    /*
	event.getTags().forEach(tag => {
	   if (tag.startsWith('greate:')) {
			event.remove({ id: tag.split(":").pop() })
	   }
	});
	*/

	//recycling gaming
	/*
	stupid.forEach(item => {
		ItemMaterialData.clearMaterialInfo(item);
	});
	*/
    //greate replacements
    event.replaceInput(
        { input: 'create:shaft' },
        'create:shaft',
        'greate:andesite_alloy_shaft'
    );
    event.replaceInput(
        { input: 'create:cogwheel' },
        'create:cogwheel',
        'greate:andesite_alloy_cogwheel'
    );
    event.replaceInput(
        { input: 'create:large_cogwheel' },
        'create:large_cogwheel',
        'greate:andesite_alloy_large_cogwheel'
    );
    event.replaceInput(
        { input: 'create:gearbox' },
        'create:gearbox',
        'greate:andesite_alloy_gearbox'
    );
    event.replaceInput(
        { input: 'create:whisk' },
        'create:whisk',
        'gtceu:andesite_alloy_whisk'
    );
    event.replaceInput(
        { input: 'create:belt_connector' },
        'create:belt_connector',
        'greate:rubber_belt_connector'
    );
    event.replaceInput(
        {  mod: 'greate' },
        [
            'gtceu:ulv_machine_casing',
            //'gtceu:lv_machine_casing',
            //'gtceu:mv_machine_casing',
            //'gtceu:hv_machine_casing',
            //'gtceu:ev_machine_casing',
            //'gtceu:iv_machine_casing'
            //'gtceu:luv_machine_casing',
            //'gtceu:zpm_machine_casing',
            //'gtceu:uv_machine_casing',
            //'gtceu:uhv_machine_casing',
        ],
        'create:andesite_casing'
    );
    //andesite alloy
    /*
    event.remove({ id: 'create:crafting/materials/andesite_alloy' });
    event.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc' });
    event.remove({ id: 'create:mixing/andesite_alloy' });
    event.remove({ id: 'create:mixing/andesite_alloy_from_zinc' });
    */
    event.remove({ id: 'gtceu:shaped/wrought_iron_alloy' });
    event.remove({ id: 'gtceu:mixer/wrought_iron_alloy' });
    event.remove({ id: 'greate/mixing/integration/gtceu/mixer/wrought_iron_alloy' });
    /*
    event.shaped('create:andesite_alloy', [
            'ABB', 
        ], {
            A: 'gtceu:wrought_iron_ingot', 
            B: 'minecraft:andesite'
    });
    */
    event.shaped('create:andesite_alloy', [
            'AB',
            'BA'
        ], {
            A: '#kubejs:andesite_alloy_material', 
            B: 'minecraft:andesite'
    });
    greg
    .mixer("andesite_alloy")
    .itemInputs(
        '#kubejs:andesite_alloy_material',
        'minecraft:andesite')
    .itemOutputs("create:andesite_alloy")
    .duration(80)
	.removePreviousMaterialInfo()
    .EUt(8);
	
    //other alloys
    /*
    event.remove({ id: 'gtceu:shaped/steel_alloy' });
    event.shaped('gtceu:steel_alloy', [
            'ABB', 
        ], {
            A: 'gtceu:steel_ingot', 
            B: 'minecraft:andesite'
    });
    event.remove({ id: 'gtceu:shaped/aluminium_alloy' });
    event.shaped('gtceu:aluminium_alloy', [
            'ABB', 
        ], {
            A: 'gtceu:aluminium_ingot', 
            B: 'minecraft:andesite'
    });
    event.remove({ id: 'gtceu:shaped/stainless_steel_alloy' });
    event.shaped('gtceu:stainless_steel_alloy', [
            'ABB', 
        ], {
            A: 'gtceu:stainless_steel_ingot', 
            B: 'minecraft:andesite'
    });
    event.remove({ id: 'gtceu:shaped/titanium_alloy' });
    event.shaped('gtceu:titanium_alloy', [
            'ABB', 
        ], {
            A: 'gtceu:titanium_ingot', 
            B: 'minecraft:andesite'
    });
    event.remove({ id: 'gtceu:shaped/tungsten_steel_alloy' });
    event.shaped('gtceu:tungsten_steel_alloy', [
            'ABB', 
        ], {
            A: 'gtceu:tungsten_steel_ingot', 
            B: 'minecraft:andesite'
    });
    event.remove({ id: 'gtceu:shaped/rhodium_plated_palladium_alloy' });
    event.shaped('gtceu:rhodium_plated_palladium_alloy', [
            'ABB', 
        ], {
            A: 'gtceu:rhodium_plated_palladium_ingot', 
            B: 'minecraft:andesite'
    });
    event.remove({ id: 'gtceu:shaped/naquadah_alloy_alloy' });
    event.shaped('gtceu:naquadah_alloy_alloy', [
            'ABB', 
        ], {
            A: 'gtceu:naquadah_alloy_ingot', 
            B: 'minecraft:andesite'
    });
    event.remove({ id: 'gtceu:shaped/neutronium_alloy' });
    event.shaped('gtceu:neutronium_alloy', [
            'ABB', 
        ], {
            A: 'gtceu:neutronium_ingot', 
            B: 'minecraft:andesite'
    });
    */
    //create machines
    event.shaped('greate:andesite_alloy_mechanical_press', [
            'A',
            'B',
            'C'
        ], {
            A: 'greate:andesite_alloy_shaft', 
            B: 'create:andesite_casing',
            C: 'create:andesite_alloy_block'
    }).id('greate:shaped/andesite_alloy_mechanical_press');
	greg
    .macerator("greate:andesite_alloy_mechanical_press")
    .itemInputs('greate:andesite_alloy_mechanical_press')
    .itemOutputs("10x gtceu:andesite_alloy_dust", "gtceu:wood_dust")
    .duration(80)
	.category(GTRecipeCategories.MACERATOR_RECYCLING)
    .EUt(8);
	greg
    .arc_furnace("greate:andesite_alloy_mechanical_press")
    .itemInputs('greate:andesite_alloy_mechanical_press')
    .itemOutputs("10x create:andesite_alloy")
    .duration(80)
	.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
    .EUt(8);
    event.shaped('greate:andesite_alloy_mechanical_mixer', [
            'A',
            'B',
            'C'
        ], {
            A: 'greate:andesite_alloy_cogwheel', 
            B: 'create:andesite_casing',
            C: 'gtceu:andesite_alloy_whisk'
    }).id('greate:shaped/andesite_alloy_mechanical_mixer');
	greg
    .macerator("greate:andesite_alloy_mechanical_mixer")
    .itemInputs('greate:andesite_alloy_mechanical_mixer')
    .itemOutputs("8x gtceu:andesite_alloy_dust", "gtceu:wood_dust")
    .duration(80)
	.category(GTRecipeCategories.MACERATOR_RECYCLING)
    .EUt(8);
	greg
    .arc_furnace("greate:andesite_alloy_mechanical_mixer")
    .itemInputs('greate:andesite_alloy_mechanical_mixer')
    .itemOutputs("8x create:andesite_alloy")
    .duration(80)
	.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
    .EUt(8);
    event.shaped('gtceu:andesite_alloy_whisk', [
            ' A ',
            'BAB',
            'BBB'
        ], {
            A: 'create:andesite_alloy', 
            B: 'gtceu:andesite_alloy_plate'
    }).id('gtceu:shaped/andesite_alloy_whisk');
	greg
    .macerator("gtceu:andesite_alloy_whisk")
    .itemInputs('gtceu:andesite_alloy_whisk')
    .itemOutputs("7x gtceu:andesite_alloy_dust")
    .duration(80)
	.category(GTRecipeCategories.MACERATOR_RECYCLING)
    .EUt(8);
	greg
    .arc_furnace("gtceu:andesite_alloy_whisk")
    .itemInputs('gtceu:andesite_alloy_whisk')
    .itemOutputs("7x create:andesite_alloy")
    .duration(80)
	.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
    .EUt(8);
    /*
	greg
    .extractor("gtceu:andesite_alloy_whisk")
    .itemInputs('gtceu:andesite_alloy_whisk')
    .fluidOutputs(Fluid.of('gtceu:liquid_andesite_alloy', 1008))
    .duration(80)
	.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
    .EUt(8);
    */
    event.shaped('greate:andesite_alloy_mechanical_saw', [
            'A',
            'B',
            'C'
        ], {
            A: 'gtceu:andesite_alloy_buzz_saw_blade', 
            B: 'create:andesite_casing',
            C: 'greate:andesite_alloy_shaft'
    }).id('greate:shaped/andesite_alloy_mechanical_saw');
	greg
    .macerator("greate:andesite_alloy_mechanical_saw")
    .itemInputs('greate:andesite_alloy_mechanical_saw')
    .itemOutputs("5x gtceu:andesite_alloy_dust", "gtceu:wood_dust")
    .duration(80)
	.category(GTRecipeCategories.MACERATOR_RECYCLING)
    .EUt(8);
	greg
    .arc_furnace("greate:andesite_alloy_mechanical_saw")
    .itemInputs('greate:andesite_alloy_mechanical_saw')
    .itemOutputs("5x create:andesite_alloy")
    .duration(80)
	.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
    .EUt(8);
    event.shaped('gtceu:andesite_alloy_buzz_saw_blade', [
            ' B ',
            'B B',
            ' B '
        ], {
            B: 'gtceu:andesite_alloy_plate'
    }).id('gtceu:shaped/buzzsaw_blade_andesite_alloy');
	greg
    .macerator("gtceu:andesite_alloy_buzz_saw_blade")
    .itemInputs('gtceu:andesite_alloy_buzz_saw_blade')
    .itemOutputs("4x gtceu:andesite_alloy_dust")
    .duration(80)
	.category(GTRecipeCategories.MACERATOR_RECYCLING)
    .EUt(8);
	greg
    .arc_furnace("gtceu:andesite_alloy_buzz_saw_blade")
    .itemInputs('gtceu:andesite_alloy_buzz_saw_blade')
    .itemOutputs("4x create:andesite_alloy")
    .duration(80)
	.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
    .EUt(8);
    /*
    greg
    .extractor("gtceu:andesite_alloy_buzz_saw_blade")
    .itemInputs('gtceu:andesite_alloy_buzz_saw_blade')
    .fluidOutputs(Fluid.of('gtceu:liquid_andesite_alloy', 576))
    .duration(80)
	.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
    .EUt(8);
    */
    event.shaped('greate:andesite_alloy_encased_fan', [
            'A',
            'B',
            'C'
        ], {
            A: 'greate:andesite_alloy_shaft', 
            B: 'create:andesite_casing',
            C: 'gtceu:andesite_alloy_rotor'
    }).id('greate:shaped/andesite_alloy_encased_fan');
	greg
    .macerator("greate:andesite_alloy_encased_fan")
    .itemInputs('greate:andesite_alloy_encased_fan')
    .itemOutputs("6x gtceu:andesite_alloy_dust", "gtceu:wood_dust")
    .duration(80)
	.category(GTRecipeCategories.MACERATOR_RECYCLING)
    .EUt(8);
	greg
    .arc_furnace("greate:andesite_alloy_encased_fan")
    .itemInputs('greate:andesite_alloy_encased_fan')
    .itemOutputs("6x create:andesite_alloy")
    .duration(80)
	.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
    .EUt(8);
    event.shaped('gtceu:andesite_alloy_rotor', [
            ' B ',
            'BAB',
            ' B '
        ], {
            A: 'create:andesite_alloy', 
			B: 'gtceu:andesite_alloy_plate'
    }).id('gtceu:shaped/rotor_andesite_alloy');
	greg
    .macerator("gtceu:andesite_alloy_rotor")
    .itemInputs('gtceu:andesite_alloy_rotor')
    .itemOutputs("5x gtceu:andesite_alloy_dust")
    .duration(80)
	.category(GTRecipeCategories.MACERATOR_RECYCLING)
    .EUt(8);
	greg
    .arc_furnace("gtceu:andesite_alloy_rotor")
    .itemInputs('gtceu:andesite_alloy_rotor')
    .itemOutputs("5x create:andesite_alloy")
    .duration(80)
	.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
    .EUt(8);
    /*
    greg
    .extractor("gtceu:andesite_alloy_rotor")
    .itemInputs('gtceu:andesite_alloy_rotor')
    .fluidOutputs(Fluid.of('gtceu:liquid_andesite_alloy', 720))
    .duration(80)
	.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
    .EUt(8);
    */
    event.shaped('greate:andesite_alloy_millstone', [
            'A',
            'B',
            'C'
        ], {
            A: 'greate:andesite_alloy_cogwheel', 
            B: 'create:andesite_casing',
            C: '#forge:stone'
    }).id('greate:shaped/andesite_alloy_millstone');
	greg
    .macerator("greate:andesite_alloy_millstone")
    .itemInputs('greate:andesite_alloy_encased_fan')
    .itemOutputs("gtceu:andesite_alloy_dust", "2x gtceu:wood_dust")
    .duration(80)
	.category(GTRecipeCategories.MACERATOR_RECYCLING)
    .EUt(8);
	greg
    .arc_furnace("greate:andesite_alloy_millstone")
    .itemInputs('greate:andesite_alloy_millstone')
    .itemOutputs("create:andesite_alloy")
    .duration(80)
	.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
    .EUt(8);
});