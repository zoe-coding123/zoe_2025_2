---
layout: base
title: RPG
permalink: /rpg.md/
---

<canvas id='gameCanvas'></canvas>

<script type="module">
    import GameLevelWater from '{{site.baseurl}}/assets/js/rpg/GameLevelWater.js';
    import GameControl from '{{site.baseurl}}/assets/js/rpg/GameControl.js';

    const path = "{{site.baseurl}}";
    const gameLevelWater = new GameLevelWater(path);

    // Start game engine
    GameControl.start(gameLevelWater);
</script>
