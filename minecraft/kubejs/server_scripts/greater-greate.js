ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  //made by yours truelly: AIDEN HAHAHAHHAHHAHHHAHAHHAHHH
  function fix_shaft(mat,mod) {
    event.remove({ output: "greate:" + mat+"_shaft"});
    greg.cutter(mat + "_shaft")
      .itemInputs(mod + ":" + mat)
      .itemOutputs("9x greate:" + mat + "_shaft")
      .duration(300)
      .EUt(30);
  }
  function fix_shaft_ingot(mat, mod) {
    event.remove({ output: "greate:" + mat + "_shaft" });
    greg.cutter(mat + "_shaft")
      .itemInputs(mod + ":" + mat+"_ingot")
      .itemOutputs("9x greate:" + mat + "_shaft")
      .duration(300)
      .EUt(30);
  }
  fix_shaft("andesite_alloy","create");
  fix_shaft_ingot("steel","gtceu");
  fix_shaft_ingot("aluminium","gtceu");
  fix_shaft_ingot("stainless_steel","gtceu");
  fix_shaft_ingot("titanium","gtceu");
  fix_shaft_ingot("tungsten_steel","gtceu");
  fix_shaft_ingot("rhodium_plated_palladium","gtceu");
  fix_shaft_ingot("naquadah_alloy","gtceu");
  fix_shaft_ingot("darmstadtium","gtceu");
  fix_shaft_ingot("neutronium","gtceu");
});
