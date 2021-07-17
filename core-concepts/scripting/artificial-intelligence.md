---
description: How AI works in nanos world
---

# Artificial Intelligence

{% hint style="warning" %}
🚧 This page is under construction.
{% endhint %}

Every [Character](../../scripting-reference/classes/character.md) spawned without a [Player](https://github.com/nanos-world/docs-gitbook/tree/7181f9ecaeb982ff8f3871bf3380b85b217260a4/scripting-reference/classes/cable.md) possessing it will automatically be possessed by an **AI** Controller. Which means you can use Character methods such as `:MoveTo()` and `:LookAt()`.

In nanos world, AI as well as Physics are things distributed through Clients to be calculated and shared with the other Players \(please refer to [Network Authority](authority-concepts.md#network-authority)\), which means the **AI** will only work if there is a Player connected to the server.

{% hint style="info" %}
If you input a NPC to `:MoveTo()` somewhere and there is no Player connected, he will only start walking once a Player joins the server.
{% endhint %}

## Navigation Mesh

In order to NPCs to figure out the path to walk, the map will need to have a [NavMesh](https://docs.unrealengine.com/4.26/en-US/Resources/ContentExamples/NavMesh/) configured.

![](../../.gitbook/assets/image%20%2846%29.png)

