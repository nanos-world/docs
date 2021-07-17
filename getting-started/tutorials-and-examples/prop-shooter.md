---
description: >-
  This sample code modifies a Weapon to make it shoot Props instead of normal
  bullets
---

# Prop Shooter

{% embed url="https://i.imgur.com/mCIPkOw.mp4" caption="" %}

{% tabs %}
{% tab title="Lua" %}
{% code title="Server/Index.lua" %}
```lua
Package.RequirePackage("NanosWorldWeapons")

my_weap = NanosWorldWeapons.AR4(Vector(-2250, 9153, 192), Rotator(0, 90, 90))
my_weap.BaseDamage = 0

my_weap:Subscribe("Fire", function(shooter)
    local control_rotation = shooter:GetControlRotation()
    local forward_vector = control_rotation:GetForwardVector()
    local spawn_location = shooter:GetLocation() + Vector(0, 0, 40) + forward_vector * Vector(200)

    local prop = Prop(spawn_location, control_rotation, "nanos-world::SM_TeaPot_Interior", 1)
    prop:AddImpulse(forward_vector * Vector(10000), true)
end)
```
{% endcode %}
{% endtab %}
{% endtabs %}

