class Api::MessagesController < ApplicationController
    before_action :require_logged_in

    def index
        @messages = 
    end

    def show
        @message = Message.includes(:user).find_by(id: params[:id])
        render 'api/messages/show'
    end

    def create
        @message = Message.new(message_params)
        @message.user_id = current_user.id

        if @message.save
            render 'api/message/show'
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    def update
        @message = Message.find_by(id: params[:id])

        if @message.update(message_params)
            render 'api/messages/show'
        else
            render json: @message.errors.full_messages
        end
    end

    private

    def message_params
        params.require(:message).permit(:body, :user_id, :channel_id)
    end

end
