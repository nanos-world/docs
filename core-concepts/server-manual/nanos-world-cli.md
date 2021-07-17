---
description: How to use nanos world CLI to install packages and update the server.
---

# Command Line Interface

nanos world provides a CLI \(Command Line Interface\) to help updating the server, packages and assets and also downloading them!

## Starting the CLI

To run the cli, start the server with `--cli` argument:

{% tabs %}
{% tab title="Windows" %}
```bash
./NanosWorldServer.exe --cli
```
{% endtab %}

{% tab title="Linux" %}
```
./NanosWorldServer --cli
```
{% endtab %}
{% endtabs %}

 After started, if you type `help` you can see all the available commands:

![](../../.gitbook/assets/image%20%281%29.png)

## CLI Commands

| Commands | Description |
| :--- | :--- |
| `install package [PACKAGE_NAME]` | Install a Package |
| `update package [PACKAGE_NAME]` | Update a Package |
| `install assets [ASSET_NAME]` | Install an Asset Pack |
| `update assets [ASSET_NAME]` | Update an Asset Pack |
| `update server` | Update the Server |

## One-Liner CLI

{% hint style="info" %}
It is also possible to run the CLI in a non-interactive mode, just run the command together after the `--cli`.
{% endhint %}

{% tabs %}
{% tab title="Windows" %}
```bash
./NanosWorldServer.exe --cli update server
```
{% endtab %}

{% tab title="Linux" %}
```
./NanosWorldServer --cli update server
```
{% endtab %}
{% endtabs %}

