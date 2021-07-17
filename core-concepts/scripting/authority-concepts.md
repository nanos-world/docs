---
description: All you need to know about Authority & Network Authority concepts.
---

# Authority Concepts

## Authority

Some Classes can only be spawned on the Server, others can only be spawned in the Client, and there are some which can be spawned in both Server or Client. The side which the Class is spawned is called **Authority**.

### Methods & Events Availability

Some methods and events in the API are only available on a specific side \(Client or Server\), others are only available in the side which spawned it \([Authority ](../../scripting-reference/glossary/#authority)side\):

![server-only-label](https://docs.nanos.world/_images/server-only.svg)​ **`Server Side`** - Method or Events which can only be called in the **Server** side.

![client-only-label](https://docs.nanos.world/_images/client-only.svg) **`Client Side`** - Methods or Events which can only be called in the **Client** side.

![authority-only-label](https://docs.nanos.world/_images/authority-only.svg) **`Authority Side`** - Methods or Events which can only be called in the side which spawned it.

{% hint style="success" %}
All entities spawned in the **Server** will be automatically synced in the **Client**. I.e. you can access it's methods and get all data from it without needing to manually sync it.

In the same way, entities spawned in the **Client** will only exist for that Client, trying to send those entities to the server will cause errors.
{% endhint %}

## Network Authority

Another important concept in nanos world is the **Network Authority**. We have a "_distributed network authority_" concept, which means the work of calculating physics and AI \(for example\) are automatically assigned and distributed to the clients. In general, if an [Actor](../../scripting-reference/classes/base-classes/actor.md) is near an in-game Character, it's physics will be calculated by that player's device. The Player that is responsible for calculating and sharing the results is called **Network Authority**.

The Player assigned is automatically calculated by the server and takes some things into consideration, this calculation is only made if the Player is possessing a Character:

* The **distance** from the Character to the object
* If the Character is **grabbing** a [Prop](../../scripting-reference/classes/prop.md)
* If the Character is **handling** a [Pickable](../../scripting-reference/classes/base-classes/pickable.md)
* If the Character is **driving** a Vehicle
* If the Character has just **shot** something

In all this cases, the Player will be automatically assigned to be the **Network Authority** of that Object.

### Overriding the current Network Authority

It is possible to override the current Network Authority of a specific entity by using the method `:SetNetworkAuthority()`.

{% hint style="warning" %}
**Note:** Some actors aren't **Network Distributed**. This means they will not be automatically assigned neither be able to have it's Network Authority changed. You can check if an entity is Network Distributed with the method `:IsNetworkDistributed()`.
{% endhint %}

As currently the automatic network authority selection is not immediate, It is usually a good idea to force the Network Authority on objects or AI which has just been spawned and you want to have a immediate action. Examples:

* Spawning a [Prop](../../scripting-reference/classes/prop.md) which you want to immediately apply `:SetForce()`
* Spawning a [Prop ](../../scripting-reference/classes/prop.md)which was inputted by a Player \(e.g. from a Spawn Menu\)
* Spawning a [Character NPC](artificial-intelligence.md) which you want to immediately start walking around with `:MoveTo()`

{% hint style="warning" %}
Soon™ we will have a solution for auto assigning Network Authority for newly spawned objects.
{% endhint %}

