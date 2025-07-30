ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;

    //chests
    
    //copper chests
    event.remove({ output: "ironchest:copper_chest" });
    event.shaped('ironchest:copper_chest', [
        'ABA', 
        'BCB',
        'ABA'  
      ], {
        A: 'minecraft:copper_block', 
        B: 'minecraft:copper_ingot',
        C: 'minecraft:chest'
      }
    );
    event.remove({ output: "ironchest:wood_to_copper_chest_upgrade" });
    event.shaped('ironchest:wood_to_copper_chest_upgrade', [
        'ABA', 
        'BCB',
        'ABA'  
      ], {
        A: 'minecraft:copper_block', 
        B: 'minecraft:copper_ingot',
        C: '#minecraft:planks'
      }
    );
    //iron chests
    event.remove({ output: "ironchest:iron_chest" });
    event.shaped('ironchest:iron_chest', [
        'ABA', 
        'BCB',
        'ABA'  
      ], {
        A: 'minecraft:iron_block', 
        B: 'minecraft:iron_ingot',
        C: 'ironchest:copper_chest'
      }
    );
    event.remove({ output: "ironchest:wood_to_iron_chest_upgrade" });
    event.remove({ output: "ironchest:copper_to_iron_chest_upgrade" });
    event.shaped('ironchest:copper_to_iron_chest_upgrade', [
        'ABA', 
        'BCB',
        'ABA'  
      ], {
        A: 'minecraft:iron_block', 
        B: 'minecraft:iron_ingot',
        C: 'minecraft:copper_ingot'
      }
    );
    //gold chests
    event.remove({ output: "ironchest:gold_chest" });
    event.shaped('ironchest:gold_chest', [
        'ABA', 
        'BCB',
        'ABA'  
      ], {
        A: 'minecraft:gold_block', 
        B: 'minecraft:gold_ingot',
        C: 'ironchest:iron_chest'
      }
    );
    event.remove({ output: "ironchest:iron_to_gold_chest_upgrade" });
    event.shaped('ironchest:iron_to_gold_chest_upgrade', [
        'ABA', 
        'BCB',
        'ABA'  
      ], {
        A: 'minecraft:gold_block', 
        B: 'minecraft:gold_ingot',
        C: 'minecraft:iron_ingot'
      }
    );
    //diamond chest
    event.remove({ output: "ironchest:diamond_chest" });
    event.shaped('ironchest:diamond_chest', [
        'ABA', 
        'BCB',
        'ABA'  
      ], {
        A: 'minecraft:diamond_block', 
        B: 'minecraft:diamond',
        C: 'ironchest:gold_chest'
      }
    );
    event.remove({ output: "ironchest:gold_to_diamond_chest_upgrade" });
    event.shaped('ironchest:gold_to_diamond_chest_upgrade', [
        'ABA', 
        'BCB',
        'ABA'  
      ], {
        A: 'minecraft:diamond_block', 
        B: 'minecraft:diamond',
        C: 'minecraft:gold_ingot'
      }
    );
    //obsidian chest
    event.remove({ output: "ironchest:obsidian_chest" });
    event.shaped('ironchest:obsidian_chest', [
        'ABA', 
        'BCB',
        'ABA'  
      ], {
        A: 'gtceu:dense_obsidian_plate', 
        B: 'gtceu:steel_ingot',
        C: 'ironchest:diamond_chest'
      }
    );
    event.remove({ output: "ironchest:diamond_to_obsidian_chest_upgrade" });
    event.shaped('ironchest:diamond_to_obsidian_chest_upgrade', [
        'ABA', 
        'BCB',
        'ABA'  
      ], {
        A: 'gtceu:dense_obsidian_plate', 
        B: 'gtceu:steel_ingot',
        C: 'minecraft:diamond'
      }
    );
    
    //vault

    //netherite vault
    event.replaceInput(
    { output: 'create_bs:netherite_item_vault' },
        'minecraft:raw_gold_block',
        'minecraft:gold_ingot'
    );

    //ae2
    
});