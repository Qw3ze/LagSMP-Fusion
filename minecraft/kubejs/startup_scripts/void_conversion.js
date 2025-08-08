//uhh... you werent supposed to discover the recipe this way
const recipes = [
    { input: "lagsmp_discs:cassette_tape", output: "lagsmp_discs:corrupted_cassette_tape" },
    { input: "lagsmp_discs:azure_cassette_tape", output: "lagsmp_discs:corrupted_cassette_tape" },
    { input: "lagsmp_discs:monochrome_cassette_tape", output: "lagsmp_discs:corrupted_cassette_tape" },
];

ForgeEvents.onEvent(
    "net.minecraftforge.event.entity.EntityLeaveLevelEvent",
    (event) => {
      const { entity, level } = event;
      if (level.clientSide || !entity.item || entity.y > level.minBuildHeight)
        return;

      // Find the recipe corresponding to the item
      const recipe = recipes.find((r) => r.input === entity.item.getId());
      if (!recipe) return;

      const resultCount = entity.item.count;
      const resultEntity = entity.block.createEntity("item");

      // Apply the output item from the recipe
      resultEntity.item = recipe.output;
      resultEntity.item.count = resultCount;
      resultEntity.y = level.minBuildHeight - 20;
      resultEntity.spawn();
      resultEntity.setDeltaMovement(
        new Vec3d(0, (entity.fallDistance - 43) / 50, 0)
      );
      resultEntity.setNoGravity(true);
      resultEntity.setGlowing(true);
    }
);