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