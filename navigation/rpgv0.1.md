---
layout: base
title: RPGv0.1
permalink: /rpg0.1.md/
---

<canvas id='gameCanvas'></canvas>

<script type="module">
    import GameLevelWater from '{{site.baseurl}}/assets/js/rpgv0.1/GameLevelWater.js';
    import GameControl from '{{site.baseurl}}/assets/js/rpgv0.1/GameControl.js';

    const path = "{{site.baseurl}}";
    const gameLevelWater = new GameLevelWater(path);

    // Start game engine
    GameControl.start(gameLevelWater);
</script>
