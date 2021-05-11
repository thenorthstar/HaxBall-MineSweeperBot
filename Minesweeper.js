var Map = `{"name":"Minesweeper","width":420,"height":200,"cameraWidth":1000,"cameraHeight":500,"maxViewWidth":1000,"cameraFollow":"player","spawnDistance":365,"redSpawnPoints":[[-365,0]],"blueSpawnPoints":[[310,0]],"canBeStored":false,"kickOffReset":"full","bg":{"color":"808080","type":"grass","height":0,"width":0,"cornerRadius":0,"kickOffRadius":0},"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"kickOff":{"bCoef":0,"radius":0,"invMass":0.1,"gravity":[0,0.1],"damping":0.99,"cMask":["ball"],"cGroup":["ball"],"color":"transparent"},"field":{"cMask":["none"],"cGroup":["none"],"color":"C0C0C0"},"indicator_color_ball":{"cMask":["none"],"cGroup":["none"],"bCoef":0,"damping":0,"invMass":0},"indicator_number_1":{"bCoef":0,"radius":5,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"],"color":"0000FF"},"indicator_number_2":{"bCoef":0,"radius":7,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"],"color":"00C000"},"indicator_number_3":{"bCoef":0,"radius":9,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"],"color":"FF0000"},"indicator_number_4":{"bCoef":0,"radius":11,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"],"color":"0000C0"},"indicator_number_5":{"bCoef":0,"radius":13,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"],"color":"800000"},"indicator_number_6":{"bCoef":0,"radius":15,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"],"color":"00C060"},"indicator_number_7":{"bCoef":0,"radius":17,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"],"color":"000000"},"indicator_number_8":{"bCoef":0,"radius":19,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"],"color":"A9A9A9"},"mine":{"vis":true,"bCoef":1000,"radius":5,"invMass":0,"damping":0,"cMask":["red","blue"],"cGroup":["wall"],"color":"000000"},"flag":{"bCoef":0,"radius":20,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"],"color":"FF8000"},"theBigBrother":{"bCoef":0,"radius":2000,"invMass":0,"damping":0,"cMask":["c0"],"cGroup":["kick","wall"],"color":"transparent"},"indicator_color":{"cMask":["none"],"cGroup":["none"]}},"vertexes":[{"x":-200,"y":-200,"trait":"field"},{"x":200,"y":-200,"trait":"field"},{"x":-200,"y":200,"trait":"field"},{"x":200,"y":200,"trait":"field"},{"x":-200,"y":-160,"trait":"field"},{"x":200,"y":-160,"trait":"field"},{"x":-200,"y":-120,"trait":"field"},{"x":200,"y":-120,"trait":"field"},{"x":-200,"y":-80,"trait":"field"},{"x":200,"y":-80,"trait":"field"},{"x":-200,"y":-40,"trait":"field"},{"x":200,"y":-40,"trait":"field"},{"x":-200,"y":0,"trait":"field"},{"x":200,"y":0,"trait":"field"},{"x":-200,"y":40,"trait":"field"},{"x":200,"y":40,"trait":"field"},{"x":-200,"y":80,"trait":"field"},{"x":200,"y":80,"trait":"field"},{"x":-200,"y":120,"trait":"field"},{"x":200,"y":120,"trait":"field"},{"x":-200,"y":160,"trait":"field"},{"x":200,"y":160,"trait":"field"},{"x":-160,"y":-200,"trait":"field"},{"x":-160,"y":200,"trait":"field"},{"x":-120,"y":-200,"trait":"field"},{"x":-120,"y":200,"trait":"field"},{"x":-80,"y":-200,"trait":"field"},{"x":-80,"y":200,"trait":"field"},{"x":-40,"y":-200,"trait":"field"},{"x":-40,"y":200,"trait":"field"},{"x":0,"y":-200,"trait":"field"},{"x":0,"y":200,"trait":"field"},{"x":40,"y":-200,"trait":"field"},{"x":40,"y":200,"trait":"field"},{"x":80,"y":-200,"trait":"field"},{"x":80,"y":200,"trait":"field"},{"x":120,"y":-200,"trait":"field"},{"x":120,"y":200,"trait":"field"},{"x":160,"y":-200,"trait":"field"},{"x":160,"y":200,"trait":"field"},{"x":-255,"y":-150,"trait":"indicator_color"},{"x":-255,"y":-130,"trait":"indicator_color"},{"x":-260,"y":-110,"trait":"indicator_color"},{"x":-250,"y":-110,"trait":"indicator_color"},{"x":-250,"y":-100,"trait":"indicator_color"},{"x":-260,"y":-100,"trait":"indicator_color"},{"x":-260,"y":-90,"trait":"indicator_color"},{"x":-250,"y":-90,"trait":"indicator_color"},{"x":-260,"y":-70,"trait":"indicator_color"},{"x":-250,"y":-70,"trait":"indicator_color"},{"x":-250,"y":-50,"trait":"indicator_color"},{"x":-260,"y":-50,"trait":"indicator_color"},{"x":-260,"y":-60,"trait":"indicator_color"},{"x":-250,"y":-60,"trait":"indicator_color"},{"x":-260,"y":-30,"trait":"indicator_color"},{"x":-260,"y":-20,"trait":"indicator_color"},{"x":-250,"y":-20,"trait":"indicator_color"},{"x":-250,"y":-30,"trait":"indicator_color"},{"x":-250,"y":-10,"trait":"indicator_color"},{"x":-250,"y":10,"trait":"indicator_color"},{"x":-260,"y":10,"trait":"indicator_color"},{"x":-260,"y":20,"trait":"indicator_color"},{"x":-250,"y":20,"trait":"indicator_color"},{"x":-250,"y":30,"trait":"indicator_color"},{"x":-260,"y":30,"trait":"indicator_color"},{"x":-250,"y":50,"trait":"indicator_color"},{"x":-260,"y":50,"trait":"indicator_color"},{"x":-260,"y":70,"trait":"indicator_color"},{"x":-250,"y":70,"trait":"indicator_color"},{"x":-250,"y":60,"trait":"indicator_color"},{"x":-260,"y":60,"trait":"indicator_color"},{"x":-260,"y":90,"trait":"indicator_color"},{"x":-250,"y":90,"trait":"indicator_color"},{"x":-250,"y":110,"trait":"indicator_color"},{"x":-260,"y":130,"trait":"indicator_color"},{"x":-250,"y":130,"trait":"indicator_color"},{"x":-250,"y":150,"trait":"indicator_color"},{"x":-260,"y":150,"trait":"indicator_color"},{"x":-260,"y":140,"trait":"indicator_color"},{"x":-250,"y":140,"trait":"indicator_color"}],"segments":[{"v0":0,"v1":1,"trait":"field"},{"v0":2,"v1":3,"trait":"field"},{"v0":0,"v1":2,"trait":"field"},{"v0":1,"v1":3,"trait":"field"},{"v0":4,"v1":5,"trait":"field"},{"v0":6,"v1":7,"trait":"field"},{"v0":8,"v1":9,"trait":"field"},{"v0":10,"v1":11,"trait":"field"},{"v0":12,"v1":13,"trait":"field"},{"v0":14,"v1":15,"trait":"field"},{"v0":16,"v1":17,"trait":"field"},{"v0":18,"v1":19,"trait":"field"},{"v0":20,"v1":21,"trait":"field"},{"v0":22,"v1":23,"trait":"field"},{"v0":24,"v1":25,"trait":"field"},{"v0":26,"v1":27,"trait":"field"},{"v0":28,"v1":29,"trait":"field"},{"v0":30,"v1":31,"trait":"field"},{"v0":32,"v1":33,"trait":"field"},{"v0":34,"v1":35,"trait":"field"},{"v0":36,"v1":37,"trait":"field"},{"v0":38,"v1":39,"trait":"field"},{"v0":40,"v1":41,"color":"0000FF","trait":"indicator_color"},{"v0":42,"v1":43,"color":"00C000","trait":"indicator_color"},{"v0":43,"v1":44,"color":"00C000","trait":"indicator_color"},{"v0":44,"v1":45,"color":"00C000","trait":"indicator_color"},{"v0":45,"v1":46,"color":"00C000","trait":"indicator_color"},{"v0":46,"v1":47,"color":"00C000","trait":"indicator_color"},{"v0":48,"v1":49,"color":"FF0000","trait":"indicator_color"},{"v0":49,"v1":50,"color":"FF0000","trait":"indicator_color"},{"v0":50,"v1":51,"color":"FF0000","trait":"indicator_color"},{"v0":52,"v1":53,"color":"FF0000","trait":"indicator_color"},{"v0":54,"v1":55,"color":"0000C0","trait":"indicator_color"},{"v0":55,"v1":56,"color":"0000C0","trait":"indicator_color"},{"v0":57,"v1":58,"color":"0000C0","trait":"indicator_color"},{"v0":59,"v1":60,"color":"800000","trait":"indicator_color"},{"v0":60,"v1":61,"color":"800000","trait":"indicator_color"},{"v0":61,"v1":62,"color":"800000","trait":"indicator_color"},{"v0":62,"v1":63,"color":"800000","trait":"indicator_color"},{"v0":63,"v1":64,"color":"800000","trait":"indicator_color"},{"v0":65,"v1":66,"color":"00C060","trait":"indicator_color"},{"v0":66,"v1":67,"color":"00C060","trait":"indicator_color"},{"v0":67,"v1":68,"color":"00C060","trait":"indicator_color"},{"v0":68,"v1":69,"color":"00C060","trait":"indicator_color"},{"v0":69,"v1":70,"color":"00C060","trait":"indicator_color"},{"v0":71,"v1":72,"trait":"indicator_color"},{"v0":72,"v1":73,"trait":"indicator_color"},{"v0":74,"v1":75,"color":"A9A9A9","trait":"indicator_color"},{"v0":75,"v1":76,"color":"A9A9A9","trait":"indicator_color"},{"v0":76,"v1":77,"color":"A9A9A9","trait":"indicator_color"},{"v0":77,"v1":74,"color":"A9A9A9","trait":"indicator_color"},{"v0":78,"v1":79,"color":"A9A9A9","trait":"indicator_color"}],"goals":[],"discs":[{"pos":[419,199],"trait":"kickOff"},{"radius":3,"pos":[-310,-140],"color":"0000FF","trait":"indicator_color"},{"radius":5,"pos":[-310,-100],"color":"00C000","trait":"indicator_color"},{"radius":7,"pos":[-310,-60],"color":"FF0000","trait":"indicator_color"},{"radius":9,"pos":[-310,-20],"color":"0000C0","trait":"indicator_color"},{"radius":11,"pos":[-310,20],"color":"800000","trait":"indicator_color"},{"radius":13,"pos":[-310,60],"color":"00C060","trait":"indicator_color"},{"radius":15,"pos":[-310,100],"color":"000000","trait":"indicator_color"},{"radius":17,"pos":[-310,140],"color":"A9A9A9","trait":"indicator_color"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_1"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_2"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_3"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_4"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_5"},{"pos":[-1000,-1000],"trait":"indicator_number_6"},{"pos":[-1000,-1000],"trait":"indicator_number_6"},{"pos":[-1000,-1000],"trait":"indicator_number_6"},{"pos":[-1000,-1000],"trait":"indicator_number_6"},{"pos":[-1000,-1000],"trait":"indicator_number_6"},{"pos":[-1000,-1000],"trait":"indicator_number_6"},{"pos":[-1000,-1000],"trait":"indicator_number_6"},{"pos":[-1000,-1000],"trait":"indicator_number_6"},{"pos":[-1000,-1000],"trait":"indicator_number_6"},{"pos":[-1000,-1000],"trait":"indicator_number_6"},{"pos":[-1000,-1000],"trait":"indicator_number_6"},{"pos":[-1000,-1000],"trait":"indicator_number_6"},{"pos":[-1000,-1000],"trait":"indicator_number_6"},{"pos":[-1000,-1000],"trait":"indicator_number_6"},{"pos":[-1000,-1000],"trait":"indicator_number_6"},{"pos":[-1000,-1000],"trait":"indicator_number_6"},{"pos":[-1000,-1000],"trait":"indicator_number_6"},{"pos":[-1000,-1000],"trait":"indicator_number_6"},{"pos":[-1000,-1000],"trait":"indicator_number_7"},{"pos":[-1000,-1000],"trait":"indicator_number_7"},{"pos":[-1000,-1000],"trait":"indicator_number_7"},{"pos":[-1000,-1000],"trait":"indicator_number_7"},{"pos":[-1000,-1000],"trait":"indicator_number_7"},{"pos":[-1000,-1000],"trait":"indicator_number_7"},{"pos":[-1000,-1000],"trait":"indicator_number_7"},{"pos":[-1000,-1000],"trait":"indicator_number_7"},{"pos":[-1000,-1000],"trait":"indicator_number_7"},{"pos":[-1000,-1000],"trait":"indicator_number_7"},{"pos":[-1000,-1000],"trait":"indicator_number_7"},{"pos":[-1000,-1000],"trait":"indicator_number_7"},{"pos":[-1000,-1000],"trait":"indicator_number_8"},{"pos":[-1000,-1000],"trait":"indicator_number_8"},{"pos":[-1000,-1000],"trait":"indicator_number_8"},{"pos":[-1000,-1000],"trait":"indicator_number_8"},{"pos":[-1000,-1000],"trait":"indicator_number_8"},{"pos":[-1000,-1000],"trait":"indicator_number_8"},{"pos":[1000,-1000],"trait":"mine"},{"pos":[1000,-1000],"trait":"mine"},{"pos":[1000,-1000],"trait":"mine"},{"pos":[1000,-1000],"trait":"mine"},{"pos":[1000,-1000],"trait":"mine"},{"pos":[1000,-1000],"trait":"mine"},{"pos":[1000,-1000],"trait":"mine"},{"pos":[1000,-1000],"trait":"mine"},{"pos":[1000,-1000],"trait":"mine"},{"pos":[1000,-1000],"trait":"mine"},{"pos":[0,-1000],"trait":"flag"},{"pos":[0,-1000],"trait":"flag"},{"pos":[0,-1000],"trait":"flag"},{"pos":[0,-1000],"trait":"flag"},{"pos":[0,-1000],"trait":"flag"},{"pos":[0,-1000],"trait":"flag"},{"pos":[0,-1000],"trait":"flag"},{"pos":[0,-1000],"trait":"flag"},{"pos":[0,-1000],"trait":"flag"},{"pos":[0,-1000],"trait":"flag"},{"pos":[0,0],"trait":"theBigBrother"}],"planes":[{"normal":[1,0],"dist":-420,"bCoef":0,"cMask":["red","blue"],"_data":{"extremes":{"normal":[1,0],"dist":-420,"canvas_rect":[-2000,-2000,2000,2000],"a":[-420,-2000],"b":[-420,2000]}}},{"normal":[-1,0],"dist":-420,"bCoef":0,"cMask":["red","blue"],"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-2000,-2000,2000,2000],"a":[420,-2000],"b":[420,2000]}}},{"normal":[0,1],"dist":-200,"bCoef":0,"cMask":["red","blue"],"_data":{"extremes":{"normal":[0,1],"dist":-200,"canvas_rect":[-2000,-2000,2000,2000],"a":[-2000,-200],"b":[2000,-200]}}},{"normal":[0,-1],"dist":-200,"bCoef":0,"cMask":["red","blue"],"_data":{"extremes":{"normal":[0,-1],"dist":-200,"canvas_rect":[-2000,-2000,2000,2000],"a":[-2000,200],"b":[2000,200]}}},{"normal":[0,-1],"dist":-200,"bCoef":0,"cMask":["ball"],"cGroup":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-200,"canvas_rect":[-2000,-2000,2000,2000],"a":[-2000,200],"b":[2000,200]}}}],"joints":[],"playerPhysics":{"kickback":0,"kickStrength":0},"ballPhysics":"disc0"}`

