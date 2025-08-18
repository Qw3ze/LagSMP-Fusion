//if your a nerd, youd call this "unification"
//but i like these sillier names a lot more
//i had no clue that there was a mod that made it so i didnt have to write this whole script (almost unified)
//i wish i learned that there was one sooner lol
ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  
  //pre dupe removal

  //rolling mill stuff

  //dupe annihilator function
  function removedupes(item, duplicates) {
    //add all of an item's recipes to the item
    //inputs
    for (let i = 0; i < duplicates.length; i++) {
        event.replaceInput(
            { input: duplicates[i] },
            duplicates[i],
            item
        );
    }
    //outputs
    for (let i = 0; i < duplicates.length; i++) {
        event.replaceOutput(
            { output: duplicates[i] },
            duplicates[i],
            item
        );
    }
  }

  //list of removed stuff

  //zinc
  removedupes(
    "gtceu:zinc_nugget",
    [
        "create:zinc_nugget",
        "#forge:nuggets/zinc"
    ]
  );
  removedupes(
    "gtceu:zinc_ingot",
    [
        "create:zinc_ingot",
        "#forge:ingots/zinc"
    ]
  );
  removedupes(
    "gtceu:zinc_block",
    [
        "create:zinc_block",
        "#forge:blocks/zinc"
    ]
  );
  removedupes(
    "gtceu:zinc_plate",
    [
        "createdeco:zinc_sheet",
        "createaddition:zinc_sheet",
        "#forge:plates/zinc"
    ]
  );
  //brass
  removedupes(
    "gtceu:brass_nugget",
    [
        "create:brass_nugget",
        "#forge:nuggets/brass"
    ]
  );
  removedupes(
    "gtceu:brass_ingot",
    [
        "create:brass_ingot",
        "#forge:ingots/brass"
    ]
  );
  removedupes(
    "gtceu:brass_block",
    [
        "create:brass_block",
        "#forge:blocks/brass"
    ]
  );
  removedupes(
    "gtceu:brass_plate",
    [
        "create:brass_sheet",
        "#forge:plates/brass"
    ]
  );
  removedupes(
    "gtceu:brass_rod",
    [
        "createaddition:brass_rod",
        "#forge:rods/brass"
    ]
  );
  //copper
  removedupes(
    "gtceu:copper_plate",
    [
        "create:copper_sheet",
        "#forge:plates/copper"
    ]
  );
  //iron
  removedupes(
    "gtceu:iron_plate",
    [
        "create:iron_sheet",
        "#forge:plates/iron"
    ]
  );
  removedupes(
    "gtceu:iron_rod",
    [
        "createaddition:iron_rod",
        "#forge:rods/iron"
    ]
  );
  //gold
  removedupes(
    "gtceu:gold_rod",
    [
        "createaddition:gold_rod",
        "#forge:rods/gold"
    ]
  );
  //electrum
  removedupes(
    "gtceu:electrum_nugget",
    [
        "createaddition:electrum_nugget",
        "#forge:nuggets/electrum"
    ]
  );
  removedupes(
    "gtceu:electrum_ingot",
    [
        "createaddition:electrum_ingot",
        "#forge:ingots/electrum"
    ]
  );
  removedupes(
    "gtceu:electrum_block",
    [
        "createaddition:electrum_block",
        "#forge:blocks/electrum"
    ]
  );
  removedupes(
    "gtceu:electrum_plate",
    [
        "createaddition:electrum_sheet",
        "#forge:plates/electrum"
    ]
  );
  removedupes(
    "gtceu:electrum_rod",
    [
        "createaddition:electrum_rod",
        "#forge:rods/electrum"
    ]
  );
  //red alloy (gone since i switched to more red :3)
  /*
  event.remove({ output: "projectred_core:red_iron_comp" });
  removedupes(
    "gtceu:red_alloy_ingot",
    [
        "projectred_core:red_ingot",
        "#forge:ingots/red_alloy"
    ]
  );
  
  //electrotine (also gone)
  event.remove({ output: "projectred_core:electrotine_iron_comp" });
  event.remove({ output: "projectred_core:electrotine_silicon_comp" });
  removedupes(
    "gtceu:electrotine_dust",
    [
        "projectred_core:electrotine_dust",
        "#forge:dusts/electrotine"
    ]
  );
  */
  //netherite
  removedupes(
    "gtceu:netherite_nugget",
    [
        "tconstruct:netherite_nugget",
        "createdeco:netherite_nugget",
        "#forge:nuggets/netherite"
    ]
  );
  //steel
  removedupes(
    "gtceu:steel_nugget",
    [
        "tconstruct:steel_nugget",
        "#forge:nuggets/steel"
    ]
  );
  removedupes(
    "gtceu:steel_ingot",
    [
        "tconstruct:steel_ingot",
        "#forge:ingots/steel"
    ]
  );
  removedupes(
    "gtceu:steel_block",
    [
        "tconstruct:steel_block",
        "#forge:blocks/steel"
    ]
  );
  //cobalt
  removedupes(
    "gtceu:cobalt_nugget",
    [
        "tconstruct:cobalt_nugget",
        "#forge:nuggets/cobalt"
    ]
  );
  removedupes(
    "gtceu:cobalt_ingot",
    [
        "tconstruct:cobalt_ingot",
        "#forge:ingots/cobalt"
    ]
  );
  removedupes(
    "gtceu:cobalt_block",
    [
        "tconstruct:cobalt_block",
        "#forge:blocks/cobalt"
    ]
  );
  //certus quartz
  removedupes(
    "ae2:certus_quartz_crystal",
    [
        "gtceu:certus_quartz_gem",
        "#forge:gems/certus_quartz"
    ]
  );
  removedupes(
    "ae2:quartz_block",
    [
        "gtceu:certus_quartz_block",
        "#forge:storage_blocks/certus_quartz"
    ]
  );
  //obsidian
  removedupes(
    "gtceu:obsidian_dust",
    [
        "create:powdered_obsidian",
        "#forge:dusts/obsidian"
    ]
  );
  removedupes(
    "gtceu:obsidian_plate",
    [
        "create:sturdy_sheet",
        "#forge:plates/obsidian"
    ]
  );
  //sulfur
  event.remove({ id: "alexscaves:gunpowder_from_sulfur" });
  event.remove({ output: "alexscaves:sulfur" });
  removedupes(
    "gtceu:sulfur_dust",
    [
        "alexscaves:sulfur_dust",
        "#forge:dusts/sulfur"
    ]
  );
  //uranium
  event.remove({ output: "create:crushed_raw_uranium" });
  event.remove({ output: "crowns:uranium_ingot" });
  event.replaceInput({ input: "#forge:raw_materials/uranium" }, "#forge:raw_materials/uranium", "alexscaves:uranium");
});
