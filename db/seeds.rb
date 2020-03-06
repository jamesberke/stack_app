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
demo = User.create({username: "DemoUser", email: "demouser@gmail.com", password: "pleasehireme"})
me = User.create({username: "james", email: "james.berke@gmail.com", password: "imapojo"})

# Channels seed

global = Channel.create({name: "Global", 
                            description: "one big chat with everyone in it",
                            admin_id: User.last.id})

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

#Memberships seed

mem1 = Membership.create({user_id: User.first.id, channel_id: Channel.first.id})
mem2 = Membership.create({user_id: User.last.id, channel_id: Channel.first.id})