const activities = {}
var DiscordInviteLink = ""; //Insert your discord server's invite link here

var JMap = JSON.parse(Map);

var Points = [];
var Booleans = [];
var indicators_1 = [];
var indicators_2 = [];
var indicators_3 = [];
var indicators_4 = [];
var indicators_5 = [];
var indicators_6 = [];
var indicators_7 = [];
var indicators_8 = [];
var flags = [];

geo = {"code":"eu","lat":52,"lon":21} //You can edit this (lat: From -90 to 90) (lon: From -180 to 180)
var room = HBInit({ roomName: "⛏🚩 Minesweeper 💣💥", playerName: "", noPlayer:true, public:true, maxPlayers: 1, geo}); //Edit HaxBall Headless API to reduce the capacity to 1 person.

room.setCustomStadium(Map);
room.setScoreLimit(0);
room.setTimeLimit(0);
room.setTeamsLock(true);

function GenerateBooleans(){ //Booleans are generated with respect to the amount of mines and the randomized at Mix()
    for(var f=0; f<JMap.discs.filter(d => d.trait == "mine").length; f++){
	Booleans.push(true);
    }

    for(var t=JMap.discs.filter(d => d.trait == "mine").length; t<100; t++){
	Booleans.push(false);
    }
}

function Mix(){
    var ctr = Booleans.length, temp, index;
 
    while(ctr>0){
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = Booleans[ctr];
        Booleans[ctr] = Booleans[index];
        Booleans[index] = temp;
    }
    return Booleans;
}

