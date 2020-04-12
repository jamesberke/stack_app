class Api::ChannelsController < ApplicationController

    def index
        @channels = Channel.all
        render 'api/channels/index'
    end

    def show
        @channel = Channel.find_by(id: params[:id])
        render 'api/channels/show'
    end

    def create
        @channel = Channel.new(channel_params)
        @channel.admin_id = current_user.id
        stack_bot = User.find_by(username: "stack_bot")

        if @channel.save
            Membership.create({user_id: stack_bot.id, 
                                channel_id: @channel.id})
            Membership.create({user_id: @channel.admin_id, 
                                channel_id: @channel.id})
            Message.create({body: "Welcome to #{@channel.name}",
                            user_id: stack_bot.id,
                            channel_id: @channel.id})
                            
            if @channel.is_dm
                Membership.create({user_id: @channel.name,
                                    channel_id: @channel.id})
            end

            render 'api/channels/show'
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])

        if @channel
            @channel.delete
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    private

    def channel_params
        params.require(:channel).permit(:name, :description, :is_dm, :is_private)
    end

end
