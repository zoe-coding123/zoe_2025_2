---
layout: base
title: RPGv0.0
permalink: /rpgv0.0.md/
---

<canvas id='gameCanvas'></canvas>

<script type="module">
    import GameLevelWater from '{{site.baseurl}}/assets/js/rpgv0.0/GameLevelWater.js';
    import GameControl from '{{site.baseurl}}/assets/js/rpgv0.0/GameControl.js';

    const path = "{{site.baseurl}}";
    const gameLevelWater = new GameLevelWater(path);

    // Start game engine
    GameControl.start(gameLevelWater);
</script>
