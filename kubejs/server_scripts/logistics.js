ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;

  //brass tunnel and funnel
  event.replaceInput(
    { output: 'create:brass_funnel' },
    'minecraft:dried_kelp',
    'create:andesite_funnel'
  );
  event.replaceOutput(
    { output: 'create:brass_funnel' },
    'create:brass_funnel',
    'create:brass_funnel'
  );
  event.replaceInput(
    { output: 'create:brass_tunnel' },
    'minecraft:dried_kelp',
    'create:andesite_tunnel'
  );

});