function AddPoints(){ //Point controllers are located into the cells when game is started
    for(var x=-180; x<=180; x+=40){
	for(var y=-180; y<=180; y+=40){
	    Points.push([x,y,false,false,0,false]); //x, y, has mine?, is kicked?, number of adjacents who have mine, is flagged?
	    for(var b=0; b<Booleans.length; b++){
		for(var p=0; p<Points.length; p++){
		    if(b==p){
			Points[p][2] = Booleans[b];
		    }
		}
	    }
	}
    }
}

function FindFullAdjacents(){ //Finds the number of each square's adjacents which has mine. Corner squares have 3, edge squares have 5 and middle squares have 8 adjacents.
    for(var p=0; p<Points.length; p++){
	if(room.getScores() != null && Points[p][3] == false){
	    if(Points[p][0] >= -180 && Points[p][0] <= 180 && Points[p][1] >= -180 && Points[p][1] <= 180){
		if(p == 0){
		    if(Points[p+1][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p+10][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p+11][2] == true){
			Points[p][4]++;
		    }
		}
		if(1 <= p && p <= 8){
		    if(Points[p-1][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p+1][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p+9][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p+10][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p+11][2] == true){
			Points[p][4]++;
		    }
		}
		if(p == 9){
		    if(Points[p-1][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p+9][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p+10][2] == true){
			Points[p][4]++;
		    }
		}
		if(p == 10 || p == 20 || p == 30 || p == 40 || p == 50 || p == 60 || p == 70 || p == 80){
		    if(Points[p-10][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p-9][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p+1][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p+10][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p+11][2] == true){
			Points[p][4]++;
		    }
		}
		if((11 <= p && p <= 18) || (21 <= p && p <= 28) || (31 <= p && p <= 38) || (41 <= p && p <= 48) || (51 <= p && p <= 58) || (61 <= p && p <= 68) || (71 <= p && p <= 78) || (81 <= p && p <= 88)){
		    if(Points[p-11][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p-10][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p-9][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p-1][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p+1][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p+9][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p+10][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p+11][2] == true){
			Points[p][4]++;
		    }
		}
		if(p == 19 || p == 29 || p == 39 || p == 49 || p == 59 || p == 69 || p == 79 || p == 89){
		    if(Points[p-11][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p-10][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p-1][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p+9][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p+10][2] == true){
			Points[p][4]++;
		    }
		}
		if(p == 90){
		    if(Points[p-10][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p-9][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p+1][2] == true){
			Points[p][4]++;
		    }
		}
		if(91 <= p && p <= 98){
		    if(Points[p-11][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p-10][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p-9][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p-1][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p+1][2] == true){
			Points[p][4]++;
		    }
		}
		if(p == 99){
		    if(Points[p-11][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p-10][2] == true){
			Points[p][4]++;
		    }
		    if(Points[p-1][2] == true){
			Points[p][4]++;
		    }
		}
	    }
	    Points[p][3] == true;
	}
    }
}

