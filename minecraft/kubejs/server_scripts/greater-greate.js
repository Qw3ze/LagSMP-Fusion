ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  const create = event.recipes.create;
  //made by yours truelly: AIDEN HAHAHAHHAHHAHHHAHAHHAHHH
  function fix_shaft(mat,mod) {
    event.remove({ output: "greate:"+mat+"_shaft"});
    greg.cutter(mat+"_shaft")
      .itemInputs(mod+":"+mat)
      .itemOutputs("9x greate:"+mat+"_shaft")
      .duration(100)
      .EUt(8);
  }
  function fix_shaft_ingot(mat, mod) {
    event.remove({ output: "greate:" + mat + "_shaft" });
    greg.cutter(mat + "_shaft")
      .itemInputs(mod + ":" + mat+"_ingot")
      .itemOutputs("9x greate:" + mat + "_shaft")
      .duration(100)
      .EUt(32);
  }
  //fixing the shaft recipies
  fix_shaft("andesite_alloy","create");
  fix_shaft_ingot("aluminium","gtceu");
  fix_shaft_ingot("darmstadtium","gtceu");
  fix_shaft_ingot("titanium","gtceu");
  fix_shaft_ingot("rhodium_plated_palladium","gtceu");
  fix_shaft_ingot("naquadah_alloy","gtceu");
  fix_shaft_ingot("tungsten_steel","gtceu");
  fix_shaft_ingot("steel","gtceu");
  fix_shaft_ingot("neutronium","gtceu");
  fix_shaft_ingot("stainless_steel","gtceu");
    
  //fixing the large and small cogwheel
  event.remove({output:"greate:andesite_alloy_cogwheel"});
  event.remove({output:"greate:large_andesite_alloy_cogwheel"});
  create.deploying("greate:andesite_alloy_cogwheel", ["greate:andesite_alloy_shaft", "#minecraft:planks"]);
  create.deploying("greate:large_andesite_alloy_cogwheel", ["greate:andesite_alloy_cogwheel", "#minecraft:planks"]);
  event.shaped('8x greate:andesite_alloy_shaft', [
    'A',
    'A'
  ], {
    A: 'greate:andesite_alloy'
  });
  event.shaped('greate:andesite_alloy_cogwheel', [
    'BA'
  ], {
    A: '#minecraft:planks',
    B: 'greate:andesite_alloy_shaft'
  });
  event.shaped('greate:large_andesite_alloy_cogwheel', [
    'BA',
    'A '
  ], {
    A: '#minecraft:planks',
    B: 'greate:andesite_alloy_shaft'
  });
  event.shaped('greate:large_andesite_alloy_cogwheel', [
    'BA'
  ], {
    A: '#minecraft:planks',
    B: 'greate:andesite_alloy_cogwheel'
  });
  //fixing crushing wheel
  function fix_wheel(tier,next_tier){
    create.mechanical_crafting("greate:"+tier+"_crushing_wheel", [
      ' AAA ',
      'AABAA',
      'ABCBA',
      'AABAA',
      ' AAA ',
    ], {
      A: "gtceu:" + tier + "_ingot",
      B: "gtceu:" + next_tier + "_plate",
      C: "greate:" + tier + "_shaft"
    });
  }
   
  fix_wheel("steel","aluminium");
  fix_wheel("aluminium","stainless_steel");
  fix_wheel("stainless_steel","titanium");
  fix_wheel("titanium","tungsten_steel");
  fix_wheel("tungsten_steel","rhodium_plated_palladium");
  fix_wheel("rhodium_plated_palladium","naquadah_alloy");
  fix_wheel("naquadah_alloy","darmstadtium");
  fix_wheel("darmstadtium","neutronium");
});