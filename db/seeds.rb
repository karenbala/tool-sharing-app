# wipe current db
users = User.destroy_all
tools = Tool.destroy_all
requests = Request.destroy_all

user_1 = User.create(
  first_name: "Jeannie",
  last_name: "Bourke",
  address: "61 Lowell Street",
  city: "South Portland",
  state: "Maine",
  zip: "04106",
  description: "I love building home projects for myslef and others.",
  username: "greatbourke",
  email: "jbtools@email.com",
  password: "password"
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
  email: "mgmaine@email.com",
  password: "password"
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
  email: "dbmadabouttools@email.com",
  password: "password"
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
  user: user_1,
  borrower_id: user_3.id,
  available: true
)

tool_2 = Tool.find_or_create_by(
  power_type: "Hand Tool",
  name: "Hammer",
  image_url: "https://www.truevalue.com/media/catalog/product/208280.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&dpr=2%202x",
  product: "Framing Hammer",
  brand: "Milwaukee",
  size: "5 inches x 16 inches",
  weight: "19 oz",
  description: "This hammer has a wood handle and a magnetic head. It also has a milled face and a magnetic nail set.",
  user: user_1,
  borrower_id: user_2.id,
  available: true
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
  user: user_3,
  borrower_id: user_1.id,
  available: true
)

request_1 = Request.create(
  owner_id: user_3.id,
  tool_id: tool_3.id,
  borrower_id: user_2.id
)

request_2 = Request.create(
  owner_id: user_2.id,
  tool_id: tool_3.id,
  borrower_id: user_3.id
)

request_3 = Request.create(
  owner_id: user_1.id,
  tool_id: user_1.id,
  borrower_id: user_2.id
)

# request_4 = Request.create(
#   owner_id: 4,
#   tool_id: 3,
#   borrower_id: 5
# )

# request_5 = Request.create(
#   owner_id: 5,
#   tool_id: 8,
#   borrower_id: 6
# )

# request_6 = Request.create(
#   owner_id: 6,
#   tool_id: 11,
#   borrower_id: 5
# )

# request_7 = Request.create(
#   owner_id: 4,
#   tool_id: 4,
#   borrower_id: 1
# )

# Request.create(
#   owner_id: 4,
#   tool_id: 4,
#   borrower_id: 1
# )


puts "#{User.count} number of Users created"
puts "#{Tool.count} number of Tools created"
puts "#{Request.count} number of Requests created"