function AddNumber(){ //Sets the numbers on squares as colored balls
    for(var p=0; p<Points.length; p++){
	if(room.getScores() != null){
	    if(Points[p][4] > 0 && Points[p][2] == false && pointDistance({x:Points[p][0],y:Points[p][1]},room.getPlayerDiscProperties(room.getPlayerList().filter(x=>x.team==1)[0].id)) < 40 * Math.sqrt(2)){
		if(Points[p][3] == false){
		    if(Points[p][4] == 1){
			room.setDiscProperties(JMap.discs.indexOf(indicators_1[0]),{x:Points[p][0],y:Points[p][1]});
			indicators_1.shift();
			Points[p][3] == true;
		    }
		    if(Points[p][4] == 2){
			room.setDiscProperties(JMap.discs.indexOf(indicators_2[0]),{x:Points[p][0],y:Points[p][1]});
			indicators_2.shift();
			Points[p][3] == true;
		    }
		    if(Points[p][4] == 3){
			room.setDiscProperties(JMap.discs.indexOf(indicators_3[0]),{x:Points[p][0],y:Points[p][1]});
			indicators_3.shift();
			Points[p][3] == true;
		    }
		    if(Points[p][4] == 4){
			room.setDiscProperties(JMap.discs.indexOf(indicators_4[0]),{x:Points[p][0],y:Points[p][1]});
			indicators_4.shift();
			Points[p][3] == true;
		    }
		    if(Points[p][4] == 5){
			room.setDiscProperties(JMap.discs.indexOf(indicators_5[0]),{x:Points[p][0],y:Points[p][1]});
			indicators_5.shift();
			Points[p][3] == true;
		    }
		    if(Points[p][4] == 6){
			room.setDiscProperties(JMap.discs.indexOf(indicators_6[0]),{x:Points[p][0],y:Points[p][1]});
			indicators_6.shift();
			Points[p][3] == true;
		    }
		    if(Points[p][4] == 7){
			room.setDiscProperties(JMap.discs.indexOf(indicators_7[0]),{x:Points[p][0],y:Points[p][1]});
			indicators_7.shift();
			Points[p][3] == true;
		    }
		    if(Points[p][4] == 8){
			room.setDiscProperties(JMap.discs.indexOf(indicators_8[0]),{x:Points[p][0],y:Points[p][1]});
			indicators_8.shift();
			Points[p][3] == true;
		    }
		}
	    }
	}
    }
}

function AddAllAdjacentPoints(){ //Sets all the numbers usable on squares (with respect to location of the mines), at the end of game.
    for(var p=0; p<Points.length; p++){
	if(room.getScores() != null){
	    if(Points[p][4] > 0 && Points[p][2] == false){
		if(Points[p][3] == false){
		    if(Points[p][4] == 1){
			room.setDiscProperties(JMap.discs.indexOf(indicators_1[0]),{x:Points[p][0],y:Points[p][1]});
			indicators_1.shift();
			Points[p][3] == true;
		    }
		    if(Points[p][4] == 2){
			room.setDiscProperties(JMap.discs.indexOf(indicators_2[0]),{x:Points[p][0],y:Points[p][1]});
			indicators_2.shift();
			Points[p][3] == true;
		    }
		    if(Points[p][4] == 3){
			room.setDiscProperties(JMap.discs.indexOf(indicators_3[0]),{x:Points[p][0],y:Points[p][1]});
			indicators_3.shift();
			Points[p][3] == true;
		    }
		    if(Points[p][4] == 4){
			room.setDiscProperties(JMap.discs.indexOf(indicators_4[0]),{x:Points[p][0],y:Points[p][1]});
			indicators_4.shift();
			Points[p][3] == true;
		    }
		    if(Points[p][4] == 5){
			room.setDiscProperties(JMap.discs.indexOf(indicators_5[0]),{x:Points[p][0],y:Points[p][1]});
			indicators_5.shift();
			Points[p][3] == true;
		    }
		    if(Points[p][4] == 6){
			room.setDiscProperties(JMap.discs.indexOf(indicators_6[0]),{x:Points[p][0],y:Points[p][1]});
			indicators_6.shift();
			Points[p][3] == true;
		    }
		    if(Points[p][4] == 7){
			room.setDiscProperties(JMap.discs.indexOf(indicators_7[0]),{x:Points[p][0],y:Points[p][1]});
			indicators_7.shift();
			Points[p][3] == true;
		    }
		    if(Points[p][4] == 8){
			room.setDiscProperties(JMap.discs.indexOf(indicators_8[0]),{x:Points[p][0],y:Points[p][1]});
			indicators_8.shift();
			Points[p][3] == true;
		    }
		}
	    }
	}
    }
}

function pointDistance(p1,p2){ //The distance between two points
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}

