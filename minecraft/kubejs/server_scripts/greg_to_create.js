ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  
  //list of materials that need rod recipes (why so many)
  const rodMaterials = [
    "magnetic_iron",
    "wrought_iron",
    "cupronickel",
    "annealed_copper",
    "rose_gold",
    "zinc",
    "brass",
    "red_alloy",
    "tin",
    "tin_alloy",
    "bronze",
    "nickel",
    "antimony",
    "silver",
    "molybdenum",
    "manganese",
    "lead",
    "battery_alloy",
    "invar",
    "electrum",
    "blue_alloy",
    "steel",
    "magnetic_steel",
    "polytetrafluoroethylene",
    "polyvinyl_chloride",
    "rubber",
    "silicone_rubber",
    "styrene_butadiene_rubber"
  ];

  //list of wire materials
  const wireMaterials = [
    "cupronickel",
    "annealed_copper",
    "red_alloy",
    "tin",
    "nickel",
    "silver",
    "lead",
    "electrum",
    "blue_alloy",
    "steel"
  ];

  //list of fine wire materials
  const fineWireMaterials = [
    "cupronickel",
    "annealed_copper",
    "red_alloy",
    "tin",
    "silver",
    "lead",
    "electrum",
    "steel"
  ];

  //rolling mill recipe machine
  event.remove({ type: 'createaddition:rolling' });
  function rolling(input, output, outputAmount) {
    event.custom({
        "type":"createaddition:rolling",
        "input": {
            "item": input
        },
        "result": {
            "item": output,
            "count": outputAmount //note: output amount is not a string!!!
        }
    });
  }

  //stuff that isnt from gt gets done manually cuz lazy
  rolling("minecraft:copper_ingot", "gtceu:copper_rod", 1);
  rolling("minecraft:iron_ingot", "gtceu:iron_rod", 1);
  rolling("minecraft:gold_ingot", "gtceu:gold_rod", 1);

  rolling("gtceu:zinc_plate", "gtceu:zinc_fine_wire", 2);

  //add rod recipes for each material in the array 
  for (let i = 0; i < rodMaterials.length; i++) {
    rolling("gtceu:"+rodMaterials[i]+"_ingot", "gtceu:"+rodMaterials[i]+"_rod", 1);
  }

  //ok now its wire time
  for (let i = 0; i < wireMaterials.length; i++) {
    rolling("gtceu:"+wireMaterials[i]+"_plate", "gtceu:"+wireMaterials[i]+"_single_wire", 1);
  }

  //fine wires
  for (let i = 0; i < fineWireMaterials.length; i++) {
    rolling("gtceu:"+fineWireMaterials[i]+"_single_wire", "gtceu:fine_"+fineWireMaterials[i]+"_wire", 2);
  }

  //plate materials
  const plateMaterials = [
    "magnetic_iron",
    "wrought_iron",
    "cupronickel",
    "annealed_copper",
    "rose_gold",
    "red_alloy",
    "tin",
    "tin_alloy",
    "bronze",
    "nickel",
    "silver",
    "molybdenum",
    "manganese",
    "lead",
    "battery_alloy",
    "invar",
    "blue_alloy",
    "steel",
    "magnetic_steel",
    "polyethylene",
    "polytetrafluoroethylene",
    "polyvinyl_chloride",
    "polybenzimidazole",
    "rubber",
    "silicone_rubber",
    "styrene_butadiene_rubber"
  ];

  //platinator
  for(let i = 0; i < plateMaterials.length; i++) {
    event.recipes.create.pressing('gtceu:'+plateMaterials[i]+'_plate', 'gtceu:'+plateMaterials[i]+'_ingot');
  }

  //alloys
  function alloy(output, input1, input2) {
    event.recipes.create.mixing(output, [input1, input2]).heated();
  }
  function alloyAll(outputMaterial, material1, material2) {
    alloy(outputMaterial+"_ingot", material1+"_ingot", material2+"_ingot");
    alloy(outputMaterial+"_ingot", material1+"_ingot", material2+"_dust");
    alloy(outputMaterial+"_ingot", material1+"_dust", material2+"_ingot");
    alloy(outputMaterial+"_ingot", material1+"_dust", material2+"_dust");
  }
  //tin alloy
  alloy("2x gtceu:tin_alloy_ingot", "minecraft:iron_ingot", "gtceu:tin_ingot");
  alloy("2x gtceu:tin_alloy_ingot", "minecraft:iron_ingot", "gtceu:tin_dust");
  alloy("2x gtceu:tin_alloy_ingot", "gtceu:iron_dust", "gtceu:tin_ingot");
  alloy("2x gtceu:tin_alloy_ingot", "gtceu:iron_dust", "gtceu:tin_dust");
  alloyAll("2x gtceu:tin_alloy", "gtceu:wrought_iron", "gtceu:tin");
  //bronze
  alloy("2x gtceu:bronze_ingot", "3x minecraft:copper_ingot", "gtceu:tin_ingot");
  alloy("2x gtceu:bronze_ingot", "3x minecraft:copper_ingot", "gtceu:tin_dust");  
  alloy("2x gtceu:bronze_ingot", "3x gtceu:copper_dust", "gtceu:tin_ingot");
  alloy("2x gtceu:bronze_ingot", "3x gtceu:copper_dust", "gtceu:tin_dust");
  alloyAll("2x gtceu:bronze", "3x gtceu:annealed_copper", "gtceu:tin");
  //red alloy
  alloy("gtceu:red_alloy_ingot", "minecraft:copper_ingot", "4x minecraft:redstone");
  alloy("gtceu:red_alloy_ingot", "gtceu:annealed_copper_ingot", "4x minecraft:redstone");
  alloy("gtceu:red_alloy_ingot", "gtceu:copper_dust", "4x minecraft:redstone");
  alloy("gtceu:red_alloy_ingot", "gtceu:annealed_copper_dust", "4x minecraft:redstone");
  //blue alloy
  alloy("gtceu:blue_alloy_ingot", "gtceu:silver_ingot", "4x gtceu:electrotine_dust");
  //electrum
  alloyAll("gtceu:electrum", "gtceu:gold", "gtceu:silver");
  //cupronickel
  alloy("2x gtceu:cupronickel_ingot", "minecraft:copper_ingot", "gtceu:nickel_ingot");
  alloy("2x gtceu:cupronickel_ingot", "minecraft:copper_ingot", "gtceu:nickel_dust");
  alloy("2x gtceu:cupronickel_ingot", "gtceu:copper_dust", "gtceu:nickel_ingot");
  alloy("2x gtceu:cupronickel_ingot", "gtceu:copper_dust", "gtceu:nickel_dust");
  alloyAll("2x gtceu:cupronickel", "gtceu:annealed_copper", "gtceu:nickel");
  //invar
  alloy("3x gtceu:invar_ingot", "2x minecraft:iron_ingot", "gtceu:nickel_ingot");
  alloy("3x gtceu:invar_ingot", "2x minecraft:iron_ingot", "gtceu:nickel_dust");
  alloy("3x gtceu:invar_ingot", "2x gtceu:iron_dust", "gtceu:nickel_ingot");
  alloy("3x gtceu:invar_ingot", "2x gtceu:iron_dust", "gtceu:nickel_dust");
  alloyAll("3x gtceu:invar", "2x gtceu:wrought_iron", "gtceu:nickel");
  //battery alloy
  alloyAll("5x gtceu:battery_alloy", "4x gtceu:lead", "gtceu:antimony");
});