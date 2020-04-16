# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Five whiskeys and descriptions sourced from https://www.thewhiskyexchange.com/d/872/top-10-whiskies
five_whiskeys = [
  {
    name: 'Balvenie 14 Year Old',
    description: 'A 14-year-old limited-edition Balvenie which finished its maturation in casks which had previously held Caribbean rum. Expect vanilla and toffee notes as the rum contributes extra sweetness to the flavours.',
    taste: 3,
    color: 2,
    smokiness: 1,
  },
  {
    name: 'Benromach 2011',
    description: 'A 2011 Benromach single malt, bottled exclusively for The Whisky Exchange in 2019 after eight years in a single first-fill sherry hogshead. The palate offers sweet notes of red apple, stewed fruits, white pepper and baking spices, over delicately smoky bonfire embers.',
    taste: 4,
    color: 4,
    smokiness: 2,
  },
  {
    name: 'Clynelish 14 Year Old',
    description: 'Clynelish is the successor to the now-silent Brora, built opposite the original distillery and producing a top-quality rich, smoky dram. One of the best entry-level proprietary bottlings available from any distillery.',
    taste: 3,
    color: 2,
    smokiness: 1,
  },
  {
    name: 'Dailuaine 1997',
    description: "Matured for 22 years in a single hogshead, this 1997 Dailuaine was bottled by Signatory Vintage in August 2019, exclusively for The Whisky Exchange's 20th anniversary celebrations.",
    taste: 4,
    color: 1,
    smokiness: 1,
  },
  {
    name: 'Johnnie Walker Blue Label',
    description: "Johnnie Walker's most prestigious whisky. Probably THE most famous super-premium blend, made up of the finest old-aged malt and grain whiskies. The Cristal of the blended whisky world. Blue Label’s bold, multi-layered palate and silky delivery ensure that it sits unchallenged at the top of the Johnnie Walker pile.",
    taste: 3,
    color: 3,
    smokiness: 2,
  },
]

Whiskey.create(five_whiskeys)