function ShowAllMines(){ //Shows all the mines after the game has been lost by the player
    for(var d=225; d<235; d++){
	for(var p=0; p<Points.filter(k => k[2] == true).length; p++){
	    if(room.getScores() != null){
		if(d-225 == p){
		    room.setDiscProperties(d,{x:Points.filter(k => k[2] == true)[p][0],y:Points.filter(k => k[2] == true)[p][1]});
		}
	    }
	}
    }
}

function DiscsInField(){ //Shows the number of total indicators (except flags) in the mine field
    return JMap.discs.filter(
	d => d.trait.slice(0,16) == "indicator_number" &&
	(-180 <= room.getDiscProperties(JMap.discs.indexOf(d)).x) &&
	(room.getDiscProperties(JMap.discs.indexOf(d)).x <= 180) &&
	(-180 <= room.getDiscProperties(JMap.discs.indexOf(d)).y) &&
	(room.getDiscProperties(JMap.discs.indexOf(d)).y <= 180)).length;
}

function SquaresWhoHaveMine(){ //Shows the number of squares with mine
    return Points.filter(p => p[2] == true).length;
}

function CheckedSquares(){ //Shows the number of squares who have been checked
    return Points.filter(p => p[3] == true).length;
}

function SquaresWhoHaveAdjacents(){ //Shows the number of squares who have adjacents with mines
    return Points.filter(p => p[4] > 0).length;
}

function SquaresWhoDontHaveAdjacents(){ //Shows the number of squares who have no adjacents with mines
    return Points.filter(p => p[4] == 0).length;
}

function CheckEnd(){ //Check game end, if all squares are checked, then player wins!
    if(room.getScores() != null){
	if(CheckedSquares() >= SquaresWhoHaveAdjacents()){
	    ShowAllMines();
	    AddAllAdjacentPoints();
	    room.setPlayerAvatar(room.getPlayerList().filter(p => p.team == 1)[0].id);
	}
    }
}

function afkKick(){ //Kicks inactive players
    var players = room.getPlayerList();
    for(let id in activities){
	for(var i=0; i<players.length; i++){
	    if(room.getScores() != null){
		if(players[i].team==1 || players[i].team==2){
		    if(Date.now() - activities[players[i].id] > 30000){
			room.kickPlayer(players[i].id,"⚠️ AFK",false);
		    }
		}
	    }
	}
    }
}

room.onPlayerBallKick = function(player){
    //console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⚽️ " + player.name + " [" + player.id + "] has kicked the ball");

    for(var p=0; p<Points.length; p++){
	if(room.getScores() != null){
	    if(room.getPlayerDiscProperties(player.id) != null){
		if(player.team == 1){
		    room.setPlayerAvatar(player.id,(CheckedSquares()).toString());
		    if(pointDistance({x:Points[p][0],y:Points[p][1]},room.getPlayerDiscProperties(player.id)) < 20){ //The cell where player is
			if(Points[p][2] == false){
			    if(Points[p][3] == false){
				AddNumber();
				Points[p][3] = true;
				Points.forEach(function(point){
				    if(point[4] > 0 && pointDistance({x:point[0],y:point[1]},room.getPlayerDiscProperties(player.id)) < 40 * Math.sqrt(2)){ //Cells who are adjacent to the player
					point[3] = true;
				    }
				});
			    }
			    else{
				room.sendAnnouncement("⚠️ This cell {" + Points[p][0] + "," + Points[p][1] + "} has already been checked!",player.id,0xFFFF00,"bold",2);
				room.setPlayerDiscProperties(player.id,{x:JMap.redSpawnPoints[0][0],y:JMap.redSpawnPoints[0][1]});
			    }
			}
			else{
			    room.sendAnnouncement("💥 You have failed! Try again!",player.id,0xFF0000,"bold",2);
			    room.setPlayerAvatar(player.id);
			    ShowAllMines();
			    AddAllAdjacentPoints();
			}
		    }
		}
	    }
	}
    }
    CheckEnd();
}

room.onPlayerJoin = function(player){
    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ➡️ " + player.name + " [" + player.id + "] has joined. (auth: " + player.auth + " | conn: " + player.conn + " | IP: " + hexToAscii(player.conn) + ")");

    if(room.getScores() == null){
	room.setPlayerTeam(player.id,1);
	room.startGame();
	room.sendAnnouncement("Welcome " + player.name + " press X to uncover the cells!",player.id,0xFFFF00,"bold",2);
    }
}

room.onPlayerLeave = function(player){
    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ➡️ " + player.name + " [" + player.id + "] has left.");

    if(room.getPlayerList().length == 0){
	room.stopGame();
    }
    delete activities[player.id];
}

room.onPlayerKicked = function(kickedPlayer,reason,ban,byPlayer){
    if(byPlayer==null){
	if(ban==0){
	    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⚠️ " + kickedPlayer.name + " [" + kickedPlayer.id + "] was kicked (" + reason + ")");
	}
	if(ban==1){
	    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⛔️ " +  kickedPlayer.name + " [" + kickedPlayer.id + "] was banned (" + reason + ")");
	}
    }
    else if(byPlayer!=null){
	if(ban==0){
	    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⚠️ " + kickedPlayer.name + " [" + kickedPlayer.id + "] was kicked by " + byPlayer.name + " [" + byPlayer.id + "] (" + reason + ")");
	}
	if(ban==1){
	    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⛔️ " + kickedPlayer.name + " [" + kickedPlayer.id + "] was banned by " + byPlayer.name + " [" + byPlayer.id + "] (" + reason + ")");
	}
    }
}

