ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;

  function adjustOutput(recipe, item, amount) {
    event.replaceInput(
        { id: recipe },
        item,
        amount + "x " + item
    );
  }
});