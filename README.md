# Even More Heavenly Upgrades (Version Update)

A fan continuation of **Even More Heavenly Upgrades** by **pause**, for Cookie Clicker on Steam.

- Original mod: https://steamcommunity.com/sharedfiles/filedetails/?id=3075787967
- All credit for the upgrade design goes to pause, whose mod is an expansion of *More heavenly upgrades* by Ruby-Chan.

**No new content.** This fork exists only to fix bugs and get the existing upgrades working on the current version of the game.

Requires [CCSE](https://steamcommunity.com/sharedfiles/filedetails/?id=2685465009).

## Compatibility work

- **Mod ID did not match `Game.registerMod`.** `info.txt` declared `"ID": "EMHU"` while the code registered under the display name `Even More Heavenly Upgrades`.
- **Removed a dead `Game.customComputeLumpTimes` callback** that only declared unused local variables.
- **Replaced hardcoded upgrade IDs.** Egg unlocking looped `for (i = 210; i < 230; i++)` over `Game.UpgradesById`.
- **Switched the other seasonal unlocks to the game's own lists** — `Game.halloweenDrops`, `Game.heartDrops`, `Game.reindeerDrops`, `Game.santaDrops` instead of hardcoded name arrays.
- **Derived max levels from the game** instead of hardcoding them. Dragon and Santa now use `Game.dragonLevels.length - 1` and `Game.santaLevels.length - 1`.

## Bug fixes

- **The Divine CpS upgrades didn't seem like it was working.** Moved to the `cps` hook.
- **Five upgrades were registered twice.**
- **Granted upgrades desynced the owned-upgrade counter.**
- **Fixed building purchase costs after starting buildings buffs and reset building price increases.**
- **Fixed "Here be dragon" attaching to the wrong upgrade.**

## Install

Overwrite the `EvenMoreHeavenlyUpgrades` mod folder in your Steam workshop mods folder then enable it, and CCSE, under Options → Mods. Do not enable this alongside the original.

## License

GPL-3.0, per `LICENSE`. This fork will get taken down upon original modder's request.
