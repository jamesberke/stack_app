json.partial! 'api/users/user', user: @user

# @user.channels.each do |channel|
#     if channel.is_dm
#         json.direct_messages do
#             json.set! channel.id do
#                 json.partial! 'api/channels/show'
#             end
#         end
#     else
#         json.channels do
#             json.set! channel.id do
#                 json.partial! 'api/channels/show'
#             end
#         end
#     end
# end

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