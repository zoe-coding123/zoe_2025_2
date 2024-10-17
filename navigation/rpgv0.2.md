---
layout: base
title: RPGv0.2
permalink: /rpgv0.2/
---

<canvas id='gameCanvas'></canvas>

<script type="module">
    import GameLevelWater from '{{site.baseurl}}/assets/js/rpgv0.2/GameLevelWater.js';
    import GameControl from '{{site.baseurl}}/assets/js/rpgv0.2/GameControl.js';

    const path = "{{site.baseurl}}";
    const gameLevelWater = new GameLevelWater(path);

    // Start game engine
    GameControl.start(gameLevelWater);
</script>