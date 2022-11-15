# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_1 = User.create(
  first_name: "Jeannie",
  last_name: "Bourke",
  address: "61 Lowell Street",
  city: "South Portland",
  state: "Maine",
  zip: "04106",
  description: "I love building home projects for myslef and others.",
  username: "greatbourke",
  email: "jbtools@email.com"
)

user_2 = User.create(
  first_name: "Marcia",
  last_name: "Grant",
  address: "59 Lowell Street",
  city: "South Portland",
  state: "Maine",
  zip: "04106",
  description: "My tools are your tools.",
  username: "coldwinter",
  email: "mgmaine@email.com"
)

user_3 = User.create(
  first_name: "Dan",
  last_name: "Broder",
  address: "35 Lowell Street",
  city: "South Portland",
  state: "Maine",
  zip: "04106",
  description: "I have a basement full of tools. I love sharing my tools with my neighbors, as long as they bring them back!",
  username: "tubsandtools",
  email: "dbmadabouttools@email.com"
)

tool_1 = Tool.find_or_create_by(
  power_type: "Hand Tool",
  name: "Screwdriver",
  image_url: "https://www.truevalue.com/media/catalog/product/204015.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
  product: "Philips head",
  brand: "Stanley",
  size: "4 inches",
  weight: "1/4 lb",
  description: "The best screwdriver to get simple tasks done around the house.",
  user: user_1
)

tool_2 = Tool.find_or_create_by(
  power_type: "Hand Tool",
  name: "Hammer",
  image_url: "https://images.thdstatic.com/productImages/b42731ad-1c27-463d-b706-6c12ce1aa696/svn/milwaukee-framing-hammers-48-22-9419-4f_145.jpg",
  product: "Framing Hammer",
  brand: "Milwaukee",
  size: "5 inches x 16 inches",
  weight: "19 oz",
  description: "This hammer has a wood handle and a magnetic head. It also has a milled face and a magnetic nail set.",
  user: user_2
)

tool_3 = Tool.find_or_create_by(
  power_type: "Hand Tool",
  name: "Wrench",
  image_url: "https://www.truevalue.com/media/catalog/product/206560.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
  product: "Adjustable Wrench",
  brand: "Crescent",
  size: "variety",
  weight: "19 oz",
  description: "This is a set of Crescent wrenches to help with any household tasks. The sizes are 6,8,10 inches.",
  user: user_3
)

