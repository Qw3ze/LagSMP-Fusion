ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;

    event.remove({ mod: 'oc2r' })
    //guide
    event.shapeless('oc2r:manual', [
        'minecraft:book',
        '#gtceu:circuits/mv'
    ])
    //scrench
    event.shapeless('oc2r:wrench', [
        'create:wrench',
        '#gtceu:circuits/mv'
    ])
    //computer
    event.shaped('oc2r:computer', [
        'DDD', 
        'CAC',
        'BBB'  
      ], {
        A: 'gtceu:mv_machine_hull', 
        B: 'gtceu:phenolic_printed_circuit_board',
        C: '#gtceu:batteries/mv',
        D: 'gtceu:aluminium_plate'
      }
    )
    event.shaped('oc2r:robot', [
        'DDD', 
        'CAC',
        'BEB'  
      ], {
        A: 'gtceu:mv_machine_hull', 
        B: 'gtceu:phenolic_printed_circuit_board',
        C: '#gtceu:batteries/mv',
        D: 'gtceu:aluminium_plate',
        E: 'minecraft:minecart'
      }
    )
    //cpu
    greg
    .assembler("cpu_1")
    .itemInputs(
        '2x #gtceu:circuits/mv',
        'gtceu:phenolic_printed_circuit_board')
    .itemOutputs("oc2r:cpu_tier_1")
    .duration(1000)
    .EUt(16);
    greg
    .assembler("cpu_2")
    .itemInputs(
        '4x #gtceu:circuits/hv',
        'gtceu:plastic_printed_circuit_board')
    .itemOutputs("oc2r:cpu_tier_2")
    .duration(1000)
    .EUt(64);
    greg
    .assembler("cpu_3")
    .itemInputs(
        '8x #gtceu:circuits/ev',
        'gtceu:epoxy_printed_circuit_board')
    .itemOutputs("oc2r:cpu_tier_3")
    .duration(1000)
    .EUt(256);
    greg
    .assembler("cpu_4")
    .itemInputs(
        '16x #gtceu:circuits/iv',
        'gtceu:fiber_reinforced_printed_circuit_board')
    .itemOutputs("oc2r:cpu_tier_4")
    .duration(1000)
    .EUt(1024);
    //storage
    greg
    .assembler("hard_drive_small")
    .itemInputs(
        '2x ae2:cell_component_1k',
        'gtceu:phenolic_printed_circuit_board')
    .itemOutputs("oc2r:hard_drive_small")
    .duration(1000)
    .EUt(16);
    greg
    .assembler("hard_drive_medium")
    .itemInputs(
        'ae2:cell_component_4k',
        'gtceu:phenolic_printed_circuit_board')
    .itemOutputs("oc2r:hard_drive_medium")
    .duration(1000)
    .EUt(16);
    greg
    .assembler("hard_drive_large")
    .itemInputs(
        '2x ae2:cell_component_4k',
        'gtceu:phenolic_printed_circuit_board')
    .itemOutputs("oc2r:hard_drive_large")
    .duration(1000)
    .EUt(16);
    greg
    .assembler("hard_drive_extra_large")
    .itemInputs(
        'ae2:cell_component_16k',
        'gtceu:phenolic_printed_circuit_board')
    .itemOutputs("oc2r:hard_drive_extra_large")
    .duration(1000)
    .EUt(16);
    //flash memory
    greg
    .assembler("flash_memory")
    .itemInputs(
        'ae2:1k_crafting_storage',
        'gtceu:phenolic_printed_circuit_board')
    .itemOutputs("oc2r:flash_memory")
    .duration(300)
    .EUt(8);
    /*
    //linux
    greg
    .assembler("hard_drive_custom")
    .itemInputs(
        'oc2r:hard_drive_large',
        '#gtceu:circuits/mv')
    .itemOutputs("oc2r:hard_drive_custom")
    .duration(1000)
    .EUt(16);
    */
    greg
    .assembler("flash_memory_custom")
    .itemInputs(
        'oc2r:flash_memory',
        '#gtceu:circuits/mv')
    .itemOutputs("oc2r:flash_memory_custom")
    .duration(1000)
    .EUt(16);
    //memory
    greg
    .assembler("memory_small")
    .itemInputs(
        '2x ae2:1k_crafting_storage',
        'gtceu:phenolic_printed_circuit_board')
    .itemOutputs("oc2r:memory_small")
    .duration(1000)
    .EUt(16);
    greg
    .assembler("memory_medium")
    .itemInputs(
        'ae2:4k_crafting_storage',
        'gtceu:phenolic_printed_circuit_board')
    .itemOutputs("oc2r:memory_medium")
    .duration(1000)
    .EUt(16);
    greg
    .assembler("memory_large")
    .itemInputs(
        '2x ae2:4k_crafting_storage',
        'gtceu:phenolic_printed_circuit_board')
    .itemOutputs("oc2r:memory_large")
    .duration(1000)
    .EUt(16);
    greg
    .assembler("memory_extra_large")
    .itemInputs(
        'ae2:16k_crafting_storage',
        'gtceu:phenolic_printed_circuit_board')
    .itemOutputs("oc2r:memory_extra_large")
    .duration(1000)
    .EUt(16);
    //network stuff
    greg
    .assembler("network_cable")
    .itemInputs(
        'ae2:fluix_glass_cable',
        'gtceu:aluminium_plate')
    .itemOutputs("oc2r:network_cable")
    .duration(100)
    .EUt(8);
    greg
    .assembler("network_connector")
    .itemInputs(
        'createaddition:large_connector',
        'gtceu:aluminium_plate')
    .itemOutputs("oc2r:network_connector")
    .duration(100)
    .EUt(8);
    /*
    greg
    .assembler("network_connector_alt")
    .itemInputs(
        'create_new_age:electrical_connector',
        'gtceu:aluminium_plate')
    .itemOutputs("oc2r:network_connector")
    .duration(100)
    .EUt(8);
    */
    //item transport stuff
    greg
    .assembler("bus_cable")
    .itemInputs(
        'ae2:fluix_glass_cable',
        'gtceu:tin_plate')
    .itemOutputs("oc2r:bus_cable")
    .duration(100)
    .EUt(8);
    greg
    .assembler("bus_interface")
    .itemInputs(
        '#ae2:interface',
        'gtceu:tin_plate')
    .itemOutputs("oc2r:bus_interface")
    .duration(100)
    .EUt(8);
    //blocks
    event.shapeless('oc2r:monitor', [
        'gtceu:mv_machine_hull',
        'gtceu:computer_monitor_cover',
        '#gtceu:circuits/mv'
    ])
    event.shapeless('oc2r:charger', [
        'gtceu:lv_charger_4x',
        '#gtceu:batteries/mv'
    ])
    event.shaped('oc2r:redstone_interface', [
        'DBD', 
        'CAC',
        'DBD'  
      ], {
        A: 'gtceu:mv_machine_hull', 
        B: 'minecraft:redstone_repeater',
        C: 'create:redstone_link',
        D: 'gtceu:aluminium_plate'
      }
    )
    event.shaped('oc2r:network_hub', [
        'DBD',
        'CAC',
        'DBD'
      ], {
        A: 'gtceu:mv_machine_hull', 
        B: '#gtceu:circuits/mv',
        C: 'oc2r:network_connector',
        D: 'gtceu:aluminium_plate'
      }
    )
    greg
    .assembler("keyboard")
    .itemInputs(
        '104x minecraft:stone_button',
        '#gtceu:circuits/mv')
    .itemOutputs("oc2r:keyboard")
    .duration(1500)
    .EUt(16);
    event.shapeless('oc2r:disk_drive', [
        'gtceu:mv_machine_hull',
        'minecraft:shulker_box',
        '#gtceu:circuits/mv'
    ])
    event.shapeless('oc2r:flash_memory_flasher', [
        'gtceu:mv_machine_hull',
        'oc2r:flash_memory',
        '#gtceu:circuits/mv'
    ])
    //floppy disks
    event.shaped('oc2r:floppy', [
        'B', 
        'A',
        'B'  
      ], {
        A: 'oc2r:hard_drive_large', 
        B: 'minecraft:shulker_shell'
      }
    )
    event.shaped('oc2r:floppy_modern', [
        'B', 
        'A',
        'B'  
      ], {
        A: 'oc2r:hard_drive_extra_large', 
        B: 'minecraft:shulker_shell'
      }
    )
    //cards
    event.shapeless('oc2r:redstone_interface_card', [
        'create:redstone_link',
        '#gtceu:circuits/mv'
    ])
    event.shapeless('oc2r:network_interface_card', [
        'oc2r:network_connector',
        '#gtceu:circuits/mv'
    ])
    event.shapeless('oc2r:network_tunnel_card', [
        'oc2r:network_cable',
        '#gtceu:circuits/mv'
    ])
    event.shapeless('oc2r:file_import_export_card', [
        'ae2:wireless_receiver',
        '#gtceu:circuits/ev'
    ])
    event.shapeless('oc2r:sound_card', [
        'minecraft:note_block',
        '#gtceu:circuits/mv'
    ])
    //modules
    event.shapeless('oc2r:inventory_operations_module', [
        'minecraft:shulker_box',
        '#gtceu:circuits/mv'
    ])
    event.shapeless('oc2r:block_operations_module', [
        'create:deployer',
        '#gtceu:circuits/mv'
    ])
    event.shapeless('oc2r:network_tunnel_module', [
        'oc2r:network_tunnel_card',
        '#gtceu:circuits/mv'
    ])
})