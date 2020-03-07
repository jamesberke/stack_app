json.partial! 'api/users/user', user: @user

@user.channels.each do |channel|
    json.channels do
        json.set! channel.id do
            json.extract! channel, :id, :name, :is_dm, :is_private
        end
    end
end

# dms = []
# channels = []

# @user.channels.each do |channel|
#     if channel.is_dm
#             dms.push(channel.id)
#     else
#         channels.push(channel.id)
#     end
# end

# json.direct_messages dms
# json.channels channels