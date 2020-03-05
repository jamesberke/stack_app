class Api::ChannelsController < ApplicationController

    def show
        @channel = Channel.includes(:users, :messages).find_by(id: params[:id])
        render 'api/channels/show'
    end

    def create

    end

    def destroy

    end

    private

    def channel_params
        params.require(:channel).permit(:name, :description, :admin_id, :is_dm, :is_private)
    end

end
