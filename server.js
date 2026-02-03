const express = require("express");
const path = require("path");

const app = express();

/* ===== GAME DATA (20 dummy games) ===== */
const games = [
  { id:1, title:"Action Arcade", category:"action", url:"https://html5.gamedistribution.com/dd2ab5adad664c508d3fa032bd19e8c8/", thumbnail:"https://via.placeholder.com/640x360/111/00ffcc?text=Action+Arcade" },
  { id:2, title:"Casual Fun", category:"casual", url:"https://html5.gamedistribution.com/ad01a468819748e7a9ce560dcfa4b5cf/", thumbnail:"https://via.placeholder.com/640x360/111/ffcc00?text=Casual+Fun" },
  { id:3, title:"Survival Mode", category:"survival", url:"https://html5.gamedistribution.com/2a7a74f769ea40babd7d55ed7704af44/", thumbnail:"https://via.placeholder.com/640x360/111/ff4444?text=Survival" },
  { id:4, title:"Endless Arcade", category:"arcade", url:"https://html5.gamedistribution.com/6ccf5ab92bf4469ea1988aafaba35ca2/", thumbnail:"https://via.placeholder.com/640x360/111/44ff44?text=Arcade" },
  { id:5, title:"Combat Arena", category:"action", url:"https://html5.gamedistribution.com/b207ec567c824d109249a0cd7c552275/", thumbnail:"https://via.placeholder.com/640x360/111/4488ff?text=Combat" },
  { id:6, title:"Fast Shooter", category:"action", url:"https://html5.gamedistribution.com/dd2ab5adad664c508d3fa032bd19e8c8/", thumbnail:"https://via.placeholder.com/640x360/111/ff00ff?text=Fast+Shooter" },
  { id:7, title:"Puzzle Fun", category:"casual", url:"https://html5.gamedistribution.com/ad01a468819748e7a9ce560dcfa4b5cf/", thumbnail:"https://via.placeholder.com/640x360/111/00ffff?text=Puzzle+Fun" },
  { id:8, title:"Zombie Survival", category:"survival", url:"https://html5.gamedistribution.com/2a7a74f769ea40babd7d55ed7704af44/", thumbnail:"https://via.placeholder.com/640x360/111/ff8800?text=Zombie+Survival" },
  { id:9, title:"Arcade Blast", category:"arcade", url:"https://html5.gamedistribution.com/6ccf5ab92bf4469ea1988aafaba35ca2/", thumbnail:"https://via.placeholder.com/640x360/111/44ffff?text=Arcade+Blast" },
  { id:10, title:"Space Combat", category:"action", url:"https://html5.gamedistribution.com/b207ec567c824d109249a0cd7c552275/", thumbnail:"https://via.placeholder.com/640x360/111/ff4444?text=Space+Combat" },
  { id:11, title:"Relaxing Clicker", category:"casual", url:"https://html5.gamedistribution.com/ad01a468819748e7a9ce560dcfa4b5cf/", thumbnail:"https://via.placeholder.com/640x360/111/00ff88?text=Clicker" },
  { id:12, title:"Survival Island", category:"survival", url:"https://html5.gamedistribution.com/2a7a74f769ea40babd7d55ed7704af44/", thumbnail:"https://via.placeholder.com/640x360/111/ffcc44?text=Survival+Island" },
  { id:13, title:"Arcade King", category:"arcade", url:"https://html5.gamedistribution.com/6ccf5ab92bf4469ea1988aafaba35ca2/", thumbnail:"https://via.placeholder.com/640x360/111/4488ff?text=Arcade+King" },
  { id:14, title:"Action Strike", category:"action", url:"https://html5.gamedistribution.com/dd2ab5adad664c508d3fa032bd19e8c8/", thumbnail:"https://via.placeholder.com/640x360/111/ff00cc?text=Action+Strike" },
  { id:15, title:"Casual Runner", category:"casual", url:"https://html5.gamedistribution.com/ad01a468819748e7a9ce560dcfa4b5cf/", thumbnail:"https://via.placeholder.com/640x360/111/ccff00?text=Runner" },
  { id:16, title:"Survival Night", category:"survival", url:"https://html5.gamedistribution.com/2a7a74f769ea40babd7d55ed7704af44/", thumbnail:"https://via.placeholder.com/640x360/111/8800ff?text=Survival+Night" },
  { id:17, title:"Arcade Mania", category:"arcade", url:"https://html5.gamedistribution.com/6ccf5ab92bf4469ea1988aafaba35ca2/", thumbnail:"https://via.placeholder.com/640x360/111/00ff44?text=Arcade+Mania" },
  { id:18, title:"Combat Zone", category:"action", url:"https://html5.gamedistribution.com/b207ec567c824d109249a0cd7c552275/", thumbnail:"https://via.placeholder.com/640x360/111/ff8800?text=Combat+Zone" },
  { id:19, title:"Casual Jump", category:"casual", url:"https://html5.gamedistribution.com/ad01a468819748e7a9ce560dcfa4b5cf/", thumbnail:"https://via.placeholder.com/640x360/111/44ff88?text=Jump" },
  { id:20, title:"Survival Quest", category:"survival", url:"https://html5.gamedistribution.com/2a7a74f769ea40babd7d55ed7704af44/", thumbnail:"https://via.placeholder.com/640x360/111/ff0044?text=Quest" }
];

/* ===== API ===== */
app.get("/api/games", (req, res) => {
  const search = (req.query.search || "").toLowerCase();
  const category = req.query.category || "all";
  const offset = parseInt(req.query.offset || 0);
  const limit = parseInt(req.query.limit || 4);

  let filtered = games.filter(g =>
    g.title.toLowerCase().includes(search) &&
    (category === "all" || g.category === category)
  );

  res.json({
    total: filtered.length,
    games: filtered.slice(offset, offset + limit)
  });
});

/* ===== Serve Frontend ===== */
app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
