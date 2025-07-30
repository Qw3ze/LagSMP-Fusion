ServerEvents.recipes(event => {
    const id = global.id;

    //this is from startech also

    //Uncrafting Crafting Storage/Storage Cells
    function applEn(ae2) {
        event.recipes.gtceu.packer(id(`crafting_storage_${ae2}k_uncrafting`))
            .itemInputs(`ae2:${ae2}k_crafting_storage`)
            .itemOutputs(`ae2:cell_component_${ae2}k`)
            .itemOutputs('ae2:crafting_unit')
            .circuit(2)
            .duration(100)
            .EUt(7);

        event.recipes.gtceu.packer(id(`storage_cell_${ae2}k_uncrafting`))
            .itemInputs(`ae2:item_storage_cell_${ae2}k`)
            .itemOutputs(`ae2:cell_component_${ae2}k`)
            .itemOutputs('ae2:item_cell_housing')
            .circuit(2)
            .duration(100)
            .EUt(7);

        event.recipes.gtceu.packer(id(`fluid_cell${ae2}k_uncrafting`))
            .itemInputs(`ae2:fluid_storage_cell_${ae2}k`)
            .itemOutputs(`ae2:cell_component_${ae2}k`)
            .itemOutputs('ae2:fluid_cell_housing')
            .circuit(2)
            .duration(100)
            .EUt(7);
    }
    applEn(1);
    applEn(4);
    applEn(16);
    applEn(64);
    applEn(256);
    
    function ae2mega(ae2a) {

        event.recipes.gtceu.packer(id(`crafting_storage_${ae2a}_uncrafting`))
            .itemInputs(`megacells:${ae2a}m_crafting_storage`)
            .itemOutputs(`megacells:cell_component_${ae2a}m`)
            .itemOutputs('ae2:crafting_unit')
            .circuit(2)
            .duration(100)
            .EUt(7);

        event.recipes.gtceu.packer(id(`storage_cell_${ae2a}_uncrafting`))
            .itemInputs(`megacells:item_storage_cell_${ae2a}m`)
            .itemOutputs(`megacells:cell_component_${ae2a}m`)
            .itemOutputs('megacells:mega_item_cell_housing')
            .circuit(2)
            .duration(100)
            .EUt(7);

        event.recipes.gtceu.packer(id(`fluid_cell${ae2a}_uncrafting`))
            .itemInputs(`megacells:fluid_storage_cell_${ae2a}m`)
            .itemOutputs(`megacells:cell_component_${ae2a}m`)
            .itemOutputs('megacells:mega_fluid_cell_housing')
            .circuit(2)
            .duration(100)
            .EUt(7);

    };

    ae2mega(1);
    ae2mega(4);
    ae2mega(16);
    ae2mega(64);
    ae2mega(256);


    //Colouring/Uncolouring Cables with a Chemical Bath 
    function colourCable(colour) {
        function dyingCable(type) {


            event.recipes.gtceu.chemical_bath(id(`${colour}_fluix_${type}`))
                .itemInputs(`8x ae2:fluix_${type}`)
                .inputFluids(`gtceu:${colour}_dye 36`)
                .itemOutputs(`8x ae2:${colour}_${type}`)
                .duration(280)
                .EUt(100);

            event.recipes.gtceu.chemical_bath(id(`${colour}_uncoloured_${type}`))
                .itemInputs(`8x ae2:${colour}_${type}`)
                .inputFluids('gtceu:chlorine 100')
                .itemOutputs(`8x ae2:fluix_${type}`)
                .duration(280)
                .EUt(100);

        }
        dyingCable('covered_cable');
        dyingCable('covered_dense_cable');
        dyingCable('smart_cable');
        dyingCable('smart_dense_cable');
        dyingCable('glass_cable')
    }

    colourCable('black');
    colourCable('blue');
    colourCable('brown');
    colourCable('cyan');
    colourCable('green');
    colourCable('gray');
    colourCable('lime');
    colourCable('light_blue');
    colourCable('light_gray');
    colourCable('magenta');
    colourCable('orange');
    colourCable('purple');
    colourCable('red');
    colourCable('white');
    colourCable('yellow');
    colourCable('pink');


    //Coating ae2 cables with rubber for covered cable
    function rubberType(rubber, amount) {

        event.recipes.gtceu.assembler(id(`${rubber.path}_covered_cable`))
            .itemInputs(`ae2:fluix_glass_cable`)
            .inputFluids(`${rubber} ${amount}`)
            .itemOutputs(`ae2:fluix_covered_cable`)
            .duration(100)
            .EUt(69);

    }

    rubberType('thermal:latex', 288);
    rubberType('gtceu:rubber', 144);
    rubberType('gtceu:silicone_rubber', 72);
    rubberType('gtceu:styrene_butadiene_rubber', 36);


    //gerging cable anchors
    event.remove({ id: 'ae2:network/parts/cable_anchor' })

    function fluidtype(lube, mb) {
        function metaltype(wire, amount) {

            event.recipes.gtceu.cutter(id(`${wire}_${lube.path}_cable_anchor`))
                .itemInputs(`gtceu:${wire}_single_wire`)
                .inputFluids(`${lube} ${mb}`)
                .itemOutputs(`${amount}x ae2:cable_anchor`)
                .duration(100)
                .EUt(7);

        }

        metaltype('iron', 2);
        metaltype('steel', 4);
        metaltype('aluminium', 6);
        metaltype('kanthal', 8);
        metaltype('tungsten', 16);
        metaltype('rhodium_plated_palladium', 32);

    }

    fluidtype('minecraft:water', 4)
    fluidtype('gtceu:distilled_water', 3)
    fluidtype('gtceu:lubricant', 2)

});