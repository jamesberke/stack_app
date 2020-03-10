json.partial! 'api/users/user', user: @user

@user.channels.each do |channel|
    json.channels do
        json.set! channel.id do
            json.extract! channel, :id, :name, :is_dm, :is_private
        end
    end
end

@user.memberships.each do |membership|
    json.memberships do
        json.set! membership.id do
            json.extract! membership, :id, :user_id, :channel_id
        end
    end
end

