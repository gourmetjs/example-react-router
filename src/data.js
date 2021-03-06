// Wine information from http://www.wine.com

const data = (() => {
  var data = {
    varietals: [{
      id: "cab",
      name: "Cabernet Sauvignon"
    }, {
      id: "pinot",
      name: "Pinot Noir"
    }, {
      id: "syrah",
      name: "Syrah/Shiraz"
    }, {
      id: "merlot",
      name: "Merlot"
    }],

    wines: [{
      id: "137467",
      varietalId: "cab",
      name: "Stag's Leap Wine Cellars Artemis Cabernet Sauvignon 2012",
      photo: GM.URL("./images/137467.jpg"),
      price: 55.99,
      acclaim: {
        TP: 91,
        RP: 90
      },
      note: "This Artemis Cabernet Sauvignon offers inviting aromas of black cherry and plum with hints of vanilla. On the palate, the wine has a soft entry with ripe mixed berry and plum flavors. The wine has a medium-bodied mouthfeel with round, satin-like tannins.\nEnjoy this wine with grilled tri-tip, braised short ribs, or pasta with wild mushrooms and prosciutto.\nBlend: 89% Cabernet Sauvignon, 9% Merlot, 2% Malbec"
    }, {
      id: "130265",
      varietalId: "cab",
      name: "Oberon Cabernet Sauvignon 2012",
      photo: GM.URL("./images/130265.jpg"),
      price: 19.99,
      acclaim: {
        WE: 90
      },
      note: "Classic Napa Valley with deep, rich color and concentrated black fruit character. Lush, dark berry and cassis flavors complemented by 12 months of French oak barrel aging and a supple tannin structure.\nPair with steak, lamb and duck dishes, as well as flavorful cheeses."
    }, {
      id: "129729",
      varietalId: "cab",
      name: "Avalon California Cabernet Sauvignon 2012",
      photo: GM.URL("./images/129729.jpg"),
      price: 10.99,
      acclaim: {
        WE: 88
      },
      note: "The Avalon California Cabernet shows bright vibrant aromas of blueberry jam, strawberry tart, and boysenberries with hints of vanilla and toasted oak. A dash of Zinfandel give this wine a hint of spice that is followed by rich black cherries, red raspberries, and juicy ripe plums on the long smooth finish.\nPair with grilled prime sirloin burgers with sharp cheddar cheese, brick oven baked Margherita pizza, smoked or rotisserie chicken."
    }, {
      id: "135441",
      varietalId: "cab",
      name: "Joseph Phelps Cabernet Sauvignon 2012",
      photo: GM.URL("./images/135441.jpg"),
      price: 59.99,
      acclaim: {
        ST: 91
      },
      note: "The 2012 vintage marks the fortieth Napa Valley Cabernet Sauvignon release from Joseph Phelps Vineyards. This latest bottling highlights beautiful aromatics of dark fruit, cigar box, dried herbs, graphite notes and pain grille. Expressive Bing cherry, licorice, blueberry and blackberry layer this silky smooth wine of great depth and personality. Richly nuanced with supple tannins and a lingering velvety finish.\nBlend: 91% Cabernet Sauvignon, 6% Merlot, 1% Petit Verdot, 1% Malbec and 1% Cabernet Franc"
    }, {
      id: "132852",
      varietalId: "pinot",
      name: "Belle Glos Las Alturas Vineyard Pinot Noir 2013",
      photo: GM.URL("./images/132852.jpg"),
      price: 39.99,
      acclaim: {
        WS: 93
      },
      note: "Dense, concentrated ruby color, hinting at the dark berry fruits and rich, textural components in this wine. On the nose, aromas of raspberry, wild blackberry and a slight earthiness. The palate is supple and layered with exotic spices, a rich meatiness, ripe plum, currant and black cherry flavors. The ripe tannins are nicely balanced with acidity, and the finish is long and fulfilling."
    }, {
      id: "140226",
      varietalId: "pinot",
      name: "Ritual Casablanca Valley Pinot Noir 2014",
      photo: GM.URL("./images/140226.jpg"),
      price: 18.99,
      acclaim: {
        WW: 92
      },
      note: "Ritual Pinot Noir 2014 opens with fresh and generous fruity aromas of cherries and raspberries. Refreshing and juicy with a medium body. The palate is round, smooth and balanced with a silky, velvety finish."
    }, {
      id: "131349",
      varietalId: "syrah",
      name: "Two Hands Bella's Garden Shiraz 2012",
      photo: GM.URL("./images/131349.jpg"),
      price: 69.99,
      acclaim: {
        WS: 95,
        RP: 93,
        "W&S": 90
      },
      note: "#16 Wine Spectator Top 100 of 2014\nDeep dark red color. Black core, bright red meniscus. Aromas bursts out of the glass almost in a brooding, elegant manner. Juicy red and black fruits with notes of five spice, earth, black pepper and sandalwood. On the palate fresh juicy fruits erupt and roll across the palate as only a great Barossa Shiraz can. Lovely tactile nature with grippy fine grained tannins. Palate rolls on and on with subtle chocolate and spice notes. A brilliant vintage of Barossa Shiraz yet feels moody and tightly coiled. Watch it fan out after a couple of years in bottle. This will be a classic."
    }, {
      id: "136808",
      varietalId: "syrah",
      name: "Andrew Murray Tous les Jours Syrah 2013",
      photo: GM.URL("./images/136808.jpg"),
      price: 15.99,
      acclaim: {
        WE: 93
      },
      note: "We strive to craft a quintessentially Santa Ynez Valley Syrah, where we have the ability to show both the cool and warm climate characteristics of Syrah. The 2013 vintage is remarkably dark and full-bodied, and yet it has such gentle tannins. It is truly a pleasure to drink, especially at the price. Lots of fruit and spices here... no need to wax poetic about this one as it tastes just plain yummy."
    }, {
      id: "123995",
      varietalId: "syrah",
      name: "Qupe Syrah Bien Nacido Hillside Estate Vineyard 2008",
      photo: GM.URL("./images/123995.jpg"),
      price: 15.99,
      acclaim: {
        V: 94,
        WE: 92,
        ST: 92,
        "W&S": 91
      },
      note: "The Hillside Estate Syrah shows notes of black pepper, raspberries, cola and Provençal herbs. The flavors round out into friendly accents of sweet French oak. This is a high-quality wines that could benefit from a few years in the cellar."
    }, {
      id: "132325",
      varietalId: "merlot",
      name: "Clos du Val Merlot 2011",
      photo: GM.URL("./images/132325.jpg"),
      price: 24.99,
      acclaim: {
        WE: 90
      },
      note: "Characteristic of Clos Du Val's world-class style, the 2011 Merlot continues the winery’s tradition of producing truly elegant wines of balance and complexity. Refined and plum in color, it offers complex yet vibrant aromas of black currant, dark chocolate, nutmeg and toffee. The mouth-feel is silky and evolved, with flavors of black cherry and blueberry complimented by a silky, lingering finish."
    }, {
      id: "128778",
      varietalId: "merlot",
      name: "Tilia Merlot 2013",
      photo: GM.URL("./images/128778.jpg"),
      price: 10.99,
      acclaim: {
        WS: 88
      },
      note: "The nose offers aromas of juicy black cherries and black plums with hints of sweet spice and vanilla. On the palate the wine is soft and elegant with black cherry and plum flavors and fine, supple tannins."
    }],

    winesById: {},

    getWine: function(id) {
      return this.winesById[id];
    },

    findWines: function(varietalId) {
      return this.wines.filter(wine => !varietalId || wine.varietalId === varietalId);
    }
  };

  data.wines.forEach(wine => {
    data.winesById[wine.id] = wine;
  });

  data.varietals.forEach(varietal => {
    varietal.count = data.findWines(varietal.id).length;
  });

  return data;
})();

export default data;
