new_membership = @channel.memberships.select{ |membership| current_user.id == membership.user_id }

unless new_membership.empty?
    json.membership do
        json.partial! 'api/memberships/membership', membership: new_membership[0]
    end
end

json.channel do
    json.partial! 'api/channels/channel', channel: @channel
end

json.messages do
    @channel.messages.each do |message|
        json.set! message.id do
            json.partial! 'api/messages/message', message: message
        end
    end
end

json.users do
    @channel.users.each do |user|
       json.set! user.id do
            json.extract! user, :username
        end
    end
end