room.onPlayerChat = function(player,msg){
    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 💬 " + player.name + " [" + player.id + "]: " + msg);
    activities[player.id] = Date.now();

    for(var p=0; p<Points.length; p++){
	if(room.getScores() != null){
	    if(room.getPlayerDiscProperties(player.id) != null){
		if(player.team == 1){
		    if(pointDistance({x:Points[p][0],y:Points[p][1]},room.getPlayerDiscProperties(player.id)) < 20){
			if(msg.toLowerCase() == "!flag"){
			    room.setDiscProperties(JMap.discs.indexOf(flags[0]),{x:Points[p][0],y:Points[p][1]});
			    if(Points[p][5] == true){
				room.sendAnnouncement("This cell is already flagged!",player.id,0xFF0000,"bold",2);
			    }
			    if(Points[p][5] == false){
				Points[p][5] == true;
				room.sendAnnouncement("The cell has been flagged!",player.id,0xFF8000,"bold",2);
			    }
			    flags.shift();
			    if(flags.length == 0){
				room.sendAnnouncement("You have no flags anymore!",player.id,0xFF0000,"bold",2);
			    }
			    return false;
			}
		    }
		}
	    }
	}
    }
    if(msg.toLowerCase() == "!bb"){
	room.kickPlayer(player.id,"👋 Bye bye " + player.name + ".",false);
	return false;
    }
    else if(msg.toLowerCase() == "!contact"){
	room.sendAnnouncement("ℹ️ Your contact address",player.id,0xFFFFFF,"normal",1); //You can change this
	return false;
    }
    else if(msg.toLowerCase() == "!dc" || msg.toLowerCase() == "!discord"){
	room.sendAnnouncement("ℹ️ Our discord server: " + DiscordInviteLink,player.id,0xFFFFFF,"normal",1);
	return false;
    }
    else if(msg.toLowerCase() == "!getadmin"){ //You can change this
	room.setPlayerAdmin(player.id,!player.admin);
	return false;
    }
    else if(msg.toLowerCase() == "!gg"){
	room.kickPlayer(player.id,"👋 GGs " + player.name + "!",false);
	return false;
    }
    else if(msg.toLowerCase() == "!rr"){
	room.stopGame();
	room.startGame();
	return false;
    }
    if(player.admin == true){
	if(msg.toLowerCase() == "!clearpass"){
	    room.sendAnnouncement("✅ Password successfully removed.",player.id,0x00FF00,"normal",1);
	    return false;
	}
	else if(msg.toLowerCase() == "!commands"){
	    room.sendAnnouncement("📜 Available Commands: !bb 💥 !clearpass 💥 !contact 💥 !dc 💥 !discord 💥 !flag 💥 !getadmin 💥 !gg 💥 !pw [pass] 💥 !rr",player.id,0xFFFFFF,"normal",1);
	    return false;
	}
	else if(msg.toLowerCase().split(" ")[0] == "!pw"){
	    room.setPassword(msg.toLowerCase().split(" ")[1]);
	    room.sendAnnouncement("✅ Password successfully set: (" + msg.toLowerCase().split(" ")[1] + ")",player.id,0x00FF00,"normal",1);
	    return false;
	}
	else{
	    room.sendAnnouncement("💬 (" + new Date().toLocaleTimeString() + ") " + player.name + " [" + player.id + "]: " + msg,null,0x97FFFF,"bold",1);
	    return false;
	}
    }
    else if(player.admin == false){
	if(msg.toLowerCase() == "!commands"){
	    room.sendAnnouncement("📜 Available Commands: !bb 💥 !contact 💥 !dc 💥 !discord 💥 !flag 💥 !getadmin 💥 !gg 💥 !rr",player.id,0xFFFFFF,"normal",1);
	    return false;
	}
	else{
	    room.sendAnnouncement("💬 (" + new Date().toLocaleTimeString() + ") " + player.name + " [" + player.id + "]: " + msg,null,0xFFFFFF,"normal",1);
	    return false;
	}
    }
}

room.onPlayerTeamChange = function(changedPlayer,byPlayer){
    if(byPlayer==null){
	if(changedPlayer.team==0){
	    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔁 " + changedPlayer.name + " [" + changedPlayer.id + "] was moved to Spectators");
	}
	else if(changedPlayer.team==1){
	    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔁 " + changedPlayer.name + " [" + changedPlayer.id + "] was moved to Red");
	}
	else if(changedPlayer.team==2){
	    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔁 " + changedPlayer.name + " [" + changedPlayer.id + "] was moved to Blue");
	}
    }
    else if(byPlayer!=null){
	if(changedPlayer.team==0){
	    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔁 " + changedPlayer.name + " [" + changedPlayer.id + "] was moved to Spectators by " + byPlayer.name + " [" + byPlayer.id + "]");
	}
	else if(changedPlayer.team==1){
	    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔁 " + changedPlayer.name + " [" + changedPlayer.id + "] was moved to Red by " + byPlayer.name + " [" + byPlayer.id + "]");
	}
	else if(changedPlayer.team==2){
	    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔁 " + changedPlayer.name + " [" + changedPlayer.id + "] was moved to Blue by " + byPlayer.name + " [" + byPlayer.id + "]");
	}
	activities[byPlayer.id] = Date.now();
    }
    activities[changedPlayer.id] = Date.now();
}

