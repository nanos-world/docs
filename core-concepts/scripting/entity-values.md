---
description: How to store data in Entities accessible from anywhere
---

# Entity Values

In nanos world it is possible to store data on entities. Those values can be accessed by any Package and also you can determine if the value will be automatically synchronized with the Clients.

In [Actors](../../scripting-reference/classes/base-classes/actor.md) page we can find the definitions of `:SetValue()` and `:GetValue()` methods. Also it is possible to store Values globally on [Client](../../scripting-reference/static-classes/client.md) and [Server](../../scripting-reference/static-classes/server.md) Static Classes with the same methods!

{% hint style="info" %}
**Note:** On **Client** and **Server** Static Classes we won't have the last parameter `sync`. As the value will only exist on the side you are setting.
{% endhint %}

## `SetValue`

In any entity, you can use the command `:SetValue(key, value, sync)` to set any kind of value on that entity.

{% hint style="success" %}
It is possible to store [any](../../scripting-reference/glossary/basic-types.md#any) kind of value, except `functions`.
{% endhint %}

If you pass `sync` as true, that value will be automatically synchronized with all clients. Note that `sync`is an optional parameter only available on the **Server** side.

## `GetValue`

After set, you can access any value from any entity using `:GetValue(key)` on any entity you want. If you set the value to be synchronized on Clients, you will be able to get the values on the Client side as well.

{% hint style="warning" %}
Be aware that storing **entities** itself will not nullify the value if the entity is destroyed, so it is a good practice to validate if values with `:IsValid()` after retrieving them.
{% endhint %}

