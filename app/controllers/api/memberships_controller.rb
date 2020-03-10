class Api::MembershipsController < ApplicationController

    def create
        membership = Membership.new(membership_params)

        if membership.save
            render 'api/memborships/show'
        else
            render json: membership.errors.full_messages, status: 422
        end

    end

    def destroy
        membership = Membership.find_by(id: params[:id])
        @channel = Channel.find_by(name: "Global")

        if membership
            membership.delete
            render 'api/channels/show'
        else
            render json: membership.errors.full_messages, status: 422
        end

    end

    private

    def membership_params
        params.require(:membership).permit(:user_id, :channel_id)
    end

end
