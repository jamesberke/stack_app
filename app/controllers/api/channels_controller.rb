class Api::ChannelsController < ApplicationController

    def show
        @channel = Channel.includes(:users, :messages).find_by(id: params[:id])
        render 'api/channels/show'
    end

    def create
        @channel = Channel.new(channel_params)
        @channel.admin_id = current_user.id

        if @channel.save

        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def destroy

    end

    private

    def channel_params
        params.require(:channel).permit(:name, :description, :admin_id, :is_dm, :is_private)
    end

end