room.onPlayerAdminChange = function(changedPlayer,byPlayer){
    if(byPlayer==null){
	if(changedPlayer.admin==true){
	    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔺 " + changedPlayer.name + " [" + changedPlayer.id + "] was given admin rights");
	}
	else if(changedPlayer.admin==false){
	    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔻 " + changedPlayer.name + " [" + changedPlayer.id + "]'s admin rights were taken away");
	}
    }
    else if(byPlayer!=null){
	if(changedPlayer.admin==true){
	    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔺 " + changedPlayer.name + " [" + changedPlayer.id + "] was given admin rights by " + byPlayer.name + " [" + byPlayer.id + "]");
	}
	if(changedPlayer.admin==false){
	    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔻 " + changedPlayer.name + " [" + changedPlayer.id + "]'s admin rights were taken away by " + byPlayer.name + " [" + byPlayer.id + "]");
	}
    }
};

room.onPositionsReset = function(){
    var players = room.getPlayerList();
    for(var i=0; i<players.length; i++){
	activities[players[i].id] = Date.now();
	room.setPlayerAvatar(players[i].id);
    }
}

room.onGameStart = function(byPlayer){
    if(byPlayer==null){
	console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ▶️ Game started");
    }
    else if(byPlayer!=null){
	console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ▶️ Game started by " + byPlayer.name + " [" + byPlayer.id + "]");
    }

    GenerateBooleans();
    Mix();
    AddPoints();
    FindFullAdjacents();

    indicators_1 = JMap.discs.filter(d => d.trait == "indicator_number_1"); //Number 1 indicator, small blue ball
    indicators_2 = JMap.discs.filter(d => d.trait == "indicator_number_2"); //Number 2 indicator, small green ball
    indicators_3 = JMap.discs.filter(d => d.trait == "indicator_number_3"); //Number 3 indicator, red ball
    indicators_4 = JMap.discs.filter(d => d.trait == "indicator_number_4"); //Number 4 indicator, dark blue ball
    indicators_5 = JMap.discs.filter(d => d.trait == "indicator_number_5"); //Number 5 indicator, maroon ball
    indicators_6 = JMap.discs.filter(d => d.trait == "indicator_number_6"); //Number 6 indicator, big green ball
    indicators_7 = JMap.discs.filter(d => d.trait == "indicator_number_7"); //Number 7 indicator, big black ball
    indicators_8 = JMap.discs.filter(d => d.trait == "indicator_number_8"); //Number 8 indicator, big gray ball
    flags = JMap.discs.filter(d => d.trait == "flag"); //Flag indicator, big orange ball
}

room.onGameStop = function(byPlayer){
    if(byPlayer==null){
	console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⏹ Game stopped");
    }
    else if(byPlayer!=null){
	console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⏹ Game stopped by " + byPlayer.name + " [" + byPlayer.id + "]");
    }

    Booleans = [];
    Points = [];
}

room.onGamePause = function(byPlayer){
    if(byPlayer==null){
	console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⏸ Game paused");
    }
    else if(byPlayer!=null){
	console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⏸ Game paused by " + byPlayer.name + " [" + byPlayer.id + "]");
    }
    var players = room.getPlayerList();
    for(var i=0; i<players.length; i++){
	activities[players[i].id]=Date.now();
    }
}

room.onGameUnpause = function(byPlayer){
    if(byPlayer==null){
	console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ▶️ Game unpaused");
    }
    else if(byPlayer!=null){
	console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ▶️ Game unpaused by " + byPlayer.name + " [" + byPlayer.id + "]");
    }
    var players = room.getPlayerList();
    for(var i=0; i<players.length; i++){
	activities[players[i].id]=Date.now();
    }
}

room.onPlayerActivity = function(player){
    activities[player.id] = Date.now();
}

room.onRoomLink = function(url){
    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔗 Room Link: " + url);
}

room.onStadiumChange = function(newStadiumName, byPlayer){ //Map change is not allowed.
    if(byPlayer==null){
	console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 📁 " + newStadiumName + " was loaded");
    }
    else if(byPlayer!=null){
	console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 📁 " + byPlayer.name + " [" + byPlayer.id + "] loaded " + newStadiumName);
	room.setCustomStadium(Map);
	room.setScoreLimit(0);
	room.setTimeLimit(0);
	room.setTeamsLock(0);
	room.sendAnnouncement("⛔ You are not allowed to change the map in this room!",byPlayer.id,0xFFFFFF,"normal",1);
    }
}