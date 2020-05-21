.. _PopulatingTestingMap:

**********************
Populating Testing Map
**********************


About
-----

This is part of the default script used in the testing sessions

.. note:: This Script uses `<https://github.com/nanos-world/nanos-world-weapons>`_ Package.


Code
-----

.. tabs::
 .. code-tab:: lua Lua

    -- Includes Nanos World Weapons Package
    Package:RequirePackage("nanos-world-weapons")

    NanosTestingMap = {}

    Server:on("Start", function()
      NanosTestingMap = {
        Prop(Vector(-1676.000, 6963.000, 132.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_WoodenTable.SM_WoodenTable"),
        Prop(Vector(-1711.000, 7008.000, 132.000), Rotator(0.000000, -149.999969, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_WoodenChair.SM_WoodenChair"),
        Prop(Vector(-1786.000, 7273.000, 102.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/Extra/SM_TireLarge.SM_TireLarge"),
        Prop(Vector(-1875.000, 7283.000, 140.000), Rotator(-28.768557, 170.121216, -0.247620),  "NanosWorld/Art/Rural/Extra/SM_TireLarge.SM_TireLarge"),
        Prop(Vector(-3721.000, 8549.000, 122.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_Stool.SM_Stool"),
        Prop(Vector(-1686.000, 6983.000, 217.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_TeaPot_Interior.SM_TeaPot_Interior"),
        Prop(Vector(-1591.000, 7178.000, 116.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/ExteriorDecoration/SM_OilDrum.SM_OilDrum"),
        Prop(Vector(-4606.000, 9042.000, 102.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/Extra/SM_Bucket5Gallon.SM_Bucket5Gallon"),
        Prop(Vector(-4322.000, 8214.000, 102.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/Extra/SM_Crate_07.SM_Crate_07"),
        Prop(Vector(-4309.000, 8197.000, 154.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_Crate_03.SM_Crate_03"),
        Prop(Vector(-4291.000, 8122.000, 102.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_Crate_04.SM_Crate_04"),
        Prop(Vector(-1675.000, 6930.000, 225.191), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_Pot_01.SM_Pot_01"),
        Prop(Vector(-1622.000, 6969.000, 231.875), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_Pot_02.SM_Pot_02"),
        Prop(Vector(-985.000, 4936.000, 238.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_TeaPot_Interior.SM_TeaPot_Interior"),
        Prop(Vector(-966.000, 5086.000, 232.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_Plate_Interior.SM_Plate_Interior"),
        Prop(Vector(592.000, -5047.000, 437.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/Extra/SM_Barrel_02.SM_Barrel_02"),
        Prop(Vector(9231.957, 1057.091, 94.046), Rotator(0.000000, -95.000000, 5.000049),  "NanosWorld/Art/Rural/HouseModular/SM_Bamboo_Roof45_Right.SM_Bamboo_Roof45_Right"),
        Prop(Vector(8931.000, -7428.000, 243.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_Stool.SM_Stool"),
        Prop(Vector(-2552.000, -5090.000, 132.000), Rotator(-4.980929, 0.436880, 4.981057),  "NanosWorld/Art/Rural/Extra/SM_TireLarge.SM_TireLarge"),
        Prop(Vector(-5565.000, 40.000, 426.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/Extra/SM_Crate_07.SM_Crate_07"),
        Prop(Vector(-5250.000, -375.000, 426.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_MetalBucket_Interior_02.SM_MetalBucket_Interior_02"),
        Prop(Vector(-5520.000, 5.000, 481.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_Basket_01.SM_Basket_01"),
        Prop(Vector(-5060.000, -340.000, 431.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_WoodenTable.SM_WoodenTable"),
        Prop(Vector(-5060.000, -310.000, 516.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_Crate_03.SM_Crate_03"),
        Prop(Vector(-5520.000, 600.000, 514.792), Rotator(0.000000, 0.000000, -89.999962),  "NanosWorld/Art/Rural/Extra/SM_TireLarge.SM_TireLarge"),
        Prop(Vector(-965.000, 5555.000, 141.000), Rotator(0.000000, 75.937462, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_WoodenChair.SM_WoodenChair"),
        Prop(Vector(-1055.000, 5580.000, 141.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_WoodenTable.SM_WoodenTable"),
        Prop(Vector(-1135.000, 5555.000, 141.000), Rotator(0.000000, -70.312706, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_WoodenChair.SM_WoodenChair"),
        Prop(Vector(-5780.000, 8380.000, 126.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_Stool.SM_Stool"),
        Prop(Vector(-5305.000, 7920.000, 126.000), Rotator(0.000000, 0.000000, 0.000000),  "NanosWorld/Art/Rural/InteriorDecoration/SM_WoodenChair.SM_WoodenChair"),
        Prop(Vector(-5455.000, 8440.000, 391.000), Rotator(0.000000, 0.000000, 81.562393),  "NanosWorld/Art/Rural/Extra/SM_Bamboo_Woodplank_01.SM_Bamboo_Woodplank_01"),

        NanosWorldWeapons.AK47(Vector(-1850, 9153, 192), Rotator(0, 90, 90)),
        NanosWorldWeapons.AK74U(Vector(-1900, 9153, 192), Rotator(0, 90, 90)),
        NanosWorldWeapons.GE36(Vector(-1950, 9153, 192), Rotator(0, 90, 90)),
        NanosWorldWeapons.AP5(Vector(-2000, 9153, 192), Rotator(0, 90, 90)),
        NanosWorldWeapons.SMG11(Vector(-2050, 9153, 192), Rotator(0, 90, 90)),
        NanosWorldWeapons.Moss500(Vector(-2100, 9153, 192), Rotator(0, 90, 90)),
        NanosWorldWeapons.Glock(Vector(-2150, 9153, 192), Rotator(0, 90, 90)),
        NanosWorldWeapons.DesertEagle(Vector(-2200, 9153, 192), Rotator(0, 90, 90)),
        NanosWorldWeapons.AR4(Vector(-2250, 9153, 192), Rotator(0, 90, 90)),
        Grenade(Vector(-2300, 9153, 192), Rotator(0, 90, 90), "NanosWorld/Core/Weapons/Grenades/BP_Grenade_G67.BP_Grenade_G67_C"),

        NanosWorldWeapons.AK47(Vector(-1850, 9234, 192), Rotator(0, 90, 90)),
        NanosWorldWeapons.AK74U(Vector(-1900, 9234, 192), Rotator(0, 90, 90)),
        NanosWorldWeapons.GE36(Vector(-1950, 9234, 192), Rotator(0, 90, 90)),
        NanosWorldWeapons.AP5(Vector(-2000, 9234, 192), Rotator(0, 90, 90)),
        NanosWorldWeapons.SMG11(Vector(-2050, 9234, 192), Rotator(0, 90, 90)),
        NanosWorldWeapons.Moss500(Vector(-2100, 9234, 192), Rotator(0, 90, 90)),
        NanosWorldWeapons.Glock(Vector(-2150, 9234, 192), Rotator(0, 90, 90)),
        NanosWorldWeapons.DesertEagle(Vector(-2200, 9234, 192), Rotator(0, 90, 90)),
        NanosWorldWeapons.AR4(Vector(-2250, 9234, 192), Rotator(0, 90, 90)),
        Grenade(Vector(-2300, 9234, 192), Rotator(0, 90, 90), "NanosWorld/Core/Weapons/Grenades/BP_Grenade_G67.BP_Grenade_G67_C"),

        NanosWorldWeapons.Glock(Vector(-5120, 6977, 195), Rotator(0, -45, -90)),
        NanosWorldWeapons.Glock(Vector(-5067, 6948, 195), Rotator(0, 0, -90)),
        NanosWorldWeapons.Glock(Vector(-5008, 6912, 195), Rotator(0, -22, -90)),
        NanosWorldWeapons.SMG11(Vector(-973, 4995, 235), Rotator(0, 0, -90)),
        NanosWorldWeapons.GE36(Vector(3660, 11025, 57), Rotator(0, 0, 90)),
        NanosWorldWeapons.AK47(Vector(7543, 5589, 210), Rotator(0, 90, 90)),
        NanosWorldWeapons.AK74U(Vector(7466, 5589, 210), Rotator(0, 90, 90)),
        NanosWorldWeapons.AR4(Vector(7368, 5589, 210), Rotator(0, 90, 90)),
        NanosWorldWeapons.Moss500(Vector(7343, 5572, 156), Rotator(0, 0, 90)),
        NanosWorldWeapons.Moss500(Vector(7481, 5572, 156), Rotator(0, 0, 90)),
        NanosWorldWeapons.AP5(Vector(-4054, 8095, 145), Rotator(0, 0, -90)),

        NanosWorldWeapons.AK74U(Vector(9137, 1304, 113), Rotator(-5, 0, -90)),
        NanosWorldWeapons.AK47(Vector(9137, 1243, 113), Rotator(-5, 0, -90)),
        NanosWorldWeapons.GE36(Vector(9137, 1155, 113), Rotator(-5, 0, -90)),

        Vehicle(Vector(-40, 7262, 130), Rotator(0, -80, 0), "NanosWorld/Core/Vehicles/BP_Vehicle_SUV.BP_Vehicle_SUV_C"),
        Vehicle(Vector(530, 7344, 130), Rotator(0, -80, 0), "NanosWorld/Core/Vehicles/BP_Vehicle_Pickup.BP_Vehicle_Pickup_C"),
        Vehicle(Vector(480, 5080, 100), Rotator(0, -10, 0), "NanosWorld/Core/Vehicles/BP_Vehicle_Truck.BP_Vehicle_Truck_C"),
        Vehicle(Vector(1720, 1660, 118), Rotator(0, 0, 0), "NanosWorld/Core/Vehicles/BP_Vehicle_Truck_Chassis.BP_Vehicle_Truck_Chassis_C"),
        Vehicle(Vector(9650, -2840, 80), Rotator(0, -137, 0), "NanosWorld/Core/Vehicles/BP_Vehicle_Hatchback.BP_Vehicle_Hatchback_C"),
        Vehicle(Vector(-10630.0, 6870.0, 80), Rotator(0, -137, 0), "NanosWorld/Core/Vehicles/BP_Vehicle_SportCar.BP_Vehicle_SportCar_C"),
        Item(Vector(-1786.000, 7273.000, 120.000), Rotator(0, 0, 0), "NanosWorld/Core/Items/BP_Grabable_Torch.BP_Grabable_Torch_C"),
        Item(Vector(7575.000, 5287.000, 133.000), Rotator(0, 0, 15), "NanosWorld/Core/Items/BP_Grabable_Torch.BP_Grabable_Torch_C"),

        NanosWorldWeapons.AK47(Vector(-10928, 4225, 118), Rotator(0, 0, -90)),
        NanosWorldWeapons.AK47(Vector(-10940, 4150, 118), Rotator(0, 0, -90)),
        NanosWorldWeapons.AK47(Vector(-10950, 4066, 118), Rotator(0, 0, -90)),

        NanosWorldWeapons.GE36(Vector(-8029, 4132, 321), Rotator(0, 0, 90)),
        NanosWorldWeapons.GE36(Vector(-7945, 4132, 321), Rotator(0, 0, 90)),
        NanosWorldWeapons.GE36(Vector(-7857, 4132, 321), Rotator(0, 0, 90)),

        NanosWorldWeapons.AK74U(Vector(-9129, -3325, 112), Rotator(0, 0, 90)),
        NanosWorldWeapons.AK74U(Vector(-9129, -3237, 112), Rotator(0, 0, 90)),
        NanosWorldWeapons.AK74U(Vector(-9129, -3137, 112), Rotator(0, 0, 90)),
        NanosWorldWeapons.AR4(Vector(-9208, -3137, 112), Rotator(0, 0, 90)),
        NanosWorldWeapons.AR4(Vector(-9208, -3237, 112), Rotator(0, 0, 90)),
        NanosWorldWeapons.AR4(Vector(-9208, -3325, 112), Rotator(0, 0, 90)),
        NanosWorldWeapons.Moss500(Vector(2001, -10769, 123), Rotator(0, 0, 90)),
        NanosWorldWeapons.Moss500(Vector(2001, -10669, 123), Rotator(0, 0, 90)),
        Grenade(Vector(2001, -10380, 123), Rotator(0, 0, 0), "NanosWorld/Core/Weapons/Grenades/BP_Grenade_G67.BP_Grenade_G67_C"),

        NanosWorldWeapons.AP5(Vector(-10030, -2039, 100), Rotator(0, 0, -90)),
        NanosWorldWeapons.SMG11(Vector(-10167, -1895, 101), Rotator(0, 0, -90)),

        NanosWorldWeapons.GE36(Vector(-5243.0, -236, 481), Rotator(0, 90, -90)),
        NanosWorldWeapons.AP5(Vector(-5243, -115, 481), Rotator(0, 90, -90)),
      }
    end)