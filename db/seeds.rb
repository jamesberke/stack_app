# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Message.destroy_all
Membership.destroy_all
Channel.destroy_all
User.destroy_all

# Users seed
bot = User.create({username: "stack_bot", email: "stackbot@stack.com", password: "nomopojo"})
demo = User.create({username: "DemoUser", email: "demouser@gmail.com", password: "pleasehireme"})
me = User.create({username: "james", email: "james.berke@gmail.com", password: "imapojo"})

# Channels seed

global = Channel.create({name: "Global", 
                            description: "one big chat with everyone in it",
                            admin_id: bot.id})
jokes = Channel.create({name: "Jokes", 
                            description: "Jokes n' stuff",
                            admin_id: bot.id})
code = Channel.create({name: "Code", 
                            description: "share cool code snippets",
                            admin_id: bot.id})
dm1 = Channel.create({name: "james", 
                            description: "",
                            admin_id: bot.id,
                            is_dm: true})

# Messages seed

test1 = Message.create({body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus augue eget neque scelerisque efficitur. Aliquam at quam et urna interdum consectetur. Curabitur ultricies metus id eros luctus tempor.",
                            user_id: User.first.id,
                            channel_id: Channel.first.id})
test2 = Message.create({body: "Nunc tempus elementum congue. Sed hendrerit et nulla ac aliquam. Pellentesque ultrices, nunc non ornare mollis, diam justo interdum turpis, vel tristique nulla dolor sed tellus. Donec porta diam ac imperdiet iaculis.",
                            user_id: User.first.id,
                            channel_id: Channel.first.id})
test3 = Message.create({body: "Suspendisse potenti. Cras nec sapien sit amet turpis eleifend bibendum in at ante.",
                            user_id: User.first.id,
                            channel_id: Channel.first.id})
test4 = Message.create({body: "Suspendisse potenti. Cras nec sapien sit amet turpis eleifend bibendum in at ante.",
                            user_id: User.first.id,
                            channel_id: jokes.id})
test5 = Message.create({body: "[] === 0 but [] != []",
                            user_id: User.first.id,
                            channel_id: code.id})

#Memberships seed

mem1 = Membership.create({user_id: bot.id, channel_id: Channel.first.id})
mem2 = Membership.create({user_id: demo.id, channel_id: Channel.first.id})
mem8 = Membership.create({user_id: me.id, channel_id: Channel.first.id})
mem3 = Membership.create({user_id: bot.id, channel_id: Channel.all[1].id})
mem3 = Membership.create({user_id: demo.id, channel_id: Channel.all[1].id})
mem4 = Membership.create({user_id: me.id, channel_id: Channel.all[1].id})
mem5 = Membership.create({user_id: bot.id, channel_id: Channel.all[2].id})
mem9 = Membership.create({user_id: demo.id, channel_id: Channel.all[2].id})
mem6 = Membership.create({user_id: User.last.id, channel_id: Channel.all[2].id})
mem6 = Membership.create({user_id: User.first.id, channel_id: Channel.last.id})
mem6 = Membership.create({user_id: User.last.id, channel_id: Channel.last